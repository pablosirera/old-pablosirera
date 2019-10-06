module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/assets/styles/all.scss";
        `,
      },
    },
  },
}
