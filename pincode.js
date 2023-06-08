function fetchPincode() {
  const pincode = document.getElementById("pincode").value;
  const result = document.getElementById("PostOffice");

  //clear previously generated api data
  result.innerHTML = "";


  if(pincode === ""){
    alert("Enter valid zipcode");
  }
  else{
    //calling an api...
  fetch(`https://api.postalpincode.in/pincode/${pincode}`)
    .then(response => response.json())
    .then(data => {
      const postOffices = data[0].PostOffice;
      const markup = postOffices.map(postOffice => `<li>${postOffice.Name}</li>`).join("");
      document.querySelector('ol').insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.error(error));
    }
  }
