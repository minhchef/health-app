import { ActionFunctionArgs, LoaderFunction, redirect } from "@remix-run/node";
import diaryRecords from "~/data/dailyRecords";
import { getSession } from "~/session";

export const action = async ({
  request,
}: ActionFunctionArgs) => {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  if (!session) {
    return redirect("/login");
  }
};

export const loader: LoaderFunction = async () => {
  return createJsonResponse({ diaries: diaryRecords });
};

const createJsonResponse = (data: object): Response => {
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};
