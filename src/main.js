import '@fontsource/manrope/500.css';
import '@fontsource/poppins/400.css';
import './style.css';
import assets from './assets.json';

const origin = 'https://www.whiteandsalt.com';
const projects = [
  ['Forta Beauty', 'forta-beauty', 'Art Direction · Brand Identity · Packaging'],
  ['Mantra', 'mantra', 'Art Direction · Brand Strategy · Brand Identity · Copywriting'],
  ['Call Me', 'call-me-for-drinks', 'Art Direction · Brand Identity · Packaging'],
  ['Road13', 'road13', 'Naming · Brand Strategy · Copywriting · Brand Identity · Shopify Design and Development · Social Media Design · Packaging'],
  ['Musely', 'musely', 'Art Direction · Brand Strategy · Brand Identity · Packaging · Website Design · Website Development'],
  ['Wavy Daze', 'wavy-daze', 'Art Direction · Brand Strategy · Brand Identity · Packaging · Website Design · Copywriting'],
];
const image = (url, alt, eager = false) => `<img src="${url}${url.includes('?') ? '&' : '?'}format=1500w" alt="${alt}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
const button = (label, href, cls = '') => `<a class="pill ${cls}" href="${href}"><span>${label}</span><span aria-hidden="true">↗</span></a>`;

document.querySelector('#app').innerHTML = `
<a class="skip" href="#main">Skip to content</a>
<header class="header">
  <a class="wordmark" href="#" aria-label="White and Salt home">white<span>and</span>salt<span class="registered">®</span></a>
  <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="navigation"><span></span><span></span></button>
  <nav id="navigation" aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a><a href="${origin}/blog" target="_blank" rel="noopener">Blog <span class="external">↗</span></a></nav>
</header>
<main id="main">
  <section class="hero" aria-label="White and Salt creative agency">
    <h1>We’re a strategy-first creative agency partnering with wellness, beauty, and fashion brands. We expand what you’ve built into a brand with depth, direction, and a world around them.</h1>
    <div class="hero-gallery">${assets.hero.map((url, i) => `<a href="#work" class="hero-image image-${i}" aria-label="Explore ${['Mantra','Forta Beauty','Indyx','Musely'][i]} branding">${image(url, ['Mantra brand campaign','Forta Beauty packaging','Indyx brand identity','Musely skincare campaign'][i], true)}<span class="image-label">${['MANTRA','FORTA BEAUTY','INDYX','MUSELY'][i]} <span>↗</span></span></a>`).join('')}</div>
    ${button('Work With Us', '#contact', 'hero-cta')}
  </section>
  <section class="about section" id="about">
    <span class="eyebrow">A WORLD BEYOND THE VISUALS</span>
    <h2>As a creative full-service branding agency, we lead with world-building strategy to uncover the magic beneath the visuals — shaping brands with clarity, edge, and the kind of presence people obsess over.</h2>
    ${button('WORK WITH US', '#contact')}
  </section>
  <section class="work section" id="work">
    <div class="work-intro"><h2>Our Work<span class="asterisk" aria-hidden="true">✳</span></h2><div><p>Our signature three-step process uncovers your secret sauce and reveals the world around your product. White and Salt brand agency asks the right questions, spots the invisible threads, and brings the “aha” — blending strategy and bold design to create storytelling that shifts everything.</p><a class="text-link" href="#about">LEARN HOW <span>↗</span></a></div></div>
    <div class="project-grid">${projects.map(([name, slug, services], i) => `<article class="project"><button class="project-image" data-project="${i}" aria-label="View ${name} project">${image(assets.projects[i], `${name} branding and packaging design`)}<span class="project-overlay">Explore project <span>↗</span></span></button><div class="project-caption"><h3><button data-project="${i}">${name}</button></h3><p>${services.split(' · ').map(s => `<span>${s}</span>`).join('')}</p></div></article>`).join('')}</div>
  </section>
  <section class="audit section"><div class="audit-image">${image(assets.audit, 'Creative brand direction and identity')}</div><div class="audit-copy"><span class="eyebrow">COMPLIMENTARY AUDIT</span><h2>Find the primary gap holding your brand back.</h2><p>Most brands stall because of one of six gaps: story, positioning, visuals, audience, world, or depth. White and Salt Branding helps you find yours in three minutes.</p>${button('Find my gap', 'https://audit.whiteandsalt.com')}</div></section>
  <section class="recognition section"><p>Our proven signature process has helped clients generate millions in new revenue and earn features in esteemed publications — the kind of momentum only a full-service creative agency can build with strategy, story, marketing and design working as one.</p><h2>Boutique Branding Agency</h2><div class="client-logos">${assets.features.map((url,i)=>image(url,`Featured client publication ${i+1}`)).join('')}</div></section>
  <section class="contact section" id="contact"><span class="eyebrow">GOOD THINGS START WITH A CONVERSATION</span><h2>Feel that spark?<br>Let’s run with it<span class="spark" aria-hidden="true">✳</span></h2>${button('Get in Touch', `${origin}/contact`)}</section>
</main>
<footer><a href="#" class="footer-wordmark" aria-label="Back to top">white<span>and</span>salt<span class="registered">®</span></a><div class="footer-bottom"><small>© 2026 White and Salt. All Rights Reserved.</small><div><a href="${origin}/privacy-policy">Privacy Policy</a><a href="https://instagram.com/whiteandsalt" target="_blank" rel="noopener">Instagram ↗</a><a href="https://www.tiktok.com/@whiteandsalt" target="_blank" rel="noopener">Tiktok ↗</a></div><a class="back-top" href="#">Back to top ↑</a></div></footer>
<dialog class="project-dialog" aria-labelledby="project-title"><button class="dialog-close" aria-label="Close project">✕</button><div class="dialog-content"></div></dialog>`;

const toggle = document.querySelector('.menu-toggle');
const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); document.querySelector('.header').classList.remove('menu-open'); };
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); document.querySelector('.header').classList.toggle('menu-open', open); });
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', closeMenu));
const dialog = document.querySelector('dialog');
document.querySelectorAll('[data-project]').forEach(el => el.addEventListener('click', () => {
  const i = Number(el.dataset.project); const [name, slug, services] = projects[i];
  dialog.querySelector('.dialog-content').innerHTML = `${image(assets.projects[i], `${name} brand design`, true)}<div><span class="eyebrow">SELECTED WORK</span><h2 id="project-title">${name}</h2><p>${services}</p>${button('View full case study', `${origin}/${slug}`)}</div>`;
  dialog.showModal(); document.body.classList.add('dialog-open');
}));
const closeDialog = () => dialog.close();
dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', e => { if(e.target === dialog) closeDialog(); });
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
