import { Comentario } from './comentario';
import { Comunidade } from './comunidade';
import { Post } from './post';

export class Usuario{
    constructor(
        public idUsuario: number,
        public nome: string,
        public telefone: string,
        public email: string,
        public senha: string,
        public comentario: Comentario[],
        public comunidade: Comunidade[],
        public post: Post[]
    ){ }
    
}