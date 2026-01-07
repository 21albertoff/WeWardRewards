/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("currentYear").textContent = new Date().getFullYear();


document.getElementById('copySpan').addEventListener('click', function() {
    // Create a temporary textarea element to copy the text
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = this.textContent;
    document.body.appendChild(tempTextarea);

    // Select and copy the text
    tempTextarea.select();
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Add the 'copied' class to show the effect
    this.classList.add('copied');

    // Remove the effect after 2 seconds
    setTimeout(() => {
        this.classList.remove('copied');
    }, 2000);

    const text = this.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const message = document.getElementById("copyMessage");
        message.classList.add("show-message");
        
        // Ocultar el mensaje después de 1 segundo
        setTimeout(() => {
            message.classList.remove("show-message");
        }, 1000);
    });
});

