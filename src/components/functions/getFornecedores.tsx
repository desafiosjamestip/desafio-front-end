import { IProduto } from "../../hooks/context"

export function getFornecedores(produtoList: any) {
    let fornecedorList: any = []
    
    produtoList.map((p: IProduto) => {
        fornecedorList.push(p.categoria)
    })

    return Array.from(new Set(fornecedorList))
}