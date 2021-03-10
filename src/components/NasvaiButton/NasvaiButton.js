
import classes from "./NasvaiButton.module.css";

function NasvaiButton({ children }){
    return <button className={classes.NasvaiButton}> {children} </button>
}
export default NasvaiButton;