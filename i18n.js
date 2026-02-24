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
          dropText: "Drop images here or click to upload",
          supportText: "Supports: PNG, JPG, JPEG, GIF, WebP • Max 50MB each • Up to 25 files",
          ready: "Ready to upload images"
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
          waitBeforeResend: "Please wait before requesting again"
        },
        dash: {
          title: "My Galleries",
          newGallery: "New Gallery",
          total: "Total",
          active: "Active",
          deleted: "Deleted",
          selectTwo: "Select 2 galleries to swap",
          cancel: "Cancel",
          swap: "Swap",
          swapMode: "Swap Mode",
          refresh: "Refresh",
          loading: "Loading galleries...",
          noGalleries: "No galleries yet",
          createFirst: "Create your first gallery on the main page.",
          colCaption: "Caption",
          colViews: "Views",
          colLink: "Link",
          colStatus: "Status",
          colActions: "Actions",
          restoreTitle: "Restore Gallery",
          newViewCount: "New view count",
          restore: "Restore"
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
          dropText: "将图片拖放到此处或点击上传",
          supportText: "支持格式：PNG、JPG、JPEG、GIF、WebP • 每个文件最大50MB • 最多25个文件",
          ready: "准备上传图片"
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
          waitBeforeResend: "请稍后再发送"
        },
        dash: {
          title: "我的图集",
          newGallery: "新建图集",
          total: "总计",
          active: "有效",
          deleted: "已删除",
          selectTwo: "选择2个图集进行互换",
          cancel: "取消",
          swap: "互换",
          swapMode: "互换模式",
          refresh: "刷新",
          loading: "加载图集中...",
          noGalleries: "暂无图集",
          createFirst: "前往主页创建您的第一个图集。",
          colCaption: "标题",
          colViews: "查看次数",
          colLink: "链接",
          colStatus: "状态",
          colActions: "操作",
          restoreTitle: "恢复图集",
          newViewCount: "新的查看次数",
          restore: "恢复"
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
          dropText: "將圖片拖放到此處或點擊上傳",
          supportText: "支援格式：PNG、JPG、JPEG、GIF、WebP • 每個檔案最大50MB • 最多25個檔案",
          ready: "準備上傳圖片"
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
          waitBeforeResend: "請稍後再發送"
        },
        dash: {
          title: "我的圖集",
          newGallery: "新建圖集",
          total: "總計",
          active: "有效",
          deleted: "已刪除",
          selectTwo: "選擇2個圖集進行互換",
          cancel: "取消",
          swap: "互換",
          swapMode: "互換模式",
          refresh: "重新整理",
          loading: "載入圖集中...",
          noGalleries: "暫無圖集",
          createFirst: "前往首頁建立您的第一個圖集。",
          colCaption: "標題",
          colViews: "查看次數",
          colLink: "連結",
          colStatus: "狀態",
          colActions: "操作",
          restoreTitle: "恢復圖集",
          newViewCount: "新的查看次數",
          restore: "恢復"
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
          supportText: "対応形式：PNG、JPG、JPEG、GIF、WebP • 最大50MB • 最大25ファイル",
          ready: "画像のアップロード準備完了"
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
          waitBeforeResend: "しばらくお待ちください"
        },
        dash: {
          title: "マイギャラリー",
          newGallery: "新規ギャラリー",
          total: "合計",
          active: "有効",
          deleted: "削除済み",
          selectTwo: "入れ替えるギャラリーを2つ選択",
          cancel: "キャンセル",
          swap: "入れ替え",
          swapMode: "入れ替えモード",
          refresh: "更新",
          loading: "ギャラリーを読み込み中...",
          noGalleries: "ギャラリーがありません",
          createFirst: "メインページで最初のギャラリーを作成してください。",
          colCaption: "キャプション",
          colViews: "閲覧数",
          colLink: "リンク",
          colStatus: "ステータス",
          colActions: "操作",
          restoreTitle: "ギャラリーを復元",
          newViewCount: "新しい閲覧数",
          restore: "復元"
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
          supportText: "Unterstützt: PNG, JPG, JPEG, GIF, WebP • Max. 50MB je Datei • Bis zu 25 Dateien",
          ready: "Bereit zum Hochladen von Bildern"
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
          waitBeforeResend: "Bitte warten Sie vor dem erneuten Senden"
        },
        dash: {
          title: "Meine Galerien",
          newGallery: "Neue Galerie",
          total: "Gesamt",
          active: "Aktiv",
          deleted: "Gelöscht",
          selectTwo: "2 Galerien zum Tauschen auswählen",
          cancel: "Abbrechen",
          swap: "Tauschen",
          swapMode: "Tauschmodus",
          refresh: "Aktualisieren",
          loading: "Galerien werden geladen...",
          noGalleries: "Noch keine Galerien",
          createFirst: "Erstellen Sie Ihre erste Galerie auf der Hauptseite.",
          colCaption: "Titel",
          colViews: "Aufrufe",
          colLink: "Link",
          colStatus: "Status",
          colActions: "Aktionen",
          restoreTitle: "Galerie wiederherstellen",
          newViewCount: "Neue Aufrufanzahl",
          restore: "Wiederherstellen"
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
          supportText: "지원 형식: PNG, JPG, JPEG, GIF, WebP • 파일당 최대 50MB • 최대 25개 파일",
          ready: "이미지 업로드 준비 완료"
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
          waitBeforeResend: "잠시 후에 다시 시도해주세요"
        },
        dash: {
          title: "내 갤러리",
          newGallery: "새 갤러리",
          total: "전체",
          active: "활성",
          deleted: "삭제됨",
          selectTwo: "교환할 갤러리 2개 선택",
          cancel: "취소",
          swap: "교환",
          swapMode: "교환 모드",
          refresh: "새로고침",
          loading: "갤러리 로딩 중...",
          noGalleries: "갤러리가 없습니다",
          createFirst: "메인 페이지에서 첫 번째 갤러리를 만드세요.",
          colCaption: "제목",
          colViews: "조회수",
          colLink: "링크",
          colStatus: "상태",
          colActions: "작업",
          restoreTitle: "갤러리 복원",
          newViewCount: "새 조회수",
          restore: "복원"
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
          supportText: "Formats supportés : PNG, JPG, JPEG, GIF, WebP • Max 50MB chacun • Jusqu'à 25 fichiers",
          ready: "Prêt à télécharger des images"
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
          waitBeforeResend: "Veuillez patienter avant de renvoyer"
        },
        dash: {
          title: "Mes galeries",
          newGallery: "Nouvelle galerie",
          total: "Total",
          active: "Actif",
          deleted: "Supprimé",
          selectTwo: "Sélectionnez 2 galeries à échanger",
          cancel: "Annuler",
          swap: "Échanger",
          swapMode: "Mode échange",
          refresh: "Actualiser",
          loading: "Chargement des galeries...",
          noGalleries: "Aucune galerie",
          createFirst: "Créez votre première galerie sur la page principale.",
          colCaption: "Titre",
          colViews: "Vues",
          colLink: "Lien",
          colStatus: "Statut",
          colActions: "Actions",
          restoreTitle: "Restaurer la galerie",
          newViewCount: "Nouveau nombre de vues",
          restore: "Restaurer"
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
          supportText: "Supporta: PNG, JPG, JPEG, GIF, WebP • Max 50MB ciascuno • Fino a 25 file",
          ready: "Pronto per caricare immagini"
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
          waitBeforeResend: "Attendi prima di rinviare"
        },
        dash: {
          title: "Le mie gallerie",
          newGallery: "Nuova galleria",
          total: "Totale",
          active: "Attivo",
          deleted: "Eliminato",
          selectTwo: "Seleziona 2 gallerie da scambiare",
          cancel: "Annulla",
          swap: "Scambia",
          swapMode: "Modalità scambio",
          refresh: "Aggiorna",
          loading: "Caricamento gallerie...",
          noGalleries: "Nessuna galleria",
          createFirst: "Crea la tua prima galleria nella pagina principale.",
          colCaption: "Titolo",
          colViews: "Visualizzazioni",
          colLink: "Link",
          colStatus: "Stato",
          colActions: "Azioni",
          restoreTitle: "Ripristina galleria",
          newViewCount: "Nuovo conteggio visualizzazioni",
          restore: "Ripristina"
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

// Global i18n instance
window.i18n = new I18n();

// Global function to change language (called from HTML)
window.changeLanguage = function(lang) {
  window.i18n.setLanguage(lang);
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.i18n.init();
});
