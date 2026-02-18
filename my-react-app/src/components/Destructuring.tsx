function Cars({color, brand, ...rest}: any){
    return (
        <h2>My {brand} {rest.model} is {color}!</h2>
    );

}

export default Cars;