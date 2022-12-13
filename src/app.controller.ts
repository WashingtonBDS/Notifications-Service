import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationsBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notifications.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationsBody) {
    const { recipientId, context, category } = body;
    await this.prisma.notifications.create({
      data: {
        id: randomUUID(),
        context,
        category,
        recipientId,
      },
    });
  }
}
