# Desafio James Tip

Olá! Este é a solução proposta para o desafio de admissão da James Tip. Abaixo deixei algumas explicações sobre as tencologias utilizadas e decisões tomadas. O layout foi feito por mim e caso queiram ver, está disponível [neste link do Figma](https://www.figma.com/file/eHD5YXfNrkN4y4Ln1UbqdV/Desafio-James-Tip?node-id=31%3A42).

# Tecnologias Utilizadas

- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [react-router-dom](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [react-hook-form](https://react-hook-form.com/)
- [yup](https://github.com/jquense/yup)

Decidi utilizar os [styled-components](https://styled-components.com/) por eles permitirem trabalhar com JS in CSS, trazendo uma maior versatilidade para o código. Utilizei o [editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e o [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) para trazer uma maior padronização ao código. Já na parte de formulários, resolvi trabalhar com a biblioteca [react-hook-form](https://react-hook-form.com/) em conjunto com o [yup](https://github.com/jquense/yup) para uma maior versatilidade na validação dos formulários.

# Decisões

Durante o desenvolvimento, busquei usar o mínimo de bibliotecas possível para deixar o código da forma mais pura possível. Utilizei o JavaScript por não ter um domínio sobre o TypeScript. Dentro do projeto, trabalhei com a ContexAPI em conjunto com o hook useReducer para gerenciar as ações dentro da aplicação. Tentei trazer um layout bem limpo para um maior entendimento do funcionamento, utilizando com um maior foco as cores da empresa. No mais utilizei o ecossistema natural do React para o desenvolvimento, além, claro, do JavaScript puro.
