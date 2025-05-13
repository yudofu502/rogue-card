import { render, screen } from '@testing-library/react';
import HomePage from '../../src/pages/HomePage';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';

/**
 * HomePageコンポーネントのテスト。
 */
describe('HomePage', () => {
  it('タイトルと開始ボタンが正しく表示される', () => {
    // HomePageコンポーネントをレンダリング
    render(<HomePage />);

    // タイトルが正しく表示されていることを確認
    expect(screen.getByText('Rogue Card Game')).toBeInTheDocument();

    // ゲーム開始ボタンが正しく表示されていることを確認
    expect(screen.getByText('ゲームを開始')).toBeInTheDocument();
  });
});