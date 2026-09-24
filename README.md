# Context Hygiene

**Less context. Keep what matters.**

Coach de higiene de contexto do Claude Code, destinado a ChatGPT/Codex. Ajuda a identificar contexto dispensável com evidências fornecidas pelo usuário e preserva os fluxos úteis do projeto.

**V1 / 0.1.0 — código-fonte disponível para revisão.** Projeto independente do AIviation, no [repositório Context-Hygiene](https://github.com/tonymontezuma/Context-Hygiene). O plugin ainda não foi instalado nem publicado em marketplace ou diretório de plugins. Licença MIT adotada para esta primeira versão.

[Conheça a apresentação e os resultados do processo](https://tonymontezuma.github.io/Context-Hygiene/).

## Como funciona

`baseline → inventory → analysis → one-change-at-a-time → verify → final report`

O usuário informa versão, interface, stack e tarefas essenciais, depois fornece outputs ou screenshots redigidos. O coach interpreta `/plugin → Stats`, `/skills` e outros diagnósticos necessários, propõe uma mudança reversível e aguarda aplicação pelo usuário. A próxima mudança depende de nova medição e teste da capacidade preservada.

As skills recebem classificação `on`, `name-only`, `user-only` ou `off`. Skills de plugins são tratadas pelo plugin, sem aplicar `skillOverrides` indevidamente. Global, projeto, local e gerenciado são escopos distintos. Não há remoção em massa, meta de redução ou score artificial. “Nenhuma alteração recomendada” é um resultado válido.

## Pacote mínimo

```text
context-hygiene/
├── plugin.json
├── .codex-plugin/plugin.json
├── skills/audit-claude-code/
│   ├── SKILL.md
│   └── references/
│       ├── claude-code-model.md
│       ├── decision-rules.md
│       ├── audit-flow.md
│       ├── report-template.md
│       └── benchmark.md
├── evals/
│   ├── README.md
│   ├── cases/scenarios.json
│   └── REVIEW.md
├── docs/                  # Apresentação estática no GitHub Pages
├── README.md
├── PRIVACY.md
└── LICENSE
```

Uma única skill contém as instruções canônicas do produto, incluindo objetivo, invariantes e critério de sucesso. Não existe system prompt paralelo. Referências entram apenas quando necessárias; README, evals e benchmark não são carregados automaticamente pela skill.

Sem MCP, backend, hooks, scripts locais, telemetria, autenticação ou acesso ao computador. O coach também não usa ferramentas externas do host para investigar o ambiente auditado. A leitura do próprio pacote e dos anexos enviados é necessária à conversa e não autoriza inspeção do computador.

A apresentação em `docs/` contém HTML, CSS, um logo SVG e JavaScript executado somente no navegador para animações e cópia de texto. Não adiciona ferramentas ou scripts à skill, não coleta dados e não carrega dependências externas. A identidade visual está documentada em [docs/BRAND.md](docs/BRAND.md). Para atualizar o site, altere `docs/` e envie para `main`; o GitHub Pages usa essa pasta como origem.

## Revisar e experimentar

1. Leia [a skill](skills/audit-claude-code/SKILL.md) e [a política de privacidade](PRIVACY.md).
2. Faça os testes conversacionais em [evals](evals/README.md), fornecendo somente as entradas de cada caso. Isso permite revisar o comportamento sem instalar nada.
3. Após aprovação, uma instalação de teste poderá usar a fonte local/marketplace suportada pelo host, em uma conversa nova. Disponibilidade e invocação dependem da interface; use o nome exibido pelo host. Não presuma que `/audit-claude-code` funciona em todas as superfícies.

Prompt inicial sugerido: “Use Context Hygiene para auditar meu Claude Code. Vou fornecer outputs e screenshots; comece pela baseline.”

O manifesto portátil é [plugin.json](plugin.json). A apresentação OpenAI fica no [manifesto de compatibilidade](.codex-plugin/plugin.json), suportado quando não há `extensions.com.openai` na raiz. Identidade e versão devem permanecer iguais nos dois arquivos. Estrutura conferida na [documentação oficial de empacotamento](https://developers.openai.com/plugins/build/plugins) em 2026-09-24. Validação estrutural não comprova instalação ou funcionamento em cada host.

## Qualidade e limites

[Casos e critérios](evals/README.md) cobrem decisões, limites de escopo, privacidade e comparação antes/depois. [Registro de revisão](evals/REVIEW.md) distingue verificações executadas de testes ainda pendentes.

As regras específicas do Claude Code e fontes oficiais estão no [modelo de referência](skills/audit-claude-code/references/claude-code-model.md). Interfaces e versões podem mudar; o coach pede a evidência faltante em vez de presumir compatibilidade.

O caso 389 → 49 (−87,4%) refere-se a skills nunca usadas e consta apenas na [referência anonimizada](skills/audit-claude-code/references/benchmark.md). Não é meta nem evidência de economia de tokens.

## Distribuição futura e V2

Antes de publicar no diretório de plugins: concluir avaliações conversacionais e teste de instalação nos hosts pretendidos; revisar licença e identidade do responsável; preparar suporte e URLs públicas exigidas pela submissão vigente. O código-fonte está no GitHub e a apresentação é hospedada no GitHub Pages; registro em marketplace e submissão ao diretório de plugins continuam pendentes.

V2 é apenas uma direção: companion local opcional, somente leitura, inventário semântico, escopos explícitos, redação de segredos e snapshots comparáveis. Definir consentimento, limites de caminhos e tratamento de dados antes de escolher MCP/app. Sem leitura arbitrária, shell genérico ou ferramentas de mutação. Nenhum componente de V2 está incluído nesta versão.
