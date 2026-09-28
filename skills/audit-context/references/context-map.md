# Modelo mental e Context Map

Explique somente o conceito que aparece na decisão atual, em uma ou duas frases ligadas ao projeto. Exemplo: “Este MCP conecta o agente ao serviço de deploy. Embora usado raramente, ele sustenta sua publicação mensal; vamos avaliar quando fica disponível, sem removê-lo por frequência.”

| WHAT IS IT | Para que serve |
|---|---|
| Skill | Instruções e recursos reutilizáveis para um trabalho específico |
| Agent | Executor de tarefas; um subagent pode receber ferramentas e contexto próprios |
| MCP | Protocolo de conexão a ferramentas e dados externos; servidor não equivale a uma única ferramenta |
| Plugin | Pacote que distribui capacidades; seus componentes podem depender uns dos outros |
| Hook | Automação acionada por evento; execução não implica texto injetado no contexto |
| Rule / Instruction | Orientação que influencia decisões dentro de um alcance definido |
| Memory | Informação retida ou reapresentada; armazenamento não prova carregamento na sessão |
| Command / Workflow | Ação ou procedimento invocável, conforme a plataforma |

| WHERE DOES IT LIVE | Alcance |
|---|---|
| Global / User | Acompanha o usuário em vários projetos |
| Project | Pertence ao projeto/workspace |
| Directory | Aplica-se a uma parte do projeto |
| Session | Vale nesta sessão/conversa |

Local, Team e Managed devem manter seus rótulos nativos e restrições quando existirem. Origem do pacote, lugar de armazenamento e alcance efetivo são campos diferentes.

| WHEN IS IT USED | Interpretação normalizada |
|---|---|
| Always | Conteúdo persistente dentro do escopo aplicável |
| Conditional | Seleção por relevância, arquivo, evento ou decisão do modelo |
| Explicit | Invocação deliberada pelo usuário |
| Disabled | Componente inativo, embora possa continuar instalado |
| Unknown | Evidência insuficiente; não é Disabled |

Disponível no catálogo ≠ corpo carregado ≠ invocado. Registre essas três observações separadamente; uma Skill descoberta automaticamente não é necessariamente Always. Remove candidate é um possível encaminhamento, separado da ativação.

## Context Map

| ID / componente | WHAT | Origem | WHERE / escopo efetivo | WHEN / estado nativo | Catálogo / corpo / uso | Project Relevance + motivo | Dependências | Evidência / lacunas |
|---|---|---|---|---|---|---|---|---|

Agrupe instruções/memória persistentes, conhecimento sob demanda, capacidades externas e automações quando ajudar. Só inclua tokens medidos ou estimativas explicitamente rotuladas, com método. Um inventário parcial continua parcial.

## Multiple / cross-agent

Crie uma matriz de fontes × agentes presentes: **leitura confirmada / ausência confirmada / desconhecida**, anotando versão, escopo e evidência. O nome AGENTS.md sozinho não demonstra quem o carrega. Não some duas vezes uma fonte compartilhada; exposição por agente deve ser reportada separadamente.

Compare significado, alcance e ativação. Repetição necessária para compatibilidade pode ser mantida; instruções contraditórias precisam de decisão do usuário sobre a regra válida. Não centralize até confirmar que cada consumidor lerá a fonte resultante. Verifique todos os agentes afetados antes de keep.
