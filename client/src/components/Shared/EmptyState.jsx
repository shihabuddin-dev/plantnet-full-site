import Button from "../../components/Shared/Button/Button";
import { Link } from "react-router";
const EmptyState = ({ message, address, label }) => {
  return (
    <div className="h-screen gap-5 flex flex-col justify-center items-center pb-16 ">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
      {address && (
        <Link to={address}>
          <Button label={label} />
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
