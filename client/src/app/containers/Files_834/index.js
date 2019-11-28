import React from 'react';
import '../Files/files-styles.css';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
export class Files_834 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intakeClaims: [],
            page: 1,
            initialPage: 0,
            lineData: [],
            file: {},
            memberInfo: {},
            File_ID : '',
            subscriberNo : '',
            enrollment_type : '',
            plan_code : '',
            coverage_data: [],
            error_status: '',
            Error_Field:'',
        }

        this.getData = this.getData.bind(this)
        this.getClaimData = this.getClaimData.bind(this)
        this.renderList = this.renderList.bind(this)
        this.sortData = this.sortData.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.Ignore = this.Ignore.bind(this)
        this.Saved = this.Saved.bind(this)
        
    }

    componentDidMount() {
        this.getData()
    }
    

    Ignore() {
        console.log(this.state.File_ID);
        var query = 'mutation{ SP_Ignore834errordetails(FileId :"'+ this.state.File_ID +'" '+ 'Nm109 :"'+this.state.subscriberNo +'"'+   
         ')'+
'}'
    fetch('http://localhost:4000/graphQl', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
   },
   body: JSON.stringify({
     query
     
   })
 })
   .then(r => r.json())
   .then(data => console.log('data returned:', data));
    }

    
    Saved() {
        console.log(this.state.subscriberNo);
        var Updatefild='';
        if (this.state.Error_Field == "Subscriber")
        {
            Updatefild = this.state.subscriberNo;
            
        }
        if (this.state.Error_Field == "PolicyNo")
        {
            Updatefild = this.state.PolicyNo;
            
        }
        var query = 'mutation{ SP_Update834errordetails(FileId :"'+ this.state.File_ID +'" '+ 'Nm109 :"'+this.state.subscriberNo +'" '+ ' Errordesc :"'+this.state.Error_Field +'" '+ 'Value :"'+ Updatefild +'"'+   
        ')'+
'}'
   fetch('http://localhost:4000/graphQl', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query
    
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
      
    }
  
  
    getData() {
        let query = '{SP_834FilecountwisedetailsGQL(Type:'+'"'+this.props.flag+'"'+'){ FileName FileID  sender receiver FileStatus CreateDateTime dcount  }}'
        console.log('query : ' + query)
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
                data = r.data.SP_834FilecountwisedetailsGQL

                this.setState({
                    intakeClaims: data
                })

                setTimeout(() => {
                    this.sortData()
                }, 50);
            })
            .then(data => console.log('data returned:', data));
    }

    getClaimData(FileID, ClaimID) {
        fetch('http://localhost:4000/graphQl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: "{ IntakeClaimLineDataFileIDClaimID(FileID:\"" + FileID + "\",ClaimID:\"" + ClaimID + "\"){ ClaimID LX SVD02 ServiceDate SVD03 SVD05 ErrorCode type_of_adjustment adjustment RemainigAmt RemainingPatientLiability } }"
            })
        })
            .then(res => res.json())
            .then(r => {
                console.log("Here is the data hurray : " + JSON.stringify(r))
                this.setState({
                    lineData: r.data.IntakeClaimLineDataFileIDClaimID
                })
            })
            .then(data => console.log('data returned:', data));
    }

    onClick(fileId){
        let query = '{ SP_834FileDetailsPagingGQL(Type :'+'"'+this.props.flag+'"'+', PageIndex:'+this.state.page+', FileID: '+fileId+') { SubscriberNo fileid Enrollment_type InsLineCode Insurer_Status TransCode MemberAmount Error CreateDateTime status1 } }'
        console.log("Query : " + query)
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
                data = r.data.SP_834FileDetailsPagingGQL
                console.log(data);
                this.sortData(fileId, data)
            })
            .then(data => console.log('data returned:', data));
    }

    sortData(fileId, data) {
        let files = {}
        let intakeClaims = this.state.intakeClaims

        if(fileId && data){
            files = this.state.claimsObj
            if (fileId in files) {
                files[fileId].array = []
                data.forEach(item => {
                    files[fileId].array.push(item)
                });
            }
        } else {
            intakeClaims.forEach(item => {
                files[item.FileID] = {
                    value: item,
                    array: []
                }
            })
        }

        this.setState({
            claimsObj: files
        })
    }

    Subscriber(event, key) {
       
        this.setState({
            [key]: event.target.value
        });
    }
    PolicyNo(event, key) {
       
        this.setState({
            [key]: event.target.value
        });
    }

    handleClick(fileId, subscriber, type) {
        let query = '{ SP_834FileHeaderDetails(FileID: '+'"'+fileId +'"'+', Subscriber:'+'"'+subscriber +'"'+', Type: '+type +') { FileName FileID sender receiver SubscriberNo MemberFName MemberLName Telephone StreetAddress City State PostalCode Enrollment_type dob gender InsLineCode MemberAmount EnrollmentStatus StartDate EndDate CreateDateTime relationship member_relationship_name } }'
 
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
                let data1 = []
                data1 = r.data1.SP_834FileHeaderDetails
              
             
                let coverage_data = []
                data1.forEach(element => {
                    coverage_data.push({
                        'startDate': element.StartDate,
                        'endDate': element.EndDate
                    })
                });

                this.setState({
                    file: file,
                    coverage_data: coverage_data
                })
            })
            .then(data => console.log('data returned:', data));

            let query1 = '{ SP_834EnrollementDetails(FileID: '+'"'+fileId +'"'+', Subscriber:'+'"'+subscriber +'") { FileName   FileID   sender   receiver   IdentificationCode   InsurerStatus   SubscriberNo   MemberFName   MemberLName   Telephone   StreetAddress   City   State   PostalCode   Enrollment_type   dob   gender   Emplymentstatus   CreateDateTime   INS_Insurer_relationship   member_relationship_name   Plan_Coverage_Level   DTP_336_Employment_BeginDT   Member_Policy_No   Department_Agency   Error_Field   N1_Plan_insurer_name } }'
        
            fetch('http://localhost:4000/graphQl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ query: query1 })
            })
                .then(res => res.json())
                .then(r => {
                    let data = []
                   data = r.data.SP_834EnrollementDetails
               
                    let file = [
                       {key : "File Name", value : data[0].FileName},
                        {key : "File Date", value : data[0].CreateDateTime},
                        {key : "Sender", value : data[0].sender},
                   // {key : "Receiver", value : data[0].receiver}     
                    ]
                  
                  var CheckError= this.state.error_status;
                  var SubscriberNo="";           
                  if(CheckError=="Missing subscriber ID")
                  {
                    SubscriberNo= <input onChange={(e) => this.subscriber(e, 'subscriberNo')} type='text' style={{width:"80px"}}></input>
                  }else{
                    SubscriberNo= data[0].SubscriberNo
                  }
                  var Member_Policy_No="";           
                  if(CheckError=="Missing member Policy Number")
                  {
                    Member_Policy_No= <input  onChange={(e) => this.PolicyNo(e, 'PolicyNo')} type='text' style={{width:"80px"}}></input>
                  }else{
                    Member_Policy_No= data[0].Member_Policy_No
                  }

                  var gender="";    
               
                  if(CheckError=="Missing subscriber demographic details. It could be either date of birth or gender information")
                  {
                    gender= <input type='text' style={{width:"80px"}}></input>
                  }else{
                    gender= data[0].gender
                  }
                    let memberInfo = [
                       {key : "First Name", value: data[0].MemberFName},
                        {key : "Last Name", value: data[0].MemberLName},
                        {key : "Telephone", value: data[0].Telephone},
                        {key : "Address", value: data[0].StreetAddress},
                        {key : "City", value: data[0].City},
                        {key : "State", value: data[0].State},
                        {key : "Postal Code", value: data[0].PostalCode},
                        {key : "Insurer Name", value: data[0].N1_Plan_insurer_name},
                        {key : "Dob", value: data[0].dob},
                        {key : "Gender", value: gender},                                            
                        {key : "Subscriber No",  value:SubscriberNo },
                        {key : "Department Agency", value: data[0].Department_Agency},
                        {key : "Policy No", value:Member_Policy_No},
                        {key : "Enrollment Type", value: data[0].Enrollment_type},
                        {key : "Employment Begin Date", value:data[0].DTP_336_Employment_BeginDT},
                        {key : "Insurer Status", value: data[0].InsurerStatus},
                        {key : "Relationship", value: data[0].member_relationship_name},
                        {key : "Employment Status", value: data[0].Emplymentstatus},
                   
                    
                      
                    ]
    
                    let coverage_data = []
                    data.forEach(element => {
                        coverage_data.push({
                            'startDate': element.StartDate,
                            'endDate': element.EndDate
                        })
                    });
    
                    this.setState({
                        file: file,
                        coverage_data: coverage_data,
                        memberInfo: memberInfo,
                        File_ID:fileId,
                        Error_Field:data[0].Error_Field,
                        
                    })
                })
                .then(data => console.log('data returned:', data));
    
    }

