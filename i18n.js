// Internationalization system for QR Image Generator
class I18n {
  constructor() {
    this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage();
    this.translations = {
      en: {
        // Navigation
        nav: {
          title: "Image QR Generator"
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
          supportText: "Supports: PNG, JPG, JPEG, GIF, WebP • Max 50MB each • Up to 9 files",
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
        }
      },
      
      zh: {
        // Navigation
        nav: {
          title: "图片二维码生成器"
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
          supportText: "支持格式：PNG、JPG、JPEG、GIF、WebP • 每个文件最大50MB • 最多9个文件",
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
        }
      },

      tw: {
        // Navigation
        nav: {
          title: "圖片二維碼生成器"
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
          supportText: "支援格式：PNG、JPG、JPEG、GIF、WebP • 每個檔案最大50MB • 最多9個檔案",
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
        }
      },

      ja: {
        // Navigation
        nav: {
          title: "画像QRコード生成器"
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
          supportText: "対応形式：PNG、JPG、JPEG、GIF、WebP • 最大50MB • 最大9ファイル",
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
        }
      },

      de: {
        // Navigation
        nav: {
          title: "Bild-QR-Generator"
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
          supportText: "Unterstützt: PNG, JPG, JPEG, GIF, WebP • Max. 50MB je Datei • Bis zu 9 Dateien",
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
        }
      },

      ko: {
        // Navigation
        nav: {
          title: "이미지 QR 생성기"
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
          supportText: "지원 형식: PNG, JPG, JPEG, GIF, WebP • 파일당 최대 50MB • 최대 9개 파일",
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
        }
      },

      fr: {
        // Navigation
        nav: {
          title: "Générateur QR d'Images"
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
          supportText: "Formats supportés : PNG, JPG, JPEG, GIF, WebP • Max 50MB chacun • Jusqu'à 9 fichiers",
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
        }
      },

      it: {
        // Navigation
        nav: {
          title: "Generatore QR di Immagini"
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
          supportText: "Supporta: PNG, JPG, JPEG, GIF, WebP • Max 50MB ciascuno • Fino a 9 file",
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

  // Initialize i18n system
  init() {
    this.updatePageTranslations();
    this.updateLanguageSelector();
    
    // Set HTML lang attribute
    document.documentElement.lang = this.currentLanguage;
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
