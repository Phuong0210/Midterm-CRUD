import React, { Component } from 'react';
import axios from 'axios';
import Content from './content';
class Home extends Component {
   constructor(props) {
      super(props);
      this.state={
        news2: [],
      id: '',
      title: '',
      image : '',
      content: '',
      author : '',
      datecreate : ''
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
        url :`https://61c189b59dbcca0017c81f4a.mockapi.io/api/news/${id}`,
        data : null
       }).then(res =>{
        var data = res.data;
          this.setState({
            id: data.id,
            title: data.title,
            image : data.image,
            content: data.content,
            author : data.author,
            datecreate : data.datecreate
          });
        }).catch( err =>{
      });
     }
      axios.get('https://61c189b59dbcca0017c81f4a.mockapi.io/api/news').then(res => {
        this.setState({ news2:  res.data});
      })
      
    }
    getProduct = (id) => {
      for(var i=0; i<this.state.news2.length; i++) {
        if (this.state.news2[i].id === id) {
          return this.state.news2[i];
        }
      
      return null;
    }
    
    }
    showEditProduct = (id) => {
      var news2s = this.getProduct(id);
      this.setState({
        id: news2s.id,
      title: news2s.title,
      author: news2s.author,
      content: news2s.content,
      image : news2s.image,
      datecreate : news2s.datecreate,
       
      });
      document.getElementById('image-edit').style.display = 'block';
      alert(id);
    }
    getIndexnews2 = (id) => {
      for(var i=0; i<this.state.news2.length; i++) {
        if (this.state.news2[i].id === id) {
          return i;
        }
      }
      return -1;
    }
    
   
      
    
  render(){
    return (
      <div className="row">
        <><h3><i class="bi bi-globe2"></i>THẾ GIỚI</h3></>   
      <div className="col-md-6">
      <div className="card" style={{ width: "" }}>

        <br></br>
        
      <img className="card-img-top" src={"images/tq.jpg"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Học sinh tiểu học Trung Quốc phải tập trung học ‘tư tưởng Tập Cận Bình’</h5>
                  <div className="row">
                    <div className="col-6">
                          2022-05-27 T11:43
                    </div>
                    <div className="col-6">
                          L.V.T
                    </div>
                  </div>
                  <h8 className="card-title">Cùng với việc loại bỏ các nội dung có thể bị ảnh hưởng bởi phương Tây, các trường học Trung Quốc từ cấp tiểu học được chính quyền yêu cầu phải tập trung học ‘tư tưởng Tập Cận Bình’.</h8>
                  </div>
          </div>
      </div>
      <div className="col-md-4">
      {  this.state.news2.map((news2s) =>(
                  <div className="card mb-3" style={{maxWidth: '450px'}}>
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img src={"./"+ news2s.image}className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h6 className="card-title"><i className='bi bi-youtube'></i> {news2s.title}</h6>
                        <p className="card-text"><small className="text-muted">Ngày đăng: {news2s.datecreate}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
          
   
     
     
           ))}
           
           <br></br>
          </div>
      
    
  
  <div className="col-md-2"><Content/></div>
       </div>     
        );
  }
}

 
export default Home;
 

