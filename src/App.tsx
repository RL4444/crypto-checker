import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Markets from './pages/Markets';
import { Main, Card } from './layouts';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Main>
                <Markets />
            </Main>
        </div>
    );
}

export default App;
