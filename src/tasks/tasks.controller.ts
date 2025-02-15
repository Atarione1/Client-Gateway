import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('tasks')
export class TasksController {
  constructor(
    @Inject('TASK_SERVICE') private readonly tasksClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksClient.send('createTask', createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksClient.send('findAllTasks', {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksClient.send('findOneTask', +id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksClient.send('updateTask', { ...updateTaskDto, id: +id });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksClient.send('removeTask', +id);
  }
}
