import { Request, Response } from "express";
import * as notificationService from '../services/notification.services';

export const getNotificationsHandler = async (req: Request, res: Response) => {
  try {
    const notifications = await notificationService.getNotifications();
    return res.status(200).json({
      message: "Notifications get is working",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const addNotificationHandler = async (req: Request, res: Response) => {
  try {
    const { userId, message } = req.body;
    const notification = await notificationService.addNotification(userId, message);
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getUserNotificationsHandler = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const notifications = await notificationService.getUserNotifications(parseInt(userId));
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const markNotificationAsReadHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const notification = await notificationService.markNotificationAsRead(id);
    if (notification) {
      res.status(200).json(notification);
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getNotificationByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const notification = await notificationService.getNotificationById(id);
    if (notification) {
      res.status(200).json(notification);
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

