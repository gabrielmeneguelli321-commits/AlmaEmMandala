import { useEffect, useMemo, useState } from 'react';
import Brand, { BrandMark } from './components/Brand';
import { createCheckoutUrl, formatPrice, FUNNEL_CONFIG, WOMAN_IMAGE } from './config';
import { enableMetaPixel, trackMetaEvent } from './tracking';
import { OFFER_MOCKUP_IMAGE, QUIZ_INTRO_IMAGE, SAMPLE_WORKSHEET_IMAGE } from './config';

type View = 'intro' | 'quiz' | 'result' | 'offer';
type Answer = string | null;
type Theme = 'light' | 'dark';

const questions = [
  {
    title: 'Como você gosta de aproveitar seus momentos livres?',
    options: ['Fazendo atividades criativas.', 'Relaxando em casa.', 'Aprendendo algo diferente.', 'Procurando novos passatempos.'],
  },
  {
    title: 'Você já experimentou desenhar ou colorir mandalas?',
    options: ['Nunca, mas tenho curiosidade.', 'Já colori algumas.', 'Já tentei desenhar.', 'Gosto bastante desse tipo de atividade.'],
  },
  {
    title: 'O que mais chama sua atenção em um passatempo?',
    options: ['Poder fazer sem pressa.', 'Criar algo bonito com as mãos.', 'Exercitar minha criatividade.', 'Ter um momento longe do celular.'],
  },
  {
    title: 'Quanto tempo você gostaria de dedicar a uma atividade tranquila?',
    options: ['De 5 a 10 minutos.', 'De 10 a 20 minutos.', 'De 20 a 30 minutos.', 'O tempo que eu quiser.'],
  },
  {
    title: 'Qual tipo de desenho você acha mais bonito?',
    options: ['Flores e pétalas.', 'Formas geométricas.', 'Desenhos simples e delicados.', 'Mandalas com muitos detalhes.'],
  },
];

const consentKey = 'mandalas-calma-pixel-consent';
const themeStorageKey = 'mandalas-calma-theme';

type Consent = 'unknown' | 'accepted' | 'declined';

function getSavedConsent(): Consent {
  try {
    const saved = localStorage.getItem(consentKey);
    return saved === 'accepted' || saved === 'declined' ? saved : 'unknown';
  } catch {
    return 'unknown';
  }
}

