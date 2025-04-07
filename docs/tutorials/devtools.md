# Tutorial: Como utilizar os DevTools do Chrome como uma ferramenta de verificação de acessibilidade 🏆

<!--
🎯 **TODO:** 
- Verificar Contraste de Cores
- Testar Navegação por Teclado
- Simular a Experiência de determinados grupos de usuários -->

Este tutorial foi feito utilizando as seguintes configurações:
- 🌐 **Navegador:** Chrome

## 🚀 O que é o Lighthouse?

O **Lighthouse** é uma ferramenta automatizada integrada ao DevTools do Chrome, projetada para ajudar desenvolvedores a melhorar a qualidade de suas páginas web. Ele realiza auditorias em diversas áreas, como **acessibilidade**, **performance**, **SEO** e **melhores práticas**, gerando relatórios detalhados com sugestões de melhorias. Por ser parte do DevTools, o Lighthouse é fácil de acessar e pode ser usado em qualquer página renderizada no navegador, tornando-se uma solução prática e poderosa para otimizar a experiência do usuário.

Neste tutorial, o foco será entender como utilizar o Lighthouse para avaliar e melhorar a **acessibilidade** de páginas web, garantindo que elas sejam inclusivas e acessíveis para diversos usuários. 🌟

## 📝 1. Gerar Relatórios de Acessibilidade

### **a) Abra o DevTools**  
Na página web que você quer testar, pressione **F12** ou clique com o botão direito e selecione **"Inspecionar"**.

### **b) Acesse a aba "Lighthouse"**  
No menu superior do DevTools, clique na aba **"Lighthouse"**.

![Gif mostrando um usuário abrindo o DevTools no Chrome e navegando até a aba Lighthouse](../../assets/abrindo_lighthouse.gif)

### **c) Configure o relatório**  
Selecione as seguintes opções:  
- **Modo:** Navegação  
- **Dispositivo:** Desktop (ou Mobile, se preferir)  
- **Categoria:** Accessibility  

> **💡 Dica:** O modo **Navegação** é o padrão e mais comum. Ideal para avaliar a performance e a acessibilidade da carga inicial de uma página, como a página de destino de um site.  

Para saber mais sobre os outros modos, confira a documentação: [User Flows in Lighthouse](https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/user-flows.md).  

As **Categorias** disponíveis são:  
- **⚡ Performance:** Velocidade e capacidade de resposta da página.  
- **♿ Acessibilidade:** Facilidade de uso para diversos grupos de usuários (foco deste tutorial).  
- **🔒 Melhores Práticas:** Adesão a padrões modernos de desenvolvimento web (segurança, otimização, etc.).  
- **🔍 SEO:** Otimização para mecanismos de busca.  

![Captura de tela do painel Lighthouse no DevTools do Chrome, mostrando as opções de configuração selecionadas: Modo "Navigation", Dispositivo "Desktop" e Categoria "Accessibility".](../../assets/painel_lighthouse.png)

### **d) Gere o relatório**  
Clique no botão **"Gerar relatório"**. O Lighthouse irá analisar a página e gerar um relatório completo em alguns segundos.  

![Gif mostrando o processo de análise de acessibilidade no Lighthouse, com geração de relatório em carregamento.](../../assets/audit_lighthouse.gif)

### **e) Analise os resultados**  
O relatório do Lighthouse irá mostrar uma pontuação de acessibilidade (de **0 a 100**) e detalhar:  
- **✅ Auditorias aprovadas:** Recursos acessíveis.  
- **❌ Auditorias reprovadas:** Problemas de acessibilidade a serem corrigidos.  

Clique em cada auditoria reprovada para ver mais detalhes sobre o problema e sugestões de como corrigi-lo.  

![Relatório de acessibilidade gerado pelo Lighthouse, exibindo a pontuação e detalhes das auditorias.](../../assets/lighthouse_report.png)

Com o relatório gerado, clique no menu de configurações (ícone de três pontinhos) para acessar opções adicionais, como abrir o relatório em uma nova aba ou salvá-lo em diferentes formatos, como **HTML** ou **JSON**.  

![Gif mostrando um relatório gerado pelo Lighthouse aberto no navegador, exibindo a pontuação de acessibilidade e detalhes das auditorias.](../../assets/report_lighthouse.gif)

📂 **Exemplo de relatório do Lighthouse:**  
[Relatório de exemplo](../../assets/reports/github_lighthouse_docs%20_user_flows.html) ao auditar a página da documentação [User Flows in Lighthouse](https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/user-flows.md). Este relatório é um arquivo do tipo `.html`, então recomendo abri-lo em um navegador.  

> **✨ Dica:** Você pode explorar o relatório de exemplo ou auditar uma página qualquer. **Lembre-se que é possível utilizar o Lighthouse em qualquer página renderizada pelo Chrome, então o céu é o limite!** 🚀  

## 🌳 2. Analisar a Árvore de Acessibilidade

