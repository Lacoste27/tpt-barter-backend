import express from "express";
import { addPostReportHandler, addUserReportHandler, getReportByIdHandler, getReportsHandler, updatePostReportHandler, updateUserReportHandler } from "../controllers/report.controllers";

const router = express.Router();

router.get("/", getReportsHandler);
router.post('/user', addUserReportHandler);
router.post('/post', addPostReportHandler);
router.put('/user/:id', updateUserReportHandler);
router.put('/post/:id', updatePostReportHandler);
router.get('/:id', getReportByIdHandler);

export { router as ReportRoutes };
