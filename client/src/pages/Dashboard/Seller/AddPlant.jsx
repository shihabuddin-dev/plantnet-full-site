import AddPlantForm from "../../../components/Form/AddPlantForm";
import { imageUpload } from "../../../api/utils";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const AddPlant = () => {
  const { user } = useAuth();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUploadError, setImageUploadError] = useState();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    // image post in img bb website
    try {
      const plantData = {
        name,
        category,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        image: uploadedImage,
        seller: {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
        },
      };

      //  sent to db
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-plant`,
        plantData
      );
      toast.success("Plant Data Added Successfully!");
      form.reset();
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsUploading(false);
    }
  };
  const handleImageUpload = async (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    try {
      const imageUrl = await imageUpload(image);
      setUploadedImage(imageUrl);
    } catch (err) {
      setImageUploadError("Image Upload Failed");
      console.log(err);
    }
  };

  return (
    <div>
      {/* Form */}
      <AddPlantForm
        handleFormSubmit={handleFormSubmit}
        isUploading={isUploading}
        uploadedImage={uploadedImage}
        handleImageUpload={handleImageUpload}
        imageUploadError={imageUploadError}
      />
    </div>
  );
};

export default AddPlant;
