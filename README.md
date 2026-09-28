# Context Hygiene

**O contexto certo, para o projeto certo, no momento certo.**

Context Hygiene é um coach/auditor de contexto para coding agents. **Trabalhamos junto com você — work with you.** Uma Skill, MCP ou Agent recomendado por terceiros pode ser útil, redundante ou inadequado ao seu projeto. Não confie cegamente na recomendação: entenda a função, o alcance e o uso real antes de decidir.

O objetivo é reduzir ruído, tempo e dinheiro desperdiçados **sem remover capacidades úteis**. Não prometemos percentuais de economia nem otimizamos por quantidade de componentes.

**V1 · versão 0.2.1 Beta · aberta para testes.** Core único + adapters documentais para **Claude Code, Codex, Google Antigravity e Cursor**, incluindo **Multiple / cross-agent**. Instalação nativa e homologação comportamental por plataforma continuam pendentes; consulte o [registro de revisão](evals/REVIEW.md). Nome do produto preservado: Context Hygiene.

[Site em português](https://tonymontezuma.github.io/Context-Hygiene/) · [English](https://tonymontezuma.github.io/Context-Hygiene/en/) · [Guia para testar](docs/TESTING.md) · [Feedback](docs/FEEDBACK.md)

## Como funciona

Após identificar plataforma, projeto, tarefas essenciais e baseline:

**Inventory → Context Map → Scope → Activation → Project Relevance → Duplication / Conflict / Overlap / Stale / Capability Bloat → recomendação → uma mudança por vez → medir before/after → keep/revert.**

Também avaliamos sobrecarga, escopo e ativação inadequados. Você fornece evidências mínimas e redigidas; o coach constrói o mapa, explica a recomendação e aguarda sua decisão/aplicação. A próxima mudança depende da medição equivalente e do teste da capacidade afetada. Sem teste, o resultado fica pendente. Nenhuma alteração recomendada é um resultado válido.

**Teach When Relevant:** explique somente quando o conceito aparecer na auditoria: o que é, por que existe e como afeta este projeto. Sem curso obrigatório antes de começar.

| Modelo mental | Pergunta aplicada |
|---|---|
| WHAT IS IT | Skill, Agent, MCP, Plugin, Hook, Rule/Instruction, Memory ou Command/Workflow? |
| WHERE DOES IT LIVE | Global/User, Project, Directory ou Session? Há escopo nativo Local/Team/Managed? |
| WHEN IS IT USED | Always, Conditional, Explicit, Disabled ou Unknown? |

Instalado, listado, carregado e usado são coisas diferentes. Remove candidate é recomendação, não modo de ativação. Cada item também recebe Project Relevance com justificativa; uma capacidade rara pode ser indispensável.

## Um Core, quatro adapters e um perfil experimental

A [skill audit-context](skills/audit-context/SKILL.md) é o único Core. Os [adapters](skills/audit-context/references/adapters/README.md) interpretam evidências e mecanismos específicos sem replicar o fluxo. Não são conectores nem executáveis. Fontes oficiais e limites por versão estão em cada perfil.

Detecção usa apenas evidências presentes na conversa, nunca acesso automático ao computador. Quando insuficientes, perguntamos qual ambiente auditar. O host da conversa pode ser diferente do agente auditado.

No modo Multiple, o mapa relaciona fontes e consumidores para encontrar sobreposição e conflito entre agentes. Repetição necessária para compatibilidade é preservada; compartilhar um arquivo exige confirmar quem o lê e verificar todos os agentes afetados.

```text
skills/audit-context/
├── SKILL.md                         # Core
└── references/
    ├── adapters/                    # Quatro perfis V1 + OpenCode experimental
    ├── context-map.md               # WHAT / WHERE / WHEN e cross-agent
    ├── decision-rules.md
    ├── audit-flow.md
    ├── report-template.md
    ├── metrics.md + metrics.schema.json
    └── benchmark.md                 # Caso histórico, não meta
```

Somente instruções e referências sob demanda. Sem MCP próprio, backend, hooks, scripts de auditoria, contas, monitoramento ou bulk cleanup. O usuário faz as alterações; o coach não usa ferramentas do host para investigar o ambiente. Esses limites são comportamentais, não uma sandbox que revoga permissões do host.

## Experimente o Beta com um prompt

No [site](https://tonymontezuma.github.io/Context-Hygiene/#comecar), use **Copiar em português** ou **Copiar em inglês** e cole o Beta Bootstrap Prompt no coding agent, dentro do projeto. O prompt usa diretamente este repositório oficial, sem URL para preencher.

**Para o agente que recebeu o bootstrap: siga [INSTALL.md](INSTALL.md).** Identifique o host, instale somente a skill deste projeto, verifique descoberta/carregamento e inicie a auditoria. A instalação solicitada não autoriza componentes opcionais nem varredura do ambiente durante a auditoria. Se a plataforma/permissão for incerta, informe a limitação.

[Prompt PT](docs/bootstrap/pt.txt) · [Prompt EN](docs/bootstrap/en.txt) · [Relatar Beta Test](https://github.com/tonymontezuma/Context-Hygiene/issues/new?template=beta-test.yml)

Alvos do mesmo bootstrap: Codex, Google Antigravity, OpenCode e Claude Code; Cursor também tem instruções. OpenCode tem [adapter experimental](skills/audit-context/references/adapters/opencode.md), adicional aos quatro perfis V1. Testes ponta a ponta continuam pendentes — o Beta serve para coletar esses resultados, não para prometer instalação universal.

**Beta:** o comportamento de instalação varia conforme o coding agent e suas permissões. Context Hygiene não deve fazer alterações opcionais sem sua autorização.

## Alternativa sem bootstrap

Siga o [guia de teste](docs/TESTING.md): ele oferece um caminho sem instalação e um teste opcional de descoberta nativa. Com a skill e referências disponíveis em uma conversa nova:

> Use Context Hygiene para auditar o contexto dos coding agents deste projeto. Trabalho com [plataforma(s)] em [tipo de projeto] e preciso preservar [tarefas essenciais]. Vou fornecer evidências; comece pelo inventário e baseline.

`/context-hygiene` é uma ideia de entrada do produto, **não um comando universal implementado**. Use a skill exibida pelo seu host ou o prompt acima após fornecer os arquivos.

**Atualização de 0.1.0:** a skill `audit-claude-code` passou a `audit-context`. Se instalou a versão anterior, substitua somente aquela cópia de teste, preserve suas configurações e confirme que há uma única versão carregada em uma conversa nova. Os manifestos portátil e Codex mantêm o nome `context-hygiene` e a mesma versão. Marketplace/diretório público não publicado.

## Evidências e métricas opcionais

Depois do relatório, você pode avaliar a utilidade e optar por preparar números/metadados não sensíveis para revisão e compartilhamento manual. **Desligado por padrão; sem coletor, envio automático ou persistência própria.** Recusar não limita a auditoria. O [schema fechado](skills/audit-context/references/metrics.schema.json) prepara benchmarking futuro; ranking e benchmark público não fazem parte da V1. Leia [PRIVACY.md](PRIVACY.md).

Contagens não medem tokens, latência ou dinheiro. O [caso histórico 389 → 49](skills/audit-context/references/benchmark.md) mede skills marcadas como nunca usadas: não é resultado deste Beta, meta universal ou prova de economia.

## Testes e contribuição

Os [casos sintéticos](evals/README.md) cobrem o fluxo e suas restrições; validação estrutural e comportamento real são verificações distintas. Amigos podem testar uma auditoria pequena, inclusive com dois agentes, e enviar o [modelo de feedback](docs/FEEDBACK.md). Nunca envie segredos, código privado ou configurações completas.

A apresentação PT/EN está em `docs/`, publicada no GitHub Pages a partir de `main`. Atualize as duas línguas juntas. O site usa GA4 já existente, separado das métricas opt-in de auditoria; não envie dados da auditoria ao Analytics. A [identidade visual](docs/BRAND.md) e o contato **contexthygiene@gmail.com** permanecem.

Contribuições seguem o fluxo **fork → branch → PR → revisão do mantenedor → merge manual**, sem acesso de escrita para contribuidores externos. Leia [CONTRIBUTING.md](CONTRIBUTING.md) e use os [templates de Issues](https://github.com/tonymontezuma/Context-Hygiene/issues/new/choose) para bugs, testes beta, sugestões e compatibilidade.

## Licença

**GNU Affero General Public License v3.0 only — SPDX: AGPL-3.0-only.** Consulte o [texto oficial integral](LICENSE) e o [aviso de transição](LICENSING.md). Versões já publicadas sob MIT permanecem utilizáveis sob os termos que receberam; a mudança não revoga a licença anterior retroativamente. A transição é identificada pela revisão Git, não apenas pelo número da versão do produto.

Fora da V1: limpeza automática, acesso remoto/local automático, monitoramento contínuo, contas, dashboard, analytics de equipes e pontuação de agentes. Primeiro validar auditorias reais; futuras integrações exigem novo escopo e consentimento.
