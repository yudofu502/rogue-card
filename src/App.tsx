import React from 'react';
import HomePage from './pages/HomePage';

/**
 * アプリケーションのエントリポイント。
 * 現在はホーム画面を表示します。
 */
const App: React.FC = () => {
  return (
    <div className="app">
      <HomePage />
    </div>
  );
};

export default App;
