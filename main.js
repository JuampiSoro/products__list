const input = document.querySelector("#input");
const inputBtn = document.querySelector("#input__btn");
const body = document.querySelector(".body")


const addBtnRemove = () => {
    const btnEachProduct = document.createElement("button");
    btnEachProduct.classList.add("each__product__btn");
    btnEachProduct.innerHTML = `<ion-icon name="close"></ion-icon>`

    btnEachProduct.addEventListener("click", (e) => {
        const item = e.target.parentElement;

        // item.parentElement.style.display = "none";
        item.parentElement.remove();
        // body.removeChild(item);
    })

    return btnEachProduct;
}



inputBtn.addEventListener("click", () => {
    const inputValue = input.value;

    if (inputValue == "") {
        alert("No ingresaste un producto!")
    } else {

        const divEachProduct = document.createElement("div");
        divEachProduct.classList.add("each__product");
        body.append(divEachProduct);

        const pEachProduct = document.createElement("p");
        pEachProduct.classList.add("each__product__p");
        pEachProduct.innerText = inputValue;
        divEachProduct.append(pEachProduct);


        divEachProduct.append(addBtnRemove());

        // divEachProduct.append(btnEachProduct);

        input.value = "";
    }

})