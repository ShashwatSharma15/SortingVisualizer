// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

// function ColorSchemesExample(props) {

//     // let algorithms = ["Quick Sort", "Merge Sort", "Heap Sort", "Bubble Sort"]
//     // const onClickHandler = (e) => {
//     //     if (!props.run)
//     //         props.selectAlgo(e.target.name);
//     // }
    
//     // let disabled = "";
//     // if (props.run) {
//     //     disabled = "disabled";
//     // } else {
//     //     disabled = "";
//     // }

//     // const button = algorithms.map((data, idx) => (
//     //     <button key={idx} name={data.label} onClick={onClickHandler} className={disabled} >{data.label}</button>
//     // ));

//   return (
//     <>
//       {/* <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Sorting Visualizer</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">About</Nav.Link>
//             <Nav.Link href="#pricing">Merge Sort</Nav.Link>
//             <Nav.Link href="#pricing">Quick Sort</Nav.Link>
//             <Nav.Link href="#pricing">Bubble Sort</Nav.Link>
//             <Nav.Link href="#pricing">Heap Sort</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar> */}

//       {/* <br /> */}
//       <Navbar bg="light" data-bs-theme="light">
//         <Container>
//           <Navbar.Brand href="#home">Sorting Visualizer</Navbar.Brand>
//           <Nav className="me-auto">
//           <Nav.Link as={NavLink} to="/">About</Nav.Link>
//             <Nav.Link as={NavLink} to="/Merge">Merge Sort</Nav.Link>
//             <Nav.Link as={NavLink} to="/Quick">Quick Sort</Nav.Link>
//             <Nav.Link as={NavLink} to="/Bubble">Bubble Sort</Nav.Link>
//             <Nav.Link as={NavLink} to="/Heap">Heap Sort</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default ColorSchemesExample;

// import React, { useState, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import search from "../assets/search-add.png";
// import "./Navbar.css"; // Assuming you have a CSS file for Navbar styles

// const Navbar = () => {
//   const inputRef = useRef(null);
//   const [Target, setTarget] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//         handleSubmit();
//     }
//   }

// // Define the function you want to trigger when Enter is pressed
//   const handleSubmit = () => {
//     console.log(Target);
//     const url = `/search?target=${Target}`;
//     // Navigate to the constructed URL
//     window.location.href=url;
//     setTarget('')
//     if (inputRef.current) {
//       inputRef.current.value = '';
//     }
//   }

//   return (
//     <nav className="navbar">
//       <div className={`hamburger ${isOpen ? "" : "ham-active"}`} onClick={toggleMenu}>
//         <div className="hamburger-span">
//           <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
//           <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
//           <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
//         </div>
//         <div className={`ham-heading ${isOpen ? "ham-heading-active" : ""}`}>Campus Collaborator</div>
//       </div>
//       <div className={`nav-items ${isOpen ? "open" : ""}`}>
//         <div className="campus" onClick={toggleMenu}>CAMPUS COLLABORATOR</div>
//         <hr className="horizontal-line" />
//         <Link
//           to="/Home"
//           className={`home ${location.pathname === "/Home" ? "active" : ""}`}
//         >
//           Home
//         </Link>
//         <Link
//           to="/Queries"
//           className={`queries ${
//             location.pathname === "/Queries" ? "active" : ""
//           }`}
//         >
//           Queries
//         </Link>
//         <Link
//           to="/About"
//           className={`courses ${
//             location.pathname === "/Courses" ? "active" : ""
//           }`}
//         >
//           About
//         </Link>
//         <input
//           ref={inputRef}
//           type="text"
//           className="search-input"
//           placeholder="Search"
//           onChange={(e) => setTarget(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />
//         <Link
//           to="/profile"
//           className={`myprofile ${
//             location.pathname === "/profile" ? "active" : ""
//           }`}
//         >
//           My Profile
//         </Link>
//         <Link to="/Project" className="createproject">
//           Create Project
//           <img
//             src={search}
//             className="createproject-img"
//             alt="Create Project"
//           />
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import search from "../assets/search-add.png";
// import "./Navbar.css"; // Assuming you have a CSS file for Navbar styles
// import axios from "axios";

