/* eslint-disable prettier/prettier */
import { IsBoolean, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

/* eslint-disable prettier/prettier */

export class CreateAdminDto{
    @IsEmail()
    email: string;

    @IsString()
    @Length(7, 20)
    @IsNotEmpty()
    password: string;

    @IsString()
    permission_type: string;

    @IsBoolean()
    is_active: boolean;
}