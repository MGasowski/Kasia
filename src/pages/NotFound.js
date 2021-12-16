import { Col, Container, Row } from "react-bootstrap";
import { FaRegSadCry } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container fluid="md" className="mt-5">
      <Row>
        <Col>
          <div className="card">
            <div className="card-header">404 - Nie znaleziono</div>
            <div className="card-body">
              <h5 className="card-title">Nie znaleziono </h5>
              <p className="card-text">Strona o tym adresie nie istnieje</p>
              <FaRegSadCry size="70" className="text-primary" />
              <Link to="/">
                <button className="btn btn-primary">Strona główna</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
