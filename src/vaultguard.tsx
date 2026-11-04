import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { VaultGuardPage } from './components/VaultGuardPage';
import './index.css';
import './theme.css';
import './layout.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VaultGuardPage />
  </StrictMode>,
);
