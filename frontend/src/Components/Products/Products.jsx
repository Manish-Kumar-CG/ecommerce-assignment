import React, { useEffect, useState } from "react";
import { getData } from "../../context/DataContext";
import FilterSection from "../FilterSection/FilterSection";
import Loading from "../../assests/Loading4.webm"
import "./Product.css"
import ProductCard from "../ProductCard/ProductCard";
const Products = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("ALL")
  const [priceRange, setPriceRange] = useState([0,600])

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const filteredData = (data || []).filter((product) => {
    const matchesSearch = product.title?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'ALL' || product.category === category;
    const price = Number(product.price) || 0;
    const matchesPrice = price >= (priceRange[0] || 0) && price <= (priceRange[1] || Infinity);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      <div className="products-container">
        {data?.length > 0 ? (
          <div className="flex-gap-8">
            <FilterSection
              search={search}
              setSearch={setSearch}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
              setCategory={setCategory}
            />
            {filteredData.length > 0 ? (
              <div className="grid-container">
                {filteredData.map((product, index) => (
                  <ProductCard key={product.id ?? index} product={product} />
                ))}
              </div>
            ) : (
              <div className="notfound-container">No products match your filters.</div>
            )}
          </div>
        ) : (
          <div className="loader">
            <video muted autoPlay loop>
              <source src={Loading} type='video/webm' />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
