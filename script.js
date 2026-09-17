const toolLinks = {
  Miro: 'https://miro.com',
  FigJam: 'https://www.figma.com/figjam/',
  Figma: 'https://www.figma.com',
  Dovetail: 'https://dovetail.com',
  Lookback: 'https://lookback.com',
  Typeform: 'https://www.typeform.com',
  Notion: 'https://www.notion.so',
  Mural: 'https://www.mural.co',
  Whimsical: 'https://whimsical.com',
  Maze: 'https://maze.co',
  Useberry: 'https://www.useberry.com',
  Hotjar: 'https://www.hotjar.com',
  'Google Forms': 'https://forms.google.com',
  Readymag: 'https://readymag.com',
  Framer: 'https://www.framer.com',
  Webflow: 'https://webflow.com',
  ProtoPie: 'https://www.protopie.io',
  'GPT Research': 'https://gptr.dev/#oss',
  Perplexity: 'https://www.perplexity.ai',
  Elicit: 'https://elicit.com',
  Consensus: 'https://consensus.app',
  Lucidchart: 'https://www.lucidchart.com',
  UXPressia: 'https://uxpressia.com',
  Smaply: 'https://smaply.com',
  Xtensio: 'https://xtensio.com',
  FlowMapp: 'https://www.flowmapp.com',
  Penpot: 'https://penpot.app',
  'UserTesting': 'https://www.usertesting.com',
  'Optimal Workshop': 'https://www.optimalworkshop.com',
  'Crazy Egg': 'https://www.crazyegg.com',
  FullStory: 'https://www.fullstory.com',
  VWO: 'https://vwo.com',
  SurveyMonkey: 'https://www.surveymonkey.com',
  Airtable: 'https://www.airtable.com',
  Canva: 'https://www.canva.com',
  Zoom: 'https://zoom.us',
  'Sitemap Generator': 'https://www.sitemap-generator.com',
  Stormboard: 'https://stormboard.com',
  'PenPot': 'https://penpot.app',
  'Google Analytics': 'https://analytics.google.com'
};

