
import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import instance from "../../axiosInstance/instance";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../Store/Slices/wishlist";
import { FaHeart } from "react-icons/fa";
import { productsAction } from "../../Store/Slices/products"; // Import productsAction

function Products() {
  ///favourite and redux thunk
  const dispatch = useDispatch();

  //loader
  const loader = useSelector((state) => state.sliceLoader.loader);

  // Redux Thunk products

  // const products = useSelector((state) => state.sliceProducts.products);

  useEffect(() => {
    dispatch(productsAction()); // Dispatch the productsAction
  }, []);




  const apiKey ="c94b800b13b9b455a5d91c9b54e821a3";
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    instance
      .get(
        `/movie/popular?api_key=${apiKey}`
      )
      .then((res) => {
        setProducts(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loader ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container>
          <Row className="mt-5">
            {products.map((prod) => (
              <Col className="col-md-3" key={prod.id}>
                <Card style={{ width: "12rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${prod.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h6>{prod.title}</h6>
                    </Card.Title>
                    <FaHeart
                      className="FavIcon"
                      onClick={() => dispatch(addToWishlist(prod))}
                    />
                  </Card.Body>
                  <button
                    className="btn btn-primary details-btn"
                    onClick={() => {
                      navigate(`/details/${prod.id}`);
                    }}
                  >
                    details
                  </button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default Products;
