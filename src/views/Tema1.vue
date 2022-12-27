<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Necesidades, deseos y demanda
      
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8     
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 Impulsar productos alimenticios requiere técnicas que abarcan una amplia gama de conocimientos, desde su manipulación hasta el tipo de cliente al que van dirigidos. Al entrar en contacto con el cliente es esencial saber cuáles son las características, propiedades, ventajas y especificaciones técnicas del producto. Esos conocimientos ayudarán a construir un discurso que sirva para transformar los deseos de los clientes en necesidades, a mostrarles la importancia del producto, lo satisfactorio que puede resultarles, y crearles el deseo de repetir la compra, es decir, adquirirlo nuevamente lo más pronto posible.
        p(data-aos="fade-down") A continuación, se muestran los conceptos y clasificación del tipo de necesidades que tienen, tanto las personas como las empresas.
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')          

    .row.mb-5(data-aos="zoom-in-left")
      h2 ¿Qué es necesidad?
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')           
      .col-lg-7
        p(data-aos="fade-down") Depende del ámbito, la ciencia de estudio o el área desde donde se mire, de forma general, la necesidad puede definirse como la #[strong carencia de algo], ya sea físico o mental. En ocasiones puede ser algo subjetivo, es decir, cada quien lo determina.

        p(data-aos="fade-down") Desde el punto de vista del mercadeo, la necesidad es la “sensación de una carencia que, a su vez, está unida al deseo por hacerla desaparecer. El deseo por satisfacer las necesidades se traduce en demanda de productos que el consumidor adquiere" (Escudero, 2017, p. 194).
        
        p(data-aos="fade-down") Profundice más sobre este tema, para diferenciar las necesidades humanas de las que tienen las empresas.
    
    h4(data-aos="fade-down") Clasificación de las necesidades humanas
    p(data-aos="fade-down").mb-5 En la actualidad, se conserva la base y la teoría planteada por Abraham Maslow en 1943 (Escudero, 2017, p.196). Con su famosa pirámide, Maslow planteaba cinco necesidades esenciales en el ser humano, las cuales se ven en la Figura 1 y se detallan a continuación.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10    
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Figura 1.
          span Pirámide de Maslow 
        ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/5.svg', alt='')

          .tarjeta.color-acento-botones.p-3(x="55%" y="10%" numero="1")
            .h5.mb-2 Necesidades básicas
            p.mb-0 Son aquellas necesidades fisiológicas, es decir, esenciales para la existencia del ser humano, como respirar, comer y descansar. 
          .tarjeta.color-acento-botones.p-3(x="65%" y="29%" numero="2")
            .h5.mb-2 Necesidades de seguridad y protección 
            p.mb-0 Son las que requiere el ser humano para sentirse seguro y protegido, tanto en el ámbito físico como mental; por ejemplo, seguridad física, bienestar, empleo, familia, acceso a salud, así como obtener bienes privados y jubilarse. 
          .tarjeta.color-acento-botones.p-3(x="76%" y="50.5%" numero="3")
            .h5.mb-2 Necesidades sociales      
            p.mb-0 Tienen que ver con la necesidad de relacionarse con otros, por ejemplo, con su familia, entablar lazos de compañerismo y amistad con otros, y tener una pareja. 
          .tarjeta.color-acento-botones.p-3(x="85.5%" y="70.5%" numero="4")
            .h5.mb-2 Necesidades de reconocimiento 
            p.mb-0 Son las relacionadas con la introspección, el autorreconocimiento, la confianza y el respeto en sí mismo.    
          .tarjeta.color-acento-botones.p-3(x="96%" y="90.5%" numero="5")
            .h5.mb-2 Necesidades de autorrealización 
            p.mb-0 Permiten al ser humano explorar la creatividad, descubrir nuevas habilidades, el ingenio, la espontaneidad y la moralidad.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='')  
      .col-lg-8
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 Quienes desarrollan labores de #[i marketing] o trabajan en áreas asociadas a las ventas, como la comunicación, deben tener claras las categorías asociadas a las necesidades. Por ejemplo, cuando alguien compra un cereal puede buscar simplemente satisfacer su necesidad de alimentarse, sin embargo, elegir una marca o tipo de cereal frente a otros puede expresar un deseo de llevar una vida más sana y, tal vez, obtener algún tipo de reconocimiento social.

    p(data-aos="fade-down") Luego de conocer las necesidades de los seres humanos, se describen las de las empresas.
    h4(data-aos="fade-down") Clasificación de las necesidades de las empresas
    p(data-aos="fade-down").mb-5 Al igual que ocurre con las necesidades del ser humano, las empresas presentan unas necesidades que se pueden establecer de forma análoga así: 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Fisiológicas o básicas")
            .col-12
              p Hace referencia a la financiación que recibe la empresa, que puede ser de los socios o de fuentes externas. Se incluyen aquí todas las instalaciones, equipos, herramientas y clientes que son fundamentales para su funcionamiento.
          .row.justify-content-center.align-items-center(titulo="De seguridad")
            .col-12
              p En las empresas hay varios ámbitos que requieren seguridad: las <b>instalaciones y bienes materiales</b> (incluye las normas y manuales para la manipulación de maquinaria, cumplimiento de estándares y protocolos para evitar accidentes, robos, pérdidas, y el amparo de pólizas que cubran posibles eventualidades); <b>seguridad financiera</b>, esto es buen manejo de créditos y recopilación de cartera para mantener un respaldo económico y <b>seguridad humana</b>, enfocada en proteger y garantizar el bienestar de los trabajadores de la organización (Escudero, 2017, p. 197).
          .row.justify-content-center.align-items-center(titulo="Sociales")
            .col-12
              p Para las empresas son las necesidades de asociación o establecimiento de gremios con otras compañías, en diferentes sectores del mercado, con el fin de impulsar y hacer crecer su sector.
          .row.justify-content-center.align-items-center(titulo="Reconocimiento")
            .col-12
              p Se alcanza cuando se obtienen los objetivos o metas trazadas desde el punto de vista estratégico, por ejemplo, productos de calidad, reconocimiento de la marca, posicionarse en el mercado, lograr la expansión o abrir nuevas sucursales.
          .row.justify-content-center.align-items-center(titulo="Autorrealización")
            .col-12
              p Alcanzar el punto más alto, establecerse como un punto de referencia global, buscando mantenerse y crecer cada vez más.

    p(data-aos="fade-down").mb-5 En la Figura 2 se ilustran las necesidades de una compañía; los consumidores son la base y las siguientes escalas son la seguridad, la estabilidad, directivos eficientes, posicionamiento y liderazgo. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10    
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Figura 2.
          span Necesidades de una compañía
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')
      .col-lg-7.p-0        
        figcaption.mt-3 Nota: tomado de Escudero (2017).


    .row.mb-5(data-aos="zoom-in-left")
      h2 ¿Qué es deseo?
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/9.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En #[i marketing], el deseo es aquello que va más allá de la necesidad: es la creencia de que un producto específico puede cubrir mejor una necesidad básica que otro, u otros disponibles en el mercado.
          br               
          br
          span Un ejemplo se presenta al elegir un perro caliente para comer, lo que se hace para cubrir una necesidad básica (la de alimentarse), cuando se tiene disponible otro tipo de alimentos (como una ensalada o una fruta). El deseo se presenta cuando la persona manifiesta su intención y expresa de manera específica y puntual cómo quiere solucionar su necesidad. Cuando manifiesta que la única manera de calmar el hambre es mediante un perro caliente.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7 
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 En el momento de la venta los deseos desempeñan un papel fundamental, por eso la gran tarea del #[i marketing] es identificar las necesidades (ya existentes) de los clientes y potenciales consumidores y canalizarlas de manera que se transformen en deseos hacia los productos que se espera venderles.
        p(data-aos="fade-down") La manera como una persona transforma las necesidades en deseos depende de varios factores, no solo del #[i marketing]. Entre ellos están aspectos personales como sus vivencias, educación, creencias, el entorno cultural, social y ambiental y, por supuesto, su capacidad adquisitiva. Se puede tener el deseo de un automóvil último modelo, sin embargo, la edad, la ubicación geográfica y la oferta del producto en la zona pueden imposibilitar su compra.
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')


    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.svg', alt='')    
      .col-lg-10(data-aos="fade-down")
        h3 La demanda 
        p.mb-0 Visto ya qué es el deseo para el <em>marketing</em>, ahora es necesario conocer cómo este se transforma en demanda. En el siguiente video se explican los aspectos característicos de la demanda. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
