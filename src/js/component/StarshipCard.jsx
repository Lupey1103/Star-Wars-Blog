import propTypes from "prop-types";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const StarshipCard = (props) => {
  const { store, actions } = useContext(Context);
  const name = props.name;

  let inFavs = store.favorites.filter((e) => e.name === name).length;
  return (
    <>
      <div
        className="card mx-2 px-0 bg-dark text-light border border-secondary my-3"
        style={{ width: "18rem" }}
      >
        <img
          className="card-img-top img-fluid img-cover img-starship"
          src={props.imageURL}
          alt="Card image cap"
        />
        <div className="my-auto">
          <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">
              <b>Manufacturer:</b> {props.manufacturer}
              <br />
              <b>Cost:</b> {props.cost}
              <br />
              <b>Passengers:</b> {props.passengers}
            </p>
            <div class="d-flex justify-content-between">
              <a href={props.link} className="btn btn-primary">
                More Info
              </a>
              <i
                onClick={() =>
                  inFavs == 1 ? actions.deleteFav(name) : actions.addFav(props)
                }
                className={
                  inFavs == 1 ? "fas fa-heart heart" : "far fa-heart heart"
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
