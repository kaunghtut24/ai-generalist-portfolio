// Renders projects and certifications from SITE_DATA and handles nav toggle.
(function(){
  function el(selector){ return document.querySelector(selector); }
  function createProjectCard(p){
    const article = document.createElement('article');
    article.className = 'card';
    const h3 = document.createElement('h3'); h3.textContent = p.title;
    const pdesc = document.createElement('p'); pdesc.textContent = p.description;
    const a = document.createElement('a'); a.href = p.github || '#'; a.target = '_blank'; a.rel='noopener'; a.className='link'; a.textContent = 'View on GitHub →';
    article.append(h3, pdesc, a);
    return article;
  }
  function createCertItem(c){
    const li = document.createElement('li'); li.className='badge';
    const img = document.createElement('img'); img.src = c.badgeImg || ''; img.alt = c.name || 'certificate badge';
    img.onerror = function() {
      this.style.display = 'none';
    };
    const span = document.createElement('span');
    const a = document.createElement('a'); a.href = c.link||'#'; a.target='_blank'; a.rel='noopener'; a.textContent = c.name;
    span.appendChild(a);
    li.append(img, span);
    return li;
  }

  function render(){
    const data = window.SITE_DATA || {};
    const projectsGrid = el('#projects-grid');
    const certList = el('#cert-list');
    projectsGrid.innerHTML = '';
    certList.innerHTML = '';
    (data.projects||[]).forEach(p => projectsGrid.appendChild(createProjectCard(p)));
    (data.certifications||[]).forEach(c => certList.appendChild(createCertItem(c)));
  }

  // mobile nav toggle
  const navToggle = el('#nav-toggle');
  const nav = el('#primary-nav');
  navToggle && navToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');
  });

  // initial render
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
