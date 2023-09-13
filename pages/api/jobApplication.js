import { mongooseConnect } from "@/lib/mongoose";

const { JobApp } = require("@/models/JobApp");

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await JobApp.findOne({ _id: req.query.id }));
    } else {
      const jobsSort = await JobApp.find().sort({ createdAt: -1 });
      res.json(jobsSort);
    }
  }
  if (method === "POST") {
    const {
      company,
      jobName,
      requirements,
      jobDescription,
      jobContacts,
      jobtype,
      seconState,
    } = req.body;

    const jobAppDoc = await JobApp.create({
      company,
      jobName,
      requirements,
      jobDescription,
      jobContacts,
      jobtype,
      seconState,
    });
    res.json(jobAppDoc);
  }

  if (method === "PUT") {
    const {
      company,
      jobName,
      requirements,
      jobDescription,
      jobContacts,
      jobtype,
      seconState,
      _id,
    } = req.body;
    await JobApp.updateOne(
      { _id },
      {
        company,
        jobName,
        requirements,
        jobDescription,
        jobContacts,
        jobtype,
        seconState,
      }
    );
    res.json(true);
  }
  if (method === "DELETE") {
    if (req.query?.id) {
      await JobApp.deleteOne({ _id: req.query.id });
      res.json(true);
    }
  }
};
export default handle;
