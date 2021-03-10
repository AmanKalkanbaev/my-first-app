
import classes from "./PastelButton.module.css";

function PastelButton({ children }){
    return <button className={classes.PastelButton}> {children} </button>
}
export default PastelButton;