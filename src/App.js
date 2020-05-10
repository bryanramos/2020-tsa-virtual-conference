import * as React from 'react';
import './App.css';
import styled from 'styled-components';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Header from './components/static/Header';
import { Bounds } from './components/static/Bounds';
import { PageShell } from './PageShell';
import * as Constants from './Constants';
import * as Pages from './components/pages';
import Footer from './components/static/Footer';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const MainContent = styled.main`
    flex: 1 0 auto;
`;

export default function App() {
    return (
        <React.Fragment>
            <span style={{display: "none"}}>Created by Bryan Ramos: Go Texas TSA!</span>
            <Page>
                <BrowserRouter>
                    <Header
                        title={Constants.SiteName}
                        root={Constants.Rootpath}
                    />
                    <MainContent>
                        <Bounds>
                            <Switch>
                                <Route exact={true} path={Constants.Rootpath} component={PageShell(Pages.Home)} />
                                <Route exact={true} path={Constants.Schedule} component={PageShell(Pages.Schedule)} />
                                <Route exact={true} path={Constants.OfficerElections} component={PageShell(Pages.OfficerElections)} />
                                <Route exact={true} path={Constants.BODElections} component={PageShell(Pages.BODElections)} />
                                <Route exact={true} path={Constants.Disclaimer} component={PageShell(Pages.Disclaimer)} />
                            </Switch>
                        </Bounds>
                    </MainContent>
                    <Footer 
                        title={Constants.AssociationName}
                        root={Constants.Rootpath}
                        disclaimer={Constants.Disclaimer}
                    />
                </BrowserRouter>
            </Page>
        </React.Fragment>
    );
}
