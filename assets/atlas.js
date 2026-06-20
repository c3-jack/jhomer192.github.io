// engraved-atlas chart engine — Jack Homer · A Sky of One Person
// Data is the single source of truth. Add a project = one PLATES entry.

const SVGNS = 'http://www.w3.org/2000/svg';
const GREEK = ['α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','ο','π','ρ','σ','τ','υ','φ','χ','ψ','ω'];
const D = 'https://jhomer192.github.io';
const GH = 'https://github.com/jhomer192';

// CONSTELLATIONS — the data plate
// id maps to /<id>/ (URL slug); box is the bounding box for camera zoom + filter
// figure is T3(c) hairline figure label (one or two per constellation)
const CONSTELLATIONS = [
  { id:'opera-minora', name:'Opera Minora', sub:'Side Projects', section:'/projects/',
    labelAt:[750, 50], box:[440, 30, 985, 350],
    figure:[{label:"The Builder's Loom", x:735, y:200}],
    stars:[
      {nm:'Songrank',           g:'Beli for songs',       m:1, k:'demo', cx:485, cy:90,  url:D+'/songrank',  src:GH+'/bracketeering', d:'Spotify-powered song ranking with adaptive comparisons and bracket export. Generates top-10 / top-25 playlists tuned by your own listening.'},
      {nm:'WikiGame',           g:'100+ templates',       m:1, k:'demo', cx:680, cy:55, url:D+'/wikipedia-game-solver', src:GH+'/wikipedia-game-solver', d:'A solver for "the Wikipedia Game" — fastest hop from page A to page B. 1,826 cached routes, 100+ templates.'},
      {nm:'Memes',              g:'meme generator',       m:2, k:'demo', cx:885, cy:120, url:D+'/meme-generator', src:GH+'/meme-generator', d:'Classic meme generator. Canvas-rendered captions on common templates.'},
      {nm:'TF-IDF',             g:'greedy walk',          m:3, k:'src',  cx:565, cy:200, src:GH+'/wikipedia-game-solver', d:'TF-IDF + greedy walk heuristics that power the Wiki Solver.'},
      {nm:'Auto Applier',       g:'overnight queue',      m:2, k:'work', cx:740, cy:160, d:'A background agent that writes code from a queue overnight. Lives at jhomer192/auto-applier.'},
      {nm:'Wiki Solver',        g:'best-path search',     m:2, k:'demo', cx:795, cy:225, url:D+'/wikipedia-game-solver', src:GH+'/wikipedia-game-solver', d:'Best-path search through Wikipedia link graphs.'},
      {nm:'Clocktower',         g:'storyteller tools',    m:2, k:'demo', cx:935, cy:210, url:D+'/clocktower', src:GH+'/clocktower', d:'Storyteller tools for Blood on the Clocktower — character grimoire + night order + voting tracker.'},
      {nm:'Nuzlocke',           g:'graveyard log',        m:3, k:'demo', cx:515, cy:265, url:D+'/nuzlocke-tracker', src:GH+'/nuzlocke-tracker', d:'Tracks a Pokémon Nuzlocke run: caught, fainted, boss progress.'},
      {nm:"Connectronix",       g:'no backend',           m:3, k:'demo', cx:680, cy:280, url:D+'/connections-maker', src:GH+'/connections-maker', d:'A make-your-own NYT Connections puzzle, stored entirely in the URL hash.'},
      {nm:"Company's Life",     g:'React · Vite',         m:3, k:'demo', cx:585, cy:325, url:D+'/game-of-life', src:GH+'/game-of-life', d:"Conway's Game of Life rendered cell-by-cell in the browser."},
      {nm:'Birthday Paradox',   g:'prob. visualizer',     m:3, k:'demo', cx:830, cy:340, url:D+'/birthday-paradox', src:GH+'/birthday-paradox', d:'An interactive probability visualizer for the birthday problem.'},
      {nm:'Claude Bot',         g:'built the rest',       m:1, k:'src',  cx:935, cy:295, src:GH+'/claude-bot', d:'A self-hosted, persistent Claude agent over Telegram — the harness that built most of the rest of this sky.'},
    ],
    edges:[[0,1],[1,2],[1,3],[1,5],[5,4],[5,6],[1,7],[7,8],[8,9],[9,10],[9,6]],
    conj:[[11,1]] },

  { id:'corona-laboris', name:'Corona Laboris', sub:'Day Work', section:'/career/',
    labelAt:[230, 405], box:[40, 380, 410, 700],
    figure:[{label:"The Worked Day", x:225, y:560}],
    stars:[
      {nm:"VT · CS '23",        g:'Blacksburg origin',    m:4, k:'work', cx:75,  cy:440, d:'BS Computer Science, Virginia Tech, 2023. The origin point.'},
      {nm:'KidDataViz',         g:'capstone · 2023',      m:4, k:'demo', cx:100, cy:540, url:'https://kid-data-viz.vercel.app', src:GH+'/KidDataViz', d:'Virginia Tech senior capstone — data visualization for kids. The oldest light in this sky.'},
      {nm:'Action Network',     g:'redwood city · 2021',  m:4, k:'work', cx:90,  cy:685, d:'SWE intern at The Action Network, 2021. Where the deploying started.'},
      {nm:'USMC Suite',         g:'tasking · HR · housing', m:1, k:'work', cx:180, cy:410, d:'Forward-deployed at C3 AI: tasking, HR, and housing applications for the United States Marine Corps. Led workstreams across multiple phases, built shared packages that ship into every new MOS engagement.'},
      {nm:'Legal Translation',  g:'translate · critique', m:2, k:'work', cx:275, cy:610, d:'A translate–critique–arbitrate pipeline for legal documents. Replaced significant outside-services spend with an in-house multi-agent system meeting the same quality bar.'},
      {nm:'Agent Suite',        g:'sales · legal · finance', m:1, k:'work', cx:355, cy:480, d:'An agent suite spanning sales, legal, and finance workflows now in production at C3 AI: pre-proposal qualification, proposal generation, expense analysis.'},
      {nm:'Reliability',        g:'−94% crash freq',      m:3, k:'work', cx:350, cy:635, d:'Organized field-team contribution to a platform stability initiative. Cut daily crash frequency across the internal developer community ~94%.'},
    ],
    edges:[[0,1],[0,2],[0,3],[3,5],[5,6],[3,4]],
    conj:[] },

  { id:'mercatura', name:'Mercatura', sub:'Trade', section:'/business/',
    labelAt:[765, 405], box:[490, 380, 980, 700],
    figure:[{label:"The Merchant's Scale", x:735, y:560}],
    stars:[
      {nm:'Web Presence',       g:'sites for shops',      m:1, k:'service', cx:560, cy:475, url:'/business/', d:'Websites for local businesses — built, hosted, and maintained.'},
      {nm:'Email & Domains',    g:'set up, handed off',   m:2, k:'service', cx:670, cy:605, url:'/business/', d:'Email setup and domain administration for small businesses.'},
      {nm:'Reviews',            g:'reputation',           m:3, k:'service', cx:735, cy:445, url:'/business/', d:'Google review auto-reply, drafted by AI in your voice.'},
      {nm:'grace-style',        g:'a client',             m:2, k:'src',     cx:885, cy:550, src:GH+'/grace-style', d:'A client build. (Source repo — confirm the public URL before linking it live.)'},
      {nm:'contact-relay',      g:'the plumbing',         m:4, k:'src',     cx:570, cy:650, src:GH+'/contact-relay', d:"A Cloudflare Worker relaying this site's contact form to Telegram. The plumbing behind the curtain."},
    ],
    edges:[[0,1],[0,2],[1,3],[1,4]],
    conj:[] },
];

