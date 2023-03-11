import AboutPage from '../pages/AboutPage.svelte'
import HomePage from '../pages/HomePage.svelte'
import CachesPage from '../pages/CachesPage.svelte'
import NotFoundPage from '../pages/NotFoundPage.svelte'
import CacheDetailsPage from '../pages/CacheDetailsPage.svelte'

export default [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/caches",
    component: CachesPage,
    //auth: true
  },
  {
    path: "/caches/:id",
    component: CacheDetailsPage,
    //auth: true
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "*",
    component: NotFoundPage
  }
];
