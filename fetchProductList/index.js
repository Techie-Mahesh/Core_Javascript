const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=10");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

const fetchDesc = async id => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch product ${id}:`, error);
  }
};

const createProductElement = product => {
  const div = document.createElement("div");
  div.className = "product";
  div.dataset.id = product.id;

  const title = document.createElement("h5");
  title.className = "title";
  title.innerHTML = product.sku;

  const list = document.createElement("ul");
  list.className = "list";
  list.innerHTML = `<li>${product.category}</li><li>${product.brand}</li>`;

  const hr = document.createElement("hr");

  div.appendChild(title);
  div.appendChild(hr);
  div.appendChild(list);

  return div;
};

const showProductDescription = async id => {
  const productDesc = document.querySelector(".productDesc");

  productDesc.innerHTML = ""; // Clear previous content

  const product = await fetchDesc(id);
  if (!product) return;

  const descDiv = document.createElement("p");
  descDiv.className = "desc";
  descDiv.innerHTML = product.description;
  productDesc.appendChild(descDiv);
};

const displayProducts = async () => {
  const products = await fetchData();
  const container = document.querySelector(".products");
  container.innerHTML = ""; // Clear existing content (if needed)

  products.forEach(product => {
    const productElement = createProductElement(product);
    productElement.addEventListener("click", () =>
      showProductDescription(product.id)
    );
    container.appendChild(productElement);
  });
};

displayProducts();
