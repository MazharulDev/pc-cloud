// import RootLayout from "@/components/Layouts/RootLayout";

import Card from "@/components/UI/Card";
import { useAppDispatch } from "@/redux/hooks";
import { avarageRating } from "@/redux/product/productSlice";

const HomePage = ({ allProducts }) => {
  // const sumRating = allProducts?.data
  //   ?.map((productRate) => parseInt(productRate.rating))
  //   .reduce((a, b) => a + b);
  // const avarageRating = (sumRating / allProducts?.data?.length).toFixed(1);
  const dispatch = useAppDispatch();
  dispatch(avarageRating(allProducts?.data));
  // const randomProduct = Math.floor(Math.random() * allProducts?.data?.length);
  // console.log(randomProduct);
  return (
    <div>
      <div>
        <h2 className="text-center text-4xl font-bold my-4">
          Feature Products
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {allProducts?.data?.slice(0, 6).map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};

// HomePage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
