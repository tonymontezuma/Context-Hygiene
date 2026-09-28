# Registro de revisão — V1 / 0.2.0

Data: 2026-09-28. Core único com quatro adapters documentais; pacote de instruções, sem runtime de auditoria. Revisão da versão anterior permanece no histórico Git.

## Executado nesta versão

| Verificação | Resultado |
|---|---|
| Skill pelo quick_validate.py de skill-creator | Passou |
| Manifesto Codex pelo validate_plugin.py de plugin-creator | Passou |
| Manifesto portátil contra schema Agent Plugins declarado | Passou |
| Nome, versão, descrição, autor, licença e repositório consistentes | Passou |
| Uma única skill descobrível e referências locais resolvidas | Passou |
| Estrutura JSON dos 38 casos, IDs únicos e rubricas | Passou |
| Schema de métricas: payload válido e medidas desconhecidas | Passou |
| Schema rejeita campos extras em todos os níveis, versão privada e valores negativos | Passou |
| Links Markdown/HTML, âncoras e metadados PT/EN | Passou |
| git diff --check e sintaxe do JavaScript do site | Passou |

Validadores e dependências temporários ficaram fora do produto. A validação de schema é estrutural: não demonstra consentimento, anonimização efetiva ou obediência do modelo. Os perfis incluem fontes oficiais consultadas em 2026-09-28. O site tem registro próprio em [QA.md](../docs/QA.md).

## Pendente

- CH01–CH38 em sessões independentes com evidência de resposta por rubrica.
- Instalação/descoberta nativa em Claude Code, Codex, Google Antigravity e Cursor.
- Auditoria real ponta a ponta nas quatro plataformas e no modo Multiple.
- Teste visual de entrada por screenshots e comparação controlada com/sem skill.
- Validação de economia de tokens, tempo ou dinheiro; não demonstrada por contagens.

Status: **disponível para piloto**, sem alegação de homologação comportamental ou publicação em marketplace. Nenhum PR foi mesclado. O guia [TESTING.md](../docs/TESTING.md) orienta os testes pelos amigos e [FEEDBACK.md](../docs/FEEDBACK.md) explica o retorno voluntário.
