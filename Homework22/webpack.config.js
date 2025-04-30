import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: './js/app.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,   // вытягивает CSS в отдельный файл          
          'css-loader',                 // преобразует CSS в CommonJS
          'sass-loader'                // компилирует SCSS в CSS
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // итоговый файл стилей
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin() // ← минификация CSS
    ],
  },
  devServer: {
    static: './dist',
    watchFiles: ['./js/**/*', './styles/**/*', './dist/index.html'],
    open: true,       // открывает браузер автоматически
    hot: true,        // "горячая" перезагрузка
    port: 3000
  }
};
