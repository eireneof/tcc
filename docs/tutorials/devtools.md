### Tutorial: Como utilizar os DevTools do Chrome como uma ferramenta de verificação de acessibilidade 🏆

1.  **Abra o DevTools**: Na página web que você quer testar, pressione **F12** ou clique com o botão direito e selecione "Inspecionar".
2.  **Acesse a aba "Lighthouse"**: No menu superior do DevTools, clique na aba "Lighthouse".
3.  **Configure o relatório**: Em "Categorias", selecione "Accessibility". Você pode manter as outras opções padrões (Dispositivo: "Mobile" ou "Desktop", Modo: "Navegação").
4.  **Gere o relatório**: Clique no botão "Gerar relatório". O Lighthouse irá analisar a página e gerar um relatório completo em alguns segundos.
5.  **Analise os resultados**: O relatório do Lighthouse irá mostrar uma pontuação de acessibilidade (de 0 a 100) e detalhar "Auditorias aprovadas" (recursos acessíveis) e "Auditorias reprovadas" (problemas de acessibilidade a serem corrigidos). Clique em cada auditoria reprovada para ver mais detalhes sobre o problema e sugestões de como corrigi-lo.