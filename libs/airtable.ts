const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIR_API_KEY }).base(
  process.env.BASE_ID
);
const registrantsTable = base(process.env.REGISTRANTS_TABLE_NAME);

// nice tricks from James Q Quick!
const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

export { registrantsTable, getMinifiedRecord, minifyRecords };
