import { useEffect, useState } from 'react';

type Buyer = [name: string, city: string];

const BUYERS: Buyer[] = [
  ['Ana', 'São Paulo, SP'],
  ['Juliana', 'Belo Horizonte, MG'],
  ['Fernanda', 'Curitiba, PR'],
  ['Mariana', 'Salvador, BA'],
  ['Patrícia', 'Recife, PE'],
  ['Camila', 'Porto Alegre, RS'],
  ['Luciana', 'Fortaleza, CE'],
  ['Beatriz', 'Goiânia, GO'],
  ['Renata', 'Rio de Janeiro, RJ'],
  ['Cláudia', 'Florianópolis, SC'],
  ['Aline', 'Campinas, SP'],
  ['Sandra', 'Manaus, AM'],
];

type PurchaseToastProps = {
  mode?: 'quiz' | 'purchase';
};

export default function PurchaseToast({ mode = 'purchase' }: PurchaseToastProps) {
  const [buyerIndex, setBuyerIndex] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setBuyerIndex(-1);
    setVisible(false);
    let nextIndex = Math.floor(Math.random() * BUYERS.length);

    const showNext = () => {
      nextIndex = (nextIndex + 1) % BUYERS.length;
      setBuyerIndex(nextIndex);
      setVisible(true);
      window.setTimeout(() => setVisible(false), 5000);
    };

    const firstTimer = window.setTimeout(showNext, 6000);
    const interval = window.setInterval(showNext, 15000);

    return () => {
      window.clearTimeout(firstTimer);
      window.clearInterval(interval);
    };
  }, [mode]);

  if (buyerIndex < 0) return null;

  const [name, city] = BUYERS[buyerIndex] ?? BUYERS[0];

  return (
    <aside
      className={`purchase-toast ${visible ? 'purchase-toast--visible' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Notificação de compra"
    >
      <span className="purchase-toast__icon" aria-hidden="true">✓</span>
      <div className="purchase-toast__copy">
        <strong>{name} de {city}</strong>
        <span>{mode === 'quiz' ? 'concluiu o quiz Alma em Mandala' : 'acabou de adquirir o guia Alma em Mandala'}</span>
      </div>
    </aside>
  );
}
