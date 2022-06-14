import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return(
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <Sidebar 
                            title="Cadastro"
                            description="Nome e Código"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <Sidebar 
                            title="Complementar"
                            description="Valor, Categoria..."
                            icon="profile"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}