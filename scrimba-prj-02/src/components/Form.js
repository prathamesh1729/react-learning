import React from 'react'


export default function Form() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    });

    const id = React.useId();

    function handleChange(event) {
        // console.log(event)
        // if (event.target.id === "fn")
        //     setFirstName(event.target.value);
        // else if (event.target.id === "ln")
        //     setLastName(event.target.value);

        const { name, value, type, checked } = event.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    function handleSubmit(event) {
        // Prevents page refresh.
        event.preventDefault();
        console.log(formData);
        // submitToApi(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={id + "-firstName"}>First Name</label>
            <input
                id={id + "-firstName"}
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <label htmlFor={id + "-lastName"}>Last Name</label>
            <input
                id={id + "-lastName"}
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <label htmlFor={id + "-email"}>Email</label>
            <input
                id={id + "-email"}
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <label htmlFor={id + "-comments"}>Comments</label>
            <textarea
                id={id + "-comments"}
                placeholder='Comments'
                onChange={handleChange}
                name="comments"
                value={formData.comments} />
            <input
                type="checkbox"
                id={id + "-isFriendly"}
                checked={formData.isFriendly}
                name="isFriendly"
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current Employment Status</legend>
                <input
                    type="radio"
                    id={id + "-unemployed"}
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange} />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id={id + "-part-time"}
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange} />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id={id + "-full-time"}
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange} />
                <label htmlFor="full-time">Full-time</label>
                <br />

            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id={id + "-favColor"}
                value={formData.favColor}
                onChange={handleChange}
                name="favColor">
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <br />
            <br />
            <button type='submit'>Submit</button>

        </form>
    );
}