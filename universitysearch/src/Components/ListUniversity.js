import React from 'react'

export default function ListUniversity(props) {
    const [UniversityName, setUniversityName] = React.useState("");

    const UniversityNameHandler = (event) => {
        setUniversityName(event.target.value);
    }


    console.log("the entred name", UniversityName)
    return (
        <div> <input type={"text"} onBlur={UniversityNameHandler} />
            <button onClick={() => {
                props.SendValue(UniversityName);
            }}>Search</button></div>
    )
}
