import './App.css';
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import { CssBaseline } from "@material-ui/core/index";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Content } from "./components/Content/Content";
import { NoMatch } from "./components/NoMatch/NoMatch";
import { SignupPage } from "./pages/Signup/SignupPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { useState } from "react";
import { HomePage } from './pages/HomePage/HomePage';


const appTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#8b1e3f',
            contrastText: "#fff"
        },

    }
})


function App() {
    const [user, setUser] = useState(null)

    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <Router>
                <NavBar user={user} />
                <Content>
                    <Switch>
                        <Route path={"/"} exact>
                            <LandingPage />
                        </Route>
                        <Route path={"/signup"}>
                            <SignupPage />
                        </Route>
                        <Route path={"/login"}>
                            <LoginPage setUser={setUser} />
                        </Route>
                        <Route path="/home">
                            <HomePage />
                        </Route>
                        <Route>
                            <NoMatch />
                        </Route>
                    </Switch>
                </Content>
            </Router>

        </ThemeProvider>
    );
}

export default App;