const KIND_LABEL = {
  demo:    'Live · open to the public',
  src:     'Source only · no public demo',
  work:    'Day job · no public link',
  service: 'Service offering',
};

// ---------- helpers ----------
function radiusFor(m){return m===1?5.5:m===2?4.2:m===3?3:2}
function centroid(pts){const n=pts.length;return pts.reduce((a,p)=>[a[0]+p.cx/n,a[1]+p.cy/n],[0,0])}
function convexHull(pts){
  const p=pts.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  if(p.length<3)return p;
  const cross=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);
  const lower=[];for(const x of p){while(lower.length>=2&&cross(lower[lower.length-2],lower[lower.length-1],x)<=0)lower.pop();lower.push(x);}
  const upper=[];for(let i=p.length-1;i>=0;i--){const x=p[i];while(upper.length>=2&&cross(upper[upper.length-2],upper[upper.length-1],x)<=0)upper.pop();upper.push(x);}
  upper.pop();lower.pop();return lower.concat(upper);
}
function expandPt(p,c,d){
  const dx=p[0]-c[0],dy=p[1]-c[1],l=Math.hypot(dx,dy)||1;
  return [p[0]+dx/l*d,p[1]+dy/l*d];
}

// ---------- render ----------
const SKY_W = 1000, SKY_H = 720;

