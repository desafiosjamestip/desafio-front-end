import React from 'react'
import { Button } from './styled'

type IButtonProps = {
    content: string
    onClick: () => void
}

const DefaultButton: React.FC<IButtonProps> = ({ content, onClick }) => {
    return (
        <>
            <Button onClick={onClick}>{content}</Button>
        </>
    )
}

export default DefaultButton
