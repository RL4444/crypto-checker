import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
    width: 100%;
    @media (min-width: 800px) {
        position: fixed;
        background: #000000;
        -webkit-box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.31);
        box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.31);
    }
`;
const Inner = styled.div`
    margin: 0 auto;
    justify-content: center;
    padding: 20px 10px;
    display: flex;
    @media (min-width: 800px) {
        justify-content: flex-start;
        padding: 20px 30px;
        max-width: 900px;
        width: 100%;
    }
`;

const Logo = styled.h2`
    color: ${(p) => p.theme.colors.orange};
    font-size: 30px;
`;

export default () => {
    return (
        <Wrapper>
            <Inner>
                <Logo>Crypto Check</Logo>
            </Inner>
        </Wrapper>
    );
};
