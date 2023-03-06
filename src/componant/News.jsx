import React from 'react'
import { useState } from 'react';
import moment from 'moment';
import { useGetCryptoNewsQuery } from './serviecs/cryptoNewsApi';
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const count = simplified ? 6 : 12
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if (!cryptoNews?.value) return('loading ...')

  return (
    <Grid item xs={4} sx={{textAlign:'center'}}>

          {cryptoNews?.value?.map((news, i) =>(
          <a href={news.url} target="_blank" rel="noreferrer" style={{textDecoration:'none', display:'inline-block',  }}>
        <Card sx={{background:'gray', maxWidth:{xs:'20rem', sm:'25rem'},minHeight:'25rem',maxHight:'25rem', margin:'0 0 1rem 3rem', display:{xs:'block', sm:'ab'} , }}>
         <CardActionArea>
    
           <CardContent>
            <Typography gutterBottom variant="h6" component="div" style={{display:'flex'}}>
             {`${news.name}`}

             <CardMedia
                style={{ height:"80px", width:"80px", alignItems:'right', display:'flex', margin:'-5px 0 0 50px'}}
                component="img"
                src={news?.image?.thumbnail?.contentUrl || demoImage}
                alt="green iguana"          
                 />
                   </Typography>
                    <Divider />

                        <Typography variant="h8" color="text.secondary" sx={{marginTop:'20px',color:'orange'}}>
                        {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}                        
                        </Typography>
                        <div style={{ display:'flex' }}>
                        <Avatar sx={{paddingTop:'-30px', marginTop:'20px'}}  alt="Remy Sharp" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                        <Typography style={{paddingTop:'30px', paddingLeft:'20px'}} variant="caption" >{news.provider[0]?.name}</Typography>
                        <Typography style={{paddingTop:'30px', paddingLeft:'40px'}} variant="caption" >{moment(news.datePublished).startOf('ss').fromNow()}</Typography>
                        </div>
             </CardContent>
         </CardActionArea>
       </Card>
       </a>
        ))}
        </Grid>
  )
}

export default News
