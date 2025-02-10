// Analytics Enhancement Functions
function pushUserChoice(step, choice) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'user_choice',
      'step_number': step,
      'user_choice': choice
    });
  }
  
  function pushSearchFilter(filterType, value) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'search_filter',
      'filter_type': filterType,
      'filter_value': value
    });
  }
  
  function pushProductView(product) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'product_view',
      'product_name': product.name,
      'product_id': product.id,
      'product_type': product.type,
      'product_compatibility': product.compatibility,
      'product_series': product.seriesL === 'Sim' ? 'L Series' : 'Standard'
    });
  }
  
  function pushProductClick(product) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'product_click',
      'product_name': product.name,
      'product_id': product.id,
      'product_url': product.link
    });
  }
  
  let lens = [
  {
    id: '4427B003AA',
    name: 'EF 8-15mm f/4L Fisheye USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Super Grande Angular', 'Grande Angular'],
    best: ['Arquitetura', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_8-15mm_f4_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_8-15mm_f4_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_8-15mm_f4_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/4427B003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-8-15mm-f-4l-fisheye-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '4857C003AA',
    name: 'RF 14-35mm f/4 L IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Super Grande Angular', 'Padrão'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Evento', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-14-35mm-F4L-IS-USM--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-14-35mm-F4L-IS-USM--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-14-35mm-F4L-IS-USM--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/4857C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/lentes-canon/lentes-canon-todas/Lente-RF-14-35MM-F4-L-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5775C003AA',
    name: 'RF 15-30mm f/4.5-6.3 IS STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular'],
    best: ['Arquitetura', 'Esporte', 'Paisagem', 'Viagem', 'Evento', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-15-30mm-is-stm--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-15-30mm-is-stm--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-15-30mm-is-stm--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5775C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-15-30MM-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3682C003AA',
    name: 'RF 15-35mm f/2.8 L IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Padrão'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Baixa Luz', 'Evento', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-RF-15-35-f28-is-usm--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-RF-15-35-f28-is-usm--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-RF-15-35-f28-is-usm--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3682C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-15-35MM-F28-L-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5051C003AA',
    name: 'RF 16mm f/2.8 STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular'],
    best: ['Arquitetura', 'Esporte', 'Paisagem', 'Viagem', 'Baixa Luz', 'Evento', 'Vlog'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf_16mm_28_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf_16mm_28_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf_16mm_28_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5051C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-16MM-F28-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '0573C003AA',
    name: 'EF 16-35mm f/2.8L III USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Grande Angular'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Baixa Luz', 'Viagem', 'Evento', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_16-35mm_2-8_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_16-35mm_2-8_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_16-35mm_2-8_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/0573C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-16-35mm-f2-8l-iii-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '9518B003AA',
    name: 'EF 16-35mm f/4L IS USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Grande Angular'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_16-35mm_f4_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_16-35mm_f4_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_16-35mm_f4_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/9518B003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-16-35mm-f-4l-is-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '8806A003AA',
    name: 'EF 17-40mm f/4L USM ',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Grande Angular', 'Padrão'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_17-40mm_f4_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_17-40mm_f4_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_17-40mm_f4_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/8806A003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-17-40mm-f-4l-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '1242B003AA',
    name: 'EF-S 17-55mm f/2.8 IS USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Grande Angular', 'Padrão'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/EF-S-17-55mm-f28-IS-USM-01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/EF-S-17-55mm-f28-IS-USM-02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/EF-S-17-55mm-f28-IS-USM-03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/1242B003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-s17-55-f28is-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '4858C003AA',
    name: 'RF-S 18-45mm f/4.5-6.3 IS STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Padrão'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-s-18-45mm-is-stm--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-s-18-45mm-is-stm--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-s-18-45mm-is-stm--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/4858C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-S-18-45MM-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5564C003AA',
    name: 'RF-S 18-150mm f/3.5-6.3 IS STM ',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Padrão', 'Tele Objetiva'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vida Selvagem', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-s-18-150mm--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-s-18-150mm--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-s-18-150mm--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5564C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-S-18-150MM-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '2750B003AA',
    name: 'EF 24mm f/1.4L II USM ',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Grande Angular'],
    best: ['Arquitetura', 'Esporte', 'Paisagem', 'Viagem', 'Evento', 'Baixa Luz', 'Vlog'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_ef_24mm_f1-4_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_ef_24mm_f1-4_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_ef_24mm_f1-4_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/2750B003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-24mm-f-14l-ii-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '9522B003AA',
    name: 'EF-S 24mm f/2.8 STM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Grande Angular'],
    best: ['Arquitetura', 'Esporte', 'Paisagem', 'Viagem', 'Evento', 'Baixa Luz', 'Vlog'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_new_ef-s_24mm_2-8_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_new_ef-s_24mm_2-8_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_new_ef-s_24mm_2-8_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/9522B003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-s-24mm-f-28-stm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5668C003AA',
    name: 'RF 24mm f/1.8 Macro IS STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Macro'],
    best: ['Arquitetura', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Macro', 'Baixa Luz', 'Vlog'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-24mm-macro-is-stm--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-24mm-macro-is-stm--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-24mm-macro-is-stm--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5668C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-24MM-F18-MACRO-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5175B003AA',
    name: 'EF 24-70mm f/2.8L II USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Grande Angular', 'Padrão'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vida Selvagem', 'Baixa Luz', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_24-70mm_f2-8L_II_USM_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_24-70mm_f2-8L_II_USM_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_24-70mm_f2-8L_II_USM_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5175B003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-24-70mm-f-28l-ii-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3680C003AA',
    name: 'RF 24-70mm f/2.8 L IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Padrão'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vida Selvagem', 'Baixa Luz', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_RF-24-70mm-f2-8-01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_RF-24-70mm-f2-8-02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_RF-24-70mm-f2-8-03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3680C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-24-70MM-F28-L-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '4111C003AA',
    name: 'RF 24-105mm f/4-7.1 IS STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Padrão', 'Tele Objetiva'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vida Selvagem', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples_RF_24-105mm_f4-7_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples_RF_24-105mm_f4-7_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples_RF_24-105mm_f4-7_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3680C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-24-105MM-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '1380C003AA',
    name: 'EF 24-105mm f/4L IS II USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Grande Angular', 'Padrão', 'Tele Objetiva'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vida Selvagem', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/EF24-105mm-f4L-IS-II-USM-01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/EF24-105mm-f4L-IS-II-USM-02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/EF24-105mm-f4L-IS-II-USM-03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/1380C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-24-105mm-f4l-is-ii-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '2963C003AA',
    name: 'RF 24-105mm f/4 L IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Padrão', 'Tele Objetiva'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vida Selvagem', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf_24-105mm_f4_is_usm_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf_24-105mm_f4_is_usm_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf_24-105mm_f4_is_usm_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/2963C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-24-105MM-F4L-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '2965C003AA',
    name: 'RF 28-70mm f/2 L USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Padrão'],
    best: ['Arquitetura', 'Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Vida Selvagem', 'Baixa Luz'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_RF_28-70mm-f2-01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_RF_28-70mm-f2-02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_RF_28-70mm-f2-03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/2965C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-28-70MM-F2L-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '9523B003AA',
    name: 'EF 35mm f/1.4L II USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Padrão'],
    best: ['Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Baixa Luz', 'Vlog'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_35mm_1-4_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_35mm_1-4_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_35mm_1-4_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/9523B003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-35mm-f-14l-ii-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '2973C003AA',
    name: 'RF 35mm f/1.8 Macro IS STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Padrão', 'Macro'],
    best: ['Esporte', 'Retrato', 'Paisagem', 'Viagem', 'Evento', 'Baixa Luz', 'Vlog'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-35MM-Macro--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-35MM-Macro--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-35MM-Macro--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/2973C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-35MM-F18-MACRO-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '1257B003AA',
    name: 'EF 50mm f/1.2L USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Padrão'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Baixa Luz'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_50mm_f1-2_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_50mm_f1-2_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_50mm_f1-2_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/1257B003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-50mm-f1-2l-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '2959C003AA',
    name: 'RF 50mm f/1.2 L USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Padrão'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Baixa Luz'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples_rf50mm_1_2_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples_rf50mm_1_2_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples_rf50mm_1_2_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/2959C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-50MM-F1-2-L-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '4515C003AA',
    name: 'RF 50mm f/1.8 STM ',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Padrão'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Baixa Luz'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-50MM-f18_stm-01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-50MM-f18_stm-02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-50MM-f18_stm-03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/4515C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-50MM-F18-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '2515A004BA',
    name: 'EF 50mm f/1.4 USM ',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Padrão'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Baixa Luz'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_new_50mm_1-4_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_new_50mm_1-4_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_new_50mm_1-4_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/2515A004BA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/lentes-canon/todas-lentes-ef-efs/ef-50mm-f1-4-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '0570C003AA',
    name: 'EF 50mm f/1.8 STM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Padrão'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Baixa Luz'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_50mm_1-8_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_50mm_1-8_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_50mm_1-8_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/0570C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/lentes-canon/todas-lentes-ef-efs/ef-50mm-f1-8-stm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '2519A004BA',
    name: 'EF 85mm f/1.8 USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Padrão'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Baixa Luz', 'Vida Selvagem'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_85mm_1-8_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_85mm_1-8_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_85mm_1-8_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/2519A004BA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/lentes-canon/todas-lentes-ef-efs/ef-85mm-f-18-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '4234C003AA',
    name: 'RF 85mm f/2 Macro IS STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Padrão', 'Macro'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Baixa Luz', 'Vida Selvagem', 'Macro'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf85mm_f2_macro_br_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf85mm_f2_macro_br_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf85mm_f2_macro_br_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/4234C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/Lente-RF-85MM-F2-MACRO-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3447C003AA',
    name: 'RF 85mm f/1.2 L USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Padrão'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Baixa Luz', 'Vida Selvagem'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-85MM-F1-2-L-USM--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-85MM-F1-2-L-USM--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-85MM-F1-2-L-USM--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3447C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/Lente-RF-85MM-F12-L-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3044C003AA',
    name: 'EF 70-200mm f/2.8L IS III USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Padrão', 'Tele Objetiva'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Vida Selvagem', 'Baixa Luz'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_70-200mm_2-8_is_iii_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_70-200mm_2-8_is_iii_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_70-200mm_2-8_is_iii_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3044C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/lente-ef-70-200mm-f-2-8l-is-iii-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3792C003AA',
    name: 'RF 70-200mm f/2.8 L IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Padrão', 'Tele Objetiva'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Vida Selvagem', 'Baixa Luz'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-70-200-f28-is-usm--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-70-200-f28-is-usm--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-70-200-f28-is-usm--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3792C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-70-200MM-F28-L-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '4318C003AA',
    name: 'RF 70-200mm f/4 L IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Padrão', 'Tele Objetiva'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Vida Selvagem'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-70-200MM-F4-L-IS-USM--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-70-200MM-F4-L-IS-USM--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-70-200MM-F4-L-IS-USM--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/4318C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-70-200MM-F4-L-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '6473A002AA',
    name: 'EF 75-300mm f/4-5.6 III',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Padrão', 'Tele Objetiva'],
    best: ['Esporte', 'Retrato', 'Viagem', 'Evento', 'Vida Selvagem'],
    zoom: 'Sim',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_new_lente_75-300_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_new_75-300_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_new_75-300_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/6473A002AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/lentes-canon/todas-lentes-ef-efs/ef-75-300mm-f4-5-6-iii?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3554B003AA',
    name: 'EF 100mm f/2.8L Macro IS USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Tele Objetiva', 'Macro'],
    best: ['Esporte', 'Retrato', 'Evento', 'Macro', 'Vida Selvagem', 'Baixa Luz'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_100mm_Macro_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_100mm_Macro_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_100mm_Macro_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3554B003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-100mm-f-28l-macro-is-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '4514C003AA',
    name: 'RF 100mm f/2.8 L Macro IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Tele Objetiva', 'Macro'],
    best: ['Esporte', 'Retrato', 'Evento', 'Macro', 'Vida Selvagem', 'Baixa Luz'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-100MM-F2-8-Macro-USM--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-100MM-F2-8-Macro-USM--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample-lente-rf-100MM-F2-8-Macro-USM--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/4514C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/lente-rf-100mm-f28-l-macro-is-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '9524B003AA',
    name: 'EF 100-400mm f/4.5-5.6L IS II USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Tele Objetiva', 'Super Tele Objetiva'],
    best: ['Esporte', 'Retrato', 'Evento', 'Vida Selvagem'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_100-400mm_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_100-400mm_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_xlente_100-400mm_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/9524B003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/ef-100-400mm-f-4-5-5-6l-is-ii-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5050C003AA',
    name: 'RF 100-400mm f/5.6-8 IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Tele Objetiva', 'Super Tele Objetiva'],
    best: ['Esporte', 'Retrato', 'Evento', 'Vida Selvagem'],
    zoom: 'Sim',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-100-400-f56-is-usm--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-100-400-f56-is-usm--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-100-400-f56-is-usm--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5050C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-100-400MM-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '4112C003AA',
    name: 'RF 100-500mm f/4.5-7.1 L IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Tele Objetiva', 'Super Tele Objetiva'],
    best: ['Esporte', 'Retrato', 'Evento', 'Vida Selvagem'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-100-500mm-f45-l-is-usm--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-100-500mm-f45-l-is-usm--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-100-500mm-f45-l-is-usm--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/4112C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-100-500MM-L-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5053C003AA',
    name: 'RF 400mm f/2.8 L IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Super Tele Objetiva'],
    best: ['Esporte', 'Retrato', 'Evento', 'Vida Selvagem', 'Baixa Luz'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf400mm-f28-is-usm--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf400mm-f28-is-usm--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf400mm-f28-is-usm--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5053C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-400MM-L-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3986C003AA',
    name: 'RF 600mm f/11 IS STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Super Tele Objetiva'],
    best: ['Esporte', 'Vida Selvagem', 'Viagem'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf600mm_f11_br_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf600mm_f11_br_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf600mm_f11_br_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3986C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-600MM-F11-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5054C003AA',
    name: 'RF 600mm f/4 L IS USM ',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Super Tele Objetiva'],
    best: ['Esporte', 'Vida Selvagem'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-600mm-f4l-is-usm--01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-600mm-f4l-is-usm--02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/samples-rf-600mm-f4l-is-usm--03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5054C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-600MM-F4-L-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3987C003AA',
    name: 'RF 800mm f/11 IS STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Super Tele Objetiva'],
    best: ['Esporte', 'Vida Selvagem', 'Viagem'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf800mm_f11_br_01.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf800mm_f11_br_02.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/sample_rf800mm_f11_br_03.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3987C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-800MM-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5554C003AA',
    name: 'RF 5.2mm f/2.8 L Dual Fisheye 3D VR',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Super Grande Angular', 'Grande Angular'],
    best: ['Realidade Virtual (VR)'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/rf5-2mm-vr-01.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5554C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/Lente-RF-5MM-DUAL-FISHEYE-3D?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },

  {
    id: '6578C003AA',
    name: 'RF-S 3.9mm f/3.5 STM Dual Fisheye 3D VR',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Super Grande Angular', 'Grande Angular'],
    best: ['Paisagem', 'Evento', 'Vlog', 'Realidade Virtual (VR)'],
    zoom: 'Não',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6578C003AA-1.jpg','https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6578C003AA-2.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/6578C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/lentes-canon/lentes-canon-todas/lente-rfs-39mm-f35-stm-dualfisheye-3d-vr?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '6710C003AA',
    name: 'RF 35mm f/1.4 L VCM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Super Grande Angular', 'Padrão'],
    best: ['Arquitetura', 'Retrato', 'Paisagem', 'Evento', 'Vlog', 'Baixa Luz'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6710C003AA-1.jpg','https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6710C003AA-02.jpg','https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6710C003AA-3.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/6710C003AA.png',
    link: 'https://www.loja.canon.com.br/pt/canonbr/lentes-canon/lentes-canon-todas/lente-rf-35mm-f14-l-vcm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '6347C003AA',
    name: 'RF 24-105mm f/2.8 L IS USM Z',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Padrão', 'Tele Objetiva'],
    best: ['Paisagem', 'Evento', 'Retrato', 'Baixa Luz', 'Esporte', 'Viagem', 'Vida Selvagem'],
    zoom: 'Sim',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6347C003AA-1.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6347C003AA-2.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6347C003AA-3.JPG'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/6347C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/Lente-RF-24-105mm-f28-L-IS-USM-Z?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5823C003AA',
    name: 'RF 24-50mm f/4.5-6.3 IS STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular', 'Padrão'],
    best: ['Paisagem', 'Evento', 'Retrato', 'Esporte', 'Viagem', 'Vlog'],
    zoom: 'Sim',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/5823C003AA-1.JPG', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/5823C003AA-2.JPG', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/5823C003AA-3.JPG'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5823C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/lentes-canon/lentes-canon-todas/Lente-RF-24-50mm-F45-63-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '6262C003AA',
    name: 'RF-S 10-18mm f/4.5-6.3 IS STM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Grande Angular'],
    best: ['Arquitetura', 'Paisagem', 'Evento', 'Vlog', 'Esporte', 'Viagem'],
    zoom: 'Sim',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6262C003AA-2.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6262C003AA-1.JPG', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6262C003AA-3.JPG'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/6262C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/Lente-RF-S-10-18mm-f45-63-IS-STM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '6263C003AA',
    name: 'RF 200-800mm f/6.3-9 IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Tele Objetiva', 'Super Tele Objetiva'],
    best: ['Retrato', 'Paisagem', 'Evento', 'Vida Selvagem', 'Esporte'],
    zoom: 'Sim',
    seriesL: 'Não',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6263C003AA-1.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6263C003AA-2.JPG', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/6263C003AA-3.JPG'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/6263C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/Lente-RF-200-800mm-f63-9-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3450C003AA',
    name: 'RF 85mm f/1.2 L USM DS',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Padrão'],
    best: ['Baixa Luz', 'Evento', 'Retrato', 'Esporte', 'Viagem'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/nosample.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3450C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/Lente-RF-85mm-F12-L-USM-DS?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5056C003AA',
    name: 'RF 1200mm f/8 L IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Super Tele Objetiva'],
    best: ['Paisagem', 'Vida Selvagem', 'Esporte'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/5056C003AA-1.JPG', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/5056C003AA-2.JPG'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5056C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/Lente-RF-1200mm-F8-L-IS-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '5055C003AA',
    name: 'RF 800mm f/5.6 L IS USM',
    month: 'RF',
    compatibility: ['Mirrorless'],
    type: ['Super Tele Objetiva'],
    best: ['Paisagem', 'Evento', 'Vida Selvagem', 'Esporte'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/5055C003AA-1.JPG', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/5055C003AA-2.jpg', 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/5055C003AA-3.JPG'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/5055C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/lente-rf-800mm-f56-l-is-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3045C003AA',
    name: 'EF 400mm f/2.8 L IS III USM',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Super Tele Objetiva'],
    best: ['Paisagem', 'Evento', 'Vida Selvagem', 'Esporte', 'Baixa Luz'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/nosample.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3045C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/lente-ef-400mm-f-2-8-l-is-iii-usm?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
  {
    id: '3329C003AA',
    name: 'EF 600mm f/4 L IS III',
    month: 'EF',
    compatibility: ['DSLR', 'Mirrorless'],
    type: ['Super Tele Objetiva'],
    best: ['Paisagem', 'Evento', 'Vida Selvagem', 'Esporte'],
    zoom: 'Não',
    seriesL: 'Sim',
    samples: ['https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/sample/nosample.jpg'],
    productImage: 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/img/3329C003AA.png',
    link: 'https://loja.canon.com.br/pt/canonbr/Lente-EF-600mm-f4L-IS-III-USM?utm_source=referral&utm_medium=landingpage&utm_campaign=guia_lentes',
  },
];

// Track session data on script load
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'session_start',
  'timestamp': new Date().toISOString(),
  'page_type': 'lens_finder'
});

// Track time spent
let startTime = Date.now();
window.addEventListener('beforeunload', () => {
  const timeSpent = Math.round((Date.now() - startTime) / 1000);
  window.dataLayer.push({
    'event': 'session_end',
    'time_spent': timeSpent
  });
});

function toggleTooltip() {
  var tooltip = document.getElementById('tooltip');
  if (tooltip.style.visibility === 'visible') {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;
  } else {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = 1;
    // Adicionando event listener para fechar tooltip com qualquer clique
    document.addEventListener('click', closeTooltip1);
  }
}

// Função para fechar tooltip se o clique não for no elemento
function closeTooltip1(event) {
  var tooltip = document.getElementById('tooltip');
  var tooltipContainer = document.querySelector('.tooltip');
  if (!tooltipContainer.contains(event.target)) {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;
    document.removeEventListener('click', closeTooltip1);
  }
}

function toggleTooltip1() {
  var tooltip = document.getElementById('tooltip1');
  if (tooltip.style.visibility === 'visible') {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;
  } else {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = 1;
    // Adicionando event listener para fechar tooltip com qualquer clique
    document.addEventListener('click', closeTooltip);
  }
}

// Função para fechar tooltip se o clique não for no elemento
function closeTooltip(event) {
  var tooltip = document.getElementById('tooltip1');
  var tooltipContainer = document.querySelector('.tooltip1');
  if (!tooltipContainer.contains(event.target)) {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;
    document.removeEventListener('click', closeTooltip);
  }
}

const searchButton = document.querySelector('.searchButton');
const overlayForm = document.querySelector('.overlayForm');
const filterBox = document.querySelector('.formBox');
const btCloseFilter = document.querySelector('.CloseFilter');
const btOpenFilter = document.querySelector('.btSearchAgain');
const bodySelector = document.querySelector('body');

const togleFilter = () => {
  filterBox.classList.toggle('openBox');
  overlayForm.classList.toggle('hide');
  bodySelector.classList.toggle('divOverflowY');
  document.querySelector('.formBox form').scrollTop = 0;
};
searchButton.addEventListener('click', togleFilter);
overlayForm.addEventListener('click', togleFilter);
btCloseFilter.addEventListener('click', togleFilter);
btOpenFilter.addEventListener('click', togleFilter);

const lightboxModal = document.querySelector('.lightbox-modal');
const closeLightBox = document.querySelector('.close-btn');
function closeLightbox() {
  const lightboxModal = document.getElementById('lightbox-modal');
  lightboxModal.style.display = 'none';
  bodySelector.classList.toggle('divOverflowY');
}
lightboxModal.addEventListener('click', closeLightbox);
closeLightBox.addEventListener('click', closeLightbox);

let btnAbrirModalDesk = document.querySelector('.openModalDesk');
let btnAbrirModalMobile = document.querySelector('.openModalMobile');
let modalLead = document.querySelector('.modal-lead');
let modalBoxOverlay1 = document.querySelector('.overlay-modal1');
let modalBoxOverlay2 = document.querySelector('.overlay-modal2');
let modalThankYouBox = document.querySelector('.modal-thankYou');

const openModal = () => {
  bodySelector.classList.toggle('divOverflowY');
  modalLead.classList.remove('hide');
  modalBoxOverlay1.classList.remove('hide');
  modalBoxOverlay2.classList.remove('hide');

  let inputTipoLentes = document.querySelector('#inputTipoLentes');
  let inputEstiloFotografia = document.querySelector('#inputEstiloFotografia');
  let inputTecnologia = document.querySelector('#inputTecnologia');
  inputTipoLentes.value = inputTypeLenses;
  inputEstiloFotografia.value = inputStyle.toString();
  inputTecnologia.value = inputCompatibility;
};
btnAbrirModalDesk.addEventListener('click', openModal);
btnAbrirModalMobile.addEventListener('click', openModal);

const closeModal = () => {
  bodySelector.classList.toggle('divOverflowY');
  modalLead.classList.add('hide');
  modalBoxOverlay1.classList.add('hide');
  modalBoxOverlay2.classList.add('hide');
};
modalBoxOverlay1.addEventListener('click', closeModal);
modalBoxOverlay2.addEventListener('click', closeModal);

let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/style-steps-v3.2.css';
document.body.appendChild(link);

let linkCssGlossary = document.createElement('link');
linkCssGlossary.rel = 'stylesheet';
linkCssGlossary.href = 'https://extranet.canon.com.br/ecommerce/_files/lens-guide/style-glossary.css';
document.body.appendChild(linkCssGlossary);
