# Adapter — Codex

Peça versão/interface, lista de skills/capacidades e trechos relevantes de instruções enviados pelo usuário. Diferencie host da conversa e agente auditado. Não solicite nem execute uma varredura.

AGENTS.md pode fornecer instruções globais, de projeto e diretório. AGENTS.override.md tem precedência no mesmo nível; confirme a cadeia efetiva, não apenas a existência de arquivos. Skills podem ser invocadas explicitamente ou selecionadas pela descrição: catalogue essa exposição separadamente do corpo carregado sob demanda.

Tradução: instruções confirmadas no alcance → Always; seleção de Skill por relevância → Conditional; invocação apenas deliberada, quando comprovada → Explicit; inatividade confirmada → Disabled. Ausência em uma lista parcial → Unknown. Não transplante skillOverrides ou os estados name-only/user-only do Claude Code.

Inclua Plugins, MCPs, subagents, Rules e Memory somente quando aparecerem nas evidências. Recursos e controles dependem da interface/versão. Para mudança, peça o controle mostrado pela UI/configuração e seu rollback; não invente uma chave equivalente a outra plataforma.

Referências oficiais (2026-09-28): [Skills](https://learn.chatgpt.com/docs/build-skills) e [AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md). Instalação e comportamento deste pacote no host: pendentes de teste.