const phases = [
  { number: '01', name: 'Empatia', color: '#ff6648', subtitle: 'Ferramentas para pesquisa, entrevistas e imersão.', label: 'A história desta fase', story: 'Tudo começa no kickoff. O product designer reúne o time em volta do <button class="briefing-trigger" type="button">Briefing Canvas</button> e transforma o problema em perguntas antes de propor qualquer solução. O objetivo ainda não é desenhar — é entender quem vive o problema, onde ele aparece e por quê.', next: 'compreender o contexto', methods: [
    { name: 'Entrevista com partes interessadas', summary: 'Alinhe visões, restrições e expectativas com as pessoas que conhecem o negócio por dentro.', how: 'Prepare um roteiro semiestruturado, entreviste as áreas-chave e registre fatos, hipóteses e tensões. Termine perguntando o que ainda não está sendo dito.', output: 'Mapa de expectativas, riscos do projeto e perguntas para investigar com usuários.', icon: 'messages-square', tools: [['Roteiro colaborativo', 'Miro']] },
    { name: 'Mapa de partes interessadas', summary: 'Entenda quem influencia, decide, usa ou é impactado pela solução.', how: 'Liste os envolvidos e posicione cada pessoa pelo nível de influência e interesse. Use o mapa para definir quem ouvir primeiro e como envolver cada grupo.', output: 'Mapa de influência, plano de envolvimento e prioridades de pesquisa.', icon: 'network', tools: [['Mapa visual', 'FigJam']] },
    { name: 'Matriz CSD', summary: 'Separe o que já sabemos, o que acreditamos e o que ainda precisamos descobrir.', how: 'Em grupo, distribua cartões nas colunas Certezas, Suposições e Dúvidas. Transforme as dúvidas mais críticas em perguntas de pesquisa.', output: 'Backlog de perguntas, hipóteses explícitas e foco para a descoberta.', icon: 'table-2', tools: [['Canvas de descoberta', 'Miro']] },
    { name: 'Desk research', summary: 'Investigue o contexto antes de sair perguntando: mercado, concorrentes, dados e tendências.', how: 'Defina palavras-chave, fontes e critérios de confiabilidade. Registre evidências com links e data para não transformar opinião em fato.', output: 'Relatório de referências, benchmark e sinais do contexto.', icon: 'search', tools: [['Pesquisa e síntese', 'Notion'], ['Formulário de sinais', 'Typeform']] },
    { name: 'Mapa de empatia', summary: 'Feche a descoberta organizando o que a pessoa pensa, sente, fala e faz.', how: 'Preencha o mapa com evidências coletadas na pesquisa, não estereótipos. Diferencie fala literal de interpretação e destaque dores, necessidades e ganhos.', output: 'Visão compartilhada do usuário e uma ponte de evidências para a fase de Definição.', icon: 'heart', tools: [['Mapa colaborativo', 'Miro']] }
  ] },
  { number: '02', name: 'Definição', color: '#35b9b4', subtitle: 'Ferramentas para sintetizar dados, criar personas e enquadrar o problema.', label: 'A história desta fase', story: 'Com a descoberta organizada, o time <button class="sensemaking-trigger" type="button">sintetiza</button> os sinais. O agrupamento revela padrões, as personas dão rosto ao usuário, a jornada mostra os atritos e a declaração do problema transforma evidências em um foco claro para a ideação.', next: 'enquadrar a oportunidade', methods: [
    { name: 'Mapa de afinidades', summary: 'Encontre temas recorrentes agrupando observações que falam da mesma coisa.', how: 'Espalhe os achados, agrupe por afinidade sem nomear cedo demais e dê títulos que expressem o padrão encontrado.', output: 'Grupos de insights, temas e oportunidades de investigação.', icon: 'blocks', tools: [['Mural de síntese', 'FigJam']] },
    { name: 'Personas', summary: 'Crie arquétipos baseados em padrões reais para orientar decisões.', how: 'Combine comportamentos, objetivos e contexto. Dê à persona uma frase que ajude o time a lembrar para quem está projetando.', output: 'Persona principal, necessidades, objetivos e critérios de sucesso.', icon: 'user-round', tools: [['Documento da persona', 'Notion'], ['Interface da persona', 'Figma']] },
    { name: 'Jornada atual', summary: 'Visualize a experiência existente e os atritos que merecem atenção.', how: 'Mapeie etapas, ações, pensamentos e emoções. Marque momentos de verdade e oportunidades com evidências da pesquisa.', output: 'Jornada do usuário, pain points e momentos de oportunidade.', icon: 'map', tools: [['Mapa de jornada', 'Miro']] }
  ] },
  { number: '03', name: 'Ideação', color: '#f1c637', subtitle: 'Ferramentas para brainstorming, priorização e construção de soluções.', label: 'A história desta fase', story: 'Com o desafio bem enquadrado, é hora de abrir o leque. O time gera sem julgamento, dá forma às ideias e as prioriza pelo impacto e esforço. A solução escolhida não é a mais bonita: é a hipótese mais promissora para aprender.', next: 'escolher uma hipótese', methods: [
    { name: 'Como poderíamos...?', summary: 'Converta dores em perguntas abertas que convidam à criação.', how: 'Reescreva o problema começando com “Como poderíamos...?”. Mantenha a pergunta ampla o bastante para permitir caminhos diferentes.', output: 'Perguntas de oportunidade que orientam o brainstorming.', icon: 'circle-help', tools: [['Banco de perguntas', 'Notion']] },
    { name: 'Escrita de ideias', summary: 'Gere ideias em silêncio para que todas as vozes entrem na sala.', how: 'Dê alguns minutos para cada pessoa escrever ideias individualmente. Depois, faça rodadas de expansão e combine possibilidades.', output: 'Lista ampla de soluções sem o viés da primeira voz.', icon: 'lightbulb', tools: [['Ideação silenciosa', 'FigJam']] },
    { name: 'Oito ideias em oito minutos', summary: 'Oito ideias em oito minutos para desbloquear o pensamento.', how: 'Dobre uma folha em oito partes e esboce uma ideia por minuto. Compartilhe o raciocínio, não a estética do desenho.', output: 'Variações rápidas para comparar e desenvolver.', icon: 'zap', tools: [['Rodada de esboços', 'Miro']] },
    { name: 'Matriz impacto x esforço', summary: 'Escolha ideias pelo valor que entregam e pela complexidade envolvida.', how: 'Estime impacto e esforço com o time. Posicione as ideias, discuta os extremos e escolha uma hipótese para prototipar.', output: 'Backlog priorizado e decisão de qual ideia testar primeiro.', icon: 'grid-2x2', tools: [['Matriz de priorização', 'Mural']] }
  ] },
  { number: '04', name: 'Prototipagem', color: '#7198eb', subtitle: 'Ferramentas para wireframes, interfaces e protótipos.', label: 'A história desta fase', story: 'A hipótese sai do post-it e ganha forma. Começamos com <strong>wireframes</strong> de baixa fidelidade, testamos o fluxo principal e só depois investimos em interface. Um protótipo bom torna a pergunta clara o bastante para ser respondida.', next: 'materializar a solução', methods: [
    { name: 'Arquitetura da informação', summary: 'Organize conteúdo, caminhos e prioridades antes de desenhar telas.', how: 'Liste conteúdos e ações, agrupe por sentido e teste a hierarquia com o time e usuários.', output: 'Mapa de conteúdo e estrutura de navegação.', icon: 'sitemap', tools: [['Fluxo estrutural', 'Whimsical']] },
    { name: 'Wireframe', summary: 'Desenhe a arquitetura da tela sem se prender ao visual.', how: 'Comece pelo objetivo da tela, distribua conteúdo e priorize ações. Use baixa fidelidade para conseguir mudar rápido.', output: 'Esboços das telas essenciais e hipóteses de layout.', icon: 'layout-template', tools: [['Wireframes e UI', 'Figma']] },
    { name: 'Fluxo do usuário', summary: 'Mapeie o caminho que uma pessoa percorre até seu objetivo.', how: 'Parta da tarefa principal, desenhe decisões e estados alternativos. Corte etapas que não ajudam o usuário a chegar ao resultado.', output: 'Fluxo principal, exceções e pontos de decisão.', icon: 'git-branch', tools: [['Diagrama de fluxo', 'Whimsical']] },
    { name: 'Protótipo navegável', summary: 'Simule a experiência para observar comportamento em contexto.', how: 'Conecte somente os caminhos necessários para responder à pergunta da rodada. Inclua estados de erro e sucesso quando forem críticos.', output: 'Protótipo clicável pronto para validação.', icon: 'mouse-pointer-2', tools: [['Protótipo visual', 'Figma'], ['Interações avançadas', 'ProtoPie']] }
  ] },
  { number: '05', name: 'Validação', color: '#9d7ce7', subtitle: 'Ferramentas para testes, coleta de feedback e análise de resultados.', label: 'A história desta fase', story: 'O protótipo encontra pessoas reais. No teste de usabilidade, observamos o que elas fazem, não apenas o que dizem. Os achados viram evidências: celebramos o que funcionou, isolamos o atrito e iteramos quando o aprendizado pedir.', next: 'aprender e iterar', methods: [
    { name: 'Teste de usabilidade', summary: 'Observe tarefas reais e encontre pontos de fricção no fluxo.', how: 'Defina objetivo e tarefas, recrute pessoas do perfil e conduza sem entregar a resposta. Observe silêncio, hesitação e atalhos.', output: 'Evidências de comportamento, problemas priorizados e recomendações.', icon: 'scan-search', tools: [['Teste remoto', 'Maze']] },
    { name: 'Teste moderado', summary: 'Converse enquanto a pessoa usa o protótipo para entender o porquê das ações.', how: 'Faça perguntas abertas depois da tarefa. Evite corrigir ou explicar durante a execução para não contaminar o resultado.', output: 'Notas de sessão, citações e hipóteses de melhoria.', icon: 'video', tools: [['Sessões gravadas', 'Lookback']] },
    { name: 'Análise de comportamento', summary: 'Entenda onde as pessoas clicam, param e abandonam.', how: 'Compare gravações, mapas de calor e funis. Procure recorrência, não um caso isolado.', output: 'Padrões de comportamento e pontos críticos do produto.', icon: 'flame', tools: [['Heatmaps e gravações', 'Hotjar']] },
    { name: 'Pesquisa de satisfação', summary: 'Meça percepção e confiança com perguntas objetivas.', how: 'Escolha poucas perguntas alinhadas ao objetivo e combine escala com campo aberto. Analise respostas junto das evidências qualitativas.', output: 'Sinais de satisfação, confiança e percepção de valor.', icon: 'clipboard-list', tools: [['Questionário', 'Google Forms'], ['Pesquisa rápida', 'Typeform']] }
  ] },
  { number: '06', name: 'Documentação', color: '#5bb98d', subtitle: 'A estrutura para contar e publicar seu estudo de caso.', label: 'A história do desfecho', story: 'Todo projeto termina com uma história que pode continuar ensinando. Usamos a <strong>Jornada do Herói</strong> para organizar o estudo de caso: o contexto é o mundo comum, o desafio chama para a aventura, os aprendizados são as provas e o resultado mostra como o produto voltou diferente para o mundo.', next: 'comunicar impacto', methods: [
    { name: 'Mundo comum', summary: 'Apresente o contexto antes da mudança: produto, cenário, time e público.', how: 'Abra com uma imagem do problema e explique por que ele importava naquele momento. Dê ao leitor o mínimo necessário para se localizar.', output: 'Contexto, papel do time, restrições e objetivo do projeto.', icon: 'book-open', tools: [['Página do case', 'Notion']] },
    { name: 'Chamado à aventura', summary: 'Conte qual desafio tirou o projeto do lugar onde estava.', how: 'Formule a pergunta central e mostre a evidência que tornou a mudança necessária. Seja específico sobre o que estava em jogo.', output: 'Desafio, hipótese inicial e critérios de sucesso.', icon: 'flag', tools: [['Narrativa visual', 'Readymag']] },
    { name: 'Provas e aprendizados', summary: 'Mostre o processo, as decisões e os momentos em que a equipe mudou de direção.', how: 'Selecione artefatos que provam o raciocínio. Explique o que foi tentado, o que falhou e como os dados orientaram a próxima escolha.', output: 'Processo, decisões, métodos e aprendizados.', icon: 'milestone', tools: [['Case interativo', 'Framer']] },
    { name: 'Retorno com o elixir', summary: 'Feche com impacto, reflexão e o que o projeto deixou para o futuro.', how: 'Conecte resultado a métricas ou evidências. Termine com uma reflexão honesta e os próximos passos que ainda estão abertos.', output: 'Resultado, impacto, aprendizados e próximos passos.', icon: 'trending-up', tools: [['Publicação final', 'Webflow']] }
  ] }
];

