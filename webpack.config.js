const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
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
              additionalData: `$env: ${process.env.NODE_ENV};\n\n`,
            },
          },
        ],
      },
    ],
  },
};
