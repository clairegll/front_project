const initContactForm = () => {

// Variables
  let nameInput;
  let textPopupGenre;
  let buttonPopupGenre;
  const contact = document.getElementById("contact")
  const popupContact = document.getElementById("popupContact")
  const popoupGenre = document.getElementById("popupGenre")
  const croix = document.getElementById("croix")

// Contact Form Behaviour
  document.getElementById("submitContact").addEventListener("submit", (event) => {
    event.preventDefault();
    nameInput = document.getElementById("name").value;
    sendRequestApi(nameInput);
    buttonPopupGenre = document.getElementById("buttonPopupGenre");
    buttonPopupGenre.addEventListener("click", function(){
      closePopupContact();
    });
  });

// Call API
  function sendRequestApi(name) {
    fetch(`https://api.genderize.io/?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        textPopupGenre = document.getElementById("textPopupGenre")
        if (data.gender === "male") {
          textPopupGenre.innerText = "Rosebud"
        }
        else if (data.gender === "female") {
          textPopupGenre.innerText = "We rob banks"
        }
        else  {
          textPopupGenre.innerText = "It’s a trap !"
        }
      })
  };

// Close All Pop Ups
  function closePopupContact() {
    toggleClass(popupContact,"add", "d-none");
    toggleClass(popupContact, "remove","d-block");
    toggleClass(popoupGenre, "remove", "d-none");
    toggleClass(document.querySelector(".modal-backdrop"),"add", "rm-filter");
    toggleClass(document.querySelector(".modal-open"),"add", "scroll-active");
  }

// Reset Style Popup Contact After Closing
  contact.addEventListener( "click", () => {removeStyleContact();
  });

  croix.addEventListener("click", () => {
    toggleClass(popupContact, "remove", "d-block");
  })

  function removeStyleContact() {
    toggleClass(popupContact, "remove", "d-none");
    toggleClass(popupContact, "add", "d-block");
    toggleClass(popoupGenre, "remove", "d-none");
  };

// Helper Add or Remove Class
  function toggleClass(element, toggleType, className){
    if ( toggleType === "add") {
      element.classList.add(className)
    }
    else if ( toggleType === "remove") {
      element.classList.remove(className)
    }

  };
};

export { initContactForm }
