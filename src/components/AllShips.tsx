import { useState, useEffect } from 'react'
import { getShips } from '../services/graphql'
import { Ships } from '../models'
import defaultImage from "../assets/default-image.jpg";
import { setColorTag } from '../utils/setColorTag';
import { BsXCircleFill, BsCheckCircleFill } from 'react-icons/bs';

const AllShips = () => {

  const [ships, setShips] = useState<Ships[]>([])

  useEffect(() => {
    getShips().then(setShips)
  });


  console.log(ships, "SHIPS");

  return (
    <div className="ships__wrapper">
      {ships.map((s) => (
        <div className="ship" key={s.id} style={{ backgroundImage: `url(${s.image ? s.image : defaultImage})` }}>
          <div className="ship__details">
            <h1>{s.name}</h1>
            <span className={`ship__details__tag ${setColorTag(s.type)}`}>{s.type}</span>
            <div className="ship__details__info">
              <p className="ship__details__year"><span>Built year:</span> {s.year_built ? s.year_built : "unknown"}</p>
              <div className="ship__details__active">
                <p>Active :</p>
                {s.active ?
                  <BsCheckCircleFill style={{ color: "green" }} />
                  :
                  <BsXCircleFill style={{ color: "red" }} />}
              </div>
            </div>
            <button className="ship__details__button">
              More info
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllShips