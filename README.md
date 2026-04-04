# Gale-Shapley-Visualizer / Gale-Shapley Algorithm Visualizer

Uma ferramenta interativa e moderna para visualizar e compreender o algoritmo de **Gale-Shapley** (também conhecido como algoritmo de Casamento Estável), que rendeu o Prêmio Nobel de Economia a Lloyd Shapley em 2012.

## Visão Geral (Overview)

O **Gale-Shapley-Visualizer** é uma aplicação web interativa projetada para demonstrar e visualizar o funcionamento do algoritmo de Gale-Shapley, também conhecido como algoritmo de Casamento Estável. Este algoritmo clássico da ciência da computação e economia resolve o problema de encontrar um emparelhamento estável entre dois conjuntos de agentes (por exemplo, homens e mulheres, estudantes e universidades, médicos e hospitais) com base em suas listas de preferências ranqueadas.

A aplicação permite que os usuários insiram suas próprias matrizes de preferências para proponentes e aceitadores, executem o algoritmo passo a passo e visualizem o resultado final, incluindo os pares estáveis formados e o histórico detalhado de todas as propostas, aceitações e rejeições. Além disso, oferece suporte a múltiplos idiomas (Português e Inglês) e é otimizada para implantação no GitHub Pages.

The **Gale-Shapley-Visualizer** is an interactive web application designed to demonstrate and visualize the functioning of the Gale-Shapley algorithm, also known as the Stable Marriage algorithm. This classic algorithm in computer science and economics solves the problem of finding a stable matching between two sets of agents (e.g., men and women, students and universities, doctors and hospitals) based on their ranked preference lists.

The application allows users to input their own preference matrices for proposers and acceptors, execute the algorithm step-by-step, and visualize the final result, including the stable pairs formed and the detailed history of all proposals, acceptances, and rejections. Additionally, it supports multiple languages (Portuguese and English) and is optimized for deployment on GitHub Pages.

## 🚀 Funcionalidades e Novas Funcionalidades (Features)

* **Visualização Interativa (Interactive Visualization)**: Acompanhe cada passo do algoritmo de Gale-Shapley, desde as propostas iniciais até o emparelhamento estável final. (Follow each step of the Gale-Shapley algorithm, from initial proposals to the final stable matching.)
* **Entrada Flexível (Flexible Input)**: Insira preferências manualmente ou carregue-as a partir de um arquivo de texto (`.txt`). (Enter preferences manually or load them from a text file (`.txt`).)
* **Internacionalização (i18n) (Internationalization)**: Alterne entre os idiomas Português e Inglês para toda a interface e descrições do algoritmo. (Switch between Portuguese and English for the entire interface and algorithm descriptions.)
* **Exportação de Resultados (Export Results)**: Baixe os resultados detalhados da execução do algoritmo em um arquivo de texto. (Download detailed results of the algorithm execution to a text file.)
* **Tema Claro/Escuro (Light/Dark Theme)**: Escolha entre os temas claro e escuro para uma experiência de usuário personalizada. (Choose between light and dark themes for a personalized user experience.)
* **Compatibilidade com GitHub Pages (GitHub Pages Compatibility)**: Configurado para fácil implantação e hospedagem gratuita via GitHub Pages. (Configured for easy deployment and free hosting via GitHub Pages.)
* **Comentários Detalhados (Detailed Comments)**: O código-fonte inclui comentários extensivos para facilitar a compreensão da lógica do algoritmo e da implementação da aplicação. (The source code includes extensive comments to facilitate understanding of the algorithm's logic and the application's implementation.)

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

## 🛠️ Tecnologias Utilizadas (Technologies Used)

* **Frontend**: React, TypeScript, Vite
* **Estilização (Styling)**: Tailwind CSS, Shadcn/ui
* **Roteamento (Routing)**: Wouter
* **Ícones (Icons)**: Lucide React
* **Lógica do Algoritmo (Algorithm Logic)**: Implementação em TypeScript (para o visualizador) e C++ (versão CLI). (Implemented in TypeScript (for the visualizer) and C++ (CLI version).)

- **React 18**: Biblioteca para construção de interfaces.
- **TypeScript**: Tipagem estática para maior segurança e robustez.
- **Vite**: Ferramenta de build ultrarrápida.
- **Tailwind CSS**: Framework de estilização utilitária.
- **Shadcn/ui**: Componentes de interface acessíveis e elegantes.
- **Lucide React**: Conjunto de ícones modernos.

## 💻 Como Rodar Localmente (How to Run Locally)

### Pré-requisitos
- Node.js 18 ou superior
- pnpm (recomendado) ou npm/yarn

Para configurar e executar o projeto em sua máquina local, siga os passos abaixo:

To set up and run the project on your local machine, follow these steps:

1.  **Clone o repositório (Clone the repository)**:
    ```bash
    git clone [https://github.com/jluckmay/Gale-Shapley-Visualizer.git](https://github.com/jluckmay/Gale-Shapley-Visualizer.git)
    cd Gale-Shapley-Visualizer
    ```

2.  **Instale as dependências (Install dependencies)**:
    ```bash
    pnpm install
    ```
    Se você receber o erro `pnpm : O termo 'pnpm' não é reconhecido...`, instale o pnpm ou use npm:
    If you see the error `pnpm : the term 'pnpm' is not known...`, install pnpm or use npm:

    * **Instalando pnpm | Installing pnpm**
    - npm:
      ```bash
      npm install -g pnpm
      pnpm install
      ```

    - corepack (Node 16+):
      ```bash
      corepack enable
      corepack pnpm install
      ```

    * **Usando npm | Using npm**
      ```bash
      npm install
      ```

2.  **Instale as dependências (Install dependencies)**:
    ```bash
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento (Start the development server)**:
    ```bash
    pnpm run dev
    ```

    Se não tiver pnpm instalado, use:
    If pnpm is not installed, run:
    ```bash
    npm run dev
    ```

    A aplicação estará disponível em [`http://localhost:5173`](http://localhost:5173) (ou outra porta disponível).
    The application will be available at [`http://localhost:5173`](http://localhost:5173) (or another available port).

## GitHub Pages (How to Deploy on GitHub Pages)

Este projeto está configurado para executar facilmente no GitHub Pages.
A página do projeto está acessível em [`https://jluckmay.github.io/Gale-Shapley-Visualizer/`](https://jluckmay.github.io/Gale-Shapley-Visualizer/).

This project is configured for run easy on GitHub Pages. 
The project webpage is accessible at [`https://jluckmay.github.io/Gale-Shapley-Visualizer/`](https://jluckmay.github.io/Gale-Shapley-Visualizer/).

## 📄 Licença (License)

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

This project is licensed under the MIT License. See the `LICENSE` file for more details.

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contribuições (Contributions)

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Contributions are welcome! Feel free to open issues or submit pull requests.

## Autor (Author)

João Lucas Mayrinck
