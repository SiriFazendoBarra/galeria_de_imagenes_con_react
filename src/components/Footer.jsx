import Button from 'react-bootstrap/Button'

function Footer () {
    return(
        <footer className="footer py-2 d-flex justify-content-center align-items-center" style={{gridArea:"footer", Height:"10vh", background:"#111"}}>
            <p className='m-0'>Galería de imágenes <Button variant='secondary' href='https://rickandmortyapi.com/'>Rick & Morty API</Button></p>
        </footer>
    )
}

export default Footer