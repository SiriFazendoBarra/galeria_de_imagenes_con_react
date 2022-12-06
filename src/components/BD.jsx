async function BD (){
    const resp = await fetch('https://rickandmortyapi.com/api/character')
    const data = await resp.json()
    console.log(data)
}

export default BD