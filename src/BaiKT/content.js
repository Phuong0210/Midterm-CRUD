import React, { Component } from 'react';
import axios from 'axios';

//import {toast} from 'react-toastify';
// import Formnhap from './Formnhap';
// import Formnhap from './Formnhap';
class Content extends Component {
   constructor(props) {
      super(props);
      this.state={
         adver: [],
         id: '',
         name: '',
         img: ''
      }
      //this.onChange = this.onChange.bind(this);
      this.showEditProduct = this.showEditProduct.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
      var {match} = this.props;
      if (match) {
        var id = match.params.id;
        axios({
        method: 'GET',
        url :`https://61c189b59dbcca0017c81f4a.mockapi.io/api/advertisement/${id}`,
        data : null
       }).then(res =>{
        var data = res.data;
          this.setState({
            id: data.id,
        name:data.name,
        img: data.img

          });
        }).catch( err =>{
      });
     }
      axios.get('https://61c189b59dbcca0017c81f4a.mockapi.io/api/advertisement').then(res => {
        this.setState({  adver:  res.data});
      })
      
    }
    getProduct = (id) => {
      for(var i=0; i<this.state. adver.length; i++) {
        if (this.state. adver[i].id === id) {
          return this.state. adver[i];
        }
      
      return null;
    }
    
    }
    showEditProduct = (id) => {
      var  advers = this.getProduct(id);
      this.setState({
        id: advers.id,
        name: advers.name,
        img: advers.img
    
       
      });
      document.getElementById('image-edit').style.display = 'block';
      alert(id);
    }
    getIndexadver = (id) => {
      for(var i=0; i<this.state. adver.length; i++) {
        if (this.state. adver[i].id === id) {
          return i;
        }
      }
      return -1;
    }
    
   
      
    
  render(){
    return (
      <div className="">
   
      {  this.state. adver.map(( advers) =>(
            <div className="card col-12" style={{ width: "" }}>
              <br></br>
            <img className="card-img-top" src={"./"+ advers.img} alt="Card image cap" />
             
                 
            </div>
          
   
     
     
           ))}
           
           
          </div>
      
    
  
  
        );
  }
}

 
export default Content;
 


