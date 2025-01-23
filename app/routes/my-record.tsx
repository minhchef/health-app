import {
  ActionFunctionArgs,
  redirect,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import DiaryBanner from "~/components/banner/DiaryBanner";
import ExceriseBanner from "~/components/banner/ExceriseBanner";
import RecordBanner from "~/components/banner/RecordBanner";
import Layout from "~/components/layout/Layout";
import Record from "~/components/records/Record";
import dailyIndex from "~/data/dailyIndex";
import diaryRecords from "~/data/dailyRecords";
import exercies from "~/data/exsercise";
import records from "~/data/record";
import { getSession } from "~/session";

export const meta: MetaFunction = () => {
  return [
    { title: "My record" },
    { name: "description", content: "Arent Health App - My Record" },
  ];
};

export const loader = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("user")) {
    return redirect("/login");
  }

  return Response.json({
    diaryData: dailyIndex,
    exercises: exercies,
    records,
    diaryRecords: diaryRecords,
  });
};

export default function Index() {
  const { diaryData, exercises, records } = useLoaderData<{
    diaryData: { date: string; data: DiaryData };
    exercises: Exercises;
    records: RecordData[];
    diaryRecords: DiaryRecord[];
  }>();

  return (
    <Layout>
      <div className="w-[960px] mx-auto text-center">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-5 w-full">
          {records.map((record, key) => (
            <Record key={key} {...record} />
          ))}
        </div>
      </div>
      <RecordBanner diaryData={diaryData.data} date={diaryData.date} />
      <ExceriseBanner exercises={exercises} />
      <DiaryBanner diaryRecords={diaryRecords} />
    </Layout>
  );
}
