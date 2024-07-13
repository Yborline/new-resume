import catImg from "@assets/images/games/cat.png";
import androidImg from "@assets/images/games/android.png";
import apple from "@assets/images/games/apple.png";
import avocadoImg from "@assets/images/games/avocado.png";
import birdsImg from "@assets/images/games/birds.png";
import dogImg from "@assets/images/games/dog.png";
import flowerImg from "@assets/images/games/flower.png";
import katerImg from "@assets/images/games/kater.png";
import mercedesImg from "@assets/images/games/mercedes.png";
import snakesImg from "@assets/images/games/snakes.png";

export const games = [{ name: "Card game", id: 1, link: "card_games" }];

export interface ICardGames {
  id: number;
  img: string;
}

export const cardGames = [
  { id: 1, img: catImg },
  { id: 2, img: androidImg },
  { id: 3, img: apple },
  { id: 4, img: avocadoImg },
  { id: 5, img: birdsImg },
  { id: 6, img: dogImg },
  { id: 7, img: flowerImg },
  { id: 8, img: katerImg },
  { id: 9, img: mercedesImg },
  { id: 10, img: snakesImg },
];
