import Starfield from 'react-starfield';

function Starfall() {
  return (
    <div style={{width: "100vw"}}>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.5}
      />
    </div>
  );
}

export default Starfall;
