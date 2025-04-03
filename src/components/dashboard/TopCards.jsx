import { Card, CardBody } from "reactstrap";

const TopCards = (props) => {
  return (
    <Card style={{marginBottom: '5%'}}>
      <CardBody>
        <div className="d-flex">
          <div className={`circle-box lg-box d-inline-block ${props.bg}`}>
            <i className={props.icon}></i>
          </div>
          <div className="ms-3">
            <h3 className="mb-0 font-weight-bold">{props.value}</h3>
            <small className="text-muted">{props.title}</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TopCards;
