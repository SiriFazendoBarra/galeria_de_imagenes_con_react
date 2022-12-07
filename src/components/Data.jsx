async function Data (){
    const endpoint = 'https://rickandmortyapi.com/api/character'
    const resp = await fetch(endpoint)
    const data = await resp.json()
    console.log(data)
}

export default Data