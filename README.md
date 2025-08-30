# Portfolio Website

モダンでレスポンシブなポートフォリオサイトです。Webアプリケーション開発者のスキルと作品を効果的に展示するために設計されています。

## 🚀 特徴

- **レスポンシブデザイン**: 全デバイスで最適な表示
- **モダンなUI**: Bootstrap 5を使用したクリーンなデザイン
- **スムーズなアニメーション**: CSS3とJavaScriptによる軽快な動作
- **SEO最適化**: メタタグと構造化データ対応
- **高速ロード**: 最適化されたコードと画像
- **アクセシビリティ**: WCAG 2.1準拠

## 🛠️ 技術スタック

- **HTML5**: セマンティックマークアップ
- **CSS3**: カスタムアニメーションとスタイル
- **Bootstrap 5**: レスポンシブフレームワーク  
- **JavaScript (ES6+)**: インタラクションとアニメーション
- **Font Awesome**: アイコンライブラリ
- **Google Fonts**: Webフォント (Inter)

## 📁 プロジェクト構成

```
portfolio/
├── index.html          # メインHTMLファイル
├── css/
│   └── style.css       # カスタムスタイルシート
├── js/
│   └── main.js         # JavaScriptファイル
├── images/
│   ├── profile.jpg     # プロフィール画像
│   ├── projects/       # プロジェクト画像
│   └── icons/         # アイコン画像
└── README.md          # このファイル
```

## 🎨 セクション構成

1. **Hero Section**: メインビジュアルと自己紹介
2. **About Section**: 詳細なプロフィールと経歴
3. **Skills Section**: 技術スタックとスキルレベル
4. **Projects Section**: 作品紹介とデモリンク
5. **Contact Section**: コンタクトフォームと連絡先

## ⚙️ セットアップ

### 1. ファイルのカスタマイズ

**個人情報の更新:**
```html
<!-- index.html内で以下を更新 -->
<title>あなたの名前 - Portfolio</title>
<h1>Hello, I'm <span class="text-primary">あなたの名前</span></h1>
```

**プロフィール画像:**
- `images/profile.jpg`に自分の写真を配置

**プロジェクト画像:**
- `images/projects/`フォルダにプロジェクトのスクリーンショットを配置

### 2. コンタクトフォームの設定

**Formspreeの設定:**
1. [Formspree](https://formspree.io/)でアカウント作成
2. 新しいフォーム作成
3. `index.html`のフォームaction属性を更新:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 3. ソーシャルリンクの更新

```html
<!-- Hero sectionとContact sectionで更新 -->
<a href="https://github.com/yourusername" class="social-link">
<a href="https://linkedin.com/in/yourname" class="social-link">
```

## 🚀 デプロイメント

### GitHub Pagesでのデプロイ

1. **リポジトリ作成:**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **GitHub Pages設定:**
   - リポジトリのSettings > Pages
   - Source: Deploy from a branch
   - Branch: main / (root)

3. **カスタムドメイン (オプション):**
   - `CNAME`ファイルを作成してドメイン名を記載

## 📝 カスタマイズ

### カラーテーマの変更

`css/style.css`の`:root`セクションを編集:
```css
:root {
  --primary-color: #007bff;    /* メインカラー */
  --secondary-color: #6c757d;  /* セカンダリーカラー */
  --background-color: #f8f9fa; /* 背景色 */
}
```

### スキルセクションの更新

`index.html`内のスキルバーを編集:
```html
<div class="skill-item mb-3">
    <div class="d-flex justify-content-between">
        <span>スキル名</span>
        <span>パーセンテージ%</span>
    </div>
    <div class="progress">
        <div class="progress-bar" style="width: パーセンテージ%"></div>
    </div>
</div>
```

### プロジェクトの追加

新しいプロジェクトカードを追加:
```html
<div class="col-lg-4 col-md-6 mb-4">
    <div class="card project-card h-100">
        <img src="images/projects/new-project.jpg" class="card-img-top" alt="New Project">
        <div class="card-body">
            <h5 class="card-title">プロジェクト名</h5>
            <p class="card-text">プロジェクト説明</p>
            <div class="project-tech mb-3">
                <span class="badge bg-primary me-1">技術1</span>
                <span class="badge bg-primary me-1">技術2</span>
            </div>
        </div>
        <div class="card-footer bg-transparent">
            <a href="#" class="btn btn-outline-primary btn-sm me-2">
                <i class="fab fa-github me-1"></i>Code
            </a>
            <a href="#" class="btn btn-primary btn-sm">
                <i class="fas fa-external-link-alt me-1"></i>Demo
            </a>
        </div>
    </div>
</div>
```

## 🔧 開発のヒント

### パフォーマンス最適化
- 画像の圧縮 (WebP形式推奨)
- CSS/JSの最小化
- 不要なBootstrapコンポーネントの削除

### SEO最適化
- メタディスクリプションの更新
- 構造化データの追加
- sitemap.xmlの作成

### アクセシビリティ
- alt属性の設定
- コントラスト比の確認
- キーボードナビゲーションのテスト

## 📱 ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 📄 ライセンス

このプロジェクトはMITライセンスの下で提供されています。

## 🤝 貢献

改善提案やバグ報告は、Issueまたは Pull Request でお気軽にどうぞ。

## 📞 サポート

質問がある場合は、[あなたのメールアドレス]までお気軽にお問い合わせください。