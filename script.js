/*
 * Цей файл відповідає за побудову сітки проектів на головній сторінці.
 * Щоб додати новий проект, просто додайте обʼєкт до масиву `projects` нижче
 * з унікальним `id`, `name`, `cover` та шляхом до сторінки проекту (`page`).
 */

const projects = [
  {
    id: 'crimetree',
    name: 'crimetree',
    cover: 'img/crimetree.gif',
    page: 'projects/crimetree.html'
  },
  {
    id: 'chornobyl',
    name: 'chornobyl',
    cover: 'img/chornobyl.jpg',
    page: 'projects/chornobyl.html'
  },
  {
    id: 'bud',
    name: 'bud',
    cover: 'img/bud_book.gif',
    page: 'projects/bud.html'
  },
  {
    id: 'goodwine',
    name: 'goodwine',
    cover: 'img/goodwine.gif',
    page: 'projects/goodwine.html'
  },
  {
    id: 'eurovision',
    name: 'eurovision',
    cover: 'img/eurovision.gif',
    page: 'projects/eurovision.html'
  },
  {
    id: 'rocket',
    name: 'rocket',
    cover: 'img/rocket.gif',
    page: 'projects/eurovision.html'
  },
  {
    id: 'bravefactory',
    name: 'bravefactory',
    cover: 'img/brave.gif',
    page: 'projects/bravefactory.html'
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

