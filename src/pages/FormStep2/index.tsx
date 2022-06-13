import { useNavigate } from 'react-router-dom';
import * as C from "./styles";
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });
    }, []);

    // Ação de mudança de página
    const handleNextStep = () => {
        if (state.productName !== '') {
            navigate('/view');
        } else {
            alert("Preencha os dados");
        }
        
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/2</p>
                <h1>{state.productName}</h1>
                <p>Preencha os demais campos.</p>

                <hr/>
                <label>
                    Categoria do Produto:
                    <select>
                        <option value="Beleza">Beleza</option>
                        <option value="Eletrônico">Eletrônico</option>                        
                        <option value="Esportes">Esportes</option>
                        <option value="Livros">Livros</option>
                        <option value="Móveis e Decoração">Móveis e Decoração</option>
                        <option value="Vestuário">Vestuário</option>
                    </select>
                </label>
                <label>
                    Valor do Produto
                    <input 
                        type="number"
                    />
                </label>
                <label>
                    Nome do Fornecedor
                    <input 
                        type="text"
                    />
                </label>


                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}