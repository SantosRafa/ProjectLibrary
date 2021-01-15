import React, { useEffect, useState } from 'react';
import {useHistory, Link} from 'react-router-dom';
import { ReactComponent as GirlRead} from '../../assets/girlRead.svg';
import { ReactComponent as BackArrow} from '../../assets/left-arrow.svg';
import {ReactComponent  as Search} from '../../assets/loupe.svg';
import {ReactComponent  as Plus} from '../../assets/plus.svg';
import CoverNotFind from '../../assets/covernotfind.jpg';


import api from '../../services/api';

import {
    Container,
    HeaderContainer,
    BackButton,
    TitleContainer,
    Title,
    ListBooks,
    SearchBtn,
    SearchBox,
    Input,
    LoadMoreButton,
    ContainerLoadMoreButton
} from './styles';

var booksArray = []

export default function BooksList(props) {
  const [ books, setBooks ] = useState({});
  const [ searchTerm, setSearchTerm] = useState('');
  const [ index, setIndex]  = useState(0);


  const history = useHistory();

  useEffect(()=>{
    
    async function loadBooks(){
     const response = await api.get(`
     ${props.history.location.state && 
      props.history.location.state.searchTerm ? 
      props.history.location.state.searchTerm : 
      'a'}&startIndex=${index}&maxResults=40`);
     setBooks(response.data);

     console.log('reponse -->', response.data)
    }

    loadBooks();
  },[index]);
  

  useEffect(()=>{
    if(books && books.items){
      books.items.map((book)=>{
        booksArray.push(book);
      })
    }
  },[books]);

  async function searchBooks (){
    const response = await api.get(`
    ${searchTerm 
    ? searchTerm 
    : 'a'}&startIndex=${index}&maxResults=40`);
    setBooks(response.data);
    setSearchTerm('');
  }

 return (
   <Container>
     <HeaderContainer className="header">
       
       <div style={{marginBottom:42, width:'50%'}}>

          <Link className="back-button" to="/">
            <BackButton>
                <BackArrow style={{width:15}}/>
            </BackButton>
          </Link>
        <GirlRead style={{height:'250%'}}/>
       </div>
      <TitleContainer>
      <Title> Collection FotonBook</Title>
      </TitleContainer>
      <SearchBox className="search_box">
          <Input 
          className="search_txt" 
          value={searchTerm} 
          onChange={(e)=>setSearchTerm(e.target.value)} 
          type="text" 
          placeholder="What are you looking for ?"/>
           <SearchBtn onClick={()=>searchBooks()}className="search_btn">
            <Search style={{marginTop: 10,width:'50%', height:'50%'}}/>
           </SearchBtn>
      </SearchBox>
     </HeaderContainer>
    
     <ListBooks>
        {books && books.items && books.items.map(book => {
          
         return (
          <li style={{ zIndex:1000}} onClick={()=>{
            history.push({
              pathname:"/bookDetail",
              state:{book:book}
           })
          }}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

              <img style={{height:180}} src={
                book.volumeInfo && book.volumeInfo.imageLinks ?
                book.volumeInfo.imageLinks.thumbnail : CoverNotFind  }/>
              <div style={{ width:100}}> 

                <p style={{textAlign:'center'}}>{book.volumeInfo.title}</p>
              </div>
            </div>
          </li>
        )})}
     </ListBooks>
     <ContainerLoadMoreButton>
     <LoadMoreButton onClick={()=>{setIndex(index + 1)}}>
       <Plus style={{width:20, height:20}} />
     </LoadMoreButton>
     </ContainerLoadMoreButton>
   </Container>
 );
}