import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/missions/missionsSlice';

function MissionsList() {
  const missions = useSelector((store) => store.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <section>
      missions
    </section>
  )
}

export default MissionsList