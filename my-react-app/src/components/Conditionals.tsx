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
export default Goal;
