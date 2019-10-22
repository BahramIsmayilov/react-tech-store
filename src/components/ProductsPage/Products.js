import React from "react";
import Product from "../Product";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import ProductFilter from "./ProductFilter";

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              {/* title */}
              <Title title="our products" center />
              {/* product filter */}
              <ProductFilter />
              {/* total products */}
              <div className="row my-5">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total products : {filteredProducts.length}
                  </h6>
                </div>
              </div>
              {/* our products */}
              <div className="row my-4">
                {filteredProducts.length === 0 ? (
                  <div className="col-10 mx-auto">
                    <h6 className="text-title text-center">
                      sorry, no items matched your search
                    </h6>
                  </div>
                ) : (
                  filteredProducts.map(product => (
                    <Product key={product.id} product={product} />
                  ))
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