function renderTicks(svg){
  // RA ticks (top), Dec ticks (left)
  const g = document.createElementNS(SVGNS,'g'); g.setAttribute('class','ticks');
  for(let h=0;h<=24;h+=4){
    const x = (h/24)*SKY_W;
    const t = document.createElementNS(SVGNS,'text');
    t.setAttribute('x',x+4); t.setAttribute('y',16); t.textContent = String(h).padStart(2,'0')+'ʰ';
    g.appendChild(t);
    const ln = document.createElementNS(SVGNS,'line');
    ln.setAttribute('x1',x);ln.setAttribute('x2',x);ln.setAttribute('y1',0);ln.setAttribute('y2',6);
    g.appendChild(ln);
  }
  for(let d=-30;d<=30;d+=30){
    const y = SKY_H/2 - (d/60)*SKY_H;
    const t = document.createElementNS(SVGNS,'text');
    t.setAttribute('x',8); t.setAttribute('y',y+3); t.textContent = (d>=0?'+':'')+d+'°';
    g.appendChild(t);
  }
  svg.appendChild(g);
}

function buildConstellation(c, cam, onStarClick){
  // Bayer letters by magnitude (brightest = α)
  const order = c.stars.map((s,i)=>i).sort((a,b)=>c.stars[a].m - c.stars[b].m);
  const greekOf = {}; order.forEach((idx,rank)=>greekOf[idx] = GREEK[rank]);

  const g = document.createElementNS(SVGNS,'g');
  g.setAttribute('class','cons'); g.setAttribute('data-id', c.id);
  g.setAttribute('role','button'); g.setAttribute('tabindex','0');
  g.setAttribute('aria-label', c.name+' — '+c.sub);

  // hull
  const hullPts = convexHull(c.stars.map(s=>[s.cx,s.cy])).map(p=>expandPt(p, centroid(c.stars), 28));
  const hull = document.createElementNS(SVGNS,'polygon');
  hull.setAttribute('class','hull');
  hull.setAttribute('points', hullPts.map(p=>p.join(',')).join(' '));
  g.appendChild(hull);

  // T3(c) figure label cluster
  (c.figure||[]).forEach(f=>{
    const t = document.createElementNS(SVGNS,'text');
    t.setAttribute('class','figure-label');
    t.setAttribute('x', f.x); t.setAttribute('y', f.y);
    t.textContent = f.label;
    g.appendChild(t);
  });

  // edges
  const edgeNodes=[];
  c.edges.forEach(([a,b])=>{
    const l = document.createElementNS(SVGNS,'line'); l.setAttribute('class','edge');
    l.setAttribute('x1',c.stars[a].cx); l.setAttribute('y1',c.stars[a].cy);
    l.setAttribute('x2',c.stars[b].cx); l.setAttribute('y2',c.stars[b].cy);
    l.dataset.a=a; l.dataset.b=b;
    g.appendChild(l); edgeNodes.push(l);
  });
  (c.conj||[]).forEach(([a,b])=>{
    const l = document.createElementNS(SVGNS,'line'); l.setAttribute('class','edge conj');
    l.setAttribute('x1',c.stars[a].cx); l.setAttribute('y1',c.stars[a].cy);
    l.setAttribute('x2',c.stars[b].cx); l.setAttribute('y2',c.stars[b].cy);
    l.dataset.a=a; l.dataset.b=b;
    g.appendChild(l); edgeNodes.push(l);
  });

  // stars
  const starNodes=[];
  const boxMidX = (c.box[0]+c.box[2])/2;
  c.stars.forEach((s,i)=>{
    const onRight = s.cx > boxMidX;
    const sg = document.createElementNS(SVGNS,'g');
    sg.setAttribute('class','star m'+s.m+(s.k==='src'?' src':'')+(onRight?' right':' left'));
    sg.setAttribute('role','link'); sg.setAttribute('tabindex','-1');
    sg.setAttribute('aria-label', s.nm+' — '+s.g);
    sg.dataset.i=i;

    if(s.k==='src'){
      const r = document.createElementNS(SVGNS,'circle');
      r.setAttribute('class','ring'); r.setAttribute('cx',s.cx); r.setAttribute('cy',s.cy);
      r.setAttribute('r', radiusFor(s.m));
      sg.appendChild(r);
    } else {
      const d = document.createElementNS(SVGNS,'circle');
      d.setAttribute('class','dot'); d.setAttribute('cx',s.cx); d.setAttribute('cy',s.cy);
      d.setAttribute('r', radiusFor(s.m));
      sg.appendChild(d);
    }

    const r = radiusFor(s.m), off = r + 5;
    const tx = onRight ? s.cx - off : s.cx + off;

    const gl = document.createElementNS(SVGNS,'text'); gl.setAttribute('class','glabel');
    gl.setAttribute('x', tx); gl.setAttribute('y', s.cy - 2);
    gl.textContent = greekOf[i]; sg.appendChild(gl);

    const nl = document.createElementNS(SVGNS,'text'); nl.setAttribute('class','nlabel');
    nl.setAttribute('x', tx); nl.setAttribute('y', s.cy + 12);
    nl.textContent = s.nm; sg.appendChild(nl);

    const gloss = document.createElementNS(SVGNS,'text'); gloss.setAttribute('class','gloss');
    gloss.setAttribute('x', tx); gloss.setAttribute('y', s.cy + 23);
    gloss.textContent = s.g; sg.appendChild(gloss);

    sg.addEventListener('click', e=>{e.stopPropagation(); onStarClick(s, greekOf[i], c);});
    sg.addEventListener('keydown', e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault(); onStarClick(s, greekOf[i], c);}});
    sg.addEventListener('mouseenter', ()=>{
      sg.classList.add('lit');
      edgeNodes.forEach(l=>{if(+l.dataset.a===i||+l.dataset.b===i)l.classList.add('lit');});
    });
    sg.addEventListener('mouseleave', ()=>{
      sg.classList.remove('lit');
      edgeNodes.forEach(l=>l.classList.remove('lit'));
    });

    g.appendChild(sg); starNodes.push(sg);
  });

  // constellation label
  const cl = document.createElementNS(SVGNS,'text');
  cl.setAttribute('class','clabel');
  cl.setAttribute('x', c.labelAt[0]); cl.setAttribute('y', c.labelAt[1]);
  cl.textContent = c.name; g.appendChild(cl);

  const cs = document.createElementNS(SVGNS,'text');
  cs.setAttribute('class','csub');
  cs.setAttribute('x', c.labelAt[0]); cs.setAttribute('y', c.labelAt[1]+14);
  cs.textContent = c.sub.toUpperCase(); g.appendChild(cs);

  // when hovered or focused, edges fade in
  g.addEventListener('mouseenter', ()=>{g.classList.add('lit'); edgeNodes.forEach(l=>l.classList.add('lit'));});
  g.addEventListener('mouseleave', ()=>{g.classList.remove('lit'); edgeNodes.forEach(l=>l.classList.remove('lit'));});

  cam.appendChild(g);
  return {node:g, edges:edgeNodes, stars:starNodes, greek:greekOf};
}

