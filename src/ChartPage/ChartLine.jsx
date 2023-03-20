const ChartLine = ({ points, color }) => {
  return (
    <polyline fill="none" stroke={color} strokeWidth="0.75" points={points} />
  );
};

export default ChartLine;
