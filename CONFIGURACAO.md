# Configuração comercial e publicação

A experiência de quiz e a página de oferta estão implementadas. Os botões de compra redirecionam, após clique, ao checkout Cakto fornecido pelo responsável do produto. O site não processa pagamentos nem recebe confirmação de transação por esse link. Por decisão do responsável, não exibe popups de quiz, compras ou leads.

## Antes da divulgação

Em `src/config.ts`, confirme:

- `promotionalPrice`: confirme o preço final mostrado no site com o valor do checkout.
- `referencePrice`: altere somente se houver preço anterior real e comprovável.
- `referencePriceVerified`: mantenha `false` até essa comprovação; nesse estado o site não mostra o preço anterior e o CTA evita alegar desconto.
- `postPaymentAccessConfirmed`: mantenha `false` até a entrega confirmar acesso após pagamento; só então a página inclui essa condição no microtexto.
- `checkoutUrl`: atualmente `https://pay.cakto.com.br/gwf9s6z_1218085`, confirmado pelo responsável; atualize se o endereço oficial mudar. O código aceita apenas destinos HTTPS e redireciona quando o botão é acionado.
- `couponCode`: informe apenas um cupom real, se aplicável.
- `couponParameter`: ajuste para o nome exato do parâmetro que o checkout espera para o cupom (por padrão, `coupon`).
- `metaPixelId`: informe um ID válido do Meta Pixel. O código aguarda consentimento para inicializar métricas; com o campo vazio, não carrega o Pixel.

O preço de R$ 19,90 é o parâmetro inicial editável solicitado no briefing, não uma confirmação de preço final. Confirme que o checkout Cakto aplica o mesmo preço antes da publicação. A entrega do PDF e o acesso após pagamento dependem da configuração real do checkout/provedor.

## Imagens versionadas

Os ativos usados pelo site estão em `public/images` e são carregados por caminhos locais `/images/...`. Assim, a publicação não depende do armazenamento de arquivos do Manus. Os arquivos PNG enviados pelo responsável foram copiados sem alteração; a imagem lifestyle foi copiada do Preview como WebP.

## Vercel

O arquivo `vercel.json` na raiz reescreve as rotas da aplicação SPA para `index.html`, permitindo acesso direto e atualização em `/` e `/oferta` sem erro 404. Para importar no Vercel, use a raiz do repositório, preset Vite, comando de build `pnpm run build` e diretório de saída `dist`; deixe o comando de instalação em detecção automática de pnpm.

## Imagens e fidelidade ao PDF

A imagem lifestyle é uma composição fotorealista gerada por IA, com estética cinematográfica/editorial solicitada pelo usuário; ela não representa uma pessoa real nem um depoimento. As imagens do mockup e da folha de exercício foram fornecidas pelo responsável e permanecem sem edição. O PDF completo não foi anexado.

## Trecho do anexo truncado

O arquivo recebido termina no benefício “Coordenação das mãos — O”. A copy do site usa somente o benefício permitido no briefing — oportunidade de praticar movimentos finos das mãos — e não completa a frase ausente com uma promessa inventada.
