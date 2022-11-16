import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from './components/About'
import Services from "./components/Services"
import AddServices from "./components/AddServices"
import Design from "./components/Design"
import Promotions from "./components/Promotions"
import Development from "./components/Development"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"


export default function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/add-services">
            <AddServices />
          </Route>
          <Route exact path="/design">
            <Design />
          </Route>
          <Route exact path="/promotions">
            <Promotions />
          </Route>
          <Route exact path="/development">
            <Development />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}