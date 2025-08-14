import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Event } from './event.entity';

@Entity({ name: 'event_states' })
export class EventState {
  @PrimaryGeneratedColumn() // integer
  id!: number;

  @Column({ type: 'text', unique: true })
  description!: string;

  @OneToMany(() => Event, (e) => e.state)
  events!: Event[];
}
