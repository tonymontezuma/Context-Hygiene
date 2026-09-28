# Contributing to Context Hygiene

Issues e PRs em português ou inglês são bem-vindos. Use os [templates](https://github.com/tonymontezuma/Context-Hygiene/issues/new/choose) para Bug Report, Beta Test Result, Feature Request ou Platform Compatibility. Para novas plataformas ou mudanças de escopo, abra uma Issue antes de implementar.

## Princípios

- **Work With You:** preserve a decisão do usuário e capacidades úteis ao projeto. Nenhuma mudança também é um resultado válido.
- **Teach When Relevant:** explique conceitos quando necessários à decisão, com WHAT / WHERE / WHEN, sem aula obrigatória.
- **Consent Before Cost:** análises ou ações opcionais que consumam tempo, tokens ou dinheiro exigem consentimento prévio; métricas e compartilhamento continuam opcionais.
- **Measure Don't Assume:** apresente evidências e limites; contagens não demonstram economia de tokens, tempo ou dinheiro. Compare condições equivalentes e teste a capacidade afetada.

A V1 continua um pacote de instruções com um Core e adapters documentais: evidência fornecida pelo usuário, mudanças manuais e reversíveis, sem acesso automático ao computador, telemetria ou limpeza em massa.

## Fluxo de contribuição

1. Crie um fork e uma branch para uma mudança com objetivo claro.
2. Abra um PR para `main`, com problema, resultado esperado, evidências de validação e limites conhecidos. Relacione a Issue quando houver.
3. Aguarde revisão do mantenedor e resolva as observações. O mantenedor decide aceitar, pedir ajustes ou recusar e realiza o merge manualmente. Não use auto-merge.

Contribuidores externos trabalham em forks: participar não concede acesso de escrita ao repositório oficial. Mudanças no repositório oficial também passam por PR; não faça push direto em `main`. A [proteção da branch](https://github.com/tonymontezuma/Context-Hygiene/rules/24140505) exige PR e resolução das discussões, bloqueia exclusão e force-push e não tem exceções de bypass. Com um único mantenedor, não exige uma segunda aprovação nem checks de CI inexistentes.

## Critério de aceitação

Preserve os princípios e o escopo acima. Confira links e metadados afetados; mantenha os dois manifestos consistentes e o site em PT/EN. Para mudanças de comportamento, inclua um cenário reproduzível ou atualize os [casos de avaliação](evals/README.md). Separe validação estrutural de teste comportamental e instalação real; registre o que não foi verificado. Alterações de texto não exigem uma suíte nova.

Compartilhe somente evidências mínimas e revisadas: Issues e PRs são públicos. Não inclua segredos, código privado, configurações completas ou transcrições sensíveis. Métricas numéricas não são requisito de contribuição; siga [PRIVACY.md](PRIVACY.md) e [FEEDBACK.md](docs/FEEDBACK.md).

## Licença das contribuições

Envie apenas material que você tenha direito de contribuir sob **AGPL-3.0-only**, a licença do projeto. Preserve avisos de autoria e licenças aplicáveis a material de terceiros, identificando sua origem. Não há cessão de copyright exigida por este guia. Veja [LICENSE](LICENSE) e [LICENSING.md](LICENSING.md), incluindo a preservação dos termos MIT das versões anteriores.
