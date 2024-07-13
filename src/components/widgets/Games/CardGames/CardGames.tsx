import { useEffect, useState } from "react";
import { cardGames, ICardGames } from "@data/games";
import FlippyCard from "@components/widgets/FlipCard/FlipCard";
import BackCard from "@components/widgets/FlipCard/Content/GameCard/back/BackCard";
import FrontCard from "@components/widgets/FlipCard/Content/GameCard/front/FrontCard";
import styles from "./CardGames.module.scss";

const paitOfArrayCards = [...cardGames, ...cardGames];

const CardGames = () => {
  const [arrayCards, setArrayCards] = useState<ICardGames[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const shuffle = (array: ICardGames[]) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      console.log(randomIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  useEffect(() => {
    setArrayCards(shuffle(paitOfArrayCards));
  }, []);

  const handleClickCard = (index: number) => {
    if (openCards[openCards.length - 1] !== index && openCards.length < 2) {
      setOpenCards((opened) => [...opened, index]);
      setMoves((prevMove) => prevMove + 1);
    }
  };

  useEffect(() => {
    if (openCards.length < 2) return;
    const firstMatched = arrayCards[openCards[0]];
    const secondMatched = arrayCards[openCards[1]];
    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }
    if (openCards.length === 2) setTimeout(() => setOpenCards([]), 1000);
  }, [arrayCards, matched, openCards]);
  const handleGameStart = () => {
    setOpenCards([]);
    setArrayCards(shuffle(paitOfArrayCards));
    setMatched([]);
    setMoves(0);
  };
  console.log(arrayCards);
  return (
    <div>
      <p>Сделано шагов {moves}</p>
      <button onClick={handleGameStart}></button>
      <ul className={styles.listCards}>
        {arrayCards.map((item, index) => {
          let isFliped = false;
          if (openCards.includes(index)) isFliped = true;
          if (matched.includes(item.id)) isFliped = true;
          return (
            <div key={index}>
              <FlippyCard
                frontContent={
                  <FrontCard onClick={() => handleClickCard(index)} />
                }
                backContent={
                  <BackCard
                    onClick={() => handleClickCard(index)}
                    img={item.img}
                  />
                }
                isFlipped={isFliped}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CardGames;
