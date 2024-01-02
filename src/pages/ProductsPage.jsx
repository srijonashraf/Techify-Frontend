// Import necessary modules
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Define the Search component
const Search = () => {
    // State to store the fetched data and the filtered data
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // Get the search term from the URL
    const { search } = useLocation();
    const searchTerm = new URLSearchParams(search).get("term") || "";

    // Fetch data from the specified URL when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("db/product.json");
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Filter the data based on the search term when it changes
    useEffect(() => {
        const filtered = data.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, data]);

    // CSS styles for the card images
    const cardImageStyles = {
        height: "200px", // Set a fixed height for the images
        objectFit: "cover", // Ensure that the image covers the entire container
    };

    // Render the component
    return (
        <div className="container">
            <h1>Your searched products</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {filteredData.map((product, i) => (
                    <div key={i} className="col">
                        <div className="card h-100">
                            {/* Apply styles to the card image */}
                            <img
                                src={product?.image}
                                className="card-img-top"
                                alt="..."
                                style={cardImageStyles}
                            />
                            <div className="card-body">
                                <h6 className="fw-bold ">{product?.category}</h6>
                                <h4 className="card-title">{product?.name}</h4>
                                <h5>${product?.price}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Export the Search component
export default Search;
