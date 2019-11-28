const  express  =  require('express');
const  sqlite3  =  require('sqlite3').verbose();
const graphql = require("graphql");
const database = new sqlite3.Database("./de");
const router = express.Router();

var row = [];

const ContactType = new graphql.GraphQLObjectType({
    name: "Contact",
    fields: {
        id: { type: graphql.GraphQLID },
        firstName: { type: graphql.GraphQLString },
        lastName: { type: graphql.GraphQLString },
        email: { type: graphql.GraphQLString }
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


var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        contacts: {
            type: graphql.GraphQLList(ContactType),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {

                    database.all("SELECT * FROM contacts;", function (err, rows) {
                        if (err) {
                            reject([]);
                        }
                        console.log(rows);
                        rowData.push(rows);
                        resolve(rows);
                        
                    });
                });
            }
        },
        FileInTake: {
            type: graphql.GraphQLList(FileInTakeData),
            resolve: (root, args, context, info) => {
                return new Promise((resolve, reject) => {

                    database.all("SELECT * FROM fileInTake;", function (err, rows) {
                        if (err) {
                            reject([]);
                        }
                        rowData.push(rows);
                        resolve(rows);
                        
                    });
                });
            }
        }
    }
});

let schema = new graphql.GraphQLSchema({
    query: queryType
});

router.get('/testfile', function(req, res, next) {
    res.send("row");
  });

module.exports = router;
