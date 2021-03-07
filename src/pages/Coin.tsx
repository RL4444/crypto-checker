import React, { useState } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

import CoinHeader from '../components/CoinHeader';
import CoinChart from '../components/CoinChart';

type TParams = { id: string };

export default ({ match }: RouteComponentProps<TParams>): JSX.Element => {
    const id: string = match.params.id;

    return (
        <>
            <CoinHeader id={id} />
            <CoinChart id={id} />
        </>
    );
};
