const fruits: string[] = [ 'Orange', 'Apple', 'Mango']
function MyList(){
    return (
        <ul className="fruit">
            {fruits.map((fruit,i) => <li className="fruit" key={i}>{fruit}</li>)}
        </ul>
    )
}
export default MyList;