export const FUNNEL_CONFIG = {
  /** Ajuste este valor quando o responsável confirmar o preço final. */
  promotionalPrice: 19.9,
  /** Preço de referência informado pelo responsável e confirmado para exibição. */
  referencePrice: 59.9,
  referencePriceVerified: true,
  /** O responsável confirmou acesso liberado por e-mail após a confirmação do pagamento. */
  postPaymentAccessConfirmed: true,
  /** URL HTTPS do checkout externo informada pelo responsável. */
  checkoutUrl: 'https://pay.cakto.com.br/gwf9s6z_1218085',
  /** Cupom real, se existir. Não preencher com código fictício. */
  couponCode: '',
  /** Nome do parâmetro exigido pelo checkout configurado. */
  couponParameter: 'coupon',
  /** Pixel só é carregado depois do consentimento quando um ID válido é configurado. */
  metaPixelId: '1451027436925150',
} as const;

export const WOMAN_IMAGE = '/images/optimized/woman-drawing-960.webp';
export const QUIZ_INTRO_IMAGE = '/images/optimized/alma-em-mandala-550-paginas-960.webp';
export const OFFER_MOCKUP_IMAGE = '/images/optimized/observe-e-trace-amostra-960.webp';
export const SAMPLE_WORKSHEET_IMAGE = '/images/optimized/sample-worksheet-960.webp';
export const QUIZ_RESULT_IMAGE = '/images/optimized/kit-mandalas-da-calma-destaque-960.webp';
export const QUIZ_VSL_VIDEO = '/videos/alma-mandala-vsl-horizontal-16x9-optimized.mp4';
export const QUIZ_VSL_POSTER = '/images/optimized/alma-mandala-vsl-poster-1280.webp';

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
