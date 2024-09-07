# Meu Projeto React

## Descrição

Este projeto é uma aplicação web desenvolvida com React, criada usando Create React App. A aplicação apresenta uma estrutura organizada de páginas e componentes, integração com uma API local usando JSON Server, e utiliza boas práticas de desenvolvimento para garantir uma aplicação robusta e escalável.

## Funcionalidades

- **Páginas Principais**:
  - **Home**: Página inicial com um banner atraente e opções de navegação para outras seções do site.
  - **Feed**: Exibe uma lista de postagens com informações detalhadas dos usuários, utilizando o componente `Card`.
  - **Login**: Página de login com inputs para e-mail e senha, validação de formulário utilizando `react-hook-form`, e integração com a API para autenticação de usuários.

- **Componentes Reutilizáveis**:
  - **Button**: Um botão estilizado que aceita várias variações de estilo, como "primary" e "secondary".
  - **Card**: Componente de cartão para exibir informações de usuários, incluindo imagem de fundo e ícones.

- **Hooks Utilizados**:
  - **useState**: Para gerenciar o estado local dos componentes, como os dados do formulário e os estados de carregamento.
  - **useEffect**: Para realizar efeitos colaterais como fetch de dados da API e sincronizar com o estado do componente.
  - **useForm**: Fornecido pelo `react-hook-form` para gerenciar o estado do formulário e a validação de entrada do usuário.

- **API Local**: Utiliza JSON Server para simular uma API RESTful local em `http://localhost:8001`, permitindo a criação, leitura, atualização e exclusão de dados de forma fácil.

- **Code Splitting**: Implementa carregamento sob demanda de componentes com `React.lazy` e `Suspense` para melhorar o desempenho da aplicação.

- **Acessibilidade**: Implementação de atributos ARIA para garantir que a aplicação seja acessível a todos os usuários, incluindo leitores de tela e navegação por teclado.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

src/ components/ Button/ index.jsx styles.js Card/ index.jsx styles.js pages/ Feed/ index.jsx styles.js Home/ index.jsx styles.js Login/ index.jsx styles.js utils/ api.js App.js index.js

bash
Copiar código

## Configuração

### Instalação

Clone o repositório e instale as dependências:

git clone https://github.com/davidmelo84/projeto-react.git
cd projeto-react
npm install

Scripts

npm start: Inicia a aplicação em modo de desenvolvimento. Acesse http://localhost:3000 para visualizar no navegador.
npm test: Executa os testes em modo interativo.
npm run build: Cria uma versão otimizada da aplicação para produção.
npm run lint: Verifica o código em busca de problemas de linting.
npm run lint:fix: Corrige problemas de linting automaticamente.
npm run format: Formata o código usando Prettier.
npm run api: Inicia o JSON Server para a API local.

Hooks Utilizados

useState: Gerencia o estado local dentro dos componentes, como o estado de campos de formulário e estados de carregamento.

useEffect: Executa efeitos colaterais, como chamadas para a API e atualizações de estado com base em mudanças de dependências.


useForm: Gerencia o estado e a validação do formulário na página de login.

Contribuição

Sinta-se à vontade para contribuir com o projeto! Para sugestões, correções ou melhorias, por favor, abra um pull request ou uma issue.

Licença

Este projeto está licenciado sob a MIT License.








