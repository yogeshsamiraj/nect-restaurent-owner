import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    "title": "New food order placed",
    "icon": "bi bi-basket",
    "color": "primary",
    "date": "6 minutes ago"
  },
  {
    "title": "New customer registered",
    "icon": "bi bi-person",
    "color": "info",
    "date": "6 minutes ago"
  },
  {
    "title": "Kitchen is overloaded",
    "icon": "bi bi-exclamation-triangle",
    "color": "danger",
    "date": "6 minutes ago"
  },
  {
    "title": "Order #123 is ready for pickup",
    "icon": "bi bi-check-circle",
    "color": "success",
    "date": "6 minutes ago"
  },
  {
    "title": "New delivery request received",
    "icon": "bi bi-truck",
    "color": "dark",
    "date": "6 minutes ago"
  },
  {
    "title": "Ingredient stock running low",
    "icon": "bi bi-exclamation-circle",
    "color": "warning",
    "date": "6 minutes ago"
  }
]


const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
