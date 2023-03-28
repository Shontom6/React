import React, { useEffect } from 'react';
import axios from 'axios';
import ListUniversity from "./ListUniversity";
import UniList from "./UniList";

export default function UniversityParent() {
    const [UniversityList, setUniversityList] = React.useState([]);
    const [SelectedUni, setSelectedUni] = React.useState("");

    console.log("selected uni is", SelectedUni);

    const GetUniName = (UniversityName) => {
        
        setSelectedUni(UniversityName)
        console.log("The entered university name is :",SelectedUni)
     }

    useEffect(() => {
        axios.get('http://universities.hipolabs.com/search?name=middle')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setUniversityList(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [SelectedUni]);
    
    

    return (
        <div>
            <ListUniversity SendValue={GetUniName} />
            <UniList universities={UniversityList}
            setname={SelectedUni}/>
         
        </div>
    )
}
