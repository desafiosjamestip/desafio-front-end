import { IProduto } from "../../hooks/context"

export function getCategorias(produtoList: any) {
    let categoriaList: any = []

    produtoList.map((p: IProduto) => {
        categoriaList.push(p.categoria)
    })

    return Array.from(new Set(categoriaList))
}