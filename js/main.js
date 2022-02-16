
// Variables

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
var savedEmails = {};

const picsumURL = 'https://picsum.photos/v2/list?page='


const getData = () => {
  const randomPage = Math.floor(Math.random() * (10) + 1)
  axios.get(`${picsumURL}${randomPage}&limit=100`)
    .then(response => {
      let pic = response.data[`${randomPage}`]['download_url'];
      console.log(response.data[`${randomPage}`]['download_url']);
      document.getElementById("myImg").innerHTML = `<img src=${pic}/>`;
  });
};

window.onload = getData();

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
      for (var i = 0; i < [savedEmails].length; i++) {
      for (var j = 0; j < savedEmails[email].length; j++) {
        
        // Defining variable
        let userCollection = "";

        // Looping through the email keys in the savedEmails object
        for (email in savedEmails) {
            console.log(`what is: ${JSON.stringify(email)}`);
            console.log(savedEmails);

            // document.getElementById("output").innerHTML +=
            //     JSON.stringify(email);

            // Variables for key and value
            let emailToAdd = `<h3> ${JSON.stringify(email)}</h3>`;
            let imgsToAdd = "";

            // Looping through the entire object
            for (var j = 0; j < savedEmails[email].length; j++) {
                // document.getElementById("output").innerHTML +=
                //     '<img src="' +
                //     savedEmails[email][j] +
                //     '" style="width:10px height:10px" />';
                console.log(savedEmails[email]);

                // Variable with the image loop attatched to it
                let imgToAdd = `<img src=${savedEmails[email][j]} style="width:10px height:10px" />`;
                
                imgsToAdd += imgToAdd;
            }

            // Adding the email and images variables into the userCollection varible
            userCollection += `${emailToAdd} ${imgsToAdd}`;
        }
      
        // Displaying userCollection variable in the HTML
        document.getElementById("output").innerHTML += userCollection;
      }
    };
      
    
    
    
    
    
    
    
    
    // document.getElementById("putImgHere").src = savedEmails[email].at(-1);
      // console.log(response.data[`${randomPage}`]['download_url']);

      // const para = document.createElement("p");
      // para.innerHTML = += '<img src="'+ savedEmails[email][i] +'" style="width:10px height:10px" />';
      // document.getElementById('output').appendChild(para);
      
      // const para = document.createElement("p");
      // para.innerText = [savedEmails];
      // document.getElementById('output').(para);

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

