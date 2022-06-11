export function salvar(produtoList: any, setProdutoList: any) {
    var today = new Date()
    let dateTime: string = 'Adc. em ' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() +
                            ' às ' + today.getHours() + ':' + today.getMinutes()

    const produto = {
        id: Math.floor(Math.random()*(999999999 - 1)) + 3,
        codigo: (document.getElementById("codigo") as HTMLInputElement).value,
        categoria: (document.getElementById("categoria") as HTMLInputElement).value,
        nome: (document.getElementById("nome") as HTMLInputElement).value,
        fornecedor: (document.getElementById("fornecedor") as HTMLInputElement).value,
        valor: (document.getElementById("valor") as HTMLInputElement).value,
        data: dateTime
    }

    let finalProdutoList = [...produtoList, produto]
    setProdutoList(finalProdutoList)
    localStorage.setItem("produtos", JSON.stringify(finalProdutoList))

    window.alert("Produto cadastrado com sucesso!")
    window.location.reload()
}