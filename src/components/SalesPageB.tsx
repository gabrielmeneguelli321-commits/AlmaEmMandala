import { useEffect, useState } from 'react';
import Brand from './Brand';
import { BONUS_IMAGES, FUNNEL_CONFIG, formatPrice, OFFER_MOCKUP_IMAGE, SAMPLE_WORKSHEET_IMAGE } from '../config';
import './SalesPageB.css';

type Theme = 'light' | 'dark';

type SalesPageBProps = {
  onBuy: () => void;
  notice: string;
  theme: Theme;
  onToggleTheme: () => void;
  consentPending: boolean;
};

const guideContents = [
  {
    number: '01',
    title: 'Mais de 500 exercícios guiados',
    description: 'Uma coleção de desenhos para acompanhar e praticar, um de cada vez.',
  },
  {
    number: '02',
    title: 'Cinco níveis de dificuldade',
    description: 'Os níveis são identificados por estrelas para você escolher por onde começar.',
  },
  {
    number: '03',
    title: 'Modelos visuais e sequências',
    description: 'Veja a construção dos desenhos em etapas e acompanhe cada forma.',
  },
  {
    number: '04',
    title: 'Espaço para reproduzir',
    description: 'As folhas reservam espaço para você experimentar cada mandala no seu ritmo.',
  },
];

const bonuses = [
  { number: '01', title: 'Modelos complexos', description: '60 desenhos adicionais em folhas de prática de mandalas da calma.', image: BONUS_IMAGES.complexModels },
  { number: '02', title: 'Desenhos completos para prática', description: 'Folhas de exercícios com desenhos em página inteira para imprimir e traçar.', image: BONUS_IMAGES.practiceDrawings },
  { number: '03', title: 'Mandalas: frutas e vegetais', description: 'Livro de colorir com desenhos originais para uma pausa criativa.', image: BONUS_IMAGES.fruitsVegetables },
  { number: '04', title: 'Diário “Acalmando a Mente”', description: 'Exercícios e reflexões diárias para acompanhar o seu momento.', image: BONUS_IMAGES.calmingMind },
  { number: '05', title: 'Calendários e agendas 2026 e 2027', description: 'Materiais para organizar seus dias e manter a prática por perto.', image: BONUS_IMAGES.calendars },
  { number: '06', title: '+40 pôsteres e panfletos', description: 'Novos designs para decorar seu espaço com mandalas.', image: BONUS_IMAGES.posters },
  { number: '07', title: 'Diário de hábitos', description: 'Um material para estabelecer e acompanhar novos hábitos positivos.', image: BONUS_IMAGES.habitsDiary },
  { number: '08', title: 'Livro de colorir de mandalas: alfabeto', description: 'Letras ilustradas para colorir e explorar de um jeito diferente.', image: BONUS_IMAGES.alphabet },
  { number: '09', title: 'Playlist exclusiva de música relaxante', description: 'Um complemento para acompanhar seus momentos de arte e tranquilidade.', image: BONUS_IMAGES.playlist },
];

const questions = [
  {
    question: 'O que está incluído no guia?',
    answer: 'Um guia digital em PDF com mais de 500 exercícios guiados, cinco níveis de dificuldade, modelos visuais, sequências de construção e espaço para reproduzir os desenhos.',
  },
  {
    question: 'Preciso ter experiência para começar?',
    answer: 'Não. Os exercícios são guiados e você pode escolher o nível e o desenho que preferir, sem precisar seguir uma ordem.',
  },
  {
    question: 'Em que formato está o material?',
    answer: 'O Mandalas da Calma é um guia digital em PDF, pronto para imprimir em casa.',
  },
  {
    question: 'O que preciso para praticar?',
    answer: 'Papel e lápis são suficientes para começar a experimentar os desenhos.',
  },
];

function ThemeButton({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const nextTheme = theme === 'dark' ? 'claro' : 'escuro';

  return (
    <button
      className="offer-b__theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={`Ativar modo ${nextTheme}`}
      aria-pressed={theme === 'dark'}
    >
      {theme === 'light' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.2 15.1A8.4 8.4 0 0 1 8.9 3.8a8.5 8.5 0 1 0 11.3 11.3Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      )}
      <span>Modo {nextTheme}</span>
    </button>
  );
}

function PriceBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`offer-b__price${compact ? ' offer-b__price--compact' : ''}`} aria-label={`Preço exibido ${formatPrice(FUNNEL_CONFIG.offerBPrice)}`}>
      <span>PREÇO ATUAL</span>
      <strong>{formatPrice(FUNNEL_CONFIG.offerBPrice)}</strong>
    </div>
  );
}

