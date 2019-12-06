import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Strings from './helpers/Strings';
import { EnrollmentInbound } from './app/containers/Claims/EnrollmentInbound';
import { Sidebar } from './app/components/Sidebar';
import { EnrollmentDetails } from './app/containers/Enrollment_details';
import { Header } from './app/components/Header';
import { Files_834 } from './app/containers/Files_834';
import { EnrollmentErrors } from './app/containers/Enrollment_errors';
import { EligibilityErrorsDelta } from './app/containers/Eligibility_error_delta';

const $ = window.$;
const routing = (
    <Router>
        <Header/>
        <div className="container-fluid background">
            <div className="row">
                <div className="col-2 nopadding white-background">
                    <Sidebar />
                </div>
                <div className="col-10 container-fluid" style={{height : $(window).height()}}>
                    <Route exact path="/" component={EnrollmentInbound} />
                    <Route path={'/'+ Strings.claimsDashboard_834} component={EnrollmentInbound} />
                    <Route path={'/'+ Strings.claimsDashboard_834_details + '/:new_path'} component={Files_834}/>
                    <Route path={'/'+ Strings.EnrollmentError  + '/:new_path'} component={Files_834} />
                    <Route path={'/'+ Strings.EnrollmentErrors} component={EnrollmentErrors} />
                    <Route path={'/'+ Strings.EnrollmentDetails} component={EnrollmentDetails} />
                    <Route path={'/'+ Strings.EligibilityErrorsDelta} component={EligibilityErrorsDelta} />
                </div>
            </div>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
