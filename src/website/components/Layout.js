import MainNav from "./MainNav";
import Container from "react-bootstrap/Container";

export default function Layout(props) {
    return (
      <>
      <MainNav />
      <Container className="body-container">{props.children}</Container>
      <br />
      </>
    );
  }