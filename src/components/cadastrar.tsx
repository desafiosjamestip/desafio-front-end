import { useState } from "react";
import { IProduto, useAppContext } from "../hooks/context";
import { ButtonSubmit, InputArea, Form, H1, Input, Li, Ul } from "../styles/cadastrarStyle";
import { getCategorias } from "./functions/getCategorias";
import { getFornecedores } from "./functions/getFornecedores";
import { salvar } from "./functions/salvar";

export function Cadastrar() {
    const [produtoList, setProdutoList] = useAppContext()

    return (
        <Form>
            <H1>Cadastro de Produto:</H1>
            <InputArea>
                <Ul>
                    <Li>Código:</Li>
                    <Li>
                        <Input type="text" id='codigo' placeholder="Código do Produto" autoFocus></Input>
                    </Li>
                    <Li>Categoria:</Li>
                    <Li>
                        <Input type="text" id='categoria' list="categorias" placeholder='Categoria do Produto'/>
                            <datalist id="categorias">
                                {getCategorias(produtoList).map((p: any) => {
                                    return(
                                        <option>{p}</option>
                                    )
                                })}
                            </datalist>
                    </Li>
                    <Li>Nome:</Li>
                    <Li>
                        <Input type="text" id='nome' placeholder="Nome do Produto"></Input>
                    </Li>
                </Ul>
                <Ul>
                    <Li>Fornecedor:</Li>
                    <Li>
                        <Input type="text" id='fornecedor' list="fornecedores" placeholder='Fornecedor do Produto'/>
                            <datalist id="fornecedores">
                                {getFornecedores(produtoList).map((p: any) => {
                                    return(
                                        <option>{p}</option>
                                    )
                                })}
                            </datalist>
                    </Li>
                    <Li>Valor:</Li>
                    <Li>
                        <Input type="text" id='valor' placeholder="Valor do Produto"></Input>
                    </Li>
                </Ul>
            </InputArea>
            <ButtonSubmit onClick={() => (salvar(produtoList, setProdutoList))}>Salvar</ButtonSubmit>
        </Form>
    )
}