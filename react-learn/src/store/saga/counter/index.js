import { takeEvery, delay, put, fork, cancel, take, race, cancelled } from 'redux-saga/effects'
import { actionTypes, increase } from '../../action/counter'

function* handleIncrease() {
  while (true) {
    yield take(actionTypes.autoIncrease);
    const task = yield fork(function* () {
      try {
        while (true) {
          yield delay(2000);
          yield put(increase());
        }
      } finally {
        if (yield cancelled()) {
          console.log("该任务被销毁");
        }
      }
    })
    yield take(actionTypes.stopIncrease)
    yield cancel(task)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield fork(handleIncrease)
}

// let isStop;
// let task;
// function* stopTask() {
//   if (task) {
//     yield cancel(task);
//   }
// }

// function* autoIncrease() {
//   isStop = false
//   while (true) {
//     yield take(actionTypes.autoIncrease);
//     yield* stopTask()
//     task = yield fork(function* () {
//       while (true) {
//         yield delay(2000);
//         yield put(increase());
//       }
//     })
//   }
// }

// function* stopIncrease() {
//   yield* stopTask();
//   isStop = true;
// }

// export default function* () {
//   yield fork(autoIncrease);
//   yield takeEvery(actionTypes.stopIncrease, stopIncrease)
// }

// test takeLatest
// function* autoIncrease() {
//   while (true) {
//     yield delay(2000);
//     yield put(increase());
//   }
// }

// export default function* () {
//   yield takeLatest(actionTypes.autoIncrease, autoIncrease)
// }


// export default function* () {
//   yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
//   yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
//   console.log("开始监听asyncIncrease和asyncDecrease");
// }

// function* asyncIncrease() {
//   console.log("监听到asyncIncrease");
// }

// function* asyncDecrease() {
//   console.log("监听到asyncDecrease");
// }