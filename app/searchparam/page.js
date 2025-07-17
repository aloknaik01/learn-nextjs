const ProductPage = async (params) => {
  const data = await params.searchParams;
  console.log(data);

  return (
    <>
      <div className="product-page">
        <div className="product-card">
          <h2>Awesome Product</h2>
          <p>
            This is a fantastic product that solves many problems and looks
            great!
          </p>
          <p>Category = {data.categoty}</p>
          <p>Product = {data.phone}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
