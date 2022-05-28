import React from 'react'
import { Navbar,Nav,Container,Form, Button, Table } from 'react-bootstrap'
import {useState} from 'react'

function Home() {
   
    const [product, setProduct] =useState([]);
    const addpro = (event) => {
        
        event.preventDefault();
        
        const formData = event.target;
        const newProduct = {
            
            // pro_code: formData.pro_code.value,
            pro_name: formData.pro_name.value,
            pro_qty: Number(formData.pro_qty.value)

        }

        setProduct([...product,newProduct]); 
         
    }

    
   

   

      return (
        <div>
        <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            

                <Button variant="primary" >Add Products</Button> {' '}

              
            </Nav>
            <Nav className="me-auto">
            
            <Button variant="primary">Remove Products</Button> {' '}
             
            </Nav>
            <Nav className="me-auto">
            
            <Button variant="primary">List Products</Button> {' '}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

            <Form onSubmit={addpro} className='mt-5'>
                {/* <Form.Group className="mb-3 pe-5 ps-5" controlId="formBasicCode">
                    <Form.Label>Product Code</Form.Label>
                    <Form.Control type="number" placeholder="Enter code" name='pro_code' />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group> */}

                <Form.Group className="mb-3 pe-5 ps-5" controlId="formBasicProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" name='pro_name' />
                </Form.Group>

                <Form.Group className="mb-3 pe-5 ps-5" controlId="formBasicQty">
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="number" placeholder="No of Product" name='pro_qty' />
                </Form.Group>

                <Button className='ms-5' variant="primary" type="submit">
                    Add to Inventory
                </Button>
                
            </Form>
            
            
            
            <Table striped bordered hover className='mt-5 me-5 ms-5 color-dark'>
                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      product.map((item, pro_code)=>{
                            return(
                                <tr key={pro_code}>
                                <td>{pro_code}</td>
                                <td>{item.pro_name}</td>
                                <td>{item.pro_qty}</td>
                                 <td>
                                 <Button variant="success">Update</Button>
                                 <Button className='ms-5' variant="danger">Delete</Button>

                                 </td>
                            </tr>
                                )
                        })
                    }
                   
                </tbody>
            </Table> 




        </div>
    )
}

export default Home