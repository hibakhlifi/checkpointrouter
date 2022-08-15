
import React from "react";
import { Card,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";
import "../Components/MovieCard.css";
import {Link} from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ marginTop: "60px" }}>
        <Card
          className="cardex"
          style={{
            width: "20em",
            margin: "30px",
            height: "45rem",
            border: "solid white 3px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #00000030",
          }}
        >
          <Card.Img className="cardimage" src={movie.image} alt="pic" />
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title
              style={{ height: "25px", width: "auto", overflowY: "auto" }}
            >
              {movie.name}
            </Card.Title>
            <ReactStars
              count={5}
              size={20}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              value={movie.rating}
              edit={false}
            />
            {/* <Card.Text style ={{width:'255px', height:'100px', overflow :'auto'}}>
                     {movie.description}
                    </Card.Text> */}

                    <Link to={`${movie.id}`}>
              <Button
                variant="outline-secondary"
                style={{ marginLeft: "100px" }}
              >
                Trailer
              </Button>
            </Link>
          </Card.Body>
        </Card>
    </div>
  );
};
export default MovieCard;