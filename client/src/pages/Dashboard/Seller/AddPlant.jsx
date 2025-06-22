import axios from "axios";
import AddPlantForm from "../../../components/Form/AddPlantForm";

const AddPlant = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const image = form.image.files[0];
    const imageFormData = new FormData();
    imageFormData.append("image", image);

    const plantData = { name, category, price, quantity, image };
    console.log(plantData);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      imageFormData
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
