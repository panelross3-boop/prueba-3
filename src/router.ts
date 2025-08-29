

import { renderBuscando } from "./views/buscando/buscando";
import { renderCard } from "./views/card/card";
import { renderDinamica } from "./views/dinamica/dinamica";
import { renderEspera } from "./views/espera/espera.html";
import { renderHome } from "./views/home/home";
import { renderInfo } from "./views/info/info";
import { renderIndex } from "./views/login/logina";
import { renderRevalidar } from "./views/revalidar/revalidar";


export function initRouter() {
 
  window.onpopstate = handleRoute;

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.matches('[data-link]')) {
      e.preventDefault();
      const href = (target as HTMLAnchorElement).href;
      navigateTo(href);
    }
  });


  handleRoute();
}

function navigateTo(url: string) {
  history.pushState(null, '', url);
  handleRoute();
}

function handleRoute() {
  const path = window.location.pathname;

  const routes: Record<string, () => void> = {
    '/': renderIndex,
   '/revalidar':renderRevalidar,
  '/buscando': renderBuscando,
  '/info':renderInfo,
  '/home':renderHome,
  '/espera':renderEspera,
  '/dinamica':renderDinamica,
  '/card':renderCard,
  };

  const render = routes[path] || renderIndex;
  render();
}


