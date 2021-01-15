import React, { useState }  from 'react';
import {useHistory, Link} from 'react-router-dom';
import {ReactComponent  as GirlWithBook} from '../../assets/GirlWithBook.svg';
import {ReactComponent  as Books} from '../../assets/books.svg';
import {ReactComponent  as Search} from '../../assets/loupe.svg';

import {
    Container,
    ContainerImageTitleAndSub,
    ContainerTitle,
    ContainerImage,
    Title,
    ContainerTitleAndSub,
    ContainerTextAbout,
    SearchBtn,
    SearchBox,
    BtnBox,
    Input,
    BooksBtn,
    AboutText,
    Button
} from './styles.js'


export default function Home() {
 const [ searchTerm, setSearchTerm ] = useState('');

 const history = useHistory();

  function searchBooks (){
     history.push({
        pathname:"/books",
        state:{searchTerm:searchTerm}
     });
 }

 return (
   <Container>
        <ContainerImageTitleAndSub >
            <ContainerTitleAndSub style={{marginTop:-50}}>

            <ContainerTitle>
                <Title>Wellcome to FotonBook</Title>
            </ContainerTitle>

            <ContainerTextAbout>
                <AboutText>
                FotonBook is your information site about your favorite books, you can search for a specific book or take a look at our complete collection.
                </AboutText>
            </ContainerTextAbout>

            <Link to="/books" style={{textDecoration:'none', color:'#000'}}>
            <BtnBox className="btn_box" >
                <BooksBtn className="all-books_btn" href='#'>
                    <Books style={{marginTop: 10,width:'50%', height:'50%'}}/>
                </BooksBtn>
                See all collection
                <Button className="btn_txt" type="text" ></Button>
                
            </BtnBox>
            </Link>
            <SearchBox  className="search_box">
                <SearchBtn onClick={()=>searchBooks()}className="search_btn">
                    <Search style={{marginTop: 10,width:'50%', height:'50%'}}/>
                </SearchBtn>
                <Input 
                className="search_txt"
                type="text" 
                placeholder="What are you looking?"
                value={searchTerm} 
                onChange={(e)=>setSearchTerm(e.target.value)} 
                />
                
            </SearchBox>
            </ContainerTitleAndSub>

            <ContainerImage>
                <GirlWithBook style={{width:'50%', height:'50%'}}/>
            </ContainerImage>
        </ContainerImageTitleAndSub>


   </Container>
 );
}