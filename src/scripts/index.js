/* eslint-disable linebreak-style */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();

  // Dynamic import for service worker registration
  const { default: swRegister } = await import('./utils/sw-register');
  swRegister();

  // Dynamic import for lazysizes plugins
  await import('lazysizes');
  await import('lazysizes/plugins/parent-fit/ls.parent-fit');
});
