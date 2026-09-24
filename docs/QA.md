# Verificação da apresentação

Data: 2026-09-24. Escopo: site estático; não substitui os evals conversacionais do plugin.

- Layout inspecionado em capturas desktop e mobile. Larguras de 1440, 768, 390 e 320 px sem overflow horizontal.
- Visualização interativa: 389 pontos ativos em Antes, 49 em Depois.
- Percentuais conferidos com os dados do benchmark: total 87,4%; user 78,5%; synced 62,5%; plugin 93,3%.
- Cópia do prompt confirmada; FAQ abre; controle de animações alterna o estado.
- Preferência por movimento reduzido respeitada: transições com duração zero e rolagem sem animação.
- Sem JavaScript: título, conteúdo, métricas e barras disponíveis; botões dependentes de JavaScript ficam ocultos.
- axe-core, regras WCAG 2 A/AA e 2.1 AA: nenhuma violação detectada nas verificações desktop e mobile. Isso não constitui certificação integral de acessibilidade.
- Console do navegador sem erros ou warnings durante os testes locais.
- Âncoras internas, arquivos locais e destinos dos links conferidos. Sintaxe JavaScript e formatação Git verificadas.

Ferramentas de QA e capturas foram mantidas fora do repositório; não entram no site nem na skill. O site não inclui rastreadores, fontes remotas ou bibliotecas de execução externas.

## Versões PT/EN

- Português na raiz e inglês em `/en/`, com idioma do documento, título, descrição, Open Graph, canonical e hreflang correspondentes.
- Seletor de idioma testado nos dois sentidos, preservando a âncora `#resultados` com JavaScript. Navegação PT → EN também confirmada sem JavaScript.
- Ambas as versões sem overflow nas larguras 1440, 1024, 768, 390 e 320 px; visual desktop e mobile inspecionado.
- Botões antes/depois mantêm 389 e 49 pontos ativos nos dois idiomas. Cópia do prompt e fallback de seleção de texto confirmados em português e inglês.
- axe-core sem violações detectadas nas duas versões, em desktop e mobile, nas mesmas regras indicadas acima.
- Estilos, scripts, logo e âncoras relativos conferidos em ambas as rotas. Documentação externa ainda em português identificada com `(PT)` na página inglesa.

## Prévia da V2

- Conteúdo PT/EN alinhado à direção documentada no README: companion opcional, somente leitura, escopos explícitos e snapshots comparáveis; marcado como planejamento sem data.
- Ambas as versões inspecionadas no navegador a 1280 px, com três cartões e sem overflow horizontal. CSS empilha os cartões abaixo de 800 px; esse breakpoint não foi validado visualmente nesta alteração.
- Novos pares de texto conferidos: secundário/superfície 8,83:1; coral/superfície 7,64:1; texto escuro/coral 8,54:1 (mínimo 4,5:1).
- Avaliações ainda não ativas. Proposta e perguntas em FEEDBACK.md; depende de criar e conectar um formulário real.

## Menu de seções

- Seis âncoras internas válidas em PT/EN, sem IDs duplicados, e link externo do GitHub.
- Menu revisado visualmente em desktop (1280 px) e em frames responsivos (PT 320 px / EN 390 px), com todos os links visíveis e quebra de linha.
- Clique em V2 confirmado no navegador. Navegação usa links HTML nativos e não depende de JavaScript.

## CTAs e cabeçalho fixo

- Seis chamadas adicionais ao repositório em cada idioma, uma por seção, preservando os links específicos de documentação.
- Cabeçalho sticky com fundo opaco. Menu horizontal em telas até 760 px para manter a altura compacta.
- Clique em O processo no desktop: cabeçalho em y=0, limite inferior 124 px; seção começa em 144 px.
- Navegação a V2 em frames de 320 px (PT) e 390 px (EN): seção começa em aproximadamente 147 px, abaixo do cabeçalho de 127 px; sem overflow horizontal da página.
- Altura reservada para âncoras atualizada com ResizeObserver; fallback CSS e links nativos preservam a navegação sem JavaScript.
- Sintaxe JavaScript e verificação de whitespace do Git passaram.
