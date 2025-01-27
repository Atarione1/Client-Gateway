enum TaskStatus {
  POR_HACER = 'POR_HACER',
  EN_PROCESO = 'EN_PROCESO',
  COMPLETADA = 'COMPLETADA',
}
export class CreateTaskDto {
  name: string;
  description: string;
  finishedAt: Date;
  status: TaskStatus;
  userId: number;
}
