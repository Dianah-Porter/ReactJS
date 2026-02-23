function MyCarss(){
    const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'},
    {id: 1004, brand: 'Mercedes'}
  ];
  return (
    <>
    <h1>My Cars ID:</h1>
      <ul>
        {cars.map((car) => <li key={car.id}>I am a { car.brand }</li>)}
      </ul>
    </>
  )
}
export default MyCarss;