/* eslint no-undef: 0 */
let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let autoprefixer = require("autoprefixer");
let webpack = require("webpack");
 
module.exports = (env) => {
  const isDevBuild = !(env && env.prod);  //Check if its development build (true) or production build (false)

  const clientBundleConfig = {
    entry: { "main": "./Content/Index.js" },               //[name], [entry point]
    output: { 
      filename: "[name].packed.js",
      path: path.join(__dirname, "wwwroot/js"),   //__dirname is base directory
      publicPath: "/"     //publicPath is where HMR is going to look for updates
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: "babel-loader",
          exclude: [
            /node_modules/,
            /\.spec.js?$/
          ]
        },
                
        isDevBuild ? {  //If dev build then leave the css in for hot reloading
          test: /\.css$/, 
          use: [ 
            "style-loader", 
            "css-loader",
            {
              loader: "postcss-loader", //For autoprefixer (adds vendor prefixes to css)
              options: {
                plugins: function () {
                  return [autoprefixer];
                }
              }
            }
          ]
        } : {
          test: /\.css$/, 
          use: ExtractTextPlugin.extract({ //Removes the css from the js for production
            use: [
              "css-loader?minimize",
              {
                loader: "postcss-loader", //For autoprefixer (adds vendor prefixes to css)
                options: {
                  plugins: function () {
                    return [autoprefixer];
                  }
                }
              }
            ]
          }) 
        },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, 
          use: "url-loader?limit=25000" 
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: "url-loader?limit=25000"
        }
      ]
    },

    // This separates 3rd party libraries (that don't change) from project code and puts it into vendor files
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function (module) {
          // this assumes our vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf("node_modules") !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({ 
        name: "manifest" //Puts webpack runtime code that does change in the manifest file
      }),

    ].concat(isDevBuild ? [
      // Plugins that apply in development builds only
      new webpack.SourceMapDevToolPlugin({
        filename: "[file].map", // Adds source maps
        moduleFilenameTemplate: path.relative("./", "[resourcePath]") // Point sourcemap entries to the original file locations on disk
      })
    ] : [
      // Plugins that apply in production builds only
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.UglifyJsPlugin(),

      new ExtractTextPlugin("../css/[name].css")  //Will also split into project css files and a vendor file
    ])
  };
  return clientBundleConfig;
};
