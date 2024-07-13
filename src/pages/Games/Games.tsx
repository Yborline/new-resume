import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./Games.module.scss";
import { games } from "@data/games";

const Games = () => {
  const { pathname } = useLocation();

  console.log(location);
  return (
    <div className={styles.gamesBox}>
      <ul>
        {games.map(({ name, link, id }) => (
          <NavLink to={`/games/${link}`} key={id} end>
            {name}
          </NavLink>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Games;
