import FilteredList from "./FilteredList";
import { useSelector } from "react-redux";


function ProfileList() {
  const missions = useSelector((store) => store.missions);
  const rockets = useSelector((store) => store.rockets);
  const filteredRockets = rockets.rocketsArr.filter((rocket) => rocket.reserved === true);
  const filteredMissions = missions.missionsArr.filter((mission)=>mission.activeMember === true);

  return (
    <section className="flex mx-16 w-11/12 gap-16">
      <FilteredList array={filteredMissions} title="My Missions"/>
      <FilteredList array={filteredRockets} title="My Rockets"/>
    </section>
  )
}

export default ProfileList