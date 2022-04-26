// Store cart items in local storage with key: 
//mapping the data

function append(res){
    var product=res.data;
    // console.log(product.length)

    product.map(function(ele){
        console.log(ele)
        let item=document.querySelector("#items");
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.image;
        let name=document.createElement("p")
        name.innerText=ele.name;
        let price=document.createElement ("p")
        price.innerText=ele.price;
        let button=document.createElement("button");
        button.innerText="Add to Cart";
        button.id="add_to_cart";

        div.append(image, name, price, button);
        item.append(div);
    })
}
