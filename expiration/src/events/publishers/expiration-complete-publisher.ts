import { Subjects, Publisher, ExpirationCompleteEvent } from '@tickets-ash/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
