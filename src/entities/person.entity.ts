import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Event } from './event.entity';
import { EventAttendee } from './event-attendee.entity';

@Entity({ name: 'persons' })
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text', unique: true })
  nationalId!: string; // CI

  @Column({ type: 'text', unique: true, nullable: true })
  email!: string | null;

  @Column({ type: 'text', unique: true, nullable: true })
  phone!: string | null;

  @Column({ type: 'text', nullable: true })
  password!: string | null; // set if the person can access the app

  @Column({ type: 'text' })
  facePhoto!: string; // URL/base64

  @Column({ type: 'boolean', default: false })
  canAccess!: boolean;

  @Column({ type: 'boolean', default: false })
  verified!: boolean;

  @Column({ type: 'boolean', default: false })
  isFrozen!: boolean;

  @Column({ type: 'text', nullable: true })
  freezeReason!: string | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @OneToMany(() => Event, (e) => e.organizer)
  organizedEvents!: Event[];

  @OneToMany(() => EventAttendee, (ea) => ea.person)
  eventLinks!: EventAttendee[];
}
