import React from 'react';
import { Link } from 'react-router-dom';

import { ChevronRight } from '@material-ui/icons';
import { Card } from '../layouts/index';
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

import { ICoinRowDataResponseObject } from '../types/market';

interface ICoinRowTableProps {
    data: ICoinRowDataResponseObject;
    click: () => void;
    key: any;
}

export default ({ data, click }: ICoinRowTableProps) => {
    const {
        name,
        image,
        id,
        current_price: currentPrice,
        price_change_percentage_1h_in_currency: priceChange1,
        price_change_percentage_24h_in_currency: priceChange24,
        price_change_percentage_7d_in_currency: priceChange7d,
        price_change_percentage_30d_in_currency: priceChange30d,
    } = data;
    return (
        <Link to={`/coin/${id}`}>
            <Card className='highlight-on-hover mb-1'>
                <ImgWrapper>
                    <Img src={image} />
                </ImgWrapper>
                <Name>{name}</Name>
                <CurrentPriceWrapper>€ {parseFloat(currentPrice.toFixed(2))}</CurrentPriceWrapper>
                <ChangeWrapper1 className={priceChange1 < 0 ? 'c-red' : 'c-green'}>
                    {priceChange1 < 0 ? '' : '+'}
                    {parseFloat(priceChange1.toFixed(2))}%
                </ChangeWrapper1>
                <ChangeWrapper24 className={priceChange24 < 0 ? 'c-red' : 'c-green'}>
                    {priceChange24 < 0 ? '' : '+'} {parseFloat(priceChange24.toFixed(2))}%
                </ChangeWrapper24>
                <ChangeWrapper7d className={priceChange7d < 0 ? 'c-red' : 'c-green'}>
                    {priceChange7d < 0 ? '' : '+'} {parseFloat(priceChange7d.toFixed(2))}%
                </ChangeWrapper7d>
                <ChangeWrapper30d className={priceChange30d < 0 ? 'c-red' : 'c-green'}>
                    {priceChange30d < 0 ? '' : '+'} {parseFloat(priceChange30d.toFixed(2))}%
                </ChangeWrapper30d>
                <div className='ml-auto'>
                    <ChevronRight />
                </div>
            </Card>
        </Link>
    );
};
