# Configuração comercial antes da publicação

A experiência de quiz e a página de oferta estão implementadas. Os botões de compra agora redirecionam, após clique, ao checkout Cakto fornecido pelo responsável do produto. O site não processa pagamento nem recebe confirmação de transação por esse link.

Em `src/config.ts`, confirme antes da divulgação:

- `promotionalPrice`: confirme o preço final mostrado no site com o valor do checkout.
- `referencePrice`: altere somente se houver preço anterior real e comprovável.
- `referencePriceVerified`: mantenha `false` até essa comprovação; nesse estado o site não mostra o preço anterior e o CTA evita alegar desconto.
- `postPaymentAccessConfirmed`: mantenha `false` até a entrega confirmar acesso após pagamento; só então a página inclui essa condição no microtexto.
- `checkoutUrl`: atualmente `https://pay.cakto.com.br/3cvx2dz_1217210`; atualize se o endereço oficial mudar. O código aceita apenas destinos HTTPS e redireciona quando o botão é acionado.
- `couponCode`: informe apenas um cupom real, se aplicável.
- `couponParameter`: ajuste para o nome exato do parâmetro que o checkout espera para o cupom (por padrão, `coupon`).
- `metaPixelId`: informe um ID válido do Meta Pixel. O código aguarda consentimento para inicializar métricas; com o campo vazio, não carrega o Pixel.

O preço de R$ 19,90 é o parâmetro inicial editável solicitado no briefing, não uma confirmação de preço final. Confirme que o checkout Cakto aplica o mesmo preço antes da publicação. Conforme a escolha do responsável, o site permanece sem popups de conclusão de quiz, compras ou leads. O botão só redireciona ao checkout após clique e este site não recebe confirmação de pagamento. A entrega do PDF e o acesso após pagamento dependem da configuração real do checkout/provedor.

## Imagens e fidelidade ao PDF

A imagem lifestyle é uma composição fotorealista gerada por IA, com estética cinematográfica/editorial solicitada pelo usuário; ela não representa uma pessoa real nem um depoimento. A arte da mandala também é original e representativa; não deve ser apresentada como página real do PDF. O PDF e as suas páginas originais não foram anexados. Substitua a arte representativa por imagens autorizadas das páginas reais quando estiverem disponíveis.

## Trecho do anexo truncado

O arquivo recebido termina no benefício “Coordenação das mãos — O”. A copy do site usa somente o benefício permitido no briefing — oportunidade de praticar movimentos finos das mãos — e não completa a frase ausente com uma promessa inventada.
