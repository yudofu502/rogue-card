import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/index.scss" as *;\n`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true, // describe や it をグローバルで使用可能にする
    environment: 'jsdom', // テスト環境を jsdom に設定
    setupFiles: './setupTests.ts', // テストのセットアップファイルを指定
  },
});
