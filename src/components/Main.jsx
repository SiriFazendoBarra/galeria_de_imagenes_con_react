import Product from './Product'


function Main (){
        return(
        <main className='main d-grid p-4 gap-4' style={{gridArea:"main", gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 15rem), 1fr))", background:"#381446" }}>
            
            <Product title="Rick Sanchez" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" text="Human"/>
            <Product title="Morty Smith" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" text="Human"/>
            <Product title="Summer Smith" src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" text="Human"/>
            <Product title="Beth Smith" src="https://rickandmortyapi.com/api/character/avatar/4.jpeg" text="Human"/>
            <Product title="Jerry Smith" src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" text="Human"/>
            <Product title="Abadango Cluster Princess" src="https://rickandmortyapi.com/api/character/avatar/6.jpeg" text="Alien"/>
        </main>
        
    )
}
export default Main