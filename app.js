const products_list = document.getElementById("products-list");
const form = document.getElementById("products-form")

window.onload = async () => {
    const data = await getData()
    set_products(data);
}

const set_products = (products) => {
    let component = ' ';
    for (let prod of products) {
        const element = `
            <div class="product" id="p-${prod.id}">
                <div class="image-cont">
                    <img src="assets/${prod.image}"/>
                </div>
                <div class="input-cont">
                    <input name="${prod.product}" required type="number" min="0" max="10" id="pi-${prod.id}"/>
                </div>
            </div>
        `
        component = component.concat(element);

    }
    products_list.innerHTML = component;

}

const getData = async () => {
    return await fetch('assets/data.json', {
        method: 'GET'
    }).then(response => response.json());
}

const enviar_encuesta = (event) => {
    event.preventDefault();
    let result = ''
    let formData = new FormData(form);
    for (let entrie of formData.entries()) {
        result = result.concat(`Producto: ${entrie[0]} - Puntuación: ${entrie[1]} \n `);
    }
    alert(result);
}