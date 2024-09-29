import { memo, useCallback, useMemo, useState, useEffect } from "react";
import FlippyCard from "@components/widgets/FlipCard/FlipCard";
import FrontCard from "@components/widgets/FlipCard/Content/GameCard/front/FrontCard";
import BackCard from "@components/widgets/FlipCard/Content/GameCard/back/BackCard";
import ButtonCard from "@components/shared/ButtonCard/ButtonCard";
import styles from "./CardGames.module.scss";
import { cardGames, ICardGames } from "@data/games";

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
  const handleCardClicks = useMemo(() => {
    return arrayCards.map((_, index) => () => handleClickCard(index));
  }, [arrayCards, handleClickCard]);
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
    if (arrayCards.length / 2 === matched.length && arrayCards.length !== 0) {
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

  const frontContents = useMemo(() => {
    return arrayCards.map((_, index) => <FrontCard key={`front-${index}`} />);
  }, [arrayCards]);

  const backContents = useMemo(() => {
    return arrayCards.map((card, index) => (
      <BackCard key={`back-${index}`} img={card.img} />
    ));
  }, [arrayCards]);

  return (
    <div className={styles.boxGame}>
      <p className={styles.step}>Сделано шагов: {moves}</p>

      <ul className={`${styles.listCards}`}>
        {finishGame && (
          <div className={styles.overlay} onClick={(e) => e.stopPropagation()}>
            <ButtonCard onClick={handleGameStart} text={"Почати гру"} />
          </div>
        )}
        {arrayCards.map((_, index) => (
          <li className={styles.mainCard} key={index} onClick={handleCardClicks[index]}>
            <FlippyCard
              key={index}
              styleCard="cardGame"
              frontContent={frontContents[index]}
              backContent={backContents[index]}
              isFlipped={
                openCards.includes(index) ||
                matched.includes(arrayCards[index].id)
              }
              id={index}
            />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MemoizedCardGames = memo(CardGames);
export default MemoizedCardGames;
