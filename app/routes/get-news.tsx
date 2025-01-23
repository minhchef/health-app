import { LoaderFunction } from "@remix-run/node";
import news from "~/data/news";

export const loader: LoaderFunction = async () => {
  return createJsonResponse({ news });
};

const createJsonResponse = (data: object): Response => {
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};
