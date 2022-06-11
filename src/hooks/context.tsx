import { createContext, useContext, useState } from "react";

export interface IProduto {
    id?: number,
    codigo?: number;
    categoria?: string;
    nome?: string;
    fornecedor?: string;
    valor?: string;
    data?: string;
}

const Context = createContext<[any, any]>(undefined!)

export function ContextWrap({ children }: any) {
    const [produtoList, setProdutoList] = useState(JSON.parse(localStorage.getItem("produtos") || "[]"))

    return (
        <Context.Provider value={[produtoList, setProdutoList]}>
            { children }
        </Context.Provider>
    )
}

export function useAppContext() {
    return useContext(Context)
}