console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

console.log(products);

let ser = [];

function renderProducts(products) {
  products.forEach((product) => {
    const li = document.createElement("li");

    let shipsToHTML = "";
    product.shipsTo.forEach(
      (country) => (shipsToHTML += `<li>${country}</li>`)
    );
    li.innerHTML = "";

    li.innerHTML = `
    <ul>
        <li>${product.name}</li>
        <li>${product.price}</li>
        <li>${product.rating}</li>
        <ul class="ships-to">${shipsToHTML}</ul>
    </ul>
    `;
    productsUl.appendChild(li);
  });

  document.getElementById("text").addEventListener("keyup", (e) => {
    productsUl.innerHTML = "";
    e.preventDefault();
    const text = e.target.value;
    console.log(text);
    products.filter((pro) => {
      pro.name.toLocaleLowerCase().match(text) && ser.push(pro);
    });
    console.log(ser);

    ser.forEach((product) => {
      const li = document.createElement("li");
      console.log(product.name);
      let shipsToHTML = "";
      product.shipsTo.forEach(
        (country) => (shipsToHTML += `<li>${country}</li>`)
      );

      li.innerHTML = `
    <ul>
        <li>${product.name}</li>
        <li>${product.price}</li>
        <li>${product.rating}</li>
        <ul class="ships-to">${shipsToHTML}</ul>
    </ul>
    `;
      productsUl.appendChild(li);
    });

    ser = [];
  });
  document.getElementById("start").addEventListener("change", (e) => {
    productsUl.innerHTML = "";
    const rangeValue = e.target.value;
    const price = rangeValue * 1000;
    console.log(price);

    products.filter((product) => {
      product.price >= price && ser.push(product);
      console.log(ser);
    });
    ser.forEach((product) => {
      const li = document.createElement("li");
      console.log(product.name);
      let shipsToHTML = "";
      product.shipsTo.forEach(
        (country) => (shipsToHTML += `<li>${country}</li>`)
      );

      li.innerHTML = `
    <ul>
        <li>${product.name}</li>
        <li>${product.price}</li>
        <li>${product.rating}</li>
        <ul class="ships-to">${shipsToHTML}</ul>
    </ul>
    `;
      productsUl.appendChild(li);
    });

    ser = [];
  });
}

renderProducts(products);

const range = document.getElementById("start");
