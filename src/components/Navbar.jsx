import { Stack } from '@mui/material'; 
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import icon from '../assets/icons.png'



const Navbar = () => (
  <Stack direction="row" alignitems="center" p={2} sx={{ position:'sticky', background:'#48BED8', top:0, justifyContent:'space-between'}}>
    <Link to="/" style={{ display: 'flex', alignitems: 'center'}}>

      <img className='logo' src={icon} alt="logo" height={50} />
      </Link>

      <SearchBar />


  </Stack>
)

export default Navbar