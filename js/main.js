const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (elemente, style) => window.getComputedStyle(html).getPropertyValue("--bg")

const initialColors = {
    blue: getStyle(html, "--blue"),
    darkBlue: getStyle(html, "--darkBlue"),
    white: getStyle(html, "--white"),
}

const greyScale = {
    blue: "#",
    darkBlue: "#",
}

const transformKey = key => 
"--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) =>{
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({target}) =>{
    target.checked ? changeColors(greyScale) : changeColors(initialColors)
})