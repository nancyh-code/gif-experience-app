import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
//import PropTypes from 'prop-types';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dr Who']);

  /*  const handleAdd = () => {
     //setCategories(['Hunter', ...])
     setCategories(categories => [...categories, 'Hunter'])
   }
  */

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category} />
          ))
        }
      </ol>
    </>
  )
}

//GifExpertApp.propTypes = {

//}

export default GifExpertApp


