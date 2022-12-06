function Header ({title='No hay título'}) {
    return(
        <header className="py-2" style={{background:'yellow'}}>
            <h1>{title}</h1>
        </header>
    )
}

export default Header