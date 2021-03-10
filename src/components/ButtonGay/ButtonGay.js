
import classes from "./ButtonGay.module.css";

function ButtonGay({ children }){
    return <button className={classes.ButtonGay}> {children} </button>
}
export default ButtonGay;