import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch} from 'react-router-dom'
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignupForm";
import SignInForm from "./pages/auth/SignInForm";
import LandingPage from "./pages/LandingPage";
import PostCreateForm from "./components/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ProfilesPage from "./pages/profiles/ProfilesPage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import PowerPage from "./pages/powers/PowerPage";
import PowerEditForm from "./pages/powers/PowerEditForm";
import PowersPage from "./pages/powers/PowersPage";

function App() {

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
              <Route exact path="/posts" render={() => <PostsPage />} />
              <Route exact path="/" render={() => <LandingPage />} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/profiles" render={() => <ProfilesPage />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
              <Route exact path="/powers" render={() => <PowersPage /> } />
              <Route exact path="/powers/:id" render={() => <PowerPage />} />
              <Route exact path="/powers/:id/edit" render={() => <PowerEditForm />} />
              <Route render={() => <p>Sorry, That page cannot be found!</p>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;