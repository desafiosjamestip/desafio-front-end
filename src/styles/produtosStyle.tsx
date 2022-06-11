import styled from 'styled-components'

const Lista = styled.div `
    margin-top: 20px;
`;

const Label = styled.label `
    color: rgb(120, 120, 120);
    font-size: 14px;
    width: 160px;
    display: inline-block
`;

const LabelData = styled.label `
    color: rgb(120, 120, 120);
    font-size: 14px;
    width: 120px;
    display: inline-block
`;

const Ul = styled.ul `
    list-style: none;
    margin-left: -50px;
`;

const Li = styled.li `
    margin-top: 10px;
    color: rgb(40, 40, 40);
    font-size: 15px;
    display: flex;
    padding-top: 15px;
    padding-bottom: 10px;
    padding-left: 10px;
    transition: 0.1s;

    &:hover {
        background-color: #95ffef;
    }
`;

const Span = styled.label `
    color: rgb(40, 40, 40);
    width: 150px;
    margin-right: 10px;
    display: inline-block;
`;

const Edit = styled.input `
    color: black;
    font-size: 15px;
    border: none;
    width: 145px;
    margin-right: 10px;
    margin-top: -8px;
    background-color: #e7fefd;
`;

const SpanValor = styled.label `
    color: rgb(40, 40, 40);
    width: 80px;
    display: inline-block
`;

const EditValor = styled.input `
    color: black;
    font-size: 15px;
    border: none;
    width: 80px;
    margin-right: 5px;
    margin-top: -8px;
    background-color: #e7fefd;
`;

const SpanData = styled.label `
    color: rgb(170, 170, 170);
    width: 100px;
    margin-right: 20px;
    display: inline-block;
    font-size: 12px;
    margin-top: -4px;
`;

const ListButton = styled.button `
    border: none;
    background-color: transparent;
    color: rgb(160, 160, 160);
    font-size: 20px;
    margin-top: -9px;
    font-weight: 600;

    &:hover {
        color: black;
    }
`;

export {Lista, Label, Ul, Li, Span, Edit, ListButton, SpanValor, EditValor, SpanData, LabelData}