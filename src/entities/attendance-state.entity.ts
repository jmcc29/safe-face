import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EventAttendee } from './event-attendee.entity';

@Entity({ name: 'attendance_states' })
export class AttendanceState {
  @PrimaryGeneratedColumn() // integer
  id!: number;

  @Column({ type: 'text', unique: true })
  description!: string;

  @OneToMany(() => EventAttendee, (ea) => ea.attendanceState)
  links!: EventAttendee[];
}
