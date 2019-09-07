'use strict';

(function() {
    const buttons = document.querySelectorAll('.power-off-button');
    const createObject = document.createElement('div');
    createObject.className = "flag";
    createObject.innerText = 'включить';

    for (let button of buttons) {
        button.addEventListener('mouseenter', ()=> {

            button.appendChild(createObject);

            button.addEventListener('mouseleave',()=> {
                createObject.remove();
            });
        }, false);
    };
    if (clientWidth < 615) {
        for (let button of buttons) {
            button.addEventListener('touchstart', ()=> {
                button.addEventListener('touchend', ()=> {
                    event.preventDefault();
                    button.appendChild(createObject);

                    button.addEventListener('touchend',()=> {
                        createObject.remove();
                    });
                });
            }, false);
        };
    }
}());
