# To load this site, navigate to:
https://bensongardner.github.io/opt-mobile-portfolio/dist/

This is due to course-specific requirements which altered the file structure (see below).

# Website Performance Optimization portfolio project

This site is a portfolio, mocked up by Udacity.com and optimized by student Benson Gardner as part of coursework for the Front-End Developer Nanodegree. It showcases the work of a fictional person as an exercise in optimization, especially for mobile.

## Notes on Structure
This site has been processed using Gulp. The file structure is standard: source files in "source", distribution files in "dist". 

Because there was a project requirement to include the "source" folder, the production files had to be housed inside a "dist" folder. Thus the string, "dist", ends up inserted into all the URLs -- including index.html. (Initially, I used an unconventional file structure to avoid this, until I noticed that the submission instructions specifically indicated otherwise.)  

### Steps to Download, Configure and Implement the Task Runner
To run my gulpfile on your machine, you have to have npm installed, then use it to install gulp, as well as the plugins: gulp-imagemin, gulp-uglify, pump, gulp-clean-css, gulp-htmlmin.

From your command line, navigate to the project folder and type "gulp". This will activate the default action within the gulpfile - processing everything in the source folder and spitting out optimized files into the main directory.

## Optimizations Made

### Index.html
1. Load critical style inline in head.

2. Use 'print' media type to avoid initial loading of print stylesheet.

3. Use a script in footer to defer-load the rest of style.css (Print style was left as a link in the head since it shouldn't block rendering unless you're printing.)

4. Defer or make asynchronous the loading of both JS files.

### CSS 
1. Hardware-accelerate CSS animation of pizzas by using translateZ(0) to access GPU.

### Images
1. Reduce size of pizzeria.jpg, and create a small version of pizzeria.jpg for index page.

2. Adjust sizes of images for index page.

3. Created smaller version of pizza.png, sized for the background, called pizza-mover.png.
    
### Main.js
1. Change scrollTop to window.scrollY to avoid layout thrashing.

2. Move reading of window.scrollY to outside the for-loop in updatePositions(), so that it only reads the value as much as is necessary.

3. Refactor changePizzaSizes so that it uses a fixed percentage width and avoids the repeated DOM-query (improving performance while leaving effect unchanged).

4. Use requestAnimationFrame() to limit visual layout changes.

5. Use a "ticking" function to limit requests for animation frames so that only one fires at a time.

6. Replace all querySelectorAll uses with getElementByID or getElementByClassName.

7. Move var declarations outside of, or to initializations of, the loops that animate .mover, create and append pizzas.

9. Reduce the number of pizzas rendered to only the number that appears on the screen (IN PROGRESS).

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
