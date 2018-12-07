<template>
  <article class="article-blog">
    <h2>Deploy Aplicación VueJS en GitHub Pages</h2>
    <div class="body-article">
      <p>Para poder desplegar nuestra aplicación en Vue para que nos muestre dentro de GitHub Pages habrá que seguir los siguientes pasos:</p>
      <p>Primero deberemos hacer checkout de master a otra rama que será para trabajar sobre ella en vez de sobre master. Por ejemplo:</p>
      <pre v-highlightjs>
        <code class="bash">  git checkout -b ghpages</code>
      </pre>
      <p>
        A continuación, en la raíz del proyecto tendremos que crear
        <code
          class="simple-code"
        >deploy.sh</code> con la siguiente configuración:
      </p>
      <pre v-highlightjs>
        <code class="shell">
    #!/usr/bin/env sh

    # abort on errors
    set -e

    # build
    npm run build

    # copy README.md
    cp README.md dist/

    # navigate into the build output directory
    cd dist

    git init
    git add -A
    git commit -m 'deploy'

    # if you are deploying to https://USERNAME.github.io
    git push -f git@github.com:USERNAME/USERNAME.github.io.git master

    cd -
        </code>
      </pre>
      <p>Esto nos creará el build de nuestra aplicación y lo subirá a master, de ahí la importancia de crear una rama con nuestro código.</p>
      <p>Para finalizar, lanzaremos el script en la consola
        <code class="simple-code">sh deploy.sh</code>. Una vez que termine si nos vamos a nuestra dominio veremos nuestra aplicación desplegada.
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DeployAppsVue'
})
</script>

<style lang="scss">
.article-blog {
  h2 {
    margin-bottom: 40px;
  }
  .body-article {
    text-align: left;
    p {
      line-height: 1.7;
    }
  }
}
</style>
