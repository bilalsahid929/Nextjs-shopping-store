import { FaStar } from "react-icons/fa";
type RatingProps = { value: number; text: string; color?: string };

function Rating({ value, text, color = "#FF8C4B" }: RatingProps) {
  const starElements = [];
  const roundedValue = Math.round(value);
  for (let i = 1; i <= 5; i++) {
    const color = i <= roundedValue ? "#FF8C4B" : "#B6B6B6";

    starElements.push(
      <span key={i} className="flex pr-1">
        <FaStar size="24" color={color} />
      </span>
    );
  }

  return (
    <div className="my-1 flex items-center">
      {starElements}
      {text && <span className="ml-2 text-gray-600">{text}</span>}
    </div>
  );
}

export default Rating;
