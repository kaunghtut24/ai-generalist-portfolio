// Modern AI Portfolio - All sections renderer with dark mode
(function(){
  function el(selector){ return document.querySelector(selector); }
  function elAll(selector){ return document.querySelectorAll(selector); }

  // Dark mode toggle
  function initThemeToggle(){
    const themeToggle = el('#theme-toggle');
    const sunIcon = themeToggle?.querySelector('.sun-icon');
    const moonIcon = themeToggle?.querySelector('.moon-icon');

    // Get saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    // Apply theme
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);

    themeToggle?.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme){
      if (!sunIcon || !moonIcon) return;
      if (theme === 'dark'){
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    }
  }

  // Project card
  function createProjectCard(p){
    const article = document.createElement('article');
    article.className = 'card project-card';
    const h3 = document.createElement('h3'); h3.textContent = p.title;
    const pdesc = document.createElement('p'); pdesc.textContent = p.description;

    const footer = document.createElement('div');
    footer.className = 'card-footer';
    if (p.tech){
      p.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = t;
        footer.appendChild(span);
      });
    }

    const links = document.createElement('div');
    links.className = 'project-links';
    if (p.github){
      const a = document.createElement('a');
      a.href = p.github; a.target = '_blank'; a.rel='noopener';
      a.innerHTML = 'GitHub →';
      links.appendChild(a);
    }
    if (p.demo){
      const a = document.createElement('a');
      a.href = p.demo; a.target = '_blank'; a.rel='noopener';
      a.innerHTML = 'Live Demo →';
      links.appendChild(a);
    }

    article.append(h3, pdesc, footer, links);
    return article;
  }

  // Blog post card
  function createBlogPostCard(b){
    const article = document.createElement('article');
    article.className = 'card blog-post-card';
    const h3 = document.createElement('h3'); h3.textContent = b.title;
    const excerpt = document.createElement('p'); excerpt.textContent = b.excerpt;

    const meta = document.createElement('div');
    meta.className = 'post-meta';
    const date = document.createElement('span'); date.textContent = b.date;
    const readTime = document.createElement('span'); readTime.textContent = b.readTime;
    meta.append(date, readTime);

    const readMore = document.createElement('a');
    readMore.href = b.link; readMore.className = 'read-more';
    readMore.innerHTML = 'Read More →';

    article.append(h3, meta, excerpt, readMore);
    return article;
  }

  // Open source repo card
  function createRepoCard(r){
    const article = document.createElement('article');
    article.className = 'card repo-card';
    const h3 = document.createElement('h3'); h3.textContent = r.name;
    const pdesc = document.createElement('p'); pdesc.textContent = r.description;

    const stats = document.createElement('div');
    stats.className = 'repo-stats';
    const stars = document.createElement('span'); stars.innerHTML = `⭐ ${r.stars}`;
    const forks = document.createElement('span'); forks.innerHTML = `🍴 ${r.forks}`;
    const lang = document.createElement('span'); lang.textContent = r.language;
    stats.append(stars, forks, lang);

    const a = document.createElement('a');
    a.href = r.github; a.target = '_blank'; a.rel='noopener';
    a.className = 'btn-outline'; a.style.marginTop = '1rem';
    a.textContent = 'View on GitHub';

    article.append(h3, pdesc, stats, a);
    return article;
  }

  // Speaking card
  function createTalkCard(t){
    const article = document.createElement('article');
    article.className = 'card talk-card';
    const h4 = document.createElement('h4'); h4.textContent = t.title;

    const meta = document.createElement('div');
    meta.className = 'talk-meta';
    meta.innerHTML = `<strong>${t.event}</strong> • ${t.location} • ${t.date}`;

    const links = document.createElement('div');
    links.className = 'card-footer';
    if (t.video){
      const a = document.createElement('a');
      a.href = t.video; a.target = '_blank'; a.rel='noopener';
      a.className = 'btn-outline'; a.textContent = 'Watch Video';
      links.appendChild(a);
    }
    if (t.slides){
      const a = document.createElement('a');
      a.href = t.slides; a.target = '_blank'; a.rel='noopener';
      a.className = 'btn-secondary'; a.textContent = 'View Slides';
      links.appendChild(a);
    }

    article.append(h4, meta, links);
    return article;
  }

  // Tool card
  function createToolCard(t){
    const article = document.createElement('article');
    article.className = 'card tool-card';
    const icon = document.createElement('div');
    icon.className = 'tool-icon';
    icon.innerHTML = getIconSVG(t.icon);

    const h3 = document.createElement('h3'); h3.textContent = t.name;
    const pdesc = document.createElement('p'); pdesc.textContent = t.description;

    const a = document.createElement('a');
    a.href = t.demo; a.target = '_blank'; a.rel='noopener';
    a.className = 'btn-primary'; a.textContent = 'Try It';

    article.append(icon, h3, pdesc, a);
    return article;
  }

  function getIconSVG(iconName){
    const icons = {
      chart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
      edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
      tag: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>'
    };
    return icons[iconName] || icons.chart;
  }

  // Testimonial card
  function createTestimonialCard(t){
    const article = document.createElement('article');
    article.className = 'card testimonial-card';
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = ` "${t.quote}" `;

    const author = document.createElement('div');
    author.className = 'author';
    const img = document.createElement('img');
    img.src = t.image; img.alt = t.author;
    img.onerror = function(){ this.style.display = 'none'; };

    const name = document.createElement('strong'); name.textContent = t.author;
    const title = document.createElement('span'); title.textContent = t.title;

    author.append(img, name, title);
    article.append(blockquote, author);
    return article;
  }

  // Certification item
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

  // Main render function
  function render(){
    const data = window.SITE_DATA || {};

    // Clear all containers
    const containers = ['#projects-grid', '#blog-grid', '#opensource-grid', '#speaking-list', '#tools-grid', '#testimonials-grid', '#cert-list'];
    containers.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) el.innerHTML = '';
    });

    // Render projects
    (data.projects||[]).forEach(p => el('#projects-grid')?.appendChild(createProjectCard(p)));

    // Render blog posts
    (data.blog||[]).forEach(b => el('#blog-grid')?.appendChild(createBlogPostCard(b)));

    // Render open source
    (data.opensource||[]).forEach(r => el('#opensource-grid')?.appendChild(createRepoCard(r)));

    // Render speaking
    (data.speaking||[]).forEach(t => el('#speaking-list')?.appendChild(createTalkCard(t)));

    // Render tools
    (data.tools||[]).forEach(t => el('#tools-grid')?.appendChild(createToolCard(t)));

    // Render testimonials
    (data.testimonials||[]).forEach(t => el('#testimonials-grid')?.appendChild(createTestimonialCard(t)));

    // Render certifications
    (data.certifications||[]).forEach(c => el('#cert-list')?.appendChild(createCertItem(c)));
  }

  // Mobile nav toggle
  const navToggle = el('#nav-toggle');
  const nav = el('#primary-nav');
  navToggle && navToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');
  });

  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')){
      e.preventDefault();
      const id = e.target.getAttribute('href').substring(1);
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Typing effect for hero text
  function initTypingEffect(){
    const typingEl = document.querySelector('.typing');
    if (!typingEl) return;

    const text = typingEl.textContent;
    typingEl.textContent = '';
    typingEl.style.borderRight = '3px solid var(--clr-accent)';

    let i = 0;
    const typeInterval = setInterval(() => {
      typingEl.textContent += text.charAt(i);
      i++;
      if (i > text.length){
        clearInterval(typeInterval);
        setTimeout(() => {
          typingEl.style.borderRight = 'none';
        }, 1000);
      }
    }, 50);
  }

  // Initialize on load
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', () => {
      initThemeToggle();
      render();
      setTimeout(initTypingEffect, 500);
    });
  } else {
    initThemeToggle();
    render();
    setTimeout(initTypingEffect, 500);
  }
})();

