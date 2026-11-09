import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GameProjectPage } from './components/GameProjectPage';
import { games } from './components/portfolioData';
import './index.css';
import './theme.css';
import './layout.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProjectPage game={games[0]} />
  </StrictMode>,
);
