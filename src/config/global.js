export default {
  global: {
    componenteFormativo: 'Comercialización de productos alimenticios',
    descripcionCurso:
      'La comercialización de productos es la base del ingreso de algunas compañías. Tanto las estrategias como las técnicas usadas para potenciar las ventas son fundamentales, porque pueden redundar en mayores ingresos. Los planes de mercadeo impulsan los productos y permiten su reconocimiento por parte de los consumidores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Necesidades y deseos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es necesidad?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '¿Qué es deseo?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'La demanda',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fases de la venta',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Indicadores de ventas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnicas de venta',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Según su biotipo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Según su temperamento',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ventas',
      referencia:
        'Henao, D. (2019). <i>Plan estratégico de marketing en la empresa de alimentos Torcoroma Ltda</i>. Universidad Pontificia Bolivariana.',
      tipo: 'Tesis de pregrado',
      link:
        'https://repository.upb.edu.co/bitstream/handle/20.500.11912/8508/39221.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Ventas',
      referencia:
        'Acosta, M., Salas, L., Jiménez, M. y Guerra, A. (2018). <i>La administración de ventas</i>. 3Ciencias.',
      tipo: 'Libro',
      link:
        'https://www.3ciencias.com/wp-content/uploads/2018/02/La-administracion-de-ventas.pdf',
    },
    {
      tema: 'Ventas',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (19 de octubre de 2021). <i>Técnicas de ventas</i>. Ecosistema de Recursos Educativos Digitales SENA.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zTjvzIucxAk',
    },
    {
      tema: 'Ventas',
      referencia:
        'Ramos, S. (2017). <i>Técnicas de ventas</i>. Fundación Universitaria del Área Andina.',
      tipo: 'Libro',
      link: 'https://core.ac.uk/download/pdf/326425109.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Asténico',
      significado:
        'Persona de bajo ánimo, falta de energía o vitalidad, que denota cansancio.',
    },
    {
      termino: 'Comprador',
      significado:
        'Encargado de adquirir un bien o servicio para él o para un tercero.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Es la persona que utiliza el bien o servicio adquirido por él o un tercero para satisfacer una necesidad.',
    },
    {
      termino: 'Demanda',
      significado:
        'Hace referencia a toda la gama de productos (bienes y servicios) que pueden ser adquiridos por un comprador específico o por el conjunto total de consumidores en un espacio o lugar.',
    },
    {
      termino: 'Deseo',
      significado:
        'Se refiere a aquello que se encuentra más allá de la necesidad, siendo más específico en cuanto al producto que se requiere y es la manera en que el individuo busca cubrir la necesidad.',
    },
    {
      termino: 'Necesidad',
      significado:
        'Es la sensación de una carencia y esta a su vez está unida al deseo por hacerla desaparecer.',
    },
    {
      termino: 'Objeción',
      significado:
        'Razón que se opone a los argumentos presentados al momento de la venta de un producto.',
    },
    {
      termino: 'Pícnico',
      significado:
        'Persona que se caracteriza por tener un cuerpo con formas redondeadas o abultadas.',
    },
    {
      termino: 'Refutar',
      significado:
        'Rechazar la opinión o aporte de una persona mediante razones o argumentos.',
    },
    {
      termino: 'Venta',
      significado:
        'Relación entre dos personas en la cual una de ellas, el vendedor, informa, motiva y convence a la segunda, el cliente, de adquirir un producto o servicio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguirre, M. (14 de mayo de 2022).<i> Cómo medir la productividad de las ventas</i>. Ámbito Financiero',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://www.proquest.com/newspapers/cómo-medir-la-productividad-de-las-ventas/docview/2664716829/se-2',
    },
    {
      referencia:
        'De Salterain, F. (2020). <i>Loco por las ventas</i>, Ediciones Granica.',
    },
    {
      referencia:
        'BAE Negocios (17 de marzo de 2022). <i>El vendedor evoluciona y las capacitaciones de ventas también</i>. BAE Negocios',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://www.proquest.com/newspapers/el-vendedor-evoluciona-y-las-capacitaciones-de/docview/2640506457/se-2',
    },
    {
      referencia:
        'Escudero, M. (2017). <i>Comunicación y atención al cliente</i> (2.ª ed.). Paraninfo.',
      link:
        'https://www.alphaeditorialcloud.com/reader/comunicacion-y-atencion-al-cliente?location=204.',
    },
    {
      referencia:
        'Muñiz, R. (2014). <i>Marketing en el siglo XXI </i>(5.ª ed.). Centro de Estudios Financieros.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