export default function SalesPageB({ onBuy, notice, theme, onToggleTheme, consentPending }: SalesPageBProps) {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    function updateStickyCta() {
      const heroCta = document.getElementById('hero-buy-cta-b');
      const offerCta = document.getElementById('offer-buy-cta-b');

      if (!heroCta || !offerCta || window.innerWidth > 700 || consentPending) {
        setShowStickyCta(false);
        return;
      }

      const heroHasPassed = heroCta.getBoundingClientRect().bottom < 0;
      const offerIsStillBelow = offerCta.getBoundingClientRect().top > window.innerHeight;
      setShowStickyCta(heroHasPassed && offerIsStillBelow);
    }

    updateStickyCta();
    window.addEventListener('scroll', updateStickyCta, { passive: true });
    window.addEventListener('resize', updateStickyCta);
    return () => {
      window.removeEventListener('scroll', updateStickyCta);
      window.removeEventListener('resize', updateStickyCta);
    };
  }, [consentPending]);

  return (
    <>
      <header className="offer-b__header">
        <div className="offer-b__header-inner">
          <Brand />
          <nav className="offer-b__nav" aria-label="Navegação da página de vendas">
            <a href="#conteudo-b">O que vem no guia</a>
            <a href="#bonus-b">Bônus</a>
            <a href="#amostra-b">Ver uma amostra</a>
            <a href="#duvidas-b">Dúvidas</a>
          </nav>
          <ThemeButton theme={theme} onToggle={onToggleTheme} />
        </div>
      </header>

      <main className="sales-page-b">
        <div className="offer-b__ribbon">UM GUIA DIGITAL PARA CRIAR NO SEU PRÓPRIO RITMO</div>

        <section className="offer-b__hero" id="inicio-b" aria-labelledby="offer-b-title">
          <span className="offer-b__eyebrow"><span aria-hidden="true">✳</span> ALMA EM MANDALA APRESENTA</span>
          <h1 id="offer-b-title">Mandalas da Calma: <em>um traço de cada vez.</em></h1>
          <p className="offer-b__lede">Um guia de desenho digital com mais de 500 exercícios guiados, cinco níveis de dificuldade e modelos para acompanhar sem pressa.</p>

          <div className="offer-b__hero-art">
            <figure className="offer-b__mockup">
              <img src={OFFER_MOCKUP_IMAGE} alt="Mockup ilustrativo da capa do guia Mandalas da Calma com exemplos de páginas e lápis coloridos." />
              <figcaption>Mockup ilustrativo do guia digital</figcaption>
            </figure>
            <div className="offer-b__hero-stamp" aria-label="Mais de 500 exercícios guiados em cinco níveis">
              <strong>500+</strong>
              <span>exercícios<br />guiados</span>
            </div>
            <figure className="offer-b__hero-sample">
              <img src={SAMPLE_WORKSHEET_IMAGE} alt="Amostra visual de uma folha progressiva de exercícios de mandalas, com desenhos em sequência e níveis de dificuldade." />
              <figcaption>Uma amostra da folha de prática</figcaption>
            </figure>
          </div>

          <div className="offer-b__hero-actions">
            <PriceBlock />
            <button id="hero-buy-cta-b" className="offer-b__button" onClick={onBuy} type="button">
              QUERO VER O GUIA <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="offer-b__microcopy">Guia digital em PDF · pronto para imprimir em casa</p>
        </section>

        <div className="offer-b__quick-facts" aria-label="Características do guia">
          <span>PDF DIGITAL</span><i aria-hidden="true" />
          <span>+500 EXERCÍCIOS</span><i aria-hidden="true" />
          <span>5 NÍVEIS</span><i aria-hidden="true" />
          <span>PARA IMPRIMIR</span>
        </div>

        <section className="offer-b__contents" id="conteudo-b" aria-labelledby="contents-b-title">
          <div className="offer-b__section-heading">
            <span className="offer-b__eyebrow"><span aria-hidden="true">✳</span> O QUE VOCÊ VAI RECEBER</span>
            <h2 id="contents-b-title">O conteúdo do guia, sem mistério.</h2>
            <p>Veja com clareza o que faz parte do Mandalas da Calma.</p>
          </div>
          <div className="offer-b__content-layout">
            <div className="offer-b__guide-card">
              <div className="offer-b__guide-card-top"><span>GUIA DE DESENHO</span><span className="offer-b__pdf-tag">PDF</span></div>
              <Brand />
              <div className="offer-b__guide-rosette" aria-hidden="true">✿</div>
              <strong>Mandalas<br />da Calma</strong>
              <span>ARTE ILUSTRATIVA · NÃO É CAPA DO PDF</span>
            </div>
            <div className="offer-b__contents-list">
              {guideContents.map((item) => (
                <article className="offer-b__content-item" key={item.number}>
                  <span className="offer-b__content-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
              <p className="offer-b__contents-note">Material digital em PDF. Não inclui envio de produto físico.</p>
            </div>
          </div>
        </section>

        <section className="offer-b__bonuses" id="bonus-b" aria-labelledby="bonuses-b-title">
          <div className="offer-b__section-heading">
            <span className="offer-b__eyebrow"><span aria-hidden="true">✳</span> E AINDA TEM MAIS</span>
            <h2 id="bonuses-b-title">9 bônus para aumentar o seu momento criativo.</h2>
            <p>Além do guia principal, você recebe materiais complementares para imprimir, praticar e aproveitar no seu ritmo.</p>
          </div>
          <div className="offer-b__bonus-grid">
            {bonuses.map((bonus) => (
              <article className="offer-b__bonus-card" key={bonus.number}>
                <div className="offer-b__bonus-number">BÔNUS {bonus.number}</div>
                <img src={bonus.image} alt={`Imagem ilustrativa do bônus ${bonus.number}: ${bonus.title}.`} loading="lazy" />
                <div className="offer-b__bonus-copy">
                  <h3>{bonus.title}</h3>
                  <p>{bonus.description}</p>
                  <strong>GRÁTIS NA OFERTA</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="offer-b__sample" id="amostra-b" aria-labelledby="sample-b-title">
          <div className="offer-b__sample-copy">
            <span className="offer-b__eyebrow"><span aria-hidden="true">✳</span> UMA AMOSTRA DO MATERIAL</span>
            <h2 id="sample-b-title">Veja a prática em etapas.</h2>
            <p>Esta folha mostra como os desenhos aparecem em sequência, para você acompanhar as formas e experimentar cada traço com calma.</p>
            <ul>
              <li>Desenhos progressivos para praticar</li>
              <li>Nível de dificuldade indicado por estrelas</li>
              <li>Folha A4, pronta para imprimir</li>
            </ul>
            <p className="offer-b__sample-disclaimer">A imagem é uma amostra visual do material, não o guia completo.</p>
          </div>
          <figure className="offer-b__sample-image">
            <img src={SAMPLE_WORKSHEET_IMAGE} alt="Folha de amostra do guia Mandalas da Calma mostrando quatro sequências progressivas de desenhos em papel A4." />
            <figcaption>AMOSTRA DE FOLHA DE PRÁTICA · NÍVEL 0</figcaption>
          </figure>
        </section>

        <section className="offer-b__steps" aria-labelledby="steps-b-title">
          <div className="offer-b__section-heading">
            <span className="offer-b__eyebrow"><span aria-hidden="true">✳</span> SEU MOMENTO, DO SEU JEITO</span>
            <h2 id="steps-b-title">Escolha, acompanhe, pratique.</h2>
          </div>
          <div className="offer-b__steps-list">
            <article><span>1</span><h3>Escolha um exercício</h3><p>Você pode começar pelo desenho que chamar sua atenção, sem seguir uma ordem obrigatória.</p></article>
            <article><span>2</span><h3>Acompanhe os modelos</h3><p>Use as referências visuais e as sequências de construção como guia para cada traço.</p></article>
            <article><span>3</span><h3>Pratique no seu ritmo</h3><p>Use o espaço de cada exercício para experimentar e reproduzir a mandala.</p></article>
          </div>
        </section>

        <section className="offer-b__offer" id="oferta-b" aria-labelledby="offer-summary-title">
          <div className="offer-b__offer-copy">
            <span className="offer-b__eyebrow"><span aria-hidden="true">✳</span> UM GUIA PARA COMEÇAR</span>
            <h2 id="offer-summary-title">Mais de 500 exercícios para explorar, um de cada vez.</h2>
            <ul>
              <li><span aria-hidden="true">✓</span> Guia digital Mandalas da Calma em PDF</li>
              <li><span aria-hidden="true">✓</span> Cinco níveis de dificuldade</li>
              <li><span aria-hidden="true">✓</span> Modelos, sequências e espaço para praticar</li>
              <li><span aria-hidden="true">✓</span> Material pronto para imprimir em casa</li>
            </ul>
          </div>
          <div className="offer-b__offer-box">
            <PriceBlock />
            <button id="offer-buy-cta-b" className="offer-b__button" onClick={onBuy} type="button">
              QUERO COMEÇAR A DESENHAR <span aria-hidden="true">→</span>
            </button>
            <p>O botão leva ao checkout da Cakto.</p>
          </div>
        </section>
        {notice && <p className="offer-b__notice section-wrap" role="alert">{notice}</p>}

        <section className="offer-b__faq" id="duvidas-b" aria-labelledby="faq-b-title">
          <div className="offer-b__section-heading">
            <span className="offer-b__eyebrow"><span aria-hidden="true">✳</span> DÚVIDAS FREQUENTES</span>
            <h2 id="faq-b-title">Antes de começar.</h2>
          </div>
          <div className="offer-b__faq-list">
            {questions.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="offer-b__footer">
          <div className="offer-b__footer-inner">
            <Brand compact />
            <p>Um passatempo criativo para aproveitar no seu próprio ritmo.</p>
            <span>Atividade de lazer. Não é tratamento médico.</span>
          </div>
        </footer>
      </main>

      {showStickyCta && (
        <aside className="offer-b__sticky" aria-label="Atalho para comprar o guia">
          <PriceBlock compact />
          <button className="offer-b__button" onClick={onBuy} type="button">QUERO O GUIA <span aria-hidden="true">→</span></button>
        </aside>
      )}
    </>
  );
}
