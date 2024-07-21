import { useEffect, useState, useCallback, useMemo } from "react";
import { cardGames, ICardGames } from "@data/games";
import FlippyCard from "@components/widgets/FlipCard/FlipCard";
import BackCard from "@components/widgets/FlipCard/Content/GameCard/back/BackCard";
import FrontCard from "@components/widgets/FlipCard/Content/GameCard/front/FrontCard";
import styles from "./CardGames.module.scss";
import ButtonCard from "@components/shared/ButtonCard/ButtonCard";

const shuffle = (array: ICardGames[]) => {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const CardGames = () => {
  const pairOfArrayCards = useMemo(() => [...cardGames, ...cardGames], []);

  const [arrayCards, setArrayCards] = useState<ICardGames[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [finishGame, setFinishGame] = useState(true);

  useEffect(() => {
    setArrayCards(shuffle([...pairOfArrayCards]));
  }, [pairOfArrayCards]);

  const handleClickCard = useCallback(
    (index: number) => {
      if (openCards.includes(index) || openCards.length === 2) return;
      setOpenCards((opened) => [...opened, index]);
      setMoves((prevMove) => prevMove + 1);
    },
    [openCards]
  );

  useEffect(() => {
    if (openCards.length < 2) return;

    const [firstIndex, secondIndex] = openCards;
    const firstCard = arrayCards[firstIndex];
    const secondCard = arrayCards[secondIndex];

    if (secondCard && firstCard.id === secondCard.id) {
      setMatched((prevMatched) => [...prevMatched, firstCard.id]);
    }

    const timeoutId = setTimeout(() => setOpenCards([]), 1000);
    return () => clearTimeout(timeoutId);
  }, [openCards, arrayCards]);

  useEffect(() => {
    const arrayNoreapetLength = arrayCards.length / 2;
    if (arrayNoreapetLength === matched.length && arrayCards.length !== 0) {
      setFinishGame(true);
    }
  }, [arrayCards, matched]);

  const handleGameStart = useCallback(() => {
    setOpenCards([]);
    setArrayCards(shuffle([...pairOfArrayCards]));
    setMatched([]);
    setMoves(0);
    setFinishGame(false);
  }, [pairOfArrayCards]);
  console.log(finishGame);

  const isFliped = useCallback(
    (index: number, id: number) => {
      return openCards.includes(index) || matched.includes(id);
    },
    [matched, openCards]
  );

  return (
    <div className={styles.boxGame}>
      <p>Сделано шагов: {moves}</p>

      <ul className={`${styles.listCards}`}>
        {finishGame && (
          <div className={styles.overlay} onClick={(e) => e.stopPropagation()}>
            <ButtonCard onClick={handleGameStart} text={"Почати гру"} />
          </div>
        )}
        {arrayCards.map((item, index) => {
          return (
            <div key={index}>
              <FlippyCard
                styleCard="cardGame"
                frontContent={
                  <FrontCard onClick={() => handleClickCard(index)} />
                }
                backContent={
                  <BackCard
                    onClick={() => handleClickCard(index)}
                    img={item.img}
                  />
                }
                isFlipped={isFliped(index, item.id)}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CardGames;
