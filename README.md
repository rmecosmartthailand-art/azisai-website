# アジサイ株式会社 - コーポレートサイト

アジサイ株式会社の公式コーポレートサイトです。
福岡県を中心とした不動産売買・買取業務を紹介するサイトです。

## 概要

- **企業名**: アジサイ株式会社
- **業種**: 不動産売買仲介・買取
- **営業エリア**: 福岡県全域・九州全域
- **所在地**: 福岡県福岡市中央区長浜2丁目3-6 三陽長浜ビル4階

## ファイル構成

```
Azisai-Website/
├─ index.html          # メインのHTMLファイル
├─ style.css           # スタイルシート（レスポンシブ対応）
├─ robots.txt          # 検索エンジンクローラー設定
├─ sitemap.xml         # サイトマップ
├─ favicon.ico         # ファビコン（プレースホルダー）
├─ README.md           # このファイル
└─ assets/             # 静的ファイル
   ├─ images/          # 画像ファイル（プレースホルダー）
   └─ icons/           # アイコンファイル（プレースホルダー）
```

## サイト構成

### 1. Hero セクション
- 会社名「アジサイ株式会社」を大きく表示
- キャッチコピー「福岡の不動産に、誠実に向き合う。」
- グラデーション背景（ネイビーカラー）

### 2. ご挨拶セクション
- 代表メッセージ
- 企業理念（誠実性、信頼性、透明性）

### 3. 事業内容セクション
- 8つのサービスをカード形式で紹介
  - 不動産売買仲介
  - 不動産買取
  - 土地売買
  - 戸建売買
  - マンション売買
  - 相続不動産相談
  - 空き家相談
  - 事業用不動産売買

### 4. 会社概要セクション
- 企業情報をテーブル形式で表示
- 会社名、代表取締役、設立日、資本金、従業員数、所在地、電話番号、営業エリア等

### 5. お問い合わせセクション
- 電話番号、メールアドレス、所在地を表示
- Google Mapの埋込位置を記載

### フッター
- コピーライト表示
- 会社情報（住所、電話番号）

## デザイン特徴

- **カラースキーム**
  - メインカラー: ネイビー（#1F3A70）
  - サブカラー: ホワイト（#FFFFFF）
  - アクセント: ゴールド（#D4AF37）
  - テキスト: 濃いグレー（#333333）

- **デザイン理念**
  - 高級感、清潔感、信頼感
  - 余白を広く使う
  - 大手不動産会社のコーポレートサイトを参考

- **レスポンシブ対応**
  - PC（1200px以上）
  - タブレット（768px以上1200px未満）
  - スマートフォン（480px以上768px未満）
  - モバイル（480px未満）

## SEO対応

### メタデータ
- `<title>`: ページタイトル
- `<meta description>`: ページ説明
- `<meta keywords>`: キーワード（福岡、不動産売買、不動産売却、不動産買取、相続不動産、空き家相談）

### OGP（Open Graph Protocol）
- Facebook、X、LINEなどでのシェア時に表示される情報を設定

### Twitter Card
- Twitterでのシェア時に表示される情報を設定

### 構造化データ
- Schema.org形式のローカルビジネス構造化データを埋込

### その他
- `robots.txt`: 検索エンジンクローラーの動作制御
- `sitemap.xml`: サイトマップ（XML形式）

## 実装ルール

### 技術スタック
- **HTML5**: 純粋なHTMLのみ
- **CSS3**: 外部フレームワーク（Bootstrap、Tailwind等）不使用
- **JavaScript**: 使用なし
- **外部依存**: なし

### コーディング規則
- コメントを多く入れて初心者でも編集しやすくする
- セマンティックなHTML構造
- モバイルファースト設計
- プログレッシブエンハンスメント

## ローカルで実行する方法

### 1. ブラウザで開く方法（最も簡単）

#### macOS:
```bash
# ファイルアプリを開いてindex.htmlをブラウザにドラッグ&ドロップ
# または
open index.html
```

#### Windows:
```bash
# エクスプローラーでindex.htmlをダブルクリック
# または
start index.html
```

#### Linux:
```bash
# ファイルマネージャーでindex.htmlを右クリック → ブラウザで開く
# または
xdg-open index.html
```

### 2. ローカルサーバーで実行する方法（推奨）

**Python 3.x の場合:**
```bash
cd /Users/ryomatsumoto/Desktop/Azisai-Website
python3 -m http.server 8000
# ブラウザで http://localhost:8000 にアクセス
```

**Python 2.x の場合:**
```bash
cd /Users/ryomatsumoto/Desktop/Azisai-Website
python -m SimpleHTTPServer 8000
# ブラウザで http://localhost:8000 にアクセス
```

**Node.js の場合:**
```bash
# http-serverをグローバルインストール
npm install -g http-server

cd /Users/ryomatsumoto/Desktop/Azisai-Website
http-server
# ブラウザで表示されるアドレスにアクセス
```

## 動作確認チェックリスト

- [ ] HTMLエラーなし（ブラウザの開発者ツールで確認）
- [ ] CSS読み込み確認（スタイルが正しく適用されているか）
- [ ] レスポンシブ確認（PC、タブレット、スマホで表示確認）
- [ ] スマホ表示確認（特に縦横切り替え時の表示）
- [ ] リンク切れなし（内部リンク、電話、メールリンク）
- [ ] 画像読み込み（プレースホルダー画像の表示）
- [ ] フォント読み込み（日本語フォントの表示）

## 編集方法

### テキストエディタで編集

1. **index.html** - 社名、コピーライト、テキスト内容など
2. **style.css** - カラー、フォント、レイアウトなど

### 主な編集ポイント

**会社情報の変更:**
```html
<!-- index.html内の各セクションでテキストを編集 -->
<h1 class="hero-title">アジサイ株式会社</h1>
```

**カラーの変更:**
```css
/* style.css内のCSS変数を編集 */
color: #1F3A70; /* ネイビー */
background-color: #D4AF37; /* ゴールド */
```

**セクションの追加:**
```html
<!-- index.htmlに新しい<section>を追加 -->
<section class="new-section" id="new-section">
    <!-- コンテンツ -->
</section>
```

## SEOの設定

### Google Search Console
```html
<!-- Google Search Consoleの認証タグ（index.htmlのheadセクション） -->
<meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE">
```

### Google Analytics（GA4）
```html
<!-- GA4トラッキングコード（index.htmlのheadセクション） -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

## サイト公開時の準備

1. **favicon設定**: `assets/icons/favicon.ico`にファビコンをアップロード
2. **OGP画像**: `assets/images/ogp-image.jpg`にOGP用画像をアップロード
3. **Google認証**: Google Search Consoleの認証タグを設定
4. **GA4設定**: Google Analyticsのトラッキングコードを設定
5. **ドメイン設定**: OGP、robots.txt、sitemap.xmlのURLを実際のドメインに変更
6. **Google Map**: お問い合わせセクションのGoogleMap埋込コードを設定

## ブラウザ互換性

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）
- iOS Safari（最新版）
- Chrome for Android（最新版）

## ライセンス

© 2024 アジサイ株式会社. All rights reserved.

## 更新履歴

### 2024-06-06
- サイト初版作成
- HTML、CSS、robots.txt、sitemap.xml、README.md作成
- SEO対応（メタデータ、OGP、構造化データ）
- レスポンシブ対応実装
