function MissedGoal(){
    return <h1>MISSED!</h1>
}
function MadeGoal(){
    return <h1>Goal!</h1>
}
function Goal(props: any){
    const isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal />
    }
    else{
        return <MissedGoal />
    }
}
//Logical and &&
/* function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}!</h1>}
    </>
  );
}  */
export default Goal;
