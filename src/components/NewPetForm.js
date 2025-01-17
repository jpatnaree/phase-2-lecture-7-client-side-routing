import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NewPetForm({addPet, updateFormData}) {

  const navigate = useNavigate()
  const [submittedForm, setSubmittedForm] = useState(false)

  if(submittedForm === true) {
    navigate("/pets")
  }

    return (
      <>
      {/* <NavBar /> */}
      <div className="new-pet-form">
        <h2>New Pet</h2>
        <form onSubmit={(e)=>{
          addPet(e)
          setSubmittedForm(true)
          }}>
          <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" required/>
          <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" required/>
          <input onChange={updateFormData} type="text" name="animal_type" placeholder="Type of animal" required/>
          <button type="submit">Add Pet</button>
        </form>
      </div>
      </>
    );
  }
  
  export default NewPetForm;