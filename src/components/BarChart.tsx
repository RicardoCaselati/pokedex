import { IBarChartProps } from "../interfaces/AllPokemons";
import { BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

const BarChart: React.FC<IBarChartProps> = ({ stats, width, height, margin }) => {
  let barHeight = 30;

  const data = stats.map((stat: any) => ({ stat }));

  return (
      <RechartsBarChart width={width} height={barHeight * data.length} data={data} margin={margin}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stat.name" type="category" />
        <YAxis dataKey="stat.value" type="number" />
        <Tooltip />
        <Legend />
        <Bar dataKey="stat.value" fill="#8884d8" />
      </RechartsBarChart>
  );
};

export default BarChart;
