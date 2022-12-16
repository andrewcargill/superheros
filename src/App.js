import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch} from 'react-router-dom'
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignupForm";
import Template from "./pages/Template";


// Add default route for pages not found

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path = "/" render={()=> <h1>Home page</h1>} />
          <Route exact path = "/signin" render={()=> <h1>Sign In</h1>} />
          <Route exact path = "/signup" render={()=> <SignUpForm />} />
          <Route exact path = "/template" render={()=> <Template/>} />
        </Switch>

      </Container>
    </div>
  );
}

export default App;