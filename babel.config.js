const path = require('path');

const paths = {
  // "@components": path.resolve(__dirname, 'src/components'),
  src: path.resolve(__dirname, 'src'),
};

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: paths
        }
      ]
    ]
  };

};
