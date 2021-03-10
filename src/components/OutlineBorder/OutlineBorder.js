
import classes from "./OutlineBorder.module.css";

function OutlineBorder({ children }){
    return <button className={classes.OutlineBorder}> {children} </button>
}
export default OutlineBorder;