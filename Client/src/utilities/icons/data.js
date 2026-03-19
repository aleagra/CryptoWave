import { Globe, Layers, LineChart, Lock, Shield, Zap } from "lucide-react";

export const balance = [
  {
    coin: "Bitcoin",
    symbol: "BTC",
    total: "$10.052",
    profit: "+6.3%",
  },
  {
    coin: "Ethereum",
    symbol: "ETH",
    total: "$5.250",
    profit: "+2.5%",
  },
  {
    coin: "Solana",
    symbol: "SOL",
    total: "$2.523",
    profit: "-1.5%",
  },
  {
    coin: "Cardano",
    symbol: "ADA",
    total: "$15.645",
    profit: "+20.34%",
    hidden: "max-2xl:hidden",
  },
];

export const footerLinks = {
  product: {
    title: "Producto",
    links: [
      { label: "Exchange", href: "#" },
      { label: "Mercados", href: "#" },
      { label: "Comisiones", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  company: {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "#" },
      { label: "Carreras", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Prensa", href: "#" },
    ],
  },
  resources: {
    title: "Recursos",
    links: [
      { label: "Documentación", href: "#" },
      { label: "Centro de ayuda", href: "#" },
      { label: "Comunidad", href: "#" },
      { label: "Estado", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Licencias", href: "#" },
    ],
  },
};

export const features = [
  {
    icon: Shield,
    title: "Seguridad avanzada",
    description:
      "Protección de nivel empresarial con autenticación de dos factores, almacenamiento en frío y cifrado de extremo a extremo.",
  },
  {
    icon: Zap,
    title: "Transacciones instantáneas",
    description:
      "Procesamiento de órdenes en milisegundos con nuestra infraestructura de baja latencia distribuida globalmente.",
  },
  {
    icon: LineChart,
    title: "Herramientas profesionales",
    description:
      "Gráficos avanzados, indicadores técnicos y APIs para traders profesionales y desarrolladores.",
  },
  {
    icon: Globe,
    title: "Disponible globalmente",
    description:
      "Opera desde cualquier lugar del mundo con soporte en múltiples idiomas y monedas locales.",
  },
  {
    icon: Lock,
    title: "Cumplimiento regulatorio",
    description:
      "Licenciados y regulados en múltiples jurisdicciones, garantizando la máxima transparencia.",
  },
  {
    icon: Layers,
    title: "Múltiples activos",
    description:
      "Accede a criptomonedas, tokens, NFTs y activos tradicionales desde una sola plataforma.",
  },
];

export const transactions = [
  {
    name: "BTC",
    img: "https://www.cryptocompare.com/media/37746251/btc.png",
    amount: "0.31",
    value: "$9.418,724",
    status: "Complete",
    style: "bg-green-400/20 text-green-400",
  },
  {
    name: "ETH",
    img: "https://www.cryptocompare.com/media/37746238/eth.png",
    amount: "2.75",
    value: "$5.118,75",
    status: "Complete",
    style: "bg-green-400/20 text-green-400",
  },
  {
    name: "USDT",
    img: "https://www.cryptocompare.com/media/37746338/usdt.png",
    amount: "540",
    value: "$540",
    status: "In progress",
    style: "bg-yellow-400/20 text-yellow-400",
  },
  {
    name: "BCH",
    img: "https://www.cryptocompare.com/media/37746245/bch.png",
    amount: "0,8674",
    value: "$200",
    status: "Failed",
    style: "bg-red-400/20 text-red-400",
  },
];

export const portfolio = [
  { coin: "BTC", amount: 0.31, avgBuyPrice: 28000 },
  { coin: "ETH", amount: 2.75, avgBuyPrice: 1900 },
  { coin: "SOL", amount: 18, avgBuyPrice: 120 },
  { coin: "ADA", amount: 3200, avgBuyPrice: 0.55 },
];
