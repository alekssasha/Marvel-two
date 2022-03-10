import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsListPage = lazy(() => import('../pages/ComicsListPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout'));
const SingleComicLayout = lazy(() => import('../pages/SingleComicLayout'));
const Page404 = lazy(() => import('../pages/404'));

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path={'/'}>
                                <MainPage />
                            </Route>
                            <Route exact path={'/comics'}>
                                <ComicsListPage />ƒ
                            </Route>
                            <Route exact path="/comics/:comicId">
                                <SingleComicPage />
                            </Route>
                            <Route exact path="/comics/:id">
                                <SinglePage Component={SingleComicLayout} dataType='comic'/>
                            </Route>
                            <Route exact path="/characters/:id">
                                <SinglePage Component={SingleCharacterLayout} dataType='character'/>
                            </Route>
                            <Route path={'*'}>
                                <Page404 />
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;