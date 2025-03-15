import { useState } from "react";
import { FaFire } from "react-icons/fa";
import img from "../../../assets/Banner.jpg"
import { FaStar, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
const hotItems = [
  {
    id: 1,
    name: "Spicy Chicken Burger",
    image: "https://source.unsplash.com/400x300/?burger",
    price: "$8.99",
  },
  {
    id: 2,
    name: "Cheese Loaded Pizza",
    image: "https://source.unsplash.com/400x300/?pizza",
    price: "$12.99",
  },
  {
    id: 3,
    name: "Grilled Salmon",
    image: "https://source.unsplash.com/400x300/?salmon",
    price: "$15.99",
  },
  {
    id: 4,
    name: "Choco Lava Cake",
    image: "https://source.unsplash.com/400x300/?cake",
    price: "$6.99",
  },
  {
    id: 5,
    name: "Choco Lava Cake",
    image: "https://source.unsplash.com/400x300/?cake",
    price: "$6.99",
  },
  {
    id: 6,
    name: "Choco Lava Cake",
    image: "https://source.unsplash.com/400x300/?cake",
    price: "$6.99",
  },
  {
    id: 7,
    name: "Choco Lava Cake",
    image: "https://source.unsplash.com/400x300/?cake",
    price: "$6.99",
  },
  {
    id: 8,
    name: "Choco Lava Cake",
    image: "https://source.unsplash.com/400x300/?cake",
    price: "$6.99",
  },
  {
    id: 9,
    name: "Choco Lava Cake",
    image: "https://source.unsplash.com/400x300/?cake",
    price: "$6.99",
  },
  {
    id: 10,
    name: "Choco Lava Cake",
    image: "https://source.unsplash.com/400x300/?cake",
    price: "$6.99",
  },
  {
    id: 11,
    name: "Choco Lava Cake",
    image: "https://source.unsplash.com/400x300/?cake",
    price: "$6.99",
  },
  {
    id: 12,
    name: "Choco Lava Cake",
    image: "https://source.unsplash.com/400x300/?cake",
    price: "$6.99",
  },
];

const HotItems = () => {
  const [items] = useState(hotItems);

  return (
    <section className="max-w-7xl mx-auto p-6 m-32">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-green-600 mb-16">
        <FaFire className="text-red-500 text-2xl" /> Hot Selling Items
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-12">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-110"
          >
            <img
              src={img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-green-600 font-medium text-lg">{item.price}</p>
              {/* Add to Cart Button */}
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-green-700 transition">
                      <FaShoppingCart />
                      Add to Cart
                    </button>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotItems;
