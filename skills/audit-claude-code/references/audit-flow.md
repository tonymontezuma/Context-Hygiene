# Fluxo e evidências

## Estado mínimo da conversa

Mantenha um resumo curto: fase atual, ambiente/stack/escopo, fontes dos snapshots, capacidades essenciais e seus testes, mudança em curso e pendências. Não releia todas as referências nem replique inventários inteiros a cada turno. Ao retomar outra conversa, peça o último resumo e confirme mudanças externas; não busque histórico por conta própria.

Na primeira resposta, reúna somente as lacunas essenciais e uma evidência inicial. Exemplo: “Qual a versão/interface, stack e tarefas essenciais deste projeto? Envie a tela Stats de `/plugin`, ocultando dados sensíveis.” Aproveite tudo que já foi fornecido.

## Snapshot

Registre A, B e seguintes na conversa, sem criar arquivos no computador do usuário:

| Campo | Registro |
|---|---|
| Identificação | Rótulo, fonte/trecho enviado e data informada (ou não informada) |
| Ambiente | Versão, interface, projeto anonimizado, stack e escopo |
| Condições | Sessão, modelo e janela de observação quando relevantes/disponíveis |
| Métricas | Nome exato, categoria, valor, unidade e cobertura |
| Skills | Instaladas/listadas/nunca usadas por origem, apenas se a fonte distinguir |
| Outros | Plugins, MCPs, hooks, memória e warnings relevantes; desconhecido não é zero |
| Capacidades | Fluxos a preservar e forma segura de verificar |
| Lacunas | Itens ocultos, estimativas, divergências e dados faltantes |

Mantenha identidade suficiente para não somar duas vezes um componente. Não some categorias sobrepostas. O total de “nunca usadas” não é o total instalado. Histórico de invocações pode mudar sem alteração de configuração.

## Uma mudança por vez

Proposta não é execução. Registre alvo exato, origem, valor atual, novo valor, escopo, justificativa, efeito esperado, dependências e retorno ao estado anterior. Se o valor era herdado, rollback significa restaurar a herança, não criar um override permanente diferente. Sem caminho de retorno conhecido, peça informação antes de orientar a aplicação.

Depois da proposta, aguarde. Se recusada ou adiada, registre e volte à análise. Se aplicada, fique em verify até receber medição equivalente e teste funcional. Não ofereça uma segunda alteração enquanto a primeira permanece não verificada. Se o usuário quiser encerrar, emita relatório parcial.

O usuário pode aplicar a mudança na interface ou editar um trecho específico: oriente somente o alvo confirmado, preserve o restante e não forneça substituições de arquivos inteiros. Identifique recarga/reinício pendente quando a interface o informar, antes de medir efeito.

## Comparar e verificar

Para cada métrica comparável, informe A, B, diferença `B − A` e, se `A > 0`, redução `(A − B) / A × 100`. Com A zero, percentual é “não aplicável”. Aumento é aumento, sem mascará-lo como melhoria.

Confirme mesma definição, unidade, escopo, versão e cobertura. Uma troca de modelo/projeto, limpeza do histórico ou duas alterações simultâneas quebra atribuição causal; registre o resultado observado, peça uma nova baseline controlada e não atribua a diferença a um item específico. Sem custo em tokens medido, marque “economia de tokens não medida”. Não converta tokens em dinheiro sem dados adequados.

Teste a capacidade afetada sem efeitos externos: reconhecimento/invocação segura de skill ou verificação simulada, sem deploy, envio, pagamento ou modificação de produção. Peça o resultado fornecido pelo usuário. Distingua confirmado pelo usuário de observado em output; nunca diga que o coach executou o teste.

Regressão tem prioridade sobre redução de números: orientar o rollback já descrito, aguardar confirmação e medir/testar novamente. Ganho nulo é resultado válido; não acumule mudanças para fabricar economia.

## Encerrar

Use o relatório quando o usuário terminar, não houver candidato útil ou não quiser fornecer mais dados. Mudança aplicada sem medida continua pendente. “Configurado como pretendido”, “capacidade testada” e “benefício demonstrado” são conclusões separadas.
