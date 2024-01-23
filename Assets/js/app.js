const loadProducts = async () => {
  try {
    let data = await fetch("http://localhost:8000/products");
    let res = await data.json();
    console.log("res", res);

    let cardContainer = document.querySelector("#card-container");
    console.log("cardContainer", cardContainer);

    cardContainer.innerHTML = "";

    res.forEach((value, index) => {
      console.log("value", value);

      let card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
                <div class="card">
                    <img src="${value.image}" alt="book">
                    <div class="card-body">
                        <h5 class="card-title">${value.name}</h5>
                        <div class="d-flex">
                            <div class="list-star">
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                            </div>
                            <div class="quantity">
                                <p class="fw-bold"><span style="padding: 0 5px;">|</span>Quantity ${value.quantity} quyển</p>
                            </div>
                        </div>
                        <h5 class="card-title text-danger">${value.price} VND</h5>
                        <p class="card-text">${value.description}</p>
                    </div>
                </div>
        `;
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.log("Error loading products", error);
  }
};

loadProducts();
