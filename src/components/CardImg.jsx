import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const CardImg = () => {
  return (
    <>
      <article className="card-css">
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img
            alt="Sample"
            src="http://drive.google.com/uc?export=view&id=14sBHqm9eOOBqwnXzHHmi90FGYpzTcw9d"
          />
          <CardBody>
            <CardTitle tag="h5">Choripan</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Tradicional
            </CardSubtitle>
            <CardText>
              Pan blanco, con chorizo selecto a las finas hiervas, y aderezo de
              la casa.
            </CardText>
            <Button>Agregar</Button>
          </CardBody>
        </Card>
      </article>
    </>
  );
};

export default CardImg;
