// Internationalization system for QR Image Generator
class I18n {
    constructor() {
      this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage();
      this.translations = {
        en: {
          // SEO
          seo: {
            title: "Maiimg Hosting - Free Image Upload, Hosting & QR Share",
            description: "Upload images in seconds with Maiimg Hosting. Free image hosting with direct links, QR sharing, view limits, and expiration controls.",
            keywords: "maiimg hosting,free image hosting,image upload,direct image link,qr image sharing,temporary image hosting"
          },
  
          // Navigation
          nav: {
            title: "Maiimg Hosting"
          },
          
          // Language options
          language: {
            english: "English",
            chinese: "中文",
            taiwan: "中華民國",
            japanese: "日本語",
            german: "Deutsch",
            korean: "한국어",
            french: "Français",
            italian: "Italiano"
          },
          
          // Hero section
          hero: {
            title: "Upload & Share Images",
            subtitle: "Turn your images into shareable QR codes with advanced tracking and analytics"
          },
          
          // Upload section
          upload: {
            title: "Image Upload Center",
            subtitle: "Drag & drop your images or click to browse",
            dropText: "Drop or tap to upload",
            supportText: "PNG, JPG, JPEG, GIF, WebP, MP4, MOV, WebM, M4V • Images up to 50MB • Videos up to 100MB / 120s • Up to 25 files",
            ready: "Ready to upload media"
          },
  
          flow: {
            step1: "Upload Images",
            step2: "Set Access",
            step3: "Generate Link & QR"
          },
          
          // Badges
          badges: {
            secure: "Secure",
            fast: "Fast",
            free: "Free"
          },
          
          // Features
          features: {
            viewLimit: {
              title: "View Limit",
              placeholder: "Max views (required)",
              description: "Enter max number of views"
            },
            timeControl: {
              title: "Time Control",
              placeholder: "Seconds per view (required)",
              description: "Enter viewing duration in seconds"
            },
            accessControl: {
              title: "Access Control",
              description: "Set both view limit and per-view duration in one panel"
            },
            expiration: {
              title: "Expiration",
              select: "Select expiration",
              option1h: "1 hour",
              option3h: "3 hours",
              option24h: "24 hours",
              option5d: "5 days",
              custom: "Custom days",
              customPlaceholder: "Custom days",
              unlimited: "Unlimited",
              timezonePlaceholder: "Time zone",
              utcUnlimited: "UTC expiry time: Unlimited",
              utcNone: "UTC expiry time: -",
              utcPrefix: "UTC expiry time",
              localNone: "Local time: -",
              localPrefix: "Local time"
            },
            description: {
              title: "Description",
              placeholder: "Add a description (required)",
              description: "Enter image description"
            },
            generate: {
              title: "Generate Link & QR",
              button: "Create Link & QR Code",
              status: "Fill all fields and upload images first"
            }
          },
          
          // Tools section
          tools: {
            title: "Other QR Tools",
            subtitle: "Quick access to other QR code generators",
            wifi: "WiFi QR",
            sms: "SMS QR",
            url: "URL QR",
            phone: "Phone QR"
          },
          
          // Results section
          results: {
            success: "QR Code Generated Successfully!",
            subtitle: "Your image gallery link and QR code are ready to share",
            stats: {
              images: "Images",
              views: "Views",
              seconds: "Seconds",
              expiration: "Expiration"
            },
            shareLink: "Share Link",
            qrCode: "QR Code",
            openGallery: "Open Gallery",
            createAnother: "Create Another"
          },
          
          // Modals
          modals: {
            wifi: {
              title: "WiFi QR Code Generator",
              networkName: "Network Name (SSID)",
              networkPlaceholder: "Enter WiFi network name",
              securityType: "Security Type",
              wpa: "WPA/WPA2",
              wep: "WEP",
              noPassword: "No Password",
              password: "Password",
              passwordPlaceholder: "Enter WiFi password",
              generate: "Generate WiFi QR Code"
            },
            sms: {
              title: "SMS QR Code Generator",
              phoneNumber: "Phone Number",
              phonePlaceholder: "Enter phone number",
              messageContent: "Message Content",
              messagePlaceholder: "Enter your message",
              generate: "Generate SMS QR Code"
            },
            phone: {
              title: "Phone QR Code Generator",
              phoneNumber: "Phone Number",
              phonePlaceholder: "Enter phone number",
              generate: "Generate Phone QR Code"
            },
            url: {
              title: "URL QR Code Generator",
              websiteUrl: "Website URL",
              urlPlaceholder: "Enter website URL",
              generate: "Generate URL QR Code"
            },
            common: {
              qrPreview: "QR Code Preview",
              qrPlaceholder: "Your QR code will appear here"
            }
          },
          
          // Messages
          messages: {
            copied: "Copied to clipboard!",
            uploadProgress: "Uploading files...",
            uploadComplete: "Upload complete!",
            uploadError: "Upload failed. Please try again.",
            fillAllFields: "Please fill all required fields",
            selectFiles: "Please select files first",
            generating: "Generating QR code...",
            linkGenerated: "Link and QR code generated successfully!"
          },
  
          // Auth
          auth: {
            login: "Login",
            logout: "Logout",
            signInTitle: "Sign in to MaiIMG",
            continueGoogle: "Continue with Google",
            orEmail: "or sign in with email",
            emailPlaceholder: "Email address",
            passwordPlaceholder: "Password",
            signIn: "Sign In",
            forgotPassword: "Forgot password?",
            noAccount: "Don't have an account?",
            createAccount: "Create Account",
            hasAccount: "Already have an account?",
            confirmPassword: "Confirm password",
            passwordMin: "Password (min 6 characters)",
            resetTitle: "Reset Password",
            resetDesc: "Enter your email and we'll send you a link to reset your password.",
            sendReset: "Send Reset Email",
            backToSignIn: "Back to Sign In",
            verifyTitle: "Verify Email",
            verifyHeading: "Verify your email",
            verifyDesc: "We've sent a verification email to {email}. Please check your inbox and click the link to verify.",
            resendVerification: "Resend Verification Email",
            iveVerified: "I've Verified",
            emailSent: "Email Sent!",
            resetSent: "Reset email sent! Check your inbox.",
            passwordsNoMatch: "Passwords do not match",
            passwordTooShort: "Password must be at least 6 characters",
            invalidCredential: "Invalid email or password",
            userNotFound: "No account with this email",
            wrongPassword: "Incorrect password",
            tooManyRequests: "Too many attempts. Try again later.",
            emailInUse: "This email is already registered. Try signing in.",
            weakPassword: "Password is too weak (min 6 characters)",
            invalidEmail: "Invalid email address",
            emailNotVerified: "Email not yet verified. Please check your inbox.",
            waitBeforeResend: "Please wait before requesting again",
            loginNudgeTitle: "Get Better Control with an Account",
            loginNudgeBody: "Sign in to manage galleries, restore links, and view access records from your dashboard.",
            loginNudgeSignIn: "Sign In",
            loginNudgeLater: "Maybe Later"
          },
          dash: {
            title: "My Galleries",
            newGallery: "New Gallery",
            total: "Total",
            active: "Active",
            deleted: "Deleted",
            cancel: "Cancel",
            refresh: "Refresh",
            loading: "Loading galleries...",
            noGalleries: "No galleries yet",
            createFirst: "Create your first gallery on the main page.",
            colCaption: "Caption",
            colViews: "Views",
            colLink: "Link",
            colStatus: "Status",
            colDuration: "Duration",
            colExpiration: "Expiration",
            unlimited: "Unlimited",
            never: "Never",
            colActions: "Actions",
            replaceMode: "Replace Mode",
            replaceHint: "Select target A, then source B. All of B's settings will be copied to A.",
            replaceConfirm: "Replace",
            statusActive: "Active",
            statusDeleted: "Deleted",
            statusExpired: "Expired",
            accessRecord: "Access Record",
            restore: "Restore",
            restoreHint: "Gallery #{id} selected as target (A). Now pick a source (B) to copy from.",
            confirmDelete: "Delete gallery #{id}? This will set views to 0.",
            confirmReplace: "Replace #{target} (A) with all settings from #{source} (B)?\n\nA will get B's: images, views ({views}), caption, password, expiration.\nA's link stays the same.",
            deletedToast: "Gallery #{id} deleted",
            replacedToast: "#{target} replaced with #{source}'s settings",
            pageTitle: "Dashboard - Maiimg Hosting",
            helpTitle: "How Replace Mode Works",
            helpDesc: "Select a deleted gallery as target (A), then pick an active gallery as source (B). B's content and settings will be copied to A, while A's original link stays the same. This lets you reuse an existing link with new content.",
            expirationTz: "Expiration timezone",
            mobileRoleTarget: "Target A",
            mobileRoleSource: "Source B",
            mobileSetTarget: "Set as A",
            mobileSetSource: "Set as B",
            mobileStep1: "Step 1: Select target A",
            mobileStep2: "Step 2: Select source B",
            mobileHint: "Choose A and B from cards below.",
            mobilePickedTarget: "Selected A: #{target}. Now pick B.",
            mobilePickedSource: "Selected B: #{source}. Now pick A.",
            mobileReady: "Ready to replace",
            mobileReadySummary: "A #{target} will be replaced by B #{source}."
          }
        },
        
        zh: {
          // SEO
          seo: {
            title: "麦瓜图床 - 免费图片上传与分享图床，支持二维码外链",
            description: "麦瓜图床提供稳定、快速、免费的图片上传与分享服务，支持二维码生成、外链分享、访问控制与过期设置。",
            keywords: "麦瓜图床,免费图床,图片上传,图片外链,二维码图床,图片分享,临时图床,图床"
          },
  
          // Navigation
          nav: {
            title: "麦瓜图床"
          },
          
          // Language options
          language: {
            english: "English",
            chinese: "中文",
            taiwan: "中華民國",
            japanese: "日本語",
            german: "Deutsch",
            korean: "한국어",
            french: "Français",
            italian: "Italiano"
          },
          
          // Hero section
          hero: {
            title: "上传和分享图片",
            subtitle: "将您的图片转换为可分享的二维码，带有高级跟踪和分析功能"
          },
          
          // Upload section
          upload: {
            title: "图片上传中心",
            subtitle: "拖放您的图片或点击浏览",
            dropText: "拖放或点击上传",
            supportText: "PNG、JPG、JPEG、GIF、WebP、MP4、MOV、WebM、M4V • 图片最大50MB • 视频最大100MB / 120秒 • 最多25个文件",
            ready: "准备上传媒体"
          },
  
          flow: {
            step1: "上传图片",
            step2: "设置访问",
            step3: "生成链接和二维码"
          },
          
          // Badges
          badges: {
            secure: "安全",
            fast: "快速",
            free: "免费"
          },
          
          // Features
          features: {
            viewLimit: {
              title: "查看限制",
              placeholder: "最大查看次数（必填）",
              description: "输入最大查看次数"
            },
            timeControl: {
              title: "时间控制",
              placeholder: "每次查看秒数（必填）",
              description: "输入查看持续时间（秒）"
            },
            accessControl: {
              title: "访问控制",
              description: "在同一面板中设置查看次数和每次查看时长"
            },
            expiration: {
              title: "过期时间",
              select: "选择过期时间",
              option1h: "1小时",
              option3h: "3小时",
              option24h: "24小时",
              option5d: "5天",
              custom: "自定义天数",
              customPlaceholder: "自定义天数",
              unlimited: "不限",
              timezonePlaceholder: "时区",
              utcUnlimited: "UTC 过期时间：不限",
              utcNone: "UTC 过期时间：-",
              utcPrefix: "UTC 过期时间",
              localNone: "本地时间：-",
              localPrefix: "本地时间"
            },
            description: {
              title: "描述",
              placeholder: "添加描述（必填）",
              description: "输入图片描述"
            },
            generate: {
              title: "生成链接和二维码",
              button: "创建链接和二维码",
              status: "请先填写所有字段并上传图片"
            }
          },
          
          // Tools section
          tools: {
            title: "其他二维码工具",
            subtitle: "快速访问其他二维码生成器",
            wifi: "WiFi二维码",
            sms: "短信二维码",
            url: "网址二维码",
            phone: "电话二维码"
          },
          
          // Results section
          results: {
            success: "二维码生成成功！",
            subtitle: "您的图片画廊链接和二维码已准备好分享",
            stats: {
              images: "图片",
              views: "查看",
              seconds: "秒",
              expiration: "过期"
            },
            shareLink: "分享链接",
            qrCode: "二维码",
            openGallery: "打开画廊",
            createAnother: "创建另一个"
          },
          
          // Modals
          modals: {
            wifi: {
              title: "WiFi二维码生成器",
              networkName: "网络名称（SSID）",
              networkPlaceholder: "输入WiFi网络名称",
              securityType: "安全类型",
              wpa: "WPA/WPA2",
              wep: "WEP",
              noPassword: "无密码",
              password: "密码",
              passwordPlaceholder: "输入WiFi密码",
              generate: "生成WiFi二维码"
            },
            sms: {
              title: "短信二维码生成器",
              phoneNumber: "电话号码",
              phonePlaceholder: "输入电话号码",
              messageContent: "消息内容",
              messagePlaceholder: "输入您的消息",
              generate: "生成短信二维码"
            },
            phone: {
              title: "电话二维码生成器",
              phoneNumber: "电话号码",
              phonePlaceholder: "输入电话号码",
              generate: "生成电话二维码"
            },
            url: {
              title: "网址二维码生成器",
              websiteUrl: "网站网址",
              urlPlaceholder: "输入网站网址",
              generate: "生成网址二维码"
            },
            common: {
              qrPreview: "二维码预览",
              qrPlaceholder: "您的二维码将显示在这里"
            }
          },
          
          // Messages
          messages: {
            copied: "已复制到剪贴板！",
            uploadProgress: "正在上传文件...",
            uploadComplete: "上传完成！",
            uploadError: "上传失败。请重试。",
            fillAllFields: "请填写所有必填字段",
            selectFiles: "请先选择文件",
            generating: "正在生成二维码...",
            linkGenerated: "链接和二维码生成成功！"
          },
  
          auth: {
            login: "登录",
            logout: "退出",
            signInTitle: "登录 MaiIMG",
            continueGoogle: "使用 Google 登录",
            orEmail: "或使用邮箱登录",
            emailPlaceholder: "邮箱地址",
            passwordPlaceholder: "密码",
            signIn: "登录",
            forgotPassword: "忘记密码？",
            noAccount: "还没有账号？",
            createAccount: "注册账号",
            hasAccount: "已有账号？",
            confirmPassword: "确认密码",
            passwordMin: "密码（至少6位）",
            resetTitle: "重置密码",
            resetDesc: "输入您的邮箱，我们将发送重置密码链接。",
            sendReset: "发送重置邮件",
            backToSignIn: "返回登录",
            verifyTitle: "验证邮箱",
            verifyHeading: "验证您的邮箱",
            verifyDesc: "我们已向 {email} 发送了验证邮件，请查收并点击链接完成验证。",
            resendVerification: "重新发送验证邮件",
            iveVerified: "我已验证",
            emailSent: "邮件已发送！",
            resetSent: "重置邮件已发送，请查收！",
            passwordsNoMatch: "两次密码输入不一致",
            passwordTooShort: "密码至少需要6个字符",
            invalidCredential: "邮箱或密码错误",
            userNotFound: "该邮箱未注册",
            wrongPassword: "密码错误",
            tooManyRequests: "尝试次数过多，请稍后再试。",
            emailInUse: "该邮箱已注册，请直接登录。",
            weakPassword: "密码强度不够（至少6位）",
            invalidEmail: "邮箱格式不正确",
            emailNotVerified: "邮箱尚未验证，请查收验证邮件。",
            waitBeforeResend: "请稍后再发送",
            loginNudgeTitle: "登录后可获得更完整的管理能力",
            loginNudgeBody: "登录后可在 Dashboard 管理图集、恢复链接并查看访问记录。",
            loginNudgeSignIn: "去登录",
            loginNudgeLater: "稍后再说"
          },
          dash: {
            title: "我的图集",
            newGallery: "新建图集",
            total: "总计",
            active: "有效",
            deleted: "已删除",
            cancel: "取消",
            refresh: "刷新",
            loading: "加载图集中...",
            noGalleries: "暂无图集",
            createFirst: "前往主页创建您的第一个图集。",
            colCaption: "标题",
            colViews: "查看次数",
            colLink: "链接",
            colStatus: "状态",
            colDuration: "每次时长",
            colExpiration: "到期时间",
            unlimited: "无限制",
            never: "永不过期",
            colActions: "操作",
            replaceMode: "替换模式",
            replaceHint: "选择目标A，再选来源B。B的所有设置将复制到A。",
            replaceConfirm: "替换",
            statusActive: "有效",
            statusDeleted: "已删除",
            statusExpired: "已过期",
            accessRecord: "访问记录",
            restore: "恢复",
            restoreHint: "图集 #{id} 已选为目标(A)，请选择来源(B)进行复制。",
            confirmDelete: "删除图集 #{id}？查看次数将设为0。",
            confirmReplace: "将 #{source}(B) 的所有设置替换到 #{target}(A)？\n\nA将获得B的：图片、查看次数({views})、标题、密码、过期时间。\nA的链接保持不变。",
            deletedToast: "图集 #{id} 已删除",
            replacedToast: "#{target} 已替换为 #{source} 的设置",
            pageTitle: "控制面板 - Maiimg图床",
            helpTitle: "替换模式说明",
            helpDesc: "选择一个已删除的图集作为目标(A)，再选一个有效图集作为来源(B)。B的内容和设置将复制到A，而A的原始链接保持不变。这样你可以用新内容复用已有链接。",
            expirationTz: "到期时间时区",
            mobileRoleTarget: "目标A",
            mobileRoleSource: "来源B",
            mobileSetTarget: "设为A",
            mobileSetSource: "设为B",
            mobileStep1: "步骤1：选择目标A",
            mobileStep2: "步骤2：选择来源B",
            mobileHint: "请在下方卡片中选择A和B。",
            mobilePickedTarget: "已选择A：#{target}，现在请选择B。",
            mobilePickedSource: "已选择B：#{source}，现在请选择A。",
            mobileReady: "可以替换",
            mobileReadySummary: "A #{target} 将被 B #{source} 替换。"
          }
        },
  
        tw: {
          // SEO
          seo: {
            title: "圖片二維碼生成器 - 上傳和分享圖片",
            description: "即時上傳與分享圖片，提供安全、快速、免費的圖片服務與二維碼。",
            keywords: "image hosting,image upload,photo sharing,image qr code,free image host,secure image sharing"
          },
  
          // Navigation
          nav: {
            title: "麥瓜圖床"
          },
          
          // Language options
          language: {
            english: "English",
            chinese: "中文",
            taiwan: "中華民國",
            japanese: "日本語",
            german: "Deutsch",
            korean: "한국어",
            french: "Français",
            italian: "Italiano"
          },
          
          // Hero section
          hero: {
            title: "上傳和分享圖片",
            subtitle: "將您的圖片轉換為可分享的二維碼，帶有高級跟蹤和分析功能"
          },
          
          // Upload section
          upload: {
            title: "圖片上傳中心",
            subtitle: "拖放您的圖片或點擊瀏覽",
            dropText: "拖放或點擊上傳",
            supportText: "PNG、JPG、JPEG、GIF、WebP、MP4、MOV、WebM、M4V • 圖片最大50MB • 影片最大100MB / 120秒 • 最多25個檔案",
            ready: "準備上傳媒體"
          },
  
          flow: {
            step1: "上傳圖片",
            step2: "設定存取",
            step3: "生成連結與二維碼"
          },
          
          // Badges
          badges: {
            secure: "安全",
            fast: "快速",
            free: "免費"
          },
          
          // Features
          features: {
            viewLimit: {
              title: "檢視限制",
              placeholder: "最大檢視次數（必填）",
              description: "輸入最大檢視次數"
            },
            timeControl: {
              title: "時間控制",
              placeholder: "每次檢視秒數（必填）",
              description: "輸入檢視持續時間（秒）"
            },
            accessControl: {
              title: "存取控制",
              description: "在同一面板中設定檢視次數與每次檢視時長"
            },
            expiration: {
              title: "到期時間",
              select: "選擇到期時間",
              option1h: "1小時",
              option3h: "3小時",
              option24h: "24小時",
              option5d: "5天",
              custom: "自訂天數",
              customPlaceholder: "自訂天數",
              unlimited: "不限",
              timezonePlaceholder: "時區",
              utcUnlimited: "UTC 到期時間：不限",
              utcNone: "UTC 到期時間：-",
              utcPrefix: "UTC 到期時間",
              localNone: "本地時間：-",
              localPrefix: "本地時間"
            },
            description: {
              title: "描述",
              placeholder: "新增描述（必填）",
              description: "輸入圖片描述"
            },
            generate: {
              title: "生成連結和二維碼",
              button: "建立連結和二維碼",
              status: "請先填寫所有欄位並上傳圖片"
            }
          },
          
          // Tools section
          tools: {
            title: "其他二維碼工具",
            subtitle: "快速存取其他二維碼生成器",
            wifi: "WiFi二維碼",
            sms: "簡訊二維碼",
            url: "網址二維碼",
            phone: "電話二維碼"
          },
          
          // Results section
          results: {
            success: "二維碼生成成功！",
            subtitle: "您的圖片畫廊連結和二維碼已準備好分享",
            stats: {
              images: "圖片",
              views: "檢視",
              seconds: "秒",
              expiration: "到期"
            },
            shareLink: "分享連結",
            qrCode: "二維碼",
            openGallery: "開啟畫廊",
            createAnother: "建立另一個"
          },
          
          // Modals
          modals: {
            wifi: {
              title: "WiFi二維碼生成器",
              networkName: "網路名稱（SSID）",
              networkPlaceholder: "輸入WiFi網路名稱",
              securityType: "安全類型",
              wpa: "WPA/WPA2",
              wep: "WEP",
              noPassword: "無密碼",
              password: "密碼",
              passwordPlaceholder: "輸入WiFi密碼",
              generate: "生成WiFi二維碼"
            },
            sms: {
              title: "簡訊二維碼生成器",
              phoneNumber: "電話號碼",
              phonePlaceholder: "輸入電話號碼",
              messageContent: "訊息內容",
              messagePlaceholder: "輸入您的訊息",
              generate: "生成簡訊二維碼"
            },
            phone: {
              title: "電話二維碼生成器",
              phoneNumber: "電話號碼",
              phonePlaceholder: "輸入電話號碼",
              generate: "生成電話二維碼"
            },
            url: {
              title: "網址二維碼生成器",
              websiteUrl: "網站網址",
              urlPlaceholder: "輸入網站網址",
              generate: "生成網址二維碼"
            },
            common: {
              qrPreview: "二維碼預覽",
              qrPlaceholder: "您的二維碼將顯示在這裡"
            }
          },
          
          // Messages
          messages: {
            copied: "已複製到剪貼板！",
            uploadProgress: "正在上傳檔案...",
            uploadComplete: "上傳完成！",
            uploadError: "上傳失敗。請重試。",
            fillAllFields: "請填寫所有必填欄位",
            selectFiles: "請先選擇檔案",
            generating: "正在生成二維碼...",
            linkGenerated: "連結和二維碼生成成功！"
          },
  
          auth: {
            login: "登入",
            logout: "登出",
            signInTitle: "登入 MaiIMG",
            continueGoogle: "使用 Google 登入",
            orEmail: "或使用電子郵件登入",
            emailPlaceholder: "電子郵件",
            passwordPlaceholder: "密碼",
            signIn: "登入",
            forgotPassword: "忘記密碼？",
            noAccount: "還沒有帳號？",
            createAccount: "建立帳號",
            hasAccount: "已有帳號？",
            confirmPassword: "確認密碼",
            passwordMin: "密碼（至少6位）",
            resetTitle: "重設密碼",
            resetDesc: "輸入您的電子郵件，我們將發送重設密碼連結。",
            sendReset: "發送重設郵件",
            backToSignIn: "返回登入",
            verifyTitle: "驗證信箱",
            verifyHeading: "驗證您的信箱",
            verifyDesc: "我們已向 {email} 發送驗證郵件，請查收並點擊連結完成驗證。",
            resendVerification: "重新發送驗證郵件",
            iveVerified: "我已驗證",
            emailSent: "郵件已發送！",
            resetSent: "重設郵件已發送，請查收！",
            passwordsNoMatch: "兩次密碼輸入不一致",
            passwordTooShort: "密碼至少需要6個字元",
            invalidCredential: "電子郵件或密碼錯誤",
            userNotFound: "該信箱未註冊",
            wrongPassword: "密碼錯誤",
            tooManyRequests: "嘗試次數過多，請稍後再試。",
            emailInUse: "該信箱已註冊，請直接登入。",
            weakPassword: "密碼強度不夠（至少6位）",
            invalidEmail: "信箱格式不正確",
            emailNotVerified: "信箱尚未驗證，請查收驗證郵件。",
            waitBeforeResend: "請稍後再發送",
            loginNudgeTitle: "登入可獲得更完整的管理能力",
            loginNudgeBody: "登入後可在 Dashboard 管理圖集、恢復連結並查看存取記錄。",
            loginNudgeSignIn: "去登入",
            loginNudgeLater: "稍後再說"
          },
          dash: {
            title: "我的圖集",
            newGallery: "新建圖集",
            total: "總計",
            active: "有效",
            deleted: "已刪除",
            cancel: "取消",
            refresh: "重新整理",
            loading: "載入圖集中...",
            noGalleries: "暫無圖集",
            createFirst: "前往首頁建立您的第一個圖集。",
            colCaption: "標題",
            colViews: "查看次數",
            colLink: "連結",
            colStatus: "狀態",
            colDuration: "每次時長",
            colExpiration: "到期時間",
            unlimited: "無限制",
            never: "永不過期",
            colActions: "操作",
            replaceMode: "替換模式",
            replaceHint: "選擇目標A，再選來源B。B的所有設定將複製到A。",
            replaceConfirm: "替換",
            statusActive: "有效",
            statusDeleted: "已刪除",
            statusExpired: "已過期",
            accessRecord: "存取記錄",
            restore: "恢復",
            restoreHint: "圖集 #{id} 已選為目標(A)，請選擇來源(B)進行複製。",
            confirmDelete: "刪除圖集 #{id}？查看次數將設為0。",
            confirmReplace: "將 #{source}(B) 的所有設定替換到 #{target}(A)？\n\nA將獲得B的：圖片、查看次數({views})、標題、密碼、過期時間。\nA的連結保持不變。",
            deletedToast: "圖集 #{id} 已刪除",
            replacedToast: "#{target} 已替換為 #{source} 的設定",
            pageTitle: "控制面板 - Maiimg圖床",
            helpTitle: "替換模式說明",
            helpDesc: "選擇一個已刪除的圖集作為目標(A)，再選一個有效圖集作為來源(B)。B的內容和設定將複製到A，而A的原始連結保持不變。這樣您可以用新內容複用已有連結。",
            expirationTz: "到期時間時區",
            mobileRoleTarget: "目標A",
            mobileRoleSource: "來源B",
            mobileSetTarget: "設為A",
            mobileSetSource: "設為B",
            mobileStep1: "步驟1：選擇目標A",
            mobileStep2: "步驟2：選擇來源B",
            mobileHint: "請在下方卡片中選擇A和B。",
            mobilePickedTarget: "已選擇A：#{target}，現在請選B。",
            mobilePickedSource: "已選擇B：#{source}，現在請選A。",
            mobileReady: "可進行替換",
            mobileReadySummary: "A #{target} 將被 B #{source} 替換。"
          }
        },
  
        ja: {
          // SEO
          seo: {
            title: "画像QRコード生成器 - 画像をアップロードして共有",
            description: "QRコード付きで画像をすぐにアップロード・共有。安全で高速な無料画像ホスティング。",
            keywords: "image hosting,image upload,photo sharing,image qr code,free image host,secure image sharing"
          },
  
          // Navigation
          nav: {
            title: "麦瓜图床"
          },
          
          // Language options
          language: {
            english: "English",
            chinese: "中文",
            taiwan: "中華民國",
            japanese: "日本語",
            german: "Deutsch",
            korean: "한국어",
            french: "Français",
            italian: "Italiano"
          },
          
          // Hero section
          hero: {
            title: "画像をアップロードして共有",
            subtitle: "画像を共有可能なQRコードに変換し、高度な追跡と分析機能を提供"
          },
          
          // Upload section
          upload: {
            title: "画像アップロードセンター",
            subtitle: "画像をドラッグ&ドロップするかクリックして参照",
            dropText: "ここに画像をドロップするかクリックしてアップロード",
            supportText: "対応形式：PNG、JPG、JPEG、GIF、WebP、MP4、MOV、WebM、M4V • 画像は最大50MB • 動画は最大100MB / 120秒 • 最大25ファイル",
            ready: "メディアのアップロード準備完了"
          },
  
          flow: {
            step1: "画像をアップロード",
            step2: "アクセス設定",
            step3: "リンクとQRを作成"
          },
          
          // Badges
          badges: {
            secure: "安全",
            fast: "高速",
            free: "無料"
          },
          
          // Features
          features: {
            viewLimit: {
              title: "表示制限",
              placeholder: "最大表示回数（必須）",
              description: "最大表示回数を入力"
            },
            timeControl: {
              title: "時間制御",
              placeholder: "表示時間（秒）（必須）",
              description: "表示継続時間（秒）を入力"
            },
            accessControl: {
              title: "アクセス制御",
              description: "同じパネルで表示回数と表示秒数を設定"
            },
            expiration: {
              title: "有効期限",
              select: "有効期限を選択",
              option1h: "1時間",
              option3h: "3時間",
              option24h: "24時間",
              option5d: "5日",
              custom: "カスタム日数",
              customPlaceholder: "カスタム日数",
              unlimited: "無制限",
              timezonePlaceholder: "タイムゾーン",
              utcUnlimited: "UTC有効期限: 無制限",
              utcNone: "UTC有効期限: -",
              utcPrefix: "UTC有効期限",
              localNone: "ローカル時間: -",
              localPrefix: "ローカル時間"
            },
            description: {
              title: "説明",
              placeholder: "説明を追加（必須）",
              description: "画像の説明を入力"
            },
            generate: {
              title: "リンクとQRコードを生成",
              button: "リンクとQRコードを作成",
              status: "すべてのフィールドを入力し、画像をアップロードしてください"
            }
          },
          
          // Tools section
          tools: {
            title: "その他のQRツール",
            subtitle: "他のQRコードジェネレーターへの簡単アクセス",
            wifi: "WiFi QR",
            sms: "SMS QR",
            url: "URL QR",
            phone: "電話 QR"
          },
          
          // Results section
          results: {
            success: "QRコードの生成が完了しました！",
            subtitle: "画像ギャラリーのリンクとQRコードが共有準備完了",
            stats: {
              images: "画像",
              views: "表示",
              seconds: "秒",
              expiration: "有効期限"
            },
            shareLink: "共有リンク",
            qrCode: "QRコード",
            openGallery: "ギャラリーを開く",
            createAnother: "新規作成"
          },
          
          // Modals
          modals: {
            wifi: {
              title: "WiFi QRコードジェネレーター",
              networkName: "ネットワーク名（SSID）",
              networkPlaceholder: "WiFiネットワーク名を入力",
              securityType: "セキュリティタイプ",
              wpa: "WPA/WPA2",
              wep: "WEP",
              noPassword: "パスワードなし",
              password: "パスワード",
              passwordPlaceholder: "WiFiパスワードを入力",
              generate: "WiFi QRコードを生成"
            },
            sms: {
              title: "SMS QRコードジェネレーター",
              phoneNumber: "電話番号",
              phonePlaceholder: "電話番号を入力",
              messageContent: "メッセージ内容",
              messagePlaceholder: "メッセージを入力",
              generate: "SMS QRコードを生成"
            },
            phone: {
              title: "電話 QRコードジェネレーター",
              phoneNumber: "電話番号",
              phonePlaceholder: "電話番号を入力",
              generate: "電話 QRコードを生成"
            },
            url: {
              title: "URL QRコードジェネレーター",
              websiteUrl: "ウェブサイトURL",
              urlPlaceholder: "ウェブサイトURLを入力",
              generate: "URL QRコードを生成"
            },
            common: {
              qrPreview: "QRコードプレビュー",
              qrPlaceholder: "QRコードがここに表示されます"
            }
          },
          
          // Messages
          messages: {
            copied: "クリップボードにコピーしました！",
            uploadProgress: "ファイルをアップロード中...",
            uploadComplete: "アップロード完了！",
            uploadError: "アップロードに失敗しました。再試行してください。",
            fillAllFields: "すべての必須フィールドを入力してください",
            selectFiles: "最初にファイルを選択してください",
            generating: "QRコードを生成中...",
            linkGenerated: "リンクとQRコードの生成が完了しました！"
          },
  
          auth: {
            login: "ログイン",
            logout: "ログアウト",
            signInTitle: "MaiIMG にログイン",
            continueGoogle: "Google でログイン",
            orEmail: "またはメールでログイン",
            emailPlaceholder: "メールアドレス",
            passwordPlaceholder: "パスワード",
            signIn: "ログイン",
            forgotPassword: "パスワードをお忘れですか？",
            noAccount: "アカウントをお持ちでないですか？",
            createAccount: "アカウント作成",
            hasAccount: "すでにアカウントをお持ちですか？",
            confirmPassword: "パスワード確認",
            passwordMin: "パスワード（6文字以上）",
            resetTitle: "パスワードリセット",
            resetDesc: "メールアドレスを入力してください。パスワードリセットリンクをお送りします。",
            sendReset: "リセットメールを送信",
            backToSignIn: "ログインに戻る",
            verifyTitle: "メール確認",
            verifyHeading: "メールを確認してください",
            verifyDesc: "{email} に確認メールを送信しました。受信トレイを確認し、リンクをクリックして確認を完了してください。",
            resendVerification: "確認メールを再送信",
            iveVerified: "確認しました",
            emailSent: "メール送信完了！",
            resetSent: "リセットメールを送信しました。受信トレイを確認してください。",
            passwordsNoMatch: "パスワードが一致しません",
            passwordTooShort: "パスワードは6文字以上必要です",
            invalidCredential: "メールアドレスまたはパスワードが正しくありません",
            userNotFound: "このメールアドレスのアカウントはありません",
            wrongPassword: "パスワードが正しくありません",
            tooManyRequests: "試行回数が多すぎます。しばらくしてからお試しください。",
            emailInUse: "このメールは既に登録されています。ログインしてください。",
            weakPassword: "パスワードが弱すぎます（6文字以上）",
            invalidEmail: "メールアドレスの形式が正しくありません",
            emailNotVerified: "メールがまだ確認されていません。受信トレイを確認してください。",
            waitBeforeResend: "しばらくお待ちください",
            loginNudgeTitle: "アカウントでより便利に管理できます",
            loginNudgeBody: "ログインすると、ダッシュボードでギャラリー管理・リンク復元・アクセス記録確認が可能です。",
            loginNudgeSignIn: "ログイン",
            loginNudgeLater: "後で"
          },
          dash: {
            title: "マイギャラリー",
            newGallery: "新規ギャラリー",
            total: "合計",
            active: "有効",
            deleted: "削除済み",
            cancel: "キャンセル",
            refresh: "更新",
            loading: "ギャラリーを読み込み中...",
            noGalleries: "ギャラリーがありません",
            createFirst: "メインページで最初のギャラリーを作成してください。",
            colCaption: "キャプション",
            colViews: "閲覧数",
            colLink: "リンク",
            colStatus: "ステータス",
            colDuration: "表示時間",
            colExpiration: "有効期限",
            unlimited: "無制限",
            never: "期限なし",
            colActions: "操作",
            replaceMode: "置換モード",
            replaceHint: "ターゲットAを選び、次にソースBを選択。Bの全設定がAにコピーされます。",
            replaceConfirm: "置換",
            statusActive: "有効",
            statusDeleted: "削除済み",
            statusExpired: "期限切れ",
            accessRecord: "アクセス記録",
            restore: "復元",
            restoreHint: "ギャラリー #{id} をターゲット(A)に選択しました。コピー元(B)を選んでください。",
            confirmDelete: "ギャラリー #{id} を削除しますか？閲覧数が0に設定されます。",
            confirmReplace: "#{target}(A) を #{source}(B) の全設定で置換しますか？\n\nAはBの画像、閲覧数({views})、キャプション、パスワード、有効期限を取得します。\nAのリンクは変わりません。",
            deletedToast: "ギャラリー #{id} を削除しました",
            replacedToast: "#{target} を #{source} の設定で置換しました",
            pageTitle: "ダッシュボード - Maiimgホスティング",
            helpTitle: "置換モードの使い方",
            helpDesc: "削除済みのギャラリーをターゲット(A)に選び、有効なギャラリーをソース(B)に選択します。Bの内容と設定がAにコピーされ、Aの元のリンクはそのまま維持されます。既存のリンクを新しい内容で再利用できます。",
            expirationTz: "有効期限のタイムゾーン",
            mobileRoleTarget: "ターゲットA",
            mobileRoleSource: "ソースB",
            mobileSetTarget: "Aに設定",
            mobileSetSource: "Bに設定",
            mobileStep1: "ステップ1：ターゲットAを選択",
            mobileStep2: "ステップ2：ソースBを選択",
            mobileHint: "下のカードからAとBを選択してください。",
            mobilePickedTarget: "Aを選択済み：#{target}。次にBを選択。",
            mobilePickedSource: "Bを選択済み：#{source}。次にAを選択。",
            mobileReady: "置換の準備完了",
            mobileReadySummary: "A #{target} は B #{source} に置換されます。"
          }
        },
  
        de: {
          // SEO
          seo: {
            title: "Bild-QR-Generator - Bilder hochladen und teilen",
            description: "Bilder sofort mit QR-Codes hochladen und teilen. Sicheres, schnelles und kostenloses Bildhosting.",
            keywords: "image hosting,image upload,photo sharing,image qr code,free image host,secure image sharing"
          },
  
          // Navigation
          nav: {
            title: "Maiimg"
          },
          
          // Language options
          language: {
            english: "English",
            chinese: "中文",
            taiwan: "中華民國",
            japanese: "日本語",
            german: "Deutsch",
            korean: "한국어",
            french: "Français",
            italian: "Italiano"
          },
          
          // Hero section
          hero: {
            title: "Bilder hochladen und teilen",
            subtitle: "Wandeln Sie Ihre Bilder in teilbare QR-Codes mit erweiterten Tracking- und Analysefunktionen um"
          },
          
          // Upload section
          upload: {
            title: "Bild-Upload-Center",
            subtitle: "Ziehen Sie Ihre Bilder hierher oder klicken Sie zum Durchsuchen",
            dropText: "Bilder hier ablegen oder zum Hochladen klicken",
            supportText: "Unterstützt: PNG, JPG, JPEG, GIF, WebP, MP4, MOV, WebM, M4V • Bilder bis 50MB • Videos bis 100MB / 120s • Bis zu 25 Dateien",
            ready: "Bereit zum Hochladen von Medien"
          },
  
          flow: {
            step1: "Bilder hochladen",
            step2: "Zugriff festlegen",
            step3: "Link & QR erstellen"
          },
          
          // Badges
          badges: {
            secure: "Sicher",
            fast: "Schnell",
            free: "Kostenlos"
          },
          
          // Features
          features: {
            viewLimit: {
              title: "Anzeige-Limit",
              placeholder: "Max. Aufrufe (erforderlich)",
              description: "Maximale Anzahl der Aufrufe eingeben"
            },
            timeControl: {
              title: "Zeitsteuerung",
              placeholder: "Sekunden pro Aufruf (erforderlich)",
              description: "Anzeigedauer in Sekunden eingeben"
            },
            accessControl: {
              title: "Zugriffskontrolle",
              description: "Ansichtslimit und Anzeigedauer in einem Bereich festlegen"
            },
            expiration: {
              title: "Ablaufzeit",
              select: "Ablaufzeit wählen",
              option1h: "1 Stunde",
              option3h: "3 Stunden",
              option24h: "24 Stunden",
              option5d: "5 Tage",
              custom: "Benutzerdefinierte Tage",
              customPlaceholder: "Benutzerdefinierte Tage",
              unlimited: "Unbegrenzt",
              timezonePlaceholder: "Zeitzone",
              utcUnlimited: "UTC-Ablaufzeit: Unbegrenzt",
              utcNone: "UTC-Ablaufzeit: -",
              utcPrefix: "UTC-Ablaufzeit",
              localNone: "Lokale Zeit: -",
              localPrefix: "Lokale Zeit"
            },
            description: {
              title: "Beschreibung",
              placeholder: "Beschreibung hinzufügen (erforderlich)",
              description: "Bildbeschreibung eingeben"
            },
            generate: {
              title: "Link und QR generieren",
              button: "Link und QR-Code erstellen",
              status: "Bitte füllen Sie alle Felder aus und laden Sie Bilder hoch"
            }
          },
          
          // Tools section
          tools: {
            title: "Andere QR-Tools",
            subtitle: "Schneller Zugriff auf andere QR-Code-Generatoren",
            wifi: "WiFi QR",
            sms: "SMS QR",
            url: "URL QR",
            phone: "Telefon QR"
          },
          
          // Results section
          results: {
            success: "QR-Code erfolgreich generiert!",
            subtitle: "Ihr Bildergalerie-Link und QR-Code sind bereit zum Teilen",
            stats: {
              images: "Bilder",
              views: "Aufrufe",
              seconds: "Sekunden",
              expiration: "Ablauf"
            },
            shareLink: "Link teilen",
            qrCode: "QR-Code",
            openGallery: "Galerie öffnen",
            createAnother: "Neuen erstellen"
          },
          
          // Modals
          modals: {
            wifi: {
              title: "WiFi QR-Code-Generator",
              networkName: "Netzwerkname (SSID)",
              networkPlaceholder: "WiFi-Netzwerkname eingeben",
              securityType: "Sicherheitstyp",
              wpa: "WPA/WPA2",
              wep: "WEP",
              noPassword: "Kein Passwort",
              password: "Passwort",
              passwordPlaceholder: "WiFi-Passwort eingeben",
              generate: "WiFi QR-Code generieren"
            },
            sms: {
              title: "SMS QR-Code-Generator",
              phoneNumber: "Telefonnummer",
              phonePlaceholder: "Telefonnummer eingeben",
              messageContent: "Nachrichteninhalt",
              messagePlaceholder: "Ihre Nachricht eingeben",
              generate: "SMS QR-Code generieren"
            },
            phone: {
              title: "Telefon QR-Code-Generator",
              phoneNumber: "Telefonnummer",
              phonePlaceholder: "Telefonnummer eingeben",
              generate: "Telefon QR-Code generieren"
            },
            url: {
              title: "URL QR-Code-Generator",
              websiteUrl: "Website-URL",
              urlPlaceholder: "Website-URL eingeben",
              generate: "URL QR-Code generieren"
            },
            common: {
              qrPreview: "QR-Code-Vorschau",
              qrPlaceholder: "Ihr QR-Code wird hier angezeigt"
            }
          },
          
          // Messages
          messages: {
            copied: "In die Zwischenablage kopiert!",
            uploadProgress: "Dateien werden hochgeladen...",
            uploadComplete: "Upload abgeschlossen!",
            uploadError: "Upload fehlgeschlagen. Bitte versuchen Sie es erneut.",
            fillAllFields: "Bitte füllen Sie alle erforderlichen Felder aus",
            selectFiles: "Bitte wählen Sie zuerst Dateien aus",
            generating: "QR-Code wird generiert...",
            linkGenerated: "Link und QR-Code erfolgreich generiert!"
          },
  
          auth: {
            login: "Anmelden",
            logout: "Abmelden",
            signInTitle: "Bei MaiIMG anmelden",
            continueGoogle: "Mit Google fortfahren",
            orEmail: "oder mit E-Mail anmelden",
            emailPlaceholder: "E-Mail-Adresse",
            passwordPlaceholder: "Passwort",
            signIn: "Anmelden",
            forgotPassword: "Passwort vergessen?",
            noAccount: "Noch kein Konto?",
            createAccount: "Konto erstellen",
            hasAccount: "Bereits ein Konto?",
            confirmPassword: "Passwort bestätigen",
            passwordMin: "Passwort (mind. 6 Zeichen)",
            resetTitle: "Passwort zurücksetzen",
            resetDesc: "Geben Sie Ihre E-Mail ein. Wir senden Ihnen einen Link zum Zurücksetzen.",
            sendReset: "Reset-E-Mail senden",
            backToSignIn: "Zurück zur Anmeldung",
            verifyTitle: "E-Mail bestätigen",
            verifyHeading: "Bestätigen Sie Ihre E-Mail",
            verifyDesc: "Wir haben eine Bestätigungs-E-Mail an {email} gesendet. Bitte überprüfen Sie Ihren Posteingang.",
            resendVerification: "Bestätigungs-E-Mail erneut senden",
            iveVerified: "Ich habe bestätigt",
            emailSent: "E-Mail gesendet!",
            resetSent: "Reset-E-Mail gesendet! Überprüfen Sie Ihren Posteingang.",
            passwordsNoMatch: "Passwörter stimmen nicht überein",
            passwordTooShort: "Passwort muss mindestens 6 Zeichen lang sein",
            invalidCredential: "Ungültige E-Mail oder Passwort",
            userNotFound: "Kein Konto mit dieser E-Mail",
            wrongPassword: "Falsches Passwort",
            tooManyRequests: "Zu viele Versuche. Bitte versuchen Sie es später.",
            emailInUse: "Diese E-Mail ist bereits registriert. Bitte melden Sie sich an.",
            weakPassword: "Passwort zu schwach (mind. 6 Zeichen)",
            invalidEmail: "Ungültige E-Mail-Adresse",
            emailNotVerified: "E-Mail noch nicht bestätigt. Bitte überprüfen Sie Ihren Posteingang.",
            waitBeforeResend: "Bitte warten Sie vor dem erneuten Senden",
            loginNudgeTitle: "Mit Konto haben Sie mehr Kontrolle",
            loginNudgeBody: "Melden Sie sich an, um Galerien zu verwalten, Links wiederherzustellen und Zugriffsprotokolle im Dashboard zu sehen.",
            loginNudgeSignIn: "Anmelden",
            loginNudgeLater: "Vielleicht später"
          },
          dash: {
            title: "Meine Galerien",
            newGallery: "Neue Galerie",
            total: "Gesamt",
            active: "Aktiv",
            deleted: "Gelöscht",
            cancel: "Abbrechen",
            refresh: "Aktualisieren",
            loading: "Galerien werden geladen...",
            noGalleries: "Noch keine Galerien",
            createFirst: "Erstellen Sie Ihre erste Galerie auf der Hauptseite.",
            colCaption: "Titel",
            colViews: "Aufrufe",
            colLink: "Link",
            colStatus: "Status",
            colDuration: "Anzeigedauer",
            colExpiration: "Ablauf",
            unlimited: "Unbegrenzt",
            never: "Nie",
            colActions: "Aktionen",
            replaceMode: "Ersetzen-Modus",
            replaceHint: "Wählen Sie Ziel A, dann Quelle B. Alle Einstellungen von B werden auf A kopiert.",
            replaceConfirm: "Ersetzen",
            statusActive: "Aktiv",
            statusDeleted: "Gelöscht",
            statusExpired: "Abgelaufen",
            accessRecord: "Zugriffsprotokoll",
            restore: "Wiederherstellen",
            restoreHint: "Galerie #{id} als Ziel (A) ausgewählt. Wählen Sie eine Quelle (B) zum Kopieren.",
            confirmDelete: "Galerie #{id} löschen? Aufrufe werden auf 0 gesetzt.",
            confirmReplace: "#{target} (A) mit allen Einstellungen von #{source} (B) ersetzen?\n\nA erhält: Bilder, Aufrufe ({views}), Titel, Passwort, Ablauf von B.\nAs Link bleibt gleich.",
            deletedToast: "Galerie #{id} gelöscht",
            replacedToast: "#{target} durch #{source} Einstellungen ersetzt",
            pageTitle: "Dashboard - Maiimg Hosting",
            helpTitle: "Ersetzen-Modus erklärt",
            helpDesc: "Wählen Sie eine gelöschte Galerie als Ziel (A), dann eine aktive als Quelle (B). Inhalte und Einstellungen von B werden auf A kopiert, während der Originallink von A erhalten bleibt. So können Sie einen bestehenden Link mit neuem Inhalt wiederverwenden.",
            expirationTz: "Zeitzone für Ablauf",
            mobileRoleTarget: "Ziel A",
            mobileRoleSource: "Quelle B",
            mobileSetTarget: "Als A setzen",
            mobileSetSource: "Als B setzen",
            mobileStep1: "Schritt 1: Ziel A wählen",
            mobileStep2: "Schritt 2: Quelle B wählen",
            mobileHint: "Wählen Sie A und B in den Karten unten.",
            mobilePickedTarget: "A gewählt: #{target}. Jetzt B wählen.",
            mobilePickedSource: "B gewählt: #{source}. Jetzt A wählen.",
            mobileReady: "Bereit zum Ersetzen",
            mobileReadySummary: "A #{target} wird durch B #{source} ersetzt."
          }
        },
  
        ko: {
          // SEO
          seo: {
            title: "이미지 QR 생성기 - 이미지 업로드 및 공유",
            description: "QR 코드로 이미지를 빠르게 업로드하고 공유하세요. 안전하고 빠른 무료 이미지 호스팅.",
            keywords: "image hosting,image upload,photo sharing,image qr code,free image host,secure image sharing"
          },
  
          // Navigation
          nav: {
            title: "Maiimg"
          },
          
          // Language options
          language: {
            english: "English",
            chinese: "中文",
            taiwan: "中華民國",
            japanese: "日本語",
            german: "Deutsch",
            korean: "한국어",
            french: "Français",
            italian: "Italiano"
          },
          
          // Hero section
          hero: {
            title: "이미지 업로드 및 공유",
            subtitle: "이미지를 고급 추적 및 분석 기능이 있는 공유 가능한 QR 코드로 변환하세요"
          },
          
          // Upload section
          upload: {
            title: "이미지 업로드 센터",
            subtitle: "이미지를 드래그 앤 드롭하거나 클릭하여 찾아보기",
            dropText: "여기에 이미지를 드롭하거나 클릭하여 업로드",
            supportText: "지원 형식: PNG, JPG, JPEG, GIF, WebP, MP4, MOV, WebM, M4V • 이미지는 최대 50MB • 동영상은 최대 100MB / 120초 • 최대 25개 파일",
            ready: "미디어 업로드 준비 완료"
          },
  
          flow: {
            step1: "이미지 업로드",
            step2: "접근 설정",
            step3: "링크와 QR 생성"
          },
          
          // Badges
          badges: {
            secure: "안전",
            fast: "빠름",
            free: "무료"
          },
          
          // Features
          features: {
            viewLimit: {
              title: "조회 제한",
              placeholder: "최대 조회수 (필수)",
              description: "최대 조회수를 입력하세요"
            },
            timeControl: {
              title: "시간 제어",
              placeholder: "조회당 초 (필수)",
              description: "조회 지속 시간(초)을 입력하세요"
            },
            accessControl: {
              title: "접근 제어",
              description: "한 패널에서 조회 수와 조회 시간을 함께 설정"
            },
            expiration: {
              title: "만료 시간",
              select: "만료 시간 선택",
              option1h: "1시간",
              option3h: "3시간",
              option24h: "24시간",
              option5d: "5일",
              custom: "사용자 지정 일수",
              customPlaceholder: "사용자 지정 일수",
              unlimited: "무제한",
              timezonePlaceholder: "시간대",
              utcUnlimited: "UTC 만료 시간: 무제한",
              utcNone: "UTC 만료 시간: -",
              utcPrefix: "UTC 만료 시간",
              localNone: "로컬 시간: -",
              localPrefix: "로컬 시간"
            },
            description: {
              title: "설명",
              placeholder: "설명 추가 (필수)",
              description: "이미지 설명을 입력하세요"
            },
            generate: {
              title: "링크 및 QR 생성",
              button: "링크 및 QR 코드 생성",
              status: "모든 필드를 입력하고 이미지를 먼저 업로드하세요"
            }
          },
          
          // Tools section
          tools: {
            title: "기타 QR 도구",
            subtitle: "다른 QR 코드 생성기에 빠르게 액세스",
            wifi: "WiFi QR",
            sms: "SMS QR",
            url: "URL QR",
            phone: "전화 QR"
          },
          
          // Results section
          results: {
            success: "QR 코드가 성공적으로 생성되었습니다!",
            subtitle: "이미지 갤러리 링크와 QR 코드를 공유할 준비가 되었습니다",
            stats: {
              images: "이미지",
              views: "조회",
              seconds: "초",
              expiration: "만료"
            },
            shareLink: "링크 공유",
            qrCode: "QR 코드",
            openGallery: "갤러리 열기",
            createAnother: "새로 만들기"
          },
          
          // Modals
          modals: {
            wifi: {
              title: "WiFi QR 코드 생성기",
              networkName: "네트워크 이름 (SSID)",
              networkPlaceholder: "WiFi 네트워크 이름을 입력하세요",
              securityType: "보안 유형",
              wpa: "WPA/WPA2",
              wep: "WEP",
              noPassword: "비밀번호 없음",
              password: "비밀번호",
              passwordPlaceholder: "WiFi 비밀번호를 입력하세요",
              generate: "WiFi QR 코드 생성"
            },
            sms: {
              title: "SMS QR 코드 생성기",
              phoneNumber: "전화번호",
              phonePlaceholder: "전화번호를 입력하세요",
              messageContent: "메시지 내용",
              messagePlaceholder: "메시지를 입력하세요",
              generate: "SMS QR 코드 생성"
            },
            phone: {
              title: "전화 QR 코드 생성기",
              phoneNumber: "전화번호",
              phonePlaceholder: "전화번호를 입력하세요",
              generate: "전화 QR 코드 생성"
            },
            url: {
              title: "URL QR 코드 생성기",
              websiteUrl: "웹사이트 URL",
              urlPlaceholder: "웹사이트 URL을 입력하세요",
              generate: "URL QR 코드 생성"
            },
            common: {
              qrPreview: "QR 코드 미리보기",
              qrPlaceholder: "QR 코드가 여기에 표시됩니다"
            }
          },
          
          // Messages
          messages: {
            copied: "클립보드에 복사되었습니다!",
            uploadProgress: "파일 업로드 중...",
            uploadComplete: "업로드 완료!",
            uploadError: "업로드 실패. 다시 시도해주세요.",
            fillAllFields: "모든 필수 필드를 입력해주세요",
            selectFiles: "먼저 파일을 선택해주세요",
            generating: "QR 코드 생성 중...",
            linkGenerated: "링크와 QR 코드가 성공적으로 생성되었습니다!"
          },
  
          auth: {
            login: "로그인",
            logout: "로그아웃",
            signInTitle: "MaiIMG 로그인",
            continueGoogle: "Google로 계속",
            orEmail: "또는 이메일로 로그인",
            emailPlaceholder: "이메일 주소",
            passwordPlaceholder: "비밀번호",
            signIn: "로그인",
            forgotPassword: "비밀번호를 잊으셨나요?",
            noAccount: "계정이 없으신가요?",
            createAccount: "계정 만들기",
            hasAccount: "이미 계정이 있으신가요?",
            confirmPassword: "비밀번호 확인",
            passwordMin: "비밀번호 (최소 6자)",
            resetTitle: "비밀번호 재설정",
            resetDesc: "이메일을 입력하시면 비밀번호 재설정 링크를 보내드립니다.",
            sendReset: "재설정 이메일 전송",
            backToSignIn: "로그인으로 돌아가기",
            verifyTitle: "이메일 인증",
            verifyHeading: "이메일을 인증해주세요",
            verifyDesc: "{email}로 인증 이메일을 보냈습니다. 받은 편지함을 확인하고 링크를 클릭해주세요.",
            resendVerification: "인증 이메일 재전송",
            iveVerified: "인증 완료",
            emailSent: "이메일 전송 완료!",
            resetSent: "재설정 이메일이 전송되었습니다! 받은 편지함을 확인하세요.",
            passwordsNoMatch: "비밀번호가 일치하지 않습니다",
            passwordTooShort: "비밀번호는 최소 6자 이상이어야 합니다",
            invalidCredential: "이메일 또는 비밀번호가 올바르지 않습니다",
            userNotFound: "해당 이메일로 등록된 계정이 없습니다",
            wrongPassword: "비밀번호가 올바르지 않습니다",
            tooManyRequests: "너무 많은 시도입니다. 잠시 후 다시 시도해주세요.",
            emailInUse: "이미 등록된 이메일입니다. 로그인해주세요.",
            weakPassword: "비밀번호가 너무 약합니다 (최소 6자)",
            invalidEmail: "잘못된 이메일 주소입니다",
            emailNotVerified: "이메일이 아직 인증되지 않았습니다. 받은 편지함을 확인해주세요.",
            waitBeforeResend: "잠시 후에 다시 시도해주세요",
            loginNudgeTitle: "계정으로 더 편하게 관리하세요",
            loginNudgeBody: "로그인하면 대시보드에서 갤러리 관리, 링크 복원, 접근 기록 확인이 가능합니다.",
            loginNudgeSignIn: "로그인",
            loginNudgeLater: "나중에"
          },
          dash: {
            title: "내 갤러리",
            newGallery: "새 갤러리",
            total: "전체",
            active: "활성",
            deleted: "삭제됨",
            cancel: "취소",
            refresh: "새로고침",
            loading: "갤러리 로딩 중...",
            noGalleries: "갤러리가 없습니다",
            createFirst: "메인 페이지에서 첫 번째 갤러리를 만드세요.",
            colCaption: "제목",
            colViews: "조회수",
            colLink: "링크",
            colStatus: "상태",
            colDuration: "표시 시간",
            colExpiration: "만료",
            unlimited: "무제한",
            never: "없음",
            colActions: "작업",
            replaceMode: "대체 모드",
            replaceHint: "대상 A를 선택한 후 소스 B를 선택하세요. B의 모든 설정이 A에 복사됩니다.",
            replaceConfirm: "대체",
            statusActive: "활성",
            statusDeleted: "삭제됨",
            statusExpired: "만료됨",
            accessRecord: "접근 기록",
            restore: "복원",
            restoreHint: "갤러리 #{id}이(가) 대상(A)으로 선택되었습니다. 복사할 소스(B)를 선택하세요.",
            confirmDelete: "갤러리 #{id}을(를) 삭제하시겠습니까? 조회수가 0으로 설정됩니다.",
            confirmReplace: "#{target}(A)을(를) #{source}(B)의 모든 설정으로 대체하시겠습니까?\n\nA는 B의 이미지, 조회수({views}), 제목, 비밀번호, 만료를 받습니다.\nA의 링크는 유지됩니다.",
            deletedToast: "갤러리 #{id} 삭제됨",
            replacedToast: "#{target}이(가) #{source}의 설정으로 대체됨",
            pageTitle: "대시보드 - Maiimg 호스팅",
            helpTitle: "대체 모드 설명",
            helpDesc: "삭제된 갤러리를 대상(A)으로 선택한 후, 활성 갤러리를 소스(B)로 선택하세요. B의 내용과 설정이 A에 복사되며, A의 원래 링크는 그대로 유지됩니다. 이를 통해 기존 링크를 새 내용으로 재사용할 수 있습니다.",
            expirationTz: "만료 시간대",
            mobileRoleTarget: "대상 A",
            mobileRoleSource: "소스 B",
            mobileSetTarget: "A로 설정",
            mobileSetSource: "B로 설정",
            mobileStep1: "1단계: 대상 A 선택",
            mobileStep2: "2단계: 소스 B 선택",
            mobileHint: "아래 카드에서 A와 B를 선택하세요.",
            mobilePickedTarget: "A 선택됨: #{target}. 이제 B를 선택하세요.",
            mobilePickedSource: "B 선택됨: #{source}. 이제 A를 선택하세요.",
            mobileReady: "교체 준비 완료",
            mobileReadySummary: "A #{target} 가 B #{source} 로 교체됩니다."
          }
        },
  
        fr: {
          // SEO
          seo: {
            title: "Générateur QR d'Images - Télécharger et Partager des Images",
            description: "Téléchargez et partagez instantanément des images avec des codes QR. Service d'hébergement d'images gratuit, rapide et sécurisé.",
            keywords: "image hosting,image upload,photo sharing,image qr code,free image host,secure image sharing"
          },
  
          // Navigation
          nav: {
            title: "Maiimg"
          },
          
          // Language options
          language: {
            english: "English",
            chinese: "中文",
            taiwan: "中華民國",
            japanese: "日本語",
            german: "Deutsch",
            korean: "한국어",
            french: "Français",
            italian: "Italiano"
          },
          
          // Hero section
          hero: {
            title: "Télécharger et Partager des Images",
            subtitle: "Transformez vos images en codes QR partageables avec suivi et analyses avancés"
          },
          
          // Upload section
          upload: {
            title: "Centre de Téléchargement d'Images",
            subtitle: "Glissez-déposez vos images ou cliquez pour parcourir",
            dropText: "Déposez les images ici ou cliquez pour télécharger",
            supportText: "Formats supportés : PNG, JPG, JPEG, GIF, WebP, MP4, MOV, WebM, M4V • Images jusqu'à 50MB • Vidéos jusqu'à 100MB / 120s • Jusqu'à 25 fichiers",
            ready: "Prêt à telecharger des medias"
          },
  
          flow: {
            step1: "Téléverser des images",
            step2: "Régler l'accès",
            step3: "Générer lien & QR"
          },
          
          // Badges
          badges: {
            secure: "Sécurisé",
            fast: "Rapide",
            free: "Gratuit"
          },
          
          // Features
          features: {
            viewLimit: {
              title: "Limite de Vues",
              placeholder: "Nombre max de vues (requis)",
              description: "Entrez le nombre maximum de vues"
            },
            timeControl: {
              title: "Contrôle du Temps",
              placeholder: "Secondes par vue (requis)",
              description: "Entrez la durée de visualisation en secondes"
            },
            accessControl: {
              title: "Contrôle d'accès",
              description: "Définissez limite de vues et durée par vue dans le même panneau"
            },
            expiration: {
              title: "Expiration",
              select: "Choisir l'expiration",
              option1h: "1 heure",
              option3h: "3 heures",
              option24h: "24 heures",
              option5d: "5 jours",
              custom: "Jours personnalisés",
              customPlaceholder: "Jours personnalisés",
              unlimited: "Illimité",
              timezonePlaceholder: "Fuseau horaire",
              utcUnlimited: "Heure d'expiration UTC : Illimitée",
              utcNone: "Heure d'expiration UTC : -",
              utcPrefix: "Heure d'expiration UTC",
              localNone: "Heure locale : -",
              localPrefix: "Heure locale"
            },
            description: {
              title: "Description",
              placeholder: "Ajouter une description (requis)",
              description: "Entrez la description de l'image"
            },
            generate: {
              title: "Générer Lien et QR",
              button: "Créer Lien et Code QR",
              status: "Remplissez tous les champs et téléchargez d'abord les images"
            }
          },
          
          // Tools section
          tools: {
            title: "Autres Outils QR",
            subtitle: "Accès rapide à d'autres générateurs de codes QR",
            wifi: "QR WiFi",
            sms: "QR SMS",
            url: "QR URL",
            phone: "QR Téléphone"
          },
          
          // Results section
          results: {
            success: "Code QR Généré avec Succès !",
            subtitle: "Votre lien de galerie d'images et code QR sont prêts à être partagés",
            stats: {
              images: "Images",
              views: "Vues",
              seconds: "Secondes",
              expiration: "Expiration"
            },
            shareLink: "Lien de Partage",
            qrCode: "Code QR",
            openGallery: "Ouvrir la Galerie",
            createAnother: "Créer un Autre"
          },
          
          // Modals
          modals: {
            wifi: {
              title: "Générateur de Code QR WiFi",
              networkName: "Nom du Réseau (SSID)",
              networkPlaceholder: "Entrez le nom du réseau WiFi",
              securityType: "Type de Sécurité",
              wpa: "WPA/WPA2",
              wep: "WEP",
              noPassword: "Aucun Mot de Passe",
              password: "Mot de Passe",
              passwordPlaceholder: "Entrez le mot de passe WiFi",
              generate: "Générer le Code QR WiFi"
            },
            sms: {
              title: "Générateur de Code QR SMS",
              phoneNumber: "Numéro de Téléphone",
              phonePlaceholder: "Entrez le numéro de téléphone",
              messageContent: "Contenu du Message",
              messagePlaceholder: "Entrez votre message",
              generate: "Générer le Code QR SMS"
            },
            phone: {
              title: "Générateur de Code QR Téléphone",
              phoneNumber: "Numéro de Téléphone",
              phonePlaceholder: "Entrez le numéro de téléphone",
              generate: "Générer le Code QR Téléphone"
            },
            url: {
              title: "Générateur de Code QR URL",
              websiteUrl: "URL du Site Web",
              urlPlaceholder: "Entrez l'URL du site web",
              generate: "Générer le Code QR URL"
            },
            common: {
              qrPreview: "Aperçu du Code QR",
              qrPlaceholder: "Votre code QR apparaîtra ici"
            }
          },
          
          // Messages
          messages: {
            copied: "Copié dans le presse-papiers !",
            uploadProgress: "Téléchargement des fichiers...",
            uploadComplete: "Téléchargement terminé !",
            uploadError: "Échec du téléchargement. Veuillez réessayer.",
            fillAllFields: "Veuillez remplir tous les champs requis",
            selectFiles: "Veuillez d'abord sélectionner des fichiers",
            generating: "Génération du code QR...",
            linkGenerated: "Lien et code QR générés avec succès !"
          },
  
          auth: {
            login: "Connexion",
            logout: "Déconnexion",
            signInTitle: "Se connecter à MaiIMG",
            continueGoogle: "Continuer avec Google",
            orEmail: "ou se connecter par e-mail",
            emailPlaceholder: "Adresse e-mail",
            passwordPlaceholder: "Mot de passe",
            signIn: "Se connecter",
            forgotPassword: "Mot de passe oublié ?",
            noAccount: "Pas encore de compte ?",
            createAccount: "Créer un compte",
            hasAccount: "Déjà un compte ?",
            confirmPassword: "Confirmer le mot de passe",
            passwordMin: "Mot de passe (min 6 caractères)",
            resetTitle: "Réinitialiser le mot de passe",
            resetDesc: "Entrez votre e-mail et nous vous enverrons un lien de réinitialisation.",
            sendReset: "Envoyer l'e-mail de réinitialisation",
            backToSignIn: "Retour à la connexion",
            verifyTitle: "Vérifier l'e-mail",
            verifyHeading: "Vérifiez votre e-mail",
            verifyDesc: "Nous avons envoyé un e-mail de vérification à {email}. Veuillez vérifier votre boîte de réception.",
            resendVerification: "Renvoyer l'e-mail de vérification",
            iveVerified: "J'ai vérifié",
            emailSent: "E-mail envoyé !",
            resetSent: "E-mail de réinitialisation envoyé ! Vérifiez votre boîte de réception.",
            passwordsNoMatch: "Les mots de passe ne correspondent pas",
            passwordTooShort: "Le mot de passe doit contenir au moins 6 caractères",
            invalidCredential: "E-mail ou mot de passe invalide",
            userNotFound: "Aucun compte avec cet e-mail",
            wrongPassword: "Mot de passe incorrect",
            tooManyRequests: "Trop de tentatives. Veuillez réessayer plus tard.",
            emailInUse: "Cet e-mail est déjà enregistré. Veuillez vous connecter.",
            weakPassword: "Mot de passe trop faible (min 6 caractères)",
            invalidEmail: "Adresse e-mail invalide",
            emailNotVerified: "E-mail non encore vérifié. Veuillez vérifier votre boîte de réception.",
            waitBeforeResend: "Veuillez patienter avant de renvoyer",
            loginNudgeTitle: "Avec un compte, vous avez plus de contrôle",
            loginNudgeBody: "Connectez-vous pour gérer vos galeries, restaurer des liens et consulter les journaux d'accès dans le tableau de bord.",
            loginNudgeSignIn: "Se connecter",
            loginNudgeLater: "Plus tard"
          },
          dash: {
            title: "Mes galeries",
            newGallery: "Nouvelle galerie",
            total: "Total",
            active: "Actif",
            deleted: "Supprimé",
            cancel: "Annuler",
            refresh: "Actualiser",
            loading: "Chargement des galeries...",
            noGalleries: "Aucune galerie",
            createFirst: "Créez votre première galerie sur la page principale.",
            colCaption: "Titre",
            colViews: "Vues",
            colLink: "Lien",
            colStatus: "Statut",
            colDuration: "Durée",
            colExpiration: "Expiration",
            unlimited: "Illimité",
            never: "Jamais",
            colActions: "Actions",
            replaceMode: "Mode remplacement",
            replaceHint: "Sélectionnez la cible A, puis la source B. Tous les paramètres de B seront copiés vers A.",
            replaceConfirm: "Remplacer",
            statusActive: "Actif",
            statusDeleted: "Supprimé",
            statusExpired: "Expiré",
            accessRecord: "Journal d'accès",
            restore: "Restaurer",
            restoreHint: "Galerie #{id} sélectionnée comme cible (A). Choisissez une source (B) à copier.",
            confirmDelete: "Supprimer la galerie #{id} ? Les vues seront remises à 0.",
            confirmReplace: "Remplacer #{target} (A) par tous les paramètres de #{source} (B) ?\n\nA recevra : images, vues ({views}), titre, mot de passe, expiration de B.\nLe lien de A reste le même.",
            deletedToast: "Galerie #{id} supprimée",
            replacedToast: "#{target} remplacé par les paramètres de #{source}",
            pageTitle: "Tableau de bord - Maiimg Hosting",
            helpTitle: "Comment fonctionne le mode remplacement",
            helpDesc: "Sélectionnez une galerie supprimée comme cible (A), puis une galerie active comme source (B). Le contenu et les paramètres de B seront copiés vers A, tandis que le lien original de A reste inchangé. Cela permet de réutiliser un lien existant avec un nouveau contenu.",
            expirationTz: "Fuseau horaire d'expiration",
            mobileRoleTarget: "Cible A",
            mobileRoleSource: "Source B",
            mobileSetTarget: "Définir en A",
            mobileSetSource: "Définir en B",
            mobileStep1: "Étape 1 : Sélectionnez la cible A",
            mobileStep2: "Étape 2 : Sélectionnez la source B",
            mobileHint: "Choisissez A et B dans les cartes ci-dessous.",
            mobilePickedTarget: "A sélectionné : #{target}. Choisissez maintenant B.",
            mobilePickedSource: "B sélectionné : #{source}. Choisissez maintenant A.",
            mobileReady: "Prêt à remplacer",
            mobileReadySummary: "A #{target} sera remplacé par B #{source}."
          }
        },
  
        it: {
          // SEO
          seo: {
            title: "Generatore QR di Immagini - Carica e Condividi Immagini",
            description: "Carica e condividi immagini all'istante con codici QR. Hosting immagini gratuito, veloce e sicuro.",
            keywords: "image hosting,image upload,photo sharing,image qr code,free image host,secure image sharing"
          },
  
          // Navigation
          nav: {
            title: "Maiimg"
          },
          
          // Language options
          language: {
            english: "English",
            chinese: "中文",
            taiwan: "中華民國",
            japanese: "日本語",
            german: "Deutsch",
            korean: "한국어",
            french: "Français",
            italian: "Italiano"
          },
          
          // Hero section
          hero: {
            title: "Carica e Condividi Immagini",
            subtitle: "Trasforma le tue immagini in codici QR condivisibili con tracciamento e analisi avanzate"
          },
          
          // Upload section
          upload: {
            title: "Centro di Caricamento Immagini",
            subtitle: "Trascina e rilascia le tue immagini o clicca per sfogliare",
            dropText: "Rilascia le immagini qui o clicca per caricare",
            supportText: "Supporta: PNG, JPG, JPEG, GIF, WebP, MP4, MOV, WebM, M4V • Immagini fino a 50MB • Video fino a 100MB / 120s • Fino a 25 file",
            ready: "Pronto per caricare media"
          },
  
          flow: {
            step1: "Carica immagini",
            step2: "Imposta accesso",
            step3: "Genera link e QR"
          },
          
          // Badges
          badges: {
            secure: "Sicuro",
            fast: "Veloce",
            free: "Gratuito"
          },
          
          // Features
          features: {
            viewLimit: {
              title: "Limite di Visualizzazioni",
              placeholder: "Max visualizzazioni (richiesto)",
              description: "Inserisci il numero massimo di visualizzazioni"
            },
            timeControl: {
              title: "Controllo del Tempo",
              placeholder: "Secondi per visualizzazione (richiesto)",
              description: "Inserisci la durata di visualizzazione in secondi"
            },
            accessControl: {
              title: "Controllo accesso",
              description: "Imposta limite visualizzazioni e durata per vista nello stesso pannello"
            },
            expiration: {
              title: "Scadenza",
              select: "Seleziona scadenza",
              option1h: "1 ora",
              option3h: "3 ore",
              option24h: "24 ore",
              option5d: "5 giorni",
              custom: "Giorni personalizzati",
              customPlaceholder: "Giorni personalizzati",
              unlimited: "Illimitato",
              timezonePlaceholder: "Fuso orario",
              utcUnlimited: "Scadenza UTC: Illimitata",
              utcNone: "Scadenza UTC: -",
              utcPrefix: "Scadenza UTC",
              localNone: "Ora locale: -",
              localPrefix: "Ora locale"
            },
            description: {
              title: "Descrizione",
              placeholder: "Aggiungi una descrizione (richiesto)",
              description: "Inserisci la descrizione dell'immagine"
            },
            generate: {
              title: "Genera Link e QR",
              button: "Crea Link e Codice QR",
              status: "Compila tutti i campi e carica prima le immagini"
            }
          },
          
          // Tools section
          tools: {
            title: "Altri Strumenti QR",
            subtitle: "Accesso rapido ad altri generatori di codici QR",
            wifi: "QR WiFi",
            sms: "QR SMS",
            url: "QR URL",
            phone: "QR Telefono"
          },
          
          // Results section
          results: {
            success: "Codice QR Generato con Successo!",
            subtitle: "Il tuo link della galleria immagini e codice QR sono pronti per essere condivisi",
            stats: {
              images: "Immagini",
              views: "Visualizzazioni",
              seconds: "Secondi",
              expiration: "Scadenza"
            },
            shareLink: "Link di Condivisione",
            qrCode: "Codice QR",
            openGallery: "Apri Galleria",
            createAnother: "Creane un Altro"
          },
          
          // Modals
          modals: {
            wifi: {
              title: "Generatore di Codice QR WiFi",
              networkName: "Nome della Rete (SSID)",
              networkPlaceholder: "Inserisci il nome della rete WiFi",
              securityType: "Tipo di Sicurezza",
              wpa: "WPA/WPA2",
              wep: "WEP",
              noPassword: "Nessuna Password",
              password: "Password",
              passwordPlaceholder: "Inserisci la password WiFi",
              generate: "Genera Codice QR WiFi"
            },
            sms: {
              title: "Generatore di Codice QR SMS",
              phoneNumber: "Numero di Telefono",
              phonePlaceholder: "Inserisci il numero di telefono",
              messageContent: "Contenuto del Messaggio",
              messagePlaceholder: "Inserisci il tuo messaggio",
              generate: "Genera Codice QR SMS"
            },
            phone: {
              title: "Generatore di Codice QR Telefono",
              phoneNumber: "Numero di Telefono",
              phonePlaceholder: "Inserisci il numero di telefono",
              generate: "Genera Codice QR Telefono"
            },
            url: {
              title: "Generatore di Codice QR URL",
              websiteUrl: "URL del Sito Web",
              urlPlaceholder: "Inserisci l'URL del sito web",
              generate: "Genera Codice QR URL"
            },
            common: {
              qrPreview: "Anteprima Codice QR",
              qrPlaceholder: "Il tuo codice QR apparirà qui"
            }
          },
          
          // Messages
          messages: {
            copied: "Copiato negli appunti!",
            uploadProgress: "Caricamento file...",
            uploadComplete: "Caricamento completato!",
            uploadError: "Caricamento fallito. Riprova.",
            fillAllFields: "Compila tutti i campi richiesti",
            selectFiles: "Seleziona prima i file",
            generating: "Generazione codice QR...",
            linkGenerated: "Link e codice QR generati con successo!"
          },
  
          auth: {
            login: "Accedi",
            logout: "Esci",
            signInTitle: "Accedi a MaiIMG",
            continueGoogle: "Continua con Google",
            orEmail: "o accedi con e-mail",
            emailPlaceholder: "Indirizzo e-mail",
            passwordPlaceholder: "Password",
            signIn: "Accedi",
            forgotPassword: "Password dimenticata?",
            noAccount: "Non hai un account?",
            createAccount: "Crea account",
            hasAccount: "Hai già un account?",
            confirmPassword: "Conferma password",
            passwordMin: "Password (min 6 caratteri)",
            resetTitle: "Reimposta password",
            resetDesc: "Inserisci la tua e-mail e ti invieremo un link per reimpostare la password.",
            sendReset: "Invia e-mail di reimpostazione",
            backToSignIn: "Torna all'accesso",
            verifyTitle: "Verifica e-mail",
            verifyHeading: "Verifica la tua e-mail",
            verifyDesc: "Abbiamo inviato un'e-mail di verifica a {email}. Controlla la tua casella di posta.",
            resendVerification: "Rinvia e-mail di verifica",
            iveVerified: "Ho verificato",
            emailSent: "E-mail inviata!",
            resetSent: "E-mail di reimpostazione inviata! Controlla la tua casella di posta.",
            passwordsNoMatch: "Le password non corrispondono",
            passwordTooShort: "La password deve contenere almeno 6 caratteri",
            invalidCredential: "E-mail o password non validi",
            userNotFound: "Nessun account con questa e-mail",
            wrongPassword: "Password errata",
            tooManyRequests: "Troppi tentativi. Riprova più tardi.",
            emailInUse: "Questa e-mail è già registrata. Prova ad accedere.",
            weakPassword: "Password troppo debole (min 6 caratteri)",
            invalidEmail: "Indirizzo e-mail non valido",
            emailNotVerified: "E-mail non ancora verificata. Controlla la tua casella di posta.",
            waitBeforeResend: "Attendi prima di rinviare",
            loginNudgeTitle: "Con un account hai più controllo",
            loginNudgeBody: "Accedi per gestire le gallerie, ripristinare link e vedere i registri di accesso dalla dashboard.",
            loginNudgeSignIn: "Accedi",
            loginNudgeLater: "Più tardi"
          },
          dash: {
            title: "Le mie gallerie",
            newGallery: "Nuova galleria",
            total: "Totale",
            active: "Attivo",
            deleted: "Eliminato",
            cancel: "Annulla",
            refresh: "Aggiorna",
            loading: "Caricamento gallerie...",
            noGalleries: "Nessuna galleria",
            createFirst: "Crea la tua prima galleria nella pagina principale.",
            colCaption: "Titolo",
            colViews: "Visualizzazioni",
            colLink: "Link",
            colStatus: "Stato",
            colDuration: "Durata",
            colExpiration: "Scadenza",
            unlimited: "Illimitato",
            never: "Mai",
            colActions: "Azioni",
            replaceMode: "Modalità sostituzione",
            replaceHint: "Seleziona il target A, poi la sorgente B. Tutte le impostazioni di B verranno copiate su A.",
            replaceConfirm: "Sostituisci",
            statusActive: "Attivo",
            statusDeleted: "Eliminato",
            statusExpired: "Scaduto",
            accessRecord: "Registro accessi",
            restore: "Ripristina",
            restoreHint: "Galleria #{id} selezionata come target (A). Scegli una sorgente (B) da copiare.",
            confirmDelete: "Eliminare la galleria #{id}? Le visualizzazioni verranno impostate a 0.",
            confirmReplace: "Sostituire #{target} (A) con tutte le impostazioni di #{source} (B)?\n\nA riceverà: immagini, visualizzazioni ({views}), titolo, password, scadenza di B.\nIl link di A rimane invariato.",
            deletedToast: "Galleria #{id} eliminata",
            replacedToast: "#{target} sostituito con le impostazioni di #{source}",
            pageTitle: "Dashboard - Maiimg Hosting",
            helpTitle: "Come funziona la modalità sostituzione",
            helpDesc: "Seleziona una galleria eliminata come target (A), poi una galleria attiva come sorgente (B). Il contenuto e le impostazioni di B verranno copiati su A, mentre il link originale di A rimane invariato. Questo permette di riutilizzare un link esistente con nuovo contenuto.",
            expirationTz: "Fuso orario scadenza",
            mobileRoleTarget: "Target A",
            mobileRoleSource: "Sorgente B",
            mobileSetTarget: "Imposta come A",
            mobileSetSource: "Imposta come B",
            mobileStep1: "Passo 1: Seleziona il target A",
            mobileStep2: "Passo 2: Seleziona la sorgente B",
            mobileHint: "Scegli A e B dalle schede qui sotto.",
            mobilePickedTarget: "A selezionato: #{target}. Ora scegli B.",
            mobilePickedSource: "B selezionato: #{source}. Ora scegli A.",
            mobileReady: "Pronto per la sostituzione",
            mobileReadySummary: "A #{target} sarà sostituito da B #{source}."
          }
        }
      };
    }
  
