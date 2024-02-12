import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

import Search_icon from '../navBar_icons/search.svg';
import Search_cross from '../navBar_icons/search_cross.svg';
import SearchDis from '../navBar_icons/search_disabled.svg';
import Image from 'next/image';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  textTransform: 'uppercase',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const SearchAppBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setIsSearching(value !== '');
  };

  const handleClearInput = () => {
    setInputValue('');
    setIsSearching(false);
  };

  return (
    <div className='flex m-auto'>
      <Box sx={{ flexGrow: 1 }}>
        <Search>
          {isSearching && (
            <Image
              src={SearchDis}
              alt="search icon"
              quality={100}
            />
          )}

          <StyledInputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleInputChange}
            value={inputValue.toUpperCase()}
          />
        </Search>
      </Box>

      <div className='flex items-center mr-4 tablet:mr-8'>
        {isSearching ? (
          <button type='button' onClick={handleClearInput}>
            <Image
              src={Search_cross}
              alt="cross in search box"
              quality={100}
            />
          </button>
        ) : (
          <button type='button'>
            <Image
              src={Search_icon}
              alt="search icon"
              quality={100}
            />
          </button>
        )}
      </div>
    </div>
  );
};
