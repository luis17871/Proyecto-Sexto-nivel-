// usuario.interface.ts
export interface Socio {
    id?: string;
    firstNames: string;
    lastNames: string;
    email: string;
    estado?: string;
    password?: string;
    }
  
    export interface SocioResponse {
      content:  Socio[]
      pageable: {}
       
      last: boolean
      totalElements: number,
      totalPages: number, 
      size: number,
      number: number,
      sort: {},
      first: boolean,
      numberOfElements: number,
      empty: boolean
    }
    export interface SocioResponseOne {
      content:  Socio
      pageable: {}
       
      last: boolean
      totalElements: number,
      totalPages: number,
      size: number,
      number: number,
      sort: {},
      first: boolean,
      numberOfElements: number,
      empty: boolean
    }
    