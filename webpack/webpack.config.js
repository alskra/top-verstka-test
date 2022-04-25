const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: './src/pages/index/index.js',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        id: 'css',
        test: /\.s?css$/i,
        use: [
          // Translates CSS into CommonJS
          'css-loader',
          // Process CSS with PostCSS
          'postcss-loader',
          // Url re-writing
          'resolve-url-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
              },
              sourceMap: true, // <-- !!IMPORTANT!!
              additionalData: `$NODE_ENV: ${process.env.NODE_ENV};\n\n`,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
};

module.exports = () => {
  if (process.env.NODE_ENV === 'development') {
    config.devtool = 'eval-source-map';

    config.module.rules.find((rule) => rule.id === 'css')
      .use.unshift('style-loader' /* Creates `style` nodes from JS strings */);
  }

  if (process.env.NODE_ENV === 'production') {
    config.module.rules.find((rule) => rule.id === 'css')
      .use.unshift(MiniCssExtractPlugin.loader /* Extracts CSS into separate files */);

    config.plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }));
  }

  return config;
};
