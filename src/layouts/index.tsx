import styled from 'styled-components';

export const Card = styled.div`
    text-decoration: none;
    display: flex;
    align-items: center;
    background: 'black';
    color: #eaeaea;
    border-radius: 10px;
    width: 100%;
    padding: 20px 12px;
    border: 1px solid ${(p) => p.theme.colors.lightBlue};
    background: #000000;
    -webkit-box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.22);
    box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.22);
    @media (min-width: 800px) {
        padding: 40px 20px;
        max-width: 900px;
        &.highlight-on-hover {
            &:hover {
                cursor: pointer;
                background: #151515;
                -webkit-box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.42);
                box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.42);
            }
        }
    }
`;

export const Main = styled.section`
    text-decoration: none;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    padding: 50px 4px;
    @media (min-width: 800px) {
        padding-top: 150px;
        max-width: 900px;
    }
`;
