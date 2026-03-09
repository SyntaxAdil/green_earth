
import PlantImage from "../assets/plant_growing.jpg"; 

const ThankYouModal = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 md:p-10 w-11/12 max-w-md text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold cursor-pointer"
        >
          ✕
        </button>

        <img
          src={PlantImage}
          alt="Planting Tree"
          className="w-32 h-32 mx-auto mb-4 animate-pulse"
        />

        <h2 className="text-2xl font-semibold mb-2 text-green-700">
          Thank You, {formData.name}!
        </h2>
        <p className="text-gray-700 mb-4">
          You have successfully planted {formData.number_of_tree} tree(s) 🌱
        </p>
        <button
          onClick={onClose}
          className="btn bg-green-600 text-white w-full hover:bg-green-700 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;