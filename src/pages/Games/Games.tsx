import { NavLink, Outlet } from "react-router-dom";
import styles from "./Games.module.scss";
import { games } from "@data/games";

const Games = () => {
  console.log(location);
  return (
    <div className={styles.gamesBox}>
      <ul className={styles.listGames}>
        {games.map(({ name, link, id }) => (
          <NavLink
            className={styles.linkGame}
            to={`/games/${link}`}
            key={id}
            end
          >
            {name}
          </NavLink>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Games;
