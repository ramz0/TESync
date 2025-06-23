import { Bar } from 'react-chartjs-2';

const BarChart = ({datos, opciones}) => {

  return (
    <div style={{ height: '40%', width: '100%' }}>
      <Bar data={datos} options={opciones} />
    </div>
  );
};

export default BarChart;