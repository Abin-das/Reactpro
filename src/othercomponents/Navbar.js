import React from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Navbar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
//       <Tabs centered className='tabss'>
//     <Tab className='tabs' label="HOME" />
//     <Tab className='tabs' label="Vaccine registration" />
//     <Tab className='tabs' label="About" />
//     <Tab className='tabs' label="Contact" />
//     <Tab className='tabs' label="Sign Up" />
//   </Tabs>
<Tabs centered  value={value} onChange={handleChange} aria-label="basic tabs example">
<Tab className='tabs' label="HOME" />
//     <Tab className='tabs' label="Vaccine registration" />
//     <Tab className='tabs' label="About" />
//     <Tab className='tabs' label="Contact" />
//     <Tab className='tabs' label="Sign Up" />
        </Tabs>
    );
  }
  
  export default Navbar