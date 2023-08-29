import { OrderCancelledEvent, Publisher, Subjects } from '@tickets-ash/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
