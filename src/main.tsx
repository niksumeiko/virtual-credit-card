import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './index.css';
import { ContextProvider } from './common/context';
import { provideVirtualCard } from './cards/useCases/createVirtualCard/VirtualCardProvider';
import { createVirtualCardAdapter } from './cards/useCases/createVirtualCard/VirtualCardAdapter';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ContextProvider providers={[provideVirtualCard(createVirtualCardAdapter)]}>
            <App />
        </ContextProvider>
    </React.StrictMode>,
);
