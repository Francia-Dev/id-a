import { Usuario } from './usuario';
import { Comentario } from './comentario';
import { Comunidade } from './comunidade';

export class Post{
    constructor(
        public idPostagem: number,
        public titulo: string,
        public texto: string,
        public linkimg: string,
        public dataInclusao: string,
        public usuario: Usuario,
        public comentario: Comentario[],
        public comunidade: Comunidade

    ){ }
}