import React from 'react'
import '../../Claims/Dashboard/styles.css'
import moment from 'moment';

export class MatchClaims extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            claimsError: [],
            SubTotal : 0,
            VeriTotal : 0,
            InBizstockTotal : 0,
            PenTotal : 0,
            RejTotal : 0,
            errTotal : 0
        }
    }

    renderSearchBar(){
        return(
            <div className="row">
                <input type="text" name="name" className="input-style" placeholder="Search"/>
            </div>
        )
    }

    renderClaimsError(){
        return(
            <div class="table-responsive">
                <table className="table table-bordered claim-list">
                    <thead>
                        <tr className="table-head">
                            <td className="table-head-text">Match ID</td>
                            <td className="table-head-text">Seq ID</td>
                            <td className="table-head-text">Provider ID</td>
                            <td className="table-head-text">Subscriber ID</td>
                            <td className="table-head-text">Last Name</td>
                            <td className="table-head-text">First Name</td>
                            <td className="table-head-text">Amount</td>
                            <td className="table-head-text">Stmt Begin</td>
                            <td className="table-head-text">Stmt End</td>
                            <td className="table-head-text">Ext Claim ID</td>
                            <td className="table-head-text">Status</td>
                            <td className="table-head-text">Mark Resend</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>10001</td>
                            <td>2000107466</td>
                            <td>1942202221</td>
                            <td>STILEY</td>
                            <td>NANCY</td>
                            <td>$328.00</td>
                            <td>4/24/2014 1:16:18 PM</td>
                            <td>4/28/2014 3:06:16 PM</td>
                            <td>109664692C13196D1</td>
                            <td>Failed</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>LName</td>
                            <td>10002</td>
                            <td>2000107466</td>
                            <td>1942202221</td>
                            <td>STILY</td>
                            <td>NANCY</td>
                            <td>$328.00</td>
                            <td>4/24/2014 1:16:18 PM</td>
                            <td>4/28/2014 3:06:16 PM</td>
                            <td>109664692C13196D1</td>
                            <td>XC Sent</td>
                            <td><button class="btn btn-sm btn-primary btn-block" type="resend">Match</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>10003</td>
                            <td>2000107928</td>
                            <td>1942202921</td>
                            <td>SELLERS</td>
                            <td>CULLAN</td>
                            <td>$1375.00</td>
                            <td>8/27/2015 1:16:18 PM</td>
                            <td>8/27/2015 3:06:16 PM</td>
                            <td>109664692C13196D1</td>
                            <td>Failed</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>All Match</td>
                            <td>10004</td>
                            <td>2000107928</td>
                            <td>1942202921</td>
                            <td>SELLERS</td>
                            <td>CULLAN</td>
                            <td>$1375.00</td>
                            <td>8/27/2015 1:16:18 PM</td>
                            <td>8/27/2015 3:06:16 PM</td>
                            <td>109664692C13196D1</td>
                            <td>XC Sent</td>
                            <td><button class="btn btn-sm btn-primary btn-block" type="resend">Match</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>10005</td>
                            <td>2000107928</td>
                            <td>1942202986</td>
                            <td>BREAUX</td>
                            <td>DANEIL</td>
                            <td>$279.00</td>
                            <td>7/20/2015 1:16:18 PM</td>
                            <td>7/20/2015 3:06:16 PM</td>
                            <td>109664692C13196D4</td>
                            <td>Failed</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Provider</td>
                            <td>10006</td>
                            <td>2000107934</td>
                            <td>1942202986</td>
                            <td>BREAUX</td>
                            <td>DANEIL</td>
                            <td>$279.00</td>
                            <td>7/20/2015 1:16:18 PM</td>
                            <td>7/20/2015 3:06:16 PM</td>
                            <td>109664692C13196D4</td>
                            <td>XC Sent</td>
                            <td><button class="btn btn-sm btn-primary btn-block" type="resend">Match</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderSearchBar()}
                {this.renderClaimsError()}
            </div>
        );
    }
}