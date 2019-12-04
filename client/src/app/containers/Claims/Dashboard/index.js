import React from 'react';
import './styles.css';
import {Pie, Bar} from 'react-chartjs-2';
import moment from 'moment';
import {Files} from '../../Files';
import Urls from '../../../../helpers/Urls';

const data = {
	labels: [
		'Accepted Claims',
		'Rejected Claims'
	],
	datasets: [{
		data: [310,50],
		backgroundColor: [
		'#139DC9',
		'#83D2B4'
		],
		hoverBackgroundColor: [
		'#139DC9',
		'#83D2B4'
		]
    }],
    flag:''
};

const second_data = {
	labels: [
		'Accepted Claims',
		'Rejected Claims'
	],
	datasets: [{
		data: [100, 100, 70, 20, 50, 20],
		backgroundColor: [
            '#139DC9',
            '#83D2B4',
            '#9DC913',
            '#EC6236',
            '#C9139D',
            'blue',
		],
		hoverBackgroundColor: [
            '#139DC9',
            '#83D2B4',
            '#9DC913',
            '#EC6236',
            '#C9139D',
            'blue',
		]
    }],
    flag:''
};


const bardata = {
    labels: ['January', 'February', 'March', 'April'],
    showFile: false,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#139DC9',
        borderColor: '#139DC9',
        borderWidth: 1,
        hoverBackgroundColor: '#139DC9',
        hoverBorderColor: '#139DC9',
        data: [65, 59, 80, 81]
      },
      {
        label: 'My second dataset',
        backgroundColor: '#83D2B4',
        borderColor: '#83D2B4',
        borderWidth: 1,
        hoverBackgroundColor: '#83D2B4',
        hoverBorderColor: '#83D2B4',
        data: [45, 56, 55, 40]
      }
    ],
    legend: {
        display: false
    }
  };

