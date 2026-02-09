// =======================================================
// get datas from products.json
let products = null;

fetch("/products.json")
    .then((response) => response.json())
    .then((data) => {
        products = data;
        showDetail();
    })
    .catch((error) => {
        console.error("Erreur de chargement JSON:", error);
    });

function showDetail() {
    // 1. Vérifier que l'élément detail existe
    let detail = document.querySelector(".detail");
    if (!detail) {
        console.error("Élément .detail non trouvé");
        return;
    }

    // 2. Récupérer l'ID depuis l'URL
    let productId = new URLSearchParams(window.location.search).get("id");

    let smallImages = detail.querySelectorAll(
        ".small-images .small-img-col img",
    );

    // 4. Trouver le produit
    let thisProduct = products.find((product) => product.id == productId);

    // 6. Afficher les données (COMMENCE ICI)
    console.log("Produit trouvé:", thisProduct);

    // 7. Changer le titre de la page
    document.title = `${thisProduct.name} | ${thisProduct.brand}`;

    // A. Image principale
    detail.querySelector("#MainImg").src = thisProduct.MainImage;

    if (thisProduct.images && thisProduct.images[0]) {
        smallImages[0].src = thisProduct.images[0];
    } else {
        smallImages[0].style.display = "none";
    }

    if (thisProduct.images && thisProduct.images[1]) {
        smallImages[1].src = thisProduct.images[1];
    } else {
        smallImages[1].style.display = "none";
    }

    if (thisProduct.images && thisProduct.images[2]) {
        smallImages[2].src = thisProduct.images[2];
    } else {
        smallImages[2].style.display = "none";
    }

    // B. Informations texte
    detail.querySelector("h6").textContent = thisProduct.brand;
    detail.querySelector("h2").textContent = thisProduct.name;
    detail.querySelector("h4").textContent = thisProduct.price + " MAD";

    // C. Description
    let spanElement = detail.querySelector(".pro-details span");
    if (spanElement) {
        spanElement.textContent = thisProduct.description;
    }

    // Dans ta fonction showDetail(), après les images :

    // 1. Récupérer les éléments de taille
    let sizeElements = detail.querySelectorAll(".Psize");

    // 2. Si le produit a des tailles dans la base de données
    if (thisProduct.sizes && thisProduct.sizes.length > 0) {
        // Afficher chaque taille disponible
        thisProduct.sizes.forEach((size, index) => {
            if (sizeElements[index]) {
                sizeElements[index].textContent = size;
                sizeElements[index].style.display = "block"; // ou "inline-block"
            }
        });

        // Cacher les éléments de taille non utilisés
        for (let i = thisProduct.sizes.length; i < sizeElements.length; i++) {
            sizeElements[i].style.display = "none";
        }

        // Ajouter l'événement de clic pour sélection
        sizeElements.forEach((element) => {
            if (element.style.display !== "none") {
                element.addEventListener("click", function () {
                    // Retirer "active" de tous
                    sizeElements.forEach((el) => el.classList.remove("active"));
                    // Ajouter "active" à celui cliqué
                    this.classList.add("active");
                });
            }
        });
    } else {
        // 3. Si PAS de tailles dans la base de données
        // Cacher toute la section taille
        document.querySelector(".size").style.display = "none";
        // ou cacher juste le label
        document.querySelector(".size").previousElementSibling.style.display =
            "none";
    }
}
