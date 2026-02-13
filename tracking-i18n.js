// Internationalization system for Tracking Code Decoder page
class TrackingI18n {
  constructor() {
    this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage();
    this.translations = {
      en: {
        // Page title and meta
        page: {
          title: "Access Record Decoder - Gallery Access Logs",
          description: "Decode access record code to view gallery access logs"
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
        
        // Header section
        header: {
          title: "Access Record Decoder",
          subtitle: ""
        },
        
        // Decoder form
        decoder: {
          title: "Decode Access Record",
          trackingCodeLabel: "Access Record Code",
          trackingCodePlaceholder: "Enter complex encoded access record code (e.g., XgaLrs)",
          trackingCodeHelp: "This is the complex encoded string obtained from QR generation results",
          decodeButton: "Decode & Query",
          decoding: "Decoding...",
          decodeResultTitle: "Decode Result",
          originalCode: "Original Access Record Code:",
          decodedId: "Decoded Gallery ID:"
        },
        
        // Loading states
        loading: {
          queryingLogs: "Querying access logs...",
          loading: "Loading..."
        },
        
        // Gallery information
        gallery: {
          title: "Gallery Information",
          databaseId: "Database ID",
          viewLimit: "View Limit",
          timeLimit: "Time Limit",
          description: "Description",
          createdTime: "Created Time",
          unlimited: "Unlimited",
          times: "times",
          seconds: "seconds",
          noDescription: "No description",
          originalLink: "Original Link",
          clickToView: "Click to view gallery"
        },
        
        // Statistics
        statistics: {
          title: "Access Statistics",
          totalAccess: "Total Access",
          uniqueIPs: "Unique IPs", 
          differentBrowsers: "Different Browsers",
          firstAccess: "First Access"
        },
        
        // Access logs
        accessLogs: {
          title: "Access Logs",
          accessTime: "Access Time",
          ipAddress: "IP Address",
          browser: "Browser",
          referrer: "Referrer",
          noLogs: "No access logs yet",
          directAccess: "Direct Access"
        },
        
        // Error messages
        errors: {
          title: "Query Failed",
          enterCode: "Please enter access record code",
          invalidCode: "Invalid access record code or decode failed",
          apiError: "API request failed",
          queryFailed: "Failed to query access logs",
          checksumFailed: "Checksum verification failed",
          invalidCharacter: "Invalid character in encoded string",
          cooldown: "Please wait",
          seconds: "seconds before making another query",
          refreshWarning: "(Refreshing page won't reset this timer)"
        },
        
        // Delete functionality
        delete: {
          button: "Delete Gallery",
          title: "Confirm Gallery Deletion",
          warning: "This action will set the view count to 0, effectively \"deleting\" the gallery access.",
          details: "Gallery Details:",
          confirmLabel: "Type the confirmation code to proceed:",
          confirmPlaceholder: "Enter confirmation code here",
          confirmCode: "Confirmation code:",
          operationInfo: "This operation will:",
          setViewsZero: "Set the gallery view count to 0",
          preventAccess: "Prevent further access to the gallery",
          logOperation: "Log this deletion operation",
          cannotUndo: "Cannot be undone through this interface",
          cancel: "Cancel",
          delete: "Delete Gallery",
          deleting: "Deleting...",
          success: "Gallery Deleted Successfully!",
          successMessage: "has been deleted (view count set to 0).",
          failed: "Delete failed:"
        },
        
        // Success messages
        success: {
          decodeSuccess: "Decode successful",
          querySuccess: "Query completed successfully"
        }
      },
      
      zh: {
        // Page title and meta
        page: {
          title: "访问记录解码器 - 图库访问日志",
          description: "解码访问记录码查看图库访问日志"
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
        
        // Header section
        header: {
          title: "访问记录解码器",
          subtitle: ""
        },
        
        // Decoder form
        decoder: {
          title: "解码访问记录",
          trackingCodeLabel: "访问记录码",
          trackingCodePlaceholder: "输入复杂编码的访问记录码（例如：XgaLrs）",
          trackingCodeHelp: "这是从二维码生成结果获得的复杂编码字符串",
          decodeButton: "解码并查询",
          decoding: "解码中...",
          decodeResultTitle: "解码结果",
          originalCode: "原始访问记录码：",
          decodedId: "解码后的图库ID："
        },
        
        // Loading states
        loading: {
          queryingLogs: "正在查询访问日志...",
          loading: "加载中..."
        },
        
        // Gallery information
        gallery: {
          title: "图库信息",
          databaseId: "数据库ID",
          viewLimit: "查看限制",
          timeLimit: "时间限制",
          description: "描述",
          createdTime: "创建时间",
          unlimited: "无限制",
          times: "次",
          seconds: "秒",
          noDescription: "无描述",
          originalLink: "原链接",
          clickToView: "点击查看图库"
        },
        
        // Statistics
        statistics: {
          title: "访问统计",
          totalAccess: "总访问次数",
          uniqueIPs: "唯一IP", 
          differentBrowsers: "不同浏览器",
          firstAccess: "首次访问"
        },
        
        // Access logs
        accessLogs: {
          title: "访问日志",
          accessTime: "访问时间",
          ipAddress: "IP地址",
          browser: "浏览器",
          referrer: "来源",
          noLogs: "暂无访问日志",
          directAccess: "直接访问"
        },
        
        // Error messages
        errors: {
          title: "查询失败",
          enterCode: "请输入访问记录码",
          invalidCode: "无效的访问记录码或解码失败",
          apiError: "API请求失败",
          queryFailed: "查询访问日志失败",
          checksumFailed: "校验和验证失败",
          invalidCharacter: "编码字符串中包含无效字符",
          cooldown: "请等待",
          seconds: "秒后再进行查询",
          refreshWarning: "（刷新页面不会重置此计时器）"
        },
        
        // Delete functionality
        delete: {
          button: "删除图库",
          title: "确认删除图库",
          warning: "此操作将把查看次数设置为0，有效地\"删除\"图库访问。",
          details: "图库详情：",
          confirmLabel: "输入确认代码以继续：",
          confirmPlaceholder: "在此输入确认代码",
          confirmCode: "确认代码：",
          operationInfo: "此操作将：",
          setViewsZero: "将图库查看次数设置为0",
          preventAccess: "阻止进一步访问图库",
          logOperation: "记录此删除操作",
          cannotUndo: "无法通过此界面撤销",
          cancel: "取消",
          delete: "删除图库",
          deleting: "删除中...",
          success: "图库删除成功！",
          successMessage: "已被删除（查看次数设置为0）。",
          failed: "删除失败："
        },
        
        // Success messages
        success: {
          decodeSuccess: "解码成功",
          querySuccess: "查询完成"
        }
      },
      
      tw: {
        // Page title and meta
        page: {
          title: "存取記錄解碼器 - 圖庫存取日誌",
          description: "解碼存取記錄碼檢視圖庫存取日誌"
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
        
        // Header section
        header: {
          title: "存取記錄解碼器",
          subtitle: ""
        },
        
        // Decoder form
        decoder: {
          title: "解碼存取記錄",
          trackingCodeLabel: "存取記錄碼",
          trackingCodePlaceholder: "輸入複雜編碼的存取記錄碼（例如：XgaLrs）",
          trackingCodeHelp: "這是從二維碼生成結果獲得的複雜編碼字串",
          decodeButton: "解碼並查詢",
          decoding: "解碼中...",
          decodeResultTitle: "解碼結果",
          originalCode: "原始存取記錄碼：",
          decodedId: "解碼後的圖庫ID："
        },
        
        // Loading states
        loading: {
          queryingLogs: "正在查詢存取日誌...",
          loading: "載入中..."
        },
        
        // Gallery information
        gallery: {
          title: "圖庫資訊",
          databaseId: "資料庫ID",
          viewLimit: "檢視限制",
          timeLimit: "時間限制",
          description: "描述",
          createdTime: "建立時間",
          unlimited: "無限制",
          times: "次",
          seconds: "秒",
          noDescription: "無描述",
          originalLink: "原連結",
          clickToView: "點擊查看圖庫"
        },
        
        // Statistics
        statistics: {
          title: "存取統計",
          totalAccess: "總存取次數",
          uniqueIPs: "唯一IP", 
          differentBrowsers: "不同瀏覽器",
          firstAccess: "首次存取"
        },
        
        // Access logs
        accessLogs: {
          title: "存取日誌",
          accessTime: "存取時間",
          ipAddress: "IP位址",
          browser: "瀏覽器",
          referrer: "來源",
          noLogs: "暫無存取日誌",
          directAccess: "直接存取"
        },
        
        // Error messages
        errors: {
          title: "查詢失敗",
          enterCode: "請輸入存取記錄碼",
          invalidCode: "無效的存取記錄碼或解碼失敗",
          apiError: "API請求失敗",
          queryFailed: "查詢存取日誌失敗",
          checksumFailed: "校驗和驗證失敗",
          invalidCharacter: "編碼字串中包含無效字元",
          cooldown: "請等待",
          seconds: "秒後再進行查詢",
          refreshWarning: "（重新整理頁面不會重置此計時器）"
        },
        
        // Delete functionality
        delete: {
          button: "刪除圖庫",
          title: "確認刪除圖庫",
          warning: "此操作將把檢視次數設置為0，有效地\"刪除\"圖庫存取。",
          details: "圖庫詳情：",
          confirmLabel: "輸入確認代碼以繼續：",
          confirmPlaceholder: "在此輸入確認代碼",
          confirmCode: "確認代碼：",
          operationInfo: "此操作將：",
          setViewsZero: "將圖庫檢視次數設置為0",
          preventAccess: "阻止進一步存取圖庫",
          logOperation: "記錄此刪除操作",
          cannotUndo: "無法通過此界面撤銷",
          cancel: "取消",
          delete: "刪除圖庫",
          deleting: "刪除中...",
          success: "圖庫刪除成功！",
          successMessage: "已被刪除（檢視次數設置為0）。",
          failed: "刪除失敗："
        },
        
        // Success messages
        success: {
          decodeSuccess: "解碼成功",
          querySuccess: "查詢完成"
        }
      },
      
      ja: {
        // Page title and meta
        page: {
          title: "トラッキングコードデコーダー - ギャラリーアクセスログ",
          description: "トラッキングコードを入力して対応するギャラリーアクセスログを表示"
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
        
        // Header section
        header: {
          title: "トラッキングコードデコーダー",
          subtitle: "トラッキングコードを入力して対応するギャラリーアクセスログを表示"
        },
        
        // Decoder form
        decoder: {
          title: "トラッキングコードをデコード",
          trackingCodeLabel: "トラッキングコード",
          trackingCodePlaceholder: "複雑にエンコードされたトラッキングコードを入力（例：XgaLrs）",
          trackingCodeHelp: "これはQR生成結果から取得された複雑にエンコードされた文字列です",
          decodeButton: "デコードして照会",
          decoding: "デコード中...",
          decodeResultTitle: "デコード結果",
          originalCode: "元のトラッキングコード：",
          decodedId: "デコードされたギャラリーID："
        },
        
        // Loading states
        loading: {
          queryingLogs: "アクセスログを照会中...",
          loading: "読み込み中..."
        },
        
        // Gallery information
        gallery: {
          title: "ギャラリー情報",
          databaseId: "データベースID",
          viewLimit: "表示制限",
          timeLimit: "時間制限",
          description: "説明",
          createdTime: "作成時間",
          unlimited: "無制限",
          times: "回",
          seconds: "秒",
          noDescription: "説明なし",
          originalLink: "元のリンク",
          clickToView: "ギャラリーを表示するにはクリック"
        },
        
        // Statistics
        statistics: {
          title: "アクセス統計",
          totalAccess: "総アクセス数",
          uniqueIPs: "ユニークIP", 
          differentBrowsers: "異なるブラウザ",
          firstAccess: "初回アクセス"
        },
        
        // Access logs
        accessLogs: {
          title: "アクセスログ",
          accessTime: "アクセス時間",
          ipAddress: "IPアドレス",
          browser: "ブラウザ",
          referrer: "参照元",
          noLogs: "アクセスログはまだありません",
          directAccess: "直接アクセス"
        },
        
        // Error messages
        errors: {
          title: "照会失敗",
          enterCode: "トラッキングコードを入力してください",
          invalidCode: "無効なトラッキングコードまたはデコード失敗",
          apiError: "APIリクエストが失敗しました",
          queryFailed: "アクセスログの照会に失敗しました",
          checksumFailed: "チェックサム検証に失敗しました",
          invalidCharacter: "エンコードされた文字列に無効な文字が含まれています"
        },
        
        // Success messages
        success: {
          decodeSuccess: "デコード成功",
          querySuccess: "照会完了"
        }
      },
      
      de: {
        // Page title and meta
        page: {
          title: "Tracking-Code-Decoder - Galerie-Zugriffsprotokolle",
          description: "Geben Sie den Tracking-Code ein, um die entsprechenden Galerie-Zugriffsprotokolle anzuzeigen"
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
        
        // Header section
        header: {
          title: "Tracking-Code-Decoder",
          subtitle: "Geben Sie den Tracking-Code ein, um die entsprechenden Galerie-Zugriffsprotokolle anzuzeigen"
        },
        
        // Decoder form
        decoder: {
          title: "Tracking-Code decodieren",
          trackingCodeLabel: "Tracking-Code",
          trackingCodePlaceholder: "Komplex codierten Tracking-Code eingeben (z.B.: XgaLrs)",
          trackingCodeHelp: "Dies ist der komplex codierte String, der aus QR-Generierungsergebnissen gewonnen wurde",
          decodeButton: "Decodieren & Abfragen",
          decoding: "Decodierung...",
          decodeResultTitle: "Decodierungsergebnis",
          originalCode: "Original Tracking-Code:",
          decodedId: "Decodierte Galerie-ID:"
        },
        
        // Loading states
        loading: {
          queryingLogs: "Zugriffsprotokolle werden abgefragt...",
          loading: "Laden..."
        },
        
        // Gallery information
        gallery: {
          title: "Galerie-Informationen",
          databaseId: "Datenbank-ID",
          viewLimit: "Anzeige-Limit",
          timeLimit: "Zeit-Limit",
          description: "Beschreibung",
          createdTime: "Erstellungszeit",
          unlimited: "Unbegrenzt",
          times: "mal",
          seconds: "Sekunden",
          noDescription: "Keine Beschreibung",
          originalLink: "Original-Link",
          clickToView: "Klicken Sie, um die Galerie anzuzeigen"
        },
        
        // Statistics
        statistics: {
          title: "Zugriffs-Statistiken",
          totalAccess: "Gesamtzugriffe",
          uniqueIPs: "Eindeutige IPs", 
          differentBrowsers: "Verschiedene Browser",
          firstAccess: "Erster Zugriff"
        },
        
        // Access logs
        accessLogs: {
          title: "Zugriffsprotokolle",
          accessTime: "Zugriffszeit",
          ipAddress: "IP-Adresse",
          browser: "Browser",
          referrer: "Verweis",
          noLogs: "Noch keine Zugriffsprotokolle",
          directAccess: "Direkter Zugriff"
        },
        
        // Error messages
        errors: {
          title: "Abfrage fehlgeschlagen",
          enterCode: "Bitte geben Sie den Tracking-Code ein",
          invalidCode: "Ungültiger Tracking-Code oder Decodierung fehlgeschlagen",
          apiError: "API-Anfrage fehlgeschlagen",
          queryFailed: "Abfrage der Zugriffsprotokolle fehlgeschlagen",
          checksumFailed: "Prüfsummen-Verifikation fehlgeschlagen",
          invalidCharacter: "Ungültiges Zeichen in codierter Zeichenkette"
        },
        
        // Success messages
        success: {
          decodeSuccess: "Decodierung erfolgreich",
          querySuccess: "Abfrage abgeschlossen"
        }
      },
      
      ko: {
        // Page title and meta
        page: {
          title: "추적 코드 디코더 - 갤러리 접근 로그",
          description: "추적 코드를 입력하여 해당 갤러리 접근 로그를 확인하세요"
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
        
        // Header section
        header: {
          title: "추적 코드 디코더",
          subtitle: "추적 코드를 입력하여 해당 갤러리 접근 로그를 확인하세요"
        },
        
        // Decoder form
        decoder: {
          title: "추적 코드 디코딩",
          trackingCodeLabel: "추적 코드",
          trackingCodePlaceholder: "복잡하게 인코딩된 추적 코드를 입력하세요 (예: XgaLrs)",
          trackingCodeHelp: "이는 QR 생성 결과에서 얻은 복잡하게 인코딩된 문자열입니다",
          decodeButton: "디코딩 및 조회",
          decoding: "디코딩 중...",
          decodeResultTitle: "디코딩 결과",
          originalCode: "원본 추적 코드:",
          decodedId: "디코딩된 갤러리 ID:"
        },
        
        // Loading states
        loading: {
          queryingLogs: "접근 로그 조회 중...",
          loading: "로딩 중..."
        },
        
        // Gallery information
        gallery: {
          title: "갤러리 정보",
          databaseId: "데이터베이스 ID",
          viewLimit: "조회 제한",
          timeLimit: "시간 제한",
          description: "설명",
          createdTime: "생성 시간",
          unlimited: "무제한",
          times: "회",
          seconds: "초",
          noDescription: "설명 없음",
          originalLink: "원본 링크",
          clickToView: "갤러리 보려면 클릭"
        },
        
        // Statistics
        statistics: {
          title: "접근 통계",
          totalAccess: "총 접근 수",
          uniqueIPs: "고유 IP", 
          differentBrowsers: "다른 브라우저",
          firstAccess: "첫 접근"
        },
        
        // Access logs
        accessLogs: {
          title: "접근 로그",
          accessTime: "접근 시간",
          ipAddress: "IP 주소",
          browser: "브라우저",
          referrer: "참조자",
          noLogs: "아직 접근 로그가 없습니다",
          directAccess: "직접 접근"
        },
        
        // Error messages
        errors: {
          title: "조회 실패",
          enterCode: "추적 코드를 입력해주세요",
          invalidCode: "유효하지 않은 추적 코드이거나 디코딩에 실패했습니다",
          apiError: "API 요청이 실패했습니다",
          queryFailed: "접근 로그 조회에 실패했습니다",
          checksumFailed: "체크섬 검증에 실패했습니다",
          invalidCharacter: "인코딩된 문자열에 유효하지 않은 문자가 포함되어 있습니다"
        },
        
        // Success messages
        success: {
          decodeSuccess: "디코딩 성공",
          querySuccess: "조회 완료"
        }
      },
      
      fr: {
        // Page title and meta
        page: {
          title: "Décodeur de Code de Suivi - Journaux d'Accès de Galerie",
          description: "Entrez le code de suivi pour afficher les journaux d'accès de galerie correspondants"
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
        
        // Header section
        header: {
          title: "Décodeur de Code de Suivi",
          subtitle: "Entrez le code de suivi pour afficher les journaux d'accès de galerie correspondants"
        },
        
        // Decoder form
        decoder: {
          title: "Décoder le Code de Suivi",
          trackingCodeLabel: "Code de Suivi",
          trackingCodePlaceholder: "Entrez le code de suivi complexement encodé (ex: XgaLrs)",
          trackingCodeHelp: "C'est la chaîne complexement encodée obtenue à partir des résultats de génération QR",
          decodeButton: "Décoder et Requêter",
          decoding: "Décodage...",
          decodeResultTitle: "Résultat du Décodage",
          originalCode: "Code de Suivi Original:",
          decodedId: "ID de Galerie Décodé:"
        },
        
        // Loading states
        loading: {
          queryingLogs: "Requête des journaux d'accès...",
          loading: "Chargement..."
        },
        
        // Gallery information
        gallery: {
          title: "Informations de la Galerie",
          databaseId: "ID Base de Données",
          viewLimit: "Limite de Vues",
          timeLimit: "Limite de Temps",
          description: "Description",
          createdTime: "Heure de Création",
          unlimited: "Illimité",
          times: "fois",
          seconds: "secondes",
          noDescription: "Aucune description",
          originalLink: "Lien Original",
          clickToView: "Cliquez pour voir la galerie"
        },
        
        // Statistics
        statistics: {
          title: "Statistiques d'Accès",
          totalAccess: "Accès Total",
          uniqueIPs: "IPs Uniques", 
          differentBrowsers: "Navigateurs Différents",
          firstAccess: "Premier Accès"
        },
        
        // Access logs
        accessLogs: {
          title: "Journaux d'Accès",
          accessTime: "Heure d'Accès",
          ipAddress: "Adresse IP",
          browser: "Navigateur",
          referrer: "Référent",
          noLogs: "Aucun journal d'accès pour le moment",
          directAccess: "Accès Direct"
        },
        
        // Error messages
        errors: {
          title: "Échec de la Requête",
          enterCode: "Veuillez entrer le code de suivi",
          invalidCode: "Code de suivi invalide ou échec du décodage",
          apiError: "Échec de la requête API",
          queryFailed: "Échec de la requête des journaux d'accès",
          checksumFailed: "Échec de la vérification de la somme de contrôle",
          invalidCharacter: "Caractère invalide dans la chaîne encodée"
        },
        
        // Success messages
        success: {
          decodeSuccess: "Décodage réussi",
          querySuccess: "Requête terminée avec succès"
        }
      },
      
      it: {
        // Page title and meta
        page: {
          title: "Decodificatore Codice di Tracciamento - Log di Accesso Galleria",
          description: "Inserisci il codice di tracciamento per visualizzare i log di accesso della galleria corrispondenti"
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
        
        // Header section
        header: {
          title: "Decodificatore Codice di Tracciamento",
          subtitle: "Inserisci il codice di tracciamento per visualizzare i log di accesso della galleria corrispondenti"
        },
        
        // Decoder form
        decoder: {
          title: "Decodifica Codice di Tracciamento",
          trackingCodeLabel: "Codice di Tracciamento",
          trackingCodePlaceholder: "Inserisci il codice di tracciamento codificato in modo complesso (es: XgaLrs)",
          trackingCodeHelp: "Questa è la stringa codificata in modo complesso ottenuta dai risultati di generazione QR",
          decodeButton: "Decodifica e Interroga",
          decoding: "Decodifica...",
          decodeResultTitle: "Risultato della Decodifica",
          originalCode: "Codice di Tracciamento Originale:",
          decodedId: "ID Galleria Decodificato:"
        },
        
        // Loading states
        loading: {
          queryingLogs: "Interrogazione log di accesso...",
          loading: "Caricamento..."
        },
        
        // Gallery information
        gallery: {
          title: "Informazioni Galleria",
          databaseId: "ID Database",
          viewLimit: "Limite Visualizzazioni",
          timeLimit: "Limite Tempo",
          description: "Descrizione",
          createdTime: "Ora di Creazione",
          unlimited: "Illimitato",
          times: "volte",
          seconds: "secondi",
          noDescription: "Nessuna descrizione",
          originalLink: "Link Originale",
          clickToView: "Clicca per visualizzare la galleria"
        },
        
        // Statistics
        statistics: {
          title: "Statistiche di Accesso",
          totalAccess: "Accessi Totali",
          uniqueIPs: "IP Unici", 
          differentBrowsers: "Browser Diversi",
          firstAccess: "Primo Accesso"
        },
        
        // Access logs
        accessLogs: {
          title: "Log di Accesso",
          accessTime: "Ora di Accesso",
          ipAddress: "Indirizzo IP",
          browser: "Browser",
          referrer: "Referrer",
          noLogs: "Nessun log di accesso ancora",
          directAccess: "Accesso Diretto"
        },
        
        // Error messages
        errors: {
          title: "Interrogazione Fallita",
          enterCode: "Inserisci il codice di tracciamento",
          invalidCode: "Codice di tracciamento non valido o decodifica fallita",
          apiError: "Richiesta API fallita",
          queryFailed: "Interrogazione log di accesso fallita",
          checksumFailed: "Verifica checksum fallita",
          invalidCharacter: "Carattere non valido nella stringa codificata"
        },
        
        // Success messages
        success: {
          decodeSuccess: "Decodifica riuscita",
          querySuccess: "Interrogazione completata con successo"
        }
      }
    };
  }

  // Get stored language from localStorage
  getStoredLanguage() {
    return localStorage.getItem('preferredLanguage');
  }

  // Store language preference
  setStoredLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
  }

  // Detect browser language
  detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    // More precise browser language detection
    if (browserLang.startsWith('zh-CN') || browserLang.startsWith('zh-Hans')) {
      return 'zh'; // Simplified Chinese
    } else if (browserLang.startsWith('zh-TW') || browserLang.startsWith('zh-Hant')) {
      return 'tw'; // Traditional Chinese
    } else if (browserLang.startsWith('ja')) {
      return 'ja'; // Japanese
    } else if (browserLang.startsWith('ko')) {
      return 'ko'; // Korean
    } else if (browserLang.startsWith('de')) {
      return 'de'; // German
    } else if (browserLang.startsWith('fr')) {
      return 'fr'; // French
    } else if (browserLang.startsWith('it')) {
      return 'it'; // Italian
    } else {
      return 'en'; // Default to English
    }
  }

  // Get translation for a key
  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  }

  // Change language
  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLanguage = lang;
      this.setStoredLanguage(lang);
      this.updatePageTranslations();
      this.updateLanguageSelector();
      
      // Also refresh dynamic content if the function exists
      if (typeof window.refreshDynamicTranslations === 'function') {
        window.refreshDynamicTranslations();
      }
    }
  }

  // Update page title
  updatePageTitle() {
    document.title = this.t('page.title');
    
    // Update meta description if exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', this.t('page.description'));
    }
  }

  // Update all translations on the page
  updatePageTranslations() {
    // Update page title
    this.updatePageTitle();
    
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

    // Update innerHTML for elements with data-translate-html
    document.querySelectorAll('[data-translate-html]').forEach(element => {
      const key = element.getAttribute('data-translate-html');
      element.innerHTML = this.t(key);
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

  // Helper method to get formatted text with variables
  format(key, variables = {}) {
    let text = this.t(key);
    
    // Replace variables in format {variable}
    Object.keys(variables).forEach(variable => {
      const placeholder = `{${variable}}`;
      text = text.replace(new RegExp(placeholder, 'g'), variables[variable]);
    });
    
    return text;
  }
}

// Global tracking i18n instance
window.trackingI18n = new TrackingI18n();

// Global function to change language (called from HTML)
window.changeTrackingLanguage = function(lang) {
  window.trackingI18n.setLanguage(lang);
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.trackingI18n.init();
});