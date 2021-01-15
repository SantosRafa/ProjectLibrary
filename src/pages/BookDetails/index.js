import ReactStars from "react-rating-stars-component";
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as BackArrow} from '../../assets/left-arrow.svg';
import { ReactComponent as Heart} from '../../assets/heart.svg';
import { ReactComponent as HeartFilled} from '../../assets/heartFilled.svg';
import { ReactComponent as Cart} from '../../assets/shopping-cart.svg';

import {
  Container,
  ContainerCover,
  ContainerInfo,
  BackButton,
  ContainerImage,
  ContainerHeader,
  Image,
  TitleContainer,
  Title,
  AuthorName,
  ContainerMiddleInfo,
  ContainerPriceandRating,
  Price,
  ContainerSinopse,
  SinopseText,
  BuyButton
} from './styles';

export default function BookDetails(props) {
  const [ like, setLike ] = useState(false);
  const [ amountStars, setAmountStars ] = useState(0);
  const { book } = props.location.state;
  console.log(book)


  const changeRating = (newRating) =>{
    setAmountStars(newRating)
  }

 return (
   <Container>
       <Link className="back-button-book-details" to="books">
          <BackButton>
              <BackArrow style={{width:15}}/>
          </BackButton>
        </Link>
      
     <ContainerCover>
      <ContainerImage>
        <Image
        src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail }
        />
       </ContainerImage>
      
     </ContainerCover>

     <ContainerInfo>
      <ContainerHeader>

       <TitleContainer>
        <Title>
         {book.volumeInfo.title}
        </Title>
        <AuthorName>
          {book.volumeInfo.authors ? book.volumeInfo.authors.map((author =>(
            `by ${author}`
            )) ):'Not informed Author'}
        </AuthorName>
       </TitleContainer>
       <div onClick={()=> {setLike(!like)}}>

       {like ? <HeartFilled style={{width:30, cursor:'pointer'}}/> : <Heart style={{width:30, cursor:'pointer'}}/>}
       </div>
      </ContainerHeader>

      <ContainerMiddleInfo>
        <ContainerPriceandRating>
            <Price>
              { book.saleInfo && book.saleInfo.listPrice ? `R$ ${book.saleInfo.listPrice.amount}` : 'Not avaliable to sale'}
            </Price>
            { book.saleInfo && 
            book.saleInfo.listPrice ?
             <BuyButton onClick={()=>{window.location.href=book.saleInfo.buyLink }}> 
               <Cart style={{width:20}}/>
             </BuyButton> : ''}
            

        <ReactStars
        count={5}
        onChange={changeRating}
        value={amountStars}
        size={24}
        activeColor="#ffd700"
        />
        </ContainerPriceandRating>
      </ContainerMiddleInfo>

      <ContainerSinopse>
        <SinopseText>
            {book.volumeInfo.description ? book.volumeInfo.description : 'Not Avaliable Sinopse'}
        </SinopseText>
      </ContainerSinopse>

     </ContainerInfo>
   </Container>
 );
}