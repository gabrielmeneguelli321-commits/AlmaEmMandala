type BrandProps = {
  compact?: boolean;
};

export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <path d="M24 7c3.6 4 3.6 8.3 0 12.4C20.4 15.3 20.4 11 24 7Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M41 24c-4 3.6-8.3 3.6-12.4 0C32.7 20.4 37 20.4 41 24Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M24 41c-3.6-4-3.6-8.3 0-12.4 3.6 4.1 3.6 8.4 0 12.4Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 24c4-3.6 8.3-3.6 12.4 0C15.3 27.6 11 27.6 7 24Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="m12 12 8 8m16-8-8 8m8 16-8-8m-16 8 8-8" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export default function Brand({ compact = false }: BrandProps) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="/" aria-label="Alma em Mandala — início">
      <BrandMark className="brand__mark" />
      <span className="brand__words">
        <span className="brand__name">Alma <i>em Mandala</i></span>
        {!compact && <span className="brand__descriptor">GUIA DE DESENHO</span>}
      </span>
    </a>
  );
}
