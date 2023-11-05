"use client";
type QuantitySelectorProps = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};
const QuantitySelector = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantitySelectorProps) => {
  return (
    <div className="border-2 border-primary flex justify-between items-center p-2 w-20">
      <button
        onClick={decrementQuantity}
        className="text-primary font-bold p-0 text-4xl"
      >
        -
      </button>
      <span className="font-semibold">{quantity}</span>
      <button
        onClick={incrementQuantity}
        className="text-primary font-bold p-0 text-3xl"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
