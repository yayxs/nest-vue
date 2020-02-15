import { ApiProperty } from "@nestjs/swagger";

// 注册DTO
export class RegisterDto {
    @ApiProperty({ description: 'test007' })
    username: string;
    @ApiProperty({ description: 'test007' })
    password: string;
  }
  