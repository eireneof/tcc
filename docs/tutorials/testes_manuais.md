# Tutorial: Prepare sua Entrega com Testes Manuais de Acessibilidade Web

Este tutorial foi elaborado utilizando as seguintes configurações:
- 🌐 **Navegador:** Chrome

## O que são os testes propostos neste tutorial?

- **Navegação por Teclado:** Testar se é possível usar o site sem o mouse, apenas com o teclado.
- **Compatibilidade com Leitores de Tela:** Testar se um programa especial chamado leitor de tela (usado por pessoas cegas ou com baixa visão) consegue entender e ler o conteúdo do site em voz alta.
- **Inspeção Visual (Uso de cores, zoom e redimensionamento, entre outros):** Observar o site para identificar problemas de contraste, cores e fluidez do layout.
- **Acessibilidade de Multimídia:** Garantir que vídeos, áudios, imagens e animações no site sejam acessíveis para diferentes perfis de usuários.

Existem outros tipos de testes de acessibilidade que podem ser realizados para garantir uma cobertura ainda maior. No entanto, para o objetivo deste guia, que é ser simples e prático para desenvolvedores, focaremos nestes quatro tipos de testes. Eles já são suficientes para garantir um nível considerável de acessibilidade para sua entrega. Mas não se prenda a eles! 😉

## Testando Navegação por Teclado

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

_Fonte: [WebAIM | Keyboard Accessibility](https://webaim.org/techniques/keyboard/) acessado em 08/04/2025_

### 3. Check dos seguintes itens

Após testar a navegação simulando um usuário padrão, garanta que os seguintes pontos estão sendo cumpridos:

- ✅ **Teste de Tabulação:** Usando a tecla `Tab` para navegar por todos os elementos interativos da página (links, botões, campos de formulário, etc.). A ordem de foco é lógica e segue o fluxo visual da página.
- ✅ **Teste de Tabulação Inversa:** Usando `Shift` + `Tab` para navegar para trás pelos elementos interativos. A ordem permanece lógica.
- ✅ **Ativação por Teclado:** Todos os elementos interativos podem ser ativados usando as teclas `Enter` ou `Espaço` (dependendo do elemento).
- ✅ **Indicador de Foco:** Um indicador de foco claro e visível aparece em cada elemento interativo quando ele recebe o foco do teclado.
- ✅ **Armadilhas de Teclado:** NÃO há "armadilhas de teclado" onde o foco fica preso em um elemento e não pode ser movido para fora usando o teclado.
