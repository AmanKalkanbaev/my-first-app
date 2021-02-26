function Big( { a, b } ){
    if(a > b){
        
        return <h1>{a} is bigger than {b}</h1>
    }
    else{
        return <h1>{b} is bigger than {a}</h1>
    }
}

export default Big;