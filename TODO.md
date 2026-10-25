# TODO — Alma em Mandala

## Quiz de descoberta — versão anterior concluída (histórico)
- [x] O quiz começa numa tela de abertura com o título “Descubra um passatempo encantador para os seus momentos de tranquilidade”, o subtítulo “Responda 5 perguntas rápidas e conheça uma forma simples de aproveitar seu tempo com criatividade. Ao final, desbloqueie uma oferta especial.” e o botão “QUERO COMEÇAR”.
- [x] O quiz contém cinco perguntas, uma por tela, com uma barra de progresso discreta, indicação “Pergunta X de 5”, transição suave após seleção e botões grandes e fáceis de tocar; funciona no celular sem exigir ampliação.
- [x] Pergunta 1: “Como você gosta de aproveitar seus momentos livres?” Opções: “Fazendo atividades criativas.”, “Relaxando em casa.”, “Aprendendo algo diferente.”, “Procurando novos passatempos.” Pergunta 2: “Você já experimentou desenhar ou colorir mandalas?” Opções: “Nunca, mas tenho curiosidade.”, “Já colori algumas.”, “Já tentei desenhar.”, “Gosto bastante desse tipo de atividade.” Pergunta 3: “O que mais chama sua atenção em um passatempo?” Opções: “Poder fazer sem pressa.”, “Criar algo bonito com as mãos.”, “Exercitar minha criatividade.”, “Ter um momento longe do celular.” Pergunta 4: “Quanto tempo você gostaria de dedicar a uma atividade tranquila?” Opções: “De 5 a 10 minutos.”, “De 10 a 20 minutos.”, “De 20 a 30 minutos.”, “O tempo que eu quiser.” Pergunta 5: “Qual tipo de desenho você acha mais bonito?” Opções: “Flores e pétalas.”, “Formas geométricas.”, “Desenhos simples e delicados.”, “Mandalas com muitos detalhes.”
- [x] Não solicitar nome, e-mail, telefone ou qualquer dado pessoal para avançar. Armazenar respostas apenas temporariamente em memória para personalizar a conclusão; não atribuir pontuações de saúde, memória ou capacidade cognitiva.

## Refinamento do quiz e conexão com a Oferta 1 — concluído
- [x] Na tela de entrada do quiz (`/`), centralizar melhor o conteúdo verticalmente e garantir que o botão principal permaneça visível e acionável enquanto o aviso de métricas estiver aberto; a mensagem de consentimento continua disponível e as métricas continuam dependendo de consentimento.
- [x] Reformular as cinco perguntas, uma por tela, para descobrir o que a pessoa busca, o que a deixa em dúvida ao começar, que tipo de orientação prefere, qual ritmo combina com sua rotina e o que gostaria de levar da atividade. Manter respostas sem coleta de dados pessoais e sem inferências de saúde ou capacidade cognitiva.
- [x] Personalizar o resultado com base nas respostas e explicar de modo prudente como recursos confirmados do guia podem corresponder ao que a pessoa busca; respostas permanecem somente em memória.
- [x] Ao navegar do quiz para a Oferta 1 (`/oferta`), exibir uma ponte curta baseada nas respostas e nos recursos reais do guia; ao acessar `/oferta` diretamente, manter a página genérica.
- [x] Não alterar o preço promocional, o checkout Cakto, os criativos existentes, a Oferta 2 (`/oferta-b`) nem as demais seções fora do necessário para evitar sobreposição do banner.
- [x] Validar o fluxo completo em desktop/mobile; `pnpm run typecheck`, `pnpm run build`, `git diff --check` e acesso direto a `/`, `/oferta` e `/oferta-b` concluídos sem erro.

## Nova composição mobile da abertura do quiz — concluída
- [x] Na tela mobile de entrada do quiz (`/`), centralizar o título e ordenar a composição como título, mockup da capa e páginas do entregável, subtítulo e botão principal do quiz.
- [x] Reutilizar sem alterações a imagem existente do mockup do guia, que mostra capa e páginas internas; a imagem deve explicar visualmente o que acompanha o produto digital.
- [x] Manter o CTA visível no primeiro viewport do celular, sem exigir rolagem ou aceite de métricas; manter a escolha de consentimento disponível e só carregar métricas após consentimento.
- [x] Evidência: abertura revisada em `320×568`, `360×640`, `375×812` e `1280×800`; typecheck, build e `git diff --check` sem erros.

