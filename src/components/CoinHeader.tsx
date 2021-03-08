import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ICoinHeaderResponse } from '../types/coin';

import { useCoinApi } from '../hooks/useApi';
import { convertTsToUnixString } from '../utils/index';

import Spinner from './Spinner';

import {
    TopRow,
    MainImgWrapper,
    MainImg,
    Title,
    SubTitle,
    RankCard,
    RankItem,
    RankName,
    RankScore,
} from '../styled-comps/coin.styled';

interface ICoinChildProps {
    id: string;
}

export default ({ id }: ICoinChildProps) => {
    const url: string = `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
    const { response, error, loading }: ICoinHeaderResponse = useCoinApi(url);

    return (
        <>
            {loading ? (
                <></>
            ) : !error ? (
                <>
                    {!loading && (
                        <Link to='/'>
                            <p className='c-orange w-100 ta-l ml-1'>back</p>
                        </Link>
                    )}

                    <TopRow className={loading ? 'skeleton' : ''}>
                        <div className='d-flex fd-col ai-c p-1'>
                            <MainImgWrapper className={loading ? 'skeleton' : ''}>
                                <MainImg src={loading ? '' : response.image.large} />
                            </MainImgWrapper>

                            <Title>{response.name}</Title>
                        </div>
                        <RankCard>
                            <RankItem>
                                <RankScore>#{response.coingecko_rank}</RankScore>
                                <RankName>Rank</RankName>
                            </RankItem>
                            <RankItem>
                                <RankScore>{response.coingecko_score}</RankScore>
                                <RankName>Score</RankName>
                            </RankItem>
                            <RankItem>
                                <RankScore>{response.public_interest_score}</RankScore>
                                <RankName>Public Interest Score</RankName>
                            </RankItem>
                        </RankCard>
                    </TopRow>
                </>
            ) : (
                <div>error loading data </div>
            )}
        </>
    );
};
