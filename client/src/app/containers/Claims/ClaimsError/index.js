import React from 'react'
import '../../Claims/Dashboard/styles.css'
import moment from 'moment';

export class ClaimsError extends React.Component{
    
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

        this.getData = this.getData.bind(this)
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        let query = `{
            ClaimRejCountData {
              ClaimLevelErrors,
              BillingProviderLastName,
              FileName,
              Member_Account_Number,
              SubscriberLastName, 
              SubscriberFirstName
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
                    claimsError: res.data.ClaimRejCountData,
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
                <input type="text" name="name" className="input-style" placeholder="Search"/>
            </div>
        )
    }

    renderClaimsError(){
        let row = []
        const data = this.state.claimsError;

        data.forEach((d) => {
            row.push(
                <tr>
                    <td>{d.ClaimLevelErrors}</td>
                    <td>{d.BillingProviderLastName}</td>
                    <td>{d.FileName}</td>
                    <td>{d.Member_Account_Number}</td>
                    <td>{d.SubscriberLastName}</td>
                    <td>{d.SubscriberFirstName}</td>
                    <td>
                        <select id="sel1">
                            <option value="0">Select</option>
                            <option value="1">John Wilson</option>
                            <option value="2">John Smith</option>
                            <option value="3">Sarah Thompson</option>
                            <option value="3">Andrew parker</option>
                        </select>
                    </td>
                </tr>
            )
        });
        return(
            <table className="table table-bordered claim-list summary-list">
                <thead>
                    <tr className="table-head">
                        <td className="table-head-text">Reason</td>
                        <td className="table-head-text list-item-style">BillingProLastName</td>
                        <td className="table-head-text list-item-style">FileName</td>
                        <td className="table-head-text list-item-style">Member_Acc_No</td>
                        <td className="table-head-text list-item-style">SubscriberLName</td>
                        <td className="table-head-text list-item-style">Subscriber FName</td>
                        <td className="table-head-text list-item-style">Assign</td>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
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