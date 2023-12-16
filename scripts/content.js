// get all panel-body
const panelBodies = document.getElementsByClassName('panel-body');

// define copy function 
// and color transition
function copy(arg, element) {
    navigator.clipboard.writeText(arg).then(() => {
        console.log(`copy : ${arg}`);
        
        element.style.transition = "background-color 0.5s ease-in-out";
        element.style.backgroundColor = "#8CA3C3";

        setTimeout(() => {
            element.style.backgroundColor = "";
        }, 250);
    });
}

// main
Array.from(panelBodies).forEach(function (btnCopy) {
    btnCopy.addEventListener('click', function () {
        try {
            //input
            const preElement = btnCopy.querySelector("pre");
            copy(preElement.innerText, btnCopy);
        } catch (not_input) {
            try {
                //output
                const preElement = btnCopy.querySelector("div").querySelector("pre");
                copy(preElement.innerText, btnCopy);
            } catch (unable) {
                //other
            }
        }
    });
});

// Inject CSS
const style = document.createElement('style');
style.textContent = '.panel-body>pre:hover { cursor: pointer; } .panel-body>.problembox>pre:hover { cursor: pointer; }';
document.head.appendChild(style);