import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventState } from '../entities/event-state.entity';
import { AttendanceState } from '../entities/attendance-state.entity';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class SeedService implements OnModuleInit {
  private readonly eventStates = ['pending', 'active', 'finished'];
  private readonly attendanceStates = ['present', 'absent'];

  constructor(
    @InjectRepository(EventState) private readonly esRepo: Repository<EventState>,
    @InjectRepository(AttendanceState) private readonly asRepo: Repository<AttendanceState>,
  ) {}

  async seed() {
    await this.seedEventStates();
    await this.seedAttendanceStates();
  }

  private async seedEventStates() {
    for (const state of this.eventStates) {
      await this.esRepo.upsert({ description: state }, { conflictPaths: ['description'] });
    }
  }

  private async seedAttendanceStates() {
    for (const state of this.attendanceStates) {
      await this.asRepo.upsert({ description: state }, { conflictPaths: ['description'] });
    }
  }

  async onModuleInit() {
    await this.seed();
  }
}