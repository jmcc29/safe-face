import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Person,
  Event,
  EventState,
  AttendanceState,
  EventAttendee,
} from 'src/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Person,
      Event,
      EventState,
      AttendanceState,
      EventAttendee,
    ]),
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
