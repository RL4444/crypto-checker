import React from 'react';
import styled from 'styled-components';

import {
    ImgWrapper,
    Img,
    Name,
    CurrentPriceWrapper,
    ChangeWrapper1,
    ChangeWrapper24,
    ChangeWrapper7d,
    ChangeWrapper30d,
} from '../styled-comps/market.styled';

const Wrapper = styled.div`
    display: flex;
    align-items: baseline;
    padding: 20px 12px;
    color: white;
    font-size: 14px;
    line-height: 18px;
    @media (min-width: 800px) {
        padding: 10px 20px;
    }
`;

export default () => {
    return (
        <Wrapper>
            <ImgWrapper style={{ backgroundColor: 'transparent' }}></ImgWrapper>
            <Name />
            <CurrentPriceWrapper>Price</CurrentPriceWrapper>
            <ChangeWrapper1>1hr</ChangeWrapper1>
            <ChangeWrapper24>24hrs</ChangeWrapper24>
            <ChangeWrapper7d>7days</ChangeWrapper7d>
            <ChangeWrapper30d>30days</ChangeWrapper30d>
        </Wrapper>
    );
};
