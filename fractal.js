'use strict';

/* Require the path module */
const path = require('path');

/* Require the Fractal module */
const fractal = module.exports = require('@frctl/fractal').create();

/* Give your project a title. */
fractal.set('project.title', 'Walter');

/* Tell Fractal where to look for components. */
fractal.components.set('path', path.join(__dirname, 'src/components'));

/* Tell Fractal where to look for documentation pages. */
fractal.docs.set('path', path.join(__dirname, 'src/documentation'));

/* Tell the Fractal web preview plugin where to look for static assets. */
fractal.web.set('static.path', path.join(__dirname, 'src/public'));

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/docs');

const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

const myCustomisedTheme = mandelbrot({
  styles: ["default","/css/fractal.css"],
  skin: "black",
  nav: ["docs","components"],
  // any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default