## Nova imagem enviada para a abertura do quiz — concluída
- [x] Substituir somente a imagem atual entre o título e o subtítulo do quiz pelo arquivo enviado `AlmaemMandala_550páginas.png`, mantendo a proporção e a transparência do criativo; preservar a imagem independente e os demais conteúdos da Oferta 1.
- Evidência: `pnpm run typecheck`, `pnpm run build` e `git diff --check` passaram; o hash do PNG no build corresponde ao arquivo fornecido.

## VSL 16:9 na abertura do quiz — concluída
- [x] Recortar o vídeo autorizado entre `00:00` e `00:27` para um quadro horizontal `16:9`, sem tags ou marcas visíveis; manter o áudio original e aceitar o corte das partes de cima e de baixo. O arquivo de origem tem `576×1024`; a exportação widescreen não pode recuperar detalhes ausentes na origem.
- [x] Inserir o vídeo imediatamente abaixo de “Leva apenas alguns instantes · Sem cadastro” na abertura do quiz (`/`), em player responsivo e inline no celular.
- [x] Iniciar automaticamente e sem som; oferecer somente o controle de ativar/silenciar áudio, sem os controles nativos de play, pausa, progresso ou tela cheia.
- [x] Usar a paleta da marca nos botões do player e do aviso de métricas, com contraste e foco visível.
- [x] Manter o vídeo disponível independentemente da escolha de métricas e deixar “Aceitar” e “Recusar” igualmente acessíveis; o consentimento não é condição para assistir.
- [x] Preservar a visibilidade e a acionabilidade do botão “QUERO COMEÇAR” em mobile; revisar o player em `320×568`, `360×640` e `375×812`.
- Evidência: MP4 H.264/AAC `1280×720`, 30 fps, 27 s; quadros revisados sem marca visível; testes confirmaram autoplay mudo, toggle, ausência de controles nativos, vídeo disponível após recusar métricas e CTA sem overflow horizontal nos três viewports. `pnpm run typecheck`, `pnpm run build` e `git diff --check` passaram.

## Resultado do quiz em mobile — concluída
- [x] Na tela de resultado em celulares, aproximar o botão que leva à Oferta 1 do conteúdo acima, manter um alvo de toque confortável e ajustar a composição para que todo o cartão de resultado, inclusive o botão e seu texto auxiliar, fique visível sem rolagem em `320×568`, `360×640` e `375×812`; preservar o layout desktop, o conteúdo da oferta e a navegação existentes.
- Evidência: o cartão completo coube nos três viewports, com CTA de 54 px de altura; typecheck, build e `git diff --check` passaram.

## Centralização das perguntas no mobile — concluída
- [x] Centralizar o título e o texto de apoio da etapa de perguntas em celulares, mantendo as opções legíveis e fáceis de selecionar, sem alterar o conteúdo ou a navegação do quiz.
- Evidência: título e apoio foram verificados centralizados em `320×568`; a etiqueta da pergunta ficou centralizada com diferença de 0 px em relação ao cartão.

## Cabeçalho no mobile — concluída
- [x] Manter o botão de modo claro/escuro ao lado da logo, na mesma linha superior em telas de celular, sem quebrar para uma segunda linha e preservando uma área de toque confortável.
- Evidência: logo e alternador permaneceram na mesma linha em `320×568`; o alternador manteve altura mínima de 44 px.

## Amostras da página do guia no resultado — concluída
- [x] Abaixo do aviso “A condição é a mesma para todas as pessoas elegíveis.” na tela de resultado, mostrar três cópias idênticas da imagem enviada da página 2, uma ao lado da outra; reutilizar o arquivo original, sem gerar, redesenhar, recortar, esticar ou deformar os traços, mantendo a proporção.
- [x] Manter as três amostras em uma única faixa responsiva e conservar o cartão de resultado, o CTA e o texto auxiliar visíveis no mobile em `320×568`, `360×640` e `375×812`.
- Evidência: o PNG do site tem o mesmo SHA-256 do upload; a faixa foi conferida nos três viewports e `pnpm run typecheck`, `pnpm run build` e `git diff --check` passaram.

