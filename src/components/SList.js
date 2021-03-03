const SList = (props) => {
    let list = [];
    props.items.forEach((items) => {
        list.push(<li>{list}</li>);
    });
    return (<ul >{list}</ul>)
    
}
export default SList;