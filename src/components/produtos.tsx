import { useState } from "react";
import { IProduto, useAppContext } from "../hooks/context";
import { Edit, Label, Li, Lista, Span, Ul, ListButton, SpanValor, EditValor, SpanData, LabelData } from "../styles/produtosStyle";
import { editar } from "./functions/editar";
import { excluir } from "./functions/excluir";
import { getCategorias } from "./functions/getCategorias";
import { getFornecedores } from "./functions/getFornecedores";

export function Produtos() {
    const [produtoList, setProdutoList] = useAppContext()
    const [edit, setEdit] = useState(false)
    const [selectedProduto, setSelectedProduto]: any = useState(0)

    return (
        <Lista>
            <LabelData>Data:</LabelData>
            <Label>Código:</Label>
            <Label>Categoria:</Label>
            <Label>Nome:</Label>
            <Label>Fornecedor:</Label>
            <Label>Valor:</Label>
            <Ul>
                {produtoList?.map((p: IProduto) => {
                    return (
                        <Li key = {p.id}>
                            {edit && selectedProduto === p.id ? (
                                <>
                                    <SpanData>{p.data}</SpanData>
                                    <Edit type="text" id='codigo' placeholder="Código do Produto" defaultValue={p.codigo} autoFocus/>
                                    <Edit type="text" id='categoria' list="categorias" placeholder='Categoria do Produto' defaultValue={p.categoria}/>
                                        <datalist id="categorias">
                                            {getCategorias(produtoList).map((p: any) => {
                                                return(
                                                    <option>{p}</option>
                                                )
                                            })}
                                        </datalist>
                                    <Edit type="text" id='nome' placeholder="Nome do Produto" defaultValue={p.nome}/>
                                    <Edit type="text" id='fornecedor' list="fornecedores" placeholder='Fornecedor do Produto' defaultValue={p.fornecedor}/>
                                        <datalist id="fornecedores">
                                            {getFornecedores(produtoList).map((p: any) => {
                                                return(
                                                    <option>{p}</option>
                                                )
                                            })}
                                        </datalist>
                                    <EditValor type="text" id='valor' placeholder="Valor do Produto" defaultValue={p.valor}/>
                                    <ListButton onClick={() => (editar(p.id, produtoList, setProdutoList, setEdit))}>✓</ListButton>
                                    <ListButton onClick={() => (setEdit(false))}>✕</ListButton>
                                </>
                            ) : (
                                <>
                                    <SpanData>{p.data}</SpanData>
                                    <Span>{p.codigo}</Span>
                                    <Span>{p.categoria}</Span>
                                    <Span>{p.nome}</Span>
                                    <Span>{p.fornecedor}</Span>
                                    <SpanValor>{p.valor}</SpanValor>
                                    <ListButton onClick={() => (setEdit(true), setSelectedProduto(p.id))}>🖊</ListButton>
                                    <ListButton onClick={() => (excluir(p.id, produtoList, setProdutoList))}>✕</ListButton>
                                </>
                            )}
                        </Li>
                    )
                })}
            </Ul>
        </Lista>
    )
}