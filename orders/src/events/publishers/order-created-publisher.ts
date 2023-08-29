import { OrderCreatedEvent, Publisher, Subjects } from '@tickets-ash/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
