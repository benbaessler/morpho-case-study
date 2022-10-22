

const CDN_BASE_URL = "https://cdn.morpho.xyz";
export const getLogoSvgUrl = (symbol?: string) =>
  new URL(
    `/assets/logos/${symbol?.toLowerCase() || "unknown"}.svg`,
    CDN_BASE_URL
  ).toString();

export const randomNrFromRange = (min: number, max: number): string => {
  return (Math.random() * (max - min) + min).toFixed(2)
}