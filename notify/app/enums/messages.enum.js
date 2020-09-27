const WhatsApp = {
  DELIVERED: 'Hola %name, que alegria! te hemos entregado tu orden N° %order con éxito. Gracias por preferir FastSeller App.',
  RETURN: 'Hola %name, tu orden N° %order será devuelta al proveedor. Puedes contactarte con nuestro call center para mas información.',
  CANCELLED: 'Hola %name, sentimos los inconvenientes que te hallamos ocasionado. Para tu tranquilidad, continuaremos con el proceso de cancelación de tu orden. El equipo FastSeller App.',
  ON_ROUTE: 'Hola %name, tu orden N° %order esta en ruta, hoy FastSeller App entregará tu pedido.',
  ON_RETRY: 'Hola %name, hoy intentamos entregar tu pedido pero no fue posible. Pronto volveremos a intentarlo. El equipo FastSeller'
};

const Mail = {
  DELIVERED: 'TBD',
  RETURN: 'TBD',
  CANCELLED: 'TBD',
  ON_ROUTE: 'TBD',
  ON_RETRY: 'TBD'
};

module.exports = {
  WhatsApp: Object.freeze(WhatsApp),
  Email: Object.freeze(Mail),
};
