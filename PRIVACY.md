# Privacidade — Context Hygiene V1

Versão 0.2.1 Beta · 2026-09-28

O plugin Context Hygiene é um pacote de instruções e referências. Não possui serviço próprio, banco de dados, telemetria, login, conectores ou código de coleta. Seu responsável não recebe os conteúdos de auditoria por um canal do plugin.

## Bootstrap de instalação

O Beta Bootstrap Prompt pede ao coding agent para obter este repositório oficial, identificar o host e instalar/verificar apenas a skill no projeto, conforme INSTALL.md e as permissões do host. Essa fase usa as ferramentas do próprio agente e deixa os arquivos de instalação no projeto; não é um coletor do Context Hygiene. Ela não autoriza componentes opcionais nem amplia a auditoria para inspeção automática. Após carregar a skill, valem os limites abaixo.

Os botões do site copiam somente o texto do prompt escolhido, sem ler a área de transferência ou enviá-la a um serviço. O link de Beta Test abre um template no GitHub; o usuário revisa e envia manualmente um relato público associado à sua conta.

## Dados usados

A auditoria trabalha com outputs, screenshots, trechos de configuração e explicações que o usuário envia voluntariamente à conversa. Nomes/estados, contagens, escopo e pequenos trechos relevantes normalmente bastam. Não é necessário enviar credenciais, código-fonte privado, arquivos completos de configuração ou histórico integral.

O coach é instruído a não inspecionar o computador, consultar contas/conectores, capturar tela ou executar comandos. As alterações são feitas pelo usuário. O pacote pode ser lido pelo host para carregar a skill e suas referências.

## Antes de enviar

Oculte tokens, chaves de API, senhas, endereços privados e dados pessoais desnecessários. Use nomes fictícios para projetos e pessoas. Se um segredo for enviado, o coach deve evitar repeti-lo e pedir uma versão redigida; se real, recomenda sua revogação/rotação no serviço responsável.

## Plataforma e retenção

Os conteúdos enviados continuam sujeitos às configurações e políticas do ChatGPT/Codex ou de outro host usado. Ausência de telemetria própria não significa ausência de processamento ou retenção pela plataforma. O plugin não garante execução offline, apagamento de mensagens ou isolamento técnico do host. Seus limites de acesso são instruções de comportamento, não uma sandbox que revoga ferramentas do host.

Snapshots e relatórios permanecem na conversa. Não há persistência própria nem gravação automática no computador. O usuário controla eventual cópia/exportação. O caso histórico contém apenas contagens agregadas; os demais casos de avaliação usam dados sintéticos. Logs de testes reais não devem ser incorporados ao repositório sem anonimização e decisão explícita do responsável.

## Métricas pós-auditoria: opt-in, desligadas por padrão

Após o relatório, o usuário pode pedir um bloco revisável de números e metadados não sensíveis, conforme o [schema fechado](skills/audit-context/references/metrics.schema.json). Não há coletor, endpoint, envio automático ou armazenamento próprio. Recusa ou silêncio mantém a opção desligada; a auditoria funciona integralmente sem compartilhar resultados.

O bloco permite somente plataformas e versões públicas numéricas, contagens, medidas before/after, comparabilidade, resultado de teste, decisões e utilidade em campos controlados. Exclui código, prompts, conteúdos, nomes de projetos/pessoas, caminhos, repositórios, URLs e identificadores persistentes. Não medido é null, nunca zero. Não incorpora a conversa nem anexos.

O usuário revisa e decide se envia manualmente. Issues são públicos e identificados pela conta; e-mail expõe remetente/metadados ao destinatário. Não prometemos anonimato absoluto. Consentimento para preparar métricas não autoriza envio ou publicação. A preferência “não perguntar novamente” é respeitada na conversa, sem promessa de memória entre sessões. Não há benchmark público, ranking ou uso automático desses resultados.

## Site de apresentação

O site de apresentação no GitHub Pages utiliza Google Analytics 4 (ID `G-0B847D49P5`) para medir visitas e uso das páginas em português e inglês. A tag envia dados de navegação ao Google e utiliza cookies para distinguir visitantes e sessões, conforme a [documentação do GA4](https://support.google.com/analytics/answer/11397207) e a [política de privacidade do Google](https://policies.google.com/privacy). Esta medição pertence ao site; o plugin continua sem telemetria própria e não envia conteúdos das auditorias ao Analytics.

O site não inclui formulários. Seu JavaScript anima os dados agregados e copia o prompt apenas quando o visitante pede. Não envia o conteúdo da área de transferência. A hospedagem e seus registros técnicos seguem as políticas do GitHub.
