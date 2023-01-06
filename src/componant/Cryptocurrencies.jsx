import React from 'react'
import { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from './serviecs/cryptoApi'
import TextField from '@mui/material/TextField';

import { Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material'

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
    <>
    <div style={{marginTop:80}}>
    {!simplified && (
    <div>
    <TextField sx={{marginLeft:{sm: 105 , xs: 10} }} label="Search Cryptocurrency" variant="standard"
    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
    />
    </div>
       )}
       {cryptos?.map  ((currecny) => 

    <Link to={`/crypto/${currecny.uuid}`}  style={{textDecoration:'none', display:'inline-block',  }}  >
      <Card sx={{ minWidth:{sm:330, xs:300}, maxWidth:{sm:330, xs:300}, minHeight: 300, maxHeight: 300, background:'black', color:'orange',margin: {sm:'30px 10px 10px 100px', xs:'30px 10px 10px 50px'} }}>
       <CardActionArea>
    
         <CardContent>
           <Typography gutterBottom variant="h5" component="div" style={{display:'flex',color:'orange'}}>
            {`${currecny.rank}.${currecny.name}`}

             <CardMedia
                style={{ color:'orange', height:"40px", width:"40px", alignItems:'right', display:'flex', margin:'-5px 0 0 100px'}}
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
    </div>
    </>
  )
}

export default Cryptocurrencies