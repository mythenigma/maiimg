# 微信端 / 画廊 逻辑流程图

```
用户打开链接
     │
     ▼
┌─────────────────────────────────────────────────────────────────┐
│  链接来自哪个域名？                                                │
└─────────────────────────────────────────────────────────────────┘
     │
     ├──────────────────────────┬──────────────────────────────────┐
     ▼                          ▼                                  │
 maiimg.com              maiimg.sendpdfonline.com                   │
     │                          │                                  │
     ▼                          ▼                                  │
 是否在微信内？              是否在微信内？                           │
     │                          │                                  │
     ├── 是 ──► 不展示 gallery     ├── 是 ──► 正常展示 gallery        │
     │         重定向到：           │         （或 wechat 指引页）     │
     │         maiimg.sendpdfonline.com/wechat.html?base=...&#ID   │
     │                          │                                  │
     └── 否 ──► 正常展示 gallery   └── 否 ──► 正常展示 gallery        │
                  （URL 取 ID）              （URL 或 localStorage 取 ID）
```

---

## 详细流程

### 一、用户在微信里打开 maiimg.com/gallery/A

```
maiimg.com/gallery/A (微信内)
        │
        ▼
  gallery 检测：WeChat ✓ + 域名 = maiimg.com
        │
        ▼
  立即重定向 → maiimg.sendpdfonline.com/wechat.html?base=https://maiimg.com#A
        │
        ▼
  用户看到「请在浏览器中打开」指引页（wechat.html）
        │
        ├─ 点「在浏览器中打开」→ 系统浏览器打开同一 wechat 地址
        │         │
        │         ▼
        │  wechat 检测：有 ID + 非微信 + 域名 = sendpdfonline.com
        │         │
        │         ▼
        │  写入 localStorage(maiimg_gallery_id) → 跳转到 /gallery/
        │         │
        │         ▼
        │  gallery 在 sendpdfonline.com 从 localStorage 取 ID → 展示图片
        │
        └─ 点「复制链接」→ 复制 sendpdfonline.com/gallery/（同源）或 base/gallery/#A（跨域）
```

### 二、用户在微信里打开 maiimg.sendpdfonline.com/gallery/A（或 /gallery/ + localStorage）

```
maiimg.sendpdfonline.com/gallery/... (微信内)
        │
        ▼
  gallery 检测：WeChat ✓ + 域名 = sendpdfonline.com → 不重定向
        │
        ▼
  getGalleryId()：hash → path → localStorage（仅此域）
        │
        ▼
  正常请求 API、展示画廊
```

### 三、ID 来源规则（getGalleryId）

| 域名                     | 微信内是否重定向 | ID 来源顺序 |
|--------------------------|------------------|-------------|
| maiimg.com               | 是 → wechat 页   | 仅 URL：hash → path/query，**不用** localStorage |
| maiimg.sendpdfonline.com | 否，直接展示     | hash → path/query → **localStorage** |

---

## 小结

- **maiimg.com**：微信内不展示，只做跳转到 sendpdfonline.com/wechat.html。
- **maiimg.sendpdfonline.com**：微信内也正常展示 gallery；wechat 页在「已用浏览器打开」时通过 localStorage 把 ID 传给同域 gallery，再跳 /gallery/ 展示图片。
