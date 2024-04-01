const Map = () => {
  const data = ["title1", "title2", "title3"];

  let a= false
  return (
    <div>
      <div>Map</div>
      <div>
        {data.map((item, index) => {
          return <div key={index} >title is {item}</div>;
        })}
      </div>


      {/* {
        a===true ? "hi true" : "hi false"
      } */}
    </div>
  );
};

export default Map;
