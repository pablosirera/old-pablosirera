module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/scss/all.scss";
        `
      }
    }
  }
}
