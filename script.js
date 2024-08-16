body {
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
  }
  
  .container {
    width: 100%;
    max-width: 400px; /* Updated max-width */
    border: 2px solid #000;
    padding: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 20px rgb(157 146 146);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 80vh;
    overflow-y: auto;
    box-sizing: border-box;
    margin: 20px; /* Default margin */
  }
  
  .input-container {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
  }
  
  .input_add {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    box-sizing: border-box;
  }
  
  #addButton {
    padding: 10px 20px;
    background-color: #e0e0e0;
    color: black;
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;
    height: auto;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }
  
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0; /* Adjusted margin */
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    width: 100%; /* Ensure full width */
    box-sizing: border-box;
  }
  
  li p {
    margin: 0;
    flex-grow: 1;
    padding-right: 10px;
  }
  
  li input[type="text"] {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  li div {
    display: flex;
  }
  
  button {
    border: 1px solid #000;
    padding: 8px 12px;
    border-radius: 5px;
    background-color: #e0e0e0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }
  
  button:hover {
    background-color: #d0d0d0;
  }
  
  button:active {
    background-color: #c0c0c0;
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  button.editMode,
  button.saveMode,
  button.deleteButton {
    border: none;
    background-color: transparent;
  }
  
  .size-6 {
    width: 24px;
    height: 24px;
  }
  
  /* Responsive Design */
  @media (max-width: 600px) {
    .container {
      max-width: 100%; 
      margin: 20px;
      padding: 10px;
    }
  
    #addButton {
      padding: 8px 16px;
    }
  
    li {
      padding: 8px;
      width: calc(100% - 20px); 
    }
  
    button {
      padding: 6px 10px;
    }
  
    .size-6 {
      width: 20px;
      height: 20px;
    }
  } 
  
  @media (min-width: 200px) and (max-width: 1024px) {
    .container {
      width: 86%; /* Adjust width based on viewport */
    }
  }
  
