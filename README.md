# README.md

# Rogue Card Game

## 概要

Rogue Card Gameは、デッキ構築型のローグライクゲームです。プレイヤーはカードを使って戦略を立て、敵を倒しながら進んでいきます。このプロジェクトはReactとTypeScriptを使用して開発されています。

## プロジェクト概要

Rogue Card Game は、デッキ構築型ローグライクゲームです。プレイヤーはカードを使用して敵を倒し、ステージを進むことでデッキを強化します。

## セットアップ手順

1. リポジトリをクローンします。
   ```bash
   git clone https://github.com/yudofu502/record-the-spire.git
   cd record-the-spire
   ```

2. 依存関係をインストールします。
   ```bash
   npm install
   ```

3. 開発サーバーを起動します。
   ```bash
   npm start
   ```

4. ブラウザで `http://localhost:3000` にアクセスして、アプリケーションを確認します。

## 使用方法

1. 必要な依存関係をインストールします。
   ```bash
   npm install
   ```

2. 開発サーバーを起動します。
   ```bash
   npm run dev
   ```

3. テストを実行します。
   ```bash
   npm run test
   ```

## フォルダ構成

- `public/`: アプリケーションの静的ファイルを格納します。
- `src/`: アプリケーションのソースコードが含まれています。
  - `components/`: Reactコンポーネントを格納します。
  - `hooks/`: カスタムフックを格納します。
  - `pages/`: ページコンポーネントを格納します。
  - `styles/`: スタイルシートを格納します。
  - `types/`: TypeScriptの型定義を格納します。
- `tests/`: テストコードを格納します。
- `docs/`: プロジェクトの設計書を格納します。

## ディレクトリ構造

```
my_project/
├── README.md        # プロジェクトの概要・使い方・ドキュメントリンク等を記載する。
├── docs/            # 設計書や要件定義書を格納。
├── public/          # 公開用の静的ファイル。
├── src/             # アプリケーションのソースコード本体。
│   ├── assets/      # 画像やフォントなどのアセット。
│   ├── pages/       # 各ページのコンポーネント。
│   ├── styles/      # SCSSファイル。
│   ├── App.tsx      # アプリケーションのエントリポイント。
│   └── main.tsx     # Reactのエントリポイント。
├── tests/           # ユニットテストや統合テスト。
└── vite.config.ts   # Viteの設定ファイル。
```

## 使用技術

- React
- TypeScript
- SCSS
- Jotai (状態管理)

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細はLICENSEファイルを参照してください。