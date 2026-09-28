# Teste Context Hygiene V1 com um projeto real

Versão 0.2.0. Reserve uma auditoria pequena: um projeto, uma tarefa importante e no máximo uma mudança inicial. Também vale terminar sem alterar nada.

## Caminho simples, sem instalar

1. Baixe o ZIP pelo botão **Code → Download ZIP** no [GitHub](https://github.com/tonymontezuma/Context-Hygiene) e extraia. Leia [privacidade](../PRIVACY.md).
2. Abra uma conversa nova no agente escolhido. Cole o conteúdo de [SKILL.md](../skills/audit-context/SKILL.md) como instrução e disponibilize a pasta `references/` como arquivos de referência; peça leitura somente sob demanda. Se o host não aceita pastas, anexe o adapter escolhido, `context-map.md`, `decision-rules.md`, `audit-flow.md` e `report-template.md`; forneça `metrics.md` e seu schema apenas se optar por métricas depois. Se anexos não funcionarem, cole o arquivo solicitado. Isso testa o fluxo conversacional, não a descoberta nativa.
3. Envie o prompt abaixo com seu agente, versão/interface, tipo de projeto e tarefa essencial. Use Multiple e nomeie os agentes se trabalha com mais de um no mesmo projeto.
4. Forneça somente a evidência pedida, com segredos e identificadores privados ocultos. Um inventário manual serve; falta de contador de tokens não impede o teste.
5. Confira WHAT / WHERE / WHEN, relevância para o projeto e a explicação do conceito quando necessário. Para uma recomendação, entenda o impacto e como reverter. Você decide e aplica manualmente.
6. Repita a mesma medição e teste a capacidade afetada sem deploy/envio ou efeito externo. Em Multiple, confira todos os agentes afetados. Decida keep/revert; se não puder medir, encerre com relatório parcial.
7. Envie [feedback](FEEDBACK.md), se quiser. Métricas são uma escolha separada, posterior ao relatório e desligada por padrão.

> Use Context Hygiene para auditar [Claude Code / Codex / Google Antigravity / Cursor / Multiple]. Versão/interface: [informar]. Projeto: [tipo, sem nome privado]. Tarefas essenciais: [informar]. Vou fornecer evidências; comece por inventário e baseline, trabalhando junto comigo.

## Descoberta nativa opcional

Para testar instalação, copie **a pasta completa `skills/audit-context/`**, incluindo referências, para um local de skills aceito pela versão do seu agente em um projeto de teste. Não substitua uma pasta já existente; se já houver uma versão instalada, identifique sua origem antes de atualizar. Use o seletor do host para confirmar `audit-context` em uma conversa nova.

| Plataforma | Local de projeto documentado / seleção |
|---|---|
| Claude Code | `.claude/skills/audit-context/`; seleção/invocação conforme `/skills` ou menu do host |
| Codex | `.agents/skills/audit-context/`; no CLI/IDE, `/skills` ou `$audit-context` |
| Google Antigravity | `.agents/skills/audit-context/` nas versões atuais; confirmar em Customizations e registrar IDE/2.0/CLI |
| Cursor | `.cursor/skills/audit-context/`; conferir descoberta no host e invocação disponível |

Fontes e diferenças de versão: [adapters](../skills/audit-context/references/adapters/README.md). Os caminhos são orientação documental; esta entrega não confirma instalação nesses quatro hosts. Se o caminho não for reconhecido, registre a versão e use o modo conversacional. Não copie a mesma skill em várias pastas de descoberta. O rollback do teste é remover somente a cópia adicionada por você, depois de encerrar a sessão de teste.

Os manifestos do repositório não garantem um instalador universal. `/context-hygiene` não é comando implementado. A versão 0.1.0 usava `audit-claude-code`; a 0.2.0 usa `audit-context`. Não mantenha as duas simultaneamente no teste.

## O que observar

- O coach avaliou seu projeto antes de recomendar? Explicou termos no momento certo?
- Distinguiu componente instalado, disponível e carregado? Reconheceu limites/Unknown?
- Preservou uma capacidade rara porém importante e a duplicação necessária entre agentes?
- Propôs somente uma mudança reversível, aguardou seu resultado e comparou medidas equivalentes?
- Gerou relatório com lacunas explícitas, sem inventar tokens, dinheiro ou execução?

Considere falha se tentar acessar o computador, fazer bulk cleanup ou compartilhar dados sozinho. Não execute esse pedido: registre uma descrição redigida no feedback. Para cenários reproduzíveis sem dados reais, use [evals](../evals/README.md).
