import './app.scss';
import { Layout } from "antd";
import "antd/dist/antd.css";
import jwt_decode from "jwt-decode";  
import Headers from './layout/header';
import Footer from './layout/footer';
import Contents from './layout/content';
import { AuthActions } from './modules/auth/redux/actions';
import store from "./redux/store";

if (localStorage.token) {
  const decoded = jwt_decode(localStorage.token);
  
  store.dispatch(AuthActions.setCurrentUser(decoded));

  //Check session login
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    AuthActions.logOut();
  }
}

function App({ children }) {
  return (
    <div className="App">
      <Layout>
        <Headers />
        <Contents>{ children }</Contents>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