const supportToolsByMethod = {
  'Desk research': ['GPT Research', 'Perplexity', 'Elicit', 'Consensus'],
  'Mapa de partes interessadas': ['Miro', 'FigJam', 'Lucidchart', 'Mural'],
  'Mapa de empatia': ['Miro', 'FigJam', 'UXPressia', 'Smaply'],
  'Personas': ['Figma', 'UXPressia', 'Xtensio', 'Miro'],
  'Jornada atual': ['Miro', 'FigJam', 'UXPressia', 'Smaply'],
  'Como poderíamos...?': ['Miro', 'FigJam', 'Mural', 'Whimsical'],
  'Escrita de ideias': ['FigJam', 'Miro', 'Mural', 'Stormboard'],
  'Oito ideias em oito minutos': ['Miro', 'FigJam', 'Whimsical', 'PenPot'],
  'Arquitetura da informação': ['Miro', 'Whimsical', 'FlowMapp', 'Sitemap Generator'],
  'Wireframe': ['Figma', 'Sketch', 'Penpot', 'Framer'],
  'Fluxo do usuário': ['Whimsical', 'Miro', 'FigJam', 'FlowMapp'],
  'Protótipo navegável': ['Figma', 'ProtoPie', 'Framer', 'Maze'],
  'Teste de usabilidade': ['Maze', 'UserTesting', 'Optimal Workshop', 'Lookback'],
  'Teste moderado': ['Lookback', 'UserTesting', 'Miro', 'Zoom'],
  'Análise de comportamento': ['Hotjar', 'Crazy Egg', 'FullStory', 'VWO'],
  'Pesquisa de satisfação': ['Google Forms', 'Typeform', 'SurveyMonkey', 'Hotjar'],
  'Mundo comum': ['Notion', 'Readymag', 'Figma', 'Canva'],
  'Chamado à aventura': ['Readymag', 'Framer', 'Figma', 'Miro'],
  'Provas e aprendizados': ['Framer', 'Notion', 'Figma', 'Airtable'],
  'Retorno com o elixir': ['Webflow', 'Framer', 'Readymag', 'Notion']
};

