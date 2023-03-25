let hacked = document.getElementsByClassName(`headertext`);

for(let counter = 0; counter<hacked.length; counter = counter +1){
    hacked[counter][`innerHTML`] = `hackedhacked`;
    
    hacked[counter][`style`][`justify-self`] = `center`;

    hacked[counter][`style`][`align-self`] = `center`;
    };
    

let font_color = document.getElementsByClassName(`font_color`);


for(let counter = 0; counter<font_color.length; counter = counter +1){

    font_color[counter][`style`][`color`] = `blue`;

    font_color[counter][`style`][`justify-self`] = `center`;

    font_color[counter][`style`][`align-self`] = `center`;
}


let image = document.getElementsByClassName(`image_main`);

for(let counter = 0; counter<image.length; counter = counter +1){


    image[counter][`style`][`width`] = `25%`;

    image[counter][`style`][`justify-self`] = `center`;

    image[counter][`style`][`align-self`] = `center`;

    image[counter][`style`][`border-radius`] = `50%`;

    image[counter][`style`][`padding`] = `10px`;

    image[counter][`style`][`background-color`] = `#000022`;

    

}

let main_span = document.querySelectorAll(`.main_span`);

for(let counter = 0; counter<main_span.length; counter = counter +1){


    main_span[counter][`style`][`height`] = `80%`;

    main_span[counter][`style`][`boxShadow`] = `8px 8px 8px`;


}