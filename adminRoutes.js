const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddelware = require("../middlewares/adminMiddelware");


//router object
const router = express.Router();

//Routes

//GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddelware,
  adminMiddelware,
  getDonarsListController
);
//GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddelware,
  adminMiddelware,
  getHospitalListController
);
//GET || ORG LIST
router.get("/org-list", authMiddelware, adminMiddelware, getOrgListController);
// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddelware,
  adminMiddelware,
  deleteDonarController
);

//EXPORT
module.exports = router;
