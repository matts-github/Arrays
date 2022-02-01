

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

const getEmail = () => {
  const randomPage = Math.floor(Math.random() * (10) + 1)
  axios.get(`${picsumURL}${randomPage}&limit=100`)
    .then(response => {
      let email = document.getElementById('email').value;
      let pic = response.data[`${randomPage}`]['download_url'];

      if (email === "") {
        //stop from working
    }else{
       //carry on as usual
    

      //check if email is already being used
      if (email in savedEmails) {
        savedEmails[email].push(pic);
      }else{
        savedEmails = { ...savedEmails, [email]: [pic]};
      }

      // savedEmails = { ...savedEmails, [email]: pic};
      console.log(savedEmails);
      document.getElementById('generator').innerHTML = JSON.stringify(email);
      for (x in savedEmails[email]) {
      document.getElementById("generator").innerHTML += '<img src="'+ savedEmails[email][x] +'" style="width:10px height:10px" />';
      };
      document.getElementById("putImgHere").src = savedEmails[email].at(-1);

      const para = document.createElement("p");
      para.innerText = [email];
      document.getElementById('generator').appendChild(para);
      
      

    }


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

