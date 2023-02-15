export interface IPokemon {
  id?: number;
  name: string;
}

export interface IAllPokemons {
  pokeAbilities: Array<{ability: { name: string; url: string; }}>;
  // abilities: Array<{ability: { name: string; url: string; }}>;
  height: number;
  id?: number;
  key?: number;
  name: string;
  stats: Array<{ stat: { name: string; url: string } }>;
  type: Array<{ name: string }>;
  url: string;
  weight: number;
}

export interface IPokemonName {
  id?: number;
  name: string;
}

export interface IType {
  id?: number;
  type: {
    name: string
  }
}

export interface IAbilitie {
  id?: number;
  ability: {
    name: string;
    url: string;
  }
}

export interface ITarget extends HTMLButtonElement{
  target: {
    value: string;
  }
}

export interface IStat {
  id?: number;
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}
