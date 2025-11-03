import React from 'react'
import "./FilterSection.css"
import { getData } from '../../context/DataContext'

const FilterSection = ({ search = '', setSearch = () => { }, priceRange = [0, 600], setPriceRange = () => { }, category = 'ALL', setCategory = () => { } }) => {
  const { categoryOnlyData = [] } = getData() || {};

  const handleCategoryChange = (item) => {
    if (!setCategory) return;
    setCategory(prev => (prev === item ? 'ALL' : item));
  };

  const handleMaxPriceChange = (e) => {
    const max = Number(e.target.value || 0);
    if (!setPriceRange) return;
    setPriceRange([priceRange[0] ?? 0, max]);
  };

  const handleReset = () => {
    setSearch('');
    setPriceRange([0, 600]);
    setCategory('ALL');
  };

  return (
    <div className='filter'>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch?.(e.target.value)}
        placeholder='Search Products...'
        className='filter-searchbox'
      />

      <h1 className='category'>Category</h1>
      <div className='category-table'>
        {
          categoryOnlyData?.map((item, index) => {
            return (
              <label key={index} className='key'>
                <input
                  type="radio"
                  name="category"
                  checked={category === item}
                  onChange={() => handleCategoryChange(item)}
                  value={item}
                />
                <span className="category-button">{item}</span>
              </label>
            )
          })
        }
      </div>

      <h1 className='category'>Price Range</h1>
      <div className='price-range'>
        <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
        <input
          type="range"
          min={0}
          max={1000}
          value={priceRange[1]}
          onChange={handleMaxPriceChange}
        />
      </div>

      <button type="button" className='reset-button' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default FilterSection
