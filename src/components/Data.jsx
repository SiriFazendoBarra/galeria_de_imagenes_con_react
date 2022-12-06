async function Data (){
    const resp = await fetch('https://rickandmortyapi.com/api/character')
    const data = await resp.json()
    console.log(data)
}

export default Data