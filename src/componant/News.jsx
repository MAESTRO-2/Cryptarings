import React from 'react'
import { useState } from 'react';
import moment from 'moment';
import { useGetCryptoNewsQuery } from './serviecs/cryptoNewsApi';
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const count = simplified ? 6 : 12
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if (!cryptoNews?.value) return('loading ...')

  return (
    <>
        <div style={{marginTop:80}}>
          {cryptoNews?.value?.map((news, i) =>(
          <a href={news.url} target="_blank" rel="noreferrer" style={{textDecoration:'none', display:'inline-block',  }}>
        <Card sx={{ minWidth:{sm:360, xs:360}, maxWidth:{sm:400, xs:400}, minHeight: 380, maxHeight: 320, background:'black', color:'orange',margin: {sm:'30px 10px 10px 170px', xs:'30px 10px 10px 13px'} }}>
         <CardActionArea>
    
           <CardContent>
            <Typography gutterBottom variant="h6" component="div" style={{display:'flex',color:'orange'}}>
             {`${news.name}`}

             <CardMedia
                style={{ color:'orange', height:"80px", width:"80px", alignItems:'right', display:'flex', margin:'-5px 0 0 100px'}}
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
        </div>
    </>
  )
}

export default News
