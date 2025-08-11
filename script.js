/*
 * Цей файл відповідає за побудову сітки проектів на головній сторінці.
 * Щоб додати новий проект, просто додайте обʼєкт до масиву `projects` нижче
 * з унікальним `id`, `name`, `cover` та шляхом до сторінки проекту (`page`).
 */

const projects = [
  {
    id: 'crimetree',
    name: 'crimetreeeeeee',
    cover: 'img/crimetree.gif',
    page: 'projects/crimetree.html'
  },
  {
    id: 'chornobyl',
    name: 'chornobyl',
    cover: 'https://picsum.photos/seed/chornobyl/600/400',
    page: 'projects/chornobyl.html'
  },
  {
    id: 'bud',
    name: 'bud',
    cover: 'https://picsum.photos/seed/bud/600/400',
    page: 'projects/bud.html'
  },
  {
    id: 'goodwine',
    name: 'goodwine',
    cover: 'https://picsum.photos/seed/goodwine/600/400',
    page: 'projects/goodwine.html'
  },
  {
    id: 'eurovision',
    name: 'eurovision',
    cover: 'https://picsum.photos/seed/eurovision/600/400',
    page: 'projects/eurovision.html'
  },
  {
    id: 'bravefactory',
    name: 'bravefactory',
    cover: 'https://picsum.photos/seed/bravefactory/600/400',
    page: 'projects/bravefactory.html'
  }
];

/**
 * Функція для генерації карток проєктів на головній сторінці.
 */
/**
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
*/