function getSavedTheme(): Theme {
  try {
    const saved = localStorage.getItem(themeStorageKey);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // A configuração inicial ainda pode ser lida da preferência do sistema.
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function buildPreferenceMessage(answers: Answer[]): string {
  const likesCreativity = answers[0] === questions[0].options[0] || answers[2] === questions[2].options[2];
  const likesQuiet = answers[2] === questions[2].options[0] || answers[0] === questions[0].options[1];
  const likesDelicate = answers[4] === questions[4].options[2] || answers[4] === questions[4].options[0];

  if (likesCreativity && likesQuiet) return 'Você parece gostar de atividades criativas e momentos de tranquilidade.';
  if (likesDelicate) return 'Seu estilo combina com desenhos delicados que podem ser feitos no seu ritmo.';
  return 'Você demonstrou interesse em explorar atividades manuais e novos passatempos.';
}

function Header({ onRestart, theme, onToggleTheme }: {
  onRestart?: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}) {
  return (
    <header className="site-header">
      <Brand />
      <div className="header-tools">
        {onRestart ? (
          <div className="header-actions">
            <nav className="header-nav" aria-label="Navegação principal">
              <a href="#conteudo">O guia</a>
              <a href="#beneficios">Benefícios</a>
              <a href="#duvidas">Dúvidas</a>
            </nav>
            <button className="text-link" onClick={onRestart} type="button">Refazer quiz</button>
          </div>
        ) : (
          <span className="header-note"><span className="header-note__dot" /> Um convite a criar no seu próprio ritmo</span>
        )}
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const targetTheme = theme === 'dark' ? 'claro' : 'escuro';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={`Ativar modo ${targetTheme}`}
      aria-pressed={theme === 'dark'}
      title="Alternar entre tema claro e escuro"
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
      <span>Modo {targetTheme}</span>
    </button>
  );
}

function Price({ large = false }: { large?: boolean }) {
  return (
    <div className={`price ${large ? 'price--large' : ''}`} aria-label={`Preço promocional ${formatPrice(FUNNEL_CONFIG.promotionalPrice)}`}>
      {FUNNEL_CONFIG.referencePriceVerified && (
        <span className="price__from">De <s>{formatPrice(FUNNEL_CONFIG.referencePrice)}</s> por</span>
      )}
      <strong>{formatPrice(FUNNEL_CONFIG.promotionalPrice)}</strong>
      <span className="price__condition">Oferta do quiz</span>
    </div>
  );
}

function ProductMockup() {
  return (
    <div className="mockup-scene mockup-scene--provided">
      <div className="mockup-glow" aria-hidden="true" />
      <img className="offer-mockup-image" src={OFFER_MOCKUP_IMAGE} alt="Mockup ilustrativo do guia Mandalas da Calma, acompanhado de páginas com desenhos de mandalas e lápis coloridos." />
      <div className="mockup-caption"><span className="caption-dot" /> Material digital em PDF</div>
    </div>
  );
}

function App() {
  const initialPath = window.location.pathname;
  const [view, setView] = useState<View>(initialPath === '/oferta' ? 'offer' : 'intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(() => questions.map(() => null));
  const [transitioning, setTransitioning] = useState(false);
  const [checkoutNotice, setCheckoutNotice] = useState('');
  const [consent, setConsent] = useState<Consent>(getSavedConsent);
  const [theme, setTheme] = useState<Theme>(getSavedTheme);
  const preferenceMessage = useMemo(() => buildPreferenceMessage(answers), [answers]);

  useEffect(() => {
    const handlePopState = () => {
      setView(window.location.pathname === '/oferta' ? 'offer' : 'intro');
      setCheckoutNotice('');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (consent === 'accepted') enableMetaPixel();
  }, [consent]);

  useEffect(() => {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch {
      // A troca de tema continua funcionando mesmo sem armazenamento local.
    }
  }, [theme]);

  useEffect(() => {
    if (view === 'offer' && consent === 'accepted') trackMetaEvent('ViewContent');
    if (view === 'result' && consent === 'accepted') trackMetaEvent('QuizComplete', true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, consent]);

  function startQuiz() {
    if (window.location.pathname === '/oferta') {
      window.history.pushState({ page: 'quiz' }, '', '/');
    }
    setAnswers(questions.map(() => null));
    setQuestionIndex(0);
    setView('quiz');
  }

  function toggleTheme() {
    setTheme((current) => current === 'light' ? 'dark' : 'light');
  }

  function chooseAnswer(answer: string) {
    if (transitioning) return;
    const nextAnswers = [...answers];
    nextAnswers[questionIndex] = answer;
    setAnswers(nextAnswers);
    setTransitioning(true);
    window.setTimeout(() => {
      if (questionIndex === questions.length - 1) {
        setView('result');
      } else {
        setQuestionIndex((index) => index + 1);
      }
      setTransitioning(false);
    }, 230);
  }

  function goBackQuestion() {
    if (questionIndex > 0) setQuestionIndex((index) => index - 1);
    else setView('intro');
  }

  function goToOffer() {
    window.history.pushState({ page: 'offer' }, '', '/oferta?origem=quiz');
    setCheckoutNotice('');
    setView('offer');
  }

  function handleConsent(choice: 'accepted' | 'declined') {
    try {
      localStorage.setItem(consentKey, choice);
    } catch {
      // O fluxo do quiz continua mesmo quando o navegador bloqueia armazenamento local.
    }
    setConsent(choice);
    if (choice === 'accepted') enableMetaPixel();
  }

  function startCheckout() {
    const checkoutUrl = createCheckoutUrl();
    if (!checkoutUrl) {
      setCheckoutNotice('A compra online ainda não está liberada. O responsável pelo produto precisa configurar a URL oficial do checkout antes da publicação.');
      window.setTimeout(() => document.getElementById('checkout-notice')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
      return;
    }
    if (consent === 'accepted') trackMetaEvent('InitiateCheckout');
    window.location.assign(checkoutUrl);
  }

  return (
    <div className="app-shell" data-theme={theme}>
      {view === 'offer' ? (
        <>
          <Header onRestart={startQuiz} theme={theme} onToggleTheme={toggleTheme} />
          <SalesPage onBuy={startCheckout} notice={checkoutNotice} />
        </>
      ) : (
        <>
          <Header theme={theme} onToggleTheme={toggleTheme} />
          <main className="quiz-shell">
            {view === 'intro' && <Intro onStart={startQuiz} />}
            {view === 'quiz' && (
              <Quiz
                index={questionIndex}
                answers={answers}
                transitioning={transitioning}
                onChoose={chooseAnswer}
                onBack={goBackQuestion}
              />
            )}
            {view === 'result' && <Result message={preferenceMessage} onContinue={goToOffer} />}
          </main>
          <p className="quiz-privacy">Suas respostas são usadas apenas para esta experiência e não pedimos dados pessoais.</p>
        </>
      )}
      {FUNNEL_CONFIG.metaPixelId.trim() && consent === 'unknown' && (
        <aside className="consent-banner" aria-label="Preferências de privacidade">
          <div>
            <strong>Você escolhe como medir esta experiência.</strong>
            <p>Com sua autorização, usamos o Meta Pixel para entender visitas e ações no site. As respostas do quiz não são enviadas pelo formulário.</p>
          </div>
          <div className="consent-banner__actions">
            <button className="button button--quiet" onClick={() => handleConsent('declined')} type="button">Recusar métricas</button>
            <button className="button button--small" onClick={() => handleConsent('accepted')} type="button">Aceitar métricas</button>
          </div>
        </aside>
      )}
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <section className="quiz-card intro-card" aria-labelledby="intro-title">
      <div className="intro-copy">
        <span className="eyebrow"><span className="eyebrow-line" /> UM CONVITE PARA VOCÊ</span>
        <h1 id="intro-title">Descubra um passatempo encantador para os seus momentos de tranquilidade</h1>
        <p className="intro-lede">Responda 5 perguntas rápidas e conheça uma forma simples de aproveitar seu tempo com criatividade. Ao final, desbloqueie uma oferta especial.</p>
        <button className="button button--primary button--wide" onClick={onStart} type="button">
          QUERO COMEÇAR <span aria-hidden="true">→</span>
        </button>
        <p className="button-note">Leva apenas alguns instantes · Sem cadastro</p>
      </div>
      <div className="intro-art" aria-hidden="true">
        <div className="intro-art__halo" />
        <div className="intro-art__frame intro-art__frame--photo"><img src={QUIZ_INTRO_IMAGE} alt="" /></div>
        <span className="intro-art__note">um momento<br />no seu ritmo</span>
        <span className="intro-art__spark">✳</span>
      </div>
    </section>
  );
}

type QuizProps = {
  index: number;
  answers: Answer[];
  transitioning: boolean;
  onChoose: (answer: string) => void;
  onBack: () => void;
};

function Quiz({ index, answers, transitioning, onChoose, onBack }: QuizProps) {
  const question = questions[index];
  const progress = ((index + 1) / questions.length) * 100;
  return (
    <section className={`quiz-card question-card ${transitioning ? 'is-leaving' : ''}`} aria-live="polite" aria-labelledby="question-title">
      <div className="question-topline">
        <button className="back-button" type="button" onClick={onBack} aria-label="Voltar">
          <span aria-hidden="true">←</span> Voltar
        </button>
        <span className="question-count">Pergunta {index + 1} de 5</span>
      </div>
      <div className="progress-track" role="progressbar" aria-label="Progresso do quiz" aria-valuemin={0} aria-valuemax={5} aria-valuenow={index + 1}>
        <span style={{ width: `${progress}%` }} />
      </div>
      <span className="eyebrow question-eyebrow"><span className="eyebrow-line" /> UMA DESCOBERTA POR VEZ</span>
      <h1 id="question-title">{question.title}</h1>
      <p className="question-hint">Escolha a opção que mais combina com você.</p>
      <div className="answer-list">
        {question.options.map((option, optionIndex) => (
          <button
            className={`answer-option ${answers[index] === option ? 'answer-option--selected' : ''}`}
            key={option}
            onClick={() => onChoose(option)}
            type="button"
            disabled={transitioning}
          >
            <span className="answer-letter">{String.fromCharCode(65 + optionIndex)}</span>
            <span>{option}</span>
            <span className="answer-arrow" aria-hidden="true">→</span>
          </button>
        ))}
      </div>
      <div className="question-foot"><span>Não existe resposta certa.</span><span>⟡</span></div>
    </section>
  );
}

function Result({ message, onContinue }: { message: string; onContinue: () => void }) {
  return (
    <section className="quiz-card result-card" aria-labelledby="result-title">
      <div className="result-rosette"><BrandMark /></div>
      <span className="eyebrow"><span className="eyebrow-line" /> SEU JEITO DE CRIAR</span>
      <h1 id="result-title">Seu momento de calma está esperando por você!</h1>
      <p className="result-message">{message}</p>
      <p className="result-copy">Você concluiu o quiz e desbloqueou uma condição especial para começar a desenhar suas próprias mandalas.</p>
      <div className="result-offer"><Price large /></div>
      <button className="button button--primary button--wide" onClick={onContinue} type="button">
        {FUNNEL_CONFIG.referencePriceVerified ? 'QUERO APROVEITAR MEU DESCONTO' : 'QUERO APROVEITAR MINHA OFERTA'} <span aria-hidden="true">→</span>
      </button>
      <p className="button-note">A condição é a mesma para todas as pessoas elegíveis.</p>
    </section>
  );
}

function SalesPage({ onBuy, notice }: { onBuy: () => void; notice: string }) {
  return (
    <main className="sales-page">
      <section className="hero section-wrap" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-line" /> UM GUIA PARA CRIAR COM CALMA</span>
          <h1>Descubra o prazer de desenhar lindas mandalas, <em>mesmo que você nunca tenha desenhado antes.</em></h1>
          <p className="hero-lede">Um passatempo criativo, com 50 exercícios guiados para você acompanhar, desenhar e aproveitar momentos de tranquilidade no seu próprio ritmo.</p>
          <div className="hero-details">
            <span><i className="detail-check" /> 50 exercícios guiados</span>
            <span><i className="detail-check" /> 5 níveis de dificuldade</span>
            <span><i className="detail-check" /> Para imprimir em casa</span>
          </div>
          <div className="hero-purchase">
            <Price />
            <button className="button button--primary" onClick={onBuy} type="button">QUERO COMEÇAR A DESENHAR <span aria-hidden="true">→</span></button>
          </div>
          <p className="microcopy">Material digital em PDF • Pronto para imprimir{FUNNEL_CONFIG.postPaymentAccessConfirmed && ' • Acesso após a confirmação do pagamento.'}</p>
        </div>
        <div className="hero-visual"><ProductMockup /></div>
      </section>

      <div className="trust-ribbon"><span>SEM EXPERIÊNCIA PRÉVIA</span><i /> <span>SEM PRESSA</span><i /> <span>NO SEU PRÓPRIO RITMO</span></div>

      <section className="routine-section section-wrap" id="sobre">
        <div className="routine-image-wrap">
          <img className="routine-image" src={WOMAN_IMAGE} alt="Mulher madura desenhando uma mandala em uma mesa iluminada" />
          <span className="image-caption">Um tempo só seu, em casa.</span>
          <span className="image-flower" aria-hidden="true">✳</span>
        </div>
        <div className="routine-copy">
          <span className="eyebrow"><span className="eyebrow-line" /> UM TEMPO PARA VOCÊ</span>
          <h2>Que tal reservar alguns minutos do dia para fazer algo só seu?</h2>
          <p>Entre tantas tarefas e compromissos, encontrar um momento para fazer uma atividade prazerosa pode ser uma ótima maneira de aproveitar o tempo livre.</p>
          <p>Com o Mandalas da Calma, você acompanha desenhos delicados, experimenta novas formas e descobre a satisfação de criar mandalas com suas próprias mãos.</p>
          <p>Tudo de forma simples, sem pressa e sem precisar saber desenhar.</p>
          <div className="signature"><span className="signature-line" /> Criar também é um jeito de aproveitar o dia.</div>
        </div>
      </section>

      <section className="benefits-section" id="beneficios">
        <div className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow"><span className="eyebrow-line" /> O PRAZER ESTÁ NO CAMINHO</span>
            <h2>Mais que desenhos: um passatempo para aproveitar com calma</h2>
            <p>Um convite a observar, experimentar e criar — sempre no seu próprio ritmo.</p>
          </div>
          <div className="benefit-list">
            <article className="benefit-card">
              <span className="benefit-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" /><circle cx="24" cy="24" r="8" /><path d="M24 3v7M24 38v7M3 24h7m28 0h7" /></svg></span>
              <span className="benefit-number">01</span>
              <h3>Atenção e concentração</h3>
              <p>Atividades que convidam a observar formas, seguir padrões e prestar atenção aos detalhes.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M8 36 28 8l11 8-20 28H8v-8Z" /><path d="m24 14 11 8M8 36l11 8M6 44h17" /></svg></span>
              <span className="benefit-number">02</span>
              <h3>Coordenação das mãos</h3>
              <p>Uma oportunidade de praticar movimentos finos das mãos enquanto desenha com calma.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M24 5c8 8 14 14 14 22a14 14 0 0 1-28 0C10 19 16 13 24 5Z" /><path d="M18 29c1 4 4 6 8 6" /></svg></span>
              <span className="benefit-number">03</span>
              <h3>Criatividade em cada traço</h3>
              <p>Experimente formas, combinações e padrões para criar desenhos com as próprias mãos.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M24 5 28.5 19.5 43 24l-14.5 4.5L24 43l-4.5-14.5L5 24l14.5-4.5L24 5Z" /><circle cx="38" cy="10" r="3" /></svg></span>
              <span className="benefit-number">04</span>
              <h3>Uma pausa longe das telas</h3>
              <p>Uma atividade manual para incluir no tempo livre, com papel, lápis e liberdade para escolher.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="inside-section section-wrap" id="conteudo">
        <div className="inside-copy">
          <span className="eyebrow"><span className="eyebrow-line" /> O QUE VEM NO GUIA</span>
          <h2>Cinquenta exercícios. Cinco níveis. Um começo possível para cada pessoa.</h2>
          <p>O guia reúne desenhos com sequências de construção e espaços para você reproduzir cada mandala. Escolha o exercício que chamou sua atenção: não é preciso seguir uma ordem.</p>
          <ul className="inside-points">
            <li><span>01</span> Modelos visuais e passos guiados</li>
            <li><span>02</span> Cinco dificuldades identificadas por estrelas</li>
            <li><span>03</span> Espaço para experimentar cada desenho</li>
            <li><span>04</span> Um PDF para imprimir em casa</li>
          </ul>
        </div>
        <div className="levels-card" aria-label="Cinco níveis de dificuldade">
          <div className="levels-card__top"><span>ENCONTRE SEU RITMO</span><span className="levels-flower">✳</span></div>
          {[1, 2, 3, 4, 5].map((level) => (
            <div className="level-row" key={level}>
              <span className="level-row__label">Nível {level}</span>
              <span className="level-stars" aria-label={`${level} ${level === 1 ? 'estrela' : 'estrelas'}`}>{'★'.repeat(level)}<span>{'☆'.repeat(5 - level)}</span></span>
            </div>
          ))}
          <p>Você escolhe por onde começar.</p>
        </div>
      </section>

      <section className="sample-section">
        <div className="section-wrap sample-inner">
          <div className="sample-copy">
            <span className="eyebrow"><span className="eyebrow-line" /> UM GOSTINHO DO QUE VEM AÍ</span>
            <h2>Formas que se encontram, pétala por pétala.</h2>
            <p>As mandalas convidam a observar a relação entre formas e padrões. Comece por um detalhe, acompanhe a construção e faça uma pausa sempre que quiser.</p>
          </div>
          <figure className="sample-art"><img className="sample-art__provided-image" src={SAMPLE_WORKSHEET_IMAGE} alt="Folha de exercício de mandalas com cinco níveis de dificuldade e desenhos progressivos para praticar." /><figcaption>Exercícios progressivos · Cinco níveis de dificuldade · Folha A4</figcaption></figure>
        </div>
      </section>

      <section className="offer-panel section-wrap" id="oferta">
        <div className="offer-panel__ornament" aria-hidden="true"><BrandMark /></div>
        <div className="offer-panel__copy">
          <span className="eyebrow"><span className="eyebrow-line" /> SEU PRÓXIMO MOMENTO CRIATIVO</span>
          <h2>Comece com uma folha em branco e um desenho de cada vez.</h2>
          <p>Leve o guia para casa e escolha seu primeiro exercício quando sentir vontade.</p>
        </div>
        <div className="offer-panel__action">
          <Price large />
          <button className="button button--primary button--wide" onClick={onBuy} type="button">QUERO COMEÇAR A DESENHAR <span aria-hidden="true">→</span></button>
        </div>
      </section>
      {notice && <p className="checkout-notice section-wrap" id="checkout-notice" role="alert">{notice}</p>}

      <section className="faq-section section-wrap" id="duvidas">
        <div className="faq-title"><span className="eyebrow"><span className="eyebrow-line" /> DÚVIDAS COMUNS</span><h2>Para começar, só precisa de curiosidade.</h2></div>
        <div className="faq-list">
          <details><summary>Preciso saber desenhar?</summary><p>Não. Os exercícios são guiados, com modelos visuais e sequências de construção para acompanhar no seu ritmo.</p></details>
          <details><summary>Preciso seguir os exercícios em ordem?</summary><p>Não. Você pode escolher qualquer exercício do guia, sem obrigação de seguir uma ordem.</p></details>
          <details><summary>O que preciso ter em casa?</summary><p>Papel e lápis são suficientes para começar a experimentar os desenhos.</p></details>
          <details><summary>Como é o material?</summary><p>É um livro digital em PDF, pronto para imprimir e desenhar em casa.</p></details>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <Brand compact />
          <p>Um passatempo criativo para aproveitar no seu próprio ritmo.</p>
          <span>Atividade de lazer. Não é tratamento médico.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
