import { type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Category from "~/components/category/Category";
import Layout from "~/components/layout/Layout";
import News from "~/components/new/News";
import categories from "~/data/categories";
import news from "~/data/news";

export const meta: MetaFunction = () => {
  return [
    { title: "News" },
    { name: "description", content: "Arent Health App - News" },
  ];
};

export const loader = async () => {
  return Response.json({
    categories,
    news
  });
};

export default function Index() {
  const { categories, news } = useLoaderData<{ categories: Category[], news: New[] }>();

  return (
    <Layout>
      <div className="w-[960px] mx-auto text-center">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mt-5 w-full">
          {categories.map((category, key) => (
            <Category key={key} {...category} />
          ))}
        </div>
      </div>
      <News inittialNews={news} />
    </Layout>
  );
}
