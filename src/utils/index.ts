export const MOCK_DATA = {
	borrowCapacity: "45.2077777777",
	totalUSD: "2808.69",
	globalAPY: "0.0258",
	pool: "compound",
	markets: [
		{
			symbol: "UNI",
			borrow: "166.09",
			poolAPY: "0.0679",
			isMatched: true,
			userAPY: "0.0238",
			morphoRewards: "591.20"
		},
		{
			symbol: "COMP",
			borrow: "33.14",
			poolAPY: "0.0444444",
			isMatched: true,
			userAPY: "0.0271",
			morphoRewards: "269.18"
		},
		{
			symbol: "FEI",
			borrow: "0.06",
			poolAPY: "0.3205",
			isMatched: true,
			userAPY: "0.2737",
			morphoRewards: "0.12"
		}
	]
}

export const allAssets = {
  DAI: {
    symbol: "DAI",
    color: "#F4AB45",
  },
  BAT: {
    symbol: "BAT",
    color: "#652d90",
  },
  USDC: {
    symbol: "USDC",
    color: "#2D77C7",
  },
  COMP: {
    symbol: "COMP",
    color: "#22D397",
  },
  WMATIC: {
    symbol: "WMATIC",
    color: "#834FE2",
  },
  MATIC: {
    symbol: "MATIC",
    color: "#834FE2",
  },
  WAVAX: {
    symbol: "WAVAX",
    color: "#E64347",
  },
  AVAX: {
    symbol: "AVAX",
    color: "#E64347",
  },
  UNI: {
    symbol: "UNI",
    color: "#FC157B",
  },
  USDT: {
    symbol: "USDT",
    color: "#54AF95",
  },
  WBTC: {
    symbol: "WBTC",
    color: "#f09242",
  },
  AAVE: {
    symbol: "AAVE",
    color: "#8B72A8",
  },
  MORPHO: {
    symbol: "MORPHO",
    color: "#1E2356",
  },
  REP: {
    symbol: "REP",
    color: "#2befad",
  },
  WETH: {
    symbol: "WETH",
    color: "#EC1C79",
  },
  FEI: {
    symbol: "FEI",
    color: "#22996E",
  },
  CRV: {
    symbol: "CRV",
    color: "#F41B1B",
  },
  stETH: {
    symbol: "stETH",
    color: "#1CA4FC",
  },
  BNB: {
    symbol: "BNB",
    color: "#EFB82D",
  },
  BUSD: {
    symbol: "BUSD",
    color: "#EFB82E",
  },
  XRP: {
    symbol: "XRP",
    color: "#30353B",
  },
  ADA: {
    symbol: "ADA",
    color: "#0738AA",
  },
  SOL: {
    symbol: "SOL",
    color: "#8A73D9",
  },
  DOT: {
    symbol: "DOT",
    color: "#E4137B",
  },
  TRX: {
    symbol: "TRX",
    color: "#F93945",
  },
  SHIB: {
    symbol: "SHIB",
    color: "#FEC270",
  },
};

const CDN_BASE_URL = "https://cdn.morpho.xyz";
export const getLogoSvgUrl = (symbol?: string) =>
  new URL(
    `/assets/logos/${symbol?.toLowerCase() || "unknown"}.svg`,
    CDN_BASE_URL
  ).toString();

export const randomNrFromRange = (min: number, max: number): string => {
  return (Math.random() * (max - min) + min).toFixed(2)
}