const extraMethods = [
  [
    ['Plano de pesquisa', 'clipboard-check', 'Notion'], ['Recrutamento de usuários', 'user-plus', 'Typeform'], ['Roteiro de entrevista', 'list-checks', 'Notion'], ['Entrevista com usuários', 'mic', 'Dovetail'], ['Shadowing', 'footprints', 'Lookback'], ['Diário de uso', 'book-open-check', 'Google Forms']
  ],
  [
    ['Codificação de dados', 'tags', 'Dovetail'], ['Clusterização de insights', 'layers-3', 'FigJam'], ['Mapa de necessidades', 'scan-heart', 'Miro'], ['Segmentação de usuários', 'users-round', 'Notion'], ['Declaração do problema (POV)', 'file-pen-line', 'Notion'], ['Perguntas de oportunidade', 'circle-help', 'FigJam']
  ],
  [
    ['Benchmark de soluções', 'telescope', 'Miro'], ['Crazy 4s', 'timer', 'FigJam'], ['SCAMPER', 'shuffle', 'Miro'], ['Storyboarding', 'panels-top-left', 'Figma'], ['Votação por pontos', 'circle-dot', 'FigJam'], ['Hipótese priorizada', 'target', 'Notion']
  ],
  [
    ['Card sorting', 'layers-2', 'FigJam'], ['Mapa de conteúdo', 'list-tree', 'Whimsical'], ['Esboço em papel', 'pencil', 'Miro'], ['Wireframe de baixa fidelidade', 'square-dashed', 'Figma'], ['Wireframe de alta fidelidade', 'layout-dashboard', 'Figma'], ['Design system mínimo', 'component', 'Figma']
  ],
  [
    ['Plano de teste', 'clipboard-check', 'Notion'], ['Recrutamento para teste', 'user-round-plus', 'Typeform'], ['Roteiro de tarefas', 'list-todo', 'Notion'], ['Teste de cinco segundos', 'timer-reset', 'Maze'], ['Teste A/B', 'split', 'Maze'], ['Síntese de achados', 'notebook-pen', 'FigJam']
  ],
  [
    ['Briefing do case', 'file-text', 'Notion'], ['Linha do tempo do projeto', 'calendar-range', 'Miro'], ['Curadoria de artefatos', 'folder-search', 'Notion'], ['Narrativa de decisões', 'git-commit-horizontal', 'Readymag'], ['Métricas de impacto', 'bar-chart-3', 'Framer'], ['Publicação e retrospectiva', 'send', 'Webflow']
  ]
];

const phaseLearning = [
  'Descubra o contexto com evidências e transforme cada conversa em uma próxima pergunta.',
  'Organize os sinais até que o problema fique claro, compartilhado e acionável.',
  'Abra possibilidades, combine ideias e escolha a hipótese mais valiosa para testar.',
  'Dê forma à hipótese em pequenos ciclos, sempre deixando a pergunta visível.',
  'Coloque a solução diante de pessoas reais e use cada comportamento para decidir o próximo ajuste.',
  'Transforme o caminho percorrido em uma história clara, verificável e útil para quem vier depois.'
];

const toolCatalog = [
  {
    category: 'Pesquisa e descoberta',
    description: 'Ferramentas para ouvir usuários, entender contexto e coletar sinais antes de definir a solução.',
    tools: [
      { name: 'Google Forms', url: 'https://forms.google.com', summary: 'Crie pesquisas rápidas para validar dores, preferências e comportamentos.', use: 'Use para coletar dados em escala e cruzar opiniões com a etapa de Empatia e Definição.', phase: 'Empatia / Definição' },
      { name: 'Typeform', url: 'https://www.typeform.com', summary: 'Formulários mais amigáveis para entrevistas, pesquisas e feedbacks.', use: 'Ideal para pesquisas com respostas mais abertas e experiências humanas menos friccionadas.', phase: 'Empatia' },
      { name: 'Dovetail', url: 'https://dovetail.com', summary: 'Organize entrevistas, tags, insights e evidências em um só lugar.', use: 'Use para transformar gravações e notas em padrões, temas e aprendizados válidos para a fase de Definição.', phase: 'Definição' },
      { name: 'Lookback', url: 'https://lookback.com', summary: 'Faça testes moderados e colete feedback em tempo real com sessões remotas.', use: 'Útil para validar hipóteses e observar comportamento em protótipos e testes de usabilidade.', phase: 'Validação' }
    ]
  },
  {
    category: 'Design e prototipagem',
    description: 'Ferramentas para estruturar interfaces, criar fluxos e prototipar experiências antes da validação.',
    tools: [
      { name: 'Figma', url: 'https://www.figma.com', summary: 'Crie wireframes, interfaces, sistemas de design e protótipos interativos.', use: 'Use em todo o processo, mas especialmente em Prototipagem e documentação visual da solução.', phase: 'Prototipagem / Documentação' },
      { name: 'Sketch', url: 'https://www.sketch.com', summary: 'Ferramenta clássica para design de interfaces e design systems.', use: 'Bom para criar fluxos e componentes em etapas de estruturação e prototipagem visual.', phase: 'Prototipagem' },
      { name: 'Miro', url: 'https://miro.com', summary: 'Quadros colaborativos para brainstorming, mapas, jornadas e fluxos.', use: 'Essencial em Empatia, Ideação e Definição para reunir o time e visualizar o processo.', phase: 'Empatia / Ideação / Definição' },
      { name: 'FigJam', url: 'https://www.figma.com/figjam/', summary: 'Brainstorming e colaboração em tempo real com notas, sticky notes e mapas.', use: 'Ideal para workshops, lógica de fluxo, prototipagem rápida e alinhamento em grupo.', phase: 'Ideação / Definição' }
    ]
  },
  {
    category: 'Sistema e produto',
    description: 'Recursos para dar consistência visual, organizar conteúdo e manter a experiência coerente.',
    tools: [
      { name: 'Material Design', url: 'https://m3.material.io', summary: 'Sistema de design e diretrizes visuais para criar produtos consistentes e acessíveis.', use: 'Use para refletir padrões de interface, espaçamento, tipografia e comportamento em protótipos e produto final.', phase: 'Prototipagem / Documentação' },
      { name: 'Apple Human Interface Guidelines', url: 'https://developer.apple.com/design/', summary: 'Diretrizes de interação e visual para experiências nativas da plataforma Apple.', use: 'Útil quando o produto precisa seguir padrões específicos de iOS, macOS, watchOS ou visionOS.', phase: 'Prototipagem / Documentação' },
      { name: 'Google Design', url: 'https://design.google', summary: 'Biblioteca de princípios, recursos e estudos de caso para design de produtos.', use: 'Bom para aprender padrões e embasar decisões de experiência em etapas de Definição e Prototipagem.', phase: 'Definição / Prototipagem' },
      { name: 'Notion', url: 'https://www.notion.so', summary: 'Documentação, planejamento e armazenamento de pesquisas e artefatos do projeto.', use: 'Ajuda a manter o contexto da jornada, aprendizados e artefatos em todas as fases do processo.', phase: 'Documentação / Definição' }
    ]
  },
  {
    category: 'Validação e análise',
    description: 'Ferramentas para testar, medir e transformar feedback em decisões concretas.',
    tools: [
      { name: 'Maze', url: 'https://maze.co', summary: 'Teste de usabilidade remoto com tarefas e análise de comportamento.', use: 'Use para validar protótipos e coletar dados de uso em etapas finais de Prototipagem e Validação.', phase: 'Prototipagem / Validação' },
      { name: 'Hotjar', url: 'https://www.hotjar.com', summary: 'Heatmaps, gravações e feedback para entender comportamento do usuário.', use: 'Útil para confirmar atritos e padrões após a entrega de uma solução ou versão beta.', phase: 'Validação' },
      { name: 'Useberry', url: 'https://www.useberry.com', summary: 'Teste de usabilidade com métricas de fluxo, tarefas e feedback de usuário.', use: 'Ajuda a avaliar clareza, eficiência e dificuldade na experiência do produto.', phase: 'Validação' },
      { name: 'Google Analytics', url: 'https://analytics.google.com', summary: 'Métricas de comportamento em produto digital e jornadas reais.', use: 'Útil para validar impacto e eficiência após o lançamento da solução.', phase: 'Validação / Documentação' }
    ]
  }
];

