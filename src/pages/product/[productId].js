import Image from "next/image";
import React from "react";

const ProductDetailPage = ({ product }) => {
  console.log(product.data);
  const { img, name, category, status, price, keyFeature } = product?.data;
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-5 mx-auto">
      <div>
        <Image
          width={500}
          height={600}
          layout="responsive"
          src={img}
          alt="Laptop parts"
        />
      </div>
      <div>
        <h2 className="text-4xl mb-8">{name}</h2>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xl">{category}</p>
          <p className=" btn btn-success btn-xs">{status}</p>
        </div>
        <p className="text-xl font-bold mt-3">&#2547; {price}</p>
        <div>
          <p className="text-2xl font-bold mt-5">Key Features</p>
          <p className="mt-2">{keyFeature}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/product/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
