const subjectData = [
  {
    id: 'chinese', name: '國文島', short: '國文', english: 'LANGUAGE / LITERATURE', group: '語文', icon: '文', color: '#ff806c',
    desc: '讀懂文字的表面，也讀見作者藏在字句裡的心。', tags: ['閱讀理解', '寫作'], defaultVersion: '翰林',
    versions: {
      '翰林': ['一棵開花的樹', '田園之秋選', '愛蓮說', '鳥', '我所知道的康橋', '陋室銘'],
      '康軒': ['田園之秋選', '我所知道的康橋', '愛蓮說', '鳥', '木蘭詩', '湖心亭看雪'],
      '南一': ['一棵開花的樹', '田園之秋選', '愛蓮說', '陋室銘', '木蘭詩', '晚遊六橋待月記']
    }
  },
  {
    id: 'math', name: '數學島', short: '數學', english: 'NUMBERS / STRUCTURE', group: '數理', icon: '∑', color: '#6ae1db',
    desc: '把看起來複雜的關係，拆成可以一步一步解開的路徑。', tags: ['代數', '幾何'], defaultVersion: '翰林',
    versions: {
      '翰林': ['乘法公式與多項式', '平方根與畢氏定理', '因式分解', '一元二次方程式', '統計資料處理'],
      '康軒': ['乘法公式與多項式', '平方根與畢氏定理', '因式分解', '一元二次方程式', '統計資料處理'],
      '南一': ['乘法公式與多項式', '平方根與畢氏定理', '因式分解', '一元二次方程式', '統計資料處理與圖表']
    }
  },
  {
    id: 'english', name: '英文島', short: '英文', english: 'WORDS / CONNECTIONS', group: '語文', icon: 'A', color: '#f3c75e',
    desc: '用單字、句型和聲音，和世界另一端的人交換想法。', tags: ['單字', '文法'], defaultVersion: '翰林',
    versions: {
      '翰林': ['Unit 1：過去進行式', 'Unit 2：未來式與計畫', 'Unit 3：連接詞 when / if', 'Review 1：生活對話', 'Unit 4：比較與選擇', 'Reading Corner：我的夢想'],
      '康軒': ['Lesson 1：感受與描述', 'Lesson 2：興趣與夢想', 'Lesson 3：節日與文化', 'Review 1：閱讀策略', 'Lesson 4：健康生活', 'Lesson 5：旅行與探索'],
      '南一': ['Unit 1：A Bird in Class', 'Unit 2：My Baking Day', 'Unit 3：New Year Goals', 'Unit 4：Our Class Project', 'Unit 5：Smart Study Tips', 'Unit 6：Staying Active']
    }
  },
  {
    id: 'science', name: '自然島', short: '自然', english: 'MATTER / LIFE / EARTH', group: '數理', icon: '✧', color: '#aa95ff',
    desc: '從一滴水、一束光到一顆細胞，觀察世界如何運作。', tags: ['理化', '生物'], defaultVersion: '康軒',
    versions: {
      '翰林': ['基本測量與科學方法', '物質的世界', '波動與聲音', '光與色的世界', '溫度與熱', '元素與化合物'],
      '康軒': ['基本測量與科學方法', '物質的世界', '波動與聲音', '光與色的世界', '溫度與熱', '元素與化合物'],
      '南一': ['基本測量與科學方法', '物質的世界', '波與聲音', '光的世界', '熱與能量', '物質的組成']
    }
  },
  {
    id: 'social', name: '社會島', short: '社會', english: 'TIME / PLACE / PEOPLE', group: '社會', icon: '◎', color: '#f08fc3',
    desc: '把時間、空間與制度疊起來，看見我們如何成為今天的社會。', tags: ['歷史', '地理', '公民'], defaultVersion: '翰林',
    versions: {
      '翰林': ['中國歷史的發展', '近代中國的變局', '中華民國的建立', '臺灣的自然環境', '臺灣的人口與文化', '民主政治與生活'],
      '康軒': ['商周至隋唐的國家與社會', '宋元時期的民族互動', '明清時期的東亞世界', '臺灣的地形與氣候', '人口與都市', '現代民主政治'],
      '南一': ['古代文明的發展', '近代中國與世界', '中華民國的建立與發展', '臺灣的自然景觀', '臺灣的人文景觀', '法律與人權']
    }
  },
  {
    id: 'health', name: '健體島', short: '健體', english: 'BODY / BALANCE', group: '生活', icon: '＋', color: '#74d29a',
    desc: '照顧身體，也練習在壓力、關係與選擇之間保持平衡。', tags: ['健康', '運動'], defaultVersion: '翰林',
    versions: {
      '翰林': ['健康消費與生活環境', '拒絕成癮物質', '安全教育與急救', '運動與體適能', '球類運動：籃球', '律動與表現'],
      '康軒': ['健康生活的選擇', '遠離成癮物質', '事故傷害與急救', '運動與身體活動', '球類運動：排球', '體操與舞蹈'],
      '南一': ['健康生活與消費', '成癮物質的真相', '生活安全與急救', '體適能與運動處方', '球類運動：羽球', '運動欣賞與表現']
    }
  },
  {
    id: 'tech', name: '科技島', short: '科技', english: 'DESIGN / MAKING', group: '生活', icon: '⌘', color: '#7cb7ff',
    desc: '從需求出發，動手設計、測試，再把想法變成可以使用的東西。', tags: ['資訊', '生活科技'], defaultVersion: '翰林',
    versions: {
      '翰林': ['生活中的科技', '設計與製作', '結構與機構', '動力與能源', '資訊科技與網路', '資料與運算思維'],
      '康軒': ['科技與生活', '設計思考與創意', '結構設計', '能源與動力', '資訊科技的應用', '演算法與程式設計'],
      '南一': ['科技的發展與影響', '工程設計與問題解決', '結構與機構', '能源與運輸', '數位生活與資訊安全', '程式設計初探']
    }
  },
  {
    id: 'arts', name: '藝術島', short: '藝術', english: 'FORM / SOUND / EXPRESSION', group: '生活', icon: '◌', color: '#ffac62',
    desc: '用看、聽、做與表演，找到不只一種說出自己的方式。', tags: ['視覺', '音樂', '表演'], defaultVersion: '翰林',
    versions: {
      '翰林': ['臺灣的自然與人文之美', '造形與創意表現', '色彩與生活', '音樂中的故事', '歌劇與音樂劇', '表演藝術的舞台'],
      '康軒': ['繪畫中的臺灣風景', '藝術與生活創意', '設計與視覺傳達', '音樂的情感與表現', '世界音樂之旅', '表演的元素'],
      '南一': ['觀看臺灣的風景', '創意造形與媒材', '生活中的設計', '音樂與情緒', '經典音樂與文化', '劇場與角色']
    }
  }
];

