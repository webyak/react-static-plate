# React Static Plate

> Build static sites with React to host on [Amazon S3](https://aws.amazon.com/s3/), [Github Pages](https://pages.github.com/), [Surge](https://surge.sh/) et cetera<br>
> (React.js, React Router, Radium, Babel 6, Webpack)

### Features

&nbsp; &nbsp; ✓ ES6+.<br>
&nbsp; &nbsp; ✓ Hot Reloading.<br>
&nbsp; &nbsp; ✓ ESLint rules based on Airbnb's Javascript Styleguide.<br>
&nbsp; &nbsp; ✓ Every route is completely rendered into a `.html` page with `renderToString`.<br>
&nbsp; &nbsp; ✓ Deferred script loading, so the browser can render the html without waiting for the js bundle first.<br>
&nbsp; &nbsp; ✓ Hash is added to every asset's filename, so you can cache all assets forever.<br>
&nbsp; &nbsp; ✓ Title, Meta and other SEO tags with [react-helmet](https://github.com/nfl/react-helmet).<br>
&nbsp; &nbsp; ✓ SEO friendly, no JavaScript required to view a page.<br>
&nbsp; &nbsp; ✓ Generates sitemap.xml <br>

### Getting Started

Clone the repo, install Node modules and run the development server:

```
$ git clone -o react-static-plate -b master --single-branch \
	https://github.com/webyak/react-static-plate.git my-site
$ cd my-site
$ npm install
$ npm start
```

Then open [http://localhost:3000](http://localhost:3000) and have fun ;)

### Deploy

Set your `host` in `config.json` and generate all the static files with `npm run build`. Then upload the contents of the `build/` folder to your hosting solution of choice. Finish.

You can also see the production site on your local machine using `http-server`:

```
$ npm install -g http-server
$ cd build
$ http-server
```

### Update

You can fetch and merge recent changes from this repo into your own project:

```
$ git checkout master
$ git fetch react-static-plate
$ git merge react-static-plate/master
$ npm install
```

### FAQ

**My site is not working properly on Amazon S3**:<br>
Make sure you define paths *with* trailing slashes, like `<Route path="about/">`.

**My site is not working properly on Github Pages**:<br>
Make sure you define paths *without* trailing slashes, like `<Route path="about">`.
