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