## Resultado e oferta — versão anterior concluída (histórico)
- [x] Ao concluir, apresentar a tela com revelação suave, título “Seu momento de calma está esperando por você!” e subtítulo “Você concluiu o quiz e desbloqueou uma condição especial para começar a desenhar suas próprias mandalas.”
- [x] Personalizar a mensagem final como descoberta de preferências, usando mensagens compatíveis com as respostas. Não afirmar que o quiz detectou estado emocional, diagnóstico ou capacidade mental.
- [x] Aplicar a mesma condição comercial a todas as pessoas, independentemente das respostas. O parâmetro promocional inicial editável é R$ 19,90. Exibir “De R$ 47,00” somente quando `referencePriceVerified` for verdadeiro; por padrão, mostrar apenas o preço promocional. Não usar contadores falsos, falsa escassez ou prazo não comprovado.
- [x] O CTA direciona à página `/oferta`, preservando a condição promocional. Mostrar “QUERO APROVEITAR MEU DESCONTO” somente quando `referencePriceVerified` for verdadeiro; caso contrário, mostrar “QUERO APROVEITAR MINHA OFERTA”. Se um cupom real for configurado, transmiti-lo no parâmetro editável exigido pelo checkout.

## Landing page — conteúdo e benefícios implementados
- [x] Apresentar claramente “Mandalas da Calma — Guia de Desenho”, um livro digital PDF com mais de 500 exercícios em cinco dificuldades identificadas por estrelas, modelos visuais, sequências de construção e espaços para reproduzir desenhos. Explicar que a pessoa pode escolher qualquer exercício, sem ordem, e não precisa ter experiência artística.
- [x] Hero com headline “Descubra o prazer de desenhar lindas mandalas, mesmo que você nunca tenha desenhado antes.” e subheadline “Um passatempo criativo, com mais de 500 exercícios guiados para você acompanhar, desenhar e aproveitar momentos de tranquilidade no seu próprio ritmo.”
- [x] Incluir no hero a arte promocional do guia fornecida pelo responsável, identificação de produto digital, preço promocional configurável e CTA “QUERO COMEÇAR A DESENHAR”.
- [x] Substituir o mockup visual principal da oferta (ao lado da mensagem personalizada e antes da faixa de benefícios em mobile) pelo PNG do Drive “Observe e Traçe, amostra.png”; manter a arte fornecida sem gerar, recortar, redesenhar, esticar ou deformar, preservando sua proporção; não alterar a mensagem, os benefícios, o preço ou o CTA.
- Evidência: cópia pública com o mesmo SHA-256 do PNG do Drive; no navegador, a imagem carregou inteira em desktop e mobile, mantendo a proporção `1536×1024` (renderizada a `282×188` em `320px` e `337×225` em `375px`). Typecheck, build e `git diff --check` passaram.
- [ ] Validar páginas individuais reais/autorizadas do PDF: a imagem promocional fornecida contém amostras visuais, mas o PDF ou os arquivos de página originais ainda não foram disponibilizados para verificar se reproduzem o material final.
- [ ] Exibir o microtexto completo “Material digital em PDF • Pronto para imprimir • Acesso após a confirmação do pagamento.” somente após o responsável confirmar a condição real de acesso/entrega. Atualmente o site mostra apenas “Material digital em PDF • Pronto para imprimir”; `postPaymentAccessConfirmed` permanece `false`.
- [x] Incluir a seção com título “Que tal reservar alguns minutos do dia para fazer algo só seu?” e o texto: “Entre tantas tarefas e compromissos, encontrar um momento para fazer uma atividade prazerosa pode ser uma ótima maneira de aproveitar o tempo livre. Com o Mandalas da Calma, você acompanha desenhos delicados, experimenta novas formas e descobre a satisfação de criar mandalas com suas próprias mãos. Tudo de forma simples, sem pressa e sem precisar saber desenhar.” Incluir uma imagem lifestyle fotorealista gerada, de mulher madura realizando atividade manual em ambiente confortável; ela é ambientação visual, não retrato documental ou depoimento.
- [x] Seção “Mais que desenhos: um passatempo para aproveitar com calma”, com o benefício “Atenção e concentração” e o texto “Atividades que convidam a observar formas, seguir padrões e prestar atenção aos detalhes.”
- [x] Manter o título “Coordenação das mãos” e usar somente um benefício permitido: oportunidade de praticar movimentos finos das mãos. O trecho recebido termina em “Coordenação das mãos — O”; não completar a frase ausente com promessa inventada. Outros benefícios comunicados limitam-se a criatividade, percepção de formas/padrões/sequências, satisfação de criar no próprio ritmo e momentos longe das telas.
- [x] Não prometer melhora comprovada da memória, prevenção de Alzheimer, recuperação cognitiva, tratamento de ansiedade ou benefícios médicos garantidos. Não apresentar a atividade como tratamento médico.