const STORAGE_KEY = 'study-island-progress-v1';
const state = {
  activeSubject: null,
  activeVersion: null,
  filter: 'all',
  search: '',
  progress: JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const subjectById = (id) => subjectData.find((item) => item.id === id);
const keyFor = (subjectId, version, index) => `${subjectId}::${version}::${index}`;
const allChapters = () => subjectData.flatMap((subject) => Object.entries(subject.versions).flatMap(([version, chapters]) => chapters.map((chapter, index) => ({ subject, version, chapter, index, key: keyFor(subject.id, version, index) }))));

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function chapterState(subject, version, index) {
  return Boolean(state.progress[keyFor(subject.id, version, index)]);
}

function completionFor(subject) {
  const total = Object.entries(subject.versions).reduce((sum, [, chapters]) => sum + chapters.length, 0);
  const done = Object.entries(subject.versions).reduce((sum, [version, chapters]) => sum + chapters.filter((_, index) => chapterState(subject, version, index)).length, 0);
  return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
}

function activeCompletion(subject, version) {
  const chapters = subject.versions[version] || [];
  const done = chapters.filter((_, index) => chapterState(subject, version, index)).length;
  return { total: chapters.length, done, percent: chapters.length ? Math.round((done / chapters.length) * 100) : 0 };
}

function renderIslands() {
  const root = $('#islandCards');
  root.innerHTML = subjectData.map((subject, index) => {
    const stats = completionFor(subject);
    const hiddenByFilter = state.filter !== 'all' && subject.group !== state.filter;
    const matching = `${subject.name} ${subject.english} ${subject.tags.join(' ')}`.toLowerCase().includes(state.search.toLowerCase());
    const dim = (state.search && !matching) || hiddenByFilter;
    return `<button class="island ${dim ? 'is-dim' : ''}" data-subject="${subject.id}" style="--island-color:${subject.color};--progress:${stats.percent}%" aria-label="開啟${subject.name}">
      <div class="island-head"><span class="island-icon">${subject.icon}</span><span class="island-progress">${String(stats.percent).padStart(2, '0')}%</span></div>
      <h3>${subject.name}</h3>
      <div class="island-meta">${String(index + 1).padStart(2, '0')} / ${subject.english}</div>
      <p class="island-desc">${subject.desc}</p>
      <div class="island-tags">${subject.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      <div class="island-route">${stats.done ? `已點亮 ${stats.done} 個航點` : '點擊，進入章節航線'} <span>→</span></div>
      <div class="island-progress-bar"><span></span></div>
    </button>`;
  }).join('');
  $$('#islandCards .island').forEach((button) => button.addEventListener('click', () => openDetail(button.dataset.subject)));
}

function openDetail(subjectId) {
  const subject = subjectById(subjectId);
  if (!subject) return;
  state.activeSubject = subjectId;
  state.activeVersion = state.activeVersion && subject.versions[state.activeVersion] ? state.activeVersion : subject.defaultVersion;
  $('#drawerIndex').textContent = `ISLAND ${String(subjectData.indexOf(subject) + 1).padStart(2, '0')}`;
  $('#drawerTitle').textContent = subject.name;
  $('#drawerSubtitle').textContent = `${subject.group} · ${subject.english}`;
  $('#drawerIntro').textContent = subject.desc;
  $('#drawerHeader').style.setProperty('--drawer-color', subject.color);
  $('#versionSelect').innerHTML = Object.keys(subject.versions).map((version) => `<option value="${version}" ${version === state.activeVersion ? 'selected' : ''}>${version}版</option>`).join('');
  renderChapters();
  $('#detailDrawer').classList.add('is-open');
  $('#detailDrawer').setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-lock');
}

function renderChapters() {
  const subject = subjectById(state.activeSubject);
  if (!subject) return;
  const version = state.activeVersion;
  const chapters = subject.versions[version] || [];
  const stats = activeCompletion(subject, version);
  $('#drawerProgress').textContent = `${stats.percent}%`;
  $('#drawerProgressBar').style.width = `${stats.percent}%`;
  $('#chapterList').innerHTML = chapters.map((chapter, index) => {
    const done = chapterState(subject, version, index);
    return `<label class="chapter-item ${done ? 'is-done' : ''}">
      <input type="checkbox" data-chapter-index="${index}" ${done ? 'checked' : ''} aria-label="標記${chapter}完成" />
      <span><span class="chapter-no">${String(index + 1).padStart(2, '0')}</span> <span class="chapter-name">${chapter}</span><small class="chapter-note">${version}版 · 八上航線</small></span>
      <span class="chapter-status">${done ? 'DONE' : 'OPEN'}</span>
    </label>`;
  }).join('');
  $$('#chapterList input').forEach((checkbox) => checkbox.addEventListener('change', (event) => {
    const index = Number(event.target.dataset.chapterIndex);
    state.progress[keyFor(subject.id, version, index)] = event.target.checked;
    saveProgress();
    renderChapters();
    updateDashboard();
  }));
}

function closeDrawer(name) {
  const drawer = $(`#${name}Drawer`) || $('#helpModal');
  if (!drawer) return;
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-lock');
}

function renderNextChapters() {
  const items = allChapters().filter((item) => !chapterState(item.subject, item.version, item.index)).slice(0, 3);
  $('#nextChapters').innerHTML = items.length ? items.map((item, index) => `<button class="next-item" data-subject="${item.subject.id}"><span>${String(index + 1).padStart(2, '0')}</span><div>${item.chapter}<small>${item.subject.short} · ${item.version}版</small></div></button>`).join('') : '<div class="next-item"><span>✦</span><div>所有章節都點亮了！<small>可以回頭整理筆記</small></div></div>';
  $$('#nextChapters .next-item[data-subject]').forEach((button) => button.addEventListener('click', () => openDetail(button.dataset.subject)));
}

function updateDashboard() {
  const chapters = allChapters();
  const done = chapters.filter((item) => chapterState(item.subject, item.version, item.index)).length;
  const todayPercent = chapters.length ? Math.round((done / chapters.length) * 100) : 0;
  $('#heroProgress').textContent = String(done).padStart(2, '0');
  $('#journalPercent').textContent = `${todayPercent}%`;
  $('#journalBigPercent').textContent = `${todayPercent}%`;
  $('#journalCheckedCount').textContent = done;
  $('#journalTotalCount').textContent = chapters.length;
  $('#journalHint').textContent = done ? `${done} 個航點已被你點亮，繼續保持自己的節奏。` : '勾選一個章節，就會留下你的第一筆航跡。';
  renderNextChapters();
  renderJournalTimeline();
  renderIslands();
}

function renderFullIndex(query = '') {
  const normalized = query.trim().toLowerCase();
  const groups = subjectData.map((subject) => {
    const rows = Object.entries(subject.versions).flatMap(([version, chapters]) => chapters.map((chapter, index) => ({ version, chapter, index, done: chapterState(subject, version, index) }))).filter((item) => !normalized || `${subject.name} ${subject.short} ${item.version} ${item.chapter}`.toLowerCase().includes(normalized));
    return { subject, rows };
  }).filter((group) => group.rows.length);
  const count = groups.reduce((sum, group) => sum + group.rows.length, 0);
  $('#indexCount').textContent = count;
  $('#fullIndexList').innerHTML = groups.length ? groups.map(({ subject, rows }) => `<section class="full-index-group">
    <div class="full-index-group-head"><strong style="color:${subject.color}">${subject.name}</strong><span>${rows.length} 個結果</span></div>
    ${rows.map((row) => `<button class="index-row ${row.done ? 'is-done' : ''}" data-subject="${subject.id}"><small>${row.version}版</small><span>${row.chapter}</span><b>${row.done ? 'DONE' : 'OPEN'}</b></button>`).join('')}
  </section>`).join('') : '<div class="index-empty">找不到符合的章節，換個關鍵字試試看。</div>';
  $$('#fullIndexList .index-row').forEach((button) => button.addEventListener('click', () => { closeDrawer('index'); openDetail(button.dataset.subject); }));
}

function renderJournalTimeline() {
  const done = allChapters().filter((item) => chapterState(item.subject, item.version, item.index)).slice(-8).reverse();
  $('#journalTimeline').innerHTML = done.length ? done.map((item, index) => `<div class="timeline-item"><span class="timeline-time">${index === 0 ? 'NOW' : `LOG 0${index + 1}`}</span><div class="timeline-copy"><strong>${item.chapter}</strong><small>${item.subject.name} · ${item.version}版 · 八上航線</small></div><span class="timeline-state">● DONE</span></div>`).join('') : '<div class="index-empty">還沒有完成紀錄。<br />回到總覽，選一座島開始吧。</div>';
}

function openView(view) {
  $$('.nav-button').forEach((button) => button.classList.toggle('is-active', button.dataset.view === view));
  closeDrawer('detail');
  if (view === 'overview') {
    closeDrawer('index');
    closeDrawer('journal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (view === 'index') {
    closeDrawer('journal');
    renderFullIndex($('#indexSearch').value);
    $('#indexDrawer').classList.add('is-open');
    $('#indexDrawer').setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-lock');
    setTimeout(() => $('#indexSearch').focus(), 200);
  }
  if (view === 'journal') {
    closeDrawer('index');
    renderJournalTimeline();
    $('#journalDrawer').classList.add('is-open');
    $('#journalDrawer').setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-lock');
  }
}

function init() {
  renderIslands();
  updateDashboard();
  $$('.nav-button, [data-view]').forEach((button) => button.addEventListener('click', () => openView(button.dataset.view)));
  $('#versionSelect').addEventListener('change', (event) => { state.activeVersion = event.target.value; renderChapters(); });
  $('#globalSearch').addEventListener('input', (event) => { state.search = event.target.value; renderIslands(); if (event.target.value.trim()) { openView('index'); $('#indexSearch').value = event.target.value; renderFullIndex(event.target.value); } });
  $('#indexSearch').addEventListener('input', (event) => renderFullIndex(event.target.value));
  $('#filterButton').addEventListener('click', () => { const tray = $('#filterTray'); tray.hidden = !tray.hidden; $('#filterButton').classList.toggle('is-open', !tray.hidden); });
  $$('.chip').forEach((chip) => chip.addEventListener('click', () => { state.filter = chip.dataset.filter; $$('.chip').forEach((item) => item.classList.toggle('is-selected', item === chip)); renderIslands(); }));
  $$('[data-close]').forEach((button) => button.addEventListener('click', () => closeDrawer(button.dataset.close)));
  $('#helpButton').addEventListener('click', () => { $('#helpModal').classList.add('is-open'); $('#helpModal').setAttribute('aria-hidden', 'false'); });
  $('#themeButton').addEventListener('click', () => { document.body.classList.toggle('day-mode'); $('#themeButton').querySelector('span').textContent = document.body.classList.contains('day-mode') ? '日光' : '夜航'; });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') ['detail', 'index', 'journal', 'help'].forEach(closeDrawer); });
}

init();
