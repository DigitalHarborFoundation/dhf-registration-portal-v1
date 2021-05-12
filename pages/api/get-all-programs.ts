import { NextApiHandler } from "next";
import Airtable from "airtable";
import { minifyRecords } from "../../libs/airtable";

const base = new Airtable({ apiKey: process.env.AIR_API_KEY }).base(
  process.env.BASE_ID
);

const getAllPrograms = async (req, res) => {
  const programsTable = base("Programs");

  return new Promise((resolve, reject) => {
    try {
      const airtableData = [];
      programsTable
        .select({
          view: "All Information",
          sort: [{ field: "Name", direction: "asc" }],
        })
        .eachPage(
          (records, fetchNextPage) => {
            records.forEach((record) => {
              const recordData = {
                id: record.id,
                fields: record.fields,
              };
              airtableData.push(recordData);
            });
            fetchNextPage();
          },
          (error) => {
            if (error) {
              console.error(error);
              reject({ error });
              return;
            }
            resolve(airtableData);

            const minifiedRecords = minifyRecords(airtableData);

            res.statusCode = 200;
            res.json(minifiedRecords);
          }
        );
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.json({ msg: "Something went wrong with the request." });
    }
  });
};

export default getAllPrograms;
