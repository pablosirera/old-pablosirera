<template>
  <article class="article-blog">
    <h2>Deploy Aplicación VueJS en GitHub Pages</h2>
    <div class="body-article">
      <p>Si se quiere desplegar la aplicación hecha con Vue para que nos muestre el contenido dentro de GitHub Pages habrá que seguir los siguientes pasos.</p>
      <p>• Inicialmente y <b>muy importante</b> habrá que cambiarse a otra rama diferente de master que se usará para trabajar sobre ella en vez de sobre la rama principal.</p>
      <pre v-highlightjs>
        <code class="bash">  git checkout -b ghpages</code>
      </pre>
      <p>Esto es debido a que cuando a continuación se haga el deploy de la aplicación la carpeta /dist se hará push sobre master y no se encontrará el contenido de la aplicación solamente el de la carpeta /dist</p>
      <p>
        • Ahora, en la raíz del proyecto habrá que crear el archivo
        <code
          class="simple-code"
        >deploy.sh</code> con el siguiente contenido:
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
      <p>Cabe destacar que la tarea de build en la de por defecto:
      <code class="simple-code">"build": "vue-cli-service build"</code></p>
      <p>El script creará el build de la aplicación y lo subirá a master.</p>
      <p>
        • Para finalizar, escribimos en la consola
        <code class="simple-code">sh deploy.sh</code> para lanzar el script que se ha creado anteriormente. Una vez que termine si nos vamos a nuestra url de GitHub Pages veremos la aplicación desplegada.
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
