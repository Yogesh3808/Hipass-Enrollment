import React from 'react'
import { Sidebar } from '../components/Sidebar';
import {Claims} from './Claims/Dashboard';
import {RealTime} from './Eligibility/RealTime';
import '../components/Sidebar/styles.css'
import Strings from '../../helpers/Strings'
import { TradingPartnerConfiguration } from './TradingPartnerConfiguration';
import { SubmitClaim } from './SubmitClaim';
import { Files } from './Files';
import { AuditSummary } from './Claims/AuditSummary';
import { ClaimsError } from './Claims/ClaimsError';
import { MatchClaims } from './Claims/MatchClaims';
import { ResearchQueue } from './ResearchQueue';
import { EnrollmentInbound } from './Claims/EnrollmentInbound';
import { AssignedDetails } from './Claims/AssignedDetails';
import { EditConfiguration } from './EditConfigurations';
import { ViewEdit } from './ViewEdit';
import { FullFileCompare } from './FullFileCompare';
import { Files_834 } from './Files_834'; 
import {EnrollmentDetails} from './Enrollment_details'
import {EnrollmentErrors} from './Enrollment_errors'

export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flag: Strings.claimsDashboard_834
        }
    
        this.handleFlag = this.handleFlag.bind(this)
    }

    handleFlag(key){
        this.setState({
            flag : key 
        })

        setTimeout(() => {
            this.setState({
                flag : key 
            })
        }, 50);
    }

    render() {
        return (
            <div className="container-fluid background">
                <div className="row">
                    <div className="col-2 nopadding white-background">
                        <Sidebar
                            handleFlag={this.handleFlag}
                        />
                    </div>
                    <div className="col-10" style={{height : $(window).height()}}>
                        {
                            (this.state.flag == Strings.realTime || this.state.flag == Strings.realTime_276 )? <RealTime apiflag={this.state.flag == Strings.realTime_276 ? 1 : 0}/> : 
                            this.state.flag == Strings.tradingPartnerConfiguration ? <TradingPartnerConfiguration/> : 
                            this.state.flag == Strings.submitClaims ? <SubmitClaim/> :
                            this.state.flag == Strings.claimDetails ? <Files/> :
                            this.state.flag == Strings.claimsAudit ? <AuditSummary/> :
                            this.state.flag == Strings.claimsError ? <ClaimsError/> :
                            this.state.flag == Strings.matchClaims ? <MatchClaims/> :
                            this.state.flag == Strings.researchQueue ? <ResearchQueue/> :
                            this.state.flag == Strings.claimsDashboard_834 ? <EnrollmentInbound /> :
                            this.state.flag == Strings.editConfiguration ? <EditConfiguration /> :
                            this.state.flag == Strings.viewEdit ? <ViewEdit /> :
                            this.state.flag == Strings.fullFile834 ? <FullFileCompare/> :
                            this.state.flag == Strings.claimsDashboard_834_details ? <Files_834 flag={"total"}/> :
                            this.state.flag == Strings.EnrollmentError ? <Files_834 flag={"error"}/> :
                            this.state.flag == Strings.EnrollmentDetails ? <EnrollmentDetails /> :
                            this.state.flag == Strings.EnrollmentErrors ? <EnrollmentErrors /> :
                            <EnrollmentInbound />
                        }
                    </div>
                </div>
            </div>
        );
    }
}