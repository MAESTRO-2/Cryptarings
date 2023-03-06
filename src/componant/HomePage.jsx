import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetCryptosQuery } from './serviecs/cryptoApi';
import millify from 'millify';
import { Container, Grid, Typography } from '@mui/material';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import { Box } from '@mui/system';



export default function HomePage() {
const {data,isFetching} = useGetCryptosQuery(10)
const globalStats = data?.data?.stats

if (isFetching) return 'Loading ...'

return (
  <Grid> 
    <Box sx={{marginLeft:'4rem'}}>
    <TableContainer component={Paper} sx={{  maxWidth:{xs: 300, sm: 600}, minWidth:10, margin:'auto',}}>
      <Table sx={{ maxWidth: 600 , minWidth:10 }} aria-label="simple table">
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
    </Box>
    <Typography variant="h2" sx={{textAlign:'center', margin:'3rem 0 0 3rem', color:'orange'}}>Top 10 Currencies</Typography>
    <Cryptocurrencies simplified />
    <Typography variant="h2" sx={{textAlign:'center', margin:'3rem 0 0 3rem', color:'orange'}}>Latest News</Typography>
    <News simplified />
   </Grid>
  );
}