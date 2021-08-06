// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  var names = ["silva","kutinho", "alison" , "neymar"];
  var countrys = ["bazil"];
  // var num = [11,22,1,25];

 const ProductList = [
          {name : "photoshop", price :'$200'},
          {name : "adove", price :'$500'},
          {name : "picsart", price :'$50'},
          {name : "premium netflix", price : "$300"}
        ]


       

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>My first react paragraph</p>

        {/* dataload ......................*/}
        <UserPost></UserPost>


        {/* useState....................... */}
        <Count></Count>


        <ul>
        {names.map(name => <li>{name}</li>)}
        </ul>
        
        {names.map(name => <PlayerName name={name} country = {countrys} ></PlayerName>)}
        
        <ul>
          {ProductList.map(product => <li>{product.name}</li>)}
        </ul>

        {ProductList.map(products => <Product product = {products}></Product>)}




        
        {/* <Product product = {ProductList[1]}></Product>
        <Product product = {ProductList[2]}></Product> */}

        {/* <PlayerName name="Neymar" country = "Brazil" number = "10"></PlayerName>
        <PlayerName name = {names[0]} country = {countrys[0]} number = {num[3]}></PlayerName>
        <PlayerName name = {names[1]} number = {num[0]} ></PlayerName>
        <PlayerName name = {names[2]} number = {num[1]}></PlayerName>
        <PlayerName name = {names[3]} number = {num[2]}></PlayerName> */}
        
      </header>
    </div>
  );
}

//server Data load = useEffect()   api
function UserPost(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
 }, [])
  return(
    <div>
      <h1>User :{users.length}</h1>
      <ul>
        {users.map( user =><li>{user.email}</li>)}
      </ul>
    </div>
    
    
  )
}



// stateCount   //state hook = useState()
function Count(){
  const [count, setState] = useState(0)
  const removeClick = () =>{
    setState(count-1)
  }
  const addClick = () => {
     
    setState(count + 1)
  }
  return(
    <div>
      <h2>Count : {count}</h2>
      <button onClick= {removeClick}>Remove</button>
      <button onClick ={addClick}>add</button>
    </div>
  )
}






function Product(props){
  const productStyle = {
    border : "2px solid black",
    backgroundColor : "gray",
    borderRadius : "10px",
    hight : "100px",
    width : "25%",
    margin : "5px",
    padding : "5px",
    
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
      <h3>Product Name : {name} </h3>
      <h6>Price : {price} </h6>
      <button>submit</button>
    </div>
  )
}



function PlayerName(props){
  var style = {
    color : "black",
    backgroundColor: "white",
    border : "2px solid blue",
    width : "50%",
    margin : "5px",
    padding : "5px" 
    
  }
  return (
    <div style = {style}>
      <h5>Player Name : {props.name} </h5>
      <h5>Player Country : {props.country} </h5>
      <h6>Player number : {props.number}</h6>
    </div>
  )
}


export default App;
