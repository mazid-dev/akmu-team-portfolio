/* ============================================================
   RENDER TEAM CARDS, SKILLS, PROJECTS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderTeam();
  renderSkills();
  renderProjects();
  setFooterYear();
});

function renderTeam() {
  const grid = document.getElementById('teamGrid');
  if (!grid || typeof teamData === 'undefined') return;

  grid.innerHTML = teamData.map(member => `
    <article class="member-card">
      <div class="member-header ${member.color}">
        <div class="member-avatar"><img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'; this.parentElement.textContent='${member.initials}'" /></div>
      </div>
      <div class="member-body">
        <h3 class="member-name">${member.name}</h3>
        <p class="member-role">${member.role}</p>
        <p class="member-id"><i class="fas fa-id-badge"></i> ${member.id}</p>
        <p class="member-bio">${member.shortBio}</p>
        <div class="member-skills">
          ${member.skills.slice(0, 4).map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="member-socials">
          <a href="mailto:${member.email}" class="social-btn" aria-label="Email"><i class="fas fa-envelope"></i></a>
          <a href="${member.github}" target="_blank" rel="noreferrer" class="social-btn" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="${member.linkedin}" target="_blank" rel="noreferrer" class="social-btn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <a href="members/${member.slug}.html" class="view-profile">
          View Full Profile <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const cloud = document.getElementById('skillsCloud');
  if (!cloud || typeof allSkills === 'undefined') return;
  cloud.innerHTML = allSkills.map(s => `<span class="skill-pill">${s}</span>`).join('');
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || typeof projectsData === 'undefined') return;

  grid.innerHTML = projectsData.map(p => `
    <article class="project-card">
      <h3>${p.title}</h3>
      <p class="project-author"><i class="fas fa-user"></i> ${p.author}</p>
      <p>${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${p.github}" target="_blank" rel="noreferrer">
          <i class="fab fa-github"></i> View on GitHub
        </a>
      </div>
    </article>
  `).join('');
}

function setFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}