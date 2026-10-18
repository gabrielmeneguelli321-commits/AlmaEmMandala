export const FUNNEL_CONFIG = {
  /** Ajuste este valor quando o responsável confirmar o preço final. */
  promotionalPrice: 19.9,
  /** O preço anterior só aparece se referencePriceVerified for true. */
  referencePrice: 47,
  referencePriceVerified: false,
  /** Exiba a promessa de acesso após pagamento somente se a entrega estiver confirmada. */
  postPaymentAccessConfirmed: false,
  /** URL HTTPS do checkout externo informada pelo responsável. */
  checkoutUrl: 'https://pay.cakto.com.br/3cvx2dz_1217210',
  /** Cupom real, se existir. Não preencher com código fictício. */
  couponCode: '',
  /** Nome do parâmetro exigido pelo checkout configurado. */
  couponParameter: 'coupon',
  /** Pixel só é carregado depois do consentimento quando um ID válido é configurado. */
  metaPixelId: '',
} as const;

export const WOMAN_IMAGE = '/manus-storage/async-images/IU5jCflaS9Bq1asKUpLfyG/image-1.webp';
export const MANDALA_IMAGE = '/manus-storage/async-images/Yp3UmJ167v8JhVEMrcMHaB/image-2.webp';
export const QUIZ_INTRO_IMAGE = '/manus-storage/pasted_file_8Ff8W4_image_c8fd4c71.png';
export const OFFER_MOCKUP_IMAGE = '/manus-storage/pasted_file_wN8rV4_image_72bf08d1.png';
export const SAMPLE_WORKSHEET_IMAGE = '/manus-storage/pasted_file_RXP8ql_image_f9e5499c.png';

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
}

export function createCheckoutUrl(): string | null {
  const configuredUrl = FUNNEL_CONFIG.checkoutUrl.trim();
  if (!configuredUrl) return null;

  try {
    const url = new URL(configuredUrl, window.location.href);
    if (url.protocol !== 'https:') return null;
    if (FUNNEL_CONFIG.couponCode.trim()) {
      url.searchParams.set(FUNNEL_CONFIG.couponParameter, FUNNEL_CONFIG.couponCode.trim());
    }
    return url.toString();
  } catch {
    return null;
  }
}
