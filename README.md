https://webpack.js.org/guides/getting-started/
https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html
https://getbootstrap.com/docs/4.5/getting-started/webpack/

->npx webpack
...
Built at: 13/06/2018 11:52:07
  Asset      Size  Chunks             Chunk Names
main.js  70.4 KiB       0  [emitted]  main
...

->npm run build
...
> webpack-demo@1.0.0 build /Users/david/Code/side-projects/webpack-demo
> webpack

[webpack-cli] Compilation finished
asset main.js 398 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
runtime modules 1.25 KiB 6 modules
orphan modules 320 bytes [orphan] 1 module
cacheable modules 1.18 MiB
  modules by path ./node_modules/bootstrap/dist/ 297 KiB
    ./node_modules/bootstrap/dist/js/bootstrap.js 140 KiB [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./node_modules/bootstrap/dist/css/bootstrap.min.css 157 KiB [built] [code generated]
  ./src/index.js + 1 modules 606 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
  ./node_modules/jquery/dist/jquery.js 281 KiB [built] [code generated]
  ./node_modules/popper.js/dist/esm/popper.js 86.4 KiB [built] [code generated]
  ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
  ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]
...

https://symfonycasts.com/screencast/javascript-webpack/font-awesome
https://chriscourses.com/blog/loading-fonts-webpack

https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack
https://www.toptal.com/javascript/a-guide-to-managing-webpack-dependencies
https://webpack.js.org/loaders/expose-loader/

https://github.com/shellscape/webpack-manifest-plugin/issues/186
