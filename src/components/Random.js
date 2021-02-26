function Random( { min, max } ){
    let cifra = Math.random() * (max - min) + min;
    return <h1>{cifra.toFixed()}</h1>
}

export default Random;