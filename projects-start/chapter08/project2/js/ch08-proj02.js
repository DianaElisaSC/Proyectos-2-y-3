const photos = JSON.parse(content);

function constructStyle(color) {

    let style = `background-color: ${color.hex};`;
    if (color.luminance < 70) {
        style += ` color: white;`;
    }

    return style;

}


function constructColor(color) {

    return `<span style="${constructStyle(color)}">${color.name}</span>`;

}


function outputColors(colors) {

    for (let i = 0; i < colors.length; i++) {

        document.write(constructColor(colors[i]));

    }

}

function outputCard(photo) {

    document.write(`
        <article>
            <img src="images/${photo.filename}" alt="${photo.title}">
            <div class="caption">
                <h2>${photo.title}</h2>
                <p>${photo.location.city}, ${photo.location.country}</p>
                <h3>Colors</h3>
    `);

    outputColors(photo.colors);

    document.write(`
            </div>
        </article>
    `);

}

for (let i = 0; i < photos.length; i++) {

    outputCard(photos[i]);

}