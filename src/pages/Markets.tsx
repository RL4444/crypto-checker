import React, { useState } from 'react';
import styled from 'styled-components';

import useApi from '../hooks/useApi';
import MarketRow from '../components/MarketRow';

import { IMarketResponseObject, IResponseA } from '../types/market';

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
    const { response, error, loading }: IResponseA = useApi(`/coins/markets?${url}`);

    console.log('response ', response);

    return (
        <>
            {response &&
                response.map((node: IMarketResponseObject) => {
                    return <MarketRow key={node.id} data={node} click={() => null} />;
                })}
            {loading && <p>Loading...</p>}
        </>
    );
};
