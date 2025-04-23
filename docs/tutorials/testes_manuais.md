# Tutorial: Prepare sua Entrega com Testes Manuais de Acessibilidade Web

Este tutorial foi elaborado utilizando a seguinte configuração:
- 🌐 **Navegador:** Chrome
- 🖥️ **Sistema Operacional:** Windows

## O que são os testes propostos neste tutorial?

- **Navegação por Teclado:** Testar se é possível usar o site sem o mouse, apenas com o teclado.
- **Compatibilidade com Leitores de Tela:** Testar se um programa especial chamado leitor de tela (usado por pessoas cegas ou com baixa visão) consegue entender e ler o conteúdo do site em voz alta.
- **Inspeção Visual (Uso de cores, zoom e redimensionamento, entre outros):** Observar o site para identificar problemas de contraste, cores e fluidez do layout.
- **Acessibilidade de Multimídia:** Garantir que vídeos, áudios, imagens e animações no site sejam acessíveis para diferentes perfis de usuários.

Existem outros tipos de testes de acessibilidade que podem ser realizados para garantir uma cobertura ainda maior. No entanto, para o objetivo deste guia, que é ser simples e prático para desenvolvedores, focaremos nestes quatro tipos de testes. Eles já são suficientes para garantir um nível considerável de acessibilidade para sua entrega. Mas não se prenda a eles! 😉

---

## Testando Navegação por Teclado

