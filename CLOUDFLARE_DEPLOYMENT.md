# 📦 Cloudflare Pages 部署指南

本文档详细说明如何将 MaiIMG 项目部署到 Cloudflare Pages，并配置重写规则以实现图片链接的友好 URL。

## 🎯 目标

将类似 `https://maiimg.com/pic/CF` 的链接重写为 `https://maiimg.com/view.html?id=CF`，使图片能通过 `view.html` 页面正确展示。

## 📁 项目文件结构

```
maiimg/
├── index.html              # 主页面，生成图片链接和二维码
├── view.html               # 图片展示页面
├── tracking.html           # 追踪页面
├── qr-styles.css          # 样式文件
├── i18n.js               # 国际化脚本
├── tracking-i18n.js      # 追踪页面国际化
├── qr-language.js        # 二维码语言支持
├── _redirects            # ✅ Cloudflare Pages 重写规则
├── _headers              # ✅ 安全和缓存头设置
├── test-redirects.html   # ✅ 重写规则测试页面
└── README.md             # 项目说明
```

## 🔧 核心配置文件

### `_redirects` 文件

这是 Cloudflare Pages 的重写规则配置文件：

```
# 图片展示重写规则 - 核心功能
/pic/:id               /view.html?id=:id           200

# 追踪页面重写规则
/track/:trackingCode   /tracking.html?id=:trackingCode   200

# 主页重写规则
/                      /index.html                 200
/qr                    /index.html                 200
/generate              /index.html                 200
/gallery               /index.html                 200

# HTTPS 和 www 重定向
http://maiimg.com/*    https://maiimg.com/:splat   301!
https://www.maiimg.com/* https://maiimg.com/:splat  301!
```

### `_headers` 文件

安全和性能优化头配置：

```
# 全局安全头
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin

# 静态资源缓存
*.css
  Cache-Control: public, max-age=31536000, immutable

*.js
  Cache-Control: public, max-age=31536000, immutable

# 图片文件缓存
*.png, *.jpg, *.jpeg, *.gif, *.webp
  Cache-Control: public, max-age=86400

# HTML 文件短缓存
*.html
  Cache-Control: public, max-age=3600

# 特殊页面设置
/view.html, /tracking.html
  X-Robots-Tag: noindex, nofollow
  Cache-Control: no-cache, no-store, must-revalidate
```

## 🚀 部署步骤

### 1. 准备 Git 仓库

确保您的项目已提交到 Git 仓库（如 GitHub）：

```bash
git add .
git commit -m "添加 Cloudflare Pages 重写规则配置"
git push origin main
```

### 2. 连接到 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Pages** 部分
3. 点击 **创建项目**
4. 选择 **连接到 Git**
5. 授权并选择您的 GitHub 仓库
6. 选择 `maiimg` 仓库

### 3. 配置构建设置

在 Cloudflare Pages 的构建配置中：

- **项目名称**: `maiimg` (或您喜欢的名称)
- **生产分支**: `main`
- **构建命令**: 留空 (这是静态网站)
- **构建输出目录**: `/` (根目录)
- **根目录**: `/` (根目录)

### 4. 环境变量配置

如果需要，可以在 Pages 设置中添加环境变量：

```
NODE_ENV=production
CLOUDFLARE_ENV=pages
```

### 5. 自定义域名设置

1. 在 Cloudflare Pages 项目设置中
2. 转到 **自定义域**
3. 添加您的域名 `maiimg.com`
4. 配置 DNS 记录

## 🧪 测试重写规则

### 自动测试

访问 `https://yourdomain.com/test-redirects.html` 来测试重写规则。

### 手动测试

测试以下 URL 是否正确重写：

1. **图片展示测试**:
   - 访问: `https://maiimg.com/pic/A`
   - 应该显示: `view.html` 页面，地址栏保持 `/pic/A`
   - 页面应正确解析 `id=A` 参数

2. **追踪页面测试**:
   - 访问: `https://maiimg.com/track/TEST123`
   - 应该显示: `tracking.html` 页面
   - 页面应正确解析 `id=TEST123` 参数

3. **主页重定向测试**:
   - 访问: `https://maiimg.com/qr`
   - 应该显示: `index.html` 页面

## 🔍 工作原理

### 链接生成过程

1. 用户在 `index.html` 上传图片并设置参数
2. JavaScript 调用 API 创建数据库记录，获得数字 ID（如 `123`）
3. 数字 ID 编码为字母 ID（如 `123` → `ABC`）
4. 生成友好链接：`https://maiimg.com/pic/ABC`

### 链接访问过程

1. 用户访问 `https://maiimg.com/pic/ABC`
2. Cloudflare Pages 重写规则将其重写为 `/view.html?id=ABC`
3. `view.html` 从 URL 参数获取 `id=ABC`
4. JavaScript 解码 `ABC` → `123`
5. 调用 API 获取图片数据并展示

### 关键代码位置

**生成链接 (index.html:915)**:
```javascript
document.getElementById("webinputpic").value = `https://maiimg.com/pic/${generatedTypeA}`;
```

**解析链接 (view.html:697-698)**:
```javascript
const urlParams = new URLSearchParams(window.location.search);
const encodedId = urlParams.get('id');
```

## 🛠️ 故障排除

### 常见问题

1. **重写规则不生效**
   - 确认 `_redirects` 文件在根目录
   - 检查文件格式是否正确（无 BOM，LF 换行）
   - 重新部署项目

2. **页面显示 404**
   - 检查 `view.html` 是否存在
   - 确认路径参数格式正确

3. **参数解析失败**
   - 检查 JavaScript 控制台错误
   - 确认 URL 参数传递正确

### 调试步骤

1. 打开浏览器开发者工具
2. 访问测试链接
3. 检查 **Network** 标签中的重定向记录
4. 查看 **Console** 中的 JavaScript 日志

## 📊 性能优化

### 缓存策略

- 静态资源（CSS/JS）：长期缓存（1年）
- 图片文件：中期缓存（1天）
- HTML 文件：短期缓存（1小时）
- 动态页面：无缓存

### 安全设置

- 防止页面被嵌入框架
- 防止 MIME 类型嗅探
- XSS 保护
- 严格的 Referrer 策略

## 📈 监控和分析

### Cloudflare Analytics

在 Cloudflare Dashboard 中查看：
- 页面访问统计
- 性能指标
- 安全事件

### 自定义追踪

通过 `tracking.html` 页面提供详细的访问分析。

## 🔄 更新和维护

### 代码更新

1. 修改本地文件
2. 提交到 Git
3. Cloudflare Pages 自动部署

### 配置更新

修改 `_redirects` 或 `_headers` 文件后需要重新部署。

## 📞 支持

如果遇到问题，请检查：
1. [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
2. [重写规则语法](https://developers.cloudflare.com/pages/platform/redirects/)
3. 项目测试页面: `/test-redirects.html`

---

**部署完成后，您的图片链接将能够通过友好的 URL 访问，提供更好的用户体验！** 🎉
