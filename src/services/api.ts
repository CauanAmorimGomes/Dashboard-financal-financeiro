import { Transaction, User } from '../types';

// Mock user data
const MOCK_USER: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao@example.com',
};

// Mock transactions data
const MOCK_TRANSACTIONS: Transaction[] = [
  // January
  { id: '1', description: 'Salário', amount: 5000, type: 'income', category: 'Salário', date: '2024-01-05' },
  { id: '2', description: 'Aluguel', amount: 1200, type: 'expense', category: 'Moradia', date: '2024-01-10' },
  { id: '3', description: 'Supermercado', amount: 450, type: 'expense', category: 'Alimentação', date: '2024-01-12' },
  { id: '4', description: 'Freelance', amount: 800, type: 'income', category: 'Outros', date: '2024-01-15' },
  { id: '5', description: 'Conta de Luz', amount: 150, type: 'expense', category: 'Contas', date: '2024-01-18' },
  { id: '6', description: 'Internet', amount: 100, type: 'expense', category: 'Contas', date: '2024-01-18' },
  { id: '7', description: 'Restaurante', amount: 280, type: 'expense', category: 'Alimentação', date: '2024-01-20' },
  
  // February
  { id: '8', description: 'Salário', amount: 5000, type: 'income', category: 'Salário', date: '2024-02-05' },
  { id: '9', description: 'Aluguel', amount: 1200, type: 'expense', category: 'Moradia', date: '2024-02-10' },
  { id: '10', description: 'Supermercado', amount: 520, type: 'expense', category: 'Alimentação', date: '2024-02-11' },
  { id: '11', description: 'Gasolina', amount: 300, type: 'expense', category: 'Transporte', date: '2024-02-14' },
  { id: '12', description: 'Academia', amount: 150, type: 'expense', category: 'Saúde', date: '2024-02-15' },
  { id: '13', description: 'Conta de Luz', amount: 145, type: 'expense', category: 'Contas', date: '2024-02-18' },
  { id: '14', description: 'Cinema', amount: 80, type: 'expense', category: 'Lazer', date: '2024-02-22' },
  
  // March
  { id: '15', description: 'Salário', amount: 5000, type: 'income', category: 'Salário', date: '2024-03-05' },
  { id: '16', description: 'Bônus', amount: 1500, type: 'income', category: 'Outros', date: '2024-03-05' },
  { id: '17', description: 'Aluguel', amount: 1200, type: 'expense', category: 'Moradia', date: '2024-03-10' },
  { id: '18', description: 'Supermercado', amount: 480, type: 'expense', category: 'Alimentação', date: '2024-03-13' },
  { id: '19', description: 'Farmácia', amount: 120, type: 'expense', category: 'Saúde', date: '2024-03-16' },
  { id: '20', description: 'Conta de Luz', amount: 160, type: 'expense', category: 'Contas', date: '2024-03-18' },
  { id: '21', description: 'Internet', amount: 100, type: 'expense', category: 'Contas', date: '2024-03-18' },
  { id: '22', description: 'Gasolina', amount: 320, type: 'expense', category: 'Transporte', date: '2024-03-20' },
  { id: '23', description: 'Streaming', amount: 50, type: 'expense', category: 'Lazer', date: '2024-03-25' },
  { id: '24', description: 'Restaurante', amount: 200, type: 'expense', category: 'Alimentação', date: '2024-03-28' },
];

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  login: async (email: string, _password: string): Promise<User | null> => {
    await delay(800);
    // Simple mock authentication - accept any password for demo@example.com or joao@example.com
    if (email === 'demo@example.com' || email === 'joao@example.com') {
      return MOCK_USER;
    }
    return null;
  },

  getTransactions: async (): Promise<Transaction[]> => {
    await delay(500);
    return MOCK_TRANSACTIONS;
  },

  addTransaction: async (transaction: Omit<Transaction, 'id'>): Promise<Transaction> => {
    await delay(300);
    const newTransaction: Transaction = {
      ...transaction,
      id: Math.random().toString(36).substr(2, 9),
    };
    MOCK_TRANSACTIONS.push(newTransaction);
    return newTransaction;
  },
};

export const getCategories = (): string[] => {
  return ['Todos', 'Salário', 'Moradia', 'Alimentação', 'Transporte', 'Saúde', 'Contas', 'Lazer', 'Outros'];
};
