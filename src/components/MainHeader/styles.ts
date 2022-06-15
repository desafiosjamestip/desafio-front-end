import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.letter};
`;

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    
    > img {
        width: 45px;
        height: 45px;
        
        margin: 0 10px;
        cursor: pointer;
    }
`;

export const RightSide = styled.div`
    margin-right: 30px;
`;

export const CircularIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    border: 2px solid #FFF;
    background-color: ${props => props.theme.colors.title};

    width: 40px;
    height: 40px;

    cursor: pointer;

    > svg {
        color: black;
        width: 50%;
        height: 50%;
    }
`;