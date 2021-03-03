const OList = (props) => {
    let list = [];
    for (let i = 0; i < props.items.length; i++){
        const items = props.items[i];
        list.push(<li>{items}</li>);
    }
    return (<ul>{list}</ul>)
    
}
export default OList;