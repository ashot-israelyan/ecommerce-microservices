import { Subjects, Publisher, PaymentCreatedEvent } from '@tickets-ash/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
