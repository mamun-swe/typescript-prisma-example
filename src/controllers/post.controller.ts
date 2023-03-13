import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma.config";

/* List of resources */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await prisma.post.findMany();

    res.status(200).json({
      data: results,
    });
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/* Store new resource */
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description } = req.body;

    const documents = {
      title,
      description,
      published: true,
    };

    await prisma.post.create({ data: documents });

    res.status(200).json({
      message: "Post created.",
    });
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/* Show specific resource */
export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await prisma.post.findUnique({ where: { id } });

    res.status(200).json({
      data: result || null,
    });
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};
