/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/

   function getInformation(){
    fetch("https://joshbloom.github.io/dws1/data/hikersguide.json")
    .then((info) => data = info.json()).then(
       data => {
          console.log(data);

          
          const locations = document.querySelector('.locations');

          if(locations) {
          let location = data.locations[0];
          locations.innerHTML = `<h2>${location.city}, ${location.state}</h2>
          <p><em><b>${location.title}</b></em></p>
          <p>${location.text}</p>`;

          }

          const posts = document.querySelector('.posts');

          if(posts) {
            //console.log(posts);
            let postsList = '';
            posts.innerHTML = '';

            data.posts.forEach( post => {
            
               postsList += `<li>
                              <article>
                                 <img src="${post.imageURL}" width="400" alt="">
                                 <h3>${post.title} </h3>
                                 <p>${post.text}</p>
                                 <button>Read more</button>
                              </article>
                           </li>`;
            });
          posts.insertAdjacentHTML('afterbegin', postsList);

          }
          
          const events = document.querySelector('.events');

          if(events){
            events.innerHTML ='';
            let eventList = '';

          data.events.forEach( ev => {
            
            eventList += `<li>
                        <div>
                           <h5>${ev.date}</h5>
                           <h4><em>${ev.title}</em></h4>
                           <p>${ev.text}</p>
                        </div>
                         </li>`;
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

            about.innerHTML = `<p><em> ${data.about.title} </em></p>
                             <p> ${data.about.text}</p>`;
          }
          
     
       }
    );
}


//document.addEventListener('load', getInformation());
