import React from "react";
import { Navbar, Form, FormControl, Button,Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";
import "../Components/MovieCard.css";
import "../Components/AddMovie.js";
import AddMovie from "../Components/AddMovie.js";


export default function NavBar({
  nameSearch,
  NameSearch,
  ratingSearch,
  RatingSearch,
}) {
  const handleChange = (event) => NameSearch(event.target.value);
  const ratingChanged = (e) => {
    RatingSearch(e);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Navbar className="Navex" expand="lg" sticky="top">
      <h1 style={{ fontWeight: "bold", marginLeft: "100px",fontColor: "white",}}
      >MovieApp</h1>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <div
          style={{
            marginLeft: "100px",
            width: "700px",
            display: "flex",
          }}
        >
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Place a Movie Title"
              className="mr-2"
              aria-label="Search"
              onChange={handleChange}
              style={{ width: "250px" }}
              value={nameSearch}
            />
          </Form>
          
          <div
            className="rating-by-stars"
            style={{
              marginLeft: "30px",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <span>
              <ReactStars
              count={5}
              onChange={ratingChanged}
              size={30}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              value={ratingSearch}
            />
            </span>

           
          </div>

          <AddMovie/>
          <Nav.Link href="#action1">Home</Nav.Link>
          <Button
            variant="outline-secondary"
            style={{ marginLeft: "20px" }}
            onClick={refreshPage}
          >
            Reset
          </Button>
          
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
