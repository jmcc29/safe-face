import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Event } from './event.entity';
import { Person } from './person.entity';
import { AttendanceState } from './attendance-state.entity';

@Entity({ name: 'event_attendees' })
export class EventAttendee {
  // Composite PK: (event_id, person_id)
  @PrimaryColumn('uuid', { name: 'event_id' })
  eventId!: string;

  @PrimaryColumn('uuid', { name: 'person_id' })
  personId!: string;

  @ManyToOne(() => Event, (e) => e.attendees, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'event_id' })
  event!: Event;

  @ManyToOne(() => Person, (p) => p.eventLinks, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'person_id' })
  person!: Person;

  @ManyToOne(() => AttendanceState, (s) => s.links, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'attendance_state_id' })
  attendanceState!: AttendanceState;

  @Column({ type: 'time', name: 'attendance_time', nullable: true })
  attendanceTime!: string | null;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt!: Date;
}
