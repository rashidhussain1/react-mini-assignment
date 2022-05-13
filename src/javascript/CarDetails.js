import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCar } from "../service/carlist";
import axios from "axios";

function CarDetails() {
  const { id } = useParams();
  const [car, setList] = useState([]);
  const getCars = async () => {
    await axios

      .get("https://627e135bb75a25d3f3b1353c.mockapi.io/api/carsdata/2/"+id)

      .then((response) => {
        setList(response.data);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCars();
  }, []);
  return (
    <div className="main_container">
      <div className="left_part">
        <p className="date_text">Browse cars - {car.name}</p>
        <div className="container_img">
          <div className="car_image">
            <img height="300px" width="500px" src={car.imgurl} />
          </div>
          <div className="avl">
            <p className="avl_text">available from</p>
            <p>{car.avl}</p>
          </div>
        </div>

        <div className="range_charging">
          <div className="range">
            <p className="date_text">Range</p>
            <p className="date_text">{car.range}</p>
            <p className="date_text">Real World</p>
          </div>
          <div className="charging">
            <p className="date_text">Charging</p>
            <p className="date_text">{car.charging}</p>
            <p className="date_text">max. speed</p>
          </div>
        </div>
        <div className="car_specs">
          <div className="spec">{car.seat}</div>
          <div className="spec">{car.door}</div>
          <div className="spec">{car.drive}</div>
          <div className="spec">{car.color}</div>
          <div className="spec">{car.speed}</div>
        </div>
      </div>

      <div className="right_part">
        <div className="name">{car.name}</div>
        <div className="sub_length">
          <p className="text">Min Subscription Length</p>
          <div>
            <button className="btn">1 Month</button>
            <button className="btn">6 Months</button>
          </div>
        </div>
        <div className="miles">
          <p className="text">Miles per month</p>
          <div>
            <button className="btn">800</button>
            <button className="btn">1000</button>
            <button className="btn">1200</button>
          </div>
        </div>
        <div className="delivery_date">
          <p className="text">Delivery Date</p>
          <p className="date_text">date:</p>
          <input className="date" type="date"></input>
        </div>
        <div className="book_button">
          <button className="button" type="button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
