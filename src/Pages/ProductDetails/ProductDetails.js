
import  { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../../axiosInstance/instance";

function ProductsDetails() {
    const naviagte =useNavigate();
  
  const { id } = useParams();
  const[product,setProduct] =useState({})

  useEffect(() => {
    instance
      .get(
        `/movie/${id}?api_key=c94b800b13b9b455a5d91c9b54e821a3`
      )
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error", error.message);
      });
  }, [id]);

  return (
    <div>
      {/* <h1>Product Details</h1>
      <h2>{id}</h2> */}
       <Container>
              <Row className="mt-2">
      
                  <Col className="col-md-12" >
                    <Card style={{ width: "60rem" }}>
                      <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}

                      />
                      <Card.Body>
                        <Card.Title><h1>{product.title}</h1> </Card.Title>
                        <p>{product.overview}</p>
                        <p>{product.release_date}</p>
                        <h3>Rate: {product.vote_average}</h3>

                      </Card.Body>
                    <button className="btn btn-primary details-btn" onClick={()=>{naviagte(`/details/${product.id}`)}}  >Watch Now</button>
                    </Card>

                  </Col>
               
              </Row>
            </Container>
    </div>
  );
}

export default ProductsDetails;
