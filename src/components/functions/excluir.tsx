import { IProduto } from "../../hooks/context";

export function excluir(id: any, produtoList: any, setProdutoList: any) {
    if (window.confirm('Excluir Produto?')) {
        let newProdutoList = [...produtoList]
        newProdutoList.find((p: IProduto, key: number) => p.id === id && (newProdutoList.splice(key, 1)));
        localStorage.setItem("produtos", JSON.stringify(newProdutoList))
        setProdutoList(newProdutoList)
    }
}