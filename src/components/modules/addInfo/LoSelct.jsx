import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { gpsLsit } from '../main/gpsList';

const useStyles = makeStyles({
  select: {
    '&:before': {
      borderColor: 'white',
    },
    '&:after': {
      borderColor: 'white',
    },
    '&>fieldset:hover': {
      borderColor: '#E1E1E1 !important',
    },
    '&>fieldset': {
      borderColor: '#E1E1E1 !important',
    },
    '&:not(.Mui-disabled):hover::before': {
      borderColor: 'white',
    },
  },
  icon: {
    fill: 'white',
  },
  root: {
    color: 'white',
  },
  menu: {
    '&.Mui-selected': {
      backgroundColor: '#C4C4C4 !important',
    },
  },
});

const Selects = props => {
  const { sele } = props;
  const classes = useStyles();

  const { data, _onChange } = props;

  const [Area, setArea] = React.useState('');

  const handleChange = event => {
    setArea(event.target.value);
  };
  sele(Area);
  console.log(Area);
  return (
    <FormControl
      sx={{
        m: 1,
        maxWidth: 183,
        width: '100%',
        borderColor: '#E1E1E1',
        maxHeight: 300,
        overflowY: 'scroll',
      }}
    >
      <Select
        displayEmpty
        className={classes.select}
        variant="outlined"
        MenuProps={{ disableScrollLock: true }}
        inputProps={{
          classes: {
            icon: classes.icon,
            root: classes.root,
          },
        }}
        value={Area}
        onChange={handleChange}
      >
        {gpsLsit.map((item, idx) => {
          return (
            <MenuItem className={classes.menu} key={idx} value={item}>
              {item.location}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

Selects.defaultProps = {
  data: false,
};

export default Selects;
