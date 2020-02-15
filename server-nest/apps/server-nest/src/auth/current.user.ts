import { createParamDecorator } from '@nestjs/common';

// z自定义装饰器
export const CurrentUser = createParamDecorator((data, req) => {
  return req.user;
});
