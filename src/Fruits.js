import React, { useState } from "react";

const fruits = ["Apple", "Banana", "Mango"];

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredFruits = fruits.filter((fruit) => {
    return fruit.toLowerCase().includes(searchText.toLowerCase());
  });

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFruitSelect = (fruit) => {
    setSelectedFruit(fruit);
    setSearchText(fruit); // Update the searchText with the selected fruit
    setShowDropdown(false);
  };

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Choose a Fruit:"
        onChange={handleInputChange}
        value={searchText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        style={{ border: "1px solid blue", padding: "5px", width: "200px" }}
      />
      <div
        className="dropdown"
        style={{ border: "1px solid blue", width: "200px" }}
      >
        {showDropdown && (
          <ul
            className="dropdown-menu"
            style={{ listStyleType: "none", width: "200px" }}
          >
            {filteredFruits.map((fruit) => (
              <li key={fruit} onClick={() => handleFruitSelect(fruit)}>
                {fruit}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
