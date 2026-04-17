/*
 * Цей файл відповідає за побудову сітки проектів на головній сторінці.
 * Щоб додати новий проект, просто додайте обʼєкт до масиву `projects` нижче
 * з унікальним `id`, `name`, `cover` та шляхом до сторінки проекту (`page`).
 */

const projects = [
  
  {
    id: 'advertising',
    name: 'advertising',
    cover: 'img/advertising.gif',
    page: 'projects/advertising.html'
  },
  {
    id: 'braindance_comics',
    name: 'braindance_comics',
    cover: 'img/braindance.png',
    page: 'projects/braindance_comics.html'
  }
];

/**
 * Функція для генерації карток проєктів на головній сторінці.
 */

function loadProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  projects.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
      <a href="${project.page}" title="${project.name}">
        <img src="${project.cover}" alt="${project.name} cover">
        <p>${project.name}</p>
      </a>
    `;
    container.appendChild(card);
  });
}

// Ініціалізуємо завантаження проєктів після завантаження DOM
document.addEventListener('DOMContentLoaded', loadProjects);