## Checkout e mensuração
- [x] Criar parâmetros editáveis para preço promocional, preço anterior e validação explícita, URL HTTPS de checkout, cupom, parâmetro do cupom, confirmação de acesso após pagamento e Meta Pixel. Não inserir URL, gateway, código promocional, credenciais ou ID fictícios. Se a URL de checkout estiver vazia/inválida, os CTAs mostram um aviso claro em vez de simular uma compra.
- [x] Configurar a URL HTTPS Cakto confirmada pelo responsável (`https://pay.cakto.com.br/gwf9s6z_1218085`); os botões de compra redirecionam ao checkout somente após clique.
- [ ] Confirmar que o preço mostrado coincide com o checkout, se há cupom real e qual é a condição efetiva de entrega/acesso. Para notificações de compra, conectar eventos verificados do provedor e obter consentimento para divulgar nomes/valores.
- [x] Preparar o Meta Pixel com ID configurável e eventos básicos; carregar somente após consentimento e quando houver ID válido. Não incluir identificador fictício.

## Identidade visual, responsividade e acessibilidade — concluído
- [x] Usar estética premium, acolhedora e elegante, inspirada em editoriais de bem-estar, livros de atividades para adultos e papelaria premium, sem aparência infantil, promocional enganosa ou template genérico.
- [x] Usar a paleta creme #F7F2EA, roxo #78628C, lavanda #DCD2E8, verde-sálvia #A6B5A2 e grafite #36323A.
- [x] Manter layout simples e mobile-first, legibilidade e contraste, fontes confortáveis, botões grandes, espaçamento generoso e navegação simples para público 50+.

## Alternador de tema acessível — concluído
- [x] Exibir um controle visível de tema em todas as telas e rotas do funil, alternando entre claro e escuro e mantendo a preferência entre visitas.
- [x] Usar texto explícito e ícone, rótulo acessível, estado anunciado, foco de teclado e alvos de toque confortáveis; preservar contraste e legibilidade.
- [x] Não modificar arquivos, cores, filtros, recortes nem aparência dos criativos existentes; aplicar o tema apenas ao fundo, superfícies, texto e controles do site.

## Imagem original da abertura do quiz — histórico
- [x] Usar a imagem enviada pelo responsável no criativo da tela inicial do quiz, ao lado do selo “Um momento no seu ritmo”; manter exatamente esse texto e preservar os demais criativos/ocorrências da mandala no resto do site.
Evidência de conclusão: o Preview gerenciado mostra a imagem inteira em 1280×800 e 375×812, com o selo preservado.
A versão anterior da abertura usava `QUIZ_INTRO_IMAGE`; a atual mostra o mockup existente `OFFER_MOCKUP_IMAGE`, sem alterar o arquivo da arte ou os demais ativos.
O PNG enviado foi armazenado em `/manus-storage/pasted_file_8Ff8W4_image_c8fd4c71.png` sem alteração.

## Mockup da página de oferta
- [x] Na seção hero da oferta, substituir o mockup de capa e páginas pelo arquivo enviado, mantendo o texto “Material digital em PDF • Pronto para imprimir”, os CTAs e os demais criativos do site inalterados.
Evidência de conclusão: o Preview gerenciado mostra o criativo enviado no espaço do mockup em 1280×800 e após o microtexto de PDF na captura mobile completa.
`ProductMockup` usa `OFFER_MOCKUP_IMAGE`; a imagem da abertura do quiz e os demais criativos permanecem em seus locais.
O PNG enviado foi armazenado em `/manus-storage/pasted_file_wN8rV4_image_72bf08d1.png` sem alteração.

## Prévia de exercício na landing page
- [x] Remover o aviso “Ilustração representativa, criada para esta página. Não é uma página original do PDF.” e substituir somente a imagem logo abaixo pelo novo arquivo enviado; preservar os demais textos e criativos, ajustando a legenda para descrever a folha progressiva.
Evidência de conclusão: capturas completas do Preview gerenciado em desktop e mobile mostram a folha enviada e confirmam que o aviso foi removido.
A imagem usa `SAMPLE_WORKSHEET_IMAGE` sem filtro nem recorte; a legenda foi ajustada para descrever a folha progressiva.
O PNG enviado foi armazenado em `/manus-storage/pasted_file_RXP8ql_image_f9e5499c.png` sem alteração.

