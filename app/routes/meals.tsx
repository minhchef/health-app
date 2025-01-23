import {
  ActionFunctionArgs,
  redirect,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MainBanner from "~/components/banner/MainBanner";
import Layout from "~/components/layout/Layout";
import Meals from "~/components/meals/Meals";
import dailyIndex from "~/data/dailyIndex";
import meals from "~/data/meals";
import progress from "~/data/progress";
import { getSession } from "~/session";

export const meta: MetaFunction = () => {
  return [
    { title: "Health App" },
    { name: "description", content: "Arent Health App" },
  ];
};

export const loader = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("user")) {
    return redirect("/login");
  }

  return Response.json({
    diaryData: dailyIndex.data,
    mealData: meals.slice(0, 8),
    mealTotal: meals.length,
    progress,
  });
};

export default function Index() {
  const { diaryData, mealData, mealTotal, progress } = useLoaderData<{
    diaryData: DiaryData;
    mealData: Meal[];
    mealTotal: number;
    progress: Progress;
  }>();
  return (
    <Layout>
      <MainBanner diaryData={diaryData} progress={progress} />
      <Meals mealData={mealData} total={mealTotal} />
    </Layout>
  );
}
