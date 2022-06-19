import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50%;
    height: 650px;
    min-width: 300px;

    overflow-x: auto;

    border: 1px solid #cecece;
    border-radius: 5px;
    margin: 10px;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.black}; 

    @media (max-width: 1366px) {
        width: 80%;
    }
    @media (max-width: 768px) {
        width: 95%
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    color: ${props => props.theme.colors.title};
    padding: 30px 40px 20px 40px;
    width: 100%;
    box-shadow: rgba(33, 35, 38, .1) 0px 10px 10px -10px;
    p {
        margin-top: 15px;
        color: ${props => props.theme.colors.label};
        font-size: 14px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 70px;
`;
export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    bottom: -20px;
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