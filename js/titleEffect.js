const titleText = "meechh.xyz"; // The text you want to type out
let index = 0;
let isTyping = true;

function typeTitle() {
    if (isTyping) {
        if (index < titleText.length) {
            document.title += titleText.charAt(index);
            index++;
            setTimeout(typeTitle, 300); // Adjust typing speed here
        } else {
            isTyping = false;
            setTimeout(typeTitle, 1000); // Pause before starting to erase
        }
    } else {
        if (index > 0) {
            document.title = titleText.substring(0, index - 1);
            index--;
            setTimeout(typeTitle, 300); // Adjusted erasing speed here
        } else {
            isTyping = true;
            index = 0; // Reset index for typing
            setTimeout(typeTitle, 500); // Pause before starting to type again
        }
    }
}

// Start the typing effect
typeTitle();
