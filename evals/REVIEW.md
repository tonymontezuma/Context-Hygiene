# Registro de revisão — V1 / 0.2.1 Beta

Data: 2026-09-28. Core único com quatro adapters documentais e OpenCode experimental; pacote de instruções, sem runtime de auditoria. Revisão da versão anterior permanece no histórico Git.

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

## Bootstrap Beta

Prompts PT/EN conferidos contra o texto exibido e copiado nas duas páginas. INSTALL.md define instalação de uma única skill no projeto, reconhecimento por host, tratamento de cópias existentes, limites de permissão e verificação de carregamento. O template Beta Test tem YAML válido e campos para instalação, auditoria e resultados opcionais. Essas verificações documentais não provam execução do bootstrap por um agente.

## Pendente

- Bootstrap ponta a ponta em Codex, Antigravity, OpenCode e Claude Code (Cursor também documentado), incluindo detecção incerta, cópia existente, falta de permissão e necessidade de nova sessão.
- CH01–CH38 em sessões independentes com evidência de resposta por rubrica.
- Instalação/descoberta nativa em Claude Code, Codex, Google Antigravity, Cursor e OpenCode experimental.
- Auditoria real ponta a ponta nas plataformas documentadas e no modo Multiple.
- Teste visual de entrada por screenshots e comparação controlada com/sem skill.
- Validação de economia de tokens, tempo ou dinheiro; não demonstrada por contagens.

Status: **disponível para piloto**, sem alegação de homologação comportamental ou publicação em marketplace. Nenhum PR foi mesclado. O guia [TESTING.md](../docs/TESTING.md) orienta os testes pelos amigos e [FEEDBACK.md](../docs/FEEDBACK.md) explica o retorno voluntário.
