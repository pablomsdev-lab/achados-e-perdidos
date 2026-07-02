# Achados e Perdidos - IFRS Campus Restinga

Sistema web desenvolvido em React e Vite para auxiliar no gerenciamento de itens encontrados no IFRS Campus Restinga.

O objetivo do projeto é facilitar o cadastro, a organização e a devolução de objetos perdidos, oferecendo uma interface simples para consulta e administração dos registros.

---

## Sobre o projeto

O sistema permite o registro de objetos encontrados dentro da instituição, armazenando informações como descrição, categoria, local onde o item foi encontrado e uma imagem de referência. Também possibilita a pesquisa dos objetos cadastrados, a aprovação dos registros e o controle da devolução aos proprietários.

Nesta versão, os dados são armazenados localmente utilizando o LocalStorage do navegador.

---

## Funcionalidades

* Login de usuário;
* Cadastro de objetos encontrados;
* Registro de descrição, categoria, local e imagem do objeto;
* Pesquisa de itens cadastrados;
* Filtro por categoria;
* Aprovação de novos registros;
* Controle da devolução dos objetos;
* Arquivamento de itens devolvidos;
* Persistência dos dados utilizando LocalStorage.

---

## Tecnologias utilizadas

* React 19
* Vite
* JavaScript (ESModules)
* CSS
* LocalStorage

---

## Estrutura do projeto

```text
src/
│
├── assets/
├── componentes/
│   └── Navbar.jsx
├── styles/
├── App.jsx
├── Login.jsx
├── main.jsx
└── *.css
```

---

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/achados-perdidos.git
```

Acesse a pasta do projeto:

```bash
cd achados-perdidos
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

O projeto será iniciado em:

```text
http://localhost:5173
```

---

## Scripts disponíveis

```bash
npm run dev      # Executa o projeto em modo de desenvolvimento

npm run build    # Gera a versão para produção

npm run preview  # Visualiza a versão de produção

npm run lint     # Executa a análise de código
```

---

## Armazenamento

O sistema utiliza o LocalStorage do navegador para armazenar:

* usuários logados;
* objetos cadastrados;
* status de aprovação;
* histórico de devoluções.

Não há integração com banco de dados nesta versão do projeto.

---

## Melhorias futuras

* Integração com banco de dados;
* API para gerenciamento dos registros;
* Upload de imagens;
* Sistema de autenticação;
* Controle de permissões por tipo de usuário;
* Notificações para novos itens cadastrados;
* Histórico completo das movimentações;
* Melhorias na responsividade da interface.

---

## Desenvolvido por

Projeto desenvolvido como atividade acadêmica do IFRS Campus Restinga utilizando React e Vite.
