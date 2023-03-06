import React from 'react'
import { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from './serviecs/cryptoApi'
import TextField from '@mui/material/TextField';

import { Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Typography } from '@mui/material'

const Cryptocurrencies = ({simplified }) => {
    const count = simplified ? 10 : 100
    const {data : cryptoList, isFetching} = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);

    const filteredData = cryptoList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

if (isFetching) return 'loading ...'
  return (
    
    <div >
    {!simplified && (
    <div style={{textAlign:'center', marginLeft:'5rem'}}>
     <TextField label="Search Cryptocurrency" variant="standard"
    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
    />
    </div>
       )}
       <Grid  item xs={4} sx={{paddingLeft:'4rem', textAlign:'center'}} >
       {cryptos?.map  ((currecny) => 

    <Link to={`/crypto/${currecny.uuid}`}  style={{textDecoration:'none'}}  >

      <Card sx={{ minWidth:{sm:330, xs:300}, maxWidth:{sm:330, xs:300}, minHeight: 300, maxHeight: 300, background:'gray', color:'white', display:'inline-block', margin:{sm:'1rem 0 1rem 1rem', xs:'1rem 0 0 0'}}}>
       <CardActionArea>
    
         <CardContent>
           <Typography gutterBottom variant="h5" component="div" style={{display:'flex',color:'white'}}>
            {`${currecny.rank}.${currecny.name}`}

             <CardMedia
                style={{ color:'white', height:"40px", width:"40px", alignItems:'right', display:'flex', margin:'-5px 0 0 100px'}}
                component="img"
                src={currecny.iconUrl}
                alt="green iguana"          
                 />
                   </Typography>
                    <Divider />

                        <Typography variant="body2" color="text.secondary" sx={{marginTop:'20px',color:'orange'}}>
                        Price: {millify(currecny.price)} $
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{marginTop:'20px',color:'orange'}}>
                         Market Cap: {millify(currecny.marketCap)}   
                        </Typography>
      
                        <Typography variant="body2" color="text.secondary" sx={{marginTop:'20px',color:'orange'}}>
                         Changes {millify(currecny.price)}%            
                         </Typography>
             </CardContent>
         </CardActionArea>
       </Card>
 
      </Link>
      
      )}
      </Grid>
    </div>
    
  )
}

export default Cryptocurrencies