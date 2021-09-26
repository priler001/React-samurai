import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { addPost } from "./components/Redux/state";
const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.state.dialogsData}
                messagesData={props.state.messagesData}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                posts={props.state.profilePage.posts}
                addPost={addPost}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