Caso você tenha dúvidas, vale a pena dar uma lida nessa documentação: [A árvore de acessibilidade](https://web.dev/articles/the-accessibility-tree?hl=pt-br).  

### **a) Abra o DevTools**  
Na página que você deseja analisar, pressione **F12** ou clique com o botão direito e selecione **"Inspecionar"**.  

### **b) Acesse a aba "Elementos"**  
No DevTools, clique na aba **"Elementos"**.  

### **c) Encontre a sub-aba "Acessibilidade"**  
Dentro da aba **"Elementos"**, localize o subconjunto de abas e clique na sub-aba **"Acessibilidade"**.  

![Captura de tela mostrando a aba "Elementos" no DevTools e a sub-aba "Acessibilidade"](../../assets/devtools_elementos.png)

### **d) Visualize a Árvore de Acessibilidade**  
Na seção **"Acessibilidade"**, localize a área chamada **"Árvore de Acessibilidade"**. Aqui, você poderá observar como os elementos da página são representados na árvore.  

![Exemplo de Árvore de Acessibilidade com vários elementos "generic"](../../assets/arvore_acessibilidade_com_generic.png)

> **💡 Dica:** Note a quantidade de elementos **"generic"** na árvore neste exemplo. Isso ilustra a importância de usar `<div>` e outros elementos genéricos com sabedoria, pois eles podem impactar negativamente a acessibilidade.  

### **e) Ative a Árvore de Acessibilidade Completa (opcional)**  
Se desejar visualizar todos os elementos da página na árvore, ative a opção **"Ativar árvore de acessibilidade de página inteira"** e recarregue o DevTools.  

### **f) Explore os elementos na árvore**  
Clique no ícone de acessibilidade para visualizar os elementos de acordo com a estrutura da árvore.  

Antes:  

![Visualização detalhada da Árvore de Acessibilidade Ativado](../../assets/visualizacao_arvore.png)

Depois:  

![Elementos da página baseados na árvore de acessibilidade](../../assets/elementos_de_acordo_arvore.png)

A **Árvore de Acessibilidade** reflete como leitores de tela e navegação por teclado interpretam a página. Use essa ferramenta para criar uma navegação fluida e semântica em seus projetos.  

## 🔍 3. Inspecionar Atributos ARIA e Propriedades Computadas

Os atributos [**ARIA (Accessible Rich Internet Applications)**](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA) são usados para fornecer informações semânticas adicionais sobre elementos HTML para tecnologias assistivas, como leitores de tela. Inspecionar esses atributos é fundamental para garantir que seu conteúdo seja compreendido corretamente por todos os usuários.  

Já as **propriedades computadas** são valores derivados que refletem o estado atual de um elemento na página, como estilos aplicados, dimensões e visibilidade.  

### **a) Abra o DevTools**  
Se já não estiver aberto, siga os passos do item 2 (a).  

### **b) Acesse a aba "Elementos"**  
Se já não estiver selecionada, siga os passos do item 2 (b).  

### **c) Selecione o Elemento**  
No painel **"Elementos"**, selecione o elemento HTML que você deseja inspecionar. Este deve ser o elemento que você suspeita ou sabe que possui atributos ARIA.  

### **d) Vá para a Guia "Acessibilidade"**  
Siga os passos do item 2 (c) para acessar a guia **"Acessibilidade"**.  

### **e) Verifique a seção "Atributos ARIA" e "Propriedades Computadas"**  
Na guia **"Acessibilidade"**, logo abaixo da **"Árvore de acessibilidade"**, você encontrará as seções **"Atributos ARIA"** e **"Propriedades Computadas"**.  

![Captura de tela mostrando a guia "Acessibilidade" com a seção "Atributos ARIA" e "Elementos Computados" destacados.](../../assets/aria_e_elementos_computados.png)

### **f) Analise os Atributos ARIA e as Propriedades Computadas**  

- **Atributos ARIA:** Esta seção listará todos os atributos ARIA presentes no elemento selecionado, juntamente com seus respectivos valores.  
- **Propriedades Computadas:** Esta seção mostrará as propriedades de acessibilidade calculadas pelo navegador para o elemento. Isso inclui informações como o nome acessível do elemento, sua descrição, role (função), e estados (como se está selecionado ou expandido).  

> **🔎 O que observar:**  
> - **Presença de Atributos ARIA:** Eles são necessários? A semântica HTML nativa não seria suficiente?  
> - **Valores Corretos:** Os valores refletem o estado atual do elemento?  
> - **Uso Adequado:** ARIA está complementando a semântica nativa ou mascarando a falta dela?  
> - **Nome e Descrição Computados:** O nome e a descrição fazem sentido no contexto da página?  
> - **Role Computado:** O role reflete o comportamento e a finalidade do elemento?  
> - **Estados Computados:** Os estados refletem o estado atual do elemento na interface?  

Ao inspecionar tanto os atributos ARIA quanto as propriedades computadas, você pode obter uma visão completa de como um elemento é exposto para usuários de tecnologias assistivas. Isso permite avaliar se as informações necessárias estão sendo fornecidas de forma adequada e se há oportunidades para simplificar ou melhorar a acessibilidade do seu código. 🌟  