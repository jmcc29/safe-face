import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Person } from './person.entity';
import { EventState } from './event-state.entity';
import { EventAttendee } from './event-attendee.entity';

@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description!: string | null;

  @Column({ type: 'date' })
  date!: string;

  @Column({ type: 'time' })
  time!: string;

  @Column({ type: 'text' })
  location!: string;

  @ManyToOne(() => Person, (p) => p.organizedEvents, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'organizer_id' })
  organizer!: Person;

  @ManyToOne(() => EventState, (s) => s.events, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'state_id' })
  state!: EventState;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @OneToMany(() => EventAttendee, (ea) => ea.event)
  attendees!: EventAttendee[];
}
