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

function validation()
{

    var email = document.getElementById("email").value;
    var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if (email.match(pattern))
    {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your Email Address in Valid.";
        text.style.color = "#00ff00";
    }
    else
    {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please Enter Valid Email Address.";
        text.style.color = "#ff0000";
    }
}