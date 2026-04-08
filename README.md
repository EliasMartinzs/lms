# EducaFlow — Sistema de Gestão de Aprendizagem

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.8-2D3748?style=flat-square&logo=prisma)
![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?style=flat-square&logo=stripe)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

</div>

---

## Sobre o Projeto

O **EducaFlow** é uma plataforma completa de cursos online que permite a qualquer pessoa criar, publicar e vender cursos digitais. O projeto foi desenvolvido do zero com foco em performance, segurança e uma experiência de usuário moderna e fluida.

Na plataforma, **administradores** podem criar cursos organizados em capítulos e aulas, com suporte a editor de texto rico, upload de vídeos e thumbnails. Já os **alunos** têm acesso a um catálogo público, podem comprar cursos via Stripe, assistir às aulas e acompanhar seu progresso individual.

O diferencial deste projeto está na arquitetura robusta: autenticação via OAuth, processamento de pagamentos real, armazenamento de arquivos seguro com S3, proteção contra bots e rate limiting, tudo integrado de forma limpa e escalável.

---

## Funcionalidades Principais

- **Catálogo público de cursos** com busca e filtro por categoria
- **Dashboard do aluno** com cursos comprados e progresso por aula
- **Player de aulas** com suporte a vídeo e descrição em texto rico
- **Painel administrativo** completo para gerenciar cursos, capítulos e aulas
- **Upload de arquivos** (thumbnails e vídeos) com presigned URLs seguras
- **Pagamentos via Stripe** com webhook para confirmação automática
- **Tracking de progresso** — cada aula pode ser marcada como concluída
- **Autenticação com GitHub OAuth** via Better Auth
- **Proteção contra bots e rate limiting** com ArcJet
- **Editor de texto rico** com TipTap para descrições de cursos
- **Tema claro/escuro** e design responsivo

---

## Por Que Essas Tecnologias?

### Next.js 16 + React 19
Escolhi o Next.js pelo ecossistema completo de rotas, server actions e rendering flexível. O React 19 traz melhorias de performance com Server Components, tornando páginas estáticas realmente zero-JS no cliente.

### TypeScript
Tipagem estática em um projeto com muitas integrações externas (Stripe, S3, Prisma) reduz drasticamente erros em produção. O schema do Prisma gera tipos automaticamente, e o Zod valida inputs em runtime.

### Prisma + PostgreSQL
Prisma oferece um DX excelente com migrations, typesafe queries e um schema legível. PostgreSQL foi escolhido pela confiabilidade em dados relacionais e suporte a JSON para campos flexíveis.

### Better Auth
Alternativa leve ao NextAuth com suporte a OAuth, sessões e adapters. A escolha foi por simplicidade e performance — sem a complexidade do NextAuth v5 para um projeto deste porte.

### Stripe
Padrão da indústria para pagamentos online. Checkout redirecionável, webhooks confiáveis e SDK completo em TypeScript facilitam implementações robustas de pagamento.

### AWS S3 + Presigned URLs
Upload direto do browser para o S3 via presigned URLs — o servidor só gera a URL, não trafega o arquivo. Isso elimina bottlenecks e reduz custos de banda.

### ArcJet
Camada de proteção contra bots e abuso de APIs. Rate limiting por IP, verificação de user-agent e integrações com provedores de risco são configuráveis por rota.

### TipTap
Editor de texto rico headless que se integra bem com React. Armazena o conteúdo como JSON, permitindo renderização server-side sem problemas de XSS.

### Tailwind CSS v4 + shadcn/ui
Tailwind v4 com compilação nativa no Next.js elimina a etapa de PostCSS. shadcn/ui fornece componentes acessíveis baseados em Radix UI com design coeso — os componentes vivem no projeto, não como npm package.

---

## Stack Completa

| Categoria | Tecnologia |
|-----------|------------|
| Framework | Next.js 16.1 (App Router) |
| Linguagem | TypeScript 5 |
| UI | React 19, shadcn/ui, Tailwind CSS 4 |
| Banco de dados | PostgreSQL + Prisma 6 |
| ORM/Auth | Better Auth 1.5 |
| Validação | Zod 4 |
| Formulários | React Hook Form |
| Pagamentos | Stripe 21 |
| Armazenamento | AWS S3 (Tigris) |
| Segurança | ArcJet 1.3 |
| Editor de texto | TipTap 3 |
| Animações | Framer Motion, Recharts |
| Estados | React Context + Server Actions |

---

## Como Rodar

### Pré-requisitos

- Node.js 20+
- PostgreSQL (local ou via Docker)
- Conta no Stripe (test mode)
- Bucket S3 ou compatível (Tigris, R2)
- Conta GitHub OAuth app

### Setup

```bash
# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
cp .env.example .env

# Gerar cliente Prisma
pnpm prisma generate

# Aplicar migrations
pnpm prisma migrate dev

# Rodar em development
pnpm dev
```

O app estará disponível em `http://localhost:3000`.

### Variáveis de Ambiente

Consulte o arquivo `.env` para todas as variáveis necessárias, incluindo `DATABASE_URL`, `STRIPE_SECRET_KEY`, `AWS_*`, `GITHUB_CLIENT_*` e `ARCJET_*`.

---

## Estrutura do Projeto

```
app/
├── (auth)/           # Páginas de autenticação
├── (public)/         # Landing, catálogo, detalhes do curso
├── admin/            # Painel administrativo
├── dashboard/        # Área do aluno (cursos comprados)
├── payment/          # Páginas de sucesso/cancelamento
└── api/              # Rotas de API (auth, stripe, s3)

lib/
├── auth.ts           # Configuração do Better Auth
├── db.ts             # Cliente Prisma
├── stripe.ts         # Cliente Stripe
├── S3Client.ts       # Cliente S3
├── arcjet.ts         # Configuração ArcJet
└── zodSchemas.ts     # Schemas de validação

prisma/
├── schema.prisma     # Schema do banco
└── migrations/       # Migrations do Prisma
```

---

> Desenvolvido como projeto full-stack para portfólio, demonstrando arquitetura moderna com Next.js, integrações reais de pagamentos e storage, autenticação segura e uma DX consistente do back ao front.
