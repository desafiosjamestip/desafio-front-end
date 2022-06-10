import React from 'react'
import { Selector, SelectorContainer, SelectorLabel } from './styled'

type ISelectorProps = {
    label: string
}

const SelectorStructure: React.FC<ISelectorProps> = ({ label }) => {
    const options = [
        {
            value: 1,
            category: 'Eletrônico',
        },
        {
            value: 2,
            category: 'Roupas',
        },
        {
            value: 3,
            category: 'Cosméticos',
        },
        {
            value: 4,
            category: 'Livros',
        },
    ]

    return (
        <>
            <SelectorContainer>
                <SelectorLabel>{label}</SelectorLabel>
                <Selector>
                    {options.map(op => (
                        <option key={op.value} value={op.value}>
                            {op.category}
                        </option>
                    ))}
                    {/* <option value="1">Eletrônico</option>
                    <option value="2">Roupas</option>
                    <option value="3">Cosméticos</option>
                    <option value="4">Livros</option> */}
                </Selector>
            </SelectorContainer>
        </>
    )
}

export default SelectorStructure
