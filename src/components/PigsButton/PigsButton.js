
import classes from "./PigsButton.module.css";

function PigsButton({ children }){
    return <button className={classes.PigsButton}> {children} </button>
}
export default PigsButton;