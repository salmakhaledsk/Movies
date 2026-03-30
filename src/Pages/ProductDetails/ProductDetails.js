import { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../../axiosInstance/instance";

function ProductsDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    instance
      .get(`/movie/${id}?api_key=c94b800b13b9b455a5d91c9b54e821a3`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error", error.message);
      });
  }, [id]);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        className="border-0 text-white"
        style={{
          width: "26rem",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Card.Img
          src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
          style={{ height: "450px", objectFit: "cover" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
          }}
        ></div>

        <Card.Body
          style={{
            position: "absolute",
            bottom: "0",
            zIndex: 2,
          }}
        >
          <Card.Title className="fw-bold fs-4">{product.title}</Card.Title>

          <p className="small">{product.overview?.slice(0, 100)}...</p>

          <p className="mb-1">📅 {product.release_date}</p>

          <h5 className="text-warning">⭐ {product.vote_average}</h5>
        </Card.Body>
        <Button
          variant="danger"
          className="mt-2 w-100 rounded-pill fw-bold"
          onClick={() => navigate(`/details/${product.id}`)}
        >
          ▶ Watch Now
        </Button>
      </Card>
    </Container>
  );
}

export default ProductsDetails;
