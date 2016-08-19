# React Static Plate

> Build static sites with React & CSS Modules to host on [Amazon S3](https://aws.amazon.com/s3/), [Github Pages](https://pages.github.com/), [Surge](https://surge.sh/) etc.
> *React | React Router | Babel 6 | CSS Modules | PostCSS | Webpack*

<img src="https://cloud.githubusercontent.com/assets/9054585/17802667/d4ecfaac-661b-11e6-87f4-82dbae105371.jpg" alt="" width="600"/>

### Features

- ES6+.
- Hot Reloading.
- ESLint rules based on Airbnb's Javascript Styleguide.
- Every route is completely rendered into a `.html` page with `renderToString`.
- Deferred script loading, so the browser can render the html without waiting for the js bundle first.
- Hash is added to every asset's filename, so you can cache all assets forever.
- Title, Meta and other SEO tags with [react-helmet](https://github.com/nfl/react-helmet).
- SEO friendly, no JavaScript required to view a page.
- Generates sitemap.xml

### Getting Started

Fork the repo, install the node modules and run the dev server:

```
$ npm install
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) & have fun. 🐒

### Deploy

Set your `website` in `package.json` and generate all the static files with `npm run build`. Then upload the contents of the `build/` folder to your hosting solution of choice. Finish!

You can also check out the production build on your local machine using `http-server`:

```
$ npm install -g http-server
$ cd build
$ http-server
```

### FAQ

**My site is not working properly on Amazon S3**:<br>
Make sure you define paths *with* trailing slashes, like `<Route path="about/">`.

**My site is not working properly on Github Pages**:<br>
Make sure you define paths *without* trailing slashes, like `<Route path="about">`.
