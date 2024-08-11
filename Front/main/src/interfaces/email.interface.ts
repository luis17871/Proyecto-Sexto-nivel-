// usuario.interface.ts
export interface Email {
    to: string;
    subject: string;
    content: string;
    }

    export interface emailToken{
        token: string;
    }

    export interface passwordToken{
        token: string;
        password: string;
    }