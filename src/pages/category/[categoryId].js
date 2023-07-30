import { useGetAllProductsQuery } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";

const CpuProssesorPage = () => {
  const router = useRouter();
  const { data } = useGetAllProductsQuery();
  // console.log(data.data);
  const spacificPageData = data?.data?.map((products) => console.log(products));
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold border-b border-slate-400 uppercase">
        {router.query.categoryId}
      </h2>
    </div>
  );
};

export default CpuProssesorPage;
