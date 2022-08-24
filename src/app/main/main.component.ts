import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { HttpHeaders } from '@angular/common/http';
// import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private base64Key = 'aGlsaXRsZGFwc2NydGtleQ==';
  // key = CryptoJS.enc.Base64.parse(this.base64Key);

  constructor(private http: HttpClient, private router: Router) {}

  // decryptResponse(response:any){

  //   let decodeBase64: CryptoJS.lib.WordArray = CryptoJS.enc.Base64.parse(response);

  //   let decryptedData = CryptoJS.AES.decrypt(
  //     { ciphertext: decodeBase64 },
  //     this.key,
  //     {
  //       mode: CryptoJS.mode.ECB,
  //       padding: CryptoJS.pad.Pkcs7
  //     }
  //   );

  //   const decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
  //   const str = (decryptedText.substring(decryptedText.lastIndexOf("::")+2,decryptedText.length));
  //   const saltLength = parseInt(str)
  //   const saltTrailingCount = 2 + str.length;
  //   const totalSaltLength = saltLength + saltTrailingCount;
  //   const decrypted = decryptedText.substring(0,decryptedText.length - totalSaltLength);
  //   const value= JSON.parse(decrypted);
  //   return value;

  // }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      Accept: 'application/json, text/plain',
      Environment: 'qa',
    });
    const token =
      '/vqS4xDdxze3CRsItCG57J+J5/qwcKtsjK+oQJF1YR/U4xTYcWYsk/hHQCloeKuA8SiUoFRTkjLeF/KBUux7WNmIHbx8ZPCM0S/gYasQzwdhqd2CShE6ccNwayKqqwI0Aniw8CVj33MmpL3ywhNVfw==';
    this.http
      .post(
        'http://172.168.1.82:8080/hilitloginservice/authenticate/v1',
        token,
        { headers }
      )
      .subscribe((res: any) => {
        console.log('response', res);
        console.log(res.token);
        // let userObj = this.decryptResponse(res);
        // AuthInterceptor.accessToken   = userObj.accessToken;
      });
  }
  onClickNavigate() {
    this.router.navigate(['/add-follow-up']);
  }
}
