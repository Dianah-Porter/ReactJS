function Props(props: any){
     return (
    <>
      {/* <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2> */}
      <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]} and the model {props.info.brand}.</p>
    </>
  );
}
export default Props;