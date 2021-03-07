import styled from 'styled-components';

import { Card } from '../layouts/index';

export const TopRow = styled.div`
    display: flex;
    padding: 8px 2px;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
        flex-direction: row;
        align-items: inherit;
        justify-content: space-between;
        padding: 20px;
    }
`;

export const MainImgWrapper = styled.div`
    background: ${(p) => p.theme.colors.white};
    max-width: 80px;
    max-height: 80px;
    min-width: 80px;
    min-height: 80px;
    border-radius: 50%;
    @media (min-width: 800px) {
        max-width: 120px;
        max-height: 120px;
        min-width: 120px;
        min-height: 120px;
    }
`;

export const MainImg = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const Title = styled.h2`
    font-size: 28px;
    margin-top: 1em;
    color: ${(p) => p.theme.colors.white};
    @media (min-width: 800px) {
        /* margin-left: 12px; */
    }
`;

export const SubTitle = styled(Title)`
    font-size: 20px;
`;

export const RankCard = styled(Card)`
    margin-top: 1em;
    justify-content: space-around;
    flex-direction: column;

    @media (min-width: 500px) {
        flex-direction: row;
    }
    @media (min-width: 800px) {
        padding: 20px;
        margin-top: 0;
        margin-left: 2em;
    }
`;

export const RankItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 5px;
    align-items: center;
`;

export const RankName = styled.p`
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.white};
    font-size: 14px;
`;

export const RankScore = styled.h2`
    color: ${(p) => p.theme.colors.white};
    @media (min-width: 800px) {
        font-size: 40px;
    }
`;
