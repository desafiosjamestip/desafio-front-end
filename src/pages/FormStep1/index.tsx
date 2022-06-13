import { useNavigate } from 'react-router-dom';
import * as C from "./styles";
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect, useState } from 'react';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [name, setName] = useState()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    // Ação de mudança de página
    const handleNextStep = () => {
        if (state.productName !== '') {
            navigate('/step2');
        } else {
            alert("Preencha os dados");
        }
        
    }

    // Atualização do nome do produto que o usuário escreveu no input
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setProductName,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/2</p>
                <h1>Primeiro a identificação do Produto</h1>
                <p>Preencha os campos abaixo com o nome e código do produto.</p>

                <hr/>

                <label>
                    Nome do Produto
                    <input 
                        type="text"
                        autoFocus
                        value={state.productName}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Código do Produto
                    <input 
                        type="number"
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}