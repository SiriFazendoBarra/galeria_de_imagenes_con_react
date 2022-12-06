import Card from 'react-bootstrap/Card';

function Product ({title, src, text}){
    return(
        <Card style={{background:"#111"}}>
            <Card.Img variant='top' src={src} style={{objectFit:'cover'}} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>   
            </Card.Body>
        </Card>
    )
}

export default Product