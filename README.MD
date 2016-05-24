# ng-lazyload
##### Angular Seed with requireJS + ocLazyLoad
###### Load controllers and views dynaimcally when they are needed on the fly. Now includes angular-loading-bar & NProgress :)

###### Process
- requirejs get's nProgress.js & runs loader
- require get's angular and deps & stops loader
- when angular & deps are loaded, ng-loading-bar handles all xhr loading requests.

### File Structure

- ng-lazyload
  - node_modules *
  - public
    - app
      - controllers
      - directives
      - services **
      - modules
      - views
    - lib *
    - res
      - css
      - img **
      - favicon.ico
    - tests
      - test.js
    - index.html
    - main.js
  - README.md
  - .bowerrc
  - bower.json
  - karma.conf.js
  - package.json
  - server.js

  __ * ignoring node_modules & lib __ , run npm install & bower install.

  __ ** currently empty and not included __ 

### Commands
- npm start  ( nodemon server.js -w )