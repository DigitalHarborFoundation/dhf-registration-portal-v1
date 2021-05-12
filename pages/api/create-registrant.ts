import { NextApiHandler } from "next";
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIR_API_KEY }).base(
  process.env.BASE_ID
);

const registrantTable = base("Registrants-test");

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

const createRegistrant: NextApiHandler = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const programInstance = req.body.programInstance;
  console.log(
    "info from api route:",
    firstName,
    lastName,
    email,
    programInstance
  );

  try {
    const airtableRecord = await registrantTable.create({
      "First Name": firstName,
      "Last Name": lastName,
      Email: email,
      "Program Instances": ["recipLYhXyAFFL3wj"],
    });

    res.status(200).json({
      msg: "went through!",
      airtableRecord: airtableRecord,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      err: "Something went wrong with adding the registrant.",
    });
  }
};

export default createRegistrant;
