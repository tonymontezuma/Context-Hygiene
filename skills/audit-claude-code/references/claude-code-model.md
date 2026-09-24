# Modelo do Claude Code

Referência técnica conferida em 2026-09-24. O comportamento observado na versão e interface informadas pelo usuário orienta a execução. Se divergir, peça um recorte da ajuda/tela disponível; não improvise comandos ou chaves.

## Componentes e estados

Skill é um procedimento reutilizável. Plugin distribui componentes, podendo incluir skills, MCPs e hooks. MCP conecta ferramentas/dados; hook reage a eventos. Instalação, habilitação, presença no contexto e uso são fatos diferentes.

| Estado na interface | Listado para o modelo | Menu `/` | Valor em `skillOverrides` |
|---|---|---|---|
| `on` | Nome e descrição | Sim | `on` |
| `name-only` | Nome | Sim | `name-only` |
| `user-only` | Oculto | Sim | `user-invocable-only` |
| `off` | Oculto | Oculto | `off` |

`named-only` não é o nome canônico. `name-only` ainda permite descoberta pelo nome; `user-only` reserva a invocação ao usuário. A classificação desejada não prova que a configuração efetiva mudou.

Para skills comuns, `/skills` pode gravar overrides locais. Confirme nome exato, origem e destino mostrado antes de orientar o usuário. **Plugin skills não são controladas por `skillOverrides`: use `/plugin` e avalie o plugin inteiro.** Não invente um override individual para elas. Se o bundle contém componentes necessários, mantenha-o até haver uma alternativa comprovada.

## Diagnósticos

`/skill-doctor` abre Stats no gerenciador de plugins em sessões compatíveis; exige v2.1.252 ou posterior e pode estar indisponível pela conexão ou pelas flags da sessão. O relatório não cobre todas as categorias internas. `/plugin → Stats` e `/skills` são pedidos ao usuário, nunca comandos executados pelo coach. Se indisponíveis, aceite inventário manual rotulado como parcial.

Fonte: [Skills — estados, overrides e diagnóstico](https://code.claude.com/docs/en/skills#override-skill-visibility-from-settings).

## Escopos

| Escopo | Abrangência | Consequência para a auditoria |
|---|---|---|
| User / global | Usuário em vários projetos | Avaliar tarefas dos outros projetos antes de restringir |
| Project | Repositório, compartilhável com equipe | Confirmar impacto nos colaboradores |
| Local | Usuário neste repositório | Adequado a preferências pessoais por projeto |
| Managed | Administração da organização | Registrar limite; não sugerir bypass |

Origem (`user`, `synced`, `plugin`) não é escopo. Registre separadamente o local de instalação e a configuração efetiva, inclusive overrides. Nomes iguais de fontes diferentes não são prova de duplicação. Migrar de global para projeto pode exigir várias operações; não apresente tudo como uma única alteração. Cada etapa precisa preservar disponibilidade e ser verificada.

Fontes: [Escopos de plugins](https://code.claude.com/docs/en/discover-plugins#install-plugins) e [Configuração e precedência](https://code.claude.com/docs/en/settings).

## Memória, hooks e MCPs

Instruções persistentes e memória automática são mecanismos diferentes. Arquivos armazenados não equivalem ao conteúdo carregado na sessão; tamanho em disco não prova custo de contexto. Prefira metadados, títulos e pequenos trechos anonimizados para identificar duplicação e obsolescência.

Hooks devem ser avaliados pela função, evento e conteúdo efetivamente devolvido. Um hook sem texto na conversa pode ser útil sem adicionar contexto; não conclua isso apenas pela contagem.

MCPs podem carregar descrições de ferramentas sob demanda. Não atribua um custo fixo a cada servidor nem prometa economia ao desabilitá-lo. Conexão com erro exige diagnóstico de necessidade e origem do erro.

Fontes: [Memória](https://code.claude.com/docs/en/memory), [Hooks](https://code.claude.com/docs/en/hooks) e [MCP](https://code.claude.com/docs/en/mcp).
