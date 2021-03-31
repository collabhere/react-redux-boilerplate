import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes.js';

const Root = () => {
    return (
        <StoreProvider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </StoreProvider>
    );
};

export default Root;