import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState([]); // for storing api data

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div key={van.id} className="van-details-container">
      {van ? (
        <div>
          <img className="van-img" src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            ${van.price}
            <span>/day</span>
          </p>
          <p>{van.description}</p>
          <a className="btn orange-btn">Rent this van</a>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetails;
