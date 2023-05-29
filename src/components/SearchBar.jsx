import {useState} from 'react';

import { useNavigate } from 'react-router-dom';

import {Paper, IconButton} from '@mui/material';

import { Search } from '@mui/icons-material';

const SearchBar = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');

    }
 }

  return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
        borderRadius: 20,
        border :'3px solid #FCE0A2',
        pl: 2,
        mr: { sm: 5 },
        background:'#FCE0A2',
        boxShadow:'2px 2px 3px black'
        
        
    }} >
       <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

        />
        <IconButton type="submit" sx={{ p:'10px', color:'#48BED8'}}>
            <Search className='search'/>
        </IconButton>
    </Paper>


    )
}

export default SearchBar