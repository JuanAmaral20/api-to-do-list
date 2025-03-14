# API To-Do List

Este é um projeto simples de API para uma To-Do List, construído com Node.js e Prisma ORM.

## Requisitos

- Node.js instalado
- npm ou yarn
- Banco de dados configurado (verifique o arquivo Prisma)

## Configuração

Clone este repositório e entre no diretório:

```bash
git clone <url_do_repositorio>
cd api-to-do-list
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto para configurar a conexão com o banco de dados MongoDB:

```
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority&appName=<nome_do_cluster>"
```

Exemplo:

```
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/to-do-list?retryWrites=true&w=majority&appName=ClusterExemplo"
```

Gere o cliente Prisma e realize as migrações do banco de dados:

```bash
npx prisma generate
npx prisma migrate dev
```

## Executando a aplicação

Para iniciar a API, rode o seguinte comando:

```bash
node server.js
```

A aplicação estará rodando localmente. Verifique a porta configurada no arquivo `server.js` para acessar a API.

## Estrutura do Projeto

- `server.js`: Arquivo de inicialização do servidor Node.js.
- `prisma/schema.prisma`: Schema do Prisma ORM para banco de dados.
- `middleware/`: Middleware de autenticação.
- `lib/`: Configuração e cliente Prisma.
- `middleware`: Middlewares utilizados na aplicação.
- Demais diretórios incluem configurações adicionais e middlewares para autenticação e validações.

## Tecnologias

- Node.js
- Express.js
- Prisma ORM
- MongoDB

## Comandos Úteis

- Gerar cliente Prisma:
```bash
npx prisma generate
```

- Criar migração Prisma:
```bash
npx prisma migrate dev
```



