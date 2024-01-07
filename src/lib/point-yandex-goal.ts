import ym from 'react-yandex-metrika';

import { enableYM } from '../providers/yandex-metrica';

export const pointYandexGoal = (goal: string) => {
  if (!enableYM) {
    console.log(`%c[YandexMetrika](GOAL)`, `color: orange`, goal);
    return;
  }
  ym('reachGoal', goal);
};
