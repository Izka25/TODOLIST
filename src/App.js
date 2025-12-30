import { HashRouter, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./Navigation";
import { toAuthor, toTask, toTasks } from "./routes";
import Task from "./features/tasks/TaskPage";
import Tasks from "./features/tasks/TasksPage";
import Author from "./features/author/AuthorPage";


export default () => (
  <HashRouter>
    <Navigation />
    
      <Switch>
        <Route path={toTask()}>
          <Task />
        </Route>
        <Route path={toTasks()}>
          <Tasks />
        </Route>
        <Route path={toAuthor()}>
          <Author />
        </Route>
        <Route>
          <Redirect to={toTasks()} />
        </Route>
      </Switch>
    
  </HashRouter>
);