- **Documentação de referência:** [WebAIM | Keyboard Accessibility](https://webaim.org/techniques/keyboard/)

### 1. Relembrando alguns comandos

Pode parecer óbvio, mas para testar a navegação pelo teclado, é necessário conhecer os comandos básicos de navegação. Os principais comandos que você precisará usar são:

- `Tab`: Avançar
- `Shift` + `Tab`: Retornar
- `Enter`: Ativar ou "clicar" no elemento focado.

![Demonstração de navegação por teclado em um site, destacando o foco em elementos interativos como itens de menu e botões.](../../assets/teste_navegacao_teclado.gif)

### 2. Validando a navegação

Agora que você está mais familiarizado com os comandos básicos descritos anteriormente, utilize a tabela abaixo para explorar as interações disponíveis. Durante a navegação, observe se o comportamento dos elementos está de acordo com o esperado e com as notas fornecidas.

| Interação                        | Teclas                                                                 | Notas                                                                                                                                                                                                                                   |
|----------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Navegar para elementos interativos | `Tab` - navegar para frente <br> `Shift` + `Tab` - navegar para trás | Indicadores de foco do teclado devem estar presentes. <br> A ordem de navegação deve ser lógica e intuitiva.                                                                                                                              |
| Link                             | `Enter` - ativar o link                                                |                                                                                                                                                                                                                                         |
| Botão                            | `Enter` ou `Barra de espaço` - ativar o botão                          | Garanta que elementos com ARIA `role="button"` possam ser ativados com ambos os comandos de tecla.                                                                                                                                      |
| Caixa de seleção (Checkbox)      | `Barra de espaço` - marcar/desmarcar uma caixa de seleção              | Usuários geralmente podem selecionar zero, uma ou múltiplas opções de um grupo de caixas de seleção.                                                                                                                                   |
| Botões de opção (Radio buttons)  | `Barra de espaço` - selecionar a opção focada (se não selecionada) <br> `↑`/`↓` ou `←`/`→` - navegar entre opções <br> `Tab` - sair do grupo de botões de opção | Usuários podem selecionar apenas uma opção de um grupo de botões de opção.                                                                                                                                                             |
| Menu suspenso (Select/Dropdown)  | `↑`/`↓` - navegar entre opções <br> `Barra de espaço` - expandir <br> `Enter`/`Esc` - selecionar opção e recolher | Você também pode filtrar ou pular para opções no menu ao digitar letras.                                                                                                                         |
| Autocompletar                    | Digite para começar a filtrar <br> `↑`/`↓` - navegar para uma opção <br> `Enter` - selecionar uma opção |                                                                                                                                                                                                                                         |
| Diálogo (Dialog)                 | `Esc` - fechar                                                         | Diálogos modais devem manter o foco do teclado. <br> Diálogos não modais devem fechar automaticamente quando perdem o foco. <br> Quando um diálogo fecha, o foco geralmente deve retornar ao elemento que abriu o diálogo.                 |
| Controle deslizante (Slider)     | `↑`/`↓` ou `←`/`→` - aumentar ou diminuir o valor <br> `Home`/`End` - início ou fim | Para controles deslizantes de duas pontas (para definir um intervalo), `Tab`/`Shift` + `Tab` devem alternar entre cada ponta. <br> Em alguns controles deslizantes, `PageUp`/`PageDown` podem mover em incrementos maiores (ex.: 10%). |
| Barra de menu                    | `↑`/`↓` - opção de menu anterior/próxima <br> `Enter` - expandir o menu (opcional) e selecionar uma opção. <br> `←`/`→` - expandir/recolher submenu | Uma barra de menu altera dinamicamente o conteúdo dentro de uma aplicação. Links que utilizam `Tab`/`Enter` NÃO são barras de menu.                                                                                                  |
| Painel de abas (Tab panel)       | `Tab` - uma vez para navegar para dentro do grupo de abas e outra para navegar para fora <br> `↑`/`↓` ou `←`/`→` - escolher e ativar aba anterior/próxima. | Isso é para abas de 'aplicação' que alteram dinamicamente o conteúdo dentro do painel. Se um menu parece um grupo de abas, mas é um grupo de links para páginas diferentes, `Tab` e `Enter` são mais apropriados.                    |
| Menu em árvore ('Tree' menu)     | `↑`/`↓` - navegar opção anterior/próxima <br> `←`/`→` - expandir/recolher submenu, mover um nível acima/abaixo. |                                                                                                                                                                                                                                         |
| Rolagem (Scroll)                 | `↑`/`↓` - rolar verticalmente <br> `←`/`→` - rolar horizontalmente <br> `Barra de espaço`/`Shift` + `Barra de espaço` - rolar por página | A barra de espaço, por padrão, rolará a página, mas apenas se um controle interativo que permite entrada pela barra de espaço não estiver focado. <br> A rolagem horizontal dentro da página deve ser minimizada.                       |

_Fonte: [WebAIM | Keyboard Accessibility](https://webaim.org/techniques/keyboard/) tabela acessada em 08/04/2025_

### 3. Check dos seguintes itens

Após testar a navegação simulando um usuário padrão, garanta que os seguintes pontos estão sendo cumpridos:

- ✅ **Teste de Tabulação:** Usando a tecla `Tab` para navegar por todos os elementos interativos da página (links, botões, campos de formulário, etc.). A ordem de foco é lógica e segue o fluxo visual da página.
- ✅ **Teste de Tabulação Inversa:** Usando `Shift` + `Tab` para navegar para trás pelos elementos interativos. A ordem permanece lógica.
- ✅ **Ativação por Teclado:** Todos os elementos interativos podem ser ativados usando as teclas `Enter` ou `Espaço` (dependendo do elemento).
- ✅ **Indicador de Foco:** Um indicador de foco claro e visível aparece em cada elemento interativo quando ele recebe o foco do teclado.
- ✅ **Armadilhas de Teclado:** NÃO há "armadilhas de teclado" onde o foco fica preso em um elemento e não pode ser movido para fora usando o teclado.

<hr>

## Inspeção Visual

> 📌 Em projetos pessoais ou autônomos temos maior liberdade de atuar na correção de problemas de layout. No entanto, em equipes onde decisões de layout não são de sua responsabilidade, comunique o problema à pessoa apropriada. Mesmo que a solução não seja imediata, é importante que o problema seja registrado pela equipe ou empresa.

### A. Verifique o Contraste de Cores

- **Documentação de referência:** [web.dev | Como testar o contraste de cores do design da Web](https://web.dev/articles/testing-web-design-color-contrast?hl=pt-br)

Para garantir a acessibilidade, utilize o [Wave](./Wave.md) ou [DevTools](./devtools.md) conforme vimos anteriormente. Mas também, sinta-se livre para usar a ferramenta de sua escolha para uma última verificação do contraste de cores antes da entrega do código.

**Wave:**

![Erro de contraste apontado pelo Wave](../../assets/wave_erros_contraste.png)

**DevTools (CSS Overview):**

![Exemplo de análise de contraste no CSS Overview, mostrando problemas de contraste identificados com base nos níveis de conformidade WCAG AA e AAA.](../../assets/problemas_contraste_css_overview.png)

**Objetivo:** 
- ✅ Avaliar se há contraste suficiente entre o texto, ícones, imagens e o fundo para garantir a legibilidade para usuários com deficiências visuais.

### B. Verifique o Uso de Cores

- **Documentação de referência:** [AcessGuide | Don't use color alone to convey information (colorblind)](https://www.accessguide.io/guide/colorblind)

![Imagem comparativa entre duas interfaces de formulário para criação de senha. À esquerda, está a versão rotulada como "usuário típico", com os campos "Nova senha" em verde e "Confirmar nova senha" em vermelho, indicando visualmente correção ou erro. À direita, a versão para "usuário com tipo de daltonismo", em que ambos os textos e bordas dos campos aparecem em tonalidades similares amarronzadas, dificultando a distinção entre certo e errado apenas pela cor. Ambas as interfaces possuem um botão preto com o texto "Criar nova senha". ](../../assets/exemplo_daltonismo.png)
_Fonte: [AcessGuide | Don't use color alone to convey information (colorblind)](https://www.accessguide.io/guide/colorblind) imagem acessada em 09/04/2025_

**Objetivo:** 

- ✅ Verificar se a cor não é o único meio de transmitir informações importantes. Certifique-se de que há alternativas textuais ou visuais para usuários que não conseguem perceber cores.

### C. Verifique o Zoom e Redimensionamento da página

Aqui você deve verificar se o conteúdo da página se ajusta corretamente ao aumentar o zoom, sem quebrar o layout ou exigir rolagem horizontal excessiva.

**Como Testar?**

- **Aumentar o Zoom:** Pressione e segure a tecla `Ctrl` (ou `Command` no Mac) e pressione a tecla `+` (sinal de mais) repetidamente até atingir o nível de zoom desejado (experimente 200% ou mais).
- **Diminuir o Zoom:** Pressione e segure a tecla `Ctrl` (ou `Command` no Mac) e pressione a tecla `-` (sinal de menos).
- **Voltar ao Zoom Padrão:** Pressione e segure a tecla `Ctrl` (ou `Command` no Mac) e pressione a tecla `0` (zero).

> 💡 **Dica:** Teste em diferentes níveis de zoom (150%, 200%, 300%) para garantir que seu site funcione bem em diversas situações.

- **Redimensionamento:** Redimensione a janela do navegador para diferentes tamanhos para garantir que o conteúdo seja responsivo e não seja cortado ou obscurecido.

> 💡 **Dica:** As DevTools também oferecem uma maneira de simular diferentes tamanhos de layout. Se não souber como fazer, confira o tutorial do Chrome for Developers: [Simular dispositivos móveis com o modo dispositivo](https://developer.chrome.com/docs/devtools/device-mode?hl=pt-br)

![Em duas capturas de tela, vemos que quando o tamanho da letra aumenta, o título se sobrepõe ao texto principal, que por sua vez se sobrepõe ao texto da barra lateral. Além disso, o texto da barra lateral é cortado na parte inferior.](../../assets/redimensionamento.png)

_Fonte: [W3C | Resize text](https://www.w3.org/WAI/test-evaluate/preliminary/#resize) imagem acessada em 09/04/2025_

**Objetivos:**

- ✅ **Reflow de Conteúdo:** O texto e outros elementos da página devem se reorganizar para caber na tela sem que você precise rolar horizontalmente para ler o conteúdo principal.
- ✅ **Legibilidade:** O texto deve permanecer legível mesmo com o zoom aumentado.
- ✅ **Sem Quebras:** O layout geral da página não deve quebrar de forma significativa, tornando a navegação confusa.

---

## Acessibilidade de Multimídia

### 1. Imagens

- ✅ **Texto Alternativo (Alt Text):** Todas as imagens devem ter um texto alternativo que descreva seu conteúdo e função. Caso a imagem seja decorativa, deixe o `alt` vazio (`alt=""`).
- ✅ **Imagens Complexas:** Para imagens complexas como gráficos e diagramas, considere fornecer uma descrição mais detalhada no texto adjacente ou através de um link para uma página com a descrição completa.

### 2. Vídeos

- ✅ **Legendas para Vídeos:** Verifique se todos os vídeos têm legendas sincronizadas para usuários surdos ou com deficiência auditiva.
- ✅ **Audiodescrição para Vídeos:** Para vídeos onde o conteúdo visual é essencial para o entendimento, verifique se há audiodescrição disponível.

### 3. Áudios

- ✅ **Transcrições para Áudios:** Certifique-se de que todos os conteúdos de áudio têm transcrições textuais disponíveis.

### 4. Animações

- ✅ **Conteúdo Piscando ou em Movimento:** Verifique se há elementos piscando ou em movimento rápido que possam causar convulsões em alguns usuários. Idealmente, esses elementos devem ser evitados ou ter mecanismos para pausar ou interromper a animação.
- ✅ **GIFs ou Animações:** Caso haja GIFs ou animações, eles devem ter mecanismos para pausar ou interromper a animação.

### 5. Controles

- ✅ **Controles de Multimídia:** Certifique-se de que os controles de reprodução (play, pause, volume, etc.) são acessíveis via teclado e leitor de tela.

### 6. Links

- ✅ **Texto Descritivo:** O texto do link deve ser claro e indicar o destino do link. Evite frases genéricas como "Clique aqui".
- ✅ **Distinção Visual:** Os links devem ser visualmente distintos do texto ao redor (por exemplo, através de cor e/ou sublinhado).
- ✅ **Atributo `title` (Opcional, mas útil):** Considere adicionar um atributo `title` aos links para fornecer informações adicionais sobre o destino, especialmente se o texto do link for breve.
- ✅ **Foco Visível:** Ao navegar com o teclado, deve haver um indicador visual claro de qual link está selecionado.

### 7. Ícones

- ✅ **Ícones com Significado:** Se um ícone é usado para transmitir informações importantes, ele deve ter um texto alternativo que descreva seu significado. Alternativamente, o significado do ícone pode ser explicitado em texto adjacente.
- ✅ **Ícones Decorativos:** Ícones puramente decorativos podem ter um texto alternativo vazio (`alt=""`).
- ✅ **Contraste:** Certifique-se de que o contraste de cores dos ícones seja suficiente para que sejam facilmente visíveis.

---
## Compatibilidade com Leitores de Tela

**Documentações de Apoio:**

* [WebAIM | Testing with Screen Readers](https://webaim.org/articles/screenreader_testing/)
* [WebAIM | Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)
* [NVDA 2024.4.2 User Guide](https://download.nvaccess.org/documentation/userGuide.html)

Chegamos à etapa final, mas não menos importante: **testar a compatibilidade da sua página com leitores de tela**. Sabemos que essa etapa pode parecer diferente das outras, que envolvem ferramentas mais comuns no dia a dia do desenvolvimento (para quem não tem costume com um leitor de tela), como o teclado, a inspeção de código e os elementos da página.

> 🚨 A maioria dos desenvolvedores não tem experiência com leitores de tela, e tentar usá-los sem conhecer o básico pode ser **frustrante**.

Este tutorial é um guia inicial para o desenvolvedor que nunca utilizou ou não tem costume com um leitor de tela.

Mas não deixe que a falta de familiaridade seja um obstáculo! Comece aos poucos, pratique e você verá como seus testes se tornarão cada vez mais eficazes. Lembre-se: **usuários de leitores de tela são uma parte importante do seu público**.

Embora existam diversos leitores de tela, **cada um com seus próprios comandos**, este guia te dará uma base para testar os pontos essenciais e garantir um bom nível de acessibilidade, independentemente do leitor que você escolher usar no futuro. Para este tutorial prático, vamos focar no **NVDA**, um leitor de tela gratuito e muito utilizado no sistema operacional Windows.

**Outros Leitores de Tela para Explorar:**

* [Leitores de tela recomendados pelo A11Y Project](https://www.a11yproject.com/resources/#screen-readers)
* [Leitores de tela recomendados pela Universidade Deque](https://dequeuniversity.com/screenreaders/)

> ⚠️ **Importante!**
> Embora alguns leitores de tela possam oferecer alguma forma limitada de interação com o mouse, a experiência principal e mais eficiente para usuários cegos é através dos **comandos de teclado**. Eles memorizam atalhos para navegar por títulos, links, formulários e outros elementos da página. Então, **neste teste use o leitor de tela em conjunto com suas habilidades de navegação pelo teclado**.

**Nosso Teste Rápido com o NVDA (para devs iniciantes na ferramenta):**

Siga estes passos para uma primeira verificação com o NVDA:

1.  **Instale o NVDA:**
    * Acesse a área de [download do NVDA](https://www.nvaccess.org/download/) pelo site oficial.
    * Clique em "Download" e siga as instruções para instalar o programa no seu computador Windows.

![Usuário navegando na página oficial do NVDA, localizando a área de download e clicando no botão "Download".](../../assets/download_nvda.gif)

2.  **Inicie o NVDA:**
    * Após a instalação, você pode iniciar o NVDA pressionando as teclas `Ctrl + Alt + N` simultaneamente. Você ouvirá uma voz indicando que o NVDA está em execução.

![Captura de tela da janela "Bem-vindo ao NVDA", um leitor de tela para Windows. A janela contém uma mensagem de boas-vindas explicando como usar o NVDA, mencionando o uso das teclas Insert ou CapsLock como modificadoras. Abaixo da explicação, há uma seção de "Opções" com um menu suspenso para selecionar o esquema de teclado (atualmente "computador de mesa") e três caixas de seleção marcadas: "Usar CapsLock como uma tecla modificadora do NVDA", "Iniciar o NVDA após eu ingressar" e "Mostrar este diálogo ao iniciar o NVDA". No canto inferior direito, há um botão "Ok".](../../assets/bem_vindo_nvda.png)

3.  **Acesse a sua página web:**
    * Abra o seu navegador (Chrome, Firefox, etc.) e acesse a página web que você deseja testar.

4.  **Peça para o NVDA ler a sua página:**
     * Com a página aberta no navegador, pressione a tecla **Insert** (ou **Caps Lock**, dependendo da sua configuração do NVDA) + **Seta para baixo** (`Caps Lock + ↓`). O NVDA começará a ler o conteúdo da página em ordem.

        Alguns comandos que podem te ajudar:

        | Nome do Comando (Português)        | Tecla (Desktop)         | Descrição                                                                                                                                |
        | :--------------------------------- | :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
        | Iniciar o NVDA                     | `Ctrl + Alt + N`        | Inicia ou reinicia o NVDA.                                                                                                              |
        | Sair do NVDA                       | `NVDA + Q`, `Enter`     | Sai do NVDA.                                                                                                                           |
        | Pausar ou Reiniciar a Fala         | `Shift`                 | Pausa a fala instantaneamente. Se pressionar novamente, continuará a fala de onde parou.                                               |
        | Parar a Fala                       | `Ctrl`                  | Para a fala instantaneamente.                                                                                                           |
        | Dizer tudo                         | `NVDA + Seta para baixo`| Começa a ler da posição atual, movendo-se conforme avança.                                                                              |
        | Ler linha atual                    | `NVDA + Seta para cima` | Lê a linha atual. Pressionar duas vezes soletra a linha. Pressionar três vezes soletra a linha usando descrições de caracteres (Alfa, Bravo, Charlie, etc.). |
        | Ler seleção                        | `NVDA + Shift + Seta para cima` | Lê qualquer texto selecionado. Pressionar duas vezes soletra a informação. Pressionar três vezes soletra usando descrição de caracteres. |

        <!-- TODO: colocar vídeo de exemplo usando leitor de tela -->

5.  **Verifique os seguintes pontos enquanto o NVDA lê a página:**

    - ✅ **Conteúdo Significativo:** Todo o texto importante da página está sendo lido? A ordem em que o conteúdo é lido faz sentido?

    - ✅ **Texto Alternativo para Imagens:** Para cada imagem não textual (ícones, fotos, ilustrações), você ouve uma descrição clara e útil do que a imagem representa? Usuários cegos não podem ver as imagens. O texto alternativo (atributo `alt` na tag `<img>`) fornece uma descrição textual do conteúdo visual.

    - ✅ **Rótulos de Formulário:** Ao navegar pelos campos de formulário (caixas de texto, botões de rádio, checkboxes), você ouve o rótulo (texto que explica o que deve ser preenchido naquele campo) associado a cada um deles?

    - ✅ **Reconhecimento de Elementos:** Quando o NVDA anuncia um elemento na página, ele o identifica corretamente? Por exemplo, um botão é anunciado como "botão", um link como "link", etc.? Se um botão for anunciado apenas como "texto", o usuário pode não saber que pode clicar nele. Use o atributo `role` nas tags HTML se precisar especificar o tipo de um elemento (ex: `<div role="button">`).

    - ✅ **ARIA (Accessible Rich Internet Applications):** Verifique se os atributos ARIA estão sendo usados corretamente. Você ouve informações adicionais sobre o estado ou a função desses elementos?

    - ✅ **Mensagens de Erro:** As mensagens de erro que aparecem são anunciadas pelo NVDA de forma clara e fácil de entender?

    - ✅ **Links de Pular Conteúdo:** No início da página, logo após o carregamento, você consegue encontrar e acionar um link que permite "pular para o conteúdo principal" ou algo similar? Esse tipo de link permite que usuários de leitores de tela ignorem blocos de navegação repetitivos (como menus) e acessem diretamente o conteúdo principal da página, economizando tempo e esforço.

    - ✅ **Datas e Horários:** Se a sua página exibe datas ou unidades de tempo, o NVDA consegue ler essas informações de forma compreensível? Utilize as tags `<time>` ou `<date>` do HTML para marcar essas informações semanticamente.

    - ✅ **Outros Idiomas:** Se a sua página contém palavras ou trechos de texto em outros idiomas (como inglês), o NVDA está lendo essas partes na pronúncia correta? Use o atributo `lang` na tag HTML correspondente (ex: `<span lang="en">Hello</span>`).

Lembre-se de que este é um teste inicial e simples. À medida que você se sentir mais confortável com o NVDA ou outro leitor de tela, poderá explorar seus recursos mais avançados e realizar testes mais aprofundados. O importante é começar e incluir a perspectiva dos usuários de leitores de tela no seu processo de desenvolvimento.

---

🎉 **Parabéns por ter chegado até o fim deste tutorial!** 🎉

 Estes testes manuais são projetados para serem **simples e rápidos**, permitindo que você, como **desenvolvedor**, faça uma verificação inicial antes de cada entrega. 

Embora existam outros aspectos importantes da acessibilidade, os testes mencionados aqui visam garantir um nível mínimo de acessibilidade. **Além disso, eles oferecem a oportunidade de você se colocar no lugar do usuário, complementando a avaliação de ferramentas automatizadas com sua própria experiência e percepção.**

Caso este tutorial tenha te ajudado de alguma forma, **nos ajude a melhorar este projeto respondendo ao nosso [formulário de feedback](https://forms.gle/U75FJSutNxZ2bwWG7). 😄**

---

### Material de apoio e Referências

- [W3C | Easy Checks – A First Review of Web Accessibility](https://www.w3.org/WAI/test-evaluate/preliminary/)
- [Extensões recomendadas pelo A11Y Project](https://www.a11yproject.com/resources/#browser-extensions) que podem ser utilizadas para complementar seus testes.
- [WebAIM Articles](https://webaim.org/articles/) - Muitos dos artigos envolvem como testar alguma questão de acessibilidade na web.
