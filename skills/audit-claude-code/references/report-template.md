# Relatório de auditoria — Context Hygiene

Use somente campos relevantes; substitua ausências por “não informado” ou “não medido”. Não preencha lacunas com exemplos ou com o benchmark.

## Resultado

Conclusão sustentada pelas evidências. Status: concluído / parcial. Pode concluir sem recomendar mudança. Explicite o que permanece sem verificação.

## Ambiente e evidências

Versão/interface, stack, projeto anonimizado, escopo, tarefas essenciais, snapshots e respectivas fontes/períodos. Indique limites de cobertura e comparabilidade.

## Antes e depois

| Métrica e unidade | Escopo/cobertura | A | Final | Diferença | Redução % | Comparável? |
|---|---|---:|---:|---:|---:|---|

Separe contagens de skills (e suas origens), plugins, MCPs e warnings de contexto em tokens, latência ou custo financeiro. Inclua somente medidas disponíveis. Nunca deduza tokens de contagens.

## Decisões

| Alvo/origem | Escopo | Antes → depois | Evidência | Status | Rollback |
|---|---|---|---|---|---|

Status possíveis: proposta, recusada, adiada, aplicada sem verificação, verificada, revertida. Para reversões, o estado final é o restaurado; não some ganhos temporários como resultado final.

## Capacidades preservadas

| Fluxo essencial | Teste seguro | Resultado e fonte | Verificado ou apenas pretendido? |
|---|---|---|---|

## Pendências

Warnings explicados e não resolvidos, dados faltantes, regressões, limitações da versão e próximo ponto de revisão (por exemplo, mudança de stack). Não crie monitoramento ou lembrete automaticamente.

O benchmark é opcional. Se incluído, carregue [benchmark.md](benchmark.md) e identifique-o como caso independente, sem comparação de desempenho entre usuários.
