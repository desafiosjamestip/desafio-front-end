import { IProduto } from "../../hooks/context"

export function editar(id: any, produtoList: any, setProdutoList: Function, setEdit: Function) {
    let newProdutoList = [...produtoList]

    let newCodigo = parseFloat((document.getElementById("codigo") as HTMLInputElement).value)
    let newCategoria = (document.getElementById("categoria") as HTMLInputElement).value
    let newNome = (document.getElementById("nome") as HTMLInputElement).value
    let newFornecedor = (document.getElementById("fornecedor") as HTMLInputElement).value
    let newValor = (document.getElementById("valor") as HTMLInputElement).value

    newProdutoList.find((p: any) => p.id === id && (
        p.codigo = newCodigo,
        p.categoria = newCategoria,
        p.nome = newNome,
        p.fornecedor = newFornecedor,
        p.valor = newValor
    ))
    localStorage.setItem("0", JSON.stringify(newProdutoList))
    setProdutoList(newProdutoList)
    setEdit(false)
}