import { rest } from "msw";
import { robotsMock } from "./mocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${apiUrl}robots`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(robotsMock))
  ),
];
