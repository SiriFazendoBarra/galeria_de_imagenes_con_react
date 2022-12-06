function Header ({title='No hay título'}) {
    return(
        <header className="header py-2 d-flex justify-content-center align-items-center" style={{gridArea:"header", Height:"10vh", background:"#111"}}>
            <h1 className="m-0">{title}</h1>
        </header>
    )
}

export default Header