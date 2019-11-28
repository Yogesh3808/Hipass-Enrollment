import React from 'react'
import '../../Claims/Dashboard/styles.css'
import moment from 'moment';

export class AuditSummary extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            claimsAudit: [],
            SubTotal : 0,
            VeriTotal : 0,
            InBizstockTotal : 0,
            PenTotal : 0,
            RejTotal : 0,
            errTotal : 0
        }

        this.getData = this.getData.bind(this)
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        let query = `{
            ClaimsDailyAudit {
              FileID
              filename
              Submitted
              Rejected
              Pending
              Verified
              Error
              InBizstock
            }
            ClaimsDailyAuditCount {
                SubTotal
                VeriTotal
                InBizstockTotal
                PenTotal
                RejTotal
                errTotal
            }
        }`

        fetch("http://localhost:4000/graphQl", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({query: query})
        })
        .then(res => res.json())
        .then(res => {
            if(res.data){
                this.setState({
                    claimsAudit: res.data.ClaimsDailyAudit,
                    SubTotal : res.data.ClaimsDailyAuditCount[0].SubTotal,
                    VeriTotal : res.data.ClaimsDailyAuditCount[0].VeriTotal,
                    InBizstockTotal : res.data.ClaimsDailyAuditCount[0].InBizstockTotal,
                    PenTotal : res.data.ClaimsDailyAuditCount[0].PenTotal,
                    RejTotal : res.data.ClaimsDailyAuditCount[0].RejTotal,
                    errTotal : res.data.ClaimsDailyAuditCount[0].errTotal
                })
            }
        })
        .catch(err => {
            console.log(err)
        });
    }

    renderSearchBar(){
        return(
            <div className="row">
                <input type="text" name="name" className="input-style" placeholder="Search Transaction Details"/>
            </div>
        )
    }

    renderTransactions(){
        let row = []
        const data = this.state.claimsAudit;

        data.forEach((d) => {
            row.push(
                <tr>
                    <td style={{color:"#6AA2B8"}}>{d.filename}</td>
                    <td>{d.Submitted}</td>
                    <td>{d.InBizstock}</td>
                    <td>{d.Rejected}</td>
                    <td>{d.Error}</td>
                    <td>{d.Pending}</td>
                    <td>{d.Verified}</td>
                </tr>
            )
        });
        return(
            <table className="table table-bordered claim-list summary-list">
                <thead>
                    <tr className="table-head">
                        <td className="table-head-text">File Name</td>
                        <td className="table-head-text list-item-style">Submitted</td>
                        <td className="table-head-text list-item-style">InBiztalk</td>
                        <td className="table-head-text list-item-style">Rejected PreProcess</td>
                        <td className="table-head-text list-item-style">Error in PreProcess</td>
                        <td className="table-head-text list-item-style">Pending in Preprocess</td>
                        <td className="table-head-text list-item-style">In Facets</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Totals</td>
                        <td>{this.state.SubTotal}</td>
                        <td>{this.state.VeriTotal}</td>
                        <td>{this.state.InBizstockTotal}</td>
                        <td>{this.state.PenTotal}</td>
                        <td>{this.state.RejTotal}</td>
                        <td>{this.state.errTotal}</td>
                    </tr>
                    {row}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div>
                {this.renderSearchBar()}
                {this.renderTransactions()}
            </div>
        );
    }
}