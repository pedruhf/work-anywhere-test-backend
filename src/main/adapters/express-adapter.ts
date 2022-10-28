import { Controller } from "@/application/controllers";
import { HttpStatusCode } from "@/application/helpers";
import { Request, Response } from "express";

export const expressAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      body: req.body,
      params: req.params,
      query: req.query,
    };

    const { statusCode, data } = await controller.handle(request);

    const succesfulStatus = [
      HttpStatusCode.ok,
      HttpStatusCode.created,
      HttpStatusCode.noContent,
    ];
    if (succesfulStatus.includes(statusCode)) {
      return res.status(statusCode).json(data);
    }
    return res.status(statusCode).json({ message: data.message });
  };
};
