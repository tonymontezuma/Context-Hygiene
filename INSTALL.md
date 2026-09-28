# Context Hygiene — Beta installation / instalação

V1 / 0.2.1 Beta. Este é o ponto de entrada para o **Beta Bootstrap Prompt**. Fonte única: https://github.com/tonymontezuma/Context-Hygiene.git. O bootstrap é um pedido ao coding agent, não um instalador executável nem um comando universal.

## Objetivo

Instalar somente a skill `audit-context` e suas referências neste projeto, verificar seu carregamento e iniciar o primeiro Project Audit. Não exige marketplace, MCP, conta, dependências ou componentes opcionais.

## Instalação solicitada

Identifique o host por evidências da sessão/runtime; o modelo usado ou a presença de uma pasta não provam qual agente está executando. Identifique o projeto ativo e use o destino correspondente abaixo. Se a plataforma, raiz do projeto ou permissão estiver ambígua, peça apenas a informação faltante; não improvise nem examine outros projetos.

Obtenha este repositório oficial em uma pasta temporária isolada, ou use uma cópia oficial já disponível com origem verificada e sem mudanças locais na skill. Leia README e este INSTALL; registre a versão e o commit da fonte. Copie a pasta completa `skills/audit-context/`, com suas referências, para **um único destino de projeto**. Não execute scripts do repositório nem instale bibliotecas: o pacote contém somente instruções e referências.

| Host confirmado | Destino neste projeto | Verificação de descoberta |
|---|---|---|
| Codex | `.agents/skills/audit-context/` | Skill `audit-context` no seletor/catálogo; no CLI/IDE, `/skills` ou `$audit-context`, conforme a interface |
| Google Antigravity | `.agents/skills/audit-context/` | Skill listada em Customizations ou no catálogo da superfície em uso; registrar IDE/2.0/CLI |
| Claude Code | `.claude/skills/audit-context/` | Skill `audit-context` no catálogo/menu de skills da sessão |
| OpenCode — experimental | `.opencode/skills/audit-context/` | ID `audit-context` no catálogo e carregamento pela ferramenta de skills do host; confirmar V1/V2 |
| Cursor | `.cursor/skills/audit-context/` | Skill `audit-context` disponível no catálogo da interface |

## Invariantes da instalação

- O pedido de bootstrap autoriza a instalação acima e a verificação mínima necessária. Respeite as permissões do host. Não instala/configura outros Skills, Agents, MCPs, Plugins, Rules ou Hooks, não altera permissões e não faz commit/push no projeto do testador.
- Verifique se `audit-context` ou a antiga `audit-claude-code` já está disponível no catálogo ou no destino escolhido. Reuse uma cópia idêntica; se houver versão diferente, personalização, link simbólico ou origem incerta, apresente o conflito e o plano de atualização antes de pedir autorização. Não sobrescreva nem remova a instalação existente. Se precisar conferir outra origem, peça o caminho exato em vez de varrer a máquina.
- Não instale globalmente nem duplique a skill em vários destinos. Se outro agente já usa a mesma cópia compatível, confirme descoberta antes de criar outra. Falta de rede, escrita ou reconhecimento é um resultado a reportar, não autorização para contornar restrições.
- Análises, alterações e ferramentas opcionais que possam consumir tempo, tokens ou dinheiro exigem autorização após explicar finalidade e benefício esperado. O fluxo básico já solicitado não precisa de nova confirmação a cada etapa.

## Verificar e iniciar

Compare os arquivos copiados com a fonte, confirme `name: audit-context` e que as referências estão presentes. Isso verifica arquivos, **não descoberta nativa**. Carregue a skill pelo mecanismo disponível no host e confirme o Core e o adapter selecionado. Registre separadamente: arquivos instalados; skill descoberta/carregada; auditoria iniciada.

Se o host exigir uma conversa nova, informe esse requisito e o pedido de retomada: “Use audit-context para iniciar meu primeiro Project Audit”. Não diga que a auditoria começou quando a skill ainda não está disponível. Se a instalação nativa for inviável, explique a limitação e ofereça o [modo conversacional](docs/TESTING.md), com consentimento para esse caminho alternativo.

Depois do carregamento, encerre a fase de instalação. O Core passa a trabalhar com evidências fornecidas pelo usuário, sem varrer projeto/computador. Identifique as tarefas essenciais, peça a menor evidência para inventário e baseline e explique conceitos quando relevantes. Não avalie recursos instalados como bons/ruins por origem ou quantidade. Siga recomendação → decisão do usuário → uma mudança manual → medir → keep/revert.

Informe o destino, versão/commit, resultado de cada verificação e como desfazer **somente a cópia criada pelo bootstrap**, se o usuário desejar. Não remova cópias preexistentes. Feedback é manual pelo [Beta Test](https://github.com/tonymontezuma/Context-Hygiene/issues/new?template=beta-test.yml); não envie dados ou métricas por conta própria.

## Status e fontes

Instalação ponta a ponta ainda não homologada nesses hosts. Codex, Antigravity, OpenCode e Claude Code são alvos do mesmo bootstrap; Cursor continua documentado. O adapter OpenCode é experimental. Os caminhos foram conferidos na documentação dos fabricantes em 2026-09-28: [Codex](https://learn.chatgpt.com/docs/build-skills), [Antigravity](https://www.antigravity.google/docs/skills/), [Claude Code](https://code.claude.com/docs/en/skills), [OpenCode V1](https://opencode.ai/docs/skills), [OpenCode V2](https://opencode.ai/v2/docs/skills) e [Cursor](https://cursor.com/docs/skills). São referências de manutenção; o agente que recebe o bootstrap usa as instruções deste repositório como fonte, sem buscar instaladores de terceiros.

## English quick guide

Install only the complete `skills/audit-context/` directory from this official repository into the single project path for the confirmed host in the table above. Use session/runtime evidence, not the model name, to identify the host. Ask if the host or project root is unclear. Record the source version/commit. No optional packages, global installation, permission changes or project commits are authorized.

Reuse an identical existing installation. For a different, customized or uncertain copy, show the conflict and proposed update and request authorization before replacing anything. Respect host permissions. Verify copied files separately from native discovery/loading. If a new session is required, give the resume prompt; do not claim the audit started. If native installation is unavailable, explain the limit and offer the conversational fallback with consent.

After loading the Core and the applicable adapter, start the first Project Audit using user-provided evidence. Installation access does not authorize an environment scan during the audit. Explain concepts when relevant, assess project relevance, and ask before optional analysis/actions that may consume time, tokens or money. Report results through the Beta Test template only if the user chooses to submit it manually. All native end-to-end tests remain pending; OpenCode is experimental.
