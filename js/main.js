

// Saved emails

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
var savedEmails = {};

const picsumURL = 'https://picsum.photos/v2/list?page='


const getData = () => {
  const randomPage = Math.floor(Math.random() * (10) + 1)
  axios.get(`${picsumURL}${randomPage}&limit=100`)
    .then(response => {
      console.log(response.data[`${randomPage}`]['download_url']);
      document.getElementById("myImg").src = response.data[`${randomPage}`]['download_url'];
  });
};
// const getEmail = () => {
//   let email = document.getElementById('email').value;
//       let pic = response.data[`${randomPage}`]['download_url'];
//       const mail = {[email]: pic};
//       console.log(mail);
//       const myJSON = JSON.stringify(mail);
//       console.log(myJSON);
//       document.getElementById("result").innerHTML = myJSON;
//   };
const getEmail = () => {
  const randomPage = Math.floor(Math.random() * (10) + 1)
  axios.get(`${picsumURL}${randomPage}&limit=100`)
    .then(response => {
      let email = document.getElementById('email').value;
      let pic = response.data[`${randomPage}`]['download_url'];
      savedEmails = { ...savedEmails, [email]: pic};
      console.log(savedEmails);
      document.getElementById("myMail").src = response.data[`${randomPage}`]['download_url'];
  });
};

function changepic(div) {
	document.getElementById(div).src = "https://picsum.photos/200/300";
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', getEmail);


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

// Email storage

// let pictures = [];

// const addPicture = (ev)=>{
//   ev.preventDefault(); // To stop the form from submitting
//   let picture = {
//       email: document.getElementById('email').value
//   }
//   pictures.push(picture);
//   document.forms[0].reset(); // To clear the form for the next entries

//   // For display purposes only
//   console.warn('added' , {pictures} );
//   let pre = document.querySelector('#msg pre');
//   pre.textContent = '\n' + JSON.stringify(pictures, '\t', 2);

//   // Saving to local storage
//   localStorage.setItem('MyPictureList', JSON.stringify(pictures) );
// }
// document.addEventListener('DOMContentLoaded', ()=>{
//   document.getElementById('post-btn').addEventListener('click', addPicture);
// });