// ---------- card (star detail modal) ----------
let cardOverlay = null;
function ensureCard(){
  if(cardOverlay) return cardOverlay;
  cardOverlay = document.createElement('div');
  cardOverlay.className = 'card-overlay';
  cardOverlay.innerHTML = `<div class="card" role="dialog" aria-modal="true">
    <button class="close" aria-label="close">esc · close</button>
    <span class="greek"></span>
    <h2></h2>
    <div class="sub"></div>
    <p class="desc"></p>
    <div class="links"></div>
    <div class="kind"></div>
  </div>`;
  document.body.appendChild(cardOverlay);
  cardOverlay.addEventListener('click', e=>{if(e.target===cardOverlay)closeCard();});
  cardOverlay.querySelector('.close').addEventListener('click', closeCard);
  document.addEventListener('keydown', e=>{if(e.key==='Escape'&&cardOverlay.classList.contains('open'))closeCard();});
  return cardOverlay;
}
function openCard(s, greek){
  const o = ensureCard();
  o.querySelector('.greek').textContent = greek;
  o.querySelector('h2').textContent = s.nm;
  o.querySelector('.sub').textContent = s.g;
  o.querySelector('.desc').textContent = s.d || '';
  const links = o.querySelector('.links'); links.innerHTML = '';
  if(s.url){links.innerHTML += `<a href="${s.url}" target="_blank" rel="noopener" data-umami-event="card-link" data-umami-event-target="${s.nm}-demo">visit ↗</a>`;}
  if(s.src){links.innerHTML += `<a href="${s.src}" target="_blank" rel="noopener" data-umami-event="card-link" data-umami-event-target="${s.nm}-src">source ↗</a>`;}
  o.querySelector('.kind').textContent = KIND_LABEL[s.k] || '';
  o.classList.add('open');
}
function closeCard(){if(cardOverlay)cardOverlay.classList.remove('open');}

