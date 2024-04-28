import { TOTAL_RACE_COUNT } from "../constants/carRace.js";
import { joinCarNamesByComma, printCarsStatus } from "../utils/cars.js";

class CarRace {
  #remainingRaceCount = TOTAL_RACE_COUNT;

  constructor(competitors) {
    this.competitors = competitors;
  }

  get winners() {
    const winners = this.competitors.filter(
      (competitor) => competitor.position === this.winnerPosition
    );

    return winners;
  }

  get remainingRaceCount() {
    return this.#remainingRaceCount;
  }

  get winnerPosition() {
    const positionResults = this.competitors.map(
      (competitor) => competitor.position
    );

    return Math.max(...positionResults);
  }

  race() {
    while (this.#remainingRaceCount > 0) {
      this.competitors.forEach((competitor) => {
        // 자동차가 움직이는 조건 생성
        const canCarMove = () => {
          const randomValue = Math.floor(Math.random() * 10);
          return randomValue >= 4;
        };

        if (canCarMove()) {
          competitor.move();
        }
      });
      printCarsStatus(this.competitors);

      this.#remainingRaceCount--;
    }
  }

  printWinners = () => {
    const joinedCarRaceWinners = joinCarNamesByComma(this.winners);

    console.log(`${joinedCarRaceWinners}가 최종 우승했습니다.`);
  };
}

export default CarRace;
