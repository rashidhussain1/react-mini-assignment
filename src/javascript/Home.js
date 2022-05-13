import React, { useState, useEffect } from "react";
import { getCars } from "../service/carlist";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Body() {
  const [list, setList] = useState([]);
  //  const list=getCars();
  // const list=[];
  // axios.get("https://627e135bb75a25d3f3b1353c.mockapi.io/api/carsdata/2")
  // .then((response)=>{setList(response.data)})

  const getCars = async () => {
    await axios

      .get("https://627e135bb75a25d3f3b1353c.mockapi.io/api/carsdata/2")

      .then((response) => {
        setList(response.data);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {

    getCars();
    
    }, []);

  const handleSelect = (e) => {
    const value = e.target.value;
    let copyList = [...list];
    if (value == "low") {
      copyList.sort((a, b) => {
        return a.rate - b.rate;
      });
    } else if (value == "high") {
      copyList.sort((a, b) => {
        return b.rate - a.rate;
      });
    }
    setList(copyList);
  };
  return (
    <div>
      <div className="left_bottom">
        <div>
          <h4 style={{ display: "inline" }}>Sort By</h4>
          <select onChange={(e) => handleSelect(e)}>
            <option value=""></option>
            <option value="low">Lowest Price</option>
            <option value="high">Highest Price</option>
          </select>
        </div>

        <input
          className="search_bar"
          type="text"
          placeholder="Search by name"
        />
      </div>
      <div className="home_cards">
        {list.map((car) => {
          return (
            <div key={car.id} className="grid-container">
              <div className="box">
                <div className="img_rate">
                  <div>
                    <img className="divImg" alt="logo" src={car.imgurl} />
                  </div>
                  <div className="rate_text">
                    <p>from {car.rate}$</p>
                    <p>for 6 months</p>
                  </div>
                </div>

                <p className="car_name"> {car.name} </p>
                <p className="car_efficiency"> {car.efficiency} </p>
                <p className="car_efficiency_text"> Efficiency</p>
                <NavLink to={"/" + car.id}>
                  <button className="button_explore" type="button">
                    Explore!
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
