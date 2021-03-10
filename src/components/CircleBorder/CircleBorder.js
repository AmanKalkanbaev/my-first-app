
import classes from "./CircleBorder.module.css";

function CircleBorder({ children }){
    return <button className={classes.CircleBorder}> {children} </button>
}
export default CircleBorder;