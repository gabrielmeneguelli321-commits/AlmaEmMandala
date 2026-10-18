# TODO — Alma em Mandala

## Quiz de descoberta — concluído
- [x] O quiz começa numa tela de abertura com o título “Descubra um passatempo encantador para os seus momentos de tranquilidade”, o subtítulo “Responda 5 perguntas rápidas e conheça uma forma simples de aproveitar seu tempo com criatividade. Ao final, desbloqueie uma oferta especial.” e o botão “QUERO COMEÇAR”.
- [x] O quiz contém cinco perguntas, uma por tela, com uma barra de progresso discreta, indicação “Pergunta X de 5”, transição suave após seleção e botões grandes e fáceis de tocar; funciona no celular sem exigir ampliação.
- [x] Pergunta 1: “Como você gosta de aproveitar seus momentos livres?” Opções: “Fazendo atividades criativas.”, “Relaxando em casa.”, “Aprendendo algo diferente.”, “Procurando novos passatempos.” Pergunta 2: “Você já experimentou desenhar ou colorir mandalas?” Opções: “Nunca, mas tenho curiosidade.”, “Já colori algumas.”, “Já tentei desenhar.”, “Gosto bastante desse tipo de atividade.” Pergunta 3: “O que mais chama sua atenção em um passatempo?” Opções: “Poder fazer sem pressa.”, “Criar algo bonito com as mãos.”, “Exercitar minha criatividade.”, “Ter um momento longe do celular.” Pergunta 4: “Quanto tempo você gostaria de dedicar a uma atividade tranquila?” Opções: “De 5 a 10 minutos.”, “De 10 a 20 minutos.”, “De 20 a 30 minutos.”, “O tempo que eu quiser.” Pergunta 5: “Qual tipo de desenho você acha mais bonito?” Opções: “Flores e pétalas.”, “Formas geométricas.”, “Desenhos simples e delicados.”, “Mandalas com muitos detalhes.”
- [x] Não solicitar nome, e-mail, telefone ou qualquer dado pessoal para avançar. Armazenar respostas apenas temporariamente em memória para personalizar a conclusão; não atribuir pontuações de saúde, memória ou capacidade cognitiva.

## Resultado e oferta — concluído
- [x] Ao concluir, apresentar a tela com revelação suave, título “Seu momento de calma está esperando por você!” e subtítulo “Você concluiu o quiz e desbloqueou uma condição especial para começar a desenhar suas próprias mandalas.”
- [x] Personalizar a mensagem final como descoberta de preferências, usando mensagens compatíveis com as respostas. Não afirmar que o quiz detectou estado emocional, diagnóstico ou capacidade mental.
- [x] Aplicar a mesma condição comercial a todas as pessoas, independentemente das respostas. O parâmetro promocional inicial editável é R$ 19,90. Exibir “De R$ 47,00” somente quando `referencePriceVerified` for verdadeiro; por padrão, mostrar apenas o preço promocional. Não usar contadores falsos, falsa escassez ou prazo não comprovado.
- [x] O CTA direciona à página `/oferta`, preservando a condição promocional. Mostrar “QUERO APROVEITAR MEU DESCONTO” somente quando `referencePriceVerified` for verdadeiro; caso contrário, mostrar “QUERO APROVEITAR MINHA OFERTA”. Se um cupom real for configurado, transmiti-lo no parâmetro editável exigido pelo checkout.

## Landing page — conteúdo e benefícios implementados
- [x] Apresentar claramente “Mandalas da Calma — Guia de Desenho”, um livro digital PDF com mais de 500 exercícios em cinco dificuldades identificadas por estrelas, modelos visuais, sequências de construção e espaços para reproduzir desenhos. Explicar que a pessoa pode escolher qualquer exercício, sem ordem, e não precisa ter experiência artística.
- [x] Hero com headline “Descubra o prazer de desenhar lindas mandalas, mesmo que você nunca tenha desenhado antes.” e subheadline “Um passatempo criativo, com mais de 500 exercícios guiados para você acompanhar, desenhar e aproveitar momentos de tranquilidade no seu próprio ritmo.”
- [x] Incluir mockup profissional do livro, identificação de produto digital, preço promocional configurável e CTA “QUERO COMEÇAR A DESENHAR”. A arte que aparece no mockup é identificada como ilustrativa.
- [ ] Substituir a arte representativa por imagens reais/autorizadas das páginas do PDF: o PDF e as páginas originais não foram fornecidos no anexo, então este requisito permanece pendente até o responsável disponibilizar os arquivos.
- [ ] Exibir o microtexto completo “Material digital em PDF • Pronto para imprimir • Acesso após a confirmação do pagamento.” somente após o responsável confirmar a condição real de acesso/entrega. Atualmente o site mostra apenas “Material digital em PDF • Pronto para imprimir”; `postPaymentAccessConfirmed` permanece `false`.
- [x] Incluir a seção com título “Que tal reservar alguns minutos do dia para fazer algo só seu?” e o texto: “Entre tantas tarefas e compromissos, encontrar um momento para fazer uma atividade prazerosa pode ser uma ótima maneira de aproveitar o tempo livre. Com o Mandalas da Calma, você acompanha desenhos delicados, experimenta novas formas e descobre a satisfação de criar mandalas com suas próprias mãos. Tudo de forma simples, sem pressa e sem precisar saber desenhar.” Incluir uma imagem lifestyle fotorealista gerada, de mulher madura realizando atividade manual em ambiente confortável; ela é ambientação visual, não retrato documental ou depoimento.
- [x] Seção “Mais que desenhos: um passatempo para aproveitar com calma”, com o benefício “Atenção e concentração” e o texto “Atividades que convidam a observar formas, seguir padrões e prestar atenção aos detalhes.”
- [x] Manter o título “Coordenação das mãos” e usar somente um benefício permitido: oportunidade de praticar movimentos finos das mãos. O trecho recebido termina em “Coordenação das mãos — O”; não completar a frase ausente com promessa inventada. Outros benefícios comunicados limitam-se a criatividade, percepção de formas/padrões/sequências, satisfação de criar no próprio ritmo e momentos longe das telas.
- [x] Não prometer melhora comprovada da memória, prevenção de Alzheimer, recuperação cognitiva, tratamento de ansiedade ou benefícios médicos garantidos. Não apresentar a atividade como tratamento médico.

## Checkout e mensuração
- [x] Criar parâmetros editáveis para preço promocional, preço anterior e validação explícita, URL HTTPS de checkout, cupom, parâmetro do cupom, confirmação de acesso após pagamento e Meta Pixel. Não inserir URL, gateway, código promocional, credenciais ou ID fictícios. Se a URL de checkout estiver vazia/inválida, os CTAs mostram um aviso claro em vez de simular uma compra.
- [x] Configurar a URL HTTPS Cakto fornecida (`https://pay.cakto.com.br/3cvx2dz_1217210`); os botões de compra redirecionam ao checkout somente após clique.
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

## Imagem da abertura do quiz
- [x] Usar a imagem enviada pelo responsável no criativo da tela inicial do quiz, ao lado do selo “Um momento no seu ritmo”; manter exatamente esse texto e preservar os demais criativos/ocorrências da mandala no resto do site.
Evidência de conclusão: o Preview gerenciado mostra a imagem inteira em 1280×800 e 375×812, com o selo preservado.
A abertura do quiz usa `QUIZ_INTRO_IMAGE`; as demais seções continuam usando seus ativos originais.
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
