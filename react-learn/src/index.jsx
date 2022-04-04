import dva from "dva";
import counterModel from "./models/counter";
import configRouter from "./configRouter";
import { createBrowserHistory } from "history";
import createLoading from "dva-loading";

const app = dva({
  history: createBrowserHistory(),
});

app.use(createLoading());

app.model(counterModel);

app.router(configRouter);

app.start("#root");
