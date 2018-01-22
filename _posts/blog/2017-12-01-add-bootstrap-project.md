---
title: "Añadir Bootstrap a tu proyecto"
layout: post
date: 2017-12-17 22:48
image: /assets/images/blog/bootstrap.png
headerImage: false
tag:
- angular
- bootstrap
- javascript
category: blog
author: pablosirera
---

<div class="image-logo">
  <img class="image" src="{{site.url}}/{{site.images.bootstrap}}">
</div>

Para añadir bootstrap 4 a tu proyecto, necesitaremos instalar el paquete con **npm**.

Para ello, nos iremos a la página oficial de [bootstrap](https://v4-alpha.getbootstrap.com/) y buscamos el comando para instalar por npm.

Cuando lo tengamos, en la terminal escribiremos:
{% highlight html %}
npm install --save bootstrap
{% endhighlight %}

Una vez finalizado nos iremos al archivo **angular-cli.json** que se aloja en la raíz de nuestro proyecto **Angular** y añadiremos la ruta del archivo _css_ de bootstrap en _node_modules_. Quedará así:

{% highlight html %}
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.min.css”,
  "styles.css"
],
{% endhighlight %}

Esto añadirá los estilos propios de **Bootstrap** en nuestro, bastará con reiniciar el servidor angular.

Si posteriormente queremos añadir la librería JS de **Bootstrap** haremos el mismo procedimiento, nos iremos al archivo **angular-cli.json** y añadiremos la referencia al archivo _.js_:

{% highlight html %}
"scripts": [
  "../node_modules/bootstrap/dist/js/bootstrap.min.js"
],
{% endhighlight %}

Para que el JS de Bootstrap funcione necesita dos librerías más, una es **Jquery** y otra es **PopperJS**.

Lanzamos los siguientes comandos:
{% highlight html %}
npm install --save jquery
npm install --save popper.js
{% endhighlight %}

Finalizado esto, nos iremos al archivo de configuración **angular-cli.json** y añadiremos las rutas con el siguiente resultado:

{% highlight html %}
"scripts": [
  "../node_modules/popper.js/dist/popper.min.js",
  "../node_modules/jquery/dist/jquery.min.js",
  "../node_modules/bootstrap/dist/js/bootstrap.min.js"
],
{% endhighlight %}

Con esto, habremos añadido la librería CSS  y JS de **Bootstrap**.