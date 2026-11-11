# Códice para a indústria

Apresentação comercial da Códice para a indústria: display como serviço (a marca assina o display por módulo, por mês; a Códice fabrica pela NEOBAND, instala, mantém, troca a comunicação e mede).

- No ar: https://projetos.75lab.com.br/codice-industria/
- 15 telas em palco fixo 1600 × 900, tudo em `index.html`. Capítulos: abertura, o problema, a solução, prova e dados, investimento, próximo passo.
- Cadastro de entrada igual ao da apresentação para o varejo: vai para a função `leadApresentacao` (planilha "Códice · Acessos à apresentação"; a coluna Página mostra de qual apresentação veio).
- `?pdf=1` monta todas as telas empilhadas, com o conteúdo de clique aberto. O PDF do botão é gerado por `node fonte/capturas.mjs <url> codice-industria.pdf pdf`.
- Depois de publicar mudança, trocar o número em `versao.txt` e no `<meta id="versaoDeck">` para o navegador não ficar com a versão velha.
- Fontes dos dados no pé de cada tela. Valores de compra (R$ 3.200, R$ 350, R$ 70) são do plano de negócio da Códice.
