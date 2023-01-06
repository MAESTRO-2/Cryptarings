import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetCryptosQuery } from './serviecs/cryptoApi';
import millify from 'millify';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';


export default function BasicTable() {
const {data,isFetching} = useGetCryptosQuery(10)
const globalStats = data?.data?.stats

if (isFetching) return 'Loading ...'

return (
  <>
       <Link to="/" style={{textDecoration:'none'}}><Typography variant="h1" sx={{textDecoration:'none' ,display:{sm:'flex',xs:'none'} , margin:{sm:'200px 0 -200px 1100px', xs:'none', md:'none'}, color:'orange' }}>Cryptarings</Typography></Link> 

    <TableContainer component={Paper} sx={{ minWidth: 250, maxWidth: 600,  background:'black', margin:{xs:'none', sm:'0 0 0 300px'} }}>
      <Table sx={{ minWidth: 250, maxWidth: 600 , }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ paddingLeft:'100px', fontWeight:'bold', color:'orange'}}>Global Crypto State</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 },  }}>
              <TableCell  component="th" scope="row" sx={{color:'orange'}}>Total Cryptocurrensies</TableCell>
              <TableCell align="right" sx={{color:'orange'}}>{millify (globalStats.total)}</TableCell>
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell  component="th" scope="row" sx={{color:'orange'}}>Total Exchanges</TableCell>
              <TableCell align="right" sx={{color:'orange'}}>{millify (globalStats.totalExchanges)}</TableCell>
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell  component="th" scope="row" sx={{color:'orange'}}>Total Market Cap</TableCell>
              <TableCell align="right" sx={{color:'orange'}}>{millify (globalStats.totalMarketCap)}</TableCell>
            </TableRow>
            
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell  component="th" scope="row" sx={{color:'orange'}}>Total 24h Volume</TableCell>
              <TableCell align="right" sx={{color:'orange'}}>{millify(globalStats.total24hVolume)}</TableCell>
            </TableRow>
            
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell  component="th" scope="row" sx={{color:'orange'}}>Total Marketes</TableCell>
              <TableCell align="right" sx={{color:'orange'}}>{millify(globalStats.totalCoins)}</TableCell>
            </TableRow>
            
        </TableBody>
      </Table>
    </TableContainer>

    <Typography variant="h5" gutterBottom sx={{margin:'40px 0 0 50px'}}>
        Top 10 Cryptocurrancies  
    </Typography>
    <Cryptocurrencies simplified/>

    <Typography variant="h5" gutterBottom >
         <Link to="/Cryptocurrencies" style={{textDecoration:'none', color:'orange'}}> Show More
          </Link>
    </Typography>

    <Typography variant="h5" gutterBottom sx={{margin:'20px 0 0 0'}}>
        The Lastes News In Trading Comunity  
    </Typography>
    <News simplified/>

    <Typography variant="h5" gutterBottom sx={{margin:'20px 0 0 0'}}>
         <Link to="/Cryptocurrencies" style={{textDecoration:'none', color:'orange'}}> Show More
          </Link>
    </Typography>
    </>
  );
}