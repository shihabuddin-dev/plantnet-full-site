import AddPlantForm from "../../../components/Form/AddPlantForm";
import { imageUpload } from "../../../api/utils";
import axios from "axios";

const AddPlant = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    // image post in img bb website
    const image = form?.image?.files[0];
    const imageUrl =await imageUpload(image);

    const plantData = { name, category, price, quantity, image: imageUrl };
    console.table(plantData)

    //  sent to db
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/add-plant`,
      plantData
    );
    console.log(data);
  };

  return (
    <div>
      {/* Form */}
      <AddPlantForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddPlant;
