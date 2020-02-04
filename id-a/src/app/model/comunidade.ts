import { Usuario } from './usuario';
import { Post } from './post';
import { Categoria } from './categoria';

export class Comunidade{
    constructor(
        public idComunidade: number,
        public nome: string,
        public usuario: Usuario,
        public post: Post[],
        public categoria: Categoria

    ){}
}