import { ArgumentMetadata, Injectable, Logger, PipeTransform, HttpException, HttpStatus } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    // 将对象转换为 Class 来验证
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    Logger.log(errors, 'validation.pipe error');
    if (errors.length > 0) {
      //获取第一个错误并且直接返回
      const msg = Object.values(errors[0].constraints)[0];
      // 统一抛出异常
      throw new HttpException(
        { message: msg },
        HttpStatus.OK,
      );
    }
    return value;
  }

  private toValidate(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
