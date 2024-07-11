import {Performance as PerformanceClass} from 'a-utils/src/performance/Performance';
import {MoveClass} from 'a-utils/src/move/move';
export {MoveEvent} from 'a-utils/src/move/move'

export const Performance = new PerformanceClass();
export const Move = new MoveClass(Performance, 0.1);
