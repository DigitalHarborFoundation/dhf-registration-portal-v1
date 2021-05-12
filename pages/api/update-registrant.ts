import { NextApiHandler } from "next";
import Airtable from "airtable";

const airApiKey = process.env.AIR_API_KEY;
const baseId = process.env.BASE_ID;

const base = new Airtable({ apiKey: process.env.AIR_API_KEY }).base(
  process.env.BASE_ID
);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

const updateRegistrant: NextApiHandler = async (req, res) => {
  //   const campaignName = req.body.campaignName;
  //   const title = req.body.title;
  //   const description = req.body.description;
  const id = req.body.id;
  //   const campaignType = req.body.campaignType;
  //   const startDate = req.body.startDate;
  //   const endDate = req.body.endDate;
  //   const slideshowEnabled = req.body.slideshowEnabled;
  //   const smsEnabled = req.body.smsEnabled;
  //   const pinEnabled = req.body.pinEnabled;
  //   const textColor = req.body.textColor;
  //   const siteLogo = req.body.siteLogo;
  //   const photoOverlay = req.body.photoOverlay;
  //   const siteBackground = req.body.siteBackground;
  //   const userId = req.body.campaignUserId;
  //   const userEmail = req.body.campaignUserEmail;

  try {
    const campaignTable = base("Campaigns");

    const airtableRecord = await campaignTable.update([
      {
        id: id,
        fields: {},
      },
    ]);

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

export default updateRegistrant;