export class Claims extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            claimsList : [],
            summaryList : [],
            apiflag: this.props.apiflag
        }

        this.showFile = this.showFile.bind(this)
        this.renderSummary = this.renderSummary.bind(this)
        // this.getData = this.getData.bind(this)
    }

    componentWillReceiveProps(){
        this.setState({
            apiflag: this.props.apiflag
        })
        setTimeout(() => {
            this.getData()
        }, 50);
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        let query = `{
            FileInTake{
              FileName
              FileDate
              ExtraField2
              Submitter_N103
              Receiver_N103
            }
            ClaimCount {
                SubCount
            }
            ClaimAccCount {
                AccCount
            }
            ClaimRejCount {
                RejCount
            }
            ClaimPaidCount {
                PaidCount
            }
            ClaimDeniedCount {
                DeniedCount
            }
            FileInCount {
                totalFile
            }
            FileFailedFileCount {
                FailedFileCount
            }
        }`
        
        if(this.state.apiflag){
            query = `{
                FileInTake835 {
                  FileName
                  FileDate
                  ExtraField2
                  Submitter_N103
                  Receiver_N103
                }
            }`
            console.log("hey here it is !!", JSON.stringify(this.props.state))
        }

        fetch(Urls.base_url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({query: query})
        })
            .then(res => res.json())
            .then(res => {
                let array = []
                let summary = []
                let data = res.data
                let iterator = data.FileInTake
                if(this.state.apiflag){
                    iterator = data.FileInTake835
                }

                iterator.forEach(item => {
                    array.push({
                        name : item.FileName,
                        date : item.FileDate,
                        status : item.ExtraField2,
                        submitter : item.Submitter_N103,
                        receiver : item.Receiver_N103
                    })
                })

                summary = [
                    {name:'Claims Queue', value : 250},
                    {name:'Work in Progress', value : 123},
                    {name:'Total Files', value : data.FileInCount ? data.FileInCount[0].totalFile : '' },
                    {name:'Submitted Claims', value : data.ClaimCount ? data.ClaimCount[0].SubCount : '' },
                    {name:'Paid Claims', value : data.ClaimPaidCount ? data.ClaimPaidCount[0].PaidCount : '' },
                    {name:'Accepted Claims', value : data.ClaimAccCount ? data.ClaimAccCount[0].AccCount : '' },
                    {name:'Failed File Load', value : data.FileFailedFileCount ? data.FileFailedFileCount[0].FailedFileCount : '' },
                    {name:'Rejected Claims', value : data.ClaimRejCount ? data.ClaimRejCount[0].RejCount : '' },
                    {name:'Partial Paid Claims', value : data.ClaimDeniedCount ? data.ClaimDeniedCount[0].DeniedCount : ''}
                ]

                this.setState({
                    claimsList: array,
                    summaryList: summary
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    renderSearchBar(){
        return(
            <div className="row">
                <input type="text" name="name" className="input-style" placeholder="Search Claim"/>
            </div>
        )
    }

    renderTableHeader(){
        return(
            <tr className="table-head">
                <td className="table-head-text">File Name</td>
                <td className="table-head-text list-item-style">File Date</td>
                <td className="table-head-text list-item-style">State</td>
                <td className="table-head-text list-item-style">Submitter</td>
                <td className="table-head-text list-item-style">Receiver</td>
            </tr>
        )
    }

    renderCharts() {
        return(
            <div className="row chart">
                <div className="col-6">
                    <span>Total</span>
                    <Pie data={data}
                        options={{
                            elements: {
                                arc: {
                                    borderWidth: 0
                                }
                            },
                            legend: {
                                display: false,
                            }
                        }}
                        width={100}
                        height={60}/>
                </div>
                <div className="col-6">
                    <span>Response Time</span>
                    <Bar
                        data={bardata}
                        width={100}
                        height={60}
                        options={{
                            legend: {
                                display: false,
                            }
                        }}/>
                </div>
            </div>
        )
    }

    renderList(){
        let row = []
        const data = this.state.claimsList;
        data.forEach((d) => {
            row.push(
                <tr>
                    <td className="bold-text">{d.name}</td>
                    <td className="list-item-style bold-text">{moment(d.date).format('DD/MM/YYYY')}<br/>{moment(d.date).format('h:m a')}</td>
                    <td className={"list-item-style bold-text " + (d.status == 'Errors' || d.status == 'File Error' ? 'red ' : (d.status == 'Verified' ? 'green ' : ''))}>{d.status}</td>
                    <td className="list-item-style bold-text">{d.submitter}</td>
                    <td className="list-item-style bold-text">{d.receiver}</td>
                </tr>
            )
        });
    
        return (
            <table className="table table-bordered claim-list">
                {this.renderTableHeader()}
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }

    showFile(name){
        this.setState({
            showFile: true,
            flag : name
        })
    }

    renderSummary(){
        let row = []
        const data = this.state.summaryList;

        data.forEach((d) => {
            row.push(
                <tr>
                    <td className="bold-text">{d.name}</td>
                    <td><a href="#" onClick={() => {this.showFile(d.name)}} className={
                        (d.name == 'Total Files' || d.name == 'Submitted Claims') ? 'blue bold-text summary-values' :
                        (d.name == 'Paid Claims' || d.name == 'Accepted Claims') ? 'green bold-text summary-values' :
                        (d.name == 'Claims Queue' || d.name == 'Work in Progress') ? 'dark_red bold-text summary-values' :
                        (d.name == 'Failed File Load' || d.name == 'Rejected Claims') ? 'red bold-text summary-values' :
                        (d.name == 'Partial Paid Claims') ? 'orange bold-text summary-values' : ''
                    }>{
                        d.value
                    }</a></td>
                </tr>
            )
        });
    
        return (
            <table className="table table-bordered claim-list summary-list">
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }

    renderChart(){
        return(
            <Pie data={second_data}
                options={{
                    elements: {
                        arc: {
                            borderWidth: 0
                        }
                    },
                    legend: {
                        display: false,
                    }
                }}
                width={250}
                height={200}/>
        )
    }

    render() {
        return (
            <div>
                {this.renderSearchBar()}
                {
                    this.state.showFile 
                    ? 
                    <Files
                        flag={this.state.flag}
                    />
                    :
                    <div className="row">
                        <div className="col-9">
                            {this.renderCharts()}
                            {this.renderList()}
                        </div>
                        <div className="col-3">
                            {this.renderSummary()}
                            {this.renderChart()}
                        </div>
                    </div>
                }
            </div>
        );
    }
}