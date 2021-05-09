
const foodILike = [{
  name: "Kimchi",
  image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  key: 1
},
{
  name: "Samgyeopsal",
  image:
    "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    key: 2
},
{
  name: "Bibimbap",
  image:
    "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    key: 3
},
{
  name: "Doncasu",
  image:
    "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    key: 4
},
{
  name: "Kimbap",
  image:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    key: 5
}]


const Food = ({ name, image }) => {
  return (
    <div>
      <h2>I like { name }</h2>
      <img src = { image } alt={ name }></img>
    </div>
  )}
  
function App() {
  return (
    <div className="App">
      <h2>Hello!</h2>
      {foodILike.map(dish => {
        return(
          <Food name = {dish.name} image = {dish.image} key = {dish.key}/>
          );
      })}
    </div>
  );
}

export default App;
