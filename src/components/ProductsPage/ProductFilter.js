import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

export default function ProductFilter() {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          company,
          min,
          max,
          price,
          shipping,
          handleChange,
          storeData,
          storeProducts
        } = value;
        let companies = new Set();
        companies.add("all");
        for (let company in storeProducts) {
          companies.add(storeProducts[company]["company"]);
        }
        companies = [...companies];
        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text search */}
                <div>
                  <label htmlFor="search">search product</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/* end of text search */}
                {/* company */}
                <div>
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    id="company"
                    className="filter-item"
                    onChange={handleChange}
                    value={company}
                  >
                    {/* <option value="all">all</option>
                    <option value="samsung">samsung</option>
                    <option value="apple">apple</option> */}
                    {companies.map((company, index) => {
                      return (
                        <option value={company} key={index}>
                          {company}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end of company */}
                {/* product price */}
                <div>
                  <label htmlFor="price mb-2">
                    product price : <span>{price}</span>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    onChange={handleChange}
                    min={min}
                    max={max}
                    value={price}
                    className="filter-price"
                  />
                </div>
                {/* end of product price */}
                {/* free shipping */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    checked={shipping && true}
                    onChange={handleChange}
                  />
                </div>
                {/* end of free shipping */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    text-transform: capitalize;
    font-weight: bold;
  }
  .filter-item,
  .filter-price {
    padding-left: 1rem;
    display: block;
    width: 100%;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--darkGrey) !important;
  }
`;
