import { ApiProperty } from "@nestjs/swagger";

// 登录DTO
export class LoginDto {
    @ApiProperty({ description: 'test007' })
    username: string;
    @ApiProperty({ description: 'test007' })
    password: string;
  }
  