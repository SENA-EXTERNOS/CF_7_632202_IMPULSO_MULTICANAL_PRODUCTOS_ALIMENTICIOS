<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 La venta 
    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')  
      .col-lg-7
        p(data-aos="fade-down") La venta es una actividad fundamental para la compañía; es un proceso en el que intervienen diferentes factores y contempla varias etapas: la calidad del producto, su exhibición, las características funcionales y demostrativas que deseen potenciarse, el tipo de negociación que se establece con el cliente, el precio, el medio y forma de pago, entre otros.

        p(data-aos="fade-down") Para ilustrarlo mejor, podría pensarse en dos productos: un automóvil y una hamburguesa. La venta del primero requiere un ambiente formal, con el vendedor y el comprador sentados a la mesa, en calma, con libreta, bolígrafo y, quizá, un computador para revisar marcas, tipos, colores, precios, planes de financiación, etc. Por otro lado, en los puntos de venta de alimentos al detal el proceso es muy rápido: el cliente mira las opciones en un tablero y hace el pedido, no se negocia el precio, el ambiente es informal, el mobiliario es sencillo y, normalmente, de material resistente.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/13.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Tipos de ambiente
                  p.mb-0 Para que tenga mayor claridad sobre los diferentes ambientes en las ventas, revise y estudie con atención el Anexo 1.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_Tipos_de_ambiente.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Fases de la venta

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down").mb-0 La venta exige una preparación detallada para su culminación exitosa. Este es un proceso que suele tener una serie de fases o etapas y una metodología que puede replicarse con diferentes clientes. Cabe resaltar que ese proceso no implica, en ningún momento, un libreto estricto, ya que cada vendedor tiene su estilo y forma de acercarse al potencial comprador y, lo más importante, debe adaptarse al tipo de cliente al cual se enfrenta. 

    p(data-aos="fade-down").mb-5.text-center Las fases de venta sugeridas se representan en la Figura 3.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8  
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Figura 3.
          span Fases de la venta
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.svg', alt='') 

    p(data-aos="fade-down") A continuación, se explican cada una de las fases de la venta, en detalle.

    h5(data-aos="fade-down") Fase 1: Preparación

    p(data-aos="fade-down").mb-5 La preparación es la primera fase en la que se realiza el alistamiento, planteamiento de objetivos, estrategias y se establecen parámetros para el primer contacto con el cliente, teniendo en cuenta los siguientes pasos: 

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start.pt-2
          .col-md-4.mb-4.mb-md-0
            h4.mb-3 Alistamiento
            p Para una venta exitosa es indispensable preparar todos los elementos que van a intervenir en ella: el espacio, la disposición del producto, la forma de exhibirlo, así como conocer al detalle sus características y propiedades, de manera que puedan resolverse todas las dudas e inquietudes del cliente. Dar una información clara y adecuada al interesado sobre el producto contribuye, en gran medida, a una venta exitosa. Además, el vendedor debe conocer el sector en el cual ocurre la venta y responderse preguntas como ¿quién es mi cliente?, ¿cuáles son sus gustos?, ¿qué tan frecuentemente nos visita?
          .col-md-7
            img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='') 
        .row.justify-content-center.align-items-start.pt-2
          .col-md-4.mb-4.mb-md-0
            h4.mb-3 Planteamiento de objetivos y estrategias 
            p Para lograr la venta, el vendedor debe, desde el inicio, plantearse el objetivo y desarrollar una estrategia que le permita lograrlo, considerando el discurso que va a utilizar, así como los medios y elementos de los que dispondrá. Preparar una buena entrevista le permitirá al vendedor tener confianza y seguridad, demostrarlo ante el cliente y tener mayores probabilidades de éxito, porque hay clientes que conocen el producto. De acuerdo con Escudero (2017), “los compradores profesionales, estratégicos e industriales son grandes conocedores del producto y la competencia" (p. 205).
          .col-md-7
            img.img-a.img-t(src='@/assets/curso/temas/17.png', alt='') 
        .row.justify-content-center.align-items-start.pt-2
          .col-md-4.mb-4.mb-md-0
            h4.mb-3 Primer contacto con el cliente
            p El primer contacto con el cliente es primordial porque permite captar la atención y encaminar el proceso de venta, por esa razón se debe pensar muy bien en la actitud, el saludo y las frases iniciales que se utilicen. Es mejor evitar frases como “solo quería decirle” o “no tengo nada nuevo”, entre otro tipo de expresiones que puedan denotar inseguridad.
          .col-md-7
            img.img-a.img-t(src='@/assets/curso/temas/18.png', alt='') 

    h5(data-aos="fade-down") Fase 2: Identificar necesidades

    p(data-aos="fade-down").mb-5 En esta fase de la venta es importante estar atento a todos los elementos que brinden información para identificar las necesidades del cliente y concretar la venta. A continuación, se describen cada uno de los aspectos característicos de esta fase. 

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Recopilar información" :icono="require('@/assets/curso/temas/24.svg')")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            p Aquí, el vendedor define, detecta, reúne o confirma las necesidades, motivaciones o móviles de compra del cliente. Cuanta más información logre recopilar más fácil será decidir acerca de los productos que puede ofrecerle y los argumentos de venta que podrá utilizar. Es importante hacer coincidir todas las características y los beneficios del producto con las necesidades y motivaciones expresadas por el cliente y tener alternativas y argumentos para ofrecerle, cuando aquello que le mostró primero no lo convence. En esto es clave un arduo trabajo de investigación.
          .col-md-4 
            img.img-a.img-t(src='@/assets/curso/temas/20.png', alt='') 
      .py-4.py-md-5(titulo="Estar atento a las señales" :icono="require('@/assets/curso/temas/25.svg')")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            p En esta fase se emiten señales y mensajes no verbales, que se deben recopilar e interpretar puesto que comunican muchas cosas. Es de suma importancia aprender a identificarlos. Indagar es un proceso riguroso que exige saber hacer las preguntas pertinentes y de manera adecuada, para conseguir información del cliente, tanto de aquellos tímidos o silenciosos, como de quienes hablan demasiado y se dispersan con facilidad; por tanto, es clave centrarlos nuevamente en el tema de interés.
          .col-md-4 
            img.img-a.img-t(src='@/assets/curso/temas/21.png', alt='') 
      .py-4.py-md-5(titulo="Formular preguntas" :icono="require('@/assets/curso/temas/26.svg')")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            p Las preguntas son una herramienta útil y poderosa para obtener información acerca de las necesidades y deseos del cliente, además, propician un clima de confianza mutua. El silencio, por su parte, también es considerado herramienta de comunicación, puesto que demuestra atención total a quien está hablando, evita crear barreras y genera una ligera presión sobre el cliente para que continúe expresándose.

            p Para lograr mejores resultados se debe recurrir a diferentes tipos de preguntas, como se lista a continuación:
            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 Cerradas: la respuesta es “sí” o “no”.
              li 
                i.fas.fa-check
                p.mb-0 Abiertas: brindan información más amplia.
              li 
                i.fas.fa-check
                p.mb-0 Neutras: no influyen en las respuestas del cliente.
              li 
                i.fas.fa-check
                p.mb-0 De control: permiten llevar un control sobre la interacción e ir precisando pensamientos. Por ejemplo: “Entonces, ¿lo que usted me quiere decir es...?”.
              li 
                i.fas.fa-check
                p.mb-0 Condicionantes: influyen en la respuesta del cliente hacia información que le interesa.
              li 
                i.fas.fa-check
                p.mb-0 Alternativas: permiten dos posibilidades, siempre positivas. Son muy útiles al cierre de la venta. Por ejemplo: “¿Prefiere que le haga el envío al trabajo o a su casa?”.                      
          .col-md-4 
            img.img-a.img-t(src='@/assets/curso/temas/22.png', alt='') 
      .py-4.py-md-5(titulo="Preguntas abiertas" :icono="require('@/assets/curso/temas/27.svg')")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            p Las preguntas abiertas se suelen emplear al iniciar la gestión de venta, porque ayudan a recopilar una amplia cantidad de información, sobre todo de clientes que no se limitan al momento de hablar. En este caso es recomendable dejar expresar al cliente e irlo guiando para evitar que se desvíe. Por otro lado, las preguntas cerradas se utilizan con personas que no brindan demasiada información útil o les cuesta expresarse.         
          .col-md-4 
            img.img-a.img-t(src='@/assets/curso/temas/23.png', alt='')                                     
    h5(data-aos="fade-down").mb-5 Fase 3: Argumentación
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        p(data-aos="fade-down") Esta fase es fundamental en el proceso de venta. El vendedor es el encargado de lograr que el cliente perciba las diferencias y ventajas que tienen sus productos frente a los de la competencia, para esto debe utilizar los argumentos adecuados, resaltar los beneficios, y encaminar las necesidades puntuales del cliente usando toda la información que recopiló previamente.             
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')                                     

      .col-lg-6 
        p(data-aos="fade-down") No se debe confundir la argumentación con la exposición de los atributos del producto, ya que estos últimos se deben enunciar o en algunas ocasiones se encuentran exhibidos, por ejemplo, el color, la garantía, las instrucciones de uso, etc. La argumentación consiste en resaltar los beneficios del producto de manera coherente con los deseos del cliente y transformar a favor del producto las objeciones que pueda presentar el comprador. Un buen argumento debe ser claro y sencillo, se deben evitar términos técnicos o que se utilicen solamente en el sector específico, y debe brindarse en el momento adecuado evitando hablar de más.          
    h5(data-aos="fade-down").mb-5 Fase 4: Manejo de objeciones

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down").mb-0 Las objeciones de los clientes pueden ser muy diferentes, como falta de tiempo para escuchar al vendedor, tiene un producto similar de otra marca, se le dificulta el cambio o tiene problemas de presupuesto, entre otras.  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 En la mayoría de los casos las objeciones se originan por dudas o malentendidos y el vendedor debe estar dispuesto y escuchar con atención lo que el cliente expresa, para así despejar sus inquietudes y no sentirse atemorizado por las preguntas que le hagan, puesto que el cliente no busca atacar sino expresar sus inconformidades o inseguridades durante la compra. 
    p(data-aos="fade-down").mb-5.text-center Para el vendedor es de suma importancia aprender a identificar y manejar las objeciones para poder enfrentarlas. A continuación, se describen las más comunes:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Evasivas")
            .col-12
              p Este tipo de objeciones buscan huir de la responsabilidad o desviarla, por ejemplo: “No lo decido yo” o “tengo que consultarlo con mi pareja”.    
          .row.justify-content-center.align-items-center(titulo="Excusas")
            .col-12
              p También llamados pretextos, buscan ocultar las verdaderas objeciones y suelen ser síntomas de una contundente falta de interés, por ejemplo: “Está muy caro” o “no lo necesito”. Se debe tratar de esclarecer si esos son los verdaderos motivos o si hay otros y ofrecer alternativas que puedan estar disponibles, como planes de financiación. 
          .row.justify-content-center.align-items-center(titulo="Prejuicios")
            .col-12
              p Son ideas preconcebidas que el cliente tiene hacia el producto, motivadas en muchas ocasiones por experiencias negativas o por comentarios de otros consumidores. En la mayoría de los casos este tipo de objeciones no se expresan, por lo que es sumamente difícil tratarlas. Aquí es donde el vendedor debe estar muy atento y hacer preguntas abiertas que permitan conocer más acerca de esta negativa para descubrir las razones que originan el prejuicio.  
          .row.justify-content-center.align-items-center(titulo="Dudas")
            .col-12
              p En este tipo de objeción se muestra a un cliente escéptico, es decir, duda de que el bien o servicio le vaya a proporcionar todos los beneficios que el vendedor le asegura, cuando realmente es lo que él desea. Por lo general, este tipo de objeción es fácil de refutar, ya que solo bastará con probar al cliente que todo lo que se menciona es verdad, apoyándose en una prueba o demostración. 
          .row.justify-content-center.align-items-center(titulo="Malentendido")
            .col-12
              p Estas objeciones surgen por una información incompleta o porque el comprador cree que el producto (bien o servicio) tiene una desventaja, que en realidad no existe. En ocasiones el cliente expresa objeciones cuando lo que quiere es hacer preguntas que permitan aclarar información; si el vendedor es lo suficientemente hábil y procura encontrar cuál es la información que aún no está clara para el comprador, este tipo de objeciones serán fáciles de manejar. 
          .row.justify-content-center.align-items-center(titulo="Desventaja")
            .col-12
              p Cuando el cliente expresa desventajas del producto, puede que este no le brinde los beneficios que él busca o hay algo que no le agrada, en muchas ocasiones puede ser el precio, las dimensiones, o algún efecto secundario que pueda tener. La forma de atacar este tipo de objeciones es escuchar lo que expresa sin interrumpirlo, para conocer muy bien su objeción y contrarrestarla con los beneficios del producto (Muñiz, 2014, p. 320).

    p(data-aos="fade-down").mb-5 Siempre se debe ir más allá de las objeciones. El manejo de estas o rebatir cualquier clase de negatividad de los clientes es el abecé de las ventas. Si no se conocen los métodos para ello, entonces nos encontramos ante la necesidad urgente de capacitar a los vendedores o impulsadores (BAE Negocios, 2022, p. 1).

    h5(data-aos="fade-down").mb-5 Fase 5: Cierre

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/30.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las fases anteriores y todo lo que el vendedor ha hecho tiene como fin llegar a esta etapa y concretarla, ya que va a permitir vender el producto o generar un compromiso, por esto todas las fases anteriores deben ejecutarse de forma correcta, esto es, hacer las preguntas de manera asertiva, identificar las necesidades del cliente y el uso que le va a dar al producto, y manejar adecuadamente las objeciones.
          br 
          br
          span El objetivo del cierre de la venta es ayudar al cliente indeciso a tomar la mejor decisión. Durante esta etapa puede haber tensión tanto en el vendedor como en el cliente. En el primero, porque teme estropear la venta o ser demasiado invasivo con el cliente, y este puede no estar seguro de haber investigado lo suficiente o de haber revisado otras opciones (Muñiz, 2014, p. 325).  

    p(data-aos="fade-down") Se debe aprender a interpretar las señales que emite el cliente, tanto verbales como no verbales. En las primeras están preguntas que demuestran su interés: ¿Qué modelos tiene?, ¿lo tiene en otro color?, ¿puedo pagar con tarjeta?, ¿puede hacerme una demostración?, etc.

    p(data-aos="fade-down").mb-5 Las señales no verbales incluyen gestos y todo el lenguaje corporal, como asentir con la cabeza, demostrar satisfacción, gusto o atención por el producto. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 Durante el cierre se debe estar con actitud positiva, y saber en qué momento proceder con el cierre, puesto que no se puede extender demasiado el proceso de venta. Para ello es necesario crear espacios de confianza y hacer preguntas de cierre, como ¿se lo envió a la casa o a su oficina?, ¿entonces va a llevar el blanco o el verde?, etc., así como un breve resumen de los beneficios del producto. En caso de no concluir la venta se debe generar un compromiso con fecha, lugar, etc. 
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.svg', alt='')

    p(data-aos="fade-down").mb-5 A continuación, se presentan algunos indicadores para medir las ventas.

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Indicadores de ventas

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down").mb-0 Medir una campaña de ventas es sumamente importante, ya que nos permite medir la productividad. Esta práctica debe ser constante, objetiva y oportuna por el bienestar de la empresa. Al tener procesos bajo control, se podrá identificar y mejorar estrategias de mercadeo y ventas, así como el desempeño por empleado. Por otro lado, esto contribuye con la gestión de fidelización y satisfacción de los clientes en los procesos de venta (Aguirre, 2022, p. 1). 

    p(data-aos="fade-down").mb-5 Medir y controlar el rendimiento del equipo de ventas es una tarea rigurosa. Para lograrlo es fundamental una supervisión frecuente, teniendo en cuenta los siguientes elementos que van a permitir aumentar la productividad:  

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Capacitación") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            p Hace referencia a la preparación que tiene el equipo de ventas acerca de los productos, así como las técnicas utilizadas para conseguir la venta con los clientes.  
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')   
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Conocimiento de <br>procesos") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            p Conocer al detalle los pasos que se deben seguir con cada cliente, según la fase del proceso en la que el vendedor se encuentre con cada uno. De esta manera hay seguridad de que, sin importar el punto de venta o sucursal que el cliente visite, podrá acceder a la misma información y con la mejor atención.   
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='') 
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Servicio al cliente") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            p La manera y el trato que se le brinden a los clientes, así como el tiempo que transcurre antes de darles solución a sus inquietudes, influye notablemente en su nivel de satisfacción y permite medir el trabajo del equipo de ventas.  
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='') 
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Imagen") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            p La percepción que tienen los clientes sobre la empresa y su decisión de compra depende en gran medida de la presentación del personal de ventas.  
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.png', alt='')                                  
    p(data-aos="fade-down") Los elementos descritos son fundamentales para conocer las ventas en una organización y lo que se debe cambiar para mejorar. Identificar fortalezas y debilidades permite tomar decisiones efectivas. También es importante medir, a través de indicadores, las ventas para tener un referente sobre el desempeño de estas. A continuación, se describen algunos de los indicadores de desempeño de ventas.
    h5(data-aos="fade-down") Indicadores de desempeño en ventas
    p(data-aos="fade-down").mb-5.text-center Los siguientes indicadores de gestión permiten medir y mejorar en el punto de venta:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-9.position-relative
        .avatar
          figure
            img.img-a.img-t(src="@/assets/curso/temas/37.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/38.svg", alt="alt").img100
            .col
              h5 Tasa de conversión
              p Consiste en medir, en un periodo de tiempo, la cantidad de clientes que se convirtieron en compradores al llevar el producto, entre la cantidad de personas que ingresaron a la tienda.<br><br> = N.º de compradores / N.º de ingresos
        .crd.crd--avatarHorizontal.crd--med1.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/39.svg", alt="alt").img100
            .col
              h5 Valor venta promedio
              p Valor total o bruto facturado en un período de tiempo, sobre el total de ventas. <br><br>= Valor facturado por ventas / Cantidad de ventas
        .crd.crd--avatarHorizontal.crd--med2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/40.svg", alt="alt").img100
            .col
              h5 Unidades promedio por venta 
              p Busca medir cuántas unidades se venden por cliente. <br><br>= Total de ventas / N.º de clientes                
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/41.svg", alt="alt").img100
            .col
              h5 Satisfacción del cliente
              p Es fundamental, permite acceder a una retroalimentación y saber qué se puede mejorar. Normalmente, se utiliza un buzón de sugerencias o encuestas a los clientes, que luego son tabuladas y los resultados sirven como base para implementar planes de acción (Aguirre, 2022, p. 1).
    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Técnicas de venta

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='')    
      .col-lg-7
        p(data-aos="fade-down") Muchas de las compras son impulsivas, por ello, las estrategias de #[i marketing] o técnicas de venta, son indispensables para conseguir aumentar el nivel de ventas e incentivar la compra en los consumidores, aun cuando no necesiten realmente el producto. Recordemos que “un loco por las ventas sabe que lo bueno se dice tres veces” (De Salterain, 2020, p. 28).

    p(data-aos="fade-down").mb-5.text-center Revisemos algunas de las técnicas de venta más efectivas.

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/43.svg', alt='')

      div(x="9.5%" y="30%" tooltip="Ver mas" numero="+")
        h4.mb-4 Precios inteligentes 
        p Al fijar el precio de un producto, se puede recurrir a precios que terminen en 99, como $7999, por ejemplo, que solo tiene un peso de diferencia con $8000. Esa estrategia hace visualmente más atractivo el precio para el comprador, que lo percibe como un producto más económico, lo que crea el primer enganche. 
      div(x="32%" y="5%" tooltip="Ver mas" numero="+")
        h4.mb-4 El equipo de ventas
        p En realidad, todos no tienen las mejores habilidades para las ventas; sin embargo, hay vendedores capaces de crear necesidades, de producir el impulso de compra en los clientes hacia productos que no tenían contemplados. No se debe engañar al comprador, salvo que mediante diferentes estrategias se creará la sensación de necesidad en el cliente, por esto se debe procurar tener dentro del equipo de vendedores personas que no teman interactuar con el público, entusiastas y persuasivas.         
      div(x="64%" y="5%" tooltip="Ver mas" numero="+")
        h4.mb-4 Estimulación sensorial 
        p Estimular al cliente suele ser muy efectivo, ya sea a través de sonidos, música, ambiente o aromas. Todo esto, acompañado de una buena disposición visual en el punto de venta, así como de degustaciones o espectáculos en vivo, ayudan a llegar a la mayor cantidad de sentidos posible (oído, olfato, gusto, tacto y vista), consiguiendo un cliente relajado que disfrute la estadía en el punto de venta y toda la experiencia de compra.  
      div(x="87%" y="32%" tooltip="Ver mas" numero="+")
        h4.mb-4 Anuncios 
        p Sin duda, siempre es una muy buena opción recurrir a anuncios o comerciales para aumentar las ventas, tanto en prensa, radio y televisión como a través de los canales digitales, por ejemplo, en las redes sociales, que cobran cada vez más importancia. Apoyarse en personajes conocidos o famosos es una muy buena opción que permite llegar a un mayor número de personas. Cabe resaltar que este tipo de anuncios están determinados por el presupuesto, pues no puede realizar la misma inversión publicitaria una multinacional que una pequeña empresa.  
      div(x="86.5%" y="70%" tooltip="Ver mas" numero="+")
        h4.mb-4 Imagen de marca 
        p Reforzar la marca y lograr recordación en los clientes servirá al lanzar un nuevo producto, porque será más fácil conseguir que el cliente compre este por impulso, ya sea por fidelidad a la marca, por completar algún tipo de colección, por acceder algún tipo de descuento en otro producto de la misma familia, etc. Por eso es esencial fortalecer la marca desde su creación, ya que esta será la base y marcará la pauta para todo el proceso comercial posterior. 
      div(x="63%" y="95.5%" tooltip="Ver mas" numero="+")
        h4.mb-4 Humor 
        p Es una muy buena técnica, puesto que crea un ambiente cómodo y ameno al momento de la compra, y se muestra el producto de forma diferente. Para esto se pueden utilizar espectáculos en vivo, o frases llamativas que permitan enganchar al cliente e impulsar la venta.
      div(x="33%" y="95.5%" tooltip="Ver mas" numero="+")
        h4.mb-4 Costo vs. beneficio 
        p Entre las técnicas de venta también se encuentra la oferta de productos novedosos y a buen precio. Para esto se utilizan anuncios o elementos publicitarios que destacan la novedad del producto, con lo que se logra crear la necesidad en el cliente y la compra impulsiva, todo esto acompañado de un buen precio de lanzamiento que sea llamativo y sirva de enganche.  
      div(x="10.3%" y="70%" tooltip="Ver mas" numero="+")
        h4.mb-4 La urgencia 
        p Se suele utilizar en compras por internet al crear la impresión de originalidad al usuario, o que se tiene muy pocas unidades. Todo esto facilitará las compras por impulso entre los clientes, y aumentarán los ingresos de la compañía. Como ejemplo se pueden utilizar frases como: “Solo por hoy”, “tres unidades disponibles” o “última oportunidad”.

    p(data-aos="fade-down").text-center Ahora, se presentan los tipos de clientes y sus características específicas.         
</template>

<script>
export default {
  name: 'Tema2',
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
