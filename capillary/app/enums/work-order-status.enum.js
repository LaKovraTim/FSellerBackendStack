const WorkOrderStatus = {
  PENDING: 'PENDIENTE',
  ACTIVE: 'ACTIVA',
  DELIVERED: 'ENTREGADA',
  RETURN: 'DEVOLUCION',
  CANCELLED: 'CANCELADA',
  ON_ROUTE: 'EN_TRANSITO'
};

const NotifyTypes = {
  ON_RETRY: 'ON_RETRY'
};

NotifyTypes[`${WorkOrderStatus.DELIVERED}`] = 'DELIVERED';
NotifyTypes[`${WorkOrderStatus.RETURN}`] = 'RETURN';
NotifyTypes[`${WorkOrderStatus.CANCELLED}`] = 'CANCELLED';
NotifyTypes[`${WorkOrderStatus.ON_ROUTE}`] = 'ON_ROUTE';

module.exports = {
  WorkOrderStatus: Object.freeze(WorkOrderStatus),
  NotifyTypes: Object.freeze(NotifyTypes)
};
