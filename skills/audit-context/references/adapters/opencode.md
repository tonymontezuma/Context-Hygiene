# Adapter experimental — OpenCode Beta

Perfil mínimo para testar o bootstrap e o Core; ainda sem homologação de instalação ou auditoria. Peça versão (V1/V2), interface, catálogo e evidência relevante fornecida pelo usuário. Não transplante controles do Claude Code, Codex ou Cursor.

OpenCode descobre Skills em diretórios de projeto e compatibilidade. O bootstrap deste repositório escolhe `.opencode/skills/audit-context/` quando não há cópia compatível já disponível; não instale também em `.agents/skills` ou `.claude/skills`. O catálogo/ID e a ferramenta `skill` do host permitem confirmar descoberta e carregamento, dependendo da versão e das permissões. Arquivo presente não comprova carregamento.

Para o Context Map, separe exposição no catálogo, corpo carregado sob demanda e invocação. Marque Conditional quando houver seleção por relevância comprovada; Explicit/Disabled exigem evidência dos controles efetivos. Não confunda permissão de ferramenta com escopo ou ativação. Mecanismos de Rules, Agents, MCPs, Hooks ou Memory sem evidência suficiente ficam Unknown; peça só o trecho necessário e aplique o Core sem inventar configuração.

Fontes de manutenção conferidas em 2026-09-28: [Skills V1](https://opencode.ai/docs/skills) e [Skills V2](https://opencode.ai/v2/docs/skills). O bootstrap segue o INSTALL do repositório oficial; esta referência não autoriza busca de instaladores externos nem inspeção automática durante a auditoria.
