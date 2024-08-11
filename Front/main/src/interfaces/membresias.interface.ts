// usuario.interface.ts
export interface Membresia {
    id?: string;
    nombre: string;
    descripcion: string;
    precio: number;
    iva: number;
    total: number;
    duracion: number;
    tipoDuracion: string;
    fechaCreacion?: Date;
    estado?: string;
    observaciones?: string;
    }
  
    export interface MembresiaResponse {
      content:  Membresia[]
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
    export interface MembresiaResponseOne {
      content:  Membresia
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
    