import React, { useState } from "react";

function VenueForm({addNewVenue, setVenueFormHidden}){
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        state: "",
        description: "",
        price: "",
        image_url: "https://media.istockphoto.com/id/1193046540/vector/photo-coming-soon-image-icon-vector-illustration-isolated-on-white-background-no-website.jpg?s=612x612&w=0&k=20&c=4wx1UzigP0g9vJv9D_DmOxdAT_DtX5peZdoS4hi2Fqg="
    })

    function handleVenueFormSubmit(e) {
      e.preventDefault()
      setErrors([])
      fetch('/venues', {
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      }).then((r) => {
        if(r.ok){
            addNewVenue(formData)
            setFormData({
                name: "",
                city: "", 
                state: "", 
                description: "",
                price: "",
                image_url: ""
            })
            setVenueFormHidden('hidden')
        } else{
          r.json().then((err) => setErrors(err.errors));
        }
      })
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <form onSubmit={(e) => handleVenueFormSubmit(e)}>
                <h4 style={{ textAlign: "center"}}>Create new listing</h4>
                <label>Name:  </label>
                <input type="text" placeholder="Name"
                    name='name'
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                />
                <br/><br/>
                <label>City: </label>
                <input type="text" placeholder="Brooklyn"
                    name='city'
                    value={formData.city}
                    onChange={(e) => handleChange(e)}
                />
                <br/><br/>
                <label>State:  </label>
                <input type="text" placeholder="New York"
                    name='state'
                    value={formData.state}
                    onChange={(e) => handleChange(e)}
                />                
                <br/><br/>
                <label>Price: </label>
                <input type="number" placeholder="100"
                    name='price'
                    value={formData.price}
                    onChange={(e) => handleChange(e)}
                />
                <br/><br/>
                <label>Image URL: </label>
                <input type="text"
                    name='image_url'
                    value={formData.image_url}
                    onChange={(e) => handleChange(e)}
                />
                <br/><br/>
                <label>Description: </label>
                <textarea type="textarea" placeholder="Describe this venue..."
                    name='description'
                    value={formData.description}
                    onChange={(e) => handleChange(e)}
                >
                </textarea>
                <br/><br/>

                <div className="errors-container">
                    {errors.map((err) => (
                        <div className="error-message" key={err}>{err}</div>
                    ))}
                </div>
      
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default VenueForm;