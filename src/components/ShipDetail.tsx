import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getShipDetail } from '../services/graphql';
import { ShipDetailProps } from '../models/index';
import { setColorTag } from '../utils/setColorTag';
import { BsXCircleFill, BsCheckCircleFill } from 'react-icons/bs';
import { TbShip } from 'react-icons/tb';


const ShipDetail = () => {

  const [shipDetail, setShipDetail] = useState<ShipDetailProps>()
  const { id } = useParams();
  const { shipDetail: ship } = useLocation().state;

  useEffect(() => {
    getShipDetail(id).then(setShipDetail)
  }, [id]);

  if (!shipDetail) {
    return <div className="ship__detail__loading">
      <h1>Loading</h1>
    </div>;
  }

  return (
    <section className="ship__detail__wrapper">
      <div className="ship__detail__container">
        <div className="ship__detail__image">
          <img src={ship.image} alt={ship.name} />
        </div>
        <div className="ship__detail__description">

          <h1>{ship.name}</h1>
          <span className={`ship__details__tag ${setColorTag(ship.type)}`}>{ship.type}</span>
          <div className="ship__detail__description__roles">
            {shipDetail.roles?.map((role: string) =>
              <div className="ship__detail__description__roles__item">
                <TbShip />
                <p>{role}</p>
              </div>
            )}
          </div>
          <div className="ship__detail__description__info">
            <p className="ship__details__year"><span>Built year:</span> {ship.year_built ? ship.year_built : "unknown"}</p>
            <div className="ship__details__active">
              <p>Active :</p>
              {ship.active ?
                <BsCheckCircleFill style={{ color: "green" }} />
                :
                <BsXCircleFill style={{ color: "red" }} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShipDetail