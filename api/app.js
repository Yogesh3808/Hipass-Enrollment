var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var graphql = require("graphql");
var ExpressGraphQL = require("express-graphql");
// var sqlite3 = require('sqlite3').verbose();

var _expressPackage = require("express");  
var _bodyParserPackage = require("body-parser"); 
var _sqlPackage = require("mssql");  
var sqlapp= _expressPackage();  
var cors = require('cors')
 
sqlapp.use(cors())
sqlapp.use(_bodyParserPackage.json());
// var router = express.Router();

// var database = new sqlite3.Database("./demo.db");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
// var app = express();

var rowData=[];
var totalFile = 0;
var subCount = 0;
var AccCount = 0;
var RejCount = 0;
var PaidCount = 0;
var FailedFileCount = 0;
var DeniedCount = 0;

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");
// app.use(cors());
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/testAPI", testAPIRouter);
// app.use("/file", testAPIRouter);

sqlapp.use(function (req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");  
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");  
    next();  
});

//Lets set up our local server now.  
var server = sqlapp.listen(process.env.PORT || 4000, function () {  
    var port = server.address().port;  
    console.log("App now running on port", port);  
}); 

var dbConfig = {
    user: 'devcool',
    password: '#4hipaas$$$',
    server: 'hipaas.cedaixacvaql.us-west-1.rds.amazonaws.com', 
    database: 'HMA_BoomiPoc' 
};  

_sqlPackage.connect(dbConfig, function (error) {  
    if (error) {  
        console.log("Error while connecting to database :- " + error);  
        response.send(error);  
    } 
});

const CategoryType = new graphql.GraphQLObjectType({
    name: "Category",
    fields: {
        ID: { type: graphql.GraphQLID },
        CategoryDesc: { type: graphql.GraphQLString }
    }
});

//totalFile
const FileInCnt = new graphql.GraphQLObjectType({
    name: "FileInCnt",
    fields: {        
        totalFile: { type: graphql.GraphQLInt } 
    }
});

//SubCount
const ClaimCnt = new graphql.GraphQLObjectType({
    name: "ClaimCnt",
    fields: {        
        SubCount: { type: graphql.GraphQLInt } 
    }
});

//AccCount
const ClaimAccCount = new graphql.GraphQLObjectType({
    name: "ClaimAccCount",
    fields: {        
        AccCount: { type: graphql.GraphQLInt } 
    }
});

//RejCount
const ClaimRejCount = new graphql.GraphQLObjectType({
    name: "ClaimRejCount",
    fields: {        
        RejCount: { type: graphql.GraphQLInt } 
    }
});

//PaidCount
const ClaimPaidCount = new graphql.GraphQLObjectType({
    name: "ClaimPaidCount",
    fields: {
        PaidCount: { type: graphql.GraphQLInt }
    }
 });
 //FailedFileCount
 const FileFailedFileCount = new graphql.GraphQLObjectType({
    name: "FileFailedFileCount",
    fields: {
        FailedFileCount: { type: graphql.GraphQLInt }
    }
 });
 //DeniedCount
 const ClaimDeniedCount = new graphql.GraphQLObjectType({
    name: "ClaimDeniedCount",
    fields: {
        DeniedCount: { type: graphql.GraphQLInt }
    }
 });

const FileInTakeData = new graphql.GraphQLObjectType({
    name: "fileInTake",
    fields: {
        SeqID: { type: graphql.GraphQLID },
        FileID: { type: graphql.GraphQLString },
        TransactionID: { type: graphql.GraphQLInt },
        FileName: { type: graphql.GraphQLString },
        FileDate: { type: graphql.GraphQLString },
        BatchID: { type: graphql.GraphQLString },
        TransmissionID: { type: graphql.GraphQLInt },
        TradingPartner: { type: graphql.GraphQLString },
        InterchangeSenderID: { type: graphql.GraphQLString },
        InterchangeControlNumber: { type: graphql.GraphQLInt },
        InterchangeDate: { type: graphql.GraphQLString },
        InterchangeTime: { type: graphql.GraphQLString },
        SubmitterID: { type: graphql.GraphQLString },
        ReceiverName: { type: graphql.GraphQLString },
        ReceiverID: { type: graphql.GraphQLString },
        Destination: { type: graphql.GraphQLString },
        ISA01: { type: graphql.GraphQLString },
        ISA02: { type: graphql.GraphQLString },
        ISA03: { type: graphql.GraphQLString },
        ISA04: { type: graphql.GraphQLString },
        ISA05: { type: graphql.GraphQLString },
        ISA06: { type: graphql.GraphQLString },
        ISA07: { type: graphql.GraphQLString },
        ISA08: { type: graphql.GraphQLString },
        ISA09: { type: graphql.GraphQLString },
        ISA10: { type: graphql.GraphQLString },
        ISA11: { type: graphql.GraphQLString },
        ISA12: { type: graphql.GraphQLString },
        ISA13: { type: graphql.GraphQLString },
        ISA14: { type: graphql.GraphQLString },
        ISA15: { type: graphql.GraphQLString },
        ISA16: { type: graphql.GraphQLString },
        GSA01: { type: graphql.GraphQLString },
        GSA02: { type: graphql.GraphQLString },
        GSA03: { type: graphql.GraphQLString },
        GSA04: { type: graphql.GraphQLString },
        GSA05: { type: graphql.GraphQLString },
        GSA06: { type: graphql.GraphQLString },
        GSA07: { type: graphql.GraphQLString },
        GSA08: { type: graphql.GraphQLString },
        ST01: { type: graphql.GraphQLString },
        ST02: { type: graphql.GraphQLString },
        ST03: { type: graphql.GraphQLString },
        BHT01: { type: graphql.GraphQLString },
        BHT02: { type: graphql.GraphQLString },
        BHT03: { type: graphql.GraphQLString },
        BHT04: { type: graphql.GraphQLString },
        BHT05: { type: graphql.GraphQLString },
        BHT06: { type: graphql.GraphQLString },
        Sumbitter_N101: { type: graphql.GraphQLString },
        Submitter_N102: { type: graphql.GraphQLString },
        Submitter_N103: { type: graphql.GraphQLString },
        Submitter_N104: { type: graphql.GraphQLString },
        Submitter_N301: { type: graphql.GraphQLString },
        Submitter_N302: { type: graphql.GraphQLString },
        Submitter_N401: { type: graphql.GraphQLString },
        Submitter_N402: { type: graphql.GraphQLString },
        Submitter_N403: { type: graphql.GraphQLString },
        Submitter_PER01: { type: graphql.GraphQLString },
        Submitter_PER02: { type: graphql.GraphQLString },
        Submitter_PER03: { type: graphql.GraphQLString },
        Submitter_PER04: { type: graphql.GraphQLString },
        Submitter_PER05: { type: graphql.GraphQLString },
        Submitter_PER06: { type: graphql.GraphQLString },
        Receiver_N101: { type: graphql.GraphQLString },
        Receiver_N102: { type: graphql.GraphQLString },
        Receiver_N103: { type: graphql.GraphQLString },
        Receiver_N104: { type: graphql.GraphQLString },
        Receiver_N105: { type: graphql.GraphQLString },
        Receiver_N301: { type: graphql.GraphQLString },
        Receiver_N302: { type: graphql.GraphQLString },
        Receiver_N401: { type: graphql.GraphQLString },
        Receiver_N402: { type: graphql.GraphQLString },
        Receiver_N403: { type: graphql.GraphQLString },
        Receiver_PER01: { type: graphql.GraphQLString },
        Receiver_PER02: { type: graphql.GraphQLString },
        Receiver_PER03: { type: graphql.GraphQLString },
        Receiver_PER04: { type: graphql.GraphQLString },
        Receiver_PER05: { type: graphql.GraphQLString },
        Receiver_PER06: { type: graphql.GraphQLString },
        ClaimCount: { type: graphql.GraphQLInt },
        ExternalCorrelationToken: { type: graphql.GraphQLString },
        ExtraField1: { type: graphql.GraphQLString },
        ExtraField2: { type: graphql.GraphQLString },
        ExtraField3: { type: graphql.GraphQLString },
        ExtraField4: { type: graphql.GraphQLString },
        ExtraField5: { type: graphql.GraphQLString },
        ExtraField6: { type: graphql.GraphQLString },
        ExtraField7: { type: graphql.GraphQLString },
        ExtraField8: { type: graphql.GraphQLString },
        ExtraField9: { type: graphql.GraphQLString },
        CreatedBy: { type: graphql.GraphQLString },
        CreateDateTime: { type: graphql.GraphQLString },
        Created_Date: { type: graphql.GraphQLString },
        FileStatus: { type: graphql.GraphQLString },
        FileLevelErrors: { type: graphql.GraphQLString },
        Field2: { type: graphql.GraphQLString },
        Field3: { type: graphql.GraphQLString },
        Field4: { type: graphql.GraphQLString },
        Field5: { type: graphql.GraphQLString },
        Field6: { type: graphql.GraphQLString },
        error_claimcount: { type: graphql.GraphQLInt }
    }
});

const IntakeClaimDatatbl = new graphql.GraphQLObjectType({
    name: "IntakeClaimData",
    fields: {
        SeqID: { type: graphql.GraphQLID },
        FileID : { type: graphql.GraphQLString },
        TransactionID :  { type: graphql.GraphQLInt }, 
        FileName :  { type: graphql.GraphQLString },
        FileDate :  { type: graphql.GraphQLString },
        BatchID :  { type: graphql.GraphQLString },
        TransmissionID :  { type: graphql.GraphQLInt }, 
        ClaimExtNmbr : { type: graphql.GraphQLString },
        ClaimID : { type: graphql.GraphQLString },
        ClaimTMTrackingID : { type: graphql.GraphQLString },
        PaytoPlanInfo : { type: graphql.GraphQLString },
        Billing_Provider_ID : { type: graphql.GraphQLString },
        SecondaryBilling_ID : { type: graphql.GraphQLString },
        Subscriber_ID : { type: graphql.GraphQLString },
        ExtSubscriber_ID : { type: graphql.GraphQLString },
        Member_ID : { type: graphql.GraphQLString },
        Member_Account_Number : { type: graphql.GraphQLString },
        Member_Last_Name : { type: graphql.GraphQLString },
        Member_First_Name : { type: graphql.GraphQLString },
        MemberMI : { type: graphql.GraphQLString },
        Member_DOB : { type: graphql.GraphQLString },
        DiagnosisCodes : { type: graphql.GraphQLString },
        Claim_Amount : { type: graphql.GraphQLString },
        PatientPaid : { type: graphql.GraphQLString },
        NetBalance : { type: graphql.GraphQLString },
        Adjust : { type: graphql.GraphQLString },
        InsuranceBalance : { type: graphql.GraphQLString },
        VAN_Trace_Number : { type: graphql.GraphQLString },
        COB_Claim_Number : { type: graphql.GraphQLString },
        ClaimStatus : { type: graphql.GraphQLString },
        ClaimCode : { type: graphql.GraphQLString },
        OtherID : { type: graphql.GraphQLString },
        ClaimSupplimentalInfo : { type: graphql.GraphQLString },
        ContractInformation : { type: graphql.GraphQLString },
        PatientDueAmmount : { type: graphql.GraphQLString },
        ExternalCorrelationToken : { type: graphql.GraphQLString },
        LineCount : { type: graphql.GraphQLString },
        ExtraField1 : { type: graphql.GraphQLString },
        ExtraField2 : { type: graphql.GraphQLString },
        ExtraField3 : { type: graphql.GraphQLString },
        ExtraField4 : { type: graphql.GraphQLString },
        ExtraField5 : { type: graphql.GraphQLString },
        ExtraField6 : { type: graphql.GraphQLString },
        ExtraField7 : { type: graphql.GraphQLString },
        ExtraField8 : { type: graphql.GraphQLString },
        ExtraField9 : { type: graphql.GraphQLString },
        CreatedBy : { type: graphql.GraphQLString },
        CreateDateTime : { type: graphql.GraphQLString },
        Created_Date : { type: graphql.GraphQLString },
        HL_ID_BillingProvider : { type: graphql.GraphQLString },
        HL_Level_BillingProvider : { type: graphql.GraphQLString },
        PRV_Billing01 : { type: graphql.GraphQLString },
        PRV_Billing02 : { type: graphql.GraphQLString },
        PRV_Billing03 : { type: graphql.GraphQLString },
        NM101_BillingProviderId : { type: graphql.GraphQLString },
        BillingProviderLastName : { type: graphql.GraphQLString },
        BillingProviderFirstName : { type: graphql.GraphQLString },
        NM108_BillingProvider : { type: graphql.GraphQLString },
        NM109_BillingProvider : { type: graphql.GraphQLString },
        BillingProviderAddress : { type: graphql.GraphQLString },
        BillingProviderCity_State_Zip : { type: graphql.GraphQLString },
        BillingProvider_TaxId : { type: graphql.GraphQLString },
        BillingProvider_PER01 : { type: graphql.GraphQLString },
        BillingProvider_PER02 : { type: graphql.GraphQLString },
        BillingProvider_PER03 : { type: graphql.GraphQLString },
        BillingProvider_PER04 : { type: graphql.GraphQLString },
        NM101_PayToProvider : { type: graphql.GraphQLString },
        PayToProviderLastName : { type: graphql.GraphQLString },
        PayToProviderFirstName : { type: graphql.GraphQLString },
        NM108_PayToProvider : { type: graphql.GraphQLString },
        NM109_PayToProvider : { type: graphql.GraphQLString },
        PayToProviderAddress : { type: graphql.GraphQLString },
        PayToProviderCity_State_Zip : { type: graphql.GraphQLString },
        PayToProvider_TaxId : { type: graphql.GraphQLString },
        PayToProvider_PER01 : { type: graphql.GraphQLString },
        PayToProvider_PER02 : { type: graphql.GraphQLString },
        PayToProvider_PER03 : { type: graphql.GraphQLString },
        PayToProvider_PER04 : { type: graphql.GraphQLString },
        HL_ID_Subscriber : { type: graphql.GraphQLString },
        HL_Level_Subscriber : { type: graphql.GraphQLString },
        SBR01 : { type: graphql.GraphQLString },
        SBR02 : { type: graphql.GraphQLString },
        SBR03 : { type: graphql.GraphQLString },
        SBR09 : { type: graphql.GraphQLString },
        SubscriberLastName : { type: graphql.GraphQLString },
        SubscriberFirstName : { type: graphql.GraphQLString },
        SubscriberDOB : { type: graphql.GraphQLString },
        NM108_Subscriber : { type: graphql.GraphQLString },
        NM109_Subscriber : { type: graphql.GraphQLString },
        SubscriberAddress : { type: graphql.GraphQLString },
        SubscriberCity_State_Zip : { type: graphql.GraphQLString },
        SubscriberSecondaryIdentification : { type: graphql.GraphQLString },
        CasualityClaimNumber : { type: graphql.GraphQLString },
        PayerLastName : { type: graphql.GraphQLString },
        PayerFirstName : { type: graphql.GraphQLString },
        NM108_Payer : { type: graphql.GraphQLString },
        NM109_Payer : { type: graphql.GraphQLString },
        PayerAddress : { type: graphql.GraphQLString },
        PayerCity_State_Zip : { type: graphql.GraphQLString },
        PayerSecondaryId : { type: graphql.GraphQLString },
        BillingProviderSecondaryId : { type: graphql.GraphQLString },
        HL_ID_Patient : { type: graphql.GraphQLString },
        HL_Level_Patient : { type: graphql.GraphQLString },
        PatientLastName : { type: graphql.GraphQLString },
        PatientFirstName : { type: graphql.GraphQLString },
        NM108_Patient : { type: graphql.GraphQLString },
        NM109_Patient : { type: graphql.GraphQLString },
        PatientAddress : { type: graphql.GraphQLString },
        PatientCity_State_Zip : { type: graphql.GraphQLString },
        PatientDOB : { type: graphql.GraphQLString },
        CLM01 : { type: graphql.GraphQLString },
        CLM02 : { type: graphql.GraphQLString },
        CLM05_01 : { type: graphql.GraphQLString },
        CLM05_02 : { type: graphql.GraphQLString },
        CLM05_03 : { type: graphql.GraphQLString },
        StatementBegin : { type: graphql.GraphQLString },
        StatementEnd : { type: graphql.GraphQLString },
        DischargeHour : { type: graphql.GraphQLString },
        AdmissionDate : { type: graphql.GraphQLString },
        RepricerReceivevDate : { type: graphql.GraphQLString },
        ErrorCode : { type: graphql.GraphQLString },
        ErrorDesc : { type: graphql.GraphQLString },
        Field1 : { type: graphql.GraphQLString },
        ClaimLevelErrors : { type: graphql.GraphQLString },
        Field3 : { type: graphql.GraphQLString },
        Field4 : { type: graphql.GraphQLString },
        NM109_2330 : { type: graphql.GraphQLString },
        CLM_11 : { type: graphql.GraphQLString },
        ClaimLevelICDErrorFlag : { type: graphql.GraphQLString },
        ClaimLevelCLMErrorFlag : { type: graphql.GraphQLString },
        HI01 : { type: graphql.GraphQLString },
        adjudication_status : { type: graphql.GraphQLString } 
    }
});
const IntakeClaimLineDatatbl = new graphql.GraphQLObjectType({
    name: "IntakeClaimLineData",
    fields: {
        SeqID: { type: graphql.GraphQLID },
        FileID : { type: graphql.GraphQLString },
        TransactionID :  { type: graphql.GraphQLInt }, 
        FileName :  { type: graphql.GraphQLString },
        FileDate :  { type: graphql.GraphQLString },
        BatchID :  { type: graphql.GraphQLString },
        TransmissionID :  { type: graphql.GraphQLInt }, 
        ClaimExtNmbr : { type: graphql.GraphQLString },
        ClaimID : { type: graphql.GraphQLString },
        ClaimTMTrackingID : { type: graphql.GraphQLString },
        Subscriber_ID : { type: graphql.GraphQLString },
        Member_ID : { type: graphql.GraphQLString },
        ExtSubscriber_ID : { type: graphql.GraphQLString },
        ICD9ICD10 : { type: graphql.GraphQLString },
        ProcNo : { type: graphql.GraphQLString },
        DiagnosisXRef : { type: graphql.GraphQLString },
        DiagnosisCodes : { type: graphql.GraphQLString },
        PatientWeight : { type: graphql.GraphQLString },
        Units : { type: graphql.GraphQLString },
        UnitMeasure : { type: graphql.GraphQLString },
        Proc_Amount : { type: graphql.GraphQLString },
        PatientPaid : { type: graphql.GraphQLString },
        NetBalance : { type: graphql.GraphQLString },
        Adjust : { type: graphql.GraphQLString },
        InsuranceBalance : { type: graphql.GraphQLString },
        DateofService : { type: graphql.GraphQLString },
        DateofServiceEnd : { type: graphql.GraphQLString },
        LineStatus : { type: graphql.GraphQLString },
        OtherID : { type: graphql.GraphQLString },
        ExternalCorrelationToken : { type: graphql.GraphQLString },
        AmbulanceInfo : { type: graphql.GraphQLString },
        XRayInfo : { type: graphql.GraphQLString },
        TransportInfo : { type: graphql.GraphQLString },
        ExtraField1 : { type: graphql.GraphQLString },
        ExtraField2 : { type: graphql.GraphQLString },
        ExtraField3 : { type: graphql.GraphQLString },
        ExtraField4 : { type: graphql.GraphQLString },
        ExtraField5 : { type: graphql.GraphQLString },
        ExtraField6 : { type: graphql.GraphQLString },
        ExtraField7 : { type: graphql.GraphQLString },
        ExtraField8 : { type: graphql.GraphQLString },
        ExtraField9 : { type: graphql.GraphQLString },
        CreatedBy : { type: graphql.GraphQLString },
        CreateDateTime : { type: graphql.GraphQLString },
        Created_Date : { type: graphql.GraphQLString },
        HCP01_PricingMethodology : { type: graphql.GraphQLString },
        HCP02_Amount : { type: graphql.GraphQLString },
        HCP03 : { type: graphql.GraphQLString },
        HCP04 : { type: graphql.GraphQLString },
        HCP05_Rate : { type: graphql.GraphQLString },
        HCP06 : { type: graphql.GraphQLString },
        HCP07 : { type: graphql.GraphQLString },
        HCP08 : { type: graphql.GraphQLString },
        HCP12_Quantity : { type: graphql.GraphQLString },
        HCP13 : { type: graphql.GraphQLString },
        HCP14 : { type: graphql.GraphQLString },
        HCP15_ExceptionCode : { type: graphql.GraphQLString },
        AttendingProviderNameLastOrOrganizationName : { type: graphql.GraphQLString },
        AttendingProviderNameFirst : { type: graphql.GraphQLString },
        NM108_AttendingProvider : { type: graphql.GraphQLString },
        NM109_AttendingProvider : { type: graphql.GraphQLString },
        AttendingProviderCode : { type: graphql.GraphQLString },
        AttendingProvider_PRV02 : { type: graphql.GraphQLString },
        AttendingProvider_PRV03 : { type: graphql.GraphQLString },
        AttendingProvider_REF01 : { type: graphql.GraphQLString },
        AttendingProvider_REF02 : { type: graphql.GraphQLString },
        OperatingPhysicianNameLastOrOrganizationName : { type: graphql.GraphQLString },
        OperatingPhysicianNameFirst : { type: graphql.GraphQLString },
        NM108_OperatingPhysician : { type: graphql.GraphQLString },
        NM109_OperatingPhysician : { type: graphql.GraphQLString },
        OperatingPhysician_REF01 : { type: graphql.GraphQLString },
        OperatingPhysician_REF02 : { type: graphql.GraphQLString },
        OtherOperatingPhysicianNameLastOrOrganizationName : { type: graphql.GraphQLString },
        OtherOperatingPhysicianNameFirst : { type: graphql.GraphQLString },
        NM108_OtherOperatingPhysician : { type: graphql.GraphQLString },
        NM109_OtherOperatingPhysician : { type: graphql.GraphQLString },
        OtherOperatingPhysician_REF01 : { type: graphql.GraphQLString },
        OtherOperatingPhysician_REF02 : { type: graphql.GraphQLString },
        RenderingPhysicianNameLastOrOrganizationName : { type: graphql.GraphQLString },
        RenderingPhysicianNameFirst : { type: graphql.GraphQLString },
        NM108_RenderingPhysician : { type: graphql.GraphQLString },
        NM109_RenderingPhysician : { type: graphql.GraphQLString },
        RenderingPhysician_REF01 : { type: graphql.GraphQLString },
        RenderingPhysician_REF02 : { type: graphql.GraphQLString },
        ServiceFacilityLocationName : { type: graphql.GraphQLString },
        ServiceFacilityLocation_NM102 : { type: graphql.GraphQLString },
        ServiceFacilityLocation_NM108 : { type: graphql.GraphQLString },
        ServiceFacilityLocation_NM109 : { type: graphql.GraphQLString },
        ServiceFacilityLocationAddress : { type: graphql.GraphQLString },
        ServiceFacilityLocation_City_State_Zip : { type: graphql.GraphQLString },
        ServiceFacilityLocation_REF01 : { type: graphql.GraphQLString },
        ServiceFacilityLocation_REF02 : { type: graphql.GraphQLString },
        ReferringProviderNameLastOrOrganizationName : { type: graphql.GraphQLString },
        ReferringProviderNameFirst : { type: graphql.GraphQLString },
        NM108_ReferringProvider : { type: graphql.GraphQLString },
        NM109_ReferringProvider : { type: graphql.GraphQLString },
        ReferringProvider_REF01 : { type: graphql.GraphQLString },
        ReferringProvider_REF02 : { type: graphql.GraphQLString },
        SBR01_PayerResponsibilityCode : { type: graphql.GraphQLString },
        SBR02 : { type: graphql.GraphQLString },
        SBR03 : { type: graphql.GraphQLString },
        SBR04 : { type: graphql.GraphQLString },
        SBR09 : { type: graphql.GraphQLString },
        CAS01_ClaimAdjustMentGroupCode : { type: graphql.GraphQLString },
        CAS02 : { type: graphql.GraphQLString },
        CAS03 : { type: graphql.GraphQLString },
        CAS04 : { type: graphql.GraphQLString },
        CAS05 : { type: graphql.GraphQLString },
        CAS06 : { type: graphql.GraphQLString },
        CAS07 : { type: graphql.GraphQLString },
        CAS08 : { type: graphql.GraphQLString },
        CAS09 : { type: graphql.GraphQLString },
        CAS10 : { type: graphql.GraphQLString },
        CAS11 : { type: graphql.GraphQLString },
        CAS12 : { type: graphql.GraphQLString },
        CAS13 : { type: graphql.GraphQLString },
        CAS14 : { type: graphql.GraphQLString },
        CAS15 : { type: graphql.GraphQLString },
        CAS16 : { type: graphql.GraphQLString },
        CAS17 : { type: graphql.GraphQLString },
        CAS18 : { type: graphql.GraphQLString },
        CAS19 : { type: graphql.GraphQLString },
        AMT01_PayerPaidAmmount : { type: graphql.GraphQLString },
        AMT02_Amount : { type: graphql.GraphQLString },
        AMT01_RemainingPatientLiability : { type: graphql.GraphQLString },
        AMT02_RPAmount : { type: graphql.GraphQLString },
        AMT01_NonCoveredChargeAmmount : { type: graphql.GraphQLString },
        AMT02_NCAmount : { type: graphql.GraphQLString },
        OtherInsuranceCoverage_OI03 : { type: graphql.GraphQLString },
        OtherInsuranceCoverage_OI06 : { type: graphql.GraphQLString },
        MIA01 : { type: graphql.GraphQLString },
        MIA02 : { type: graphql.GraphQLString },
        MIA03 : { type: graphql.GraphQLString },
        MIA04 : { type: graphql.GraphQLString },
        MIA05 : { type: graphql.GraphQLString },
        MIA06 : { type: graphql.GraphQLString },
        MIA07 : { type: graphql.GraphQLString },
        MIA08 : { type: graphql.GraphQLString },
        MIA09 : { type: graphql.GraphQLString },
        MIA10 : { type: graphql.GraphQLString },
        MOA01 : { type: graphql.GraphQLString },
        MOA02 : { type: graphql.GraphQLString },
        MOA03 : { type: graphql.GraphQLString },
        MOA04 : { type: graphql.GraphQLString },
        MOA05 : { type: graphql.GraphQLString },
        MOA06 : { type: graphql.GraphQLString },
        MOA07 : { type: graphql.GraphQLString },
        MOA08 : { type: graphql.GraphQLString },
        MOA09 : { type: graphql.GraphQLString },
        MOA10 : { type: graphql.GraphQLString },
        OtherSubscriberNameLastOrOrganizationName : { type: graphql.GraphQLString },
        OtherSubscriberNameFirst : { type: graphql.GraphQLString },
        OtherSubscriber_NM102 : { type: graphql.GraphQLString },
        NM108_OtherSubscriber : { type: graphql.GraphQLString },
        NM109_OtherSubscriber : { type: graphql.GraphQLString },
        OtherSubscriberAddress : { type: graphql.GraphQLString },
        OtherSubscriberCityStateZip : { type: graphql.GraphQLString },
        OtherSubscriber_REF01 : { type: graphql.GraphQLString },
        OtherSubscriber_RF02 : { type: graphql.GraphQLString },
        OtherPayerNameLastOrOrganizationName : { type: graphql.GraphQLString },
        OtherPayerNameFirst : { type: graphql.GraphQLString },
        OtherPayer_NM102 : { type: graphql.GraphQLString },
        NM108_OtherPayer : { type: graphql.GraphQLString },
        NM109_OtherPayer : { type: graphql.GraphQLString },
        OtherPayerAddress : { type: graphql.GraphQLString },
        OtherPayerCityStateZip : { type: graphql.GraphQLString },
        ClaimCheckOrRemittanceDate : { type: graphql.GraphQLString },
        LX : { type: graphql.GraphQLString },
        SV201 : { type: graphql.GraphQLString },
        SV202 : { type: graphql.GraphQLString },
        SV202_1 : { type: graphql.GraphQLString },
        SV202_2 : { type: graphql.GraphQLString },
        SV202_3 : { type: graphql.GraphQLString },
        SV202_4 : { type: graphql.GraphQLString },
        SV202_5 : { type: graphql.GraphQLString },
        SV202_6 : { type: graphql.GraphQLString },
        SV202_7 : { type: graphql.GraphQLString },
        SV203 : { type: graphql.GraphQLString },
        SV204 : { type: graphql.GraphQLString },
        SV205 : { type: graphql.GraphQLString },
        SV207 : { type: graphql.GraphQLString },
        LinSupplimentalInfo_PWK01 : { type: graphql.GraphQLString },
        PWK02 : { type: graphql.GraphQLString },
        PWK05 : { type: graphql.GraphQLString },
        ServiceDate : { type: graphql.GraphQLString },
        LIN02_DrugIdentification : { type: graphql.GraphQLString },
        LIN03 : { type: graphql.GraphQLString },
        CTP04_DrugQuantity : { type: graphql.GraphQLString },
        CTP05 : { type: graphql.GraphQLString },
        CTP05_1 : { type: graphql.GraphQLString },
        SVD01 : { type: graphql.GraphQLString },
        SVD02 : { type: graphql.GraphQLString },
        SVD03 : { type: graphql.GraphQLString },
        SVD03_1 : { type: graphql.GraphQLString },
        SVD03_2 : { type: graphql.GraphQLString },
        SVD03_3 : { type: graphql.GraphQLString },
        SVD05 : { type: graphql.GraphQLString },
        LineCheckOrRemittanceDate : { type: graphql.GraphQLString },
        RemainingPatientLiability : { type: graphql.GraphQLString },
        ErrorCode : { type: graphql.GraphQLString },
        ClaimLineLevelErrors : { type: graphql.GraphQLString },
        Field1 : { type: graphql.GraphQLString },
        Field2 : { type: graphql.GraphQLString },
        Field3 : { type: graphql.GraphQLString },
        Field4 : { type: graphql.GraphQLString },
        adjustment : { type: graphql.GraphQLString },
        type_of_adjustment : { type: graphql.GraphQLString },
        RemainigAmt : { type: graphql.GraphQLString }
        
    }
});
const FileInTake835 = new graphql.GraphQLObjectType({
    name: "FileInTake835",
    fields: {
        SeqID: { type: graphql.GraphQLID },
        FileID : { type: graphql.GraphQLString },
        TransactionID :  { type: graphql.GraphQLInt }, 
        FileName :  { type: graphql.GraphQLString },
        FileDate :  { type: graphql.GraphQLString },
        BatchID :  { type: graphql.GraphQLString },
        TransmissionID :  { type: graphql.GraphQLInt }, 
        TradingPartner :  { type: graphql.GraphQLString },
        InterchangeSenderID :  { type: graphql.GraphQLString },
        InterchangeControlNumber :  { type: graphql.GraphQLInt },
        InterchangeDate : { type: graphql.GraphQLString },
        InterchangeTime : { type: graphql.GraphQLString },
        SubmitterID :  { type: graphql.GraphQLString },
        ReceiverName :  { type: graphql.GraphQLString },
        ReceiverID :  { type: graphql.GraphQLString },
        Destination :  { type: graphql.GraphQLString },
        ISA01 :  { type: graphql.GraphQLString },
        ISA02 :  { type: graphql.GraphQLString },
        ISA03  : { type: graphql.GraphQLString },
        ISA04  : { type: graphql.GraphQLString },
        ISA05 :  { type: graphql.GraphQLString },
        ISA06  : { type: graphql.GraphQLString },
        ISA07 :  { type: graphql.GraphQLString },
        ISA08 : { type: graphql.GraphQLString },
        ISA09 :  { type: graphql.GraphQLString },
        ISA10 :  { type: graphql.GraphQLString },
        ISA11  : { type: graphql.GraphQLString },
        ISA12 :  { type: graphql.GraphQLString },
        ISA13  : { type: graphql.GraphQLString },
        ISA14 :  { type: graphql.GraphQLString },
        ISA15  : { type: graphql.GraphQLString },
        ISA16  : { type: graphql.GraphQLString },
        GSA01 :  { type: graphql.GraphQLString },
        GSA02 :  { type: graphql.GraphQLString },
        GSA03  :  { type: graphql.GraphQLString },
        GSA04  : { type: graphql.GraphQLString },
        GSA05 :  { type: graphql.GraphQLString },
        GSA06  : { type: graphql.GraphQLString },
        GSA07 :  { type: graphql.GraphQLString },
        GSA08  : { type: graphql.GraphQLString },
        ST01 :  { type: graphql.GraphQLString },
        ST02  : { type: graphql.GraphQLString },
        ST03 : { type: graphql.GraphQLString },
        BHT01 : { type: graphql.GraphQLString },
        BHT02 : { type: graphql.GraphQLString },
        BHT03 : { type: graphql.GraphQLString },
        BHT04 : { type: graphql.GraphQLString },
        BHT05 : { type: graphql.GraphQLString },
        BHT06 : { type: graphql.GraphQLString },
        Sumbitter_N101 : { type: graphql.GraphQLString },
        Submitter_N102 : { type: graphql.GraphQLString },
        Submitter_N103 : { type: graphql.GraphQLString },
        Submitter_N104 : { type: graphql.GraphQLString },
        Submitter_N301 : { type: graphql.GraphQLString },
        Submitter_N302 : { type: graphql.GraphQLString },
        Submitter_N401 : { type: graphql.GraphQLString },
        Submitter_N402 : { type: graphql.GraphQLString },
        Submitter_N403 : { type: graphql.GraphQLString },
        Submitter_PER01 : { type: graphql.GraphQLString },
        Submitter_PER02 : { type: graphql.GraphQLString },
        Submitter_PER03 : { type: graphql.GraphQLString },
        Submitter_PER04 : { type: graphql.GraphQLString },
        Submitter_PER05 : { type: graphql.GraphQLString },
        Submitter_PER06 : { type: graphql.GraphQLString },
        Receiver_N101 : { type: graphql.GraphQLString },
        Receiver_N102 : { type: graphql.GraphQLString },
        Receiver_N103 : { type: graphql.GraphQLString },
        Receiver_N104 : { type: graphql.GraphQLString },
        Receiver_N105 : { type: graphql.GraphQLString },
        Receiver_N301 : { type: graphql.GraphQLString },
        Receiver_N302 : { type: graphql.GraphQLString },
        Receiver_N401 : { type: graphql.GraphQLString },
        Receiver_N402 : { type: graphql.GraphQLString },
        Receiver_N403 : { type: graphql.GraphQLString },
        Receiver_PER01 : { type: graphql.GraphQLString },
        Receiver_PER02 : { type: graphql.GraphQLString },
        Receiver_PER03 : { type: graphql.GraphQLString },
        Receiver_PER04 : { type: graphql.GraphQLString },
        Receiver_PER05 : { type: graphql.GraphQLString },
        Receiver_PER06 : { type: graphql.GraphQLString },
        ClaimCount : { type: graphql.GraphQLInt },
        ExternalCorrelationToken :  { type: graphql.GraphQLString },
        ExtraField1 :  { type: graphql.GraphQLString },
        ExtraField2 :  { type: graphql.GraphQLString },
        ExtraField3 :  { type: graphql.GraphQLString },
        ExtraField4 : { type: graphql.GraphQLString },
        ExtraField5 :  { type: graphql.GraphQLString },
        ExtraField6 : { type: graphql.GraphQLString },
        ExtraField7 : { type: graphql.GraphQLString },
        ExtraField8 : { type: graphql.GraphQLString },
        ExtraField9 : { type: graphql.GraphQLString },
        CreatedBy : { type: graphql.GraphQLString },
        CreateDateTime :  { type: graphql.GraphQLString },
        Created_Date : { type: graphql.GraphQLString },
        FileStatus :  { type: graphql.GraphQLString },
        FileLevelErrors :  { type: graphql.GraphQLString },
        Field2 :  { type: graphql.GraphQLString },
        Field3 : { type: graphql.GraphQLString },
        Field4 : { type: graphql.GraphQLString },
        Field5 : { type: graphql.GraphQLString },
        Field6 :  { type: graphql.GraphQLString },
        error_claimcount :{ type: graphql.GraphQLInt }
    }
});
const Eligibilty270 = new graphql.GraphQLObjectType({
    name: "Eligibilty270",
    fields: {
        ID: { type: graphql.GraphQLID },
        TypeofTransaction: { type: graphql.GraphQLString },
        AvgResTime: { type: graphql.GraphQLString },
        TotalNumOfReq: { type: graphql.GraphQLInt } ,
        Success: { type: graphql.GraphQLInt },
        Error: { type: graphql.GraphQLInt },
        Created_Date  : { type: graphql.GraphQLString }
    }
});
const Eligibility276 = new graphql.GraphQLObjectType({
    name: "Eligibility276",
    fields: {
        ID: { type: graphql.GraphQLID },
        TypeofTransaction: { type: graphql.GraphQLString },
        AvgResTime: { type: graphql.GraphQLString },
        TotalNumOfReq: { type: graphql.GraphQLInt } ,
        Success: { type: graphql.GraphQLInt },
        Error: { type: graphql.GraphQLInt }
    }
});
//SP_GetenrollmentDetails834
const SP_GetenrollmentDetails834 = new graphql.GraphQLObjectType({
    name: "SP_GetenrollmentDetails834",
    fields: {
        ID: { type: graphql.GraphQLInt },
        SFHPID: { type: graphql.GraphQLString },
        CIN: { type: graphql.GraphQLString },		
        FirstName: { type: graphql.GraphQLString },	
        LastName: { type: graphql.GraphQLString },		
        Member_Birth_date: { type: graphql.GraphQLString },		
        Eligibility_Errors: { type: graphql.GraphQLString },		
        Inbound_X12_status: { type: graphql.GraphQLString },		
        Qnxt_status: { type: graphql.GraphQLString },		
        X12_Eff_date: { type: graphql.GraphQLString },		
        Qeffdate: { type: graphql.GraphQLString },		
        X12_Term_date: { type: graphql.GraphQLString },		
        Qenddate: { type: graphql.GraphQLString },		
        F834ToQNXT: { type: graphql.GraphQLString },		
        Member_death_date: { type: graphql.GraphQLString },		
        FAMEDetails_status: { type: graphql.GraphQLString },		
        CustomDB_staus: { type: graphql.GraphQLString },		
        PlanIntegration_status: { type: graphql.GraphQLString },		
        IPA_status: { type: graphql.GraphQLString },		
        Plancode: { type: graphql.GraphQLString },		
        Error_Type: { type: graphql.GraphQLString },		
        custome_errors: { type: graphql.GraphQLString },		
        Outbound_status: { type: graphql.GraphQLString }
    }
});

const IntakeClaimDatatblwithFile = new graphql.GraphQLObjectType({
    name: "IntakeClaimDatatblwithFile",
    fields: {
        SeqID: { type: graphql.GraphQLID },
        FileID : { type: graphql.GraphQLString },
        TransactionID :  { type: graphql.GraphQLInt }, 
        FileName :  { type: graphql.GraphQLString },
        FileDate :  { type: graphql.GraphQLString },
        BatchID :  { type: graphql.GraphQLString },
        TransmissionID :  { type: graphql.GraphQLInt }, 
        ClaimExtNmbr : { type: graphql.GraphQLString },
        ClaimID : { type: graphql.GraphQLString },
        ClaimTMTrackingID : { type: graphql.GraphQLString },
        PaytoPlanInfo : { type: graphql.GraphQLString },
        Billing_Provider_ID : { type: graphql.GraphQLString },
        SecondaryBilling_ID : { type: graphql.GraphQLString },
        Subscriber_ID : { type: graphql.GraphQLString },
        ExtSubscriber_ID : { type: graphql.GraphQLString },
        Member_ID : { type: graphql.GraphQLString },
        Member_Account_Number : { type: graphql.GraphQLString },
        Member_Last_Name : { type: graphql.GraphQLString },
        Member_First_Name : { type: graphql.GraphQLString },
        MemberMI : { type: graphql.GraphQLString },
        Member_DOB : { type: graphql.GraphQLString },
        DiagnosisCodes : { type: graphql.GraphQLString },
        Claim_Amount : { type: graphql.GraphQLString },
        PatientPaid : { type: graphql.GraphQLString },
        NetBalance : { type: graphql.GraphQLString },
        Adjust : { type: graphql.GraphQLString },
        InsuranceBalance : { type: graphql.GraphQLString },
        VAN_Trace_Number : { type: graphql.GraphQLString },
        COB_Claim_Number : { type: graphql.GraphQLString },
        ClaimStatus : { type: graphql.GraphQLString },
        ClaimCode : { type: graphql.GraphQLString },
        OtherID : { type: graphql.GraphQLString },
        ClaimSupplimentalInfo : { type: graphql.GraphQLString },
        ContractInformation : { type: graphql.GraphQLString },
        PatientDueAmmount : { type: graphql.GraphQLString },
        ExternalCorrelationToken : { type: graphql.GraphQLString },
        LineCount : { type: graphql.GraphQLString },
        ExtraField1 : { type: graphql.GraphQLString },
        ExtraField2 : { type: graphql.GraphQLString },
        ExtraField3 : { type: graphql.GraphQLString },
        ExtraField4 : { type: graphql.GraphQLString },
        ExtraField5 : { type: graphql.GraphQLString },
        ExtraField6 : { type: graphql.GraphQLString },
        ExtraField7 : { type: graphql.GraphQLString },
        ExtraField8 : { type: graphql.GraphQLString },
        ExtraField9 : { type: graphql.GraphQLString },
        CreatedBy : { type: graphql.GraphQLString },
        CreateDateTime : { type: graphql.GraphQLString },
        Created_Date : { type: graphql.GraphQLString },
        HL_ID_BillingProvider : { type: graphql.GraphQLString },
        HL_Level_BillingProvider : { type: graphql.GraphQLString },
        PRV_Billing01 : { type: graphql.GraphQLString },
        PRV_Billing02 : { type: graphql.GraphQLString },
        PRV_Billing03 : { type: graphql.GraphQLString },
        NM101_BillingProviderId : { type: graphql.GraphQLString },
        BillingProviderLastName : { type: graphql.GraphQLString },
        BillingProviderFirstName : { type: graphql.GraphQLString },
        NM108_BillingProvider : { type: graphql.GraphQLString },
        NM109_BillingProvider : { type: graphql.GraphQLString },
        BillingProviderAddress : { type: graphql.GraphQLString },
        BillingProviderCity_State_Zip : { type: graphql.GraphQLString },
        BillingProvider_TaxId : { type: graphql.GraphQLString },
        BillingProvider_PER01 : { type: graphql.GraphQLString },
        BillingProvider_PER02 : { type: graphql.GraphQLString },
        BillingProvider_PER03 : { type: graphql.GraphQLString },
        BillingProvider_PER04 : { type: graphql.GraphQLString },
        NM101_PayToProvider : { type: graphql.GraphQLString },
        PayToProviderLastName : { type: graphql.GraphQLString },
        PayToProviderFirstName : { type: graphql.GraphQLString },
        NM108_PayToProvider : { type: graphql.GraphQLString },
        NM109_PayToProvider : { type: graphql.GraphQLString },
        PayToProviderAddress : { type: graphql.GraphQLString },
        PayToProviderCity_State_Zip : { type: graphql.GraphQLString },
        PayToProvider_TaxId : { type: graphql.GraphQLString },
        PayToProvider_PER01 : { type: graphql.GraphQLString },
        PayToProvider_PER02 : { type: graphql.GraphQLString },
        PayToProvider_PER03 : { type: graphql.GraphQLString },
        PayToProvider_PER04 : { type: graphql.GraphQLString },
        HL_ID_Subscriber : { type: graphql.GraphQLString },
        HL_Level_Subscriber : { type: graphql.GraphQLString },
        SBR01 : { type: graphql.GraphQLString },
        SBR02 : { type: graphql.GraphQLString },
        SBR03 : { type: graphql.GraphQLString },
        SBR09 : { type: graphql.GraphQLString },
        SubscriberLastName : { type: graphql.GraphQLString },
        SubscriberFirstName : { type: graphql.GraphQLString },
        SubscriberDOB : { type: graphql.GraphQLString },
        NM108_Subscriber : { type: graphql.GraphQLString },
        NM109_Subscriber : { type: graphql.GraphQLString },
        SubscriberAddress : { type: graphql.GraphQLString },
        SubscriberCity_State_Zip : { type: graphql.GraphQLString },
        SubscriberSecondaryIdentification : { type: graphql.GraphQLString },
        CasualityClaimNumber : { type: graphql.GraphQLString },
        PayerLastName : { type: graphql.GraphQLString },
        PayerFirstName : { type: graphql.GraphQLString },
        NM108_Payer : { type: graphql.GraphQLString },
        NM109_Payer : { type: graphql.GraphQLString },
        PayerAddress : { type: graphql.GraphQLString },
        PayerCity_State_Zip : { type: graphql.GraphQLString },
        PayerSecondaryId : { type: graphql.GraphQLString },
        BillingProviderSecondaryId : { type: graphql.GraphQLString },
        HL_ID_Patient : { type: graphql.GraphQLString },
        HL_Level_Patient : { type: graphql.GraphQLString },
        PatientLastName : { type: graphql.GraphQLString },
        PatientFirstName : { type: graphql.GraphQLString },
        NM108_Patient : { type: graphql.GraphQLString },
        NM109_Patient : { type: graphql.GraphQLString },
        PatientAddress : { type: graphql.GraphQLString },
        PatientCity_State_Zip : { type: graphql.GraphQLString },
        PatientDOB : { type: graphql.GraphQLString },
        CLM01 : { type: graphql.GraphQLString },
        CLM02 : { type: graphql.GraphQLString },
        CLM05_01 : { type: graphql.GraphQLString },
        CLM05_02 : { type: graphql.GraphQLString },
        CLM05_03 : { type: graphql.GraphQLString },
        StatementBegin : { type: graphql.GraphQLString },
        StatementEnd : { type: graphql.GraphQLString },
        DischargeHour : { type: graphql.GraphQLString },
        AdmissionDate : { type: graphql.GraphQLString },
        RepricerReceivevDate : { type: graphql.GraphQLString },
        ErrorCode : { type: graphql.GraphQLString },
        ErrorDesc : { type: graphql.GraphQLString },
        Field1 : { type: graphql.GraphQLString },
        ClaimLevelErrors : { type: graphql.GraphQLString },
        Field3 : { type: graphql.GraphQLString },
        Field4 : { type: graphql.GraphQLString },
        NM109_2330 : { type: graphql.GraphQLString },
        CLM_11 : { type: graphql.GraphQLString },
        ClaimLevelICDErrorFlag : { type: graphql.GraphQLString },
        ClaimLevelCLMErrorFlag : { type: graphql.GraphQLString },
        HI01 : { type: graphql.GraphQLString },
        adjudication_status : { type: graphql.GraphQLString } ,
        FSubmitter_N103 : { type: graphql.GraphQLString } ,
        FReceiver_N103 : { type: graphql.GraphQLString } ,
        FExtraField2 : { type: graphql.GraphQLString },
        FileID : { type: graphql.GraphQLString } 
    }
});

const Eligibilty_DateWise = new graphql.GraphQLObjectType({
    name: "Eligibilty_DateWise",
    fields: {
        Trans_CountID: { type: graphql.GraphQLID },
        TypeOfTransaction: { type: graphql.GraphQLString },
        AvgResTime: { type: graphql.GraphQLString },
        TotalNumOfReq: { type: graphql.GraphQLInt } ,
        Success: { type: graphql.GraphQLInt },
        Error: { type: graphql.GraphQLInt },
        Date : { type: graphql.GraphQLString },
        Trans_type : { type: graphql.GraphQLString },
         Submiter : { type: graphql.GraphQLString },
        Trans_ID : { type: graphql.GraphQLInt },
         Error_Code :{ type: graphql.GraphQLString }
    }
 });

 const ClaimsDailyAuditCount = new graphql.GraphQLObjectType({
    name: "ClaimsDailyAuditCount",
    fields: {
        SubTotal: { type: graphql.GraphQLInt } ,
        VeriTotal : { type: graphql.GraphQLInt } ,
        InBizstockTotal : { type: graphql.GraphQLInt } ,
        PenTotal : { type: graphql.GraphQLInt } ,
        RejTotal : { type: graphql.GraphQLInt } ,
        errTotal: { type: graphql.GraphQLInt }
    }
 });
 //ClaimsDailyAudit
 const ClaimsDailyAudit = new graphql.GraphQLObjectType({
    name: "ClaimsDailyAudit",
    fields: {
        FileID: { type: graphql.GraphQLString } ,
        filename    : { type: graphql.GraphQLString } ,                    
        Submitted: { type: graphql.GraphQLInt } ,
        Rejected : { type: graphql.GraphQLInt } ,
        Pending : { type: graphql.GraphQLInt } ,
        Verified : { type: graphql.GraphQLInt } ,
        Error : { type: graphql.GraphQLInt } ,
        InBizstock: { type: graphql.GraphQLInt }
    }
 });

 const ClaimsICDCODE = new graphql.GraphQLObjectType({
    name: "ClaimsICDCODE",
    fields: {
        SeqId: { type: graphql.GraphQLID },
        ICD_CODE: { type: graphql.GraphQLString },
        Year: { type: graphql.GraphQLString },
        ExtraField1: { type: graphql.GraphQLString } 
    }
});

const SPClaimAmount = new graphql.GraphQLObjectType({
    name: "SPClaimAmount",
    fields: {
        claim_amount: { type: graphql.GraphQLFloat },
        ClaimStatus: { type: graphql.GraphQLString }
    }
});

const SP_834DailyDashboardCount = new graphql.GraphQLObjectType({
    name: "SP_834DailyDashboardCount",
    fields: {
        total_file: { type: graphql.GraphQLInt },
        Total_enrollment: { type: graphql.GraphQLInt },
        addition: { type: graphql.GraphQLInt },
        Change: { type: graphql.GraphQLInt },
        term: { type: graphql.GraphQLInt }, Auditcount: { type: graphql.GraphQLInt },
        Error: { type: graphql.GraphQLInt },
        Resubmit: { type: graphql.GraphQLInt }
    }
});

const SP_834FilecountwisedetailsGQL = new graphql.GraphQLObjectType({
    name: "SP_834FilecountwisedetailsGQL",
    fields: {
        FileName: { type: graphql.GraphQLString },
        FileID: { type: graphql.GraphQLString },
        sender: { type: graphql.GraphQLString },
        receiver: { type: graphql.GraphQLString },
        FileStatus: { type: graphql.GraphQLString }, 
        CreateDateTime: { type: graphql.GraphQLString },
        dcount: { type: graphql.GraphQLInt } 
    }
});

const SP_834FileDetails = new graphql.GraphQLObjectType({
    name: "SP_834FileDetails",
    fields: {
        SubscriberNo: { type: graphql.GraphQLString },
        fileid: { type: graphql.GraphQLString },
        Enrollment_type: { type: graphql.GraphQLString },
        InsLineCode: { type: graphql.GraphQLString },
        TransCode: { type: graphql.GraphQLString }, 
        MemberAmount: { type: graphql.GraphQLString }  ,
        Error: { type: graphql.GraphQLString }, 
        CreateDateTime: { type: graphql.GraphQLString }        
    }
});

//SP_834FileDetailsPaging

 const SP_834FileDetailsPagingGQL = new graphql.GraphQLObjectType({
    name: "SP_834FileDetailsPagingGQL",
    fields: {
        SubscriberNo: { type: graphql.GraphQLString },
        fileid: { type: graphql.GraphQLInt },
        Enrollment_type: { type: graphql.GraphQLString },
        InsLineCode: { type: graphql.GraphQLString },
        TransCode: { type: graphql.GraphQLString },
        Insurer_Status: { type: graphql.GraphQLString },
        MemberAmount: { type: graphql.GraphQLString }  ,
        Error: { type: graphql.GraphQLString },
        CreateDateTime: { type: graphql.GraphQLString }  ,
        status1: { type: graphql.GraphQLString }  ,
        seqid: { type: graphql.GraphQLInt }
    }
 });
//SP_834FileHeaderDetails
const SP_834FileHeaderDetails = new graphql.GraphQLObjectType({
    name: "SP_834FileHeaderDetails",
    fields: {
        FileName: { type: graphql.GraphQLString },
        FileID: { type: graphql.GraphQLString },
        sender: { type: graphql.GraphQLString },
        receiver: { type: graphql.GraphQLString },
        SubscriberNo: { type: graphql.GraphQLString }, 
        MemberFName: { type: graphql.GraphQLString }  ,
        MemberLName: { type: graphql.GraphQLString }, 
        Telephone: { type: graphql.GraphQLString },
        StreetAddress: { type: graphql.GraphQLString },	
        City: { type: graphql.GraphQLString },	
        State: { type: graphql.GraphQLString },	
        PostalCode: { type: graphql.GraphQLString },	
        Enrollment_type: { type: graphql.GraphQLString },	
        dob: { type: graphql.GraphQLString },	
        gender: { type: graphql.GraphQLString },	
        InsLineCode: { type: graphql.GraphQLString },	
        MemberAmount: { type: graphql.GraphQLString },	
        EnrollmentStatus: { type: graphql.GraphQLString },	
        StartDate: { type: graphql.GraphQLString },	
        EndDate: { type: graphql.GraphQLString },	
        CreateDateTime: { type: graphql.GraphQLString },	
        relationship: { type: graphql.GraphQLString },	
        member_relationship_name: { type: graphql.GraphQLString }        
    }
});

//SP_Daily834headerData
const SP_Daily834headerData = new graphql.GraphQLObjectType({
    name: "SP_Daily834headerData",
    fields: {
        FileName: { type: graphql.GraphQLString },
        FileID: { type: graphql.GraphQLInt },
        sender: { type: graphql.GraphQLString },
        receiver: { type: graphql.GraphQLString },
        total: { type: graphql.GraphQLString }, 
        FileStatus: { type: graphql.GraphQLString }  ,
        CreateDateTime: { type: graphql.GraphQLString }       
    }
});

//SP_GetenrollmentDetails834
const SP_GetenrollmentDetails834GQL = new graphql.GraphQLObjectType({
    name: "SP_GetenrollmentDetails834GQL",
    fields: {
        									
        ID: { type: graphql.GraphQLInt },
        SFHPID: { type: graphql.GraphQLString },
        CIN: { type: graphql.GraphQLString },
        FirstName: { type: graphql.GraphQLString },
        LastName: { type: graphql.GraphQLString },
        Member_Birth_date: { type: graphql.GraphQLString }, 
        Eligibility_Errors: { type: graphql.GraphQLString }  ,
        Inbound_X12_status: { type: graphql.GraphQLString }, 
        Qnxt_status: { type: graphql.GraphQLString } ,
        X12_Eff_date: { type: graphql.GraphQLString } ,	
        Qeffdate: { type: graphql.GraphQLString } ,	
        X12_Term_date: { type: graphql.GraphQLString } ,	
        Qenddate: { type: graphql.GraphQLString } ,	
        F834ToQNXT : {type: graphql.GraphQLString },	
        Member_death_date: { type: graphql.GraphQLString } ,	
        FAMEDetails_status: { type: graphql.GraphQLString } ,	
        CustomDB_staus	: { type: graphql.GraphQLString } ,
        PlanIntegration_status	: { type: graphql.GraphQLString } ,
        IPA_status	: { type: graphql.GraphQLString } ,
        Plancode	: { type: graphql.GraphQLString } ,
        Error_Type	: { type: graphql.GraphQLString } ,
        custome_errors	: { type: graphql.GraphQLString } ,
        Outbound_status: { type: graphql.GraphQLString } 
    }
});

const IntakeClaimDatatblwithFileSummary = new graphql.GraphQLObjectType({
    name: "IntakeClaimDatatblwithFileSummary",
    fields: {
        FileID: { type: graphql.GraphQLInt },
        FileName: { type: graphql.GraphQLString },
        FileDate: { type: graphql.GraphQLString },
        FSubmitter_N103: { type: graphql.GraphQLString },
        FReceiver_N103: { type: graphql.GraphQLString },
        FExtraField2: { type: graphql.GraphQLString }  ,
        BillingProviderLastName: { type: graphql.GraphQLString },
        BillingProviderFirstName: { type: graphql.GraphQLString },
        CreateDateTime: { type: graphql.GraphQLString },    
        CountData: { type: graphql.GraphQLInt }
    }
 });

 const loopid = new graphql.GraphQLObjectType({
    name: "loopid",
    fields: {
        loopid: { type: graphql.GraphQLString}
    }
 });
 const segment = new graphql.GraphQLObjectType({
    name: "segment",
    fields: {
        segment: { type: graphql.GraphQLString }
    }
 });
 const element = new graphql.GraphQLObjectType({
    name: "element",
    fields: {
        element: { type: graphql.GraphQLString }
    }
 });
 const Rules = new graphql.GraphQLObjectType({
    name: "Rules",
    fields: {
        seqid: { type: graphql.GraphQLString },
        transid    : { type: graphql.GraphQLString },
        loopid: { type: graphql.GraphQLString },
        segment: { type: graphql.GraphQLString },    
        element: { type: graphql.GraphQLString },    
        sub_element: { type: graphql.GraphQLString },
        operator: { type: graphql.GraphQLString },    
        value: { type: graphql.GraphQLString },    
        severity: { type: graphql.GraphQLString },    
        condition: { type: graphql.GraphQLString },    
        elementname: { type: graphql.GraphQLString },
        flag: { type: graphql.GraphQLString }
    }
 });

 const CompareFileHeader834 = new graphql.GraphQLObjectType({
    name: "CompareFileHeader834",
    fields: {
        FileName : { type: graphql.GraphQLString },
        fileDt: { type: graphql.GraphQLString },
        total_file: { type: graphql.GraphQLInt },
        Total_enrollment: { type: graphql.GraphQLInt },
        addition: { type: graphql.GraphQLInt },
        Change: { type: graphql.GraphQLInt },    
        term: { type: graphql.GraphQLInt },    
        Auditcount: { type: graphql.GraphQLInt },
        MemberCount: { type: graphql.GraphQLInt },    
        DependantCount: { type: graphql.GraphQLInt }
    }
 });

 const CompareFileDetail = new graphql.GraphQLObjectType({
    name: "CompareFileDetail",
    fields: {
        totalfilecount: { type: graphql.GraphQLInt },
        RCount: { type: graphql.GraphQLInt },
        seqid:{ type: graphql.GraphQLInt },    
        INS_Insurer_Status :{ type: graphql.GraphQLString },    
        SubscriberNo:{ type: graphql.GraphQLString },    
        MemberFName:{ type: graphql.GraphQLString },    
        MemberLName:{ type: graphql.GraphQLString },
        StreetAddress:{ type: graphql.GraphQLString },    
        City:{ type: graphql.GraphQLString },    
        State:{ type: graphql.GraphQLString },    
        PostalCode:{ type: graphql.GraphQLString },    
        dob:{ type: graphql.GraphQLString },    
        gender:{ type: graphql.GraphQLString },    
        DX:{ type: graphql.GraphQLString },    
        Subscriber_Home_Phone:{ type: graphql.GraphQLString },    
        Ref_Master_Policy_No:{ type: graphql.GraphQLString },    
        INS_Maintenance_Reason_code:{ type: graphql.GraphQLString },    
        DTP_336_Employment_BeginDT:{ type: graphql.GraphQLString },    
        NM109_Indetificationcode:{ type: graphql.GraphQLString },    
        Plan_Coverage_Level:{ type: graphql.GraphQLString },    
        INS_Insurer_Benefit_status:{ type: graphql.GraphQLString },    
        startdate:{ type: graphql.GraphQLString },    
        enddate:{ type: graphql.GraphQLString }    
    }
 });

 const CompareFileError834 = new graphql.GraphQLObjectType({
    name: "CompareFileError834",
    fields: {
        dbdesc :{ type: graphql.GraphQLString },    
        error_desc:{ type: graphql.GraphQLString },    
        RCount:{ type: graphql.GraphQLString }
    }
 });

 const SP_834EnrollementDetails = new graphql.GraphQLObjectType({
    name: "SP_834EnrollementDetails",
    fields: {
        FileName: { type: graphql.GraphQLString },
        FileID: { type: graphql.GraphQLInt },
        sender: { type: graphql.GraphQLString },
        receiver: { type: graphql.GraphQLString },
        IdentificationCode: { type: graphql.GraphQLString },
        InsurerStatus: { type: graphql.GraphQLString }  ,
        SubscriberNo: { type: graphql.GraphQLString }  ,
        MemberFName: { type: graphql.GraphQLString }  ,    
        MemberLName: { type: graphql.GraphQLString }  ,    
        Telephone: { type: graphql.GraphQLString }  ,    
        StreetAddress: { type: graphql.GraphQLString }  ,    
        City: { type: graphql.GraphQLString }  ,    
        State: { type: graphql.GraphQLString }  ,    
        PostalCode: { type: graphql.GraphQLString }  ,    
        Enrollment_type: { type: graphql.GraphQLString }  ,    
        dob: { type: graphql.GraphQLString }  ,    
        gender: { type: graphql.GraphQLString }  ,    
        Emplymentstatus: { type: graphql.GraphQLString }  ,    
        CreateDateTime: { type: graphql.GraphQLString }  ,    
        INS_Insurer_relationship: { type: graphql.GraphQLString }  ,    
        member_relationship_name: { type: graphql.GraphQLString }  ,    
        Plan_Coverage_Level: { type: graphql.GraphQLString }  ,    
        DTP_336_Employment_BeginDT: { type: graphql.GraphQLString }  ,    
        Member_Policy_No: { type: graphql.GraphQLString }  ,    
        Department_Agency: { type: graphql.GraphQLString }  ,    
        Error_Field: { type: graphql.GraphQLString }  ,    
        N1_Plan_insurer_name: { type: graphql.GraphQLString }
    }
 });
 

 const Trading_Partnerlist = new graphql.GraphQLObjectType({
    name: "Trading_Partnerlist",
    fields: {
        ID :{ type: graphql.GraphQLInt },    
        Trading_Partner_Name:{ type: graphql.GraphQLString },    
    }
 });

var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        Category: {
            type: graphql.GraphQLList(CategoryType),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                    strQuery = "SELECT * FROM Category;"                    
                    var request = new _sqlPackage.Request();
                    //Query to run in our database  
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            // console.log("Error while connecting to database:- " + error);  
                            // response.send(error);  
                            reject([]);
                        }
                        else {
                            // response.send(responseResult);  
                            rowData = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowData.push(element)
                            });
                        }
                    });                    
                });
            }
        },
        FileInCount: {
            type: graphql.GraphQLList(FileInCnt),

            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                    strQuery = "SELECT count(*) as totalFile FROM FileInTake;"                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowFileInCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowFileInCount.push(element)
                            });
                        }
                    });                   
                });
            }
        },
        ClaimCount: {
            type: graphql.GraphQLList(ClaimCnt),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {                    
                    strQuery = "SELECT count(*) as SubCount from IntakeClaimData;"                   
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimCount.push(element)
                            });
                        }
                    });                   
                });
            }
        },
        ClaimAccCount: {
            type: graphql.GraphQLList(ClaimAccCount),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {                    
                strQuery = "SELECT count(*) as AccCount from IntakeClaimData where ClaimStatus='Accepted';"                   
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimAccCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimAccCount.push(element)
                            });
                        }
                    });                   
                });
            }
        },
        ClaimRejCount: {
            type: graphql.GraphQLList(ClaimRejCount),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {                    
                    strQuery = "SELECT count(*) as RejCount from IntakeClaimData where ClaimStatus='Rejected';"                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimRejCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimRejCount.push(element)
                            });
                        }
                    });                     
                });
            }
        },
        ClaimPaidCount: {
            type: graphql.GraphQLList(ClaimPaidCount),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {                   
                    strQuery = "SELECT count(*) as PaidCount from IntakeClaimData where claimStatus = 'Accepted' and adjudication_status = 'Paid';"
                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimPaidCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimPaidCount.push(element)
                            });
                        }
                    });                     
                });
            }
        },
        FileFailedFileCount: {
            type: graphql.GraphQLList(FileFailedFileCount),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                   
                    strQuery = "SELECT count(*) as FailedFileCount from FileInTake where ExtraField2 ='File Error'; "
                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowFileFailedFileCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowFileFailedFileCount.push(element)
                            });
                        }
                    });                     
                });
            }
        },
        SP_GetenrollmentDetails834 : {
            type: graphql.GraphQLList(SP_GetenrollmentDetails834),
            resolve: (root, {args}, context, info) => {
                return new Promise((resolve, reject) => {
                    strQuery = "execute SP_GetenrollmentDetails834GQL ";
                    // console.log(strQuery);
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            resolve(responseResult.recordset);
                        }
                    });
                });
            }
        },
        ClaimDeniedCount: {
            type: graphql.GraphQLList(ClaimDeniedCount),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                   
                    strQuery = "SELECT count(*) as DeniedCount from IntakeClaimData where claimStatus = 'Accepted' and adjudication_status = 'Partial Paid';"
                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });                        
                });
            }
        },
        FileInTake: {
            type: graphql.GraphQLList(FileInTakeData),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                    strQuery = "SELECT * FROM fileInTake;"                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });                     
                });
            }
        },
        IntakeClaimData: {
            type: graphql.GraphQLList(IntakeClaimDatatbl),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                    strQuery = "SELECT * FROM IntakeClaimData ;"                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });
                    
                });
            }
        },
        IntakeClaimDatatblwithFile: {
            type: graphql.GraphQLList(IntakeClaimDatatblwithFile),
            args: {
                page: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                }
            },
            resolve: (root, {page}, context, info) => {
                return new Promise((resolve, reject) => {                   
                    strQuery = "select  IntakeClaimData.*, FileInTake.Submitter_N103 as FSubmitter_N103, FileInTake.Receiver_N103 as FReceiver_N103,FileInTake.ExtraField2 as FExtraField2 from FileInTake " +
                        " inner join IntakeClaimData on FileInTake.fileID=IntakeClaimData.FileID " +
                        " order by seqid OFFSET (" + page +" -1) * 10 ROWS Fetch next 10 Rows ONLY;"                    
                        var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });                    
                });
            }
        },
        IntakeClaimLineData: {
            type: graphql.GraphQLList(IntakeClaimLineDatatbl),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                   
                    strQuery = "SELECT * FROM IntakeClaimLineData;"
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                     
                });
            }
        },
        IntakeClaimLineDataFileIDClaimID: {
            type: graphql.GraphQLList(IntakeClaimLineDatatbl),
            args: {
                FileID: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                },
                ClaimID: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                }
            },
            resolve: (root, { FileID, ClaimID }, context, info) => {
                return new Promise((resolve, reject) => {
                    
                    strQuery = "SELECT * FROM IntakeClaimLineData where FileID= '" + FileID + "' and ClaimID= '" + ClaimID + "' ;"
                                                var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                     
                });
            }
        },
        Eligibilty270: {
            type: graphql.GraphQLList(Eligibilty270),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {

                   
                    strQuery = "SELECT * FROM Eligibilty270;"
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                     
                });
            }
        },
        Eligibilty276: {
            type: graphql.GraphQLList(Eligibility276),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {

                   
                    strQuery = "SELECT * FROM Eligibility276;"
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                     
                });
            }
        },
        EligibilityAllDtlTypewise: {
            type: graphql.GraphQLList(Eligibilty_DateWise),
            args: {
                TypeID: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                }
            },
            resolve: (root, { TypeID }, context, info) => {
                return new Promise((resolve, reject) => {

                    
                    strQuery = "SELECT * FROM Eligibilty_DateWise where TypeOfTransaction= '" + TypeID + "'  ;"
                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });
                    
                });
            }
        },
        EligibilityErrorDtlTypewise: {
            type: graphql.GraphQLList(Eligibilty_DateWise),
            args: {
                TypeID: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                }
            },
            resolve: (root, { TypeID }, context, info) => {
                return new Promise((resolve, reject) => {
                    
                    strQuery = "SELECT * FROM Eligibilty_DateWise where TypeOfTransaction= '" + TypeID + "' and Trans_type ='Fail'  ;"
                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });                    
                });
            }
        },
        ClaimAccCountData: {
            type: graphql.GraphQLList(IntakeClaimDatatblwithFile),
            args: {
                page: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                }
            },
            resolve: (root, {page}, context, info) => {
                return new Promise((resolve, reject) => {
                    
                    strQuery = "select  IntakeClaimData.*, FileInTake.Submitter_N103 as FSubmitter_N103, FileInTake.Receiver_N103 as FReceiver_N103,FileInTake.ExtraField2 as FExtraField2 from FileInTake " +
                        " inner join IntakeClaimData on FileInTake.fileID=IntakeClaimData.FileID where IntakeClaimData.ClaimStatus='Accepted' " +
                        " order by IntakeClaimData.seqid OFFSET ("+ page +" -1) *10 ROWS Fetch next 10 Rows ONLY;"
                   
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });                     
                });
            }
        },
        ClaimRejCountData: {
            type: graphql.GraphQLList(IntakeClaimDatatblwithFile),
            args: {
                page: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                }
            },
            resolve: (root, {page}, context, info) => {
                return new Promise((resolve, reject) => {
                    
                    strQuery = "select  IntakeClaimData.*, FileInTake.Submitter_N103 as FSubmitter_N103, FileInTake.Receiver_N103 as FReceiver_N103,FileInTake.ExtraField2 as FExtraField2 from FileInTake " +
                        " inner join IntakeClaimData on FileInTake.fileID=IntakeClaimData.FileID where IntakeClaimData.ClaimStatus='Rejected' " +
                        " order by seqid OFFSET (" + page +" -1) * 10 ROWS Fetch next 10 Rows ONLY;"
                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });                      
                });
            }
        },
        ClaimPaidCountData: {
            type: graphql.GraphQLList(IntakeClaimDatatblwithFile),
            args: {
                page: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                }
            },
            resolve: (root, {page}, context, info) => {
                return new Promise((resolve, reject) => {
                    
                    strQuery = "select  IntakeClaimData.*, FileInTake.Submitter_N103 as FSubmitter_N103, FileInTake.Receiver_N103 as FReceiver_N103,FileInTake.ExtraField2 as FExtraField2 from FileInTake " +
                        " inner join IntakeClaimData on FileInTake.fileID=IntakeClaimData.FileID where IntakeClaimData.claimStatus = 'Accepted' and IntakeClaimData.adjudication_status = 'Paid'"+
                        " order by IntakeClaimData.seqid OFFSET (" + page +" -1) * 10 ROWS Fetch next 10 Rows ONLY;"
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                      
                });
            }
        },
        FileFailedFileCountdata: {
            //type: graphql.GraphQLList(FileInCnt),
            type: graphql.GraphQLList(FileInTakeData),
            args: {
                page: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                }
            },
            resolve: (root, {page}, context, info) => {
                return new Promise((resolve, reject) => {
                    
                    strQuery = "SELECT * from FileInTake where ExtraField2 ='File Error' order by seqid OFFSET ("+ page +" -1) *10 ROWS Fetch next 10 Rows ONLY; ;"                   
                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });                    
                });
            }
        },
        ClaimDeniedCountData: {
            type: graphql.GraphQLList(IntakeClaimDatatblwithFile),
            args: {
                page: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                }
            },
            resolve: (root, {page}, context, info) => {
                return new Promise((resolve, reject) => {
                    
                    strQuery = "select  IntakeClaimData.*, FileInTake.Submitter_N103 as FSubmitter_N103, FileInTake.Receiver_N103 as FReceiver_N103,FileInTake.ExtraField2 as FExtraField2 from FileInTake " +
                        " inner join IntakeClaimData on FileInTake.fileID=IntakeClaimData.FileID where IntakeClaimData.claimStatus = 'Accepted' and IntakeClaimData.adjudication_status = 'Partial Paid' " +
                        " order by IntakeClaimData.seqid OFFSET (" + page +" -1) * 10 ROWS Fetch next 10 Rows ONLY;"
                        var request = new _sqlPackage.Request();
                        request.query(strQuery, function (error, responseResult) {
                            if (error) {
                                reject([]);
                            }
                            else {
                                rowClaimDeniedCount = [];
                                resolve(responseResult.recordset);
                                responseResult.recordset.forEach(element => {
                                    rowClaimDeniedCount.push(element)
                                });
                            }
                        });
                       
                });
            }
        },
        ClaimsDailyAuditCount: {
            type: graphql.GraphQLList(ClaimsDailyAuditCount),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {

                    
                    strQuery = "select sum(submitted) as SubTotal,sum(InBizstock) as InBizstockTotal, sum(rejected) as RejTotal ,sum(Pending) as PenTotal,sum(Verified) as VeriTotal,sum(error) as errTotal "
                        + " from (select filename, count (claimid) as submitted,sum(rejected) as rejected ,sum(Pending) as Pending,sum(Verified) as Verified "
                        + " , (count (claimid)-(sum(rejected) + sum(Pending) + sum(Verified))) as error,"
                        + " count (claimid) -(count (claimid)-(sum(rejected) + sum(Pending) + sum(Verified))) as InBizstock"
                        + " from ("
                        + " select filename,claimid,case when Claimstatus='Rejected' then 1 else 0 end rejected,"
                        + " case when Claimstatus='Pending' then 1 else 0 end Pending"
                        + " ,case when Claimstatus='Accepted' then 1 else 0 end Verified"
                        + "  from IntakeClaimData) AS A group by Filename) as a;"
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                      
                });
            }
        },
        ClaimsDailyAudit: {
            type: graphql.GraphQLList(ClaimsDailyAudit),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {

                    
                    strQuery = "select FileID,filename, count (claimid) as Submitted, sum(rejected) as Rejected , sum(Pending) as Pending, sum(Verified) as Verified "
                        + " , (count (claimid)-(sum(rejected) + sum(Pending) + sum(Verified))) as Error, "
                        + " count (claimid) -(count (claimid)-(sum(rejected) + sum(Pending) + sum(Verified))) as InBizstock "
                        + " from ( "
                        + " select   FileID, filename,claimid,case when Claimstatus='Rejected' then 1 else 0 end rejected, "
                        + " case when Claimstatus='Pending' then 1 else 0 end Pending "
                        + " ,case when Claimstatus='Accepted' then 1 else 0 end Verified "
                        + " from IntakeClaimData "
                        + ") as A "
                        + " group by FileID,Filename order by FileID desc;"
                    
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });
                     
                });
            }
        },
        ClaimsICDCODE: {
            type: graphql.GraphQLList(ClaimsICDCODE),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                    
                    strQuery = "SELECT * FROM Claims_ICD_CODE;"
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                       
                });
            }
        },
        SPClaimAmount: {
            type: graphql.GraphQLList(SPClaimAmount),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {

                    
                    strQuery = "execute SP_GetClaimAmount"
                   
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                      
                });
            }
        },
        SP_834DailyDashboardCount: {
            type: graphql.GraphQLList(SP_834DailyDashboardCount),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                    strQuery = "execute SP_834DailyDashboardCount"
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                });
            }
        },
        SP_834FilecountwisedetailsGQL: {
            type: graphql.GraphQLList(SP_834FilecountwisedetailsGQL),
            args: {
                Type: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                }
            },
            resolve: (root, {Type}, context, info) => {
                return new Promise((resolve, reject) => {

                    
                    strQuery = "execute SP_834Filecountwisedetails '"+ Type +"'";
                
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                      
                });
            }
        },
        SP_834FileDetails: {
            type: graphql.GraphQLList(SP_834FileDetails),
            args: {
                Type: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                }
            },
            resolve: (root, {Type}, context, info) => {
                return new Promise((resolve, reject) => {

                    
                    strQuery = "execute SP_834FileDetails '"+ Type +"'";
                    // console.log(strQuery);
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                       
                });
            }
        },
        SP_834FileDetailsPagingGQL: {
            type: graphql.GraphQLList(SP_834FileDetailsPagingGQL),
            args: {
                Type: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                },
                PageIndex: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                },
                FileID: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                }
            },
            resolve: (root, {Type, PageIndex, FileID}, context, info) => {
                return new Promise((resolve, reject) => {

                    
                    strQuery = "execute SP_834FileDetailsPaging '"+ Type +"',"+ PageIndex +","+ FileID;
                    console.log(strQuery);
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                      
                });
            }
        },
        SP_834FileHeaderDetails: {
            type: graphql.GraphQLList(SP_834FileHeaderDetails),
            args: {
                FileID: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                },
                Subscriber: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                },
                Type: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                }
            },
            resolve: (root, {FileID, Subscriber, Type}, context, info) => {
                return new Promise((resolve, reject) => {

                    
                    strQuery = "execute SP_834FileHeaderDetails '"+ FileID +"','"+ Subscriber +"',"+ Type;
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                      
                });
            }
        },           
        SP_Daily834headerData: {
            type: graphql.GraphQLList(SP_Daily834headerData),            
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {

                    
                    strQuery = "execute SP_Daily834headerData ";
                    // console.log(strQuery);
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                     
                });
            }
        },

        SP_GetenrollmentDetails834GQL: {
            type: graphql.GraphQLList(SP_GetenrollmentDetails834GQL),            
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {

                    
                    strQuery = "execute SP_GetenrollmentDetails834GQL ";
                    // console.log(strQuery);
                    
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                     
                });
            }
        },
        SP_834EnrollementDetails: {
            type: graphql.GraphQLList(SP_834EnrollementDetails),
            args: {
                FileID: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                },
                Subscriber: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                }
            },
            resolve: (root, {FileID, Subscriber, Type}, context, info) => {
                return new Promise((resolve, reject) => {
                    strQuery = "execute SP_834EnrollementDetails '"+ FileID +"','"+ Subscriber +"'";
                    // console.log(strQuery);
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {
                                    rowClaimDeniedCount = [];
                                    resolve(responseResult.recordset);
                                    responseResult.recordset.forEach(element => {
                                        rowClaimDeniedCount.push(element)
                                    });
                                }
                            });
                });
            }
        },

        ClaimAccCountDataFileSummary: {
            type: graphql.GraphQLList(IntakeClaimDatatblwithFileSummary),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                    strQuery = "select distinct  IntakeClaimData.FileID,IntakeClaimData.FileName, IntakeClaimData.FileDate, " +
                    " FileInTake.Submitter_N103 as FSubmitter_N103,FileInTake.Receiver_N103 as FReceiver_N103, " +
                    " FileInTake.ExtraField2 as FExtraField2 ,IntakeClaimData.BillingProviderLastName, " +
                    " IntakeClaimData.BillingProviderFirstName,FileInTake.CreateDateTime, count(IntakeClaimData.SeqID) as CountData from FileInTake " +
                    " inner join IntakeClaimData on FileInTake.fileID=IntakeClaimData.FileID where IntakeClaimData.ClaimStatus='Accepted' " +
                    " group by IntakeClaimData.FileID,IntakeClaimData.FileName, IntakeClaimData.FileDate, " +
                    " FileInTake.Submitter_N103, FileInTake.Receiver_N103 ,FileInTake.ExtraField2 ,IntakeClaimData.BillingProviderLastName, " +
                    " IntakeClaimData.BillingProviderFirstName,FileInTake.CreateDateTime;"
                    // console.log(strQuery);
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });
                });
            }
        },

      loopid: {
        type: graphql.GraphQLList(loopid),
        args: {
            flag: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },                
            transaction: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }             
        },
        resolve: (root, {flag, transaction}, context, info) => {
            return new Promise((resolve, reject) => {
                
                strQuery = "execute SP_Rulesloopid '"+ flag +"','"+ transaction +"'";                    
                
                var request = new _sqlPackage.Request();
                request.query(strQuery, function (error, responseResult) {
                    if (error) {
                        reject([]);
                    }
                    else {                                   
                        resolve(responseResult.recordset);                                    
                    }
                });
                  
            });
        }
    },
    segment: {
        type: graphql.GraphQLList(segment),
        args: {
            flag: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },                
            transaction: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },
            loopid: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }   
        },
        resolve: (root, {flag, transaction,loopid}, context, info) => {
            return new Promise((resolve, reject) => {
                
                strQuery = "execute SP_Rulessegment '"+ flag +"','"+ transaction +"','"+ loopid +"'";                    
                
                var request = new _sqlPackage.Request();
                request.query(strQuery, function (error, responseResult) {
                    if (error) {
                        reject([]);
                    }
                    else {                                   
                        resolve(responseResult.recordset);                                    
                    }
                });
                  
            });
        }
    },
    element :{
        type: graphql.GraphQLList(element),
        args: {
            flag: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },                
            transaction: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },
            loopid: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },
            segment: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }   
        },
        resolve: (root, {flag, transaction,loopid,segment}, context, info) => {
            return new Promise((resolve, reject) => {
                
                strQuery = "execute SP_Ruleselement '"+ flag +"','"+ transaction +"','"+ loopid +"','"+ segment +"'";                    
                
                var request = new _sqlPackage.Request();
                request.query(strQuery, function (error, responseResult) {
                    if (error) {
                        reject([]);
                    }
                    else {                                   
                        resolve(responseResult.recordset);                                    
                    }
                });
                  
            });
        }
    },
    Rules :{
        type: graphql.GraphQLList(Rules),
        args: {
            flag: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },                
            transaction: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }             
        },
        resolve: (root, {flag, transaction}, context, info) => {
            return new Promise((resolve, reject) => {
                
                strQuery = "execute SP_RulesRecord '"+ flag +"','"+ transaction +"'";                    
                
                var request = new _sqlPackage.Request();
                request.query(strQuery, function (error, responseResult) {
                    if (error) {
                        reject([]);
                    }
                    else {                                   
                        resolve(responseResult.recordset);                                    
                    }
                });
                  
            });
        }
    },
    CompareFileHeader1_834: {
      type: graphql.GraphQLList(CompareFileHeader834),
       resolve: (root, args, context, info) => {
          return new Promise((resolve, reject) => {
              strQuery = "execute SP_834CompareFilesHeaderFile1 " ;
              var request = new _sqlPackage.Request();
              request.query(strQuery, function (error, responseResult) {
                  if (error) {
                      reject([]);
                  }
                  else {
                      rowClaimDeniedCount = [];
                      resolve(responseResult.recordset);
                      responseResult.recordset.forEach(element => {
                          rowClaimDeniedCount.push(element)
                      });
                  }
              });
          });
      }
  },
  CompareFileHeader2_834: {
    type: graphql.GraphQLList(CompareFileHeader834),
    resolve: (root, args, context, info) => {
        return new Promise((resolve, reject) => {
            strQuery = "execute SP_834CompareFilesHeaderFile2" ;
            var request = new _sqlPackage.Request();
            request.query(strQuery, function (error, responseResult) {
                if (error) {
                    reject([]);
                }
                else {
                    rowClaimDeniedCount = [];
                    resolve(responseResult.recordset);
                    responseResult.recordset.forEach(element => {
                        rowClaimDeniedCount.push(element)
                    });
                }
            });
        });
        }
    },
    CompareFileDetail: {
        type: graphql.GraphQLList(CompareFileDetail),
        args: {
            file1: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },
            file2: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }
        },
        resolve: (root, {file1, file2}, context, info) => {
            return new Promise((resolve, reject) => {
                strQuery = "execute SP_comparefiles '"+ file1 +"' ,'"+ file2 +"'" ;
                var request = new _sqlPackage.Request();
                request.query(strQuery, function (error, responseResult) {
                    if (error) {
                        reject([]);
                    }
                    else {
                        rowClaimDeniedCount = [];
                        resolve(responseResult.recordset);
                        responseResult.recordset.forEach(element => {
                            rowClaimDeniedCount.push(element)
                        });
                    }
                });
            });
            }
        },
        CompareFileError834: {
            type: graphql.GraphQLList(CompareFileError834),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {
                    strQuery = "execute SP_834CompareErrorwiseCount" ;
                    var request = new _sqlPackage.Request();
                    request.query(strQuery, function (error, responseResult) {
                        if (error) {
                            reject([]);
                        }
                        else {
                            rowClaimDeniedCount = [];
                            resolve(responseResult.recordset);
                            responseResult.recordset.forEach(element => {
                                rowClaimDeniedCount.push(element)
                            });
                        }
                    });
                });
            }
        },
    }
});

var mutationType = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {      
      updateFileInTake: {
        type: graphql.GraphQLString,
        args:{
            FileID:{
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }                     
        },
        resolve: (root, {FileID}) => {
            return new Promise((resolve, reject) => {
               let ClaimStatus ='Verified';
                
                strQuery = "UPDATE fileInTake SET ExtraField2 = '"+ ClaimStatus +"' WHERE FileID = '"+ FileID +"';"
                   
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {                                    
                                    resolve(`Contact #${FileID} updated`);                                    
                                }
                            });
                      
            })
        }
      },
      updateAccidentDate: {
        type: graphql.GraphQLString,
        args:{
            SeqID:{
                type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
            },
            AccidentDate: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }             
        },
        resolve: (root, {SeqID, AccidentDate }) => {
            return new Promise((resolve, reject) => {
                 let ClaimStatus ='Accepted';
                
                strQuery = "UPDATE IntakeClaimData SET ClaimExtNmbr ='"+ AccidentDate +"', ClaimStatus = '"+ ClaimStatus +"' WHERE SeqID = "+ SeqID +";"
                
                        var request = new _sqlPackage.Request();
                        request.query(strQuery, function (error, responseResult) {
                            if (error) {
                                reject([]);
                            }
                            else {                                    
                                resolve(`Contact #${SeqID} updated`);                                    
                            }
                        });
                   
            })
        }
      },
      updateICDCode: {
        type: graphql.GraphQLString,
        args:{
            SeqID:{
                type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
            },
            ICDCode: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }             
        },
        resolve: (root, {SeqID, ICDCode }) => {
            return new Promise((resolve, reject) => {
                 let ClaimStatus ='Accepted';
                
                strQuery = "UPDATE IntakeClaimData SET HI01 = '"+ ICDCode +"', ClaimStatus ='"+ ClaimStatus +"'  WHERE SeqID = "+ SeqID +";"
                   
                            var request = new _sqlPackage.Request();
                            request.query(strQuery, function (error, responseResult) {
                                if (error) {
                                    reject([]);
                                }
                                else {                                    
                                    resolve(`Contact #${SeqID} updated`);                                    
                                }
                            });
                      
            })
        }
      },
      Trading_PartnerList: {
        type: graphql.GraphQLList(Trading_Partnerlist),             
        resolve: (root, {args}, context, info) => {
            return new Promise((resolve, reject) => {
                strQuery = "select distinct ID , Trading_Partner_Name from Trading_Partner " ;                   
                var request = new _sqlPackage.Request();
                request.query(strQuery, function (error, responseResult) {
                    if (error) {
                        reject([]);
                    }
                    else {                                                    
                        resolve(responseResult.recordset);                            
                    }
                });                     
            });
        }
    },
    SP_Ignore834errordetails: {
        type: graphql.GraphQLString,
        args:{
            FileId:{
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },
            Nm109: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }
        },
        resolve: (root, {FileId, Nm109 }) => {
            return new Promise((resolve, reject) => {
                strQuery = "execute SP_Ignore834errordetails '"+ FileId +"','"+ Nm109 +"';"
                var request = new _sqlPackage.Request();
                request.query(strQuery, function (error, responseResult) {
                    if (error) {
                        reject([]);
                    }
                    else {
                        resolve(`Record updated successfully.`);
                    }
                });
            })
        }
      },
      SP_Update834errordetails: {
        type: graphql.GraphQLString,
        args:{
            FileId:{
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },
            Nm109: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }    ,
            Errordesc:{
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            },
            Value: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString)
            }
        },
        resolve: (root, {FileId, Nm109, Errordesc,Value }) => {
            return new Promise((resolve, reject) => {
                strQuery = "execute SP_Update834errordetails '"+ FileId +"','"+ Nm109 +"','"+ Errordesc +"','"+ Value +"';"
                var request = new _sqlPackage.Request();
                request.query(strQuery, function (error, responseResult) {
                    if (error) {
                        reject([]);
                    }
                    else {
                        resolve(`Record updated successfully.`);
                    }
                });
            })
        }
      },
    }
});

const schema = new graphql.GraphQLSchema({
    query: queryType ,
    mutation : mutationType
});

sqlapp.use("/graphql", ExpressGraphQL({ schema: schema, graphiql: true}));

sqlapp.get('/graphQlTest', (req, res) => {
    res.json({
        "files" : rowData, 
        "summary": [
            {name:'Claims Queue', value : 250},
            {name:'Work in Progress', value : 123},
            {name:'Total Files', value : totalFile},
            {name:'Submitted Claims', value : subCount},
            {name:'Paid Claims', value : PaidCount},
            {name:'Accepted Claims', value : AccCount},
            {name:'Failed File Load', value : FailedFileCount},
            {name:'Rejected Claims', value : RejCount},
            {name:'Partial Paid Claims', value : DeniedCount}
        ]
    });
});

sqlapp.get('/graphQlFiles', (req, res) => {
    res.json({
        "files" : rowData,
    });
});

// app.use("/contactsData",rowData);

// catch 404 and forward to error handler
sqlapp.use(function (req, res, next) {
    next(createError(404));
});
// error handler
sqlapp.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = sqlapp;