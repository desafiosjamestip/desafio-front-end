import { useNavigate, Link } from 'react-router-dom';
import * as C from "./styles";
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.productName === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    // Ação de mudança de página
    const handleNextStep = () => {
        if (state.productName !== '') {
            navigate('/view');
        } else {
            alert("Preencha os dados");
        }
        
    }

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setProductValue,
            payload: e.target.value
        });
    }

    const handleSupplierChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setSupplierName,
            payload: e.target.value
        });
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
                    <CurrencyInput 
                        type="number"
                        id="input-example"
                        name="input-name"
                        decimalsLimit={2}
                        value={state.productValue}
                        onChange={handleValueChange}
                    />
                </label>
                <label>
                    Nome do Fornecedor
                    <input 
                        type="text"
                        value={state.supplierName}
                        onChange={handleSupplierChange}
                    />
                </label>

                <Link to="/" className='backbtn'>Voltar</Link>
                <button onClick={handleNextStep}>Cadastrar</button>
            </C.Container>
        </Theme>
    )
}