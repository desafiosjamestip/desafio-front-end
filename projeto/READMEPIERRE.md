# Descrição

Logistc Tech é uma aplicação de controle de cadastro de produtos.
Imagine uma empresa ou empreendedor com divesar filias de lojas de produtos, e pudesse compartilhar as informações de novos produtos simultaneamente com todas as suas filiais!

# Ferramentas

React JS
-react-router-dom
-styled-components
-yup
-axios
-framer-motion
-jwt-decode
-hook-form
-hot-toast
-icons

-cypress (testes) Para rodar os teste: yarn cypress:open
OBS: por algum motivo o usuário que deixei para testes e cadastrado na api por vezes não funciona (algo com a API), caso não funcione de primeira, pode mudar os dados do teste colocando um usuário recém criado.

API Rest

# Decisões

Minha primeira duvida surgiu na montagem do prejeto, cuidei para não sair do escopo e ao mesmo tempo fazer algo que me deixa-se feliz com o resultado.

Depois decidi utilizar minha API para fazer a gestão dos produtos, e também aproveitei para fazer a gestão de usuários, pois não tiha conhecimento da ferramenta indicada na readme do desafio (IndexedDB), mas o uso de localstorage foi feito.

Tive minha primeira dificuldade com o hook router-dom, pois acredito que ele tenha sofrido uma atualização com mudança de sintaxe.

Tomei a decisão de seguir utilizando a versão que eu conhecia e já estava habituado.

Sobre os testes, utilizei o cypress. Gosto da interface de testes e também achei simples seu uso.

Contudo, tiver algumas complicações que fizaram alguns testes não funcionar, na verdade não foram dificuldades, mas sim uma tomada de decisão.

A API que utilizei é fake, então tem algumas limitações, nos formulários de cadastro de usuário e cadastro de produtos precise ocultar o input de ID, pois precisava que ele fosse incrementado na ordem em que ocorriam os registros, mas a API não faz isso de forma automática então criei esse incremento no input que deixei como hidden.

Minha decisão se baseeou no seguinte cenário: quando o usuario for criar uma conta ou cadastrar um produto ele precisaria colocar ID em ambos so cadastros, e se o id já estivesse em uso na API ele precisaria ir tentando colocar outras numerações e isso seria bem desagradável.

Também optei por não fazer proteção de rotas, pois o projeto já estava bastante inflado e para facilitar a avaliação.

OBS: o cadastro de produtos só pode ser feito mediante login do usuário.
