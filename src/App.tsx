import {lazy, Suspense, useEffect, useState} from "react";
import "./App.css";
import "./reset.css";
import "./global.css";
import Head from "./head/";
import Technology from "./technology";
import EconomicModelApplicationScenario from "./economicModelApplicationScenario";
import Team from "./team";
import Strategic from "./strategic";
import Road from "./road";
import Join from "./join";
import classnames from "classnames";
import Foot from "./foot";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Whitepaper from "./whitepaper";
import Launch from "./animation/launch";

function App() {
  const [widgetShow, setWidgetShow] = useState(true);
  const backend = lazy(() => import("./backend/Backend"));
  const marsApp = lazy(() => import("./Mars"));
  const [browserType, setBrowserType] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    const isSafari = /safari/i.test(userAgent) && !/chrome/i.test(userAgent);
    const isChrome = /chrome/i.test(userAgent);

    if (isSafari) {
        setBrowserType("safari");
    } else if (isChrome) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://crypto.com/price/static/widget/index.js";
        document.getElementById("root")?.appendChild(script);
        setBrowserType("chrome");
    }
  }, []);


  return (
      <>
        <BrowserRouter>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route exact path="/">
                <div
                    className={classnames(
                        "App",
                        window.screen.width <= 1279 ? "m" : ""
                    )}
                >
                  <Head/>
                  <Technology/>
                  <EconomicModelApplicationScenario/>
                  <Team/>
                  <Strategic/>
                  <Road/>
                  <Join/>
                  <Foot/>
                  {
                    browserType === "chrome" &&
                      <div className="widget" style={{display: `${widgetShow ? "block" : "none"}`}}>
                        <div className="close">
                          <span onClick={() => setWidgetShow(!widgetShow)}>×</span>
                        </div>
                        <div id="crypto-widget-CoinList" data-design="classic" data-coins="ares-protocol"></div>
                      </div>
                  }
                  <Launch />
                </div>
              </Route>

              <Route path="/whitepaper/:lang" component={Whitepaper} />
              <Route path="/admin" component={backend}/>
              <Route path="/mars" component={marsApp}/>
            </Switch>
          </Suspense>
        </BrowserRouter>
      </>
  );
}

export default App;
