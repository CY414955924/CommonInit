// const getAssetPath = require("./src/utils/base.js");

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

const genAssetSubPath = dir => {
  return `${dir}/[name].[hash:8].[ext]`;
};

module.exports = {
  // 基本路径
  // baseUrl: process.env.VUE_APP_OUTPUTDIR,
  baseUrl:
    process.env.VUE_APP_CURRENTMODE == 'production'
      ? process.env.VUE_APP_OUTPUTDIR
      : './',
  outputDir: 'dist',
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias.set('assets', resolve('src/assets'));

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10000,
        name: genAssetSubPath('img')
      });
    config.module
      .rule('compile')
      .test(/\.js$/)
      .include.add(resolve('src'))
      .add(resolve('test'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .options({
        presets: [['@babel/preset-env', { modules: false }]]
      });
    config.mode('development').output.filename('js/develop-[name].js');

    // icons目录绝对路径
    const iconsPath = path.join(__dirname, 'src/icons');
    // 1.禁用默认svg的rule，是他忽略icons目录
    config.module.rule('svg').exclude.add(iconsPath);
    // 2.启用svg-sprite-loader，使他启用icons目录
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(iconsPath)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' });
  },
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    },
    modules: false
  },
  parallel: require('os').cpus().length > 1,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    hot: true,
    proxy: {
    }
    // 设置代理
    // before: app => {
    // }
  }
  // 第三方插件配置
  // pluginOptions: {
  //   // ...
  // }
};
