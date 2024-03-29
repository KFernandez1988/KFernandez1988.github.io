/*
 * events.js
 * 
*/

/** Functions for the carosel */
window.addEventListener('load', () => {

   
    const locals = document.querySelector('.locals');
   if(locals) {
    locals.addEventListener('click', event => {
        let li = event.target;
       
        if(li.tagName == 'LI') {
           let locations = document.querySelector(".locations");
           let article = li.querySelector('article');

            locations.innerHTML = article.innerHTML;       
            
            document.querySelector('.selected').classList.remove("selected");
            li.className = 'selected';
        }
    });

   }
    

    const buttons = document.querySelectorAll('#carol-buttons button');
    if(buttons.length > 0){
        buttons[0].addEventListener('click',event => {

            const locals = document.querySelector('.locals');
    
            let lis = locals.children;
            let index = 0;
    
            for(let i = 0; i < lis.length; i++) {
                
                if(!lis[i].classList.contains("selected")) { 
                    index++;
                } else {
                    break;
                }
                
            };
            let previous = index -1;
            if(previous == -1) {
                previous = locals.children.length -1;
            }
            let locations = document.querySelector(".locations");
            let article = lis[previous].querySelector('article');
     
            locations.innerHTML = article.innerHTML;       
                 
            document.querySelector('.selected').classList.remove("selected");
            lis[previous].className = 'selected';
    
        } ,false);
    
        console.log(buttons);
    
        buttons[1].addEventListener('click',event => {
    
            const locals = document.querySelector('.locals');
    
            let lis = locals.children;
            let index = 0;
    
            for(let i = 0; i < lis.length; i++) {
                
                if(!lis[i].classList.contains("selected")) { 
                    index++;
                } else {
                    break;
                }
                
            };
            let next = index + 1;
            if( next == locals.children.length) {
                next = 0;
            }
            let locations = document.querySelector(".locations");
            let article = lis[next].querySelector('article');
     
            locations.innerHTML = article.innerHTML;       
                 
            document.querySelector('.selected').classList.remove("selected");
            lis[next].className = 'selected';
    
        } ,false);
    
        
    }

    let x = window.location.pathname;
     let page = x.split("/").pop();

    if(page == 'index.html') {

    setInterval( () => {
        const locals = document.querySelector('.locals');

        let lis = locals.children;
        let index = 0;

        for(let i = 0; i < lis.length; i++) {
            
            if(!lis[i].classList.contains("selected")) { 
                index++;
            } else {
                break;
            }
            
        };
        let next = index + 1;
        if( next == locals.children.length) {
            next = 0;
        }
        let locations = document.querySelector(".locations");
        let article = lis[next].querySelector('article');
 
        locations.innerHTML = article.innerHTML;       
             
        document.querySelector('.selected').classList.remove("selected");
        lis[next].className = 'selected';
    }, 5000)};

        const form = document.forms['form'];
        if(form) {
        form.addEventListener('focusout', event => {
    
            let input = event.target;
            let parent = input.parentNode;
                if(input.tagName == 'INPUT') {
                    if(input.value.length == 0) {
                        let span = parent.querySelector('.wrong');
                        if(span) {
                         span.remove();
                        }
                       let err = `<span class="wrong"> Your input is empty and this field is required<span>`;
                        parent.insertAdjacentHTML('beforeend', err);                  
                    } else {
                        let span = parent.querySelector('.wrong');
                        if(span) {
                            span.remove();
                        }
                    }

                    console.log(input.value.length);

                    switch (input.type) {
                        case "tel": 
                             if(isNaN(input.value)) {
                                let span = parent.querySelector('.wrong');
                                if(span) {
                                 span.remove();
                                }
                               let err = `<span class="wrong"> Please Enter Numeric Value<span>`;
                                parent.insertAdjacentHTML('beforeend', err); 
                             } else if (input.value.length > 0 && input.value.length < 10){

                                let span = parent.querySelector('.wrong');
                                if(span) {
                                 span.remove();
                                }
                               let err = `<span class="wrong"> Enter a 10 digit number <span>`;
                                parent.insertAdjacentHTML('beforeend', err); 

                             }
                        break;
                        case "email": 
                           if(!(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm.test(input.value)) && input.value.length > 0) {
                            let span = parent.querySelector('.wrong');
                            if(span) {
                             span.remove();
                            }
                           let err = `<span class="wrong"> This is not a valid email<span>`;
                            parent.insertAdjacentHTML('beforeend', err); 
                           }
                        
                         break;
                        default: console.log("text type"); break;
                     }
                    }
                }, false);
                
        if(form.lastElementChild) {
            form.lastElementChild.addEventListener('click', event => {
                let isSpan = form.querySelectorAll('span');
                let inputs = form.querySelectorAll('input');
                let isValue = false;
                inputs.forEach(input => {
                    if(input.value.length === 0){
                        isValue = true;
                    }
                });
                if(isSpan.length > 0 || isValue) {event.preventDefault();}
                            
            });

        }
     }
}, false);
    