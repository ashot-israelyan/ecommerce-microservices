import { Publisher, Subjects, TicketUpdatedEvent } from '@tickets-ash/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
