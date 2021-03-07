import React, { useState } from 'react';
import styled from 'styled-components';

import { IResponseHistoricalData } from '../types/coin';

import { useCoinApi } from '../hooks/useApi';
import { convertTsToUnixString } from '../utils/index';

import Chart from './Chart';

interface ICoinChildProps {
    id: string;
}

export default ({ id }: ICoinChildProps) => {
    const [startDate, setStateDate] = useState<string>(convertTsToUnixString(30));
    const [endDate, setEndDate] = useState<string>(convertTsToUnixString(1));

    const url: string = `coins/${id}/market_chart/range?vs_currency=eur&from=${startDate}&to=${endDate}`;
    const { response, error, loading }: IResponseHistoricalData = useCoinApi(url);

    return (
        <>
            {loading && <div>loading</div>}
            {!loading && <Chart data={response} />}
        </>
    );
};
