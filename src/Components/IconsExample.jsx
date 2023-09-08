// import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function IconsExample() {
  return (
    <>
      <div>
        <i className="bi bi-heart-fill"></i>
      </div>
      <div>
        <i className="bi bi-film"></i>
      </div>
      <div>
        <i className="bi bi-heart-fill" style={{ fontSize: '2rem', color: 'pink' }}></i>
        <i className="bi bi-heart-fill" style={{ fontSize: '20rem', color: 'green' }}></i>
      </div>
    </>
  );
}