rendersearchbar()
{
    return(
        <div>
            <div className="row">
           
           <input type="text" name="name" className="input-style" placeholder="Search" />
       </div>
       <hr class="colorhr"></hr>
      
        </div>
    )
}

    renderTableHeader() {
             return (
         
            <div className="row">
                <div className="col-3 col-header" style={{fontWeight:"bold"}}>File Name</div>
                <div className="col-3 col-header" style={{fontWeight:"bold"}}>File Date</div>
                <div className="col-3 col-header" style={{fontWeight:"bold"}}>Submitter</div>
          {/*     <div className="col-2 col-header" style={{fontWeight:"bold"}}>Receiver</div>*/}
                <div className="col-3 col-header" style={{fontWeight:"bold"}}>File Status</div>
            </div>
        )
    }

    renderClaimsHeader() {
        return (
            <tr className="table-head claims-text">				
                <td className="table-head-text">Subscriber No</td>
                <td className="table-head-text">Enrollment Type</td>
                <td className="table-head-text list-item-style">Insurer Status</td>
                <td className="table-head-text list-item-style">Status</td>
                <td className="table-head-text list-item-style">Error Code</td>
            </tr>
        )
    }

    renderCoverageHeader() {
        return (
            <tr className="table-head">
              {/* <td className="table-head-text small-font">Subscriber No</td>*/} 
                <td className="table-head-text small-font">Enrollment Type</td>
                <td className="table-head-text  small-font list-item-style">Plan Code</td>
                <td className="table-head-text  small-font list-item-style">Coverage Start Date</td>
                <td className="table-head-text  small-font list-item-style">Coverage End Date</td>
            </tr>
        )
    }

    handlePageClick(data, fileId){
        let page = data.selected + 1
        this.setState({
            page : page
        })

        setTimeout(() => {
            this.onClick(fileId)
        }, 50);
    }

    renderList() {
        let row = []
        let col = []
        let data = this.state.claimsObj;
        let count = 0
        try {
            count = data[Object.keys(data)[0]].value.dcount / 10
            if(data[keys].value.dcount % 10 > 0){
                count = count + 1
            }
        } catch (error) {
            
        }

        Object.keys(data).map((keys) => {
            row.push(
                <div className="row">
                    <div className="col-3 col-style"><a href={"#" + data[keys].value.FileID} onClick={() => {this.onClick(data[keys].value.FileID)}} style={{ color: "#6AA2B8" }} data-toggle="collapse" aria-expanded="false">{data[keys].value.FileName}</a></div>
                    <div className="col-3 col-style">{moment(data[keys].value.CreateDateTime).format('DD/MM/YYYY')}<br />{moment(data[keys].value.CreateDateTime).format('h:m a')}</div>
                    <div className="col-3 col-style">{data[keys].value.sender}</div>
                 {/*   <div className="col-2 col-style">{data[keys].value.receiver}</div>*/}
                    <div className={"col-3 col-style"}>{data[keys].value.FileStatus}</div>
                </div>
            )

            {
                col = []
                data[keys].array.forEach(item => {
                    console.log(item.Insurer_Status);
                    col.push(
                        <tr>
                          
                            <td className="list-item-style claims-text"><a href="#" style={{ color: "#6AA2B8" }} 
                                onClick={() => { 
                                    this.setState({
                                        subscriberNo: item.SubscriberNo,
                                        enrollment_type: item.Enrollment_type,
                                        Insurer_Status: item.Insurer_Status,
                                        error_status: item.Error
                                        
                                    })

                                    setTimeout(() => {
                                        this.handleClick(keys, item.SubscriberNo, 2)
                                    }, 50);
                                }}>{item.SubscriberNo}</a></td>
                            <td className="list-item-style claims-text">{item.Enrollment_type}</td>
                <td className="list-item-style claims-text">{item.Insurer_Status}</td>
                            <td className="list-item-style claims-text">{item.status1}</td>
                            <td className="list-item-style claims-text">{item.Error}</td>
                            
                        </tr>
                    )
                })
            }

            row.push(
                <div id={keys} className="collapse">
                    <table id="" className="table table-bordered claim-list">
                        {this.renderClaimsHeader()}
                        {col}
                    </table>
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'page-link'}
                        initialPage={this.state.initialPage}
                        pageCount={count}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={(page) => {this.handlePageClick(page, keys)}}
                        containerClassName={'pagination'}
                        pageClassName={'page-item'}
                        previousClassName={'page-link'}
                        nextClassName={'page-link'}
                        pageLinkClassName={'page-link'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                        />
                </div>
            ) 
        });

        return (
            <div>
               
                {this.renderTableHeader()}
                {row}
            </div>
        );
    }
 

    renderHeader(header) {
        return (
            <tr className="table-head">
                <td className="table-head-text">{header}</td>
            </tr>
        )
    }

    renderRows(dictionary) {
        let row = []
        let col = []
        let count = 0

        dictionary.forEach(item => {
            col.push(
                <div className="col">
                    <div className="header">{item.key}</div>
                    <div>{item.value}</div>
                </div>
            )

            if (col.length % 4 == 0) {
                row.push(<div className="row">{col}</div>)
                col = []
            }
            count++
            if (count == dictionary.length && col.length > 0) {
                row.push(<div className="row">{col}</div>)
            }
        });

        return (
            <div className="summary-style">
                {row}
            </div>
        )
    }

    renderTable() {
        let row = []
        const data = this.state.coverage_data;
   
        data.forEach((item) => {
            row.push(
                <tr>
                  {/*  <td className="claim-line-data">{this.state.subscriberNo}</td> */}
                    <td className="claim-line-data">{this.state.enrollment_type}</td>
                    <td className="claim-line-data">{this.state.Insurer_Status}</td>
                    <td className="claim-line-data">{item.startDate}</td>
                    <td className="claim-line-data">{item.endDate}</td>
                </tr>
            )
        });

        return (
            <tbody>
                {row}
            </tbody>
        )
    }

    renderSummary() {
        return (
            <div>
                {
                    this.state.file && this.state.file.length > 0 ?
                        <table className="table claim-list">
                            {this.renderHeader('File')}
                            {this.renderRows(this.state.file)}
                        </table> : null
                }
                {
                    this.state.memberInfo && this.state.memberInfo.length > 0 ?
                        <table className="table claim-list">
                            {this.renderHeader('Member Info')}
                            {this.renderRows(this.state.memberInfo)}
                            <br></br>
                          
                            <button onClick={this.Saved} style={{backgroundColor:"#139DC9" ,color:"#FFFFFF" }}>Correct & Resubmit</button>
                            <button onClick={this.Ignore} style={{backgroundColor:"#139DC9" ,color:"#FFFFFF"}}>Ignore Error</button>
                            
                            </table> : null
                }
                {
                    this.state.coverage_data.length > 0 ?
                        <div>
                            <div className="table-head header-style claim-list">Coverage Data</div>
                            <table className="table-bordered body-style">
                                {this.renderCoverageHeader()}
                                {this.renderTable()}
                            </table> 
                        </div> : null
                }
            </div>
        );
    }

    render() {
        return (
          
            <div>
                  
                {this.rendersearchbar()}
                <label style={{color: '#139DC9'}}><b>Enrollment Details</b></label>
            <div className="row padding-left">
                <div className="col-7 claim-list file-table">
                    {this.state.claimsObj ? this.renderList() : null}
                </div>
                <div className="col-5">
                    {this.renderSummary()}
                </div>
                </div>
            </div>
        );
    }
}