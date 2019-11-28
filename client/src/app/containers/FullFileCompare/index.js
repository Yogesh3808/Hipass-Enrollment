import React from 'react';
import { Topbar } from '../../components/Topbar';
import '../Files/files-styles.css';
import moment from 'moment'

let enrollmentCount = 0

export class FullFileCompare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstfile: {},
            secondfile: {},
            rCount: 0,
            date: '',
            table_data : [],
            errorCount : [],
        }

        this.getData = this.getData.bind(this)
        this.renderTable = this.renderTable.bind(this)
    }

    componentDidMount() {
        this.getData()
        setTimeout(() => {
            this.getData(1)
            setTimeout(() => {
                this.getErrorCount()
                setTimeout(() => {
                    this.getCounts()
                }, 100);
            }, 100);
        }, 100);
    }

    getCounts(){
        let query = '{ CompareFileDetail(file1: "First_file.txt", file2: "Second_File.txt") { totalfilecount RCount seqid INS_Insurer_Status SubscriberNo MemberFName MemberLName StreetAddress City State PostalCode dob gender DX Subscriber_Home_Phone Ref_Master_Policy_No INS_Maintenance_Reason_code DTP_336_Employment_BeginDT NM109_Indetificationcode Plan_Coverage_Level INS_Insurer_Benefit_status startdate enddate } }'

        fetch('http://localhost:4000/graphQl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query: query })
        })
            .then(res => res.json())
            .then(r => {
                let data = []
                data = r.data.CompareFileDetail
                this.setState({
                    rCount : data[0].RCount,
                    table_data: data
                })
            })
            .then(data => console.log('data returned:', data));   
    }

    getErrorCount(){
        let query = '{ CompareFileError834 { dbdesc error_desc RCount } }'
        fetch('http://localhost:4000/graphQl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query: query })
        })
            .then(res => res.json())
            .then(r => {
                let data = []
                data = r.data.CompareFileError834
                this.setState({
                    errorCount : data
                })
            })
            .then(data => console.log('data returned:', data));
    }

    getData(flag) {
        let query = '{ CompareFileHeader1_834 { FileName fileDt total_file Total_enrollment addition Change term Auditcount MemberCount DependantCount } }'
        if (flag) {
            query = '{ CompareFileHeader2_834 { FileName fileDt total_file Total_enrollment addition Change term Auditcount MemberCount DependantCount } }'
        }

        fetch('http://localhost:4000/graphQl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query: query })
        })
            .then(res => res.json())
            .then(r => {
                let data = []
                data = r.data.CompareFileHeader1_834
                if(flag){
                    data = r.data.CompareFileHeader2_834
                }

                try {
                    enrollmentCount = enrollmentCount + data[0].Total_enrollment
                } catch (error) {
                    
                }

                if (flag) {
                    this.setState({
                        secondfile: data[0],
                        date: data[0].fileDt
                    })
                } else {
                    this.setState({
                        firstfile: data[0]
                    })
                }
            })
            .then(data => console.log('data returned:', data));
    }

    renderHeader() {
        return (
            <div className="row form-group">
                <div className="col-2" style={{ fontSize: "12px" }}>LoadMonth</div>
                <div className="col-2" style={{ fontSize: "12px" }}>Enrollment Count</div>
                <div className="col-2" style={{ fontSize: "12px" }}>Count of differences</div>
            </div>
        )
    }

    renderSecondHeader() {
        return (
            <div className="row form-group">
                <div className="col-2" style={{ fontSize: "10px", color: "rgb(19, 157, 201)" }}>Total Eligibility in X12 834 File</div>
                <div className="col-2" style={{ fontSize: "10px", color: "rgb(19, 157, 201)" }}>Members</div>
                <div className="col-2" style={{ fontSize: "10px", color: "rgb(19, 157, 201)" }}>Total Eligibility FAME</div>
                <div className="col-2" style={{ fontSize: "10px", color: "rgb(19, 157, 201)" }}>Members</div>
                <div className="col-2" style={{ fontSize: "10px", color: "rgb(19, 157, 201)" }}>Eligibility in Qnxt</div>
                <div className="col-2" style={{ fontSize: "10px", color: "rgb(19, 157, 201)" }}>Members</div>
            </div>
        )
    }

    renderTableHeader() {
        return (
            <tr className="table-head">
                <td className="padding-around col-header-style">Subscriber No.</td>
                <td className="padding-around col-header-style">First Name</td>
                <td className="padding-around col-header-style">Last Name</td>
                <td className="padding-around col-header-style">Address</td>
                <td className="padding-around col-header-style">City</td>
                <td className="padding-around col-header-style">State</td>
                <td className="padding-around col-header-style">Postal Code</td>
                <td className="padding-around col-header-style">Dob</td>
                <td className="padding-around col-header-style">Gender</td>
                <td className="padding-around col-header-style">DX</td>
                <td className="padding-around col-header-style">Subscriber Home Phone</td>
                <td className="padding-around col-header-style">Ref Master Policy No</td>
                <td className="padding-around col-header-style">INS Maintenance Reason Code</td>
                <td className="padding-around col-header-style">Begin Date</td>
                <td className="padding-around col-header-style">Identification Code</td>
                <td className="padding-around col-header-style">Plan Coverage level</td>
                <td className="padding-around col-header-style">Insurer Status</td>
                <td className="padding-around col-header-style">Start Date</td>
                <td className="padding-around col-header-style">End Date</td>
            </tr>
        )
    }

    renderTable() {
        let row = []
        let data = this.state.table_data

        data.forEach((item) => {
            row.push(
                <tr>
                    <td className="padding-around col-style-normal">{item.SubscriberNo}</td>
                    <td className="padding-around col-style-normal">{item.MemberFName}</td>
                    <td className="padding-around col-style-normal">{item.MemberLName}</td>
                    <td className="padding-around col-style-normal">{item.StreetAddress}</td>
                    <td className="padding-around col-style-normal">{item.City}</td>
                    <td className="padding-around col-style-normal">{item.State}</td>
                    <td className="padding-around col-style-normal">{item.PostalCode}</td>
                    <td className="padding-around col-style-normal">{item.dob}</td>
                    <td className="padding-around col-style-normal">{item.gender}</td>
                    <td className="padding-around col-style-normal">{item.DX}</td>
                    <td className="padding-around col-style-normal">{item.Subscriber_Home_Phone}</td>
                    <td className="padding-around col-style-normal">{item.Ref_Master_Policy_No}</td>
                    <td className="padding-around col-style-normal">{item.INS_Maintenance_Reason_code}</td>
                    <td className="padding-around col-style-normal">{item.DTP_336_Employment_BeginDT}</td>
                    <td className="padding-around col-style-normal">{item.NM109_Indetificationcode}</td>
                    <td className="padding-around col-style-normal">{item.Plan_Coverage_Level}</td>
                    <td className="padding-around col-style-normal">{item.INS_Insurer_Benefit_status}</td>
                    <td className="padding-around col-style-normal">{item.startdate}</td>
                    <td className="padding-around col-style-normal">{item.enddate}</td>
                </tr>
            )
        });

        return (
            <table>
                {this.renderTableHeader()}
                {row}
            </table>
        )
    }

    renderView() {
        return (
            <div>
                { this.renderHeader() }
                { this.renderTopView() }
            </div>
        )
    }
    
    renderTopView() {
        return (
            <div className="row">
                <div className="col-2" style={{ align: "center" }}>{moment(this.state.date).format('MMM DD, hh:mm A')} <hr></hr></div>
                <div className="col-2" style={{ align: "center", fontSize: "45px", color: "red" }}>{enrollmentCount}</div>
                <div className="col-2" style={{ align: "center", fontSize: "45px", color: "rgb(19, 157, 201)" }}>{this.state.rCount}</div>
            </div>
        )
    }

    renderCountTable(){
        let row = []
        let data = this.state.errorCount
        data.forEach(element => {
            row.push(
                <tr>
                    <td>{element.error_desc}</td>
                    <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                        {element.RCount}
                    </td>
                </tr>
            )
            row.push(<div className="horizontal"></div>)
        }); 

        return(row)
    }

    renderSecondTopView() {
        return (
            <div class="row" style={{ fontSize: "13px" }}>
                <div className="col-5 row extra">
                    <table class="inline col-11">
                        <tbody>
                            <tr>
                                <th style={{ color: "rgb(19, 157, 201)", textAlign: "left" }}> {this.state.firstfile.FileName} </th>
                                <th style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "rgb(19, 157, 201)" }}>Count</th>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Total Enrollment</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.firstfile.Total_enrollment}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Addition</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.firstfile.addition}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Change</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.firstfile.Change}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Term</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.firstfile.term}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Audit Count</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.firstfile.Auditcount}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Member Count</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.firstfile.MemberCount}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Dependant Count</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.firstfile.DependantCount}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="col-1"/>
                </div>

                <div className="col-5 row extra">
                    <table className="inline col-11">
                        <tbody><tr>
                            <th style={{ color: "rgb(19, 157, 201)", textAlign: "left" }}> {this.state.secondfile.FileName} </th>
                            <th style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "rgb(19, 157, 201)" }}>Count</th>
                        </tr>
                            <tr>
                                <td>Total Enrollment</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.secondfile.Total_enrollment}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Addition</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.secondfile.addition}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Change</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.secondfile.Change}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Term</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.secondfile.term}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Audit Count</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.secondfile.Auditcount}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Member Count</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.secondfile.MemberCount}
                                </td>
                            </tr>
                            <div className="horizontal"></div>
                            <tr>
                                <td>Dependant Count</td>
                                <td style={{ paddingLeft: "30px", padding: "5px", textAlign: "right", color: "white", background: "rgb(19, 157, 201)" }}>
                                    {this.state.secondfile.DependantCount}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="col-1"/>
                </div>

                <div className="col-2 row extra"/>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <Topbar onSelect={this.onSelect} />
                <br></br>
                {this.renderView()}
                <br></br>
                {this.renderSecondTopView()}
                <br></br><br></br>
                {this.state.table_data && this.state.table_data.length > 0  ? this.renderTable() : null}
            </div>
        );
    }
}