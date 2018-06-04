import React from 'react';
import {IconCart} from '../utils/Icons';

const Categorie = ({ categorie, selectCategorie, selected }) => (
  <div className={"filter__item" + (selected === categorie ? ' active': '')} key={categorie} onClick={() => selectCategorie(categorie)}>
    {categorie.replace('-',' ')}
  </div>
)

const Bar = ({ categories, loading, changePageCart, quantity, selectCategorie, selected }) => (
  <div className="bar">
    <div className="filter">
      <span className="filter__label">Filter:</span>
      { loading ? 'Cargando...' : categories.map(categorie =>
        <Categorie categorie={categorie} selectCategorie={selectCategorie} key={categorie} selected={selected} />
      )}
    </div>
    <div className="cart" onClick={changePageCart}>
      <IconCart nameClass="cart__icon" />
			<span className="cart__count">{quantity}</span>
    </div>
  </div>
)



export default Bar;
