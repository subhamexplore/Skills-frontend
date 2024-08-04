import React, { useEffect, useState } from "react";
import { Domains } from "./Domains";

const Section5 = () => {
    const [selectedDomain, setSelectedDomain] = useState('All Domains');
    const [filteredDomains, setFilteredDomains] = useState([]);
    let options = ['All Domains','Software Domain','Hardware Domain', 'Design Domain'];

    useEffect(() => {
        filterDomains();
    }, []);

    const handleFilterOnChange = (event) => {
        setSelectedDomain(event.target.value);
    }

    const filterDomains = () => {
        let temp;
        if (selectedDomain === 'All Domains') {
            temp = Domains;
        } else {
            temp = Domains.filter((domain) => domain.category.toLowerCase() === selectedDomain.toLowerCase());
        }
        setFilteredDomains(temp);  
    };

    useEffect(() => {
        filterDomains();
    },[selectedDomain]);

    return(
        <div id="section5">
            <span id="sub-heading" className="animate-pulse">Uncover the Dimensions</span>
            <span id="heading">EXPLORE DOMAINS</span>
            <br/>
            <br/>
            <div id="section5item1" className="sm:text-lg">
                <div id="text">Navigate the Future</div>
                <div>
                    <select id="dropdown-menu" onChange={handleFilterOnChange}>
                        {
                            options.map((category, idx) => (
                                <option value={category} key={`options-${idx}`}>
                                    {category}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div id="section5item2">
                <div id="section5foldercontainer">
                    {
                        filteredDomains.map((domain, idx) => (
                            <div id="section5folders" key={`Domains-${idx}`}>
                                <figure>
                                    <img src={domain.image} alt={domain.category}/>
                                    <figcaption>{domain.name}</figcaption>
                                </figure>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Section5;
