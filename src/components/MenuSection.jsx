import React from 'react';
import BreveCoffee from '../assets/Mocha2-B5Ro6EPY.webp';
import IceCold from '../assets/Iced-CbSG0oME.webp';
import MochaBrew from '../assets/Brew-FkXJ0squ.webp';
import Latte from '../assets/Latte-Cw2ZlJAE.webp';
import Americano from '../assets/Americano-DIwNFpom.webp';
import Corado from '../assets/Corado-ilIwxM7P.webp';
import Capuccino from '../assets/Mocha4-CwBDZfsw.webp';
import Americano2 from '../assets/Ricano-BqjL4scZ.webp';

const MenuSection = () => {
  const menuItems = [
    { name: 'Breve Coffee', description: 'A blend of Arabica coffee beans.', price: 'Ksh 200', image: MochaBrew },
    { name: 'Ice Cold', description: 'A refreshing cold coffee.', price: 'Ksh 250', image: IceCold },
    { name: 'Mocha Brew', description: 'A strong and rich espresso brew.', price: 'Ksh 300', image: BreveCoffee },
    { name: 'Latte', description: 'A robust, aromatic escape in every cup.', price: 'Ksh 350', image: Latte },
    { name: 'Americano', description: 'A harmonious blend for a perfect brew.', price: 'Ksh 400', image: Americano },
    { name: 'Corado', description: 'Pure coffee bliss, brewed just for you.', price: 'Ksh 450', image: Corado },
    { name: 'Capuccino', description: 'Expertly roasted for a full-bodied taste.', price: 'Ksh 400', image: Capuccino },
    { name: 'Americano', description: 'A symphony of flavor.', price: 'Ksh 400', image: Americano2 },
  ];

  return (
    <div id="menu" className="min-h-screen bg-[#f8f5f3] p-6 sm:p-8 py-12 sm:py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-800 mb-2">Menu</h2>
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-[1px] w-8 sm:w-10 bg-orange-800/50"></div>
          <h3 className="text-sm sm:text-md uppercase tracking-wider text-orange-800/80">Best Selling</h3>
          <div className="h-[1px] w-10 bg-orange-800/50"></div>
        </div>
        <p className="max-w-2xl mx-auto text-stone-600 text-sm sm:text-base mt-4">Explore our handcrafted selection of premium Kenyan coffee</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto mt-8">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-orange-900 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <img alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 border border-black rounded-full object-cover" src={item.image} />
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">{item.name}</h3>
                <p className="text-gray-300 text-xs sm:text-sm">{item.description}</p>
              </div>
            </div>
            <div className="text-white font-bold text-sm sm:text-base">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
