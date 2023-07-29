import React from "react";

const ProductDetailPage = ({ product }) => {
  return (
    <div>
      <h2>This is product details page</h2>
      <h2>{product?.data?.name}</h2>
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
