import React from 'react'
import './styles.css'
import Strings from '../../../helpers/Strings';


export class Sidebar extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            claimsArray : [
                {value: 'Claims Dashboard - 837', key: 'claimsDashboard'},
                {value: 'Claims Audit Summary', key: 'claimsAudit'},
                {value: 'Claim Details', key: 'claimDetails'},
                {value: 'Claims Error', key: 'claimsError'},
                {value: 'Match Claims', key: 'matchClaims'},
                {value: 'Submit Claims', key: 'submitClaims'},
                {value: 'Research Queue', key: 'researchQueue'}
            ],
            enrollmentArray: [
                {value: '834 Enrollment Dashboard', key: 'claimsDashboard_834'},
                {value: 'Enrollment Details', key: 'claimsDashboard_834_details'},
                {value: 'Enrollment Error', key: 'Enrollment_Error'},
                // {value: 'Full File Comparison Dashboard', key: 'fullFile834'},
            ],
            pageArray : [
                {value: 'Page 1'},
                {value: 'Page 2'},
                {value: 'Page 3'},
            ],
            transactionArray: [
                {value: 'Validation'},
            ],
            tradingPartner: [
                // {value: 'Trading Partner Management', key: 'tradingPartnerConfiguration'},
                // {value: 'Configure Custom Edit', key: 'editConfiguration'},
                // {value: 'View Custom Edit', key: 'viewEdit'},
                {value: 'Enrollment Details', key:'EnrollmentDetails'},
            ],
            eligibility: [
                {value: 'Real Time - 270', key: 'realTime'},
                {value: 'Real Time - 276', key: 'realTime_276'},
            ],
            fullfile: [
                {value: '834 Full File Compare', key: 'fullFile834'},
            ]
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(key){
        console.log('this is the key : ' + key)
        this.props.handleFlag(key)
    }

    renderItems(key, value, array){
        let row = []
        array.forEach(element => {
            row.push(
                <li>
                    <a href="#" onClick={() => {this.handleClick(element.key)}}>{element.value}</a>
                </li>
            )
        });
        return(
            <li className="active padding">
                <a href={'#' + key} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">{value}</a>
                <ul className="collapse list-unstyled" id={key}>
                    {row}
                </ul>
            </li>
        )
    }

    renderSidebarItems(){
        return(
            <div>
                {this.renderItems(Strings.ENR_MANAGEMENT, 'Enrollment Management', this.state.enrollmentArray)}
                {this.renderItems(Strings.TRAD_MANAGEMENT, '834 Full File Compare', this.state.tradingPartner)}
                {/* {this.renderItems(Strings.CLAIMS, 'Claims Management', this.state.claimsArray)}
                {this.renderItems(Strings.ELIGIBILITY, 'Eligibility Management', this.state.eligibility)}
                {this.renderItems(Strings.EDIT_CLAIM, 'Edit / Resubmit Claim', this.state.pageArray)}
                {this.renderItems(Strings.FULL_FILE, 'Full File Compare', this.state.fullfile)}
                {this.renderItems(Strings.TRAN_MANAGMENT, 'Transaction Management', this.state.transactionArray)}
                {this.renderItems(Strings.PROC_MANAGEMENT, 'Process Management', this.state.pageArray)}
                {this.renderItems(Strings.REP_MANAGEMENT, 'Report Generation', this.state.pageArray)}
                {this.renderItems(Strings.ACK_MANAGEMENT, 'Acknowledgment Generation', this.state.pageArray)} */}
            </div>
        )
    }

    renderTabs(){
        return(
            <div id="tabs">
                <div className="row p">
                    <div className="col-6 p nopadding">
                        <p className="p smaller-font">Inbound</p>
                        <hr className="underline p"/>
                    </div>

                    <div className="col-6 p nopadding">
                        <p className="p smaller-font">Outbound</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    {this.renderTabs()}
                    {this.renderSidebarItems()}
                </ul>
            </nav>
        );
    }
}