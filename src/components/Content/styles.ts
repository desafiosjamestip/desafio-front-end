import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;

    display: flex;
    flex-direction: columns;
    justify-content: center;
    

    overflow-y: scroll;    
    background-color: ${props => props.theme.colors.quartiary};
    color: ${props => props.theme.colors.letter};
`;