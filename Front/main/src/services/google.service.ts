// import { Injectable } from "@angular/core";
// import { AuthConfig, OAuthService } from "angular-oauth2-oidc";

// @Injectable({
//     providedIn: 'root'

// })
// export class AuthGoogleService{
//     constructor(
//         private oAuthService: OAuthService
//     ){
//             this.initLogin();

//     }
//     initLogin(){
//         const config: AuthConfig = {
//             issuer: 'https://accounts.google.com',
//             strictDiscoveryDocumentValidation: false,
//             clientId: '229541614584-6ntfcmf4tcejatha80cj2ns78265ffo7.apps.googleusercontent.com',
//             redirectUri: window.location.origin +  '/tables/http-table',
//             scope: 'openid profile email',
//         }
//         this.oAuthService.configure(config);
//         this.oAuthService.setupAutomaticSilentRefresh();
//         this.oAuthService.loadDiscoveryDocumentAndTryLogin();
//     }
//     login() {
//         this.oAuthService.initLoginFlow();
//         document.cookie = `token=${this.getProfile()}`;

//     }
//     logout(){
//         this.oAuthService.logOut();
//     }
//     getProfile(){
//         // return this.oAuthService.getIdentityClaims();
//         return this.oAuthService.getIdToken();
//     }
   


// }