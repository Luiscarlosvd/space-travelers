import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

function RocketsList() {
  const rockets = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.rocketsArr.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets.rocketsArr.length]);

  return (
    <section>
      {rockets.rocketsArr.map((rocket)=>(
          <Rocket 
            key={rocket.id}
            id={rocket.id}
            img={rocket.img}
            name={rocket.name}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        )
      )}
    </section>
  )
}

export default RocketsList