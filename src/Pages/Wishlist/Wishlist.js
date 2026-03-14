
import "./Wishlist.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../Store/Slices/wishlist";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaTrash, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const nav = useNavigate()

  const EmptyWishlist = () => (
    <Col className="text-center my-5  ">
      <div className="empty-wishlist-container p-5">
        <div className="empty-wishlist-icon">
          <FaHeart />
        </div>
        <h3 className="empty-wishlist-title">Wishlist is Empty</h3>
        <p className="empty-wishlist-text">
          Items you save to your wishlist will appear here.
        </p>
        <button className="empty-wishlist-button " onClick={() => nav("/products")}>
          Start Shopping
        </button>
      </div>
    </Col>
  );

  return (
    <Container>
      <Row className="mt-5">
        {wishlist.length === 0 ? (
          <EmptyWishlist />
        ) : (
          wishlist.map((item) => (
            <Col className="col-md-3" key={item.id}>
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>
                    <h6>{item.title}</h6>
                  </Card.Title>
                  <FaTrash
                    className="trashicon"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default Wishlist;