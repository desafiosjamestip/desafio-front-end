import { HeaderStyle, ImageStyle, MainStyle } from './style'

function DashBoard(){
    return (
      <>
          <HeaderStyle>
            <ImageStyle src="https://resultados.jamestip.com/static/media/logo_horizontal_white.f884a3ed.svg" alt="" />
          </HeaderStyle>
          <MainStyle>
               <div>
                    <input type="text" />
                    <button>Pesquisar Produto</button>
               </div>
               <section>
                   <div>
                       <button>Adicionar Produto</button>
                   </div>
                   <div>
                       <p>Id</p>
                       <p>Catagoria</p>
                       <p>Descrição</p>
                       <p>Fornecedor</p>
                       <p>Preço</p>
                       <button>Remover Produto</button>
                       <button>Editar Produto</button>
                   </div>
               </section>
          </MainStyle>
      </>
    )
}

export default DashBoard