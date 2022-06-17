import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;
    height: 95%;
    min-width: 300px;

    border: 1px solid #cecece;
    border-radius: 5px;
    margin: 10px;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, 
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.black}; 
`;
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.colors.title};
    margin: 50px 0 10px 0;
    padding: 10px;
    width: 100%;
    height: 15%;
    box-shadow: rgba(33, 35, 38, .1) 0px 10px 10px -10px;
    p {
        margin-top: 20px;
        color: ${props => props.theme.colors.details};
    }
`;

export const Content = styled.div`
    color: ${props => props.theme.colors.black};
    margin: 10px;
    width: 80%;
    height: 75%;

    border-radius: 10px;
`;
export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.colors.black};
    margin: 0 10px 40px 0;
    height: 10%;
`;

// export const Moustache = styled.div`
//     width: 18px;
//     height: 18px;
//     border-radius: 50%;
//     position: relative;
//     box-shadow:
//     15px 24px 0 0 currentColor,
//     30px 24px 0 0 currentColor;
//     &::before {
//         content: '';
//         position: relative;
//         width: 21px;
//         height: 12px;
//         border-bottom: solid 18px currentColor;
//         border-radius: 0 0 0 100%;
//         left: 3px;
//         top: 12px;
//         transform: rotate(-40deg);
//         transform-origin: right 21px;
//     }

//     &::after {
//         content: '';
//         position: relative;
//         width: 21px;
//         height: 12px;
//         border-bottom: solid 18px currentColor;
//         border-radius: 0 0 100% 0;
//         left: 39px;
//         top: 12px;
//         transform: rotate(40deg);
//         transform-origin: left 21px;
//     }
// `;