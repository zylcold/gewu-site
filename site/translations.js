// 格物官网多语言翻译字典
const translations = {
  zh: {
    // Page titles
    'page-title': '格物 - 所有物品，一目了然',
    'privacy-page-title': '隐私政策 - 格物',

    // Navigation
    'nav-logo': '格物',
    'nav-features': '功能',
    'nav-screenshots': '截图',
    'nav-download': '下载',
    'nav-privacy': '隐私政策',
    'nav-home': '首页',

    // Language Selector
    'lang-zh': '中文',
    'lang-en': 'English',
    'lang-ja': '日本語',

    // Hero
    'hero-badge': 'iOS 17+ · 端侧 AI · 本地优先',
    'hero-title-1': '所有物品，',
    'hero-title-2': '一目了然。',
    'hero-subtitle': '拍照即识别，知道每件物品在哪里、还剩多少、是否快过期。',
    'hero-desc': '端侧 AI 优先，隐私安全，无需联网。为你在乎的每件物品，打造本地可信的收纳体验。',
    'hero-btn-download': 'App Store 下载',
    'hero-btn-learn': '了解更多',
    'hero-img-alt': '格物首页 - 收纳格',

    // Features
    'features-label': '核心功能',
    'features-title-1': '东西在哪，还剩多少，',
    'features-title-2': '一打开就知道。',
    'feature-1-title': '拍照即识别',
    'feature-1-desc': '端侧 AI 视觉识别，拍照自动建议物品名称、数量和保质期。无需联网，隐私安全。',
    'feature-2-title': '收纳格管理',
    'feature-2-desc': '为不同空间创建专属收纳格——冰箱、橱柜、储物箱。一键查看格内所有物品。',
    'feature-3-title': '过期智能提醒',
    'feature-3-desc': '自动追踪保质期，提前 3 天橙色预警，过期红色提示。再也不浪费好东西。',
    'feature-4-title': '搜索与筛选',
    'feature-4-desc': '快速找到目标收纳格内的物品，按名称搜索或按过期状态筛选。',

    // Showcase
    'showcase-1-title': '拍一拍，就入库',
    'showcase-1-desc': '拍照后 AI 自动识别物品名称、类别和数量。点击识别框确认或修正，一键入库。即使识别失败，手动录入也随时可用。',
    'showcase-1-img-alt': 'AI 识别扫描',
    'showcase-2-title': '每件物品，都在掌控',
    'showcase-2-desc': '查看物品详情，编辑名称、数量、保质期和所属收纳格。绿色正常、橙色即将过期、红色已过期，状态一目了然。',
    'showcase-2-img-alt': '物品详情',
    'showcase-3-title': '快过期？提前知道',
    'showcase-3-desc': '系统自动追踪每件物品的保质期，提前 3 天通过系统通知提醒你。不再让好东西在角落里默默过期。',
    'showcase-3-img-alt': '过期提醒',

    // Screenshots
    'screenshots-label': '应用截图',
    'screenshots-title': '简洁，强大。',
    'screenshot-1-alt': '收纳格首页',
    'screenshot-2-alt': 'AI 识别扫描',
    'screenshot-3-alt': '物品详情管理',
    'screenshot-4-alt': '过期提醒',
    'screenshots-hint': '← 左右滑动查看更多 →',

    // CTA
    'cta-title': '开始管理你的物品',
    'cta-desc': '格物为家庭用户打造。拍照即识别，本地存储，隐私安全。<br />无需注册，无需联网，打开就用。',
    'cta-btn': '前往 App Store',
    'cta-note': '需要 iOS 17 或更高版本',

    // Footer
    'footer-privacy': '隐私政策',
    'footer-terms': '使用条款',
    'footer-contact': '联系我们',
    'footer-copy': '© 2025 Gewu. 保留所有权利。',
    'footer-home': '首页',
    'footer-features': '功能',

    // Privacy Page
    'privacy-title': '隐私政策',
    'privacy-update': '更新日期：2025年1月1日',
    'privacy-highlight': '格物承诺保护您的隐私。本应用<strong>默认无需联网</strong>，所有数据存储在您的设备本地，我们不会收集、上传或分享您的物品信息。',
    'privacy-1-title': '1. 信息收集',
    'privacy-1-1-title': '1.1 本地数据',
    'privacy-1-1-desc': '您在格物中创建的所有数据，包括收纳格、物品信息、照片和备注，均通过 iOS 系统的 SwiftData 框架存储在您的设备本地。这些数据不会上传至任何服务器。',
    'privacy-1-2-title': '1.2 AI 识别',
    'privacy-1-2-desc': '格物使用 Apple 的 Vision 框架和 Core ML 进行端侧 AI 识别。所有图像识别和处理均在您的设备本地完成，照片和识别结果不会发送至任何外部服务器或第三方服务。',
    'privacy-1-3-title': '1.3 相机与照片权限',
    'privacy-1-3-desc': '格物仅在您需要拍照或选择照片进行物品识别时，才会请求相机或照片库访问权限。您可以随时在 iOS 设置中拒绝或撤销这些权限，不会影响应用的其他功能使用。',
    'privacy-1-4-title': '1.4 通知权限',
    'privacy-1-4-desc': '若您启用过期提醒功能，格物会请求推送通知权限，仅用于向您发送本地物品的过期提醒。通知内容完全由本地数据生成，不涉及任何服务器通信。',
    'privacy-2-title': '2. 信息使用',
    'privacy-2-desc': '格物的所有功能均在设备本地运行。应用使用您的本地数据实现以下功能：',
    'privacy-2-1': '收纳格与物品的本地管理',
    'privacy-2-2': '照片的本地存储与展示',
    'privacy-2-3': '基于本地日期的过期状态计算与提醒',
    'privacy-2-4': '端侧 AI 物品识别',
    'privacy-2-5': '本地搜索与筛选',
    'privacy-3-title': '3. 信息分享',
    'privacy-3-desc1': '格物<strong>不会</strong>将您的任何个人数据、物品信息、照片或使用习惯分享给第三方，也不会将数据上传至云端。',
    'privacy-3-desc2': '如果您选择使用 iOS 系统级的 iCloud 备份功能，您的设备数据（包括格物的数据）可能会随系统备份同步至您的 iCloud 账户。此行为由 Apple 系统控制，受 Apple 的隐私政策约束。',
    'privacy-4-title': '4. 数据安全',
    'privacy-4-desc': '格物采用 iOS 系统提供的安全机制保护您的数据：',
    'privacy-4-1': '所有数据存储在设备本地，受 iOS 沙盒机制保护',
    'privacy-4-2': '应用未使用任何第三方分析或追踪 SDK',
    'privacy-4-3': '不收集设备标识符、广告标识符或任何可用于跨应用追踪的信息',
    'privacy-4-4': '不嵌入任何广告组件',
    'privacy-5-title': '5. 儿童隐私',
    'privacy-5-desc': '格物不面向 13 岁以下儿童提供服务，也不会有意收集儿童的任何个人信息。家长可以通过 iOS 系统的屏幕使用时间功能对应用进行限制。',
    'privacy-6-title': '6. 第三方服务',
    'privacy-6-desc1': '格物 MVP 版本不集成任何第三方服务或 SDK。应用完全独立运行，不与外部服务器通信。',
    'privacy-6-desc2': '未来版本如果引入可选的云端同步或分享功能，将在启用前明确告知您并获得您的同意，同时提供完整的隐私说明。',
    'privacy-7-title': '7. 隐私政策更新',
    'privacy-7-desc': '我们可能会不时更新本隐私政策。任何重大变更将通过应用内通知或 App Store 更新说明告知您。变更生效前，我们会显著标注更新日期。',
    'privacy-8-title': '8. 联系我们',
    'privacy-8-desc': '如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：',
    'privacy-8-email': '电子邮件：',
  },

  en: {
    // Page titles
    'page-title': 'Gewu - All your items, at a glance',
    'privacy-page-title': 'Privacy Policy - Gewu',

    // Navigation
    'nav-logo': 'Gewu',
    'nav-features': 'Features',
    'nav-screenshots': 'Screenshots',
    'nav-download': 'Download',
    'nav-privacy': 'Privacy',
    'nav-home': 'Home',

    // Language Selector
    'lang-zh': '中文',
    'lang-en': 'English',
    'lang-ja': '日本語',

    // Hero
    'hero-badge': 'iOS 17+ · On-Device AI · Local First',
    'hero-title-1': 'All your items,',
    'hero-title-2': 'at a glance.',
    'hero-subtitle': 'Snap a photo to identify items, track quantities, and know what\'s about to expire.',
    'hero-desc': 'On-device AI first, privacy-safe, no internet required. A trusted local organization experience for every item you care about.',
    'hero-btn-download': 'Download on App Store',
    'hero-btn-learn': 'Learn More',
    'hero-img-alt': 'Gewu Home - Storage Slots',

    // Features
    'features-label': 'Core Features',
    'features-title-1': 'Where things are, how much is left.',
    'features-title-2': 'Open the app and know instantly.',
    'feature-1-title': 'Snap to Identify',
    'feature-1-desc': 'On-device AI vision automatically suggests item names, quantities, and expiry dates. No internet needed, fully private.',
    'feature-2-title': 'Storage Slots',
    'feature-2-desc': 'Create dedicated slots for every space—fridge, cabinet, storage box. See everything in each slot at a glance.',
    'feature-3-title': 'Smart Expiry Alerts',
    'feature-3-desc': 'Automatically tracks shelf life. Orange warning 3 days before expiry, red when expired. Never waste good stuff again.',
    'feature-4-title': 'Search & Filter',
    'feature-4-desc': 'Quickly find items in any storage slot. Search by name or filter by expiry status.',

    // Showcase
    'showcase-1-title': 'Snap it, file it',
    'showcase-1-desc': 'AI automatically identifies item names, categories, and quantities from your photos. Tap to confirm or adjust, then save in one tap. Manual entry is always available if recognition fails.',
    'showcase-1-img-alt': 'AI Recognition Scan',
    'showcase-2-title': 'Every item, under control',
    'showcase-2-desc': 'View and edit item details—name, quantity, expiry date, and storage slot. Green for normal, orange for expiring soon, red for expired. Status at a glance.',
    'showcase-2-img-alt': 'Item Details',
    'showcase-3-title': 'Expiring soon? Know ahead',
    'showcase-3-desc': 'The system automatically tracks every item\'s shelf life and sends a system notification 3 days before expiry. No more good things expiring quietly in the corner.',
    'showcase-3-img-alt': 'Expiry Reminder',

    // Screenshots
    'screenshots-label': 'App Screenshots',
    'screenshots-title': 'Simple, powerful.',
    'screenshot-1-alt': 'Storage Slots Home',
    'screenshot-2-alt': 'AI Recognition Scan',
    'screenshot-3-alt': 'Item Detail Management',
    'screenshot-4-alt': 'Expiry Reminder',
    'screenshots-hint': '← Swipe to see more →',

    // CTA
    'cta-title': 'Start managing your items',
    'cta-desc': 'Built for households. Snap to identify, local storage, privacy-safe.<br />No signup, no internet, just open and go.',
    'cta-btn': 'Get it on App Store',
    'cta-note': 'Requires iOS 17 or later',

    // Footer
    'footer-privacy': 'Privacy Policy',
    'footer-terms': 'Terms of Use',
    'footer-contact': 'Contact Us',
    'footer-copy': '© 2025 Gewu. All rights reserved.',
    'footer-home': 'Home',
    'footer-features': 'Features',

    // Privacy Page
    'privacy-title': 'Privacy Policy',
    'privacy-update': 'Last updated: January 1, 2025',
    'privacy-highlight': 'Gewu is committed to protecting your privacy. This app <strong>works offline by default</strong>. All data is stored locally on your device. We do not collect, upload, or share your item information.',
    'privacy-1-title': '1. Information Collection',
    'privacy-1-1-title': '1.1 Local Data',
    'privacy-1-1-desc': 'All data you create in Gewu, including storage slots, item information, photos, and notes, is stored locally on your device via iOS SwiftData framework. This data is never uploaded to any server.',
    'privacy-1-2-title': '1.2 AI Recognition',
    'privacy-1-2-desc': 'Gewu uses Apple\'s Vision framework and Core ML for on-device AI recognition. All image recognition and processing happens locally on your device. Photos and recognition results are never sent to any external server or third-party service.',
    'privacy-1-3-title': '1.3 Camera & Photo Permissions',
    'privacy-1-3-desc': 'Gewu only requests camera or photo library access when you need to take or select a photo for item recognition. You can deny or revoke these permissions at any time in iOS Settings without affecting other app features.',
    'privacy-1-4-title': '1.4 Notification Permissions',
    'privacy-1-4-desc': 'If you enable expiry reminders, Gewu will request push notification permissions solely to send you local item expiry alerts. Notification content is generated entirely from local data with no server communication.',
    'privacy-2-title': '2. Information Usage',
    'privacy-2-desc': 'All Gewu features run locally on your device. The app uses your local data to provide:',
    'privacy-2-1': 'Local management of storage slots and items',
    'privacy-2-2': 'Local photo storage and display',
    'privacy-2-3': 'Expiry status calculation and reminders based on local dates',
    'privacy-2-4': 'On-device AI item recognition',
    'privacy-2-5': 'Local search and filtering',
    'privacy-3-title': '3. Information Sharing',
    'privacy-3-desc1': 'Gewu will <strong>not</strong> share any of your personal data, item information, photos, or usage patterns with third parties, nor upload data to the cloud.',
    'privacy-3-desc2': 'If you choose to use iOS system-level iCloud backup, your device data (including Gewu data) may be synced to your iCloud account as part of system backup. This behavior is controlled by Apple\'s system and governed by Apple\'s privacy policy.',
    'privacy-4-title': '4. Data Security',
    'privacy-4-desc': 'Gewu uses security mechanisms provided by iOS to protect your data:',
    'privacy-4-1': 'All data stored locally on device, protected by iOS sandboxing',
    'privacy-4-2': 'No third-party analytics or tracking SDKs embedded',
    'privacy-4-3': 'No collection of device identifiers, advertising identifiers, or any cross-app tracking information',
    'privacy-4-4': 'No advertising components embedded',
    'privacy-5-title': '5. Children\'s Privacy',
    'privacy-5-desc': 'Gewu does not serve children under 13 and does not knowingly collect any personal information from children. Parents can restrict the app using iOS Screen Time features.',
    'privacy-6-title': '6. Third-Party Services',
    'privacy-6-desc1': 'The Gewu MVP version does not integrate any third-party services or SDKs. The app runs completely independently with no external server communication.',
    'privacy-6-desc2': 'If future versions introduce optional cloud sync or sharing features, you will be clearly informed and asked for consent before enabling, along with a complete privacy explanation.',
    'privacy-7-title': '7. Privacy Policy Updates',
    'privacy-7-desc': 'We may update this privacy policy from time to time. Any significant changes will be communicated to you via in-app notifications or App Store release notes. The update date will be prominently displayed before changes take effect.',
    'privacy-8-title': '8. Contact Us',
    'privacy-8-desc': 'If you have any questions or suggestions about this privacy policy, please contact us at:',
    'privacy-8-email': 'Email: ',
  },

  ja: {
    // Page titles
    'page-title': '格物 - すべてのアイテムを、ひと目で把握',
    'privacy-page-title': 'プライバシーポリシー - 格物',

    // Navigation
    'nav-logo': '格物',
    'nav-features': '機能',
    'nav-screenshots': 'スクリーンショット',
    'nav-download': 'ダウンロード',
    'nav-privacy': 'プライバシー',
    'nav-home': 'ホーム',

    // Language Selector
    'lang-zh': '中文',
    'lang-en': 'English',
    'lang-ja': '日本語',

    // Hero
    'hero-badge': 'iOS 17+ · オンデバイス AI · ローカル優先',
    'hero-title-1': 'すべてのアイテムを、',
    'hero-title-2': 'ひと目で把握。',
    'hero-subtitle': '撮影するだけでアイテムを認識。場所、残り数量、期限切れを把握できます。',
    'hero-desc': 'オンデバイスAI優先、プライバシー保護、ネット不要。大切にしている每一件のために、信頼できるローカルの整理体験をお届けします。',
    'hero-btn-download': 'App Store でダウンロード',
    'hero-btn-learn': '詳しく見る',
    'hero-img-alt': '格物 ホーム - 収納ボックス',

    // Features
    'features-label': '主な機能',
    'features-title-1': 'どこに何があるか、',
    'features-title-2': '開けばすぐにわかる。',
    'feature-1-title': '撮影して自動認識',
    'feature-1-desc': 'オンデバイスAIビジョンが、アイテム名、数量、賞味期限を自動提案。ネット不要、プライバシー安全。',
    'feature-2-title': '収納ボックス管理',
    'feature-2-desc': '冷蔵庫、キャビネット、収納ケースなど、スペースごとに専用ボックスを作成。ボックス内の全アイテムをワンタップで確認。',
    'feature-3-title': '期限切れスマート通知',
    'feature-3-desc': '賞味期限を自動追跡。3日前にオレンジ警告、期限切れで赤色表示。もう良いものを無駄にしません。',
    'feature-4-title': '検索とフィルタ',
    'feature-4-desc': '収納ボックス内のアイテムをすばやく検索。名前で検索したり、期限ステータスでフィルタリング。',

    // Showcase
    'showcase-1-title': '撮って、すぐ登録',
    'showcase-1-desc': '撮影後、AIがアイテム名、カテゴリ、数量を自動認識。認識フレームをタップして確認・修正し、ワンタップで保存。認識に失敗しても、手動入力がいつでも利用可能。',
    'showcase-1-img-alt': 'AI 認識スキャン',
    'showcase-2-title': '每一件を、しっかり管理',
    'showcase-2-desc': 'アイテムの詳細を表示・編集——名前、数量、期限、収納ボックス。緑は通常、オレンジは期限近づき、赤は期限切れ。ステータスがひと目でわかる。',
    'showcase-2-img-alt': 'アイテム詳細',
    'showcase-3-title': '期限切れ？提前に把握',
    'showcase-3-desc': 'システムが各アイテムの期限を自動追跡し、3日前にシステム通知でお知らせ。隅っこで静かに期限切れになるもう心配ありません。',
    'showcase-3-img-alt': '期限切れ通知',

    // Screenshots
    'screenshots-label': 'スクリーンショット',
    'screenshots-title': 'シンプル、パワフル。',
    'screenshot-1-alt': '収納ボックス ホーム',
    'screenshot-2-alt': 'AI 認識スキャン',
    'screenshot-3-alt': 'アイテム詳細管理',
    'screenshot-4-alt': '期限切れ通知',
    'screenshots-hint': '← スワイプしてさらに表示 →',

    // CTA
    'cta-title': 'アイテム管理を始めよう',
    'cta-desc': 'ファミリー向けに設計。撮影して認識、ローカル保存、プライバシー安全。<br />登録不要、ネット不要、開けばすぐ使える。',
    'cta-btn': 'App Store で入手',
    'cta-note': 'iOS 17 以降が必要',

    // Footer
    'footer-privacy': 'プライバシーポリシー',
    'footer-terms': '利用規約',
    'footer-contact': 'お問い合わせ',
    'footer-copy': '© 2025 Gewu. All rights reserved.',
    'footer-home': 'ホーム',
    'footer-features': '機能',

    // Privacy Page
    'privacy-title': 'プライバシーポリシー',
    'privacy-update': '最終更新日：2025年1月1日',
    'privacy-highlight': '格物はお客様のプライバシーを保護することをお約束します。本アプリは<strong>デフォルトでオフラインで動作</strong>します。すべてのデータはデバイスローカルに保存され、アイテム情報の収集、アップロード、共有は一切行いません。',
    'privacy-1-title': '1. 情報収集',
    'privacy-1-1-title': '1.1 ローカルデータ',
    'privacy-1-1-desc': '格物で作成するすべてのデータ（収納ボックス、アイテム情報、写真、メモを含む）は、iOS の SwiftData フレームワークを使用してデバイスローカルに保存されます。これらのデータがサーバーにアップロードされることはありません。',
    'privacy-1-2-title': '1.2 AI 認識',
    'privacy-1-2-desc': '格物は Apple の Vision フレームワークと Core ML を使用してオンデバイス AI 認識を行います。すべての画像認識と処理はデバイスローカルで完了し、写真や認識結果が外部サーバーや第三者サービスに送信されることはありません。',
    'privacy-1-3-title': '1.3 カメラと写真の権限',
    'privacy-1-3-desc': '格物は、アイテム認識のために写真を撮影または選択する必要がある場合にのみ、カメラまたは写真ライブラリへのアクセスを要求します。iOS 設定でこれらの権限をいつでも拒否または取り消すことができ、アプリの他の機能には影響しません。',
    'privacy-1-4-title': '1.4 通知権限',
    'privacy-1-4-desc': '期限切れ通知を有効にすると、格物はプッシュ通知権限を要求しますが、これはローカルアイテムの期限切れアラートを送信するためだけです。通知内容は完全にローカルデータから生成され、サーバー通信は一切含まれません。',
    'privacy-2-title': '2. 情報の使用',
    'privacy-2-desc': '格物のすべての機能はデバイスローカルで実行されます。アプリはローカルデータを使用して以下の機能を提供します：',
    'privacy-2-1': '収納ボックスとアイテムのローカル管理',
    'privacy-2-2': '写真のローカル保存と表示',
    'privacy-2-3': 'ローカル日付に基づく期限ステータスの計算と通知',
    'privacy-2-4': 'オンデバイス AI アイテム認識',
    'privacy-2-5': 'ローカル検索とフィルタリング',
    'privacy-3-title': '3. 情報共有',
    'privacy-3-desc1': '格物は、個人データ、アイテム情報、写真、使用パターンを第三者と共有したり、データをクラウドにアップロードしたりすることは<strong>ありません</strong>。',
    'privacy-3-desc2': 'iOS システムレベルの iCloud バックアップ機能を使用する場合、デバイスデータ（格物のデータを含む）がシステムバックアップの一部として iCloud アカウントに同期されることがあります。この動作は Apple のシステムによって制御され、Apple のプライバシーポリシーに従います。',
    'privacy-4-title': '4. データセキュリティ',
    'privacy-4-desc': '格物は iOS が提供するセキュリティメカニズムを使用してデータを保護します：',
    'privacy-4-1': 'すべてのデータはデバイスローカルに保存され、iOS サンドボックスによって保護',
    'privacy-4-2': '第三者の分析や追跡 SDK は組み込んでいない',
    'privacy-4-3': 'デバイス識別子、広告識別子、クロスアプリ追跡に使用できる情報の収集は行わない',
    'privacy-4-4': '広告コンポーネントは組み込んでいない',
    'privacy-5-title': '5. 子供のプライバシー',
    'privacy-5-desc': '格物は 13 歳未満の子供を対象としておらず、子供からの個人情報収集も意図していません。保護者は iOS のスクリーンタイム機能を使用してアプリを制限できます。',
    'privacy-6-title': '6. 第三者サービス',
    'privacy-6-desc1': '格物 MVP バージョンは第三者サービスや SDK を統合していません。アプリは完全に独立して実行され、外部サーバーとの通信はありません。',
    'privacy-6-desc2': '将来のバージョンでオプションのクラウド同期や共有機能を導入する場合、有効化する前に明確に通知し、同意を得るとともに、完全なプライバシー説明を提供します。',
    'privacy-7-title': '7. プライバシーポリシーの更新',
    'privacy-7-desc': '当社は、本プライバシーポリシーを随時更新することがあります。重要な変更は、アプリ内通知または App Store のリリースノートを通じてお知らせします。変更が有効になる前に、更新日を顕著に表示します。',
    'privacy-8-title': '8. お問い合わせ',
    'privacy-8-desc': '本プライバシーポリシーについてご質問やご提案がある場合は、以下の方法でお問い合わせください：',
    'privacy-8-email': 'メール：',
  },

  // 检测系统语言
  detectSystemLang() {
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('en')) return 'en';
    return 'zh'; // 默认中文
  },

  // 设置语言
  setLang(lang) {
    if (!translations[lang]) return;
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.applyTranslations();
    this.updateLangSelector();
    document.documentElement.lang = lang;
  },

  // 应用翻译
  applyTranslations() {
    const lang = this.getCurrentLang();
    const t = translations[lang];
    if (!t) return;

    // 更新所有 data-i18n 元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = t[key];
      if (value) {
        if (value.includes('<')) {
          el.innerHTML = value;
        } else {
          el.textContent = value;
        }
      }
    });

    // 更新所有 data-i18n-alt 的 alt 属性（图片描述）
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      const value = t[key];
      if (value) {
        el.alt = value;
      }
    });

    // 更新页面标题
    if (document.titleKey && t[document.titleKey]) {
      document.title = t[document.titleKey];
    }
  },

  // 更新语言选择器状态
  updateLangSelector() {
    const lang = this.getCurrentLang();
    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
    });
  },

  // 初始化
  init() {
    // 检测系统语言并应用
    const lang = this.getCurrentLang();
    this.applyTranslations();
    this.updateLangSelector();
    document.documentElement.lang = lang;

    // 绑定语言选择器事件
    document.querySelectorAll('.lang-option').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const newLang = el.getAttribute('data-lang');
        this.setLang(newLang);
        this.toggleLangDropdown(false);
      });
    });

    // 绑定语言下拉菜单切换
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleLangDropdown();
      });
    }

    // 点击外部关闭下拉菜单
    document.addEventListener('click', () => {
      this.toggleLangDropdown(false);
    });
  },

  toggleLangDropdown(forceState) {
    const selector = document.getElementById('lang-selector');
    if (!selector) return;
    if (typeof forceState === 'boolean') {
      selector.classList.toggle('open', forceState);
    } else {
      selector.classList.toggle('open');
    }
  }
};

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', () => I18N.init());
