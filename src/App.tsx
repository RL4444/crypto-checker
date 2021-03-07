import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Market from './pages/Market';
import News from './pages/News';
import Coin from './pages/Coin';
import { Main, Card } from './layouts';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Main>
                    <Route path='/coin/:id' component={Coin} />
                    <Route path='/news' component={News} />
                    <Route path='/' exact component={Market} />
                </Main>
            </Router>
        </div>
    );
}

export default App;
