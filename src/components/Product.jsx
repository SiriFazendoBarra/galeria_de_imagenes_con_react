import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product ({title, src}){
    return(
        <Card style={{width:'18rem'}}>
            <Card.Img variant='top' src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nemo maiores laudantium exercitationem rerum eaque aut sunt, dignissimos ducimus modi provident, expedita omnis vel nesciunt dolorum dolores molestiae voluptatum perferendis!
                    
                </Card.Text>
                <Button variant="primary" >Botón</Button>
            </Card.Body>
        </Card>
    )
}

export default Product