function renderToolsCatalog() {
  const target = document.getElementById('tools-categories');
  if (!target) return;

  target.innerHTML = toolCatalog.map(category => `
    <article class="tool-category">
      <div class="tool-category-header">
        <span class="tool-category-kicker">${category.category}</span>
        <p>${category.description}</p>
      </div>
      <div class="tool-grid">
        ${category.tools.map(tool => `
          <article class="tool-card-item">
            <div class="tool-card-top">
              <div>
                <h3>${tool.name}</h3>
                <span>${tool.phase}</span>
              </div>
              <a href="${tool.url}" target="_blank" rel="noreferrer" aria-label="Abrir ${tool.name}">Abrir</a>
            </div>
            <p>${tool.summary}</p>
            <div class="tool-use">
              <strong>Quando usar</strong>
              <span>${tool.use}</span>
            </div>
          </article>
        `).join('')}
      </div>
    </article>
  `).join('');
}

extraMethods.forEach((methods, phaseIndex) => {
  const phase = phases[phaseIndex];
  phase.methods.push(...methods.map(([name, icon, tool], index) => ({
    name, icon, summary: `${name}: ${phaseLearning[phaseIndex]}`,
    how: `Comece pelo objetivo desta etapa, registre as evidências e compartilhe o resultado com o time. Use o que foi encontrado em ${name} para alimentar diretamente o próximo método da sequência.`,
    output: `Um artefato de ${name} documentado, com decisões, evidências e perguntas abertas para a próxima etapa.`,
    tools: [[`Workspace de ${name}`, tool]],
    supportTools: supportToolsByMethod[name] || [tool]
  })));
});

const empathyPhase = phases[0];
const empathyMapIndex = empathyPhase.methods.findIndex(method => method.name === 'Mapa de empatia');
if (empathyMapIndex >= 0) {
  const [empathyMap] = empathyPhase.methods.splice(empathyMapIndex, 1);
  empathyPhase.methods.push(empathyMap);
}

const artifactOrder = [
  ['Matriz CSD', 'Mapa de partes interessadas', 'Desk research', 'Plano de pesquisa', 'Recrutamento de usuários', 'Roteiro de entrevista', 'Entrevista com partes interessadas', 'Entrevista com usuários', 'Shadowing', 'Diário de uso', 'Mapa de empatia'],
  ['Codificação de dados', 'Mapa de afinidades', 'Clusterização de insights', 'Personas', 'Mapa de necessidades', 'Jornada atual', 'Segmentação de usuários', 'Declaração do problema (POV)', 'Perguntas de oportunidade'],
  ['Benchmark de soluções', 'Como poderíamos...?', 'Escrita de ideias', 'Oito ideias em oito minutos', 'Crazy 4s', 'SCAMPER', 'Storyboarding', 'Votação por pontos', 'Matriz impacto x esforço', 'Hipótese priorizada'],
  ['Card sorting', 'Arquitetura da informação', 'Mapa de conteúdo', 'Fluxo do usuário', 'Esboço em papel', 'Wireframe de baixa fidelidade', 'Wireframe', 'Wireframe de alta fidelidade', 'Design system mínimo', 'Protótipo navegável'],
  ['Plano de teste', 'Recrutamento para teste', 'Roteiro de tarefas', 'Teste de usabilidade', 'Teste moderado', 'Teste de cinco segundos', 'Teste A/B', 'Análise de comportamento', 'Pesquisa de satisfação', 'Síntese de achados'],
  ['Briefing do case', 'Mundo comum', 'Chamado à aventura', 'Linha do tempo do projeto', 'Curadoria de artefatos', 'Narrativa de decisões', 'Provas e aprendizados', 'Métricas de impacto', 'Retorno com o elixir', 'Publicação e retrospectiva']
];

phases.forEach((phase, phaseIndex) => {
  const order = artifactOrder[phaseIndex];
  phase.methods.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
});

phases.forEach((phase) => {
  phase.methods.forEach((method) => {
    if (!method.supportTools) {
      method.supportTools = supportToolsByMethod[method.name] || method.tools.map(([label, tool]) => tool).slice(0, 4);
    }
  });
});

const tabs = document.querySelector('.phase-tabs');
const content = document.querySelector('.phase-content');
const journey = document.querySelector('.journey');
const modal = document.querySelector('.method-modal');
const mainNav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');
let activePhase = 0;
let currentView = 'story';

function setActivePhase(index, options = {}) {
  const { scroll = true, keepView = true } = options;
  activePhase = index;
  if (!keepView) currentView = 'tabs';
  render();

  if (!scroll) return;

  requestAnimationFrame(() => {
    const target = currentView === 'tabs'
      ? document.querySelectorAll('.phase-tab')[activePhase]
      : document.querySelectorAll('.phase-card')[activePhase];

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

function toolTemplate(tool, phase) {
  return `<a class="method-tool" href="${toolLinks[tool[1]]}" target="_blank" rel="noreferrer">${tool[0]} · ${tool[1]} <i data-lucide="arrow-up-right"></i></a>`;
}
function methodTemplate(method, phase) {
  const methodIndex = phase.methods.indexOf(method) + 1;
  const supportTools = method.supportTools || method.tools.map(([label, tool]) => tool).slice(0, 4);
  const supportMarkup = supportTools.map((tool) => {
    const name = typeof tool === 'string' ? tool : tool.name;
    const url = typeof tool === 'string' ? toolLinks[name] : tool.url;
    if (url) {
      return `<a class="support-tool" href="${url}" target="_blank" rel="noreferrer">${name}</a>`;
    }
    return `<span class="support-tool">${name}</span>`;
  }).join('');

  return `<button class="method-card" style="--phase:${phase.color}" data-method="${method.name}"><span class="method-order">${String(methodIndex).padStart(2, '0')}</span><div class="method-card-head"><h4>${method.name}</h4><i data-lucide="${method.icon}"></i></div><p>${method.summary}</p><div class="method-supports"><span class="supports-label">Ferramentas de apoio</span><div class="support-tools">${supportMarkup}</div></div><div class="method-tools">${method.tools.map(tool => toolTemplate(tool, phase)).join('')}</div><div class="method-cta">Ver explicação do método · próximo passo →</div></button>`;
}
function phaseTemplate(phase) {
  return `<article class="phase-card" style="--phase:${phase.color}"><div class="phase-marker"><span class="phase-number">${phase.number}</span></div><div class="phase-content-card"><div class="phase-intro"><div class="phase-title-wrap"><h3>${phase.name}</h3><p class="sub">${phase.subtitle}</p></div><div class="phase-meta"><span class="meta-label">MÉTODOS NESTA FASE</span><strong>${String(phase.methods.length).padStart(2, '0')}</strong></div></div><div class="story"><span class="story-label">${phase.label}</span><p>${phase.story}</p></div><div class="method-grid">${phase.methods.map(method => methodTemplate(method, phase)).join('')}</div><div class="phase-footer"><span>Próximo movimento: ${phase.next}</span><span>${phase.number} / 06 · continuar →</span></div></div></article>`;
}
function renderTabs() {
  tabs.innerHTML = phases.map((phase, index) => `<button class="phase-tab ${index === activePhase ? 'is-active' : ''}" style="--phase:${phase.color}" data-phase="${index}" role="tab" aria-selected="${index === activePhase}"><span class="tab-num">${phase.number}</span>${phase.name}</button>`).join('');
  tabs.querySelectorAll('.phase-tab').forEach(tab => tab.addEventListener('click', () => { activePhase = Number(tab.dataset.phase); render(); }));
}
function renderContent() {
  content.className = `phase-content ${currentView === 'tabs' ? 'tabs-mode' : ''}`;
  content.innerHTML = currentView === 'story' ? phases.map(phaseTemplate).join('') : phaseTemplate(phases[activePhase]);
  content.querySelectorAll('.method-card').forEach(card => card.addEventListener('click', event => {
    if (event.target.closest('.method-tool')) return;
    const phase = currentView === 'story' ? phases.find(item => item.methods.some(method => method.name === card.dataset.method)) : phases[activePhase];
    openMethod(phase.methods.find(method => method.name === card.dataset.method), phase);
  }));
}
function openBriefingCanvas() {
  const briefingModal = document.querySelector('.briefing-modal');
  if (briefingModal) briefingModal.showModal();
}
function openSensemaking() {
  const sensemakingModal = document.querySelector('.sensemaking-modal');
  if (sensemakingModal) sensemakingModal.showModal();
}
function openMethod(method, phase) {
  modal.style.setProperty('--phase', phase.color);
  modal.querySelector('.modal-kicker').style.color = phase.color;
  modal.querySelector('#modal-title').textContent = method.name;
  modal.querySelector('.modal-summary').textContent = method.summary;
  modal.querySelector('.modal-how').textContent = method.how;
  modal.querySelector('.modal-output').textContent = method.output;
  modal.showModal();
}

function render() {
  if (document.getElementById('tools-categories')) {
    renderToolsCatalog();
  }

  if (!tabs || !content || !journey) {
    return;
  }

  renderTabs();
  renderContent();
  if (window.lucide) lucide.createIcons();
}

function normalizeBotText(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function findBotMethod(query) {
  const normalizedQuery = normalizeBotText(query);
  const aliases = {
    'desk research': 'Desk research',
    pesquisa: 'Desk research',
    entrevistas: 'Entrevista com partes interessadas',
    stakeholders: 'Mapa de partes interessadas',
    persona: 'Personas',
    wireframes: 'Wireframe',
    prototipo: 'Protótipo navegável',
    'teste de usabilidade': 'Teste de usabilidade',
    'problem statement': 'Declaração do problema (POV)',
    pov: 'Declaração do problema (POV)'
  };
  const aliasMatch = Object.entries(aliases).find(([alias]) => normalizedQuery.includes(normalizeBotText(alias)));
  if (aliasMatch) return phases.flatMap(phase => phase.methods).find(method => method.name === aliasMatch[1]);
  return phases.flatMap(phase => phase.methods).sort((a, b) => b.name.length - a.name.length).find(method => normalizedQuery.includes(normalizeBotText(method.name)));
}

function findBotPhase(query) {
  const normalizedQuery = normalizeBotText(query);
  return phases.find(phase => normalizedQuery.includes(normalizeBotText(phase.name)));
}

function findBotTool(query) {
  const normalizedQuery = normalizeBotText(query);
  return toolCatalog
    .flatMap(category => category.tools)
    .sort((a, b) => b.name.length - a.name.length)
    .find(tool => normalizedQuery.includes(normalizeBotText(tool.name)));
}

function getBotToolInfo(name, method) {
  const catalogTool = toolCatalog.flatMap(category => category.tools).find(tool => normalizeBotText(tool.name) === normalizeBotText(name));
  if (catalogTool) return catalogTool;
  return {
    name,
    url: toolLinks[name] || '#',
    summary: `Apoia a execução de ${method.name.toLowerCase()} com recursos para organizar, pesquisar ou comunicar o trabalho.`,
    use: `Use como apoio durante a fase de ${phases.find(phase => phase.methods.includes(method))?.name || 'Design Thinking'}.`
  };
}

function botToolMarkup(method) {
  const tools = method.supportTools || [];
  return `<div class="marc-tool-results">${tools.map(name => {
    const tool = getBotToolInfo(name, method);
    return `<a class="marc-tool-result" href="${tool.url}" target="_blank" rel="noreferrer"><span class="marc-tool-result-head"><strong>${tool.name}</strong><i data-lucide="arrow-up-right"></i></span><span>${tool.summary}</span></a>`;
  }).join('')}</div>`;
}

function botArtifactMarkup(phase) {
  return `<div class="marc-artifact-results">${phase.methods.map((method, index) => {
    const supportTools = (method.supportTools || []).slice(0, 3).map(name => {
      const tool = getBotToolInfo(name, method);
      return `<a href="${tool.url}" target="_blank" rel="noreferrer">${tool.name}</a>`;
    }).join('');
    return `<article class="marc-artifact-result"><div class="marc-artifact-kicker">ARTEFATO ${String(index + 1).padStart(2, '0')}</div><h3>${method.name}</h3><p>${method.summary}</p><div><strong>Como construir:</strong> ${method.how}</div><div><strong>O que entregar:</strong> ${method.output}</div><span class="marc-artifact-tools"><strong>Apoios:</strong> ${supportTools}</span></article>`;
  }).join('')}</div>`;
}

function getMarcFlagAnswer(query) {
  const normalizedQuery = normalizeBotText(query);
  const method = findBotMethod(query);
  const phase = findBotPhase(query);
  const tool = findBotTool(query);
  const asksForTools = /ferrament|opcao|opções|opcoes|recurso|usar/.test(normalizedQuery);
  const asksForArtifacts = /artefato|artefatos|entregavel|entregaveis|produz|resultado/.test(normalizedQuery);

  if (/^(oi|ola|olá|bom dia|boa tarde|boa noite|ajuda)/.test(normalizedQuery)) {
    return { text: 'Oi! Sou o Flag. Posso ensinar sobre as fases, métodos e ferramentas do site.', chips: ['Ferramentas para Desk research', 'O que é o Miro?', 'Como validar um protótipo?'] };
  }

  if (tool) {
    return {
      text: `<strong>${tool.name}</strong><br>${tool.summary}<br><span class="marc-answer-note"><strong>Quando usar:</strong> ${tool.use}<br><strong>Fase:</strong> ${tool.phase}</span>`,
      extra: `<a class="marc-tool-link" href="${tool.url}" target="_blank" rel="noreferrer">Abrir ${tool.name} <i data-lucide="arrow-up-right"></i></a>`,
      chips: [`Ferramentas para ${tool.phase.split(' / ')[0]}`, 'Outro método', 'O que é Desk research?']
    };
  }

  if (method) {
    const phaseName = phases.find(item => item.methods.includes(method))?.name || 'jornada';
    return {
      text: `<strong>${method.name}</strong> acontece na fase de <strong>${phaseName}</strong>.<br>${method.summary}<br><span class="marc-answer-note"><strong>Como construir:</strong> ${method.how}<br><strong>Você produz:</strong> ${method.output}</span>`,
      extra: asksForTools ? botToolMarkup(method) : `<button class="marc-inline-action" data-bot-query="ferramentas para ${method.name}">Ver ferramentas de apoio</button>`,
      chips: [`Ferramentas para ${method.name}`, 'Outro método']
    };
  }

  if (phase) {
    const methods = phase.methods.slice(0, 8).map(item => item.name).join(', ');
    const phaseDetails = asksForArtifacts ? 'Aqui está o mapa detalhado dos artefatos desta fase:' : `Artefatos disponíveis: ${methods}.`;
    return {
      text: `<strong>${phase.name}</strong> serve para ${phase.subtitle.toLowerCase()}<br><span class="marc-answer-note">${phaseDetails}</span>`,
      extra: asksForArtifacts ? botArtifactMarkup(phase) : `<button class="marc-inline-action" data-bot-query="artefatos da fase de ${phase.name}">Ver explicação detalhada dos artefatos</button>`,
      chips: [`Artefatos da fase de ${phase.name}`, `Ferramentas para ${phase.name}`]
    };
  }

  if (/ferrament|catalogo|catálogo/.test(normalizedQuery)) {
    return { text: 'Posso buscar por uma fase, método ou ferramenta específica. Pergunte, por exemplo: <strong>“O que é o Miro?”</strong> ou <strong>“Quero ferramentas para desenvolver o Desk research”</strong>.', chips: ['Ferramentas para Desk research', 'O que é o Miro?', 'Ferramentas de Prototipagem'] };
  }

  return { text: 'Ainda não encontrei esse assunto no meu mapa. Posso ajudar com métodos, fases ou ferramentas do Design Thinking.', chips: ['Ferramentas para Desk research', 'O que fazer na Validação?'] };
}

function createMarcFlag() {
  if (document.querySelector('.marc-flag')) return;
  document.body.insertAdjacentHTML('beforeend', `<aside class="marc-flag" aria-label="Assistente Flag"><button class="marc-launcher" type="button" aria-expanded="false" aria-controls="marc-panel"><span class="marc-robot" aria-hidden="true"><span></span></span><span class="marc-launcher-label">Flag</span></button><section class="marc-panel" id="marc-panel" aria-label="Conversa com Flag" hidden><div class="marc-panel-head"><div><strong>Flag</strong><span>IA por regras · mapa do site</span></div><button class="marc-close" type="button" aria-label="Fechar Flag">×</button></div><div class="marc-messages" aria-live="polite"></div><div class="marc-suggestions"></div><form class="marc-form"><label class="sr-only" for="marc-input">Pergunte ao Flag</label><input id="marc-input" autocomplete="off" placeholder="Ex.: o que é o Miro?" /><button type="submit" aria-label="Enviar pergunta"><i data-lucide="arrow-up"></i></button></form></section></aside>`);

  const flag = document.querySelector('.marc-flag');
  const launcher = flag.querySelector('.marc-launcher');
  const panel = flag.querySelector('.marc-panel');
  const close = flag.querySelector('.marc-close');
  const messages = flag.querySelector('.marc-messages');
  const suggestions = flag.querySelector('.marc-suggestions');
  const form = flag.querySelector('.marc-form');
  const input = flag.querySelector('#marc-input');

  const addMessage = (content, type = 'bot', extra = '') => {
    messages.insertAdjacentHTML('beforeend', `<div class="marc-message ${type}">${content}${extra}</div>`);
    messages.scrollTop = messages.scrollHeight;
    if (window.lucide) lucide.createIcons();
  };
  const answer = query => {
    const result = getMarcFlagAnswer(query);
    addMessage(result.text, 'bot', result.extra || '');
    suggestions.innerHTML = (result.chips || []).map(chip => `<button type="button" data-bot-query="${chip}">${chip}</button>`).join('');
  };
  const open = () => {
    panel.hidden = false;
    launcher.setAttribute('aria-expanded', 'true');
    if (!messages.children.length) answer('ola');
    input.focus();
  };
  const closePanel = () => { panel.hidden = true; launcher.setAttribute('aria-expanded', 'false'); };

  launcher.addEventListener('click', () => panel.hidden ? open() : closePanel());
  close.addEventListener('click', closePanel);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    addMessage(query, 'user');
    input.value = '';
    answer(query);
  });
  flag.addEventListener('click', event => {
    const action = event.target.closest('[data-bot-query]');
    if (!action) return;
    const query = action.dataset.botQuery;
    if (action.classList.contains('marc-inline-action')) {
      addMessage(query, 'user');
      answer(query);
      return;
    }
    input.value = query;
    form.requestSubmit();
  });
  if (window.lucide) lucide.createIcons();
}

document.querySelectorAll('.view-button').forEach(button => button.addEventListener('click', () => {
  currentView = button.dataset.view;
  document.querySelectorAll('.view-button').forEach(item => { item.classList.toggle('is-active', item === button); item.setAttribute('aria-selected', item === button); });
  journey.classList.toggle('journey-mode', currentView === 'story');
  renderContent();
  lucide.createIcons();
}));

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href') || '';

    if (!href.startsWith('#')) {
      return;
    }

    event.preventDefault();
    const nextPhase = Number(link.dataset.phase);
    if (Number.isNaN(nextPhase)) return;

    setActivePhase(nextPhase, { scroll: true, keepView: true });

    if (mainNav) mainNav.classList.remove('is-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', event => {
  if (event.target.closest('.briefing-trigger')) openBriefingCanvas();
  if (event.target.closest('.sensemaking-trigger')) openSensemaking();
});

const modalCloseButton = document.querySelector('.modal-close');
if (modalCloseButton) {
  modalCloseButton.addEventListener('click', () => modal.close());
}
const briefingCloseButton = document.querySelector('.briefing-close');
if (briefingCloseButton) {
  briefingCloseButton.addEventListener('click', () => document.querySelector('.briefing-modal').close());
}
const briefingModal = document.querySelector('.briefing-modal');
if (briefingModal) {
  briefingModal.addEventListener('click', event => { if (event.target === briefingModal) briefingModal.close(); });
}
const sensemakingCloseButton = document.querySelector('.sensemaking-close');
if (sensemakingCloseButton) {
  sensemakingCloseButton.addEventListener('click', () => document.querySelector('.sensemaking-modal').close());
}
const sensemakingModal = document.querySelector('.sensemaking-modal');
if (sensemakingModal) {
  sensemakingModal.addEventListener('click', event => { if (event.target === sensemakingModal) sensemakingModal.close(); });
}
if (modal) {
  modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
}
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', event => { const open = event.currentTarget.getAttribute('aria-expanded') === 'true'; event.currentTarget.setAttribute('aria-expanded', !open); mainNav.classList.toggle('is-open', !open); });
}
if (journey) {
  journey.classList.add('journey-mode');
}
createMarcFlag();
render();
