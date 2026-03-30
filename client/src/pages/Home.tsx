import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Zap, Network, BookOpen, ArrowRight, CheckCircle2,
  Moon, Sun, Github, Download, Code2, Globe, FileText,
  Heart, ChevronDown, Play, Users, Award, Lightbulb,
  Upload, RotateCcw, Languages, AlertCircle, X, Copy, Check, Shuffle, HelpCircle, Info, Terminal
} from "lucide-react";

// ===== CONSTANTES DE IMAGENS =====
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843686/CpvxRcZiK3n6FFwJGXDhcv/hero-graph-GQ9RtGyX6mXGZDuESxdaco.webp";
const STEPS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843686/CpvxRcZiK3n6FFwJGXDhcv/algorithm-steps-4ozqmd5ocaxfivW3wvxxKG.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843686/CpvxRcZiK3n6FFwJGXDhcv/about-section-UU9uFDypQTx46hijhG8Bno.webp";

// ===== SISTEMA DE INTERNACIONALIZAÇÃO =====
type Lang = 'pt' | 'en';

const translations = {
  pt: {
    // Navbar
    navAbout: "Sobre",
    navHowItWorks: "Como Funciona",
    navDemo: "Executar",
    navFeatures: "Features",
    navTech: "Tecnologias",
    // Hero
    heroBadge: "ALGORITHM VISUALIZER",
    heroTitle1: "Gale-Shapley",
    heroTitle2: "Stable Matching",
    heroDesc: "Visualize e compreenda o algoritmo de casamento estável que rendeu um Prêmio Nobel. Explore cada passo, da proposta ao emparelhamento final.",
    heroBtn1: "Executar",
    heroBtn2: "Rodar Localmente",
    heroBtn3: "Saiba Mais",
    heroComplexity: "Complexidade",
    heroPublication: "Publicação",
    heroNobel: "Prêmio Nobel",
    heroScroll: "Scroll",
    // About
    aboutSection: "01 — SOBRE O ALGORITMO",
    aboutTitle: "O Problema do Casamento Estável",
    aboutP1: "O algoritmo Gale-Shapley é um algoritmo clássico para resolver o problema do casamento estável. Foi desenvolvido por",
    aboutP1Names: "David Gale",
    aboutP1And: "e",
    aboutP1Names2: "Lloyd Shapley",
    aboutP1End: "em 1962 e rendeu a Shapley um Prêmio Nobel de Ciências Econômicas em 2012.",
    aboutP2Start: "Um emparelhamento é",
    aboutP2Bold: "estável e perfeito",
    aboutP2End: "quando todos os agentes estão emparelhados e nenhum par preferiria deixar seu par atual um pelo outro. O algoritmo garante que o resultado é sempre um emparelhamento perfeito (todos os agentes são pareados) e estável (não existem pares bloqueadores). Estas propriedades são cruciais em aplicações do mundo real onde a justiça e a satisfação são importantes.",
    aboutP3: "O algoritmo é usado em programas de residência médica, sistemas de escolha de escolas, programas de troca de rins e muitos outros domínios onde dois grupos precisam ser combinados com base em preferências.",
    // How it works
    howSection: "02 — COMO FUNCIONA",
    howTitle: "Três Etapas para a Estabilidade",
    howDesc: "O algoritmo opera em rodadas iterativas até que todos os agentes estejam emparelhados de forma estável.",
    howStep1Title: "Processo de Proposta",
    howStep1Desc: "Cada proponente faz uma oferta ao aceitador mais preferido em sua lista que ainda não o rejeitou. As propostas seguem a ordem de preferência.",
    howStep2Title: "Avaliação e Troca",
    howStep2Desc: "Os aceitadores avaliam cada proposta recebida. Se preferem o novo proponente ao parceiro atual, realizam a troca. Caso contrário, rejeitam.",
    howStep3Title: "Resultado Estável",
    howStep3Desc: "O algoritmo garante um emparelhamento estável onde nenhum par preferiria estar com outro parceiro. Complexidade O(N²).",
    // Demo
    demoSection: "03 — DEMONSTRAÇÃO",
    demoTitle: "Veja o Algoritmo em Ação",
    demoDesc: "Configure as matrizes de preferência, importe de um arquivo ou edite manualmente, e execute o algoritmo.",
    demoProposers: "Proponentes",
    demoAcceptors: "Aceitadores",
    demoMatrices: "Matrizes de Preferência",
    demoRunBtn: "Executar Algoritmo",
    demoRunning: "Executando...",
    demoResetBtn: "Resetar",
    demoRandomBtn: "Aleatório",
    demoImportBtn: "Importar .txt",
    demoExportBtn: "Exportar Resultados",
    demoGraphTitle: "Visualização do Matching",
    demoGraphPlaceholder: 'Clique em "Executar" para visualizar',
    demoGraphProcessing: "Processando propostas...",
    demoResultTitle: "Emparelhamento Estável e Perfeito Encontrado",
    demoAccepted: "Aceito",
    demoReplaced: "Substituído",
    demoRejected: "Rejeitado",
    demoSizeLabel: "Tamanho (N)",
    demoEditHint: "Edite os valores diretamente nas células. Cada linha é a lista de preferência de um agente (0 a N-1).",
    demoImportError: "Erro ao importar arquivo. Verifique o formato.",
    demoImportSuccess: "Arquivo importado com sucesso!",
    demoCopied: "Copiado!",
    demoFormatTitle: "Formato do arquivo .txt",
    demoFormatDesc: "O arquivo deve conter as preferências dos proponentes, seguidas de uma linha separadora (---), e depois as preferências dos aceitadores. Cada linha contém os índices separados por espaço.",
    demoFormatExample: "0 1 2\n1 0 2\n2 0 1\n---\n0 1 2\n1 2 0\n2 1 0",
    demoFormatLabel: "Exemplo para N=3:",
    // Features
    featSection: "04 — FUNCIONALIDADES",
    featTitle: "Tudo que Você Precisa",
    featDesc: "Uma ferramenta completa para explorar, aprender e ensinar o algoritmo de casamento estável.",
    feat1Title: "Visualização Interativa",
    feat1Desc: "Acompanhe cada passo do algoritmo em tempo real, com animações e detalhamento completo.",
    feat2Title: "Entrada Flexível",
    feat2Desc: "Insira preferências manualmente ou carregue de um arquivo .txt com formato padronizado.",
    feat3Title: "Bilíngue (PT/EN)",
    feat3Desc: "Interface completa em Português e Inglês, com alternância instantânea entre idiomas.",
    feat4Title: "Exportação de Resultados",
    feat4Desc: "Baixe os resultados detalhados em arquivo de texto para análise posterior.",
    feat5Title: "Tema Claro/Escuro",
    feat5Desc: "Escolha entre os temas claro e escuro para uma experiência visual personalizada.",
    feat6Title: "Código Aberto",
    feat6Desc: "Projeto open-source com código comentado, ideal para estudo e contribuições.",
    // Tech
    techSection: "05 — TECNOLOGIAS",
    techTitle: "Stack Tecnológico",
    techDesc: "Construído com ferramentas modernas para performance, acessibilidade e experiência de desenvolvimento.",
    // Install
    installSection: "06 — INSTALAÇÃO",
    installTitle: "Rode Localmente",
    installStep1Label: "Clone o repositório",
    installStep2Label: "Acesse o diretório",
    installStep3Label: "Instale as dependências",
    installStep4Label: "Inicie o servidor",
    installPrereqTitle: "Pré-requisitos",
    installPrereqDesc: "Node.js 18+ e pnpm instalados. Instale o pnpm via",
    // Footer
    footerMadeWith: "Feito com",
    // Tech stack descriptions
    techReact: "Biblioteca para interfaces reativas",
    techTS: "Tipagem estática para segurança",
    techVite: "Build tool ultrarrápido",
    techTailwind: "Estilização utilitária",
    techShadcn: "Componentes acessíveis",
    techWouter: "Roteamento leve",
  },
  en: {
    navAbout: "About",
    navHowItWorks: "How It Works",
    navDemo: "Executar",
    navFeatures: "Features",
    navTech: "Technologies",
    heroBadge: "ALGORITHM VISUALIZER",
    heroTitle1: "Gale-Shapley",
    heroTitle2: "Stable Matching",
    heroDesc: "Visualize and understand the stable matching algorithm that earned a Nobel Prize. Explore each step, from proposal to final pairing.",
    heroBtn1: "Run",
    heroBtn2: "Run Locally",
    heroBtn3: "Learn More",
    heroComplexity: "Complexity",
    heroPublication: "Publication",
    heroNobel: "Nobel Prize",
    heroScroll: "Scroll",
    aboutSection: "01 — ABOUT THE ALGORITHM",
    aboutTitle: "The Stable Marriage Problem",
    aboutP1: "The Gale-Shapley algorithm is a classic algorithm for solving the stable marriage problem. It was developed by",
    aboutP1Names: "David Gale",
    aboutP1And: "and",
    aboutP1Names2: "Lloyd Shapley",
    aboutP1End: "in 1962 and earned Shapley the Nobel Prize in Economic Sciences in 2012.",
    aboutP2Start: "A matching is",
    aboutP2Bold: "stable and perfect",
    aboutP2End: "when all agents are matched and no pair would prefer to leave their current partner for each other. The algorithm guarantees that the result is always a perfect matching (all agents are paired) and stable (no blocking pairs exist). These properties are crucial in real-world applications where fairness and satisfaction matter.",
    aboutP3: "The algorithm is used in medical residency programs, school choice systems, kidney exchange programs, and many other domains where two groups need to be matched based on preferences.",
    howSection: "02 — HOW IT WORKS",
    howTitle: "Three Steps to Stability",
    howDesc: "The algorithm operates in iterative rounds until all agents are stably matched.",
    howStep1Title: "Proposal Process",
    howStep1Desc: "Each proposer makes an offer to the most preferred acceptor on their list who hasn't rejected them yet. Proposals follow preference order.",
    howStep2Title: "Evaluation & Swap",
    howStep2Desc: "Acceptors evaluate each received proposal. If they prefer the new proposer over their current partner, they make the swap. Otherwise, they reject.",
    howStep3Title: "Stable Result",
    howStep3Desc: "The algorithm guarantees a stable matching where no pair would prefer to be with another partner. Complexity O(N²).",
    demoSection: "03 — DEMONSTRATION",
    demoTitle: "See the Algorithm in Action",
    demoDesc: "Configure the preference matrices, import from a file or edit manually, and run the algorithm.",
    demoProposers: "Proposers",
    demoAcceptors: "Acceptors",
    demoMatrices: "Preference Matrices",
    demoRunBtn: "Run Algorithm",
    demoRunning: "Running...",
    demoResetBtn: "Reset",
    demoRandomBtn: "Random",
    demoImportBtn: "Import .txt",
    demoExportBtn: "Export Results",
    demoGraphTitle: "Matching Visualization",
    demoGraphPlaceholder: 'Click "Run" to visualize',
    demoGraphProcessing: "Processing proposals...",
    demoResultTitle: "Stable and Perfect Matching Found",
    demoAccepted: "Accepted",
    demoReplaced: "Replaced",
    demoRejected: "Rejected",
    demoSizeLabel: "Size (N)",
    demoEditHint: "Edit values directly in the cells. Each row is an agent's preference list (0 to N-1).",
    demoImportError: "Error importing file. Please check the format.",
    demoImportSuccess: "File imported successfully!",
    demoCopied: "Copied!",
    demoFormatTitle: "File format (.txt)",
    demoFormatDesc: "The file must contain proposer preferences, followed by a separator line (---), then acceptor preferences. Each line contains space-separated indices.",
    demoFormatExample: "0 1 2\n1 0 2\n2 0 1\n---\n0 1 2\n1 2 0\n2 1 0",
    demoFormatLabel: "Example for N=3:",
    featSection: "04 — FEATURES",
    featTitle: "Everything You Need",
    featDesc: "A complete tool to explore, learn, and teach the stable matching algorithm.",
    feat1Title: "Interactive Visualization",
    feat1Desc: "Follow each step of the algorithm in real time, with animations and full detail.",
    feat2Title: "Flexible Input",
    feat2Desc: "Enter preferences manually or load from a .txt file with standardized format.",
    feat3Title: "Bilingual (PT/EN)",
    feat3Desc: "Full interface in Portuguese and English, with instant language switching.",
    feat4Title: "Export Results",
    feat4Desc: "Download detailed results to a text file for later analysis.",
    feat5Title: "Light/Dark Theme",
    feat5Desc: "Choose between light and dark themes for a personalized visual experience.",
    feat6Title: "Open Source",
    feat6Desc: "Open-source project with commented code, ideal for study and contributions.",
    techSection: "05 — TECHNOLOGIES",
    techTitle: "Tech Stack",
    techDesc: "Built with modern tools for performance, accessibility, and developer experience.",
    installSection: "06 — INSTALLATION",
    installTitle: "Run Locally",
    installStep1Label: "Clone the repository",
    installStep2Label: "Navigate to the directory",
    installStep3Label: "Install dependencies",
    installStep4Label: "Start the server",
    installPrereqTitle: "Prerequisites",
    installPrereqDesc: "Node.js 18+ and pnpm installed. Install pnpm via",
    footerMadeWith: "Made with",
    techReact: "Library for reactive interfaces",
    techTS: "Static typing for safety",
    techVite: "Ultra-fast build tool",
    techTailwind: "Utility-first styling",
    techShadcn: "Accessible components",
    techWouter: "Lightweight routing",
  }
};

