const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const picsumURL = 'https://picsum.photos/v2/list?page='


const getData = () => {
  const randomPage = Math.floor(Math.random() * (10) + 1)
  axios.get(`${picsumURL}${randomPage}&limit=100`)
    .then(response => {
      console.log(response.data[`${randomPage}`]['download_url']);
      document.getElementById("myImg").src = response.data[`${randomPage}`]['download_url'];
  });
};

getBtn.addEventListener('click', getData);

// Form Validation

// function validation()
// {

//     var email = document.getElementById("email").value;
//     var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

//     if (email.match(pattern))
//     {
//         form.classList.add("valid")
//         form.classList.remove("invalid")
//         text.innerHTML = "Your Email Address in Valid.";
//         text.style.color = "#00ff00";
//     }
//     else
//     {
//         form.classList.remove("valid")
//         form.classList.add("invalid")
//         text.innerHTML = "Please Enter Valid Email Address.";
//         text.style.color = "#ff0000";
//     }
// }

function validation()
{
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  if (email.match(pattern))
  {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address is Valid.";
    text.style.color = "#00ff00";
  }
  else
  {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = "#ff0000";
  }

  if (email == "")
  {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
}

let movies = [];

const addMovie = (ev)=>{
  ev.preventDefault(); // To stop the form from submitting
  let movie = {
      id: Date.now(),
      email: document.getElementById('email').value
  }
  movies.push(movie);
  document.forms[0].reset(); // To clear the form for the next entries

  // For display purposes only
  console.warn('added' , {movies} );
  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

  // Saving to local storage
  localStorage.setItem('MyMovieList', JSON.stringify(movies) );
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('post-btn').addEventListener('click', addMovie);
});