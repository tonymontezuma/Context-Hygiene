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