// ---------- public API ----------
// renderSky({mode, focus, onConstellationClick})
// mode: 'overview' shows all three with click-to-zoom; 'single' shows just one constellation, centered.
// focus: constellation id (for single mode, or initial zoom in overview mode)
window.renderSky = function(opts){
  opts = opts || {};
  const mode = opts.mode || 'overview';
  const focus = opts.focus || null;

  const wrap = document.getElementById('sky-wrap');
  if(!wrap) return;
  wrap.innerHTML = '';

  const svg = document.createElementNS(SVGNS,'svg');
  // single-mode pages already declare the constellation name in <h1>, so
  // suppress the in-chart .clabel/.csub via this class to avoid label collisions.
  svg.setAttribute('class', mode === 'single' ? 'sky-svg single-mode' : 'sky-svg');
  svg.setAttribute('id','sky');
  svg.setAttribute('viewBox', `0 0 ${SKY_W} ${SKY_H}`);
  svg.setAttribute('preserveAspectRatio','xMidYMid meet');
  svg.setAttribute('role','img');
  svg.setAttribute('aria-label','Star chart of Jack Homer\'s projects, career, and business');
  wrap.appendChild(svg);

  renderTicks(svg);

  const cam = document.createElementNS(SVGNS,'g');
  cam.setAttribute('id','cam'); cam.setAttribute('class','cam');
  svg.appendChild(cam);

  const list = mode==='single' && focus
    ? CONSTELLATIONS.filter(c=>c.id===focus)
    : CONSTELLATIONS;

  const nodes = {};
  list.forEach(c=>{
    nodes[c.id] = buildConstellation(c, cam, (s, greek, cons)=>openCard(s, greek));
  });

  // breadcrumb (created once)
  let bc = wrap.querySelector('.breadcrumb');
  if(!bc){
    bc = document.createElement('div');
    bc.className = 'breadcrumb';
    bc.style.display = 'none';
    wrap.appendChild(bc);
  }

  // compass (only on overview mode)
  if(mode==='overview'){
    const compass = document.createElement('div');
    compass.className = 'compass';
    compass.innerHTML = `<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="22"/><line x1="30" y1="8" x2="30" y2="52"/><line x1="8" y1="30" x2="52" y2="30"/><polygon class="needle" points="30,10 33,30 30,28 27,30"/><text x="30" y="7">N</text><text x="30" y="58">S</text><text x="5" y="33">W</text><text x="56" y="33">E</text></svg>`;
    wrap.appendChild(compass);
  }

  // ---- zoom logic (overview mode only) ----
  let currentZoom = null;
  function enter(id){
    const c = CONSTELLATIONS.find(x=>x.id===id);
    if(!c) return;
    const [x0,y0,x1,y1] = c.box;
    const pad = 20;
    const bx = x0-pad, by = y0-pad, bw = (x1-x0)+pad*2, bh = (y1-y0)+pad*2;
    const s = Math.min(SKY_W/bw, SKY_H/bh);
    const cxv = (SKY_W - bw*s)/2, cyv = (SKY_H - bh*s)/2;
    cam.style.transform = `translate(${cxv - bx*s}px, ${cyv - by*s}px) scale(${s})`;
    // dim other constellations
    CONSTELLATIONS.forEach(o=>{
      const n = nodes[o.id]; if(!n) return;
      if(o.id===id) n.node.classList.add('lit');
      else { n.node.style.opacity = .12; }
    });
    bc.style.display = 'flex';
    bc.innerHTML = `<span>Coelum</span><span>›</span><span class="step">${c.name}</span>` +
      (c.section ? `<span>›</span><a class="plate-link" href="${c.section}" data-umami-event="plate-link" data-umami-event-target="${c.id}">Open plate ↗</a>` : '') +
      `<button class="zoom-out" aria-label="zoom out">ESC</button>`;
    bc.querySelector('.zoom-out').addEventListener('click', exit);
    history.replaceState(null,'','#/'+id);
    currentZoom = id;
  }
  function exit(){
    cam.style.transform = '';
    CONSTELLATIONS.forEach(o=>{
      const n = nodes[o.id]; if(!n) return;
      n.node.classList.remove('lit');
      n.node.style.opacity = '';
    });
    bc.style.display = 'none';
    history.replaceState(null,'','#/');
    currentZoom = null;
  }

  if(mode==='overview'){
    Object.values(nodes).forEach(n=>{
      n.node.addEventListener('click', e=>{
        if(e.target.closest('.star')) return; // star clicks open cards
        const id = n.node.getAttribute('data-id');
        if(currentZoom===id) exit(); else enter(id);
      });
      n.node.addEventListener('keydown', e=>{
        if(e.key==='Enter'||e.key===' '){
          e.preventDefault();
          const id = n.node.getAttribute('data-id');
          if(currentZoom===id) exit(); else enter(id);
        }
      });
    });
    svg.addEventListener('click', e=>{
      if(e.target===svg) exit();
    });
    document.addEventListener('keydown', e=>{
      if(e.key==='Escape' && currentZoom){exit();}
    });
    // honor hash on load
    const m = (location.hash||'').match(/^#\/([a-z-]+)/);
    if(m) enter(m[1]);
  } else if(mode==='single' && focus){
    // single-plate mode: zoom into the focused constellation immediately, no breadcrumb
    requestAnimationFrame(()=>{
      const c = CONSTELLATIONS.find(x=>x.id===focus);
      if(!c) return;
      const [x0,y0,x1,y1] = c.box;
      const pad = 30;
      const bx = x0-pad, by = y0-pad, bw = (x1-x0)+pad*2, bh = (y1-y0)+pad*2;
      const s = Math.min(SKY_W/bw, SKY_H/bh);
      const cxv = (SKY_W - bw*s)/2, cyv = (SKY_H - bh*s)/2;
      cam.style.transition = 'none';
      cam.style.transform = `translate(${cxv - bx*s}px, ${cyv - by*s}px) scale(${s})`;
      // light the figure label by default in single mode
      nodes[focus].node.classList.add('lit');
    });
  }
};

// Mark current nav link
document.addEventListener('DOMContentLoaded', ()=>{
  const path = location.pathname.replace(/\/$/,'') || '/';
  document.querySelectorAll('.nav a[href]').forEach(a=>{
    const href = a.getAttribute('href').replace(/\/$/,'') || '/';
    if(href===path) a.setAttribute('aria-current','page');
  });
});
