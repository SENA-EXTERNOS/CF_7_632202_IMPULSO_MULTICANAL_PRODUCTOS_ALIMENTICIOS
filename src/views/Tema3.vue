<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Tipos de cliente

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/44.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Conocer el tipo de cliente al que nos enfrentamos es de suma importancia. Saber sus tendencias de compra, su comportamiento y conocer su temperamento ayuda a un acercamiento más fácil. Al abordarlo hay aspectos que pueden influir en el ánimo de compra, por ejemplo, si viene solo o en familia. Esto es fundamental para lograr una venta en el menor tiempo posible, y lo más importante, que se pueda repetir el proceso en días posteriores, aumentando la tasa de recompra.          
          br
          br
          span A continuación, se describen los diferentes tipos de clientes según su biotipo o temperamento.  

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Según su biotipo 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down").mb-0 Establecer el tipo de cliente que se atiende es de gran ayuda para el vendedor, porque proporciona información al momento de concretar la venta. A continuación se clasifican según el tipo biotipo. 

    p(data-aos="fade-down").mb-5.text-center Por el aspecto corporal de los clientes se logran distinguir tres biotipos: 

    .row.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5
              h4.pt-5 Asténico
              p.pb-5 Cliente con apariencia débil, alto, delgado, cuenta con extremidades largas, se nota predominio del sistema nervioso. Al momento de interactuar es tímido, prefiere estar solo y procura pasar inadvertido al momento de la compra. Se muestra atento a los detalles y se siente orgulloso por ser diferente, además, compra por seguridad y placer, le apasiona y se interesa por temas que tratan sobre la ciencia o el futuro. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/46.svg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/47.svg')})`}")
            .tarjeta-slide__contenido.p-5
              h4.pt-5 Atlético
              p.pb-5 Cliente bien proporcionado, sus huesos y músculos están muy desarrollados, se nota predominio del sistema óseo y circulatorio. Al momento de interactuar es dominante, enérgico, puede comportarse agresivo y extrovertido. Tiene gran seguridad en sí mismo y suele sentirse superior. Al momento de comprar lo hace por orgullo, con riesgo económico, le gusta buscar lo importante, le interesan los deportes, así como los negocios y la política (Escudero, 2017, p. 207).

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/48.svg')})`}")
            .tarjeta-slide__contenido.p-5
              h4.pt-5 Pícnico
              p.pb-5 Cliente con formas redondeadas, grueso, sus extremidades son cortas, se nota predominio del sistema visceral. Al momento de interactuar se muestra muy relajado, amable y con sentido del humor; le gusta el lujo y el confort, así como el bienestar y encontrar la facilidad en todo, incluso a la hora de comprar, por lo que busca lo más sencillo y cómodo. Se interesa por temas afectivos, familiares, ocio y vacaciones. 

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Según su temperamento 


    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/49.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down").mb-0 Para seguir conociendo los diferentes tipos de clientes, en este apartado se describe la clasificación según el temperamento, es decir, la manera de ser de cada individuo y la forma como enfrenta una situación en un espacio y circunstancia determinados. En ventas es fundamental conocerlos y saber interactuar con cada uno de ellos. 
    p(data-aos="fade-down").mb-5.text-center A continuación se muestran distintos tipos de temperamentos y sus principales características:  
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Melancólico") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            p Agrupa personas soñadoras, analíticas e introvertidas, con una gran sensibilidad. Son muy perfeccionistas y se les dificulta enfrentar grandes cambios. Son confiables y no acostumbran abandonar lo que emprenden. En el momento de la venta con este tipo de clientes es recomendable entregarles cifras, valores exactos que puedan procesar, mostrarles el beneficio monetario, las proyecciones futuras y todo aquello que le ayude a decidirse por la compra. 
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='') 
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Colérico") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            p Son personas muy rápidas, ágiles, activas, extrovertidas, decididas, y sobre todo, dominantes. Les gusta que se hagan las cosas como ellos lo indican y por eso suelen tener ideas y opiniones firmes; sin embargo, no temen los cambios, son ambiciosas, y así mismo se trazan metas altas, por esta razón son voluntariosas, autosuficientes e independientes. Durante el proceso de venta se le debe dejar expresarse, y aprovechar sus impulsos y su manera rápida de ver la vida para concretar el negocio, ya que este tipo de cliente es activo y difícilmente se comporta dócil. 
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.png', alt='')  
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Flemático") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            p Son personas tranquilas, lentas, serias, introvertidas y analíticas. Difícilmente pierden la compostura, rara vez se exaltan. Sin embargo, les cuesta enfrentar cambios, se inclinan por la reflexión excesiva, y la consulta con colegas o familiares para la toma de decisiones. Por lo general consultan todo tipo de cosas sobre el producto y van acompañados de familiares o amigos. Para la venta se debe proceder de forma muy amigable, porque son personas muy fraternas que permiten la conversación. Establecer un clima de confianza con ellos y con sus acompañantes ayuda a que tomen la decisión.  
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='')  
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Sanguíneo") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            p Son personas extrovertidas, vivaces, activas, disfrutan la vida; son sumamente alegres, receptivas y muy flexibles a los cambios. Les gusta hablar demasiado y les cuesta concentrarse, por lo que para lograr la venta se deben hacer preguntas muy concretas e ir encaminando el diálogo a lo realmente importante, de lo contrario solo se quedará en una charla y no será posible concretar nada. Ayuda mucho encontrar puntos en común con este tipo de clientes, por ejemplo, una canción o un pasatiempo, para lograr el enganche y hacer la venta, convirtiendo el impulso en una compra. 
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.png', alt='')  
    .row.justify-content-center.align-items-center     
      .col-lg-10   
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down") 
          p(data-aos="fade-down") Para finalizar con el estudio de este componente formativo, lo invitamos a explorar los demás recursos que se encuentran disponibles en el menú principal y leer la síntesis. Responder la actividad didáctica. Puede profundizar sobre los temas estudiando el material complementario. 

          p(data-aos="fade-down").mb-0 ¡Anímese a continuar con el proceso de aprendizaje!
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
