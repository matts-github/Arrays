const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const picsumURL = 'https://picsum.photos/v2/list?page='
const randomPage = Math.floor(Math.random() * (10) + 1)

const getData = () => {
  axios.get(`${picsumURL}${randomPage}&limit=100`)
    .then(response => {
      document.getElementById("myImg").src = response.data[${picsumURL}]['download_url'];
  });
};

getBtn.addEventListener('click', getData);