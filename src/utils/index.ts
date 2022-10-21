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
			userAPY: "27.37",
			morphoRewards: "0.12"
		}
	]
}

const CDN_BASE_URL = "https://cdn.morpho.xyz";
export const getLogoSvgUrl = (symbol?: string) =>
  new URL(
    `/assets/logos/${symbol?.toLowerCase() || "unknown"}.svg`,
    CDN_BASE_URL
  ).toString();