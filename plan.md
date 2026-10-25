# Plano — Variação B da página de vendas

## Objetivo e abordagem

Adicionar `/oferta-b` ao site existente para comparação com `/oferta`, preservando integralmente a versão A. A rota B terá identidade editorial mais vibrante inspirada na referência fornecida: fundo marfim, faixa e acentos magenta-framboesa, destaques dourados, títulos serifados e exposição visual central do produto. Manter a marca Alma em Mandala e o nome Mandalas da Calma; não copiar a marca, os textos, as artes, os bônus nem as alegações da página de referência.

A página apresentará apenas os fatos confirmados no site e no projeto: guia digital em PDF, mais de 500 exercícios guiados, cinco níveis de dificuldade identificados por estrelas, modelos visuais, sequências de construção, espaço para reproduzir os desenhos e impressão em casa. Reutilizar o mockup atual, identificado como ilustrativo, e a folha de prática de amostra já disponível. Não inventar bônus, formatos, quantidade de arquivos, prazo ou canal de entrega.

Preservar o preço promocional e a URL Cakto já configurados. A rota B compartilha a política de consentimento existente e eventos do pixel. O teste será realizado por URLs/campanhas distintas; esta alteração não implementa distribuição aleatória de tráfego.

## Estrutura do projeto

- `src/App.tsx`: seleção da página pela rota, navegação direta e histórico; a rota A continua usando `SalesPage`.
- `src/components/SalesPageB.tsx`: conteúdo, navegação por âncoras, preço, CTAs, FAQ e CTA fixo móvel da variação B.
- `src/components/SalesPageB.css`: identidade visual B, layout responsivo e comportamento do modo escuro, isolados da página A.
- `public/manus-routes.json`: declaração da rota B para refletir o conjunto de páginas.
- `TODO.md`: critérios e estado do trabalho.

## Validação

Usar os scripts existentes de tipo e build. Inspecionar a rota B e o manifesto localmente; confirmar que `/oferta` continua resolvendo para a versão A e que a B mantém o checkout já configurado.

## Ajustes do quiz e ponte com a Oferta 1

Reaproveitar a identidade visual existente. Na entrada mobile do quiz (`/`), apresentar a sequência título centralizado, mockup existente da capa e páginas do entregável, subtítulo e CTA; manter o botão visível no primeiro viewport e sem sobreposição do aviso de métricas. Reescrever as cinco perguntas para identificar objetivo, dúvida inicial, apoio desejado, ritmo e resultado esperado; as respostas devem conduzir a uma explicação personalizada e prudente do produto, sem inferências clínicas ou promessas de resultado. Ao seguir do quiz para `/oferta`, apresentar uma mensagem curta que relacione a resposta a recursos confirmados do guia (modelos visuais, sequências de construção, cinco níveis e escolha de exercícios sem ordem). A personalização permanece em memória, sem persistir respostas. Preservar o arquivo original do mockup, o preço, checkout, demais criativos, manifesto de rotas e a Oferta 2 (`/oferta-b`).

Implementar nos componentes e estilos existentes de `src/App.tsx` e `src/styles.css`; não criar novas rotas nem mudar configuração de compra. Validar com os comandos de tipo/build já existentes e verificar visualmente o ponto de entrada do quiz em desktop e mobile por causa da sobreposição reportada.
