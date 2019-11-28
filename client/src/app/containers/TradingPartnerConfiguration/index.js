import React from 'react';
import './style.css';

export class TradingPartnerConfiguration extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            files: [],
        };
    }

    componentDidMount() {
    }

    onChange(e) {
        var files = e.target.files;
        console.log(files);
        var filesArr = Array.prototype.slice.call(files);
        console.log(filesArr);
        this.setState({ files: [...this.state.files, ...filesArr] });
    }

    displayFile() {
        this.setState({ files: this.state.files});
   }

    render() {
        return (
            <div>
                {
                    <div>
                        <div style={{ borderBottom: '1px solid lightslategrey', width: '95%', height: '28px' }}>
                            <p>Add new Client</p>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <span className="list-header">Types of Transactions</span>
                                <div className="checkbox list-header">
                                    <label>
                                        <input type="checkbox" name="claims" value="837Inbound" /> 837Inbound
                            </label>
                                </div>
                                <div className="checkbox list-header">
                                    <label>
                                        <input type="checkbox" name="claims" value="837Outbound" /> 837Outbound
                            </label>
                                </div>
                                <div className="checkbox list-header">
                                    <label>
                                        <input type="checkbox" name="claims" value="834Inbound" /> 834Inbound
                            </label>
                                </div>
                                <div className="checkbox list-header">
                                    <label>
                                        <input type="checkbox" name="claims" value="834Outbound" /> 834Outbound
                            </label>
                                </div>
                                <div className="checkbox list-header">
                                    <label>
                                        <input type="checkbox" name="claims" value="835Inbound" /> 835Inbound
                            </label>
                                </div>
                                <div className="checkbox list-header">
                                    <label>
                                        <input type="checkbox" name="claims" value="835Outbound" /> 835Outbound
                            </label>
                                </div>
                            </div>
                        </div>

                        <div style={{ borderBottom: '1px solid lightslategrey', width: '95%', height: '28px' }}>
                            <p>Trading Partner Configuration</p>
                        </div>
                        <div className="pull-right">
                            <button type="submit" className="btn light_blue">Add New</button>
                        </div>
                        <div className="container">
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading collapsible" data-toggle="collapse" href="#BasicX12Options">
                                        <span className="panel-title">
                                        Basic X12 Options
                                        </span>
                                    </div>
                                    <div id="BasicX12Options" className="panel-collapse content collapse">
                                        <div className="panel-body">
                                            <div className="row">

                                                <div className="form-group col-sm-3">
                                                    <label className="list-header">Functional Acknowledgment Options</label>
                                                    <select className="form-control list-header" id="fao1">
                                                        <option value="0">Select Acknowledgment</option>
                                                        <option value="1">Do Not Acknowledgment</option>
                                                        <option value="2"> Acknowledge Functional Groups</option>
                                                        <option value="3">Acknowledge Transaction Sets</option>
                                                    </select>
                                                </div>

                                                <div className="form-group col">
                                                    <label className="list-header">Document Envelope Option</label>
                                                    <select className="form-control list-header" id="fao1">
                                                        <option value="0">Select Document</option>
                                                        <option value="1">Group By InterChange</option>
                                                        <option value="2">Group By Functional Group</option>
                                                        <option value="3">Group By Transaction Set</option>
                                                    </select>
                                                </div>

                                                <div className="form-group col">
                                                    <label className="list-header">Element Delimiter</label>
                                                    <select className="form-control list-header" id="fao1">
                                                        <option value="0">Select Element</option>
                                                        <option value="1">Star Delimited</option>
                                                        <option value="2">Comma Delimited</option>
                                                        <option value="3">Tab Delimited</option>
                                                        <option value="4">Bar(|) Delimited</option>
                                                        <option value="5">Tab Delimited</option>
                                                        <option value="6">Other Character</option>
                                                    </select>
                                                </div>

                                                <div className="form-group col" style={{ marginRight: "27px" }}>
                                                    <label className="list-header">Segment Termination Character</label>
                                                    <select className="form-control list-header" id="fao1">
                                                        <option value="0">Select Segment</option>
                                                        <option value="1">Single Quote</option>
                                                        <option value="2">Tilde(~)</option>
                                                        <option value="3">Other Characher</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-sm-3 checkbox list-header center">
                                                    <label>
                                                        Filter Functional Acknowledgments<br></br><input className="checkbox-margin" type="checkbox" name="claims" value="" />
                                                    </label>
                                                </div>
                                                <div className="form-group col checkbox list-header center">
                                                    <label>
                                                        Reject Duplicate ISA<br></br><input type="checkbox" className="checkbox-margin" name="claims" value="" />
                                                    </label>
                                                </div>
                                                <div className="form-group col checkbox list-header center">
                                                    <label>
                                                        Validate Outbound Interchanges<br></br><input type="checkbox" className="checkbox-margin" name="claims" value="" />
                                                    </label>
                                                </div>
                                                <div className="form-group col" style={{ marginRight: "27px" }}>
                                                    <label className="list-header">Outbound Validation Option</label>
                                                    <select className="form-control list-header" id="ovo1">
                                                        <option value="0">Filter Errored Documents</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-sm-3">
                                                    <label className="list-header">Companion Guide</label>
                                                    <select className="form-control list-header" id="cg1">
                                                        <option value="0">MediCal Companion Guide</option>
                                                        <option value="1">Medicare Companion Guide</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-heading collapsible" data-toggle="collapse" href="#ISAIdentificationOptions">
                                        <span className="panel-title">
                                            ISA Identification Options
                       </span>
                                    </div>
                                    <div id="ISAIdentificationOptions" className="panel-collapse content collapse">
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="list-header" style={{ borderBottom: '1px solid lightslategrey', width: '95%', height: '28px', marginLeft: '30px' }}>
                                                    <p>Authorization Information (ISA01,ISA02)</p>
                                                </div>
                                                <div className="form-group col">
                                                    <label className="list-header">Qualifier</label>
                                                    <select className="form-control list-header" style={{ marginLeft: "10px" }} id="Qualifier">
                                                        <option value="0">01-UCS Communication ID</option>
                                                        <option value="1">02-EDXCommunication ID</option>
                                                        <option value="2">03-Additional Data Information</option>
                                                    </select>
                                                </div>

                                                <div className="form-group col-sm-3" style={{ marginRight: "500px" }}>
                                                    <label>
                                                        ID
                            </label>
                                                    <input type="text" className="list-header form-control" />
                                                </div>

                                                <div className="list-header" style={{ borderBottom: '1px solid lightslategrey', width: '95%', height: '28px', marginLeft: "30px" }}>
                                                    <p>Security Information (ISA03,ISA04)</p>
                                                </div>
                                                <div className="form-group col">
                                                    <label className="list-header">Qualifier</label>
                                                    <select className="form-control list-header" style={{ marginLeft: "10px" }} id="qualifier">
                                                        <option value="0"> 00-No Security Information Present</option>
                                                        <option value="1"> 01-Password</option>
                                                    </select>
                                                </div>

                                                <div className="form-group col-sm-3" style={{ marginRight: "500px" }}>
                                                    <label>
                                                        ID
                            </label>
                                                    <input type="text" className="list-header form-control" />
                                                </div>

                                                <div className="list-header" style={{ borderBottom: '1px solid lightslategrey', width: '95%', height: '28px', marginLeft: "30px" }}>
                                                    <p>Interchange ID (ISA05/07,ISA06/08)</p>
                                                </div>
                                                <div className="form-group col">
                                                    <label className="list-header">Qualifier</label>
                                                    <select className="form-control list-header" style={{ marginLeft: "10px" }} id="Qualifier">
                                                        <option value="0"> 01-Duns</option>
                                                        <option value="1"> 02-SCAC</option>
                                                        <option value="2"> 03-FMC</option>
                                                        <option value="3"> 04-IATA</option>
                                                    </select>
                                                </div>

                                                <div className="form-group col-sm-3" style={{ marginRight: "500px" }}>
                                                    <label>
                                                        ID
                            </label>
                                                    <input type="text" className="list-header form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-heading collapsible" data-toggle="collapse" href="#ISAVersion_ControlOptions">
                                        <span className="panel-title">
                                            ISA Version/Control Options
                       </span>
                                    </div>
                                    <div id="ISAVersion_ControlOptions" className="panel-collapse content collapse">
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="form-group col list-header">
                                                    <label>
                                                        Interchange Standard ID (ISA11)
                            </label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                                <div className="form-group list-header col">
                                                    <label>
                                                        Interchange Version (ISA12)
                            </label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                                <div className="form-group checkbox list-header center col">
                                                    <label>
                                                        Interchange Ack. Requested (ISA14)<br></br><input type="checkbox" className="checkbox-margin" name="claims" value="" />
                                                    </label>
                                                </div>

                                                <div className="form-group list-header col" style={{ marginRight: "30px" }}>
                                                    <label>Test Indicator (ISA15)</label>
                                                    <select className="form-control" id="testIndicator">
                                                        <option value="0">P-Production</option>
                                                        <option value="1">T-Test</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group list-header col-sm-3">
                                                    <label>
                                                        Component Separator (ISA16)
                            </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <select className="form-control list-header" id="x12select">
                                                        <option value="0"> Select an X12</option>
                                                        <option value="1">837I</option>
                                                        <option value="2">270/271</option>
                                                        <option value="3">276/277</option>
                                                        <option value="4">835</option>
                                                        <option value="5">837P</option>
                                                        <option value="6">837D</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-heading collapsible" data-toggle="collapse" href="#GSVersion_ControlOptions">
                                        <span className="panel-title">
                                            GS Version/Control Options
                       </span>
                                    </div>
                                    <div id="GSVersion_ControlOptions" className="panel-collapse content collapse">
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="form-group col list-header">
                                                    <label>
                                                        Application Code (GS02/03)
                            </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group list-header col">
                                                    <label>Responsible Agency Code (GS07)</label>
                                                    <select className="form-control" id="testIndicator">
                                                        <option value="0">T-Transportation Data Coordinating Committee</option>
                                                        <option value="1">X-Accredited Standards Commitess</option>
                                                    </select>
                                                </div>
                                                <div className="form-group list-header col" style={{ marginRight: "10px" }}>
                                                    <label>
                                                        GS Version (GS08)
                            </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-heading collapsible" data-toggle="collapse" href="#CommunicationMethods">
                                        <span className="panel-title">
                                            Communication Methods
                       </span>
                                    </div>
                                    <div id="CommunicationMethods" className="panel-collapse collapse content">
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="form-group list-header col">
                                                    <label>Communication Type</label>
                                                    <select className="form-control list-header" id="testIndicator">
                                                        <option value="0">Select Communication</option>
                                                        <option selected="selected" value="1">SFTP</option>
                                                        <option value="2">Disk</option>
                                                    </select>
                                                </div>
                                                <div className="form-group checkbox list-header center col">
                                                    <label>
                                                        Use Default Settings<br></br><input type="checkbox" className="checkbox-margin" name="defaultSettings" value="" />
                                                    </label>
                                                </div>
                                                <div className="form-group list-header col">
                                                    <label>
                                                        Host
                            </label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                                <div className="form-group list-header col" style={{ marginRight: "10px" }}>
                                                    <label>
                                                        Port
                            </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group list-header col-sm-3">
                                                    <label>
                                                        User Name
                            </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group list-header col-sm-3">
                                                    <label>
                                                        Password
                            </label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-heading collapsible" data-toggle="collapse" href="#CompanionGuide">
                                        <span className="panel-title">
                                            837 Companion Guide
                       </span>
                                    </div>
                                    <div id="CompanionGuide" className="panel-collapse collapse content">
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="form-group col-sm-3">
                                                    <label className="list-header">Companion Guide</label>
                                                    <select className="form-control list-header" id="CompanionGuide">
                                                        <option value="0">Select Companion</option>
                                                        <option value="1">Medicare Companion Guide</option>
                                                        <option value="2">Medicaid Companion Guide</option>
                                                    </select>
                                                </div>
                                                {this.state.files.map(x =>
                                                            <div className="file-preview list-header" style={{marginTop:'35px'}} onClick={this.displayFile.bind()}>Selected File name: {x.name}</div>
                                                        )}
                                                <div className="form-group col">
                                                    <button type="submit" className="btn light_blue" style={{ marginLeft: '60px', marginTop: '18px' }}>Upload</button>
                                                    <label className="btn light_blue" style={{ marginLeft: '60px', marginTop: '27px' }}>Add New
                                                    <input type="file" name="filename" onChange={this.onChange} style={{ display: "none" }} /> 
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}