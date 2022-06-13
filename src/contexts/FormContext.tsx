// Context, Reducer, Provider e Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    currentStep: number;
    productName: string;
    productCode: number;
    productCategory: string;
    productValue: number;
    supplierName: string;
}
type Action = { type: FormActions; payload: any; };
type ContextType = { state: State; dispatch: (action: Action) => void; };
type FormProviderProps = { children: ReactNode };


const initialData: State = {
    currentStep: 0,
    productName: '',
    productCode: 0,
    productCategory: '',
    productValue: 0,
    supplierName: ''
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setProductName,
    setProductCode,
    setProductCategory,
    setProductValue,
    setSupplierName
}

const FormReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setProductName:
            return {...state, productName: action.payload};
        case FormActions.setProductCode:
            return {...state, productCode: action.payload};
        case FormActions.setProductCategory:
            return {...state, productCategory: action.payload};
        case FormActions.setProductValue:
            return {...state, productValue: action.payload};
        case FormActions.setSupplierName:
            return {...state, supplierName: action.payload};
        default:
            return state;
    }
}

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(FormReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    return context;
}