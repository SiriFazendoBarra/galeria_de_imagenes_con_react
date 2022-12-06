import Product from './Product'
import BD from './BD'

function Main (){
    return(
        <main className='container d-flex gap-2 flex-wrap justify-content-center py-2 '>
            <Product title="Rick Sanchez" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
            <Product title="Morty Smith" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"/>
            <Product title="Summer Smith" src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"/>
            <Product title="Beth Smith" src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"/>
            <Product title="Jerry Smith" src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"/>
            <Product title="Abadango Cluster Princess" src="https://rickandmortyapi.com/api/character/avatar/6.jpeg"/>
        </main>
        
    )
}
export default Main