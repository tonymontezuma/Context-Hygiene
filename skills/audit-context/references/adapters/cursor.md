# Adapter — Cursor

Peça versão/interface, lista de Rules/Skills e, para um candidato, tipo, descrição/glob e escopo mostrados pelo usuário. Considere Rules de usuário/projeto/equipe e AGENTS.md conforme a versão; confirme quais fontes entram na sessão.

Rules: Always Apply → Always; Apply Intelligently ou Apply to Specific Files → Conditional; Apply Manually → Explicit. O campo alwaysApply e os campos description/globs determinam a ativação; não confunda catálogo disponível com corpo incluído. Disabled exige evidência própria, não ausência de descrição.

Skills têm instruções reutilizáveis carregadas conforme uso. Plugins podem agregar Skills, MCPs, Hooks e Agents; avalie dependências antes de restringir. Não importe skillOverrides do Claude Code. Se houver Rules e Skills com funções semelhantes, compare responsabilidade e alcance antes de recomendar migração.

Em Multiple, confirme leitura de cada arquivo e preserve duplicação necessária para outro agente. O nome do arquivo sozinho não comprova compatibilidade.

Referências oficiais (2026-09-28): [Rules](https://cursor.com/docs/rules) e [Skills](https://cursor.com/docs/skills). Instalação e comportamento deste pacote no host: pendentes de teste.
