import styled from 'styled-components';

export const ImgWrapper = styled.div`
    max-width: 40px;
    max-height: 40px;
    min-width: 40px;
    min-height: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    background: white;
    @media (min-width: 800px) {
        max-width: 50px;
        max-height: 50px;
        min-width: 50px;
        min-height: 50px;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const Name = styled.h4`
    text-align: left;
    display: none;
    @media (min-width: 800px) {
        width: 100px;
        margin-left: 20px;
        display: block;
    }
`;
export const CurrentPriceWrapper = styled.h4`
    text-align: left;
    width: 80px;
    margin-left: 20px;
    display: block;
    padding: 2px;
    @media (min-width: 800px) {
        margin-left: 40px;
    }
`;

export const ChangeWrapper1 = styled(CurrentPriceWrapper)`
    margin-left: 10px;
    box-sizing: border-box;
    width: 80px;
    @media (min-width: 800px) {
        margin-left: 40px;
    }
`;

export const ChangeWrapper24 = styled(ChangeWrapper1)``;

export const ChangeWrapper7d = styled(ChangeWrapper1)`
    display: none;
    @media (min-width: 480px) {
        display: block;
    }
`;
export const ChangeWrapper30d = styled(ChangeWrapper7d)`
    display: none;
    @media (min-width: 590px) {
        display: block;
    }
`;