// ===== ALGORITMO GALE-SHAPLEY =====
interface MatchingStep {
  stepNumber: number;
  proposer: number;
  acceptor: number;
  action: 'acceptance' | 'replacement' | 'rejection';
  currentPartner?: number;
}

interface MatchingResult {
  pairs: [number, number][];
  steps: MatchingStep[];
}

function galeShapley(proposerPrefs: number[][], acceptorPrefs: number[][]): MatchingResult {
  const n = proposerPrefs.length;
  const steps: MatchingStep[] = [];
  let stepNumber = 0;

  const rankMatrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  for (let a = 0; a < n; a++) {
    for (let rank = 0; rank < n; rank++) {
      rankMatrix[a][acceptorPrefs[a][rank]] = rank;
    }
  }

  const freeProposers: number[] = Array.from({ length: n }, (_, i) => i);
  const nextProposal: number[] = Array(n).fill(0);
  const acceptorPartner: number[] = Array(n).fill(-1);

  while (freeProposers.length > 0) {
    const p = freeProposers[0];
    if (nextProposal[p] >= n) { freeProposers.shift(); continue; }

    const a = proposerPrefs[p][nextProposal[p]];
    nextProposal[p]++;

    if (acceptorPartner[a] === -1) {
      acceptorPartner[a] = p;
      freeProposers.shift();
      stepNumber++;
      steps.push({ stepNumber, proposer: p, acceptor: a, action: 'acceptance' });
    } else {
      const currentP = acceptorPartner[a];
      if (rankMatrix[a][p] < rankMatrix[a][currentP]) {
        acceptorPartner[a] = p;
        freeProposers.shift();
        freeProposers.push(currentP);
        stepNumber++;
        steps.push({ stepNumber, proposer: p, acceptor: a, action: 'replacement', currentPartner: currentP });
      } else {
        stepNumber++;
        steps.push({ stepNumber, proposer: p, acceptor: a, action: 'rejection', currentPartner: currentP });
      }
    }
  }

  const pairs: [number, number][] = [];
  for (let a = 0; a < n; a++) {
    if (acceptorPartner[a] !== -1) pairs.push([acceptorPartner[a], a]);
  }
  pairs.sort((x, y) => x[0] - y[0]);

  return { pairs, steps };
}

