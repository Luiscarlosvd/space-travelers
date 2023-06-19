import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../redux/rockets/rocketsSlice';

function RocketsList() {
  const rockets = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <section>
      {rockets.rocketsArr.map((rocket)=>(
          <h3 key={rocket.id}>{rocket.name}</h3>
        )
      )}
    </section>
  )
}

export default RocketsList