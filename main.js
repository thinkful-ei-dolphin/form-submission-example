window.addEventListener("DOMContentLoaded", main);

function main() {

    let form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);


    function handleSubmit(event){
        event.preventDefault();
        let formData = new FormData(event.target);
        let isValidName = checkNameLength(formData.get('fname'));
        if(!isValidName){
            document.querySelector('.error').style.display='block';
        }
        console.log(formData.get('tandC'));

        let formObj = Object.fromEntries(formData);
        console.log(formObj);

    }

    function checkNameLength(name){
        return name.length>3;
    }





  /*let buttonContainer = document.querySelector(".button-container");
  let button = document.querySelector('.btn.btn-primary');
  console.log(button);


  buttonContainer.addEventListener("click", (event) => {
    if (event.target.className.includes("btn")) {
      let newButton = document.createElement("button");
      newButton.innerHTML = "New Button";
      newButton.className = "btn btn-primary";
      document.querySelector(".button-container").appendChild(newButton);
    }
  });*/
}
