import React from 'react'
import { Input, InputContainer, InputLabel } from './styled'

type IInputProps = {
    label: string
    onChange: (event: any) => void
}

const InputStructure: React.FC<IInputProps> = ({ label, onChange }) => {
    return (
        <>
            <InputContainer>
                <InputLabel>{label}</InputLabel>
                <Input onChange={onChange} />
            </InputContainer>
        </>
    )
}

export default InputStructure
