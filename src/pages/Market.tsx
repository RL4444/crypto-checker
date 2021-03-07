import React, { useState } from 'react';
import styled from 'styled-components';

import { useCoinApi } from '../hooks/useApi';

import TableHeader from '../components/MarketHeader';
import CoinRow from '../components/CoinRow';

import { ICoinRowDataResponseObject, IResponseA } from '../types/market';

interface ICurrency {
    currency: string;
}
interface IResultsLimit {
    limit: number;
}

export default () => {
    const [currency, setCurrency] = useState<ICurrency>({ currency: 'eur' });
    const [limit, setLimit] = useState<IResultsLimit>({ limit: 20 });

    const url: string = `vs_currency=${currency.currency}&order=market_cap_desc&per_page=${
        limit.limit
    }&page=1&sparkline=false&price_change_percentage=${encodeURIComponent('1h,24h,7d,30d,200d,1y')}`;
    const { response, error, loading }: IResponseA = useCoinApi(`/coins/markets?${url}`);

    return (
        <>
           
            {response && response.length > 0 && <TableHeader />}
            {response &&
                response.map((row: ICoinRowDataResponseObject) => {
                    return <CoinRow key={row.id} data={row} />;
                })}
            {/*  TODO:replace with Spinner */}
            {loading && <p>Loading...</p>}
            {error && <h3>Error Loading Data</h3>}
        </>
    );
};
