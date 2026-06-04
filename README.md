# Dashboard Financeiro 💰

Um dashboard financeiro completo desenvolvido com React, TypeScript e Chart.js para gerenciamento de receitas e despesas.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Chart.js + React-chartjs-2** - Biblioteca de gráficos interativos
- **Date-fns** - Biblioteca para manipulação de datas
- **Vite** - Build tool moderna e rápida

## ✨ Funcionalidades

### 🔐 Autenticação
- Sistema de login com validação
- Credenciais de demonstração para testes
- Sessão de usuário gerenciada via Context API

### 📊 Dashboard
- **Cards de Resumo**: Visualização rápida de receitas, despesas e saldo
- **Gráficos Interativos**:
  - Gráfico de barras: Receitas vs Despesas por mês
  - Gráfico de linha: Evolução do saldo ao longo do tempo
  - Gráfico de rosca: Distribuição de despesas por categoria

### 💸 Gestão de Transações
- Listagem completa de transações
- Adicionar novas receitas e despesas
- Categorização automática
- Ícones visuais para cada categoria

### 🔍 Filtros Avançados
- Filtrar por tipo (receitas/despesas/todos)
- Filtrar por categoria
- Filtrar por período (data inicial e final)
- Botão para limpar todos os filtros

## 🎯 Como Usar

### Login
Use as credenciais de demonstração:
- **Email**: demo@example.com ou joao@example.com
- **Senha**: qualquer senha

### Navegação
1. Após o login, você verá o dashboard principal com seus dados financeiros
2. Use os cards superiores para ver o resumo geral
3. Explore os gráficos para análises visuais
4. Aplique filtros para visualizar dados específicos
5. Clique em "Nova Transação" para adicionar receitas ou despesas

### Adicionar Transação
1. Clique no botão "Nova Transação"
2. Selecione o tipo (Receita ou Despesa)
3. Preencha a descrição, valor, categoria e data
4. Clique em "Adicionar"

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Login.tsx       # Tela de login
│   ├── Dashboard.tsx   # Dashboard principal
│   ├── Header.tsx      # Cabeçalho da aplicação
│   ├── StatsCards.tsx  # Cards de estatísticas
│   ├── Charts.tsx      # Componentes de gráficos
│   ├── Filters.tsx     # Filtros de transações
│   ├── TransactionsList.tsx     # Lista de transações
│   └── AddTransactionModal.tsx  # Modal de adicionar transação
├── contexts/           # Contextos React
│   └── AuthContext.tsx # Contexto de autenticação
├── services/          # Serviços e API
│   └── api.ts        # API mock com dados de exemplo
├── types/            # Tipos TypeScript
│   └── index.ts      # Interfaces e tipos
└── App.tsx           # Componente principal

```

## 🎨 Categorias Disponíveis

- 💰 Salário
- 🏠 Moradia
- 🍔 Alimentação
- 🚗 Transporte
- ⚕️ Saúde
- 📄 Contas
- 🎮 Lazer
- 📦 Outros

## 📱 Responsividade

O dashboard é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop: Layout completo com todos os gráficos
- Tablet: Grade adaptativa
- Mobile: Layout em coluna única

## 🔒 Segurança

Este é um projeto de demonstração com autenticação mock. Em produção, você deve:
- Implementar autenticação real com backend
- Usar tokens JWT ou similar
- Criptografar senhas
- Implementar HTTPS

## 🚀 Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📝 Notas

- Os dados são mockados e armazenados apenas em memória
- Ao recarregar a página, você precisará fazer login novamente
- As transações adicionadas são perdidas ao recarregar
- Para persistência real, integre com um backend

---

Desenvolvido com ❤️ usando React e TypeScript
