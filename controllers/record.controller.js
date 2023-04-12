const Record = require("../models/Record.model");
const moment = require("moment");

module.exports.recordController = {
  addRecord: async (req, res) => {
    try {
      const date = moment
        .utc(req.body.date, "YYYY-MM-DD HH:mm:ss.SSS")
        .toDate();
      const addedRecord = await Record.create({
        date,
        usluga: req.body.usluga,
        user: req.body.user,
        doctor: req.body.doctor,
      });
      return res.json(addedRecord);
    } catch (err) {
      return res.json(err);
    }
  },
  getAllRecords: async (req, res) => {
    try {
      const allRecords = await Record.find().populate("usluga doctor");
      return res.json(allRecords);
    } catch (err) {
      return res.json(err);
    }
  },
  changeRecordStatus: async (req, res) => {
    try {
      const currentRecord = await Record.findOne({_id: req.params.id})
      const changedStatusRecord = await Record.findByIdAndUpdate(
        req.params.id,
        {
          date: currentRecord.date.setSeconds(1),
          status: req.body.status,
        },
        { new: true }
      );
      return res.json(changedStatusRecord);
    } catch (err) {
      return res.json(err);
    }
  },
};
