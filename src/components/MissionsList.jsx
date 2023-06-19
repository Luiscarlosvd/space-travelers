import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMissions } from "../redux/missions/missionsSlice";
import Mission from "./Mission";

function MissionsList() {
  const missions = useSelector((store) => store.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.missionsArr.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch]);

  return (
    <section>
      <table className="table-auto mx-16 border border-gray-300 mb-10">
        <thead>
          <tr>
            <th className="py-3 border border-gray-300 bg-white">Mission</th>
            <th className="py-3 border border-gray-300 bg-white">Description</th>
            <th className="py-3 border border-gray-300 bg-white">Status</th>
            <th className="py-3 border border-gray-300 bg-white"></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {missions.missionsArr.map((mission) => (
            <Mission
              key={mission.id}
              id={mission.id}
              name={mission.name}
              desc={mission.description}
              activeMember={mission.activeMember}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default MissionsList;
