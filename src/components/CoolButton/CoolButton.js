
import classes from "./CoolButton.module.css";

function CoolButton({ children }){
    return <button className={classes.CoolButton}> {children} </button>
}
export default CoolButton;