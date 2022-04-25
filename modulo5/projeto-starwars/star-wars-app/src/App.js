import React from 'react'
// import Router from './routes/Router'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';

const App = () => {
  return (
    <div>
      {/* <Router /> */}
      <CharacterDetailPage />
      <CharacterListPage />
    </div>
  );
}

export default App;
