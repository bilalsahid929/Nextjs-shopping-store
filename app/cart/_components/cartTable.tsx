"use client";
import { CartItem } from "@/app/store/useCart";

const CartTable = ({ cart }: { cart: CartItem[] }) => {
  return (
    <table className="table-auto w-full text-start">
      <thead className="border-b-2">
        <tr>
          <th className="pe-4 py-2 text-start ">Product</th>
          <th className="pe-4 py-2 text-start">Price</th>
          <th className="pe-4 py-2 text-start">Quantity</th>
          <th className="pe-4 py-2 text-start">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart?.map((item) => (
          <tr key={item.id}>
            <td className="pe-4 py-2">
              <div className="flex items-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 mr-2"
                />
                <div>
                  <h4 className=" max-w-xs text-lg font-semibold line-clamp-2">
                    {item.title}
                  </h4>
                  <p className=" max-w-xs line-clamp-2">{item.description}</p>
                </div>
              </div>
            </td>
            <td className="pe-4 py-2">${item.price.toFixed(2)}</td>
            <td className="pe-4 py-2">{item.count}</td>
            <td className="pe-4 py-2">
              ${(item.price * item.count).toFixed(2)}
            </td>
            <td className="pe-4 py-2">
              <button
                onClick={() => {
                  // Implement your remove from cart logic here
                }}
                className="btn btn-link text-red-500 
                
                "
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
