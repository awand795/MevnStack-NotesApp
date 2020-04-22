const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir:path.resolve(__dirname,'../views'),
  devServer:{
    proxy:{
      '/api':{
        target:"http://localhost:5000"
      }
    }
  }
}