
import classes from "./StrangeButton.module.css";

function StrangeButton({ children }){
    return <button className={classes.StrangeButton}> {children} </button>
}
export default StrangeButton;