// ===== COMPONENTE SVG DO GRAFO =====
function MatchingGraph({ pairs, n, animated, currentStep, steps }: { pairs: [number, number][]; n: number; animated: boolean; currentStep?: number; steps?: MatchingStep[] }) {
  const padding = 40;
  const nodeRadius = 22;
  const width = 360;
  const rowHeight = 64;
  const height = Math.max(200, n * rowHeight + padding * 2);
  const leftX = 60;
  const rightX = width - 60;
  const getRowY = (row: number) => n === 1 ? height / 2 : padding + row * rowHeight;

  // Build a position map: for each row, which P and which A are placed there
  // Each pair (P, A) occupies one row. P is on the left, A is on the right, same Y.
  const pairsSorted = [...pairs].sort((a, b) => a[0] - b[0]);
  const proposerRow: Record<number, number> = {};
  const acceptorRow: Record<number, number> = {};
  pairsSorted.forEach(([p, a], row) => {
    proposerRow[p] = row;
    acceptorRow[a] = row;
  });

  // Get highlighted step for animation
  const highlightedStep = steps && currentStep && currentStep > 0 ? steps[currentStep - 1] : null;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" style={{ maxHeight: '480px' }}>
      {/* Connection lines — horizontal since pairs share the same row */}
      {pairsSorted.map(([p, _a], idx) => {
        const row = proposerRow[p];
        const y = getRowY(row);
        const isHighlighted = highlightedStep && (highlightedStep.proposer === p || highlightedStep.acceptor === _a);
        const lineColor = isHighlighted
          ? highlightedStep.action === 'acceptance'
            ? 'oklch(0.5 0.2 120)' // Green for acceptance
            : highlightedStep.action === 'replacement'
            ? 'oklch(0.6 0.2 45)' // Orange for replacement
            : 'oklch(0.55 0.2 10)' // Red for rejection
          : 'oklch(0.65 0.12 180 / 0.7)';
        return (
          <line
            key={`line-${idx}`}
            x1={leftX + nodeRadius} y1={y}
            x2={rightX - nodeRadius} y2={y}
            className={`${animated ? 'animate-draw-line' : ''}`}
            stroke={lineColor}
            strokeWidth={isHighlighted ? '3.5' : '2.5'}
            strokeLinecap="round"
            style={{
              animationDelay: `${idx * 300}ms`,
              transition: 'stroke 0.3s ease, stroke-width 0.3s ease'
            }}
          />
        );
      })}
      {/* Proposer nodes — positioned by their row in the sorted pairs */}
      {pairsSorted.map(([p], idx) => {
        const y = getRowY(idx);
        const isHighlighted = highlightedStep && highlightedStep.proposer === p;
        const nodeColor = isHighlighted
          ? highlightedStep.action === 'acceptance'
            ? 'oklch(0.5 0.2 120)'
            : highlightedStep.action === 'replacement'
            ? 'oklch(0.6 0.2 45)'
            : 'oklch(0.55 0.2 10)'
          : 'oklch(0.65 0.12 180)';
        return (
          <g key={`p-${p}`}>
            <circle
              cx={leftX}
              cy={y}
              r={isHighlighted ? 26 : nodeRadius}
              fill={`${nodeColor}/15`}
              stroke={nodeColor}
              strokeWidth={isHighlighted ? '3' : '2.5'}
              style={{
                transition: 'r 0.3s ease, stroke-width 0.3s ease, stroke 0.3s ease, fill 0.3s ease'
              }}
            />
            <text
              x={leftX}
              y={y + 5}
              textAnchor="middle"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fill: nodeColor,
                fontWeight: 'bold',
                transition: 'fill 0.3s ease'
              }}
            >
              P{p}
            </text>
          </g>
        );
      })}
      {/* Acceptor nodes — positioned on the same row as their matched proposer */}
      {pairsSorted.map(([_p, a], idx) => {
        const y = getRowY(idx);
        const isHighlighted = highlightedStep && highlightedStep.acceptor === a;
        const nodeColor = isHighlighted
          ? highlightedStep.action === 'acceptance'
            ? 'oklch(0.5 0.2 120)'
            : highlightedStep.action === 'replacement'
            ? 'oklch(0.6 0.2 45)'
            : 'oklch(0.55 0.2 10)'
          : 'oklch(0.65 0.18 25)';
        return (
          <g key={`a-${a}`}>
            <circle
              cx={rightX}
              cy={y}
              r={isHighlighted ? 26 : nodeRadius}
              fill={`${nodeColor}/15`}
              stroke={nodeColor}
              strokeWidth={isHighlighted ? '3' : '2.5'}
              style={{
                transition: 'r 0.3s ease, stroke-width 0.3s ease, stroke 0.3s ease, fill 0.3s ease'
              }}
            />
            <text
              x={rightX}
              y={y + 5}
              textAnchor="middle"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fill: nodeColor,
                fontWeight: 'bold',
                transition: 'fill 0.3s ease'
              }}
            >
              A{a}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ===== COMPONENTE PRINCIPAL =====
export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState<Lang>('pt');
  const t = translations[lang];

  // Demo state
  const [demoResult, setDemoResult] = useState<MatchingResult | null>(null);
  const [demoRunning, setDemoRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [invalidCells, setInvalidCells] = useState<Set<string>>(new Set());
  const [n, setN] = useState(3);
  const [proposerPrefs, setProposerPrefs] = useState<number[][]>([[0, 1, 2], [1, 0, 2], [2, 0, 1]]);
  const [acceptorPrefs, setAcceptorPrefs] = useState<number[][]>([[0, 1, 2], [1, 2, 0], [2, 1, 0]]);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  // Scroll animations
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

  // Show notification
  const showNotification = useCallback((type: 'success' | 'error', msg: string) => {
    setNotification({ type, msg });
    setTimeout(() => setNotification(null), 3000);
  }, []);

  // Generate default preferences for size N
  const generateDefaultPrefs = useCallback((size: number): number[][] => {
    return Array.from({ length: size }, (_, i) => {
      const prefs: number[] = [];
      for (let j = 0; j < size; j++) prefs.push((i + j) % size);
      return prefs;
    });
  }, []);

  // Generate random valid permutation preferences for size N
  const generateRandomPrefs = useCallback(() => {
    const shuffle = (arr: number[]): number[] => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    const base = Array.from({ length: n }, (_, i) => i);
    setProposerPrefs(Array.from({ length: n }, () => shuffle(base)));
    setAcceptorPrefs(Array.from({ length: n }, () => shuffle(base)));
    setDemoResult(null);
    setCurrentStep(0);
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    setDemoRunning(false);
  }, [n]);

  // Handle N change
  const handleNChange = useCallback((newN: number) => {
    if (newN < 2 || newN > 8) return;
    setN(newN);
    setProposerPrefs(generateDefaultPrefs(newN));
    setAcceptorPrefs(generateDefaultPrefs(newN));
    setDemoResult(null);
    setCurrentStep(0);
  }, [generateDefaultPrefs]);

  // Handle cell edit
  const handleCellEdit = useCallback((type: 'proposer' | 'acceptor', row: number, col: number, value: string) => {
    const num = parseInt(value);
    if (isNaN(num) || num < 0 || num >= n) return;
    if (type === 'proposer') {
      setProposerPrefs(prev => {
        const copy = prev.map(r => [...r]);
        copy[row][col] = num;
        return copy;
      });
    } else {
      setAcceptorPrefs(prev => {
        const copy = prev.map(r => [...r]);
        copy[row][col] = num;
        return copy;
      });
    }
  }, [n]);

  // Validate preferences and mark invalid cells
  const validatePrefs = useCallback((prefs: number[][]): boolean => {
    const size = prefs.length;
    const invalid = new Set<string>();
    for (let i = 0; i < prefs.length; i++) {
      const row = prefs[i];
      if (row.length !== size) return false;
      const seen = new Set<number>();
      for (let j = 0; j < row.length; j++) {
        const v = row[j];
        if (v < 0 || v >= size) {
          invalid.add(`${i}-${j}`);
        } else if (seen.has(v)) {
          invalid.add(`${i}-${j}`);
        }
        seen.add(v);
      }
    }
    setInvalidCells(invalid);
    return invalid.size === 0;
  }, []);

  // Import file
  const handleImport = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const text = ev.target?.result as string;
        const lines = text.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);

        // Find separator
        let sepIdx = -1;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i] === '---' || lines[i] === '===' || lines[i] === '') {
            sepIdx = i;
            break;
          }
        }

        let propLines: string[];
        let accLines: string[];

        if (sepIdx !== -1) {
          propLines = lines.slice(0, sepIdx).filter(l => l !== '---' && l !== '===');
          accLines = lines.slice(sepIdx + 1).filter(l => l !== '---' && l !== '===' && l.length > 0);
        } else {
          // Try to split in half
          const half = Math.floor(lines.length / 2);
          propLines = lines.slice(0, half);
          accLines = lines.slice(half);
        }

        const parseLine = (line: string) => line.split(/\s+/).map(Number);
        const newPropPrefs = propLines.map(parseLine);
        const newAccPrefs = accLines.map(parseLine);

        if (newPropPrefs.length !== newAccPrefs.length || newPropPrefs.length < 2) {
          showNotification('error', t.demoImportError);
          return;
        }

        const size = newPropPrefs.length;
        if (!validatePrefs(newPropPrefs) || !validatePrefs(newAccPrefs)) {
          showNotification('error', t.demoImportError);
          return;
        }

        setN(size);
        setProposerPrefs(newPropPrefs);
        setAcceptorPrefs(newAccPrefs);
        setDemoResult(null);
        setCurrentStep(0);
        showNotification('success', t.demoImportSuccess);
      } catch {
        showNotification('error', t.demoImportError);
      }
    };
    reader.readAsText(file);
    // Reset input so same file can be re-imported
    e.target.value = '';
  }, [t, showNotification, validatePrefs]);

  // Export results
  const handleExport = useCallback(() => {
    if (!demoResult) return;
    const isEn = lang === 'en';
    let output = isEn ? "=== Gale-Shapley Algorithm Results ===\n\n" : "=== Resultados do Algoritmo Gale-Shapley ===\n\n";

    output += isEn ? "--- Proposer Preferences ---\n" : "--- Preferências dos Proponentes ---\n";
    proposerPrefs.forEach((row, i) => {
      output += `P${i}: ${row.join(' ')}\n`;
    });

    output += isEn ? "\n--- Acceptor Preferences ---\n" : "\n--- Preferências dos Aceitadores ---\n";
    acceptorPrefs.forEach((row, i) => {
      output += `A${i}: ${row.join(' ')}\n`;
    });

    output += isEn ? "\n--- Execution Steps ---\n" : "\n--- Passos da Execução ---\n";
    demoResult.steps.forEach((step) => {
      const actionLabel = isEn
        ? (step.action === 'acceptance' ? 'Accepted' : step.action === 'replacement' ? 'Replaced' : 'Rejected')
        : (step.action === 'acceptance' ? 'Aceito' : step.action === 'replacement' ? 'Substituído' : 'Rejeitado');
      let line = `${isEn ? 'Step' : 'Passo'} ${step.stepNumber}: P${step.proposer} → A${step.acceptor} [${actionLabel}]`;
      if (step.currentPartner !== undefined) {
        line += ` (${isEn ? 'previous partner' : 'parceiro anterior'}: P${step.currentPartner})`;
      }
      output += line + '\n';
    });

    output += isEn ? "\n--- Final Stable and Perfect Matching ---\n" : "\n--- Emparelhamento Estável e Perfeito Final ---\n";
    demoResult.pairs.forEach(([p, a]) => {
      output += `P${p} ↔ A${a}\n`;
    });

    output += isEn ? "\n--- Input Format (for re-import) ---\n" : "\n--- Formato de Entrada (para reimportação) ---\n";
    proposerPrefs.forEach((row) => {
      output += row.join(' ') + '\n';
    });
    output += '---\n';
    acceptorPrefs.forEach((row) => {
      output += row.join(' ') + '\n';
    });

    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gale-shapley-results.txt';
    link.click();
    URL.revokeObjectURL(url);
  }, [demoResult, proposerPrefs, acceptorPrefs, lang]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const isVisible = (id: string) => visibleSections.has(id);

  // Run demo
  const runDemo = useCallback(() => {
    if (!validatePrefs(proposerPrefs) || !validatePrefs(acceptorPrefs)) {
      showNotification('error', t.demoImportError);
      return;
    }

    if (intervalRef.current) clearInterval(intervalRef.current);

    setDemoRunning(true);
    setCurrentStep(0);
    setInvalidCells(new Set());
    const result = galeShapley(proposerPrefs, acceptorPrefs);
    setDemoResult(result);

    let step = 0;
    intervalRef.current = setInterval(() => {
      step++;
      setCurrentStep(step);
      if (step >= result.steps.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDemoRunning(false);
      }
    }, 800);
  }, [proposerPrefs, acceptorPrefs, validatePrefs, showNotification, t]);

  // Reset demo
  const resetDemo = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setDemoRunning(false);
    setDemoResult(null);
    setCurrentStep(0);
    handleNChange(3);
  }, [handleNChange]);

  const getActionLabel = useCallback((action: string) => {
    switch (action) {
      case 'acceptance': return t.demoAccepted;
      case 'replacement': return t.demoReplaced;
      case 'rejection': return t.demoRejected;
      default: return action;
    }
  }, [t]);

  const getActionColor = (action: string) => {
    switch (action) {
      case 'acceptance': return 'bg-success/10 text-success border-success/25';
      case 'replacement': return 'bg-primary/10 text-primary border-primary/25';
      case 'rejection': return 'bg-destructive/10 text-destructive border-destructive/25';
      default: return '';
    }
  };

  const features = [
    { icon: Network, title: t.feat1Title, desc: t.feat1Desc },
    { icon: FileText, title: t.feat2Title, desc: t.feat2Desc },
    { icon: Globe, title: t.feat3Title, desc: t.feat3Desc },
    { icon: Download, title: t.feat4Title, desc: t.feat4Desc },
    { icon: Moon, title: t.feat5Title, desc: t.feat5Desc },
    { icon: Code2, title: t.feat6Title, desc: t.feat6Desc },
  ];

  const techStack = [
    { name: "React 18", desc: t.techReact },
    { name: "TypeScript", desc: t.techTS },
    { name: "Vite", desc: t.techVite },
    { name: "Tailwind CSS", desc: t.techTailwind },
    { name: "Shadcn/ui", desc: t.techShadcn },
    { name: "Wouter", desc: t.techWouter },
  ];

  const installSteps = [
    { step: "1", label: t.installStep1Label, code: "git clone https://github.com/jluckmay/Gale-Shapley-Visualizer.git" },
    { step: "2", label: t.installStep2Label, code: "cd Gale-Shapley-Visualizer" },
    { step: "3", label: t.installStep3Label, code: "pnpm install" },
    { step: "4", label: t.installStep4Label, code: "pnpm run dev" },
  ];

  // Preference matrix editor component
  const PreferenceEditor = ({ type, prefs, label }: { type: 'proposer' | 'acceptor'; prefs: number[][]; label: string }) => (
    <div>
      <label className="text-sm font-semibold text-foreground mb-2 block">{label}</label>
      <div className="bg-secondary/50 border border-border rounded-lg p-3 overflow-x-auto">
        <table className="w-full">
          <tbody>
            {prefs.map((row, i) => (
              <tr key={i} className="group">
                <td className="pr-3 py-0.5">
                  <span className="text-primary font-mono text-sm font-bold select-none">
                    {type === 'proposer' ? `P${i}:` : `A${i}:`}
                  </span>
                </td>
                {row.map((val, j) => {
                  const cellKey = `${type === 'proposer' ? 'p' : 'a'}-${i}-${j}`;
                  const isInvalid = invalidCells.has(`${i}-${j}`);
                  return (
                    <td key={j} className="px-0.5 py-0.5">
                      <input
                        type="number"
                        min={0}
                        max={n - 1}
                        value={val}
                        onChange={(e) => handleCellEdit(type, i, j, e.target.value)}
                        className={`w-10 h-8 text-center font-mono text-sm bg-card border rounded-md text-foreground focus:ring-1 outline-none transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                          isInvalid
                            ? 'border-destructive/50 bg-destructive/5 focus:border-destructive focus:ring-destructive/30'
                            : 'border-border/50 focus:border-primary focus:ring-primary/30'
                        }`}
                        disabled={demoRunning}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ===== NOTIFICATION ===== */}
      {notification && (
        <div className={`fixed top-20 right-4 z-[60] flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg animate-fade-in-up ${
          notification.type === 'success'
            ? 'bg-success/10 border-success/25 text-success'
            : 'bg-destructive/10 border-destructive/25 text-destructive'
        }`}>
          {notification.type === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <span className="text-sm font-medium">{notification.msg}</span>
          <button onClick={() => setNotification(null)} className="ml-2 opacity-60 hover:opacity-100">
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Hidden file input */}
      <input ref={fileInputRef} type="file" accept=".txt" className="hidden" onChange={handleImport} />

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Network className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
              Gale-Shapley
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.navAbout}</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.navHowItWorks}</a>
            <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.navDemo}</a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.navFeatures}</a>
            <a href="#tech" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.navTech}</a>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleLang} className="rounded-xl" title={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}>
              <Languages className="h-4 w-4 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-xl">
              {theme === 'dark' ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4 text-muted-foreground" />}
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl" asChild>
              <a href="https://github.com/jluckmay/Gale-Shapley-Visualizer" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 text-muted-foreground" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, oklch(0.65 0.12 180) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }} />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <span className="section-number">{t.heroBadge}</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                {t.heroTitle1}{" "}
                <span className="text-gradient-teal">{t.heroTitle2}</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg" style={{ fontFamily: 'var(--font-sans)' }}>
                {t.heroDesc}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="btn-teal h-12 px-7 rounded-xl text-base" asChild>
                  <a href="#demo">
                    <Play className="h-4 w-4 mr-2" />
                    {t.heroBtn1}
                  </a>
                </Button>
                <Button variant="outline" className="h-12 px-7 rounded-xl text-base border-primary/30 text-primary hover:bg-primary/5" onClick={() => setShowInstallModal(true)}>
                  <Terminal className="h-4 w-4 mr-2" />
                  {t.heroBtn2}
                </Button>
                <Button variant="outline" className="h-12 px-7 rounded-xl text-base border-primary/30 text-primary hover:bg-primary/5" asChild>
                  <a href="#how-it-works">
                    {t.heroBtn3}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="flex gap-8 mt-12 pt-8 border-t border-border/50">
                <div>
                  <div className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-mono)' }}>O(N²)</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.heroComplexity}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-mono)' }}>1962</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.heroPublication}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-mono)' }}>2012</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.heroNobel}</div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
                <img
                  src={HERO_IMG}
                  alt="Visualização de grafo bipartido do algoritmo Gale-Shapley"
                  className="relative rounded-2xl shadow-xl border border-border/50 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>{t.heroScroll}</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" ref={setSectionRef('about')} className="py-24 bg-secondary/30">
        <div className="container">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${isVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <img
                src={ABOUT_IMG}
                alt="Conceito de matching estável de Gale e Shapley"
                className="rounded-2xl shadow-lg border border-border/50 w-full"
              />
            </div>
            <div>
              <span className="section-number">{t.aboutSection}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                {t.aboutTitle}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                <p>
                  {t.aboutP1} <strong className="text-foreground">{t.aboutP1Names}</strong> {t.aboutP1And} <strong className="text-foreground">{t.aboutP1Names2}</strong> {t.aboutP1End}
                </p>
                <p>
                  {t.aboutP2Start} <strong className="text-foreground">{t.aboutP2Bold}</strong> {t.aboutP2End}
                </p>
                <p>{t.aboutP3}</p>
              </div>

              <div className="flex gap-4 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/8 border border-primary/15">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Nobel 2012</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/8 border border-primary/15">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Gale & Shapley</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" ref={setSectionRef('how-it-works')} className="py-24">
        <div className="container">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-number">{t.howSection}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              {t.howTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              {t.howDesc}
            </p>
          </div>

          <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img
              src={STEPS_IMG}
              alt="Três etapas do algoritmo de matching"
              className="rounded-2xl shadow-lg border border-border/50 w-full max-w-4xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, step: "01", title: t.howStep1Title, desc: t.howStep1Desc },
              { icon: Network, step: "02", title: t.howStep2Title, desc: t.howStep2Desc },
              { icon: BookOpen, step: "03", title: t.howStep3Title, desc: t.howStep3Desc },
            ].map((item, idx) => (
              <Card
                key={idx}
                className={`card-elevated border-border/50 overflow-hidden transition-all duration-700 ${isVisible('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + idx * 150}ms` }}
              >
                <CardContent className="p-7 relative">
                  <span className="absolute top-4 right-4 text-6xl font-bold text-foreground/[0.03] leading-none select-none" style={{ fontFamily: 'var(--font-mono)' }}>
                    {item.step}
                  </span>
                  <div className="relative">
                    <div className="mb-5 p-3 rounded-xl bg-primary/8 border border-primary/15 w-fit">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEMO INTERATIVA ===== */}
      <section id="demo" ref={setSectionRef('demo')} className="py-24 bg-secondary/30">
        <div className="container">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible('demo') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-number">{t.demoSection}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              {t.demoTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              {t.demoDesc}
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible('demo') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Painel de Controle */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-serif)' }}>{t.demoMatrices}</h3>

                {/* Controls row */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-muted-foreground">{t.demoSizeLabel}:</label>
                    <div className="flex items-center border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => handleNChange(n - 1)}
                        disabled={n <= 2 || demoRunning}
                        className="px-2.5 py-1.5 text-sm font-bold text-muted-foreground hover:bg-secondary/80 disabled:opacity-30 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-1.5 text-sm font-mono font-bold text-foreground bg-secondary/30 min-w-[2rem] text-center">{n}</span>
                      <button
                        onClick={() => handleNChange(n + 1)}
                        disabled={n >= 8 || demoRunning}
                        className="px-2.5 py-1.5 text-sm font-bold text-muted-foreground hover:bg-secondary/80 disabled:opacity-30 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={demoRunning}
                    className="text-xs h-8 rounded-lg border-primary/30 text-primary hover:bg-primary/5"
                  >
                    <Upload className="h-3.5 w-3.5 mr-1.5" />
                    {t.demoImportBtn}
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={generateRandomPrefs}
                    disabled={demoRunning}
                    className="text-xs h-8 rounded-lg border-primary/30 text-primary hover:bg-primary/5"
                  >
                    <Shuffle className="h-3.5 w-3.5 mr-1.5" />
                    {t.demoRandomBtn}
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetDemo}
                    className="text-xs h-8 rounded-lg border-border text-muted-foreground hover:bg-secondary/50"
                  >
                    <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
                    {t.demoResetBtn}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mb-3 italic">{t.demoEditHint}</p>

                {/* Formato do arquivo de importação */}
                <details className="mb-4 group">
                  <summary className="flex items-center gap-2 text-xs text-primary cursor-pointer hover:text-primary/80 transition-colors select-none">
                    <Info className="h-3.5 w-3.5" />
                    <span className="font-medium">{t.demoFormatTitle}</span>
                  </summary>
                  <div className="mt-2 p-3 rounded-lg bg-secondary/60 border border-border/50 text-xs">
                    <p className="text-muted-foreground mb-2 leading-relaxed">{t.demoFormatDesc}</p>
                    <p className="text-muted-foreground font-semibold mb-1">{t.demoFormatLabel}</p>
                    <pre className="bg-card border border-border/50 rounded-md p-2.5 font-mono text-foreground leading-relaxed overflow-x-auto whitespace-pre">{t.demoFormatExample}</pre>
                  </div>
                </details>

                <div className="space-y-5">
                  <PreferenceEditor type="proposer" prefs={proposerPrefs} label={t.demoProposers} />
                  <PreferenceEditor type="acceptor" prefs={acceptorPrefs} label={t.demoAcceptors} />

                  <div className="flex gap-3 flex-col sm:flex-row">
                    <Button
                      onClick={runDemo}
                      disabled={demoRunning}
                      className="flex-1 btn-teal h-12 rounded-xl text-base"
                    >
                      {demoRunning ? (
                        <>
                          <div className="h-4 w-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t.demoRunning}
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          {t.demoRunBtn}
                        </>
                      )}
                    </Button>

                    {demoResult && currentStep >= (demoResult?.steps.length ?? 0) && (
                      <Button
                        onClick={handleExport}
                        variant="outline"
                        className="h-12 rounded-xl border-primary/30 text-primary hover:bg-primary/5"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {t.demoExportBtn}
                      </Button>
                    )}
                  </div>
                </div>

                {/* Passos da execução */}
                {demoResult && (
                  <div className="mt-6 space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                    {demoResult.steps.slice(0, currentStep).map((step) => (
                      <div key={step.stepNumber} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50 animate-fade-in-up">
                        <span className="w-7 h-7 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center font-mono">
                          {step.stepNumber}
                        </span>
                        <span className="font-mono text-sm text-foreground">
                          P{step.proposer} → A{step.acceptor}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${getActionColor(step.action)}`}>
                          {getActionLabel(step.action)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Visualização do Grafo */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-serif)' }}>{t.demoGraphTitle}</h3>

                <div className="max-w-sm mx-auto" style={{ minHeight: '280px' }}>
                  {demoResult ? (
                    <MatchingGraph pairs={demoResult.pairs} n={n} animated={true} currentStep={currentStep} steps={demoResult.steps} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ minHeight: '280px' }}>
                      <div className="text-center space-y-4">
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 inline-block animate-float">
                          <Network className="h-12 w-12 text-primary/40" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {demoRunning ? t.demoGraphProcessing : t.demoGraphPlaceholder}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Resultado final */}
                {demoResult && currentStep >= demoResult.steps.length && (
                  <div className="mt-6 p-4 rounded-xl bg-success/5 border border-success/20 animate-scale-in">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="font-semibold text-foreground text-sm">{t.demoResultTitle}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {demoResult.pairs.map(([p, a], idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border">
                          <span className="font-mono text-xs font-bold text-primary">P{p}</span>
                          <ArrowRight className="h-3 w-3 text-muted-foreground" />
                          <span className="font-mono text-xs font-bold" style={{ color: 'oklch(0.65 0.18 25)' }}>A{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" ref={setSectionRef('features')} className="py-24">
        <div className="container">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-number">{t.featSection}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              {t.featTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              {t.featDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className={`card-elevated border-border/50 transition-all duration-700 ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                <CardContent className="p-7">
                  <div className="mb-5 p-3 rounded-xl bg-primary/8 border border-primary/15 w-fit">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section id="tech" ref={setSectionRef('tech')} className="py-24 bg-secondary/30">
        <div className="container">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible('tech') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-number">{t.techSection}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              {t.techTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              {t.techDesc}
            </p>
          </div>

          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-700 delay-200 ${isVisible('tech') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="text-center p-5 rounded-xl bg-card border border-border/50 card-elevated"
                style={{ transitionDelay: `${300 + idx * 80}ms` }}
              >
                <div className="font-bold text-foreground text-sm mb-1" style={{ fontFamily: 'var(--font-mono)' }}>{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMO INSTALAR ===== */}
      <section id="install" ref={setSectionRef('install')} className="py-24">
        <div className="container max-w-3xl">
          <div className={`transition-all duration-700 ${isVisible('install') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-number">{t.installSection}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
              {t.installTitle}
            </h2>

            <div className="space-y-4">
              {installSteps.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex gap-4 items-start p-5 rounded-xl bg-card border border-border/50 card-elevated transition-all duration-700 ${isVisible('install') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + idx * 100}ms` }}
                >
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0 font-mono">
                    {item.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-foreground mb-2">{item.label}</div>
                    <code className="block text-sm text-primary bg-secondary/50 px-4 py-2.5 rounded-lg border border-border/50 font-mono overflow-x-auto">
                      {item.code}
                    </code>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl bg-primary/5 border border-primary/15">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{t.installPrereqTitle}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.installPrereqDesc} <code className="font-mono text-primary bg-primary/5 px-1.5 py-0.5 rounded">npm install -g pnpm</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSTALL MODAL ===== */}
      {showInstallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                  {lang === 'pt' ? 'Rodar Localmente' : 'Run Locally'}
                </h2>
                <button
                  onClick={() => setShowInstallModal(false)}
                  className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-6">
                {installSteps.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0 font-mono">
                      {item.step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-foreground mb-2">{item.label}</div>
                      <code className="block text-sm text-primary bg-secondary/50 px-4 py-2.5 rounded-lg border border-border/50 font-mono overflow-x-auto">
                        {item.code}
                      </code>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-xl bg-primary/5 border border-primary/15">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{t.installPrereqTitle}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.installPrereqDesc} <code className="font-mono text-primary bg-primary/5 px-1.5 py-0.5 rounded">npm install -g pnpm</code>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Button
                  onClick={() => setShowInstallModal(false)}
                  variant="outline"
                  className="flex-1 h-10 rounded-lg"
                >
                  {lang === 'pt' ? 'Fechar' : 'Close'}
                </Button>
                <Button
                  asChild
                  className="flex-1 btn-teal h-10 rounded-lg"
                >
                  <a href="https://github.com/jluckmay/Gale-Shapley-Visualizer" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    {lang === 'pt' ? 'Ver no GitHub' : 'View on GitHub'}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Network className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>Gale-Shapley Visualizer</span>
            </div>

            <p className="text-sm text-muted-foreground">
              Gale-Shapley Algorithm Visualizer &copy; 2026
            </p>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>{t.footerMadeWith}</span>
              <Heart className="h-3.5 w-3.5 text-primary fill-primary" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
