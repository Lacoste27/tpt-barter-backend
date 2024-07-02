import { Request, Response } from "express";
import * as reportService from '../services/report.services';

export const addUserReportHandler = async (req: Request, res: Response) => {
  try {
    const { referenceId, reason, reportedBy } = req.body;
    const report = await reportService.addReport('user', referenceId, reason, reportedBy);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const addPostReportHandler = async (req: Request, res: Response) => {
  try {
    const { referenceId, reason, reportedBy } = req.body;
    const report = await reportService.addReport('post', referenceId, reason, reportedBy);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Modifier un rapport
export const updateUserReportHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    const report = await reportService.updateReport(id, reason);
    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updatePostReportHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    const report = await reportService.updateReport(id, reason);
    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Récupérer les rapports
export const getReportsHandler = async (req: Request, res: Response) => {
  try {
    const { type } = req.query;
    const reports = await reportService.getReports(type as 'user' | 'post');
    res.status(200).json("Reports get is working");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Récupérer un rapport par ID (optionnel)
export const getReportByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const report = await reportService.getReportById(id);
    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};