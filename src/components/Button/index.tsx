import { ReactNode } from "react";

import { ButtonStyled } from "./styled";

interface ReactProps {
    children: ReactNode;
    confirm?: boolean;
    newItem? : boolean;
    onClick?: () => void;
}

const Button = ({ children, confirm, newItem, onClick }: ReactProps) => {

    return (
        <ButtonStyled confirm={confirm} newItem={newItem} onClick={onClick}>
            {children}
        </ButtonStyled>
    )
}

export default Button;