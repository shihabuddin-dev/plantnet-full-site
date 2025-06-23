import Card from "./Card";
import Container from "../Shared/Container";
import { useLoaderData } from "react-router";
import EmptyState from "../Shared/EmptyState";

const Plants = () => {
  const plants = useLoaderData();
  console.log(plants);
  return (
    <Container>
      {plants && plants.length >0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {plants.map((plant) => (
            <Card key={plant._id} plant={plant} />
          ))}
        </div>
      ) : (
        <EmptyState message={"Data is Unavailable Right Now"} />
      )}
    </Container>
  );
};

export default Plants;
