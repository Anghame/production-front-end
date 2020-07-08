import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import {TokenStorageService} from 'src/app/_services/token-storage.service'

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService{ //  implements HttpInterceptor

  constructor(private injector: Injector, private tokenStorage: TokenStorageService) { }
  /*
  intercept(req, next){
    let tokenStorageService:this.injector(TokenStorageService)
    let tokenizedReq= req.clone({
      setHeaders : {
        Authorization: `Bearer ${tokenStorageService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  } */

}