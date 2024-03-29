/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/
/*
   function getInformation(){
    fetch("https://joshbloom.github.io/dws1/data/hikersguide.json")
    .then((info) => data = info.json()).then(
       data => {
          console.log(data.events);
          let x = window.location.pathname;
          let page = x.split("/").pop();

          
          const locations = document.querySelector('.locations');

          if(locations) {
          let location = data.locations[0];
          locations.innerHTML = `<h2>${location.city}, ${location.state}</h2>
          <strong>${location.title}</strong>
          <p>${location.text}</p>`;

          }

          const posts = document.querySelector('.posts');

          if(posts) {
            //console.log(posts);
            let postsList = '';
            posts.innerHTML = '';

            data.posts.forEach( post => {
               let text = post.text.slice(0 , 150);
               postsList += `<li>
                              <article>
                                 <img src="${post.imageURL}" alt="">
                                 <h3>${post.title} </h3>
                                 <h5>${post.subtitle}</h5>
                                 <p>${text}</p>
                                 <button><a href="#">Read more</a></button>
                              </article>
                           </li>`;
            });
          posts.insertAdjacentHTML('afterbegin', postsList);

          }
          
          const events = document.querySelector('.events');

          if(events){
            events.innerHTML ='';
            let eventList = '';
            let i = 0

          data.events.forEach( ev => {
            
            let text = ev.text;
            if(page != "events.html") {
            text = text.slice(0,45);
            }

            let rnumber = Math.floor(Math.random() * 4) + 1;
            if (i < 4) {
            eventList += `<li>
                           <img src="images/hikers100${rnumber}.jpg" > 
                           <h5>${ev.date}</h5>
                           <h4><em>${ev.title}</em></h4>
                           <p>${text}</p>
                     
                         </li>`;
            }
            i++;
          });
         
          events.insertAdjacentHTML('afterbegin', eventList);

          }
          
          const hikers = document.querySelector('.hikers-list');

          if(hikers) {
             hikers.innerHTML = '';
            let hikersList = '';
            data.hikers.forEach(el => {
               
               hikersList += `<li>
               <div>
                  <img src="${el.imageURL}" alt="">
                  <p><strong>${el.lastname},${el.firstname}</strong></p>
                  <p>${el.city}, ${el.state}</p>
               </div>
         </li>`;

            });

            hikers.insertAdjacentHTML('afterbegin', hikersList);

         }

          const about = document.querySelector('.about');
          if(about) {

            about.innerHTML = `<h3><strong>About</strong></h3>
                             <p><em> ${data.about.title} </em></p>
                             <p> ${data.about.text}</p>`;
          }
          
     
       }
    );
}


document.addEventListener('load', getInformation());
*/
let data ;

function getInformation() {

let request = new XMLHttpRequest();
request.onload = () => {

   data = JSON.parse(request.responseText);
   try {
      console.log(data.events);
          let x = window.location.pathname;
          let page = x.split("/").pop();

          
          const locations = document.querySelector('.locations');

          if(locations) {
          let location = data.locations[0];
          locations.innerHTML = `<h2>${location.city}, ${location.state}</h2>
          <strong>${location.title}</strong>
          <p>${location.text}</p>`;

          

          const banner = locations.parentNode;
          let otherLocations = '<ol class="clear locals">';

          data.locations.forEach( locals => {

            let selected = '';
            if(data.locations[0] == locals){
               selected = 'selected';
            }
         
          otherLocations +=  `
            <li class="${selected}">
             <article class="hidden">
               <h2>${locals.city}, ${locals.state}</h2>
               <strong>${locals.title}</strong>
               <p>${locals.text}</p>
             </article>
            </li>
          `
          });
          otherLocations += '</ol>'

          banner.insertAdjacentHTML('beforeend', otherLocations);   
         }

         
          const posts = document.querySelector('.posts');

          if(posts) {
            console.log(posts);
            let postsList = '';
            posts.innerHTML = '';

            data.posts.forEach( post => {
               let text = post.text.slice(0 , 150);
               postsList += `<li>
                              <article>
                                 <img src="${post.imageURL}" alt="">
                                 <h3>${post.title} </h3>
                                 <h5>${post.subtitle}</h5>
                                 <p>${text}</p>
                                 <button><a href="#">Read more</a></button>
                              </article>
                           </li>`;
            });
          posts.insertAdjacentHTML('afterbegin', postsList);

          }
          
          const events = document.querySelector('.events');

          if(events){
            events.innerHTML ='';
            let eventList = '';
            let i = 0

          data.events.forEach( ev => {
            
            let text = ev.text;
            if(page != "events.html") {
            text = text.slice(0,45);
            }

            let rnumber = Math.floor(Math.random() * 4) + 1;
            if (i < 4) {
            eventList += `<li>
                           <img src="images/hikers100${rnumber}.jpg" > 
                           <h5>${ev.date}</h5>
                           <h4><em>${ev.title}</em></h4>
                           <p>${text}</p>
                     
                         </li>`;
            }
            i++;
          });
         
          events.insertAdjacentHTML('afterbegin', eventList);

          }
          
          const hikers = document.querySelector('.hikers-list');

          if(hikers) {
             hikers.innerHTML = '';
            let hikersList = '';
            data.hikers.forEach(el => {
               
               hikersList += `<li>
               <div>
                  <img src="${el.imageURL}" alt="">
                  <p><strong>${el.lastname},${el.firstname}</strong></p>
                  <p>${el.city}, ${el.state}</p>
               </div>
         </li>`;

            });

            hikers.insertAdjacentHTML('afterbegin', hikersList);

         }

          const about = document.querySelector('.about');
          if(about) {

            about.innerHTML = `<h3><strong>About</strong></h3>
                             <p><em> ${data.about.title} </em></p>
                             <p> ${data.about.text}</p>`;
          }
          
      
   } catch (error) {
      console.log(error);
   }
   
}
request.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json', true);
request.send(null);
}
getInformation();

//window.addEventListener('load',getInformation , false);