## Popups e prova social — decisão do responsável
- [x] Manter o site sem popups de conclusão do quiz, compras ou leads, conforme escolha explícita “5. Manter sem popups”.
- [x] Não criar nem exibir notificações simuladas de pessoas, vendas, nomes, cidades, valores ou datas como evidência.

## Identidade da marca do site
- [x] Usar “Alma em Mandala” como marca do site no wordmark, metadados e títulos das rotas; manter “Mandalas da Calma” somente como nome do guia/produto e nas artes fornecidas.

## Portabilidade para GitHub e Vercel
- [x] Criar `vercel.json` na raiz com rewrite de SPA para que `/` e `/oferta` sirvam o `index.html` também em acesso direto/atualização, preservando arquivos estáticos.
- [x] Colocar em `public/images` todos os ativos usados pelo site — incluindo o logotipo, a imagem lifestyle, as três imagens fornecidas — e substituir cada referência `/manus-storage/...` por um caminho local versionável `/images/...` sem modificar os arquivos originais.
- [x] Confirmar que o build de produção inclui todos os ativos em `dist/images`, que não restam caminhos `/manus-storage/` no frontend, e que o manifesto de rotas continua declarando `/` e `/oferta`.
Evidência: `pnpm run typecheck` e `pnpm run build` concluíram sem erro; `vercel.json` foi validado como JSON com rewrite `/(.*)` → `/index.html`.
`dist/images` contém os cinco ativos usados pelo site, e os hashes dos três PNGs em `dist` correspondem aos originais fornecidos.
No Preview local, `/`, `/oferta`, os quatro caminhos de imagem e `/manus-routes.json` retornaram HTTP 200; não restam referências `/manus-storage/` em `src`.

## Ajuste visual da abertura do quiz — concluído
- [x] Remover o brilho ✳ e a forma decorativa `intro-art__halo` da ilustração inicial; manter a foto enviada, o selo “um momento no seu ritmo” e o restante do quiz inalterados.
- Evidência: após recarregar `/`, o Preview mostra a foto e o selo sem o brilho ou halo; o código e o CSS não têm mais referências a essas duas decorações.


## Variação B da página de vendas — concluída
- [x] Criar a rota independente `/oferta-b` para comparar com `/oferta`, sem substituir ou alterar a versão A; manter A e B acessíveis por URLs distintas, sem dividir aleatoriamente o tráfego.
- [x] Aplicar à versão B uma identidade vibrante inspirada na referência enviada — marfim, magenta-framboesa, dourado, tipografia serifada e composição editorial — preservando a marca “Alma em Mandala” e o nome “Mandalas da Calma”, sem copiar a marca, os textos, as imagens, os bônus ou as alegações da referência.
- [x] Mostrar claramente o que está confirmado no produto: guia digital em PDF; mais de 500 exercícios guiados; cinco níveis de dificuldade identificados por estrelas; modelos visuais e sequências de construção; espaços para reproduzir os desenhos; material pronto para imprimir em casa.
- [x] Reutilizar o mockup atual com identificação de ilustrativo e a folha de exercício de amostra já fornecida; não criar bônus, formatos, quantidade de arquivos, prazo ou canal de entrega não confirmados.
- [x] Preservar na B o preço promocional configurado e o checkout Cakto confirmado `https://pay.cakto.com.br/gwf9s6z_1218085`; carregar métricas somente mediante consentimento e manter o CTA móvel sem cobrir o aviso de consentimento.
- [x] Manter identidade acessível em celular e desktop, alternador de tema, navegação por teclado e o manifesto `public/manus-routes.json` sincronizado com as rotas disponíveis.
- [x] Validar tipos, build, manifesto e acesso direto às duas rotas; publicar somente se a versão B estiver íntegra e a A permanecer inalterada.

Evidência local: `pnpm run build` e `git diff --check` passaram; manifesto e assets responderam HTTP 200.
Evidência pública: o bundle publicado contém a versão B; `/oferta` e `/oferta-b` retornam HTTP 200.
Commit de publicação: `528fede` (`Add A/B landing page variant B`).

Evidência local: `pnpm run build` e `git diff --check` passaram; manifesto e assets responderam HTTP 200.
Evidência pública: o bundle publicado contém a versão B; `/oferta` e `/oferta-b` retornam HTTP 200.
Commit de publicação: `528fede` (`Add A/B landing page variant B`).
