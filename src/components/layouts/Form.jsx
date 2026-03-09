import React, { useState } from "react";
import Wrapper from "./../Wrapper";
import Heading from "./../Heading";
import Button from "./../Button";
import ThankYouModal from "../ThankYouModal";

const Form = () => {
  const [showModal, setShowModal] = useState(false);

  const [formDetailes, setFormDetailes] = useState({
    name: "",
    email: "",
    number_of_tree: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormDetailes((p) => ({
      ...p,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number_of_tree } = formDetailes;
    if (!name || !email || !number_of_tree) {
      alert("Fill all the inputs");
      return;
    } else {
      setShowModal(true);
      
    }
};
const closeModal=()=>{
      setShowModal(p=>!p);
       setFormDetailes({
        name: "",
    email: "",
    number_of_tree: "",
    })

  }
  return (
    <section className="bg-[#166534] py-20">
      <Heading content={"Plant a Tree Today"} extraClass="text-white" />
      <Wrapper extraClasses="flex justify-center">
        <form
          className="bg-[#15803d] p-4 md:p-8 rounded-lg max-w-162 space-y-3 mt-4 md:mt-8"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            className="input w-full outline-0"
            placeholder="Your name"
            value={formDetailes.name}
            onChange={handleInputChange}
          />
          <input
            name="email"
            value={formDetailes.email}
            onChange={handleInputChange}
            type="email"
            className="input w-full outline-0"
            placeholder="Your email"
          />
          <input
            name="number_of_tree"
            value={formDetailes.number_of_tree}
            onChange={handleInputChange}
            type="number"
            className="input w-full outline-0"
            placeholder="Number of tree"
          />

          <Button content={"Donate Now"} extraClass="w-full" />
        </form>
      </Wrapper>

      {showModal && (
        <ThankYouModal
          formData={formDetailes}
          isOpen={showModal}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Form;
