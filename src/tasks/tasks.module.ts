import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [TasksController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: 'TASK_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
})
export class TasksModule {}
