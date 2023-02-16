export interface IPokemon {
  id?: number;
  name: string;
}

export interface IAllPokemons {
  pokeAbilities: Array<{ ability: { name: string; url: string; } }>;
  height: number;
  id?: number | string;
  key?: number | string;
  name: string;
  stats: Array<{ stat: { name: string; url: string } }>;
  type: Array<{ name: string }>;
  url: string;
  weight: number;
}

export interface IAllPokemonsOnDetails {
  pokemon: {
    pokeAbilities: Array<{ ability: { name: string; url: string; } }>;
    height: number;
    id?: number | string;
    key?: number;
    name: string;
    stats: Array<{ stat: { name: string, value: number } }>;
    type: Array<{ name: string }>;
    url: string;
    weight: number;
  }
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

export interface ITarget extends HTMLButtonElement {
  target: {
    value: string;
  }
}

export interface IStat {
  name: string,
  value: number
}

export interface IStatOnHome {
  id?: number;
  base_stat: number;
  effort: number;
  stat: IStat;
}
export interface IStatOnBarGroup {
  name: string,
  value: number,
  barHeight: number,
}

export interface IStatOnBarChart {
  stats: { stat: { name: string, value: number } }[];
}

export interface IStatOnBarChart2 {
  name: string;
  value: number;
}


export interface IBarChartProps {
  stats: { stat: IStatOnBarChart2 }[];
  width: number;
  height: number;
  margin: { top: number; right: number; left: number; bottom: number };
}

export interface IBarChartStat {
  stat: IStat;
}

export interface IBarChart {
  data: IBarChartStat[];
}