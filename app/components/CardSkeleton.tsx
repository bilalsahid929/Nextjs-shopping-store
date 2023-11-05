import Skeleton from "./Skeleton";

const CardSkeleton = () => {
  return (
    <div className="bg-base-100  cursor-pointer p-4  hover:opacity-75">
      <figure className="relative h-60 w-full shadow-md rounded-lg">
        <Skeleton height={"100%"} />
      </figure>
      <div className="mt-4">
        <Skeleton height={"1rem"} />
      </div>
      <p className="  my-2">
        <Skeleton height={"1rem"} />
      </p>
      <p className="  mt-2 ">
        <Skeleton height={"1rem"} />
      </p>
    </div>
  );
};

export default CardSkeleton;
