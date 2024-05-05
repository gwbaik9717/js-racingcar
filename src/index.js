import CarRace from "./domain/CarRace.js";
import Car from "./domain/Car.js";
import Input from "../src/view/Input.js";
import Output from "../src/view/Output.js";

async function play() {
  // 자동차 이름 입력
  const carNames = await Input.getCarNamesFromUserInput();

  // 자동차 이름으로부터 자동차 생성
  const cars = Car.createCarsFromCarNames(carNames);

  // 자동차 경주 횟수 입력
  const totalRaceCount = await Input.getTotalRaceCountFromUserInput();

  // 자동차 경주 생성
  const carRace = new CarRace(cars, totalRaceCount);

  // 자동차 경주 시작
  carRace.race();

  // 자동차 경주 라운드 결과 출력
  Output.printCarRaceRoundsResult(carRace);

  // 자동차 경주 우승자 출력
  Output.printCarRaceWinners(carRace.winnerNames.join(", "));
}

play();
