import { IStatOnBarGroup } from "../interfaces/AllPokemons";

function BarGroup(props: IStatOnBarGroup) {
  let barPadding = 2
  let barColor = '#348AA7';
  let widthScale = (value: number) => value * 10;

  let width = widthScale(props.value)
  let yMid = props.barHeight * 0.5;

  return <g className="bar-group">
    <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">{props.name}</text>
    <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColor} />
    <text className="value-label" x={width - 8} y={yMid} alignmentBaseline="middle">{props.value}</text>
  </g>
}

export default BarGroup;
