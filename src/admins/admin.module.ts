/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminsService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/typeOrm/entities/admin.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Admin])],
    controllers: [AdminController],
    providers: [AdminsService],
    exports: [AdminsService],
})
export class AdminModule{

}