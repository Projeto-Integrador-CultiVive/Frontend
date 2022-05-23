import Categoria from "./Categoria";

interface Produto{
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    validade: string;
    categoria?: Categoria | null
}

export default Produto;