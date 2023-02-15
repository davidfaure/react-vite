import { useState, useEffect } from 'react'
import { getShips } from '../services/graphql'
import { Ships, typeShip, ShipType } from '../models'
import defaultImage from "../assets/default-image.jpg";
import { setColorTag } from '../utils/setColorTag';
import { BsXCircleFill, BsCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AllShips = () => {

  const [ships, setShips] = useState<Ships[]>([])
  const [typeChoice, setTypeChoice] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setTypeChoice(value)
  }

  useEffect(() => {
    getShips().then(setShips)
  });

  return (
    <section className="ships__container">
      <select onChange={onChange}>
        <option value="">--Filter by Type--</option>
        {typeShip.map((type) => <option key={type} value={`${type}`}>{type}</option>)}
      </select>
      <div className="ships__wrapper">
        {ships
          .filter((ship) =>
            typeChoice === "" || ship.type === typeChoice
          ).map((s) => (
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
                <Link to={s.id} state={{ shipDetail: s }}>
                  <button className="ship__details__button">
                    More info
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default AllShips