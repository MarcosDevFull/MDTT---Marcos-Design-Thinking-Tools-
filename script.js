const toolLinks = {
  Miro: 'https://miro.com', FigJam: 'https://www.figma.com/figjam/', Figma: 'https://www.figma.com', Dovetail: 'https://dovetail.com', Lookback: 'https://lookback.com', Typeform: 'https://www.typeform.com', Notion: 'https://www.notion.so', Mural: 'https://www.mural.co', Whimsical: 'https://whimsical.com', Maze: 'https://maze.co', Useberry: 'https://www.useberry.com', Hotjar: 'https://www.hotjar.com', 'Google Forms': 'https://forms.google.com', Readymag: 'https://readymag.com', Framer: 'https://www.framer.com', Webflow: 'https://webflow.com', ProtoPie: 'https://www.protopie.io'
};

const phases = [
  { number: '01', name: 'Empatia', color: '#ff6648', subtitle: 'Ferramentas para pesquisa, entrevistas e imersão.', label: 'A história desta fase', story: 'Tudo começa no kickoff. O product designer reúne o time em volta do <strong>Briefing Canvas</strong> e transforma o problema em perguntas antes de propor qualquer solução. O objetivo ainda não é desenhar — é entender quem vive o problema, onde ele aparece e por quê.', next: 'compreender o contexto', methods: [
    { name: 'Entrevista com stakeholders', summary: 'Alinhe visões, restrições e expectativas com as pessoas que conhecem o negócio por dentro.', how: 'Prepare um roteiro semiestruturado, entreviste as áreas-chave e registre fatos, hipóteses e tensões. Termine perguntando o que ainda não está sendo dito.', output: 'Mapa de expectativas, riscos do projeto e perguntas para investigar com usuários.', icon: 'messages-square', tools: [['Roteiro colaborativo', 'Miro']] },
    { name: 'Mapa de stakeholders', summary: 'Entenda quem influencia, decide, usa ou é impactado pela solução.', how: 'Liste os envolvidos e posicione cada pessoa pelo nível de influência e interesse. Use o mapa para definir quem ouvir primeiro e como envolver cada grupo.', output: 'Mapa de influência, plano de envolvimento e prioridades de pesquisa.', icon: 'network', tools: [['Mapa visual', 'FigJam']] },
    { name: 'Matriz CSD', summary: 'Separe o que já sabemos, o que acreditamos e o que ainda precisamos descobrir.', how: 'Em grupo, distribua cartões nas colunas Certezas, Suposições e Dúvidas. Transforme as dúvidas mais críticas em perguntas de pesquisa.', output: 'Backlog de perguntas, hipóteses explícitas e foco para a descoberta.', icon: 'table-2', tools: [['Canvas de descoberta', 'Miro']] },
    { name: 'Desk research', summary: 'Investigue o contexto antes de sair perguntando: mercado, concorrentes, dados e tendências.', how: 'Defina palavras-chave, fontes e critérios de confiabilidade. Registre evidências com links e data para não transformar opinião em fato.', output: 'Relatório de referências, benchmark e sinais do contexto.', icon: 'search', tools: [['Pesquisa e síntese', 'Notion'], ['Formulário de sinais', 'Typeform']] }
  ] },
  { number: '02', name: 'Definição', color: '#35b9b4', subtitle: 'Ferramentas para organizar dados, criar personas e mapas de empatia.', label: 'A história desta fase', story: 'Agora o time <strong>sintetiza</strong>. Insights caóticos viram padrões: o agrupamento organiza os dados, as personas dão rosto ao usuário e o mapa de empatia traduz emoções em oportunidades. No fim, o problema ganha uma frase clara que todo o time consegue repetir.', next: 'enquadrar a oportunidade', methods: [
    { name: 'Affinity mapping', summary: 'Encontre temas recorrentes agrupando observações que falam da mesma coisa.', how: 'Espalhe os achados, agrupe por afinidade sem nomear cedo demais e dê títulos que expressem o padrão encontrado.', output: 'Clusters de insights, temas e oportunidades de investigação.', icon: 'blocks', tools: [['Mural de síntese', 'FigJam']] },
    { name: 'Mapa de empatia', summary: 'Dê profundidade ao usuário observando o que ele pensa, sente, fala e faz.', how: 'Preencha o mapa com evidências, não estereótipos. Diferencie fala literal de interpretação e marque pontos de dor e ganho.', output: 'Visão compartilhada das necessidades e tensões do usuário.', icon: 'heart', tools: [['Mapa colaborativo', 'Miro']] },
    { name: 'Personas', summary: 'Crie arquétipos baseados em padrões reais para orientar decisões.', how: 'Combine comportamentos, objetivos e contexto. Dê à persona uma frase que ajude o time a lembrar para quem está projetando.', output: 'Persona principal, necessidades, objetivos e critérios de sucesso.', icon: 'user-round', tools: [['Documento da persona', 'Notion'], ['Interface da persona', 'Figma']] },
    { name: 'Jornada atual', summary: 'Visualize a experiência existente e os atritos que merecem atenção.', how: 'Mapeie etapas, ações, pensamentos e emoções. Marque momentos de verdade e oportunidades com evidências da pesquisa.', output: 'Jornada do usuário, pain points e momentos de oportunidade.', icon: 'map', tools: [['Mapa de jornada', 'Miro']] }
  ] },
  { number: '03', name: 'Ideação', color: '#f1c637', subtitle: 'Ferramentas para brainstorming, priorização e construção de soluções.', label: 'A história desta fase', story: 'Com o desafio bem enquadrado, é hora de abrir o leque. O time gera sem julgamento, dá forma às ideias e as prioriza pelo impacto e esforço. A solução escolhida não é a mais bonita: é a hipótese mais promissora para aprender.', next: 'escolher uma hipótese', methods: [
    { name: 'How Might We', summary: 'Converta dores em perguntas abertas que convidam à criação.', how: 'Reescreva o problema começando com “Como podemos...?”. Mantenha a pergunta ampla o bastante para permitir caminhos diferentes.', output: 'Perguntas de oportunidade que orientam o brainstorming.', icon: 'circle-help', tools: [['Banco de perguntas', 'Notion']] },
    { name: 'Brainwriting', summary: 'Gere ideias em silêncio para que todas as vozes entrem na sala.', how: 'Dê alguns minutos para cada pessoa escrever ideias individualmente. Depois, faça rodadas de expansão e combine possibilidades.', output: 'Lista ampla de soluções sem o viés da primeira voz.', icon: 'lightbulb', tools: [['Ideação silenciosa', 'FigJam']] },
    { name: 'Crazy 8s', summary: 'Oito ideias em oito minutos para desbloquear o pensamento.', how: 'Dobre uma folha em oito partes e esboce uma ideia por minuto. Compartilhe o raciocínio, não a estética do desenho.', output: 'Variações rápidas para comparar e desenvolver.', icon: 'zap', tools: [['Rodada de esboços', 'Miro']] },
    { name: 'Matriz impacto x esforço', summary: 'Escolha ideias pelo valor que entregam e pela complexidade envolvida.', how: 'Estime impacto e esforço com o time. Posicione as ideias, discuta os extremos e escolha uma hipótese para prototipar.', output: 'Backlog priorizado e decisão de qual ideia testar primeiro.', icon: 'grid-2x2', tools: [['Matriz de priorização', 'Mural']] }
  ] },
  { number: '04', name: 'Prototipagem', color: '#7198eb', subtitle: 'Ferramentas para wireframes, interfaces e protótipos.', label: 'A história desta fase', story: 'A hipótese sai do post-it e ganha forma. Começamos com <strong>wireframes</strong> de baixa fidelidade, testamos o fluxo principal e só depois investimos em interface. Um protótipo bom torna a pergunta clara o bastante para ser respondida.', next: 'materializar a solução', methods: [
    { name: 'Arquitetura da informação', summary: 'Organize conteúdo, caminhos e prioridades antes de desenhar telas.', how: 'Liste conteúdos e ações, agrupe por sentido e teste a hierarquia com o time e usuários.', output: 'Mapa de conteúdo e estrutura de navegação.', icon: 'sitemap', tools: [['Fluxo estrutural', 'Whimsical']] },
    { name: 'Wireframe', summary: 'Desenhe a arquitetura da tela sem se prender ao visual.', how: 'Comece pelo objetivo da tela, distribua conteúdo e priorize ações. Use baixa fidelidade para conseguir mudar rápido.', output: 'Esboços das telas essenciais e hipóteses de layout.', icon: 'layout-template', tools: [['Wireframes e UI', 'Figma']] },
    { name: 'User flow', summary: 'Mapeie o caminho que uma pessoa percorre até seu objetivo.', how: 'Parta da tarefa principal, desenhe decisões e estados alternativos. Corte etapas que não ajudam o usuário a chegar ao resultado.', output: 'Fluxo principal, exceções e pontos de decisão.', icon: 'git-branch', tools: [['Diagrama de fluxo', 'Whimsical']] },
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

const extraMethods = [
  [
    ['Plano de pesquisa', 'clipboard-check', 'Notion'], ['Recrutamento de usuários', 'user-plus', 'Typeform'], ['Roteiro de entrevista', 'list-checks', 'Notion'], ['Entrevista com usuários', 'mic', 'Dovetail'], ['Shadowing', 'footprints', 'Lookback'], ['Diário de uso', 'book-open-check', 'Google Forms']
  ],
  [
    ['Codificação de dados', 'tags', 'Dovetail'], ['Clusterização de insights', 'layers-3', 'FigJam'], ['Mapa de necessidades', 'scan-heart', 'Miro'], ['Segmentação de usuários', 'users-round', 'Notion'], ['Problem statement', 'file-pen-line', 'Notion'], ['How might we de definição', 'circle-help', 'FigJam']
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

extraMethods.forEach((methods, phaseIndex) => {
  const phase = phases[phaseIndex];
  phase.methods.push(...methods.map(([name, icon, tool], index) => ({
    name, icon, summary: `${name}: ${phaseLearning[phaseIndex]}`,
    how: `Comece pelo objetivo desta etapa, registre as evidências e compartilhe o resultado com o time. Use o que foi encontrado em ${name} para alimentar diretamente o próximo método da sequência.`,
    output: `Um artefato de ${name} documentado, com decisões, evidências e perguntas abertas para a próxima etapa.`,
    tools: [[`Workspace de ${name}`, tool]]
  })));
});

const tabs = document.querySelector('.phase-tabs');
const content = document.querySelector('.phase-content');
const journey = document.querySelector('.journey');
const modal = document.querySelector('.method-modal');
let activePhase = 0;
let currentView = 'story';

function toolTemplate(tool, phase) {
  return `<a class="method-tool" href="${toolLinks[tool[1]]}" target="_blank" rel="noreferrer">${tool[0]} · ${tool[1]} <i data-lucide="arrow-up-right"></i></a>`;
}
function methodTemplate(method, phase) {
  const methodIndex = phase.methods.indexOf(method) + 1;
  return `<button class="method-card" style="--phase:${phase.color}" data-method="${method.name}"><span class="method-order">${String(methodIndex).padStart(2, '0')}</span><div class="method-card-head"><h4>${method.name}</h4><i data-lucide="${method.icon}"></i></div><p>${method.summary}</p><div class="method-tools">${method.tools.map(tool => toolTemplate(tool, phase)).join('')}</div><div class="method-cta">Ver explicação do método · próximo passo →</div></button>`;
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
function openMethod(method, phase) {
  modal.style.setProperty('--phase', phase.color);
  modal.querySelector('.modal-kicker').style.color = phase.color;
  modal.querySelector('#modal-title').textContent = method.name;
  modal.querySelector('.modal-summary').textContent = method.summary;
  modal.querySelector('.modal-how').textContent = method.how;
  modal.querySelector('.modal-output').textContent = method.output;
  modal.showModal();
}
function render() { renderTabs(); renderContent(); if (window.lucide) lucide.createIcons(); }

document.querySelectorAll('.view-button').forEach(button => button.addEventListener('click', () => {
  currentView = button.dataset.view;
  document.querySelectorAll('.view-button').forEach(item => { item.classList.toggle('is-active', item === button); item.setAttribute('aria-selected', item === button); });
  journey.classList.toggle('journey-mode', currentView === 'story');
  renderContent();
  lucide.createIcons();
}));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
document.querySelector('.menu-toggle').addEventListener('click', event => { const open = event.currentTarget.getAttribute('aria-expanded') === 'true'; event.currentTarget.setAttribute('aria-expanded', !open); document.querySelector('.main-nav').classList.toggle('is-open', !open); });
journey.classList.add('journey-mode');
render();
