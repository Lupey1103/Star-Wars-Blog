import propTypes from "prop-types";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);
  const name = props.name;

  let inFavs = store.favorites.filter((e) => e.name === name).length;
  return (
    <>
      <div
        className="card mx-2 bg-dark px-0 text-light border border-secondary my-3"
        style={{ width: "18rem" }}
      >
        <img
          className="card-img-top img-fluid img-cover"
          src={props.imageURL}
          alt="Card image cap"
        />
        <div className="my-auto">
          <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">
              <b>Population:</b> {props.population}
              <br />
              <b>Climate:</b> {props.climate}
              <br />
              <b>Terrain:</b> {props.terrain}
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
