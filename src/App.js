import { Routes, Route, Link } from 'react-router-dom';

import AudioPlayer from './pages/AudioPlayer';
import HomePage from './pages/HomePage';
import SelectPage from './pages/SelectPage';
import SongsPage from './pages/SongsPage';

import './scss/App.scss';

// import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Routes>
        {/* роуты для страницы */}
        <Route path="/" element={<HomePage />} />
        <Route path="/select-page" element={<SelectPage />} />
        <Route path="/songs-page" element={<SongsPage />} />
        <Route path="/audio-player" element={<AudioPlayer />} />

        {/* отработка ошибок */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
