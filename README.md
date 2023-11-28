# Django site de artigos com backend e frontend separados

#Link para o site(frontend): https://kaleidoscopic-quokka-1f2548.netlify.app/
#Link para o site(backend): https://fontzada.pythonanywhere.com/

#Admin: 
login: joao
senha: 3124

## Autor:
Nome: João Roizen Fontana

## Sobre:

Obs: Procurei aproveitar o escopo da disciplina para aprender uma tecnologia nova, que eu não conhecia, o React. Estava fazendo um projeto mais robusto porém estava tendo alguns problemas então, também por estar fazendo sozinho, procurei simplificar o projeto mas ainda atendendo ao que foi pedido.

O projeto está estruturado de forma a permitir operações básicas CRUD de um blog de artigos, com um frontend React interagindo com um backend Django. Funciona as operações CRUD, é possível criar, ver, editar e deletar artigos, também é possível se cadastrar, fazer login e logout. Foi implementado Token de autentificação, ao se cadastrar, onde para cada usuário é gerado um token único e com ele é feita a autentificação do usuário, porém não foi associado esse token com o modelo do artigo, então todos usuários logados podem inserir e editar/excluir todos os artigos. Também não foi implementado a documentação Swagger. Fora isso, acredito que o projeto atenda os requisitos do enunciado, onde foi feito o backend apenas em Django e ele possui as operações CRUD funcionais, com o endpoint protegido (apenas usuários logados conseguem ver os artigos), o frontend foi feito separado com typescript, nele é possível realizer as operações CRUD, validadas no backend, possui Login/Logout e Cadastro, porém como foi dito anteriormente todos usuários registrados tem acesso aos artigos.

## Manual do usuário:
Ao acessar o site, o usuário é direcionado a página de login, onde ele pode acessar sua conta, se tiver, com username e senha ou caso ele não tenha, tem o botão "Cadastre-se" que o leva para a página de cadastro, onde ele cria seu username e senha. 

Após criar sua conta, ele deve clicar em login, onde ele vai para a página de login, e realizá-lo. Ao acessar sua conta, o usuário vai ser redirecionado a página com uma lista dos artigos, onde ele possui as opções de criar um novo artigo, clicando em "Insert Article", que vai liberar um formulário no canto inferior da tela, onde ele pode dar o título e a descrição do artigo.

O usuário também pode modificar um artigo, clicando em "Update", que vai gerar o formulário com os campos de título e descrição para ele atualizar, o usuário também pode deletar os artigos, utilizando o botão "Delete" e ele
também pode sair utilizando "Logout" no canto superior direito da tela, sendo levado a tela de login.

## Introdução

O projeto consiste em desenvolver um sistema de blog de artigos com funcionalidades como login, logout, cadastramento, postagem de artigos, edição e exclusão de posts, visualização de um feed de artigos. O backend é construído com Django e o frontend com ReactTS.

## Backend - Django

O backend utiliza o framework Django e possui dois modelos principais: Article e User. O modelo Article representa os artigos com campos como título e descrição. O acesso às operações do modelo é gerenciado por views baseadas em classes utilizando o Django REST Framework.

O projeto implementa autenticação via Token e requer que o usuário esteja autenticado para realizar operações no modelo Article. As operações CRUD (Create, Read, Update, Delete) são tratadas por um conjunto de views e serializers.

O código atual utiliza viewsets para gerenciar operações no modelo Article, enquanto views baseadas em classes foram comentadas. Também foram comentadas rotas que utilizam essas views.

## Frontend - ReactTS

O frontend foi desenvolvido em React com TypeScript e utiliza bibliotecas como Bootstrap para a interface. A aplicação React tem três principais componentes: App, ArticleList, e Form.

App: O componente principal renderiza a lista de artigos, um formulário para edição/inserção de artigos, e botões para inserir um novo artigo, fazer logout e interagir com a API.

ArticleList: Renderiza a lista de artigos, permitindo a edição e exclusão de cada artigo. As operações na lista são sincronizadas com a API.

Form: Um formulário para edição/inserção de artigos. O formulário é condicionalmente renderizado com base na presença de um artigo para edição.

## API Service (APIService) - Comunicação com o Backend

A classe APIService oferece métodos para interagir com a API backend. Esses métodos incluem a atualização, inserção e exclusão de artigos, além do login e cadastro de usuários. A classe facilita a comunicação entre o frontend React e o backend Django.

## Imagens do site:

![site1](https://github.com/JoaoRoizenFontana/Django-T2/assets/38985296/437a1dc1-017d-44b8-976d-f1cbe5a7c1dc)

![site2](https://github.com/JoaoRoizenFontana/Django-T2/assets/38985296/5b9698c2-798d-4921-a5d7-9d69738f079c)

![site3](https://github.com/JoaoRoizenFontana/Django-T2/assets/38985296/4437c8b4-e11c-4d49-bdb8-aee67f5eded9)