const Navbar = (props) => {
  
    // let algorithms = ["Quick Sort", "Merge Sort", "Heap Sort", "Bubble Sort"]
    // const onClickHandler = (e) => {
    //     if (!props.run)
    //         props.selectAlgo(e.target.name);
    // }
    
    // let disabled = "";
    // if (props.run) {
    //     disabled = "disabled";
    // } else {
    //     disabled = "";
    // }

    // const button = algorithms.map((data, idx) => (
    //     <button key={idx} name={data.label} onClick={onClickHandler} className={disabled} >{data.label}</button>
    // ));
    const inputRef = useRef(null);
  const [Target, setTarget] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // Define the function you want to trigger when Enter is pressed
  const handleSubmit = () => {
    console.log(Target);
    const url = `/search?target=${Target}`;
    // Navigate to the constructed URL
    window.location.href = url;
    setTarget("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

//   const [profiles, setProfiles] = useState([]);
//   const storedUserData = localStorage.getItem("user"); // Retrieve the stored user data

//   const user = JSON.parse(storedUserData); // Parse the stored user data from JSON to JavaScript object

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8050/api/profile/${user.uid}`)
//       .then((Profile) => {
//         console.log(Profile);
//         setProfiles(Profile.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedProfile, setSelectedProfile] = useState(null);

//   const handleSearch = async (event) => {
//     const value = event.target.value;
//     if (value.length > 0) {
//       setQuery(value);
//       try {
//         const response = await axios.get(
//           `http://localhost:8050/api/search?q=${value}`
//         );
//         setSuggestions(response.data);
//       } catch (error) {
//         console.error("Error fetching profiles", error);
//       }
//     } else {
//       setQuery(""); // Clear the query
//       setSuggestions([]); // Clear the suggestions
//     }
//   };

//   const handleSuggestionClick = (profile) => {
//     setSelectedProfile(profile);
//     setSuggestions([]);
//     setQuery(profile.name);
//   };

  return (
    <nav className="navbar">
      <div
        className={`hamburger ${isOpen ? "" : "ham-active"}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-span">
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
          <span className={`hamburger-span-line ${isOpen ? "open" : ""}`} />
        </div>
        <div className={`ham-heading ${isOpen ? "ham-heading-active" : ""}`}>
          Sorting Visualizer
        </div>
      </div>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <div className="campus" onClick={toggleMenu}>
          Sorting Visualizer
        </div>
        <hr className="horizontal-line" />
        <Link
          to="/"
          className={`home`}
        >
          {isOpen ? "About" : "Sorting Visualizer"}
        </Link>
        {/* <Link
          to="/Bubble"
          className={`queries ${
            location.pathname === "/Bubble" ? "active" : ""
          }`}
        >
          Queries
        </Link>
        <Link
          to="/Merge"
          className={`courses ${
            location.pathname === "/Merge" ? "active" : ""
          }`}
        >
          About
        </Link> */}


        <Link
          to={`/Bubble`}
          className={`myprofile ${
            location.pathname === `/Bubble` ? "active" : ""
          }`}
        >
          Bubble Sort
        </Link>

        <Link
          to={`/Merge`}
          className={`myprofile ${
            location.pathname === `/Merge` ? "active" : ""
          }`}
        >
          Merge Sort
        </Link>

        <Link
          to={`/Quick`}
          className={`myprofile ${
            location.pathname === `/Quick` ? "active" : ""
          }`}
        >
          Quick Sort
        </Link>

        <Link
          to={`/Heap`}
          className={`myprofile ${
            location.pathname === `/Heap` ? "active" : ""
          }`}
        >
          Heap Sort
        </Link>
        {/* <Link to="/Quick" className="createproject">
          Create Project
          <img
            // src={search}
            className="createproject-img"
            alt="Create Project"
          />
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
