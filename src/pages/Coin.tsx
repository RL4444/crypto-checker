import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

import { useCoinApi } from '../hooks/useApi';

const Thing = styled.div`
    padding: 10px;
`;

interface ICoinViewProps {
    key: any;
}

type TParams = { id: string };

export default ({ match }: RouteComponentProps<TParams>) => {
    const id: string = match.params.id;

    console.log('id', id);
    return (
        <div>
            <h2> I am the coin page</h2>
        </div>
    );
};
