import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    padding: 20px 10px;
    @media (min-width: 800px) {
        justify-content: flex-start;
        padding: 20px 30px;
        background: #000000;
        -webkit-box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.31);
        box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.31);
    }
`;

const Logo = styled.h2`
    color: ${(p) => p.theme.colors.orange};
    font-size: 30px;
`;

export default () => {
    return (
        <Wrapper>
            <Logo>Crypto Check</Logo>
        </Wrapper>
    );
};
