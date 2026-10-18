import { FUNNEL_CONFIG } from './config';

type PixelFunction = ((...args: unknown[]) => void) & { queue?: unknown[][] };

declare global {
  interface Window {
    fbq?: PixelFunction;
    _fbq?: PixelFunction;
  }
}

let initialized = false;

export function enableMetaPixel(): void {
  const pixelId = FUNNEL_CONFIG.metaPixelId.trim();
  if (!pixelId || typeof window === 'undefined' || initialized) return;

  if (!window.fbq) {
    const pixel = ((...args: unknown[]) => {
      (pixel.queue ??= []).push(args);
    }) as PixelFunction;
    pixel.queue = [];
    window.fbq = pixel;
    window._fbq = pixel;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }

  initialized = true;
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
}

export function trackMetaEvent(eventName: string, custom = false): void {
  if (!initialized || !window.fbq) return;
  window.fbq(custom ? 'trackCustom' : 'track', eventName);
}
