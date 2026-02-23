function MyCars() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
    <h2 style={{color: 'Red'}}>My cars </h2>
    <ul style={{color: 'green'}}>
        {cars.map( elem => <li>{elem}</li>)}
    </ul>
    </> 
  )

}
export default MyCars;