    // Get stored language from localStorage
    getStoredLanguage() {
      const stored = localStorage.getItem('preferredLanguage') || localStorage.getItem('preferred-language');
      if (!stored) return null;
      const normalized = String(stored).toLowerCase();
      if (normalized === 'zh-cn' || normalized === 'zh') return 'zh';
      if (normalized === 'zh-tw' || normalized === 'tw') return 'tw';
      if (normalized === 'ja' || normalized === 'de' || normalized === 'ko' || normalized === 'fr' || normalized === 'it' || normalized === 'en') {
        return normalized;
      }
      return null;
    }
  
    // Store language preference
    setStoredLanguage(lang) {
      localStorage.setItem('preferredLanguage', lang);
    }
  
    // Detect browser language
    detectBrowserLanguage() {
      const browserLang = navigator.language || navigator.userLanguage;
      return browserLang.startsWith('zh') ? 'zh' : 'en';
    }
  
    // Get translation for a key
    t(key) {
      const keys = key.split('.');
      const resolve = (source) => {
        let value = source;
        for (const k of keys) {
          if (value && typeof value === 'object') {
            value = value[k];
          } else {
            return null;
          }
        }
        return typeof value === 'string' && value.length > 0 ? value : null;
      };
  
      const current = resolve(this.translations[this.currentLanguage]);
      if (current) return current;
  
      const fallback = resolve(this.translations.en);
      if (fallback) return fallback;
  
      return key;
    }
  
