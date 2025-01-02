
function playSound(id) {
    const audio = new Audio();
    switch (id) {
        case "1":
            audio.src = "./assest/A_clap.wav";
            break;
        case "2":
            audio.src = "./assest/S_hihat.wav";
            break;
        case "3":
            audio.src = "./assest/D_kick.wav";
            break;
        case "4":
            audio.src = "./assest/F_openhat.wav";
            break;
        case "5":
            audio.src = "./assest/G_boom.wav";
            break;
        case "6":
            audio.src = "./assest/H_ride.wav";
            break;
        case "7":
            audio.src = "./assest/J_snare.wav";
            break;
        case "8":
            audio.src = "./assest/K_tom.wav";
            break;
        case "9":
            audio.src = "./assest/L_tink.wav";
            break;
        default:
            console.error("Invalid ID");
            return;
    }

    audio.play();

  
    const element = document.getElementById(id);
    element.classList.add("active");
    setTimeout(() => element.classList.remove("active"), 200);
}


document.addEventListener("keydown", (event) => {
    const keyMap = {
        "a": "1",
        "s": "2",
        "d": "3",
        "f": "4",
        "g": "5",
        "h": "6",
        "j": "7",
        "k": "8",
        "l": "9"
    };

    const id = keyMap[event.key.toLowerCase()];
    if (id) {
        playSound(id);

      
        const element = document.getElementById(id);
        element.classList.add("active");
        setTimeout(() => element.classList.remove("active"), 200); 
    }
});
