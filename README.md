# Gale-Shapley Algorithm Visualizer

Uma ferramenta interativa e moderna para visualizar e compreender o algoritmo de **Gale-Shapley** (também conhecido como algoritmo de Casamento Estável), que rendeu o Prêmio Nobel de Economia a Lloyd Shapley em 2012.

## 🚀 Novas Funcionalidades

Além da visualização passo a passo do algoritmo clássico, esta versão inclui:

- **Encontrar Todos os Emparelhamentos Estáveis**: Uma nova funcionalidade que permite calcular e visualizar todos os possíveis emparelhamentos estáveis para um dado conjunto de preferências, não apenas o emparelhamento ótimo para os proponentes.
- **Interface Bilíngue**: Suporte completo para Português e Inglês.
- **Importação/Exportação**: Carregue preferências de arquivos `.txt` e exporte os resultados detalhados da execução.
- **Visualização de Grafo**: Representação visual clara das conexões entre proponentes e aceitadores.

## 📂 Estrutura do Projeto

O projeto é uma aplicação web moderna construída com a seguinte estrutura:

```text
Gale-Shapley-Visualizer/
├── client/                 # Código fonte do frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Componentes UI reutilizáveis (Shadcn/ui)
│   │   ├── contexts/       # Contextos do React (Tema, etc.)
│   │   ├── hooks/          # Hooks customizados
│   │   ├── lib/            # Utilitários e funções auxiliares
│   │   ├── pages/          # Páginas principais (Home.tsx contém a lógica)
│   │   ├── App.tsx         # Componente raiz e roteamento
│   │   └── main.tsx        # Ponto de entrada do React
│   └── index.html          # Template HTML principal
├── dist/                   # Arquivos compilados para produção
├── components.json         # Configuração do Shadcn/ui
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- **React 18**: Biblioteca para construção de interfaces.
- **TypeScript**: Tipagem estática para maior segurança e robustez.
- **Vite**: Ferramenta de build ultrarrápida.
- **Tailwind CSS**: Framework de estilização utilitária.
- **Shadcn/ui**: Componentes de interface acessíveis e elegantes.
- **Lucide React**: Conjunto de ícones modernos.

## 💻 Como Rodar Localmente

### Pré-requisitos
- Node.js 18 ou superior
- pnpm (recomendado) ou npm/yarn

### Passo a Passo
1. Clone o repositório:
   ```bash
   git clone https://github.com/jluckmay/Gale-Shapley-Visualizer.git
   ```
2. Acesse o diretório:
   ```bash
   cd Gale-Shapley-Visualizer
   ```
3. Instale as dependências:
   ```bash
   pnpm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
