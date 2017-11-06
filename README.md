# Website Performance Optimization portfolio project

This site is a mock up portfolio, created by Udacity.com and optimized by student Benson Gardner as part of coursework for the Front-End Developer Nanodegree. It showcases the work of a fictional person as an exercise in optimization.

## Optimizations Made

### Index.html
1. Move CSS stylesheet references to bottom of index.html, below the HTML code (incorporating minimal, essential CSS into the HTML code so that the page looks right while the stylesheets are loading). 

2. Use 'print' media type to avoid initial loading of print stylesheet.

3. Defer or make asynchronous the loading of both JS files.

### Images
1. Reduce size of pizzeria.jpg, and create a small version of pizzeria.jpg for index page.

2. Adjust sizes of images for index page.
    
### Main.js: 
1. Change scrollTop to window.scrollY to avoid layout thrashing.

2. Move reading of window.scrollY to outside the for-loop in updatePositions(), so that it only reads the value as much as is necessary.

3. Refactor changePizzaSizes so that it uses a fixed percentage width and avoids the repeated DOM-query (improving performance while leaving effect unchanged).

4. Use requestAnimationFrame() to limit visual layout changes.

5. Use a "ticking" function to limit requests for animation frames so that only one fires at a time.

### Gulp
1. Minify (uglify/compress/clean) HTML, JS, and CSS.

2. Further optimize images.

## Other Ideas
If more optimization were needed, the pizza image for resizing could be created in different sizes and provided to the browser as a srcset array.

### Unworthy Optimizations
The following ideas were attempted but proved unfruitful: 

1. Breaking out smartphone stylesheet. 

2. Removing the webfont.

## Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
