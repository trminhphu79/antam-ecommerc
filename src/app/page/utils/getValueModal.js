
export const getValueModal = (products) => {

    const randomId = (products) => {
        let i = 0;
        let id = Math.floor(Math.random() * 100 + 1);
        while (products[i]._id === id && i < products.length) {
            ++i;
            id = Math.floor(Math.random() * 100 + 1);
        }
        return id.toString();
    }

    const value = {
        _id: randomId(products),
        title: document.querySelector('input[name="title"]').value,
        content: document.querySelector('input[name="content"]').value,
        price: document.querySelector('input[name="price"]').value,
        // image: document.querySelector('#image_input').value,
    }

    return value;
}