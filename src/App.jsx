import ChampionshipBrazilian from "./pages/ChampionshipBrazilian";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/brazilian/:year">
          <ChampionshipBrazilian />
        </Route>
        <Redirect to={{ pathname: `/brazilian/2003` }}></Redirect>
      </Switch>
    </Router>
  );
}