    // Change language
    setLanguage(lang) {
      if (this.translations[lang]) {
        this.currentLanguage = lang;
        this.setStoredLanguage(lang);
        this.updatePageTranslations();
        this.updateLanguageSelector();
        this.updateHtmlLang();
        this.updateSEO();
      }
    }
  
    // Update all translations on the page
    updatePageTranslations() {
      // Update elements with data-translate attribute
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = this.t(key);
      });
  
      // Update placeholder attributes
      document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = this.t(key);
      });
  
      // Update title attributes
      document.querySelectorAll('[data-translate-title]').forEach(element => {
        const key = element.getAttribute('data-translate-title');
        element.title = this.t(key);
      });
    }
  
    // Update language selector display
    updateLanguageSelector() {
      const flagElement = document.getElementById('currentLanguageFlag');
      const nameElement = document.getElementById('currentLanguageName');
      
      if (flagElement && nameElement) {
        switch (this.currentLanguage) {
          case 'zh':
            flagElement.textContent = '🇨🇳';
            nameElement.textContent = this.t('language.chinese');
            break;
          case 'tw':
            flagElement.textContent = '🇹🇼';
            nameElement.textContent = this.t('language.taiwan');
            break;
          case 'ja':
            flagElement.textContent = '🇯🇵';
            nameElement.textContent = this.t('language.japanese');
            break;
          case 'de':
            flagElement.textContent = '🇩🇪';
            nameElement.textContent = this.t('language.german');
            break;
          case 'ko':
            flagElement.textContent = '🇰🇷';
            nameElement.textContent = this.t('language.korean');
            break;
          case 'fr':
            flagElement.textContent = '🇫🇷';
            nameElement.textContent = this.t('language.french');
            break;
          case 'it':
            flagElement.textContent = '🇮🇹';
            nameElement.textContent = this.t('language.italian');
            break;
          default: // 'en'
            flagElement.textContent = '🇺🇸';
            nameElement.textContent = this.t('language.english');
            break;
        }
      }
    }
  
    updateHtmlLang() {
      const langMap = {
        zh: 'zh-CN',
        tw: 'zh-TW'
      };
      document.documentElement.lang = langMap[this.currentLanguage] || this.currentLanguage;
    }
  
    updateSEO() {
      const title = this.t('seo.title');
      const description = this.t('seo.description');
      const keywords = this.t('seo.keywords');
  
      if (title) {
        document.title = title;
      }
  
      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta && description) {
        descriptionMeta.setAttribute('content', description);
      }
  
      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta && keywords) {
        keywordsMeta.setAttribute('content', keywords);
      }
    }
  
    // Initialize i18n system
    init() {
      this.updatePageTranslations();
      this.updateLanguageSelector();
      this.updateHtmlLang();
      this.updateSEO();
    }
  }
  
  function mergeTranslationObjects(target, source) {
    Object.entries(source).forEach(([key, value]) => {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
          target[key] = {};
        }
        mergeTranslationObjects(target[key], value);
      } else {
        target[key] = value;
      }
    });
    return target;
  }

  const PAGE_TRANSLATION_OVERRIDES = {
    en: {
      seo: {
        title: "Maiimg Hosting - Upload Images & Short Videos with QR Share",
        description: "Upload images and short videos in seconds with Maiimg Hosting. Free media hosting with direct links, QR sharing, view limits, and expiration controls.",
        keywords: "maiimg hosting,free media hosting,image upload,short video upload,qr media sharing,temporary media hosting"
      },
      hero: {
        title: "Upload Images & Short Videos",
        subtitle: "Turn your photos and short videos into shareable QR links with tracking and access controls"
      },
      upload: {
        title: "Media Upload Center",
        subtitle: "Drag & drop images or short videos, or click to browse",
        ready: "Ready to upload images and short videos",
        previewTitle: "Selected Media"
      },
      flow: {
        step1: "Upload Media"
      },
      features: {
        viewLimit: {
          unit: "views"
        },
        timeControl: {
          unit: "sec"
        },
        expiration: {
          description: "Choose how long the gallery stays available."
        },
        description: {
          description: "Enter gallery description"
        },
        generate: {
          description: "Create the gallery link once your media and access rules are ready.",
          status: "Fill all fields and upload media first"
        },
        presets: {
          eyebrow: "Quick presets",
          title: "Pick a sharing mode",
          description: "Start with a recommended setup, then fine-tune the limits below.",
          summaryLabel: "Mode",
          public: {
            title: "Open share",
            copy: "Almost unrestricted sharing for easy access."
          },
          temporary: {
            title: "Temporary",
            copy: "Short-term sharing that expires automatically."
          },
          strict: {
            title: "Strict",
            copy: "Few views, short sessions, and fast expiration."
          },
          custom: {
            title: "Custom",
            copy: "Manually adjusted settings."
          }
        },
        advanced: {
          title: "Advanced settings",
          description: "Adjust the details after choosing a preset."
        }
      },
      results: {
        subtitle: "Your media gallery link and QR code are ready to share",
        stats: {
          images: "Media"
        },
        galleryLink: "Gallery Link",
        generatedLinkPlaceholder: "Generated link will appear here",
        copy: "Copy",
        scanHint: "Scan to open the gallery",
        accessRecords: "Access Records",
        goToInsights: "Go to access records",
        accessIntro: "These records show when visitors open your gallery link.",
        accessCodeLabel: "Access records code",
        copyCode: "Copy Code",
        mediaFilesUploaded: "{count} media files uploaded",
        openAccessRecords: "Open Access Records",
        accessCodeHint: "Use this code to see who opened the link and when."
      },
      messages: {
        unknownError: "Unknown error",
        uploadMediaFirst: "Please upload at least one media file first!",
        generateReady: "Ready to generate QR code!",
        missingPrefix: "Missing: {items}",
        missingViewLimit: "View limit",
        missingTimeControl: "Time control",
        missingDescription: "Description",
        missingUpload: "Upload media",
        createMediaError: "Error creating media link: {error}",
        networkCreateMediaError: "Network error while creating the media link. Please check your connection and try again.",
        accessCodeCopied: "Access code \"{code}\" copied to clipboard!",
        accessCodeCopiedPlain: "Access code copied to clipboard!",
        maxFilesExceeded: "Maximum 25 files allowed!",
        uploadFailedShort: "Upload failed.",
        invalidFileType: "Only supported image and video files are allowed.",
        fallbackMessage: "Your browser does not support drag-and-drop uploads.",
        fileTooBig: "File is too big ({{filesize}}MB). Max filesize: {{maxFilesize}}MB.",
        removeFile: "Remove file",
        cancelUpload: "Cancel upload",
        queued: "Queued: {name} (Session: {session})",
        removed: "Removed: {name}",
        readyUploadedCountSession: "Ready! {count} media files uploaded to folder: {session}",
        readyNewSession: "Ready for a new upload session",
        uploadAreaReset: "Upload area reset. Ready for new media.",
        supportedFormatsOnly: "Only PNG, JPG, JPEG, GIF, WebP, MP4, MOV, WebM, and M4V are supported right now.",
        imageTooLarge: "Image too large. Maximum size is 50MB.",
        videoTooLarge: "Video too large. Maximum size is 100MB.",
        videoTooLong: "Video too long. Maximum duration is {seconds} seconds.",
        initUploadFailed: "Failed to initialize upload.",
        completeUploadFailed: "Failed to complete upload.",
        uploading: "Uploading: {name}...",
        uploaded: "Uploaded: {name}",
        uploadErrorFile: "Error: {name} - {error}"
      }
    },
    zh: {
      seo: {
        title: "麦瓜图床 - 图片和小视频上传分享，支持二维码外链",
        description: "麦瓜图床支持图片和小视频上传分享，提供二维码生成、外链分享、访问控制与过期设置。",
        keywords: "麦瓜图床,免费图床,图片上传,小视频上传,媒体分享,二维码外链,临时图床"
      },
      hero: {
        title: "上传和分享图片与小视频",
        subtitle: "将您的图片和小视频生成可分享的二维码链接，并支持访问控制与追踪"
      },
      upload: {
        title: "媒体上传中心",
        subtitle: "拖放图片或小视频，或点击浏览",
        ready: "准备上传图片和小视频",
        previewTitle: "已选媒体"
      },
      flow: {
        step1: "上传媒体"
      },
      features: {
        viewLimit: {
          unit: "次"
        },
        timeControl: {
          unit: "秒"
        },
        expiration: {
          description: "设置这个图集会在多久后自动失效。"
        },
        description: {
          description: "输入图集描述"
        },
        generate: {
          description: "媒体和访问规则都确认后，再生成链接和二维码。",
          status: "请先填写所有字段并上传媒体"
        },
        presets: {
          eyebrow: "快捷模式",
          title: "先选一个分享模式",
          description: "先用推荐方案快速开始，下面仍然可以继续细调。",
          summaryLabel: "模式",
          public: {
            title: "公开分享",
            copy: "适合普通传播，限制较少，访问更顺畅。"
          },
          temporary: {
            title: "临时分享",
            copy: "适合短期使用，到期后自动失效。"
          },
          strict: {
            title: "严格保护",
            copy: "查看次数少、时长短、过期更快。"
          },
          custom: {
            title: "自定义",
            copy: "已手动调整设置。"
          }
        },
        advanced: {
          title: "高级设置",
          description: "选完模式后，还可以继续微调详细参数。"
        }
      },
      results: {
        subtitle: "您的媒体画廊链接和二维码已准备好分享",
        stats: {
          images: "媒体"
        },
        galleryLink: "画廊链接",
        generatedLinkPlaceholder: "生成后的链接将显示在这里",
        copy: "复制",
        scanHint: "扫码打开画廊",
        accessRecords: "访问记录",
        goToInsights: "前往访问记录",
        accessIntro: "这里会显示访客打开画廊链接的时间记录。",
        accessCodeLabel: "访问记录码",
        copyCode: "复制代码",
        mediaFilesUploaded: "已上传 {count} 个媒体文件",
        openAccessRecords: "打开访问记录",
        accessCodeHint: "使用此代码可查看谁在何时打开了链接。"
      },
      messages: {
        unknownError: "未知错误",
        uploadMediaFirst: "请先上传至少一个媒体文件！",
        generateReady: "可以生成二维码了！",
        missingPrefix: "还缺少：{items}",
        missingViewLimit: "查看限制",
        missingTimeControl: "时间控制",
        missingDescription: "描述",
        missingUpload: "上传媒体",
        createMediaError: "创建媒体链接时出错：{error}",
        networkCreateMediaError: "创建媒体链接时网络异常，请检查连接后重试。",
        accessCodeCopied: "访问记录码“{code}”已复制到剪贴板！",
        accessCodeCopiedPlain: "访问记录码已复制到剪贴板！",
        maxFilesExceeded: "最多只能上传 25 个文件！",
        uploadFailedShort: "上传失败。",
        invalidFileType: "仅支持上传图片和视频文件。",
        fallbackMessage: "您的浏览器不支持拖放上传。",
        fileTooBig: "文件太大（{{filesize}}MB）。最大允许：{{maxFilesize}}MB。",
        removeFile: "移除文件",
        cancelUpload: "取消上传",
        queued: "已加入队列：{name}（会话：{session}）",
        removed: "已移除：{name}",
        readyUploadedCountSession: "已就绪！{count} 个媒体文件已上传到目录：{session}",
        readyNewSession: "可以开始新的上传会话",
        uploadAreaReset: "上传区已重置，可继续上传新媒体。",
        supportedFormatsOnly: "目前仅支持 PNG、JPG、JPEG、GIF、WebP、MP4、MOV、WebM 和 M4V。",
        imageTooLarge: "图片过大，最大支持 50MB。",
        videoTooLarge: "视频过大，最大支持 100MB。",
        videoTooLong: "视频时长过长，最长支持 {seconds} 秒。",
        initUploadFailed: "初始化上传失败。",
        completeUploadFailed: "完成上传失败。",
        uploading: "正在上传：{name}...",
        uploaded: "已上传：{name}",
        uploadErrorFile: "出错：{name} - {error}"
      }
    },
    tw: {
      seo: {
        title: "麥瓜圖床 - 圖片和短影片上傳分享，支援二維碼外鏈",
        description: "麥瓜圖床支援圖片和短影片上傳分享，提供二維碼生成、外鏈分享、存取控制與到期設定。",
        keywords: "麥瓜圖床,免費圖床,圖片上傳,短影片上傳,媒體分享,二維碼外鏈,臨時圖床"
      },
      hero: {
        title: "上傳和分享圖片與短影片",
        subtitle: "將您的圖片和短影片轉成可分享的 QR 連結，並支援追蹤與存取控制"
      },
      upload: {
        title: "媒體上傳中心",
        subtitle: "拖放圖片或短影片，或點擊瀏覽",
        ready: "準備上傳圖片和短影片",
        previewTitle: "已選媒體"
      },
      flow: {
        step1: "上傳媒體"
      },
      features: {
        description: {
          description: "輸入圖集描述"
        },
        generate: {
          status: "請先填寫所有欄位並上傳媒體"
        }
      },
      results: {
        subtitle: "您的媒體圖集連結和二維碼已準備好分享",
        stats: {
          images: "媒體"
        },
        galleryLink: "圖集連結",
        generatedLinkPlaceholder: "生成後的連結將顯示在這裡",
        copy: "複製",
        scanHint: "掃碼開啟圖集",
        accessRecords: "存取記錄",
        goToInsights: "前往存取記錄",
        accessIntro: "這裡會顯示訪客開啟圖集連結的時間記錄。",
        accessCodeLabel: "存取記錄碼",
        copyCode: "複製代碼",
        mediaFilesUploaded: "已上傳 {count} 個媒體檔案",
        openAccessRecords: "開啟存取記錄",
        accessCodeHint: "使用此代碼可查看誰在何時開啟了連結。"
      },
      messages: {
        unknownError: "未知錯誤",
        uploadMediaFirst: "請先上傳至少一個媒體檔案！",
        generateReady: "可以生成二維碼了！",
        missingPrefix: "尚缺：{items}",
        missingViewLimit: "檢視限制",
        missingTimeControl: "時間控制",
        missingDescription: "描述",
        missingUpload: "上傳媒體",
        createMediaError: "建立媒體連結時發生錯誤：{error}",
        networkCreateMediaError: "建立媒體連結時網路異常，請檢查連線後再試。",
        accessCodeCopied: "存取記錄碼「{code}」已複製到剪貼簿！",
        accessCodeCopiedPlain: "存取記錄碼已複製到剪貼簿！",
        maxFilesExceeded: "最多只能上傳 25 個檔案！",
        uploadFailedShort: "上傳失敗。",
        invalidFileType: "僅支援上傳圖片與影片檔案。",
        fallbackMessage: "您的瀏覽器不支援拖放上傳。",
        fileTooBig: "檔案太大（{{filesize}}MB）。最大允許：{{maxFilesize}}MB。",
        removeFile: "移除檔案",
        cancelUpload: "取消上傳",
        queued: "已加入佇列：{name}（會話：{session}）",
        removed: "已移除：{name}",
        readyUploadedCountSession: "已就緒！{count} 個媒體檔案已上傳到目錄：{session}",
        readyNewSession: "可以開始新的上傳會話",
        uploadAreaReset: "上傳區已重設，可繼續上傳新媒體。",
        supportedFormatsOnly: "目前僅支援 PNG、JPG、JPEG、GIF、WebP、MP4、MOV、WebM 與 M4V。",
        imageTooLarge: "圖片過大，最大支援 50MB。",
        videoTooLarge: "影片過大，最大支援 100MB。",
        videoTooLong: "影片時長過長，最長支援 {seconds} 秒。",
        initUploadFailed: "初始化上傳失敗。",
        completeUploadFailed: "完成上傳失敗。",
        uploading: "正在上傳：{name}...",
        uploaded: "已上傳：{name}",
        uploadErrorFile: "出錯：{name} - {error}"
      }
    },
    ja: {
      seo: {
        title: "Maiimg Hosting - 画像とショート動画をアップロードしてQR共有",
        description: "画像とショート動画をすばやくアップロードして共有。QR共有、閲覧制限、有効期限設定に対応した無料メディアホスティングです。",
        keywords: "maiimg hosting,画像アップロード,ショート動画アップロード,メディア共有,QR共有"
      },
      hero: {
        title: "画像とショート動画をアップロードして共有",
        subtitle: "写真とショート動画を、追跡とアクセス制御付きの共有QRリンクに変換します"
      },
      upload: {
        title: "メディアアップロードセンター",
        subtitle: "画像やショート動画をドラッグ&ドロップ、またはクリックして参照",
        ready: "画像とショート動画のアップロード準備完了",
        previewTitle: "選択したメディア"
      },
      flow: {
        step1: "メディアをアップロード"
      },
      features: {
        description: {
          description: "ギャラリーの説明を入力"
        },
        generate: {
          status: "すべての項目を入力し、メディアをアップロードしてください"
        }
      },
      results: {
        subtitle: "メディアギャラリーのリンクとQRコードが共有準備完了",
        stats: {
          images: "メディア"
        },
        galleryLink: "ギャラリーリンク",
        generatedLinkPlaceholder: "生成されたリンクがここに表示されます",
        copy: "コピー",
        scanHint: "スキャンしてギャラリーを開く",
        accessRecords: "アクセス記録",
        goToInsights: "アクセス記録へ移動",
        accessIntro: "この記録では、訪問者がギャラリーリンクを開いた時間を確認できます。",
        accessCodeLabel: "アクセス記録コード",
        copyCode: "コードをコピー",
        mediaFilesUploaded: "{count} 件のメディアをアップロード済み",
        openAccessRecords: "アクセス記録を開く",
        accessCodeHint: "このコードで、誰がいつリンクを開いたかを確認できます。"
      },
      messages: {
        unknownError: "不明なエラー",
        uploadMediaFirst: "先に少なくとも1件のメディアファイルをアップロードしてください！",
        generateReady: "QRコードを生成できます！",
        missingPrefix: "未入力: {items}",
        missingViewLimit: "表示制限",
        missingTimeControl: "時間制御",
        missingDescription: "説明",
        missingUpload: "メディアをアップロード",
        createMediaError: "メディアリンクの作成エラー: {error}",
        networkCreateMediaError: "メディアリンク作成中にネットワークエラーが発生しました。接続を確認して再試行してください。",
        accessCodeCopied: "アクセス記録コード「{code}」をクリップボードにコピーしました！",
        accessCodeCopiedPlain: "アクセス記録コードをクリップボードにコピーしました！",
        maxFilesExceeded: "アップロードできるのは最大25ファイルです！",
        uploadFailedShort: "アップロードに失敗しました。",
        invalidFileType: "対応している画像ファイルと動画ファイルのみアップロードできます。",
        fallbackMessage: "お使いのブラウザはドラッグ&ドロップアップロードに対応していません。",
        fileTooBig: "ファイルサイズが大きすぎます ({{filesize}}MB)。最大: {{maxFilesize}}MB。",
        removeFile: "ファイルを削除",
        cancelUpload: "アップロードをキャンセル",
        queued: "キューに追加: {name} (セッション: {session})",
        removed: "削除: {name}",
        readyUploadedCountSession: "準備完了! {count} 件のメディアがフォルダ {session} にアップロードされました",
        readyNewSession: "新しいアップロードセッションを開始できます",
        uploadAreaReset: "アップロードエリアをリセットしました。新しいメディアを追加できます。",
        supportedFormatsOnly: "現在対応しているのは PNG、JPG、JPEG、GIF、WebP、MP4、MOV、WebM、M4V のみです。",
        imageTooLarge: "画像サイズが大きすぎます。最大50MBです。",
        videoTooLarge: "動画サイズが大きすぎます。最大100MBです。",
        videoTooLong: "動画が長すぎます。最大 {seconds} 秒です。",
        initUploadFailed: "アップロードの初期化に失敗しました。",
        completeUploadFailed: "アップロードの完了に失敗しました。",
        uploading: "アップロード中: {name}...",
        uploaded: "アップロード済み: {name}",
        uploadErrorFile: "エラー: {name} - {error}"
      }
    },
    de: {
      seo: {
        title: "Maiimg Hosting - Bilder & Kurzvideos mit QR teilen",
        description: "Bilder und Kurzvideos in Sekunden hochladen und teilen. Kostenloses Medienhosting mit Direktlink, QR-Sharing, Aufruflimits und Ablaufsteuerung.",
        keywords: "maiimg hosting,medienhosting,bilder hochladen,kurzvideos hochladen,qr sharing"
      },
      hero: {
        title: "Bilder & Kurzvideos hochladen und teilen",
        subtitle: "Fotos und Kurzvideos in teilbare QR-Links mit Tracking und Zugriffskontrolle umwandeln"
      },
      upload: {
        title: "Medien-Upload-Center",
        subtitle: "Bilder oder Kurzvideos per Drag-and-drop hochladen oder zum Auswählen klicken",
        ready: "Bereit zum Hochladen von Bildern und Kurzvideos",
        previewTitle: "Ausgewählte Medien"
      },
      flow: {
        step1: "Medien hochladen"
      },
      features: {
        description: {
          description: "Galeriebeschreibung eingeben"
        },
        generate: {
          status: "Bitte alle Felder ausfüllen und zuerst Medien hochladen"
        }
      },
      results: {
        subtitle: "Ihr Mediengalerie-Link und QR-Code sind bereit zum Teilen",
        stats: {
          images: "Medien"
        },
        galleryLink: "Galerie-Link",
        generatedLinkPlaceholder: "Der generierte Link erscheint hier",
        copy: "Kopieren",
        scanHint: "Scannen, um die Galerie zu öffnen",
        accessRecords: "Zugriffsprotokolle",
        goToInsights: "Zu den Zugriffsprotokollen",
        accessIntro: "Diese Einträge zeigen, wann Besucher Ihren Galerie-Link öffnen.",
        accessCodeLabel: "Zugriffscode",
        copyCode: "Code kopieren",
        mediaFilesUploaded: "{count} Mediendateien hochgeladen",
        openAccessRecords: "Zugriffsprotokolle öffnen",
        accessCodeHint: "Mit diesem Code sehen Sie, wer den Link wann geöffnet hat."
      },
      messages: {
        unknownError: "Unbekannter Fehler",
        uploadMediaFirst: "Bitte laden Sie zuerst mindestens eine Mediendatei hoch!",
        generateReady: "Bereit zum Generieren des QR-Codes!",
        missingPrefix: "Fehlt: {items}",
        missingViewLimit: "Aufruflimit",
        missingTimeControl: "Zeitsteuerung",
        missingDescription: "Beschreibung",
        missingUpload: "Medien hochladen",
        createMediaError: "Fehler beim Erstellen des Medienlinks: {error}",
        networkCreateMediaError: "Netzwerkfehler beim Erstellen des Medienlinks. Bitte Verbindung prüfen und erneut versuchen.",
        accessCodeCopied: "Zugriffscode \"{code}\" in die Zwischenablage kopiert!",
        accessCodeCopiedPlain: "Zugriffscode in die Zwischenablage kopiert!",
        maxFilesExceeded: "Maximal 25 Dateien erlaubt!",
        uploadFailedShort: "Upload fehlgeschlagen.",
        invalidFileType: "Nur unterstützte Bild- und Videodateien sind erlaubt.",
        fallbackMessage: "Ihr Browser unterstützt kein Drag-and-drop-Upload.",
        fileTooBig: "Datei ist zu groß ({{filesize}}MB). Maximal: {{maxFilesize}}MB.",
        removeFile: "Datei entfernen",
        cancelUpload: "Upload abbrechen",
        queued: "In Warteschlange: {name} (Sitzung: {session})",
        removed: "Entfernt: {name}",
        readyUploadedCountSession: "Bereit! {count} Mediendateien in Ordner {session} hochgeladen",
        readyNewSession: "Bereit für eine neue Upload-Sitzung",
        uploadAreaReset: "Upload-Bereich zurückgesetzt. Bereit für neue Medien.",
        supportedFormatsOnly: "Derzeit werden nur PNG, JPG, JPEG, GIF, WebP, MP4, MOV, WebM und M4V unterstützt.",
        imageTooLarge: "Bild ist zu groß. Maximale Größe: 50MB.",
        videoTooLarge: "Video ist zu groß. Maximale Größe: 100MB.",
        videoTooLong: "Video ist zu lang. Maximale Dauer: {seconds} Sekunden.",
        initUploadFailed: "Upload konnte nicht initialisiert werden.",
        completeUploadFailed: "Upload konnte nicht abgeschlossen werden.",
        uploading: "Lädt hoch: {name}...",
        uploaded: "Hochgeladen: {name}",
        uploadErrorFile: "Fehler: {name} - {error}"
      }
    },
    ko: {
      seo: {
        title: "Maiimg Hosting - 이미지와 짧은 동영상을 QR로 공유",
        description: "이미지와 짧은 동영상을 빠르게 업로드하고 공유하세요. 직접 링크, QR 공유, 조회 제한, 만료 설정을 지원하는 무료 미디어 호스팅입니다.",
        keywords: "maiimg hosting,미디어 호스팅,이미지 업로드,짧은 동영상 업로드,QR 공유"
      },
      hero: {
        title: "이미지와 짧은 동영상 업로드 및 공유",
        subtitle: "사진과 짧은 동영상을 추적 및 접근 제어가 가능한 QR 링크로 바꾸세요"
      },
      upload: {
        title: "미디어 업로드 센터",
        subtitle: "이미지나 짧은 동영상을 드래그 앤 드롭하거나 클릭해서 찾아보세요",
        ready: "이미지와 짧은 동영상을 업로드할 준비가 되었습니다",
        previewTitle: "선택한 미디어"
      },
      flow: {
        step1: "미디어 업로드"
      },
      features: {
        description: {
          description: "갤러리 설명을 입력하세요"
        },
        generate: {
          status: "모든 항목을 입력하고 먼저 미디어를 업로드하세요"
        }
      },
      results: {
        subtitle: "미디어 갤러리 링크와 QR 코드를 공유할 수 있습니다",
        stats: {
          images: "미디어"
        },
        galleryLink: "갤러리 링크",
        generatedLinkPlaceholder: "생성된 링크가 여기에 표시됩니다",
        copy: "복사",
        scanHint: "스캔하여 갤러리 열기",
        accessRecords: "접속 기록",
        goToInsights: "접속 기록으로 이동",
        accessIntro: "방문자가 갤러리 링크를 연 시간을 여기서 확인할 수 있습니다.",
        accessCodeLabel: "접속 기록 코드",
        copyCode: "코드 복사",
        mediaFilesUploaded: "{count}개의 미디어 파일 업로드 완료",
        openAccessRecords: "접속 기록 열기",
        accessCodeHint: "이 코드로 누가 언제 링크를 열었는지 확인할 수 있습니다."
      },
      messages: {
        unknownError: "알 수 없는 오류",
        uploadMediaFirst: "먼저 미디어 파일을 하나 이상 업로드해주세요!",
        generateReady: "QR 코드를 생성할 준비가 되었습니다!",
        missingPrefix: "누락됨: {items}",
        missingViewLimit: "조회 제한",
        missingTimeControl: "시간 제어",
        missingDescription: "설명",
        missingUpload: "미디어 업로드",
        createMediaError: "미디어 링크 생성 오류: {error}",
        networkCreateMediaError: "미디어 링크 생성 중 네트워크 오류가 발생했습니다. 연결을 확인한 후 다시 시도하세요.",
        accessCodeCopied: "접속 기록 코드 \"{code}\"가 클립보드에 복사되었습니다!",
        accessCodeCopiedPlain: "접속 기록 코드가 클립보드에 복사되었습니다!",
        maxFilesExceeded: "최대 25개 파일까지 업로드할 수 있습니다!",
        uploadFailedShort: "업로드에 실패했습니다.",
        invalidFileType: "지원되는 이미지 및 동영상 파일만 업로드할 수 있습니다.",
        fallbackMessage: "브라우저가 드래그 앤 드롭 업로드를 지원하지 않습니다.",
        fileTooBig: "파일이 너무 큽니다 ({{filesize}}MB). 최대 크기: {{maxFilesize}}MB.",
        removeFile: "파일 제거",
        cancelUpload: "업로드 취소",
        queued: "대기열에 추가됨: {name} (세션: {session})",
        removed: "제거됨: {name}",
        readyUploadedCountSession: "준비 완료! {count}개의 미디어 파일이 {session} 폴더에 업로드되었습니다",
        readyNewSession: "새 업로드 세션을 시작할 수 있습니다",
        uploadAreaReset: "업로드 영역이 초기화되었습니다. 새 미디어를 업로드할 수 있습니다.",
        supportedFormatsOnly: "현재 PNG, JPG, JPEG, GIF, WebP, MP4, MOV, WebM, M4V만 지원합니다.",
        imageTooLarge: "이미지가 너무 큽니다. 최대 50MB까지 가능합니다.",
        videoTooLarge: "동영상이 너무 큽니다. 최대 100MB까지 가능합니다.",
        videoTooLong: "동영상이 너무 깁니다. 최대 길이는 {seconds}초입니다.",
        initUploadFailed: "업로드 초기화에 실패했습니다.",
        completeUploadFailed: "업로드 완료에 실패했습니다.",
        uploading: "업로드 중: {name}...",
        uploaded: "업로드 완료: {name}",
        uploadErrorFile: "오류: {name} - {error}"
      }
    },
    fr: {
      seo: {
        title: "Maiimg Hosting - Téléverser images et vidéos courtes avec partage QR",
        description: "Téléversez rapidement des images et vidéos courtes. Hébergement média gratuit avec lien direct, partage QR, limites de vues et expiration.",
        keywords: "maiimg hosting,hebergement media,televerser images,televerser videos courtes,partage QR"
      },
      hero: {
        title: "Téléverser et partager images et vidéos courtes",
        subtitle: "Transformez vos photos et vidéos courtes en liens QR partageables avec suivi et contrôle d'accès"
      },
      upload: {
        title: "Centre de téléversement média",
        subtitle: "Glissez-déposez des images ou vidéos courtes, ou cliquez pour parcourir",
        ready: "Prêt à téléverser des images et vidéos courtes",
        previewTitle: "Médias sélectionnés"
      },
      flow: {
        step1: "Téléverser des médias"
      },
      features: {
        description: {
          description: "Saisissez la description de la galerie"
        },
        generate: {
          status: "Remplissez tous les champs et téléversez d'abord les médias"
        }
      },
      results: {
        subtitle: "Le lien de votre galerie média et son code QR sont prêts à être partagés",
        stats: {
          images: "Médias"
        },
        galleryLink: "Lien de galerie",
        generatedLinkPlaceholder: "Le lien généré apparaîtra ici",
        copy: "Copier",
        scanHint: "Scannez pour ouvrir la galerie",
        accessRecords: "Historique d'accès",
        goToInsights: "Aller à l'historique d'accès",
        accessIntro: "Ces enregistrements montrent quand des visiteurs ouvrent votre lien de galerie.",
        accessCodeLabel: "Code d'accès aux enregistrements",
        copyCode: "Copier le code",
        mediaFilesUploaded: "{count} fichiers média téléversés",
        openAccessRecords: "Ouvrir l'historique d'accès",
        accessCodeHint: "Utilisez ce code pour voir qui a ouvert le lien et quand."
      },
      messages: {
        unknownError: "Erreur inconnue",
        uploadMediaFirst: "Veuillez d'abord téléverser au moins un fichier média !",
        generateReady: "Prêt à générer le code QR !",
        missingPrefix: "Manque : {items}",
        missingViewLimit: "Limite de vues",
        missingTimeControl: "Contrôle du temps",
        missingDescription: "Description",
        missingUpload: "Téléverser des médias",
        createMediaError: "Erreur lors de la création du lien média : {error}",
        networkCreateMediaError: "Erreur réseau lors de la création du lien média. Vérifiez votre connexion puis réessayez.",
        accessCodeCopied: "Le code d'accès \"{code}\" a été copié dans le presse-papiers !",
        accessCodeCopiedPlain: "Le code d'accès a été copié dans le presse-papiers !",
        maxFilesExceeded: "25 fichiers maximum autorisés !",
        uploadFailedShort: "Échec du téléversement.",
        invalidFileType: "Seuls les fichiers image et vidéo pris en charge sont autorisés.",
        fallbackMessage: "Votre navigateur ne prend pas en charge le téléversement par glisser-déposer.",
        fileTooBig: "Le fichier est trop volumineux ({{filesize}}MB). Taille max : {{maxFilesize}}MB.",
        removeFile: "Retirer le fichier",
        cancelUpload: "Annuler le téléversement",
        queued: "En file d'attente : {name} (session : {session})",
        removed: "Retiré : {name}",
        readyUploadedCountSession: "Prêt ! {count} fichiers média téléversés dans le dossier {session}",
        readyNewSession: "Prêt pour une nouvelle session de téléversement",
        uploadAreaReset: "Zone de téléversement réinitialisée. Prête pour de nouveaux médias.",
        supportedFormatsOnly: "Seuls PNG, JPG, JPEG, GIF, WebP, MP4, MOV, WebM et M4V sont actuellement pris en charge.",
        imageTooLarge: "L'image est trop volumineuse. Taille maximale : 50MB.",
        videoTooLarge: "La vidéo est trop volumineuse. Taille maximale : 100MB.",
        videoTooLong: "La vidéo est trop longue. Durée maximale : {seconds} secondes.",
        initUploadFailed: "Impossible d'initialiser le téléversement.",
        completeUploadFailed: "Impossible de finaliser le téléversement.",
        uploading: "Téléversement : {name}...",
        uploaded: "Téléversé : {name}",
        uploadErrorFile: "Erreur : {name} - {error}"
      }
    },
    it: {
      seo: {
        title: "Maiimg Hosting - Carica immagini e video brevi con condivisione QR",
        description: "Carica rapidamente immagini e video brevi. Hosting media gratuito con link diretto, condivisione QR, limiti di visualizzazione e scadenza.",
        keywords: "maiimg hosting,hosting media,caricare immagini,caricare video brevi,condivisione QR"
      },
      hero: {
        title: "Carica e condividi immagini e video brevi",
        subtitle: "Trasforma foto e video brevi in link QR condivisibili con tracciamento e controllo accessi"
      },
      upload: {
        title: "Centro caricamento media",
        subtitle: "Trascina immagini o video brevi, oppure clicca per sfogliare",
        ready: "Pronto a caricare immagini e video brevi",
        previewTitle: "Media selezionati"
      },
      flow: {
        step1: "Carica media"
      },
      features: {
        description: {
          description: "Inserisci la descrizione della galleria"
        },
        generate: {
          status: "Compila tutti i campi e carica prima i media"
        }
      },
      results: {
        subtitle: "Il link della tua galleria media e il codice QR sono pronti da condividere",
        stats: {
          images: "Media"
        },
        galleryLink: "Link galleria",
        generatedLinkPlaceholder: "Il link generato apparirà qui",
        copy: "Copia",
        scanHint: "Scansiona per aprire la galleria",
        accessRecords: "Registro accessi",
        goToInsights: "Vai al registro accessi",
        accessIntro: "Questi registri mostrano quando i visitatori aprono il link della galleria.",
        accessCodeLabel: "Codice registro accessi",
        copyCode: "Copia codice",
        mediaFilesUploaded: "{count} file media caricati",
        openAccessRecords: "Apri registro accessi",
        accessCodeHint: "Usa questo codice per vedere chi ha aperto il link e quando."
      },
      messages: {
        unknownError: "Errore sconosciuto",
        uploadMediaFirst: "Carica prima almeno un file multimediale!",
        generateReady: "Pronto per generare il codice QR!",
        missingPrefix: "Manca: {items}",
        missingViewLimit: "Limite visualizzazioni",
        missingTimeControl: "Controllo del tempo",
        missingDescription: "Descrizione",
        missingUpload: "Carica media",
        createMediaError: "Errore durante la creazione del link media: {error}",
        networkCreateMediaError: "Errore di rete durante la creazione del link media. Controlla la connessione e riprova.",
        accessCodeCopied: "Il codice di accesso \"{code}\" è stato copiato negli appunti!",
        accessCodeCopiedPlain: "Il codice di accesso è stato copiato negli appunti!",
        maxFilesExceeded: "Sono consentiti al massimo 25 file!",
        uploadFailedShort: "Caricamento non riuscito.",
        invalidFileType: "Sono consentiti solo file immagine e video supportati.",
        fallbackMessage: "Il tuo browser non supporta il caricamento drag-and-drop.",
        fileTooBig: "Il file è troppo grande ({{filesize}}MB). Dimensione massima: {{maxFilesize}}MB.",
        removeFile: "Rimuovi file",
        cancelUpload: "Annulla caricamento",
        queued: "In coda: {name} (sessione: {session})",
        removed: "Rimosso: {name}",
        readyUploadedCountSession: "Pronto! {count} file media caricati nella cartella {session}",
        readyNewSession: "Pronto per una nuova sessione di caricamento",
        uploadAreaReset: "Area di caricamento reimpostata. Pronta per nuovi media.",
        supportedFormatsOnly: "Al momento sono supportati solo PNG, JPG, JPEG, GIF, WebP, MP4, MOV, WebM e M4V.",
        imageTooLarge: "Immagine troppo grande. Dimensione massima: 50MB.",
        videoTooLarge: "Video troppo grande. Dimensione massima: 100MB.",
        videoTooLong: "Video troppo lungo. Durata massima: {seconds} secondi.",
        initUploadFailed: "Impossibile inizializzare il caricamento.",
        completeUploadFailed: "Impossibile completare il caricamento.",
        uploading: "Caricamento: {name}...",
        uploaded: "Caricato: {name}",
        uploadErrorFile: "Errore: {name} - {error}"
      }
    }
  };

  // Global i18n instance
  window.i18n = new I18n();
  Object.entries(PAGE_TRANSLATION_OVERRIDES).forEach(([lang, overrides]) => {
    if (window.i18n.translations[lang]) {
      mergeTranslationObjects(window.i18n.translations[lang], overrides);
    }
  });
  
  // Global function to change language (called from HTML)
  window.changeLanguage = function(lang) {
    window.i18n.setLanguage(lang);
  };

  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    window.i18n.init();
  });
