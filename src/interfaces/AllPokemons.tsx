export interface IPokemon {
  id?: number;
  name: string;
}

export interface IAllPokemons {
  id?: number;
  url: string;
  name: string
  type: Array<{ name: string }>;
}

export interface IType {
  id?: number;
  type: {
    name: string
  }
}
