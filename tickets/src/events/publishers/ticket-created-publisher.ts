import { Publisher, Subjects, TicketCreatedEvent } from '@tickets-ash/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
