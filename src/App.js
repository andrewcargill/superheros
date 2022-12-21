import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch} from 'react-router-dom'
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignupForm";
import Template from "./pages/Template";
import SignInForm from "./pages/auth/SignInForm";
import LandingPage from "./pages/LandingPage";
import PostCreateForm from "./components/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ProfilesPage from "./pages/profiles/ProfilesPage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import PowerPage from "./pages/powers/PowerPage";
import PowerEditForm from "./pages/powers/PowerEditForm";
import PowersPage from "./pages/powers/PowersPage";
import TestPage from "./pages/LayoutTest";

function App() {
const currentUser = useCurrentUser();

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>

              <Route exact path="/posts" render={() => <PostsPage />} />
              <Route exact path="/test" render={() => <TestPage />} />
              <Route exact path="/" render={() => <LandingPage />} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/template" render={() => <Template />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/profiles" render={() => <ProfilesPage />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
              <Route exact path="/powers" render={() => <PowersPage /> } />
              <Route exact path="/powers/:id" render={() => <PowerPage />} />
              <Route exact path="/powers/:id/edit" render={() => <PowerEditForm />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;