import { Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { orange } from '@mui/material/colors';
import { Box } from '@mui/system'
import HTMLReactParser from 'html-react-parser';

import millify from 'millify'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import LineChart from './LineChart';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from './serviecs/cryptoApi';

const CryptoDetails = () => {
  const {coinId} = useParams()
  const [timeperiod, setTimeperiod] = useState('7d');
  const {data , isFetching} = useGetCryptoDetailsQuery(coinId)
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
  const Details = data?.data?.coin



  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${Details?.price && millify(Details?.price)}`, },
    { title: 'Rank', value: Details?.rank },
    { title: '24h Volume', value: `$ ${Details?.volume && millify(Details?.volume)}`,   },
    { title: 'Market Cap', value: `$ ${Details?.marketCap && millify(Details?.marketCap)}`,  },
    { title: 'All-time-high(daily avg.)', value: `$ ${Details?.allTimeHigh?.price && millify(Details?.allTimeHigh?.price)}`,   },
  ];

  const handleChange = (event) => {
    setTimeperiod(event.target.value)
  }

  const genericStats = [
    { title: 'Number Of Markets', value: Details?.numberOfMarkets, },
    { title: 'Number Of Exchanges', value: Details?.numberOfExchanges,  },
    { title: 'Aprroved Supply', value: Details?.supply?.confirmed  },
    { title: 'Total Supply', value: `$ ${Details?.supply?.total && millify(Details?.supply?.total)}`,  },
    { title: 'Circulating Supply', value: `$ ${Details?.supply?.circulating && millify(Details?.supply?.circulating)}`,  },
  ];
  
  return (
   
    <Grid item xs={4} sx={{ paddingLeft:'4rem',paddingRight:'0.8rem', textAlign:'center'}} >

       <Typography sx={{color:'orange', textAlign:'center'}} variant="h6" gutterBottom> {`${data?.data?.coin.name} (${data?.data?.coin.symbol}) price`}</Typography> 
       <p style={{color:'orange', textAlign:'center'}} >{data?.data?.coin.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
    
    <LineChart coinHistory={coinHistory} currentPrice={millify(Details?.price)} coinName={Details?.name} />

    
    <Box sx={{display:{sm:'flex'}, marginBottom:'50px',}}>

    <Box sx={{marginRight:{sm:'200px'}, marginLeft:{sm:'100px'},marginTop:'1rem' }}>
    <Typography sx={{color:'orange', textAlign:"center"}}  variant="h6" gutterBottom> {data?.data?.coin.name} Value Statistics An overview showing the statistics of {data?.data?.coin.name}, <br/>such as the base and quote currency, the rank, and trading volume.</Typography>
    {stats.map(({ title, value }) => (
    <TableContainer component={Paper}>
    <Table sx={{ maxWidth: 650, textAlign:'right', }} aria-label="simple table">
    <TableRow>
            <TableCell> {title} </TableCell>
            <TableCell sx={{textAlign:'right'}}> {value} </TableCell>
      </TableRow>
     </Table>
     </TableContainer>
     ))}
     </Box>

    
     <Box >
    <Typography sx={{color:'orange', textAlign:'center',marginTop:'1rem'}}  variant="h6" gutterBottom>Other Stats Info  An overview showing the statistics of {data?.data?.coin.name}, <br/>such as the base and quote currency, the rank, and trading volume.</Typography>
     {genericStats.map(({ title, value }) => (
    <TableContainer component={Paper}>
    <Table sx={{ maxWidth: 650 }} aria-label="simple table">
    <TableRow>
            <TableCell> {title} </TableCell>
            <TableCell sx={{textAlign:'right'}}> {value} </TableCell>
    </TableRow>
    </Table>
    </TableContainer>
     ))}
     </Box>

     </Box>

      <Box sx={{display:{sm:'inline-block'},  margin:'auto'}}>
      <Box sx={{minWidth:{sm:'700px', xs:'350'}, maxwidth:'650', marginLeft:{sm:13}}}>
      <Typography sx={{color:'orange'}}  variant="h6" gutterBottom>What is {data?.data?.coin.name}?</Typography>
      <div style={{color:'orange', overflowWrap:'anywhere', }}  dangerouslySetInnerHTML={{__html : data?.data?.coin.description}}>

      </div>
      </Box>
      

      <Box sx={{ marginTop:{sm:'50px', maxWidth:'600px',marginTop:'1rem'}}}>
      <Typography variant="h6" gutterBottom>{data?.data?.coin.name} Links</Typography>
      {data?.data?.coin.links?.map((link) => (
        <TableContainer component={Paper} sx={{ maxWidth:'600px'}} >
        <Table sx={{ maxWidth:'600px'}} aria-label="simple table">
        <TableRow >
            <TableCell variant="h6" gutterBottom>{link.type}</TableCell>
            <TableCell sx={{textAlign:'right'}}>  <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a></TableCell>
         </TableRow>
        </Table>
        </TableContainer>
))}
        </Box>
        </Box>
   
    </Grid>
    )
}

export default CryptoDetails