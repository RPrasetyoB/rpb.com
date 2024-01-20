interface RatingValue {
    value: number
}

const Rating: React.FC<RatingValue> = ({ value, ...props }) => {
  const dots = Array.from({ length: 6 }, (_, index) => (
    <div
      key={index}
      style={{
        width: '14px',
        height: '14px',
        backgroundColor: index < Math.floor(value) ? '#005BB8' : 'white',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '5px',
      }}
    />
  ));
  
  return <div style={{paddingTop:"4px"}} {...props}>{dots}</div>;
};

export default Rating;
