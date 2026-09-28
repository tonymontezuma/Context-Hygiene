# Verificação da apresentação — V1 / 0.2.0

Data: 2026-09-28. Site estático PT/EN; estes resultados não homologam o comportamento da skill.

## Verificado nesta versão

- Identidade visual existente preservada; copy, metadados, quatro plataformas, Teach When Relevant, WHAT / WHERE / WHEN, Multiple e convite ao piloto atualizados nos dois idiomas.
- Navegador real: PT/EN sem overflow horizontal em 320, 375, 414, 768, 1024, 1280 e 1440 px (largura do documento igual à viewport).
- Captura desktop PT e capturas de viewport mobile PT/EN inspecionadas. Conteúdo principal legível a 320 px. Captura mobile de página inteira apresentou artefatos de repetição; foi substituída pela inspeção da viewport.
- Links locais e Markdown, âncoras, IDs únicos, um H1 por página e metadados conferidos. Tag existente de Search Console e GA4 preservadas.
- Menu mobile abre, Escape fecha; FAQ abre; botão de cópia produz confirmação; visual histórico alterna 389/49 nos dois idiomas. Nenhum erro de página durante essas interações.
- Sintaxe JavaScript e git diff --check passaram.

O caso 389 → 49 está marcado como histórico, sem relação causal demonstrada com a versão 0.2.0, tokens, tempo ou dinheiro. A FAQ antiga que sugeria possível redução de 87,4% dos tokens foi corrigida.

O site mantém GA4, separado das métricas opt-in da auditoria, conforme [PRIVACY.md](../PRIVACY.md). Não há formulário novo, endpoint de métricas ou envio de auditorias ao Analytics. Ferramentas e capturas de QA ficaram fora do repositório.

## Limites

Não foram repetidos nesta versão a suíte axe-core, todos os testes sem JavaScript nem a avaliação de movimento reduzido. Resultados da versão anterior estão no histórico Git e não são apresentados como verificação atual. Compatibilidade nativa do plugin e avaliações conversacionais constam separadamente em [REVIEW.md](../evals/REVIEW.md).
