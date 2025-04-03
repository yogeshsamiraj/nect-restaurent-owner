import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayout = () => {
  return (
    <div>
      <div className="pageWrapper d-lg-flex" style={{background: 'rgb(223 223 227)'}}>


        <div className="w-100" expand="lg">
          <Header />
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default FullLayout;
