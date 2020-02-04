import { Usuario } from './usuario';
import { Post } from './post';

export class Comentario{
    constructor(
        public idComentario: number,
        public texto: string,
        public usuario: Usuario,
        public post: Post
    ){}
}