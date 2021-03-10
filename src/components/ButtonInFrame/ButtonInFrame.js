
import classes from "./ButtonInFrame.module.css";

function ButtonInFrame({ children }){
    return <button className={classes.ButtonInFrame}> {children} </button>
}
export default ButtonInFrame;