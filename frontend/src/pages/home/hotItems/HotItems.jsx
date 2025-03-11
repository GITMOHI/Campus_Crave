import { useState } from "react";
import { FaFire } from "react-icons/fa";
import img from "../../../assets/Banner.jpg"
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
];

const HotItems = () => {
  const [items] = useState(hotItems);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-800 mb-6">
        <FaFire className="text-red-500 text-2xl" /> Hot Selling Items
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-green-600 font-medium text-lg">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotItems;
