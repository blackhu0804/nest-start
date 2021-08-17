import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import * as url from 'url';
@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    console.log('守卫！');
    const request = context.switchToHttp().getRequest();
    const token =
      context.switchToRpc().getData().headers.token ||
      context.switchToHttp().getRequest().body.token ||
      this.getUrlQuery(request.url, 'token');
    Logger.log(`当前的token：${token}`, 'AuthGuard');
    if (token) {
      try {
        const user = await this.verifyToken(token, process.env.SECRET);
        request.user = user;
        return true;
      } catch (error) {
        Logger.error(error, 'auth');
        throw new HttpException('你没有权限访问，请联系管理员', HttpStatus.UNAUTHORIZED);
      }
    } else {
      throw new HttpException('未登录', HttpStatus.UNAUTHORIZED);
    }
  }

  private verifyToken(token: string, secret: string): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (error, payload) => {
        if (error) {
          console.log('-----------error start--------------');
          console.log(error);
          console.log('-----------error end--------------');
          reject(error);
        } else {
          resolve(payload);
        }
      });
    });
  }

  private getUrlQuery(urlPath: string, key?: string): string | { [propsName: string]: any } {
    const query = url.parse(urlPath, true).query
    if (key) {
      return query[key]
    } else {
      return query;
    }
  };
}
