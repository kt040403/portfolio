# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a component-based static portfolio website that uses a modular approach to organize HTML sections:

- **Component System**: HTML sections are split into separate files in `components/` directory and dynamically loaded via JavaScript
- **Main Entry**: `index.html` contains only container divs that get populated by the component loader
- **Dynamic Loading**: `js/component-loader.js` uses fetch API to load component HTML files into designated containers
- **Static Deployment**: Designed for GitHub Pages deployment with no build process required

### Component Structure

The ComponentLoader class in `js/component-loader.js` defines the component mapping:
- `components/navigation.html` → `#navigation-container`
- `components/hero.html` → `#hero-container` 
- `components/about.html` → `#about-container`
- `components/skills.html` → `#skills-container`
- `components/projects.html` → `#projects-container`
- `components/contact.html` → `#contact-container`
- `components/footer.html` → `#footer-container`

### Key Implementation Details

- **Event Handling**: Component loader re-initializes event listeners after components load (smooth scrolling, back-to-top button, active nav highlighting)
- **Local Development**: Requires local server due to CORS restrictions when loading component files
- **Bootstrap Integration**: Uses Bootstrap 5 classes throughout components
- **Font Dependencies**: Uses Font Awesome 6.4.0 and Google Fonts (Inter)

## Development Commands

### Local Development
```bash
# Serve locally (required for component loading)
python -m http.server 8000
# or
npx live-server
```

### Git Operations
```bash
# Standard workflow - always commit component changes together
git add components/ index.html js/component-loader.js
git commit -m "Update portfolio components"
git push origin main
```

## Content Management

### Adding New Components
1. Create new HTML file in `components/` directory
2. Update `ComponentLoader.components` array in `js/component-loader.js`
3. Add corresponding container div in `index.html`

### Updating Existing Content
- Edit individual component files in `components/` directory
- Skills section uses custom progress bars with inline width styles
- Projects section uses Bootstrap card components with custom `.project-card` class
- Contact form configured for Formspree integration

### Image Management
- Profile images: `images/profile.png` (referenced in hero component)  
- Project images: `images/projects/` directory (referenced in projects component)
- Logo: `images/個人ロゴ_preview_rev_1.png`

## 個人プロジェクトの追加方法

### 1. プロジェクト画像の準備
```bash
# プロジェクト画像を追加（推奨サイズ: 400x250px）
cp your-project-image.jpg images/projects/your-project.jpg
```

### 2. プロジェクトカードの追加
`components/projects.html` の最後のプロジェクトカードの後に新しいカードを追加：

```html
<!-- Personal Project X - あなたのプロジェクト名 -->
<div class="col-lg-4 col-md-6 mb-4">
    <div class="card project-card h-100">
        <img src="images/projects/your-project.jpg" class="card-img-top" alt="プロジェクト名">
        <div class="card-body">
            <h5 class="card-title">プロジェクト名</h5>
            <p class="card-text">
                プロジェクトの概要説明。使用技術や主要機能について簡潔に説明。
                2-3行程度で収めることを推奨。
            </p>
            <div class="project-tech mb-3">
                <span class="badge bg-primary me-1">技術1</span>
                <span class="badge bg-primary me-1">技術2</span>
                <span class="badge bg-primary me-1">技術3</span>
                <span class="badge bg-success me-1">個人プロジェクト</span>
            </div>
        </div>
        <div class="card-footer bg-transparent">
            <a href="https://github.com/yourusername/project-repo" class="btn btn-outline-primary btn-sm me-2">
                <i class="fab fa-github me-1"></i>Code
            </a>
            <a href="https://your-demo-url.com" class="btn btn-primary btn-sm">
                <i class="fas fa-external-link-alt me-1"></i>Live Demo
            </a>
        </div>
    </div>
</div>
```

### 3. 技術バッジのカラーオプション
- `bg-primary`: 青色（メイン技術）
- `bg-success`: 緑色（個人プロジェクト表示、フレームワーク等）  
- `bg-info`: 水色（データベース、API等）
- `bg-warning text-dark`: 黄色（実務関連、注意事項等）
- `bg-secondary`: グレー（その他）

### 4. リンクボタンのオプション
```html
<!-- GitHubリンク -->
<a href="GitHub-URL" class="btn btn-outline-primary btn-sm me-2">
    <i class="fab fa-github me-1"></i>Code
</a>

<!-- ライブデモ -->
<a href="Demo-URL" class="btn btn-primary btn-sm">
    <i class="fas fa-external-link-alt me-1"></i>Live Demo  
</a>

<!-- API ドキュメント -->
<a href="Doc-URL" class="btn btn-primary btn-sm">
    <i class="fas fa-file-alt me-1"></i>API Doc
</a>

<!-- リンクがない場合 -->
<span class="btn btn-secondary btn-sm disabled">
    <i class="fas fa-lock me-1"></i>Private
</span>
```

### 5. プロジェクト追加後の作業
```bash
# 変更をコミット
git add components/projects.html images/projects/
git commit -m "Add new personal project: プロジェクト名"
git push origin main
```

## Deployment

- **Target Platform**: GitHub Pages
- **Branch**: Deploy from `main` branch
- **No Build Process**: Static files served directly
- **HTTPS**: GitHub Pages provides SSL automatically
- **Custom Domain**: Add CNAME file if needed