const randomRGB = () => Math.floor(Math.random() * 255);

 const randomDegree = () => Math.floor(Math.random() *360);

export const setBackground = () => {
        document.body.style.background =
        `linear-gradient(${randomDegree()}deg,
        rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()}),
        rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()}))`
    };