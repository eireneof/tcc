### Passo a passo para integrar lighthouse-ci com GitHub Actions:

1.  **Adicione um arquivo de workflow do GitHub Actions:** Crie um arquivo YAML dentro da pasta `.github/workflows` no seu repositório GitHub (ex: `.github/workflows/accessibility-check.yml`).
2.  **Configure o workflow:** Defina os passos do seu workflow no arquivo YAML para:
    *   **Fazer o checkout do código:** Baixar o código do seu repositório para o ambiente de CI.
    *   **Executar o lighthouse-ci:** Utilize a ação oficial do lighthouse-ci (`actions/lighthouse-ci@main`) para executar os testes de acessibilidade na sua aplicação web.
    *   **Definir um limite de score de acessibilidade:** Configure o lighthouse-ci para falhar o workflow se a pontuação de acessibilidade for inferior a um valor mínimo (ex: 90 de 100).
    *   **Gerar e publicar relatório de acessibilidade (opcional):** Configure para que o lighthouse-ci gere um relatório detalhado de acessibilidade e o publique como um "artifact" do workflow do GitHub Actions, para que a equipe possa consultá-lo.

### Exemplo de arquivo `.github/workflows/accessibility-check.yml`:

```yaml
name: Accessibility Check # Nome do workflow

on: # Define quando o workflow será executado
  push: # Executar em cada push de código
    branches: [ "main" ] # Apenas na branch "main" (branch principal)
  pull_request: # Executar também em pull requests

jobs: # Define os jobs (tarefas) do workflow
  accessibility-check: # Job para verificação de acessibilidade
    runs-on: ubuntu-latest # Executar em ambiente Ubuntu

    steps: # Define os passos do job
    - uses: actions/checkout@v3 # Baixar o código do repositório

    - name: Run Lighthouse CI # Executar o lighthouse-ci
      uses: actions/lighthouse-ci@main
      with:
        urls: # URLs a serem testadas (substitua pela URL da sua aplicação)
          - http://localhost:3000 # Exemplo: URL local da aplicação rodando na porta 3000
        accessibilityThreshold: 90 # Define o score mínimo de acessibilidade (0-100) - Workflow falhará se score for menor que 90
        outputDirPath: ./lighthouse-report # (Opcional) Pasta para salvar o relatório

    - name: Upload Lighthouse Report Artifact # (Opcional) Publicar relatório como "artifact" do workflow
      uses: actions/upload-artifact@v3
      with:
        name: lighthouse-report
        path: ./lighthouse-report
```

4.  **Configure a URL da sua aplicação:** No arquivo YAML, substitua `http://localhost:3000` pela URL da sua aplicação web que será testada pelo lighthouse-ci. Se sua aplicação for um Single Page Application (SPA), você pode precisar configurar um servidor web simples para servir os arquivos estáticos durante o workflow.
5.  **Defina o score mínimo de acessibilidade:** Ajuste o valor de `accessibilityThreshold: 90` para definir o score mínimo de acessibilidade que sua equipe considera aceitável. Um valor de 90 ou mais geralmente indica um bom nível de acessibilidade, mas você pode ajustar de acordo com seus critérios.
6.  **Commit e push do arquivo de workflow:** Adicione o arquivo `.github/workflows/accessibility-check.yml` ao seu repositório Git, faça commit e push para o GitHub.
7.  **Verifique os resultados no GitHub Actions:** A partir de agora, a cada push ou Pull Request na branch configurada, o workflow de "Accessibility Check" será executado automaticamente. Você poderá visualizar os resultados e o relatório de acessibilidade no painel do GitHub Actions do seu repositório. Se o score de acessibilidade for inferior ao limite definido, o workflow irá falhar, impedindo o merge do código e alertando a equipe sobre a regressão de acessibilidade.