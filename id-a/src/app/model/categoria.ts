import { Comunidade } from './comunidade';

export class Categoria{
    constructor(
        public idCategoria: number,
        public nome: string,
        public descricao: string,
        public comunidade: Comunidade[]

    ){}
}