import React from 'react';
import '@/pages/HomePage.scss';

/**
 * ホーム画面コンポーネント。
 * 
 * このコンポーネントは、アプリケーションのホーム画面を表示します。
 * ユーザーがゲームを開始するためのボタンを提供します。
 * 
 * @component
 * @example
 * return (
 *   <HomePage />
 * );
 */
const HomePage: React.FC = () => {
  return (
    <div className="home">
      <h1 className="home__title">Rogue Card Game</h1>
      <button className="home__start-button">ゲームを開始</button>
    </div>
  );
};

export default HomePage;