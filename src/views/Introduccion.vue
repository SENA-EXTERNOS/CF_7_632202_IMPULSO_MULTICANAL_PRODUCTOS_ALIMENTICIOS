<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán conceptos relacionados con la venta de productos alimenticios. Las fases o etapas que se desarrollan, las técnicas de venta y las estrategias asociadas a los sentidos que pueden motivar la compra de los clientes. Asimismo, se verá, paso a paso, cómo llevar un control de los indicadores. Todo ello contribuye a aumentar las ventas y fidelizar clientes. El aprendiz, mediante ejemplos que se desarrollan en este recurso educativo, tendrá un acercamiento con los conceptos básicos e información teórica y de la realidad, asociada a las ventas.
        br
        br
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/3jLg-qgzr0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Comercialización de productos
            
             
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
