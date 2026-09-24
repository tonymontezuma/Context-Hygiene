# Privacidade — Context Hygiene V1

Versão 0.1.0 · 2026-09-24

O plugin Context Hygiene é um pacote de instruções e referências. Não possui serviço próprio, banco de dados, telemetria, login, conectores ou código de coleta. Seu responsável não recebe os conteúdos de auditoria por um canal do plugin.

## Dados usados

A auditoria trabalha com outputs, screenshots, trechos de configuração e explicações que o usuário envia voluntariamente à conversa. Nomes/estados, contagens, escopo e pequenos trechos relevantes normalmente bastam. Não é necessário enviar credenciais, código-fonte privado, arquivos completos de configuração ou histórico integral.

O coach é instruído a não inspecionar o computador, consultar contas/conectores, capturar tela ou executar comandos. As alterações são feitas pelo usuário. O pacote pode ser lido pelo host para carregar a skill e suas referências.

## Antes de enviar

Oculte tokens, chaves de API, senhas, endereços privados e dados pessoais desnecessários. Use nomes fictícios para projetos e pessoas. Se um segredo for enviado, o coach deve evitar repeti-lo e pedir uma versão redigida; se real, recomenda sua revogação/rotação no serviço responsável.

## Plataforma e retenção

Os conteúdos enviados continuam sujeitos às configurações e políticas do ChatGPT/Codex ou de outro host usado. Ausência de telemetria própria não significa ausência de processamento ou retenção pela plataforma. O plugin não garante execução offline, apagamento de mensagens ou isolamento técnico do host. Seus limites de acesso são instruções de comportamento, não uma sandbox que revoga ferramentas do host.

Snapshots e relatórios permanecem na conversa. Não há persistência própria nem gravação automática no computador. O usuário controla eventual cópia/exportação. O benchmark contém apenas contagens agregadas; os demais casos de avaliação usam dados sintéticos. Logs de testes reais não devem ser incorporados ao repositório sem anonimização e decisão explícita do responsável.

## Site de apresentação

O site de apresentação no GitHub Pages utiliza Google Analytics 4 (ID `G-0B847D49P5`) para medir visitas e uso das páginas em português e inglês. A tag envia dados de navegação ao Google e utiliza cookies para distinguir visitantes e sessões, conforme a [documentação do GA4](https://support.google.com/analytics/answer/11397207) e a [política de privacidade do Google](https://policies.google.com/privacy). Esta medição pertence ao site; o plugin continua sem telemetria própria e não envia conteúdos das auditorias ao Analytics.

O site não inclui formulários. Seu JavaScript anima os dados agregados e copia o prompt apenas quando o visitante pede. Não envia o conteúdo da área de transferência. A hospedagem e seus registros técnicos seguem as políticas do GitHub.
