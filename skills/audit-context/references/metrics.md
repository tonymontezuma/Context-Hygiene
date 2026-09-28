# Métricas voluntárias após a auditoria

**Padrão: desativado (`telemetry = false`, princípio do produto, não configuração instalada no host).** V1 não tem coletor, endpoint, conta, armazenamento próprio nem envio automático. O relatório útil não depende de consentimento para métricas.

Somente depois do relatório: “Foi útil: sim, parcialmente ou não? Quer preparar números não sensíveis para revisar e, se desejar, compartilhar manualmente? Não inclui código, prompts, conteúdos, nomes de projeto, caminhos, repositórios, URLs ou dados pessoais. Pode recusar ou escolher não perguntar novamente.”

Silêncio/recusa = nada preparado ou enviado. Não perguntar novamente vale durante esta conversa; entre sessões só pode ser respeitado se o usuário fornecer essa preferência. Não crie memória ou arquivo para persistir consentimento.

Após opt-in explícito, prepare um bloco conforme [metrics.schema.json](metrics.schema.json), mostre os campos exatos e peça revisão. O usuário decide se copia e envia aos canais em [FEEDBACK](https://github.com/tonymontezuma/Context-Hygiene/blob/main/docs/FEEDBACK.md); o coach não envia. Preparar um bloco não é consentimento para publicar resultados nem autorização para anexar a conversa.

## Dados permitidos

Somente enums controlados, versão numérica pública, contagens e medidas before/after. Unknown vira null, nunca zero. Não inclua IDs de usuário/sessão, datas precisas, nomes de modelos personalizados, textos livres, fingerprints ou resultados de configurações privadas. Use versão pública major.minor.patch sem sufixos internos; se indisponível, null. Não gere identificador persistente.

A lista fechada do schema rejeita campos adicionais inclusive em objetos internos. Não preencha todos os campos se não foram medidos. Custos usam somente USD ou BRL e exigem valor medido com unidade e condições equivalentes. Não converta contagens em tokens nem tokens em dinheiro. Registre comparabilidade e teste de capacidade por medida. Um snapshot incomparável pode ser registrado, mas não sustenta economia atribuída à mudança.

## Benchmarking futuro

O schema versionado prepara estudos futuros, não um placar público. Sem ranking, score de agentes ou promessa de economia. Antes de agregar resultados reais: obter autorização de uso/publicação, revisar possíveis combinações identificáveis e separar plataforma/versão/métrica/método/condições. Resultados enviados por e-mail ou Issues têm identidade e metadados do respectivo serviço; não prometa anonimato absoluto. Nada é publicado automaticamente.
