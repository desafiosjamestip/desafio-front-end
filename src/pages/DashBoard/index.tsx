import { HeaderStyle, ImageStyle, MainStyle, Wrapper, Search, InputStyle, ButtonSearch, LinkAdd, DivAdd} from './style'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';


function DashBoard(){
    return (
      <>
          <HeaderStyle>
            <ImageStyle src="https://resultados.jamestip.com/static/media/logo_horizontal_white.f884a3ed.svg" alt="" />
          </HeaderStyle>
          <MainStyle>
               <Search>
                    <InputStyle type="text" placeholder="digite o nome do produto"/>
                    <ButtonSearch> Pesquisar Produto <SearchIcon/> </ButtonSearch>
               </Search>
               <section>
                   <DivAdd>
                       <LinkAdd to="/register-products"> Adicionar Produto <AddCircleIcon/> </LinkAdd>
                   </DivAdd>
                   <Wrapper>
                        <div>
                            <p>cod. Id</p>
                            <p>Catagoria</p>
                            <p>Descrição</p>
                            <p>Fornecedor</p>
                            <p>Preço</p>
                            <button> <DeleteIcon/> </button>
                            <button> <EditIcon/></button>
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
                        <div>
                            <p>Id</p>
                            <p>Catagoria</p>
                            <p>Descrição</p>
                            <p>Fornecedor</p>
                            <p>Preço</p>
                            <button>Remover Produto</button>
                            <button>Editar Produto</button>
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
                        <div>
                            <p>Id</p>
                            <p>Catagoria</p>
                            <p>Descrição</p>
                            <p>Fornecedor</p>
                            <p>Preço</p>
                            <button>Remover Produto</button>
                            <button>Editar Produto</button>
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
                        <div>
                            <p>Id</p>
                            <p>Catagoria</p>
                            <p>Descrição</p>
                            <p>Fornecedor</p>
                            <p>Preço</p>
                            <button>Remover Produto</button>
                            <button>Editar Produto</button>
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
                        <div>
                            <p>Id</p>
                            <p>Catagoria</p>
                            <p>Descrição</p>
                            <p>Fornecedor</p>
                            <p>Preço</p>
                            <button>Remover Produto</button>
                            <button>Editar Produto</button>
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
                   </Wrapper>
               </section>
          </MainStyle>
      </>
    )
}

export default DashBoard