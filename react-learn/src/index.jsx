import dva from "dva";
import counterModel from "./models/counter";
import configRouter from "./configRouter";
import { createBrowserHistory } from "history";

const app = dva({
  history: createBrowserHistory(),
});

app.model(counterModel);

app.router(configRouter);

app.start("#root");
