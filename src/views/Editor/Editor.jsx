import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Info from './Info/Info'
import TestInput from './testinput'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [values, setValues] = React.useState({input1:'',input2:'0000'});
  function handleChange(event, newValue) {
    setValue(newValue);
  }
 
  function handleChangeIndex(index) {
    setValue(index);
  }
  // function handleChange ( name , event ) {
  //  // setValues({ ...values, [name]: event.target.value });
  // };

// const formatInput1 =()=> { 
// const formatInput1 =(dec)=> {  // add parameter to fixed the decimal
const formatInput1 =(dec,curr)=> {  // add parameter to set currency

  var s = values.input1;
 
  s = isNaN(s)?"0":s;  // if non-numeric than convert into 0
console.log(s)
   s= s.replace(/,/g, '');  //1.1

 // To Commas Start *****************  
   
   // get stuff before the dot
   var d = s.indexOf('.');
   var s2 = d === -1 ? s : s.slice(0, d);

   // insert commas every 3 digits from the right
   for (var i = s2.length - 3; i > 0; i -= 3)
   {  s2 = s2.slice(0, i) + ',' + s2.slice(i);

  
}


   // To Commas End ********************
   
 // Append fractional part Start*************
 
 

 if (d !== -1)
 {

 //  s2 +=  s.slice(d).substr(0,1+2);  // fixed 2 decimal
 s2 +=  s.slice(d).substr(0,1+dec); // set decimal by input parameter
 
}
 else
 {
   
 
//  s2 +=".00"  // fixed 2 decimal
s2 += (0).toFixed(dec).substr(1,2+dec) // set decimal by input parameter
 }
// Append fractional part End*************

// Replace -ve sign with () Start*************
   if(parseInt(s)< 0)
   s2 = "( " + s2.replace('-','')+" )" 
// Replace -ve sign with () End*************


// Add currency sign Start*********
 
s2 = curr + " "+ s2;

// Add currency sign End*********




setValues({ ...values, ["input1"]: s2 });


}

const TestMethod=()=>{
  setValues({ ...values, ["input2"]: "0000" });

}


/////With Unit Testing ******************
const formatInput2 =()=> {  

  var s = values.input1;

setValues({ ...values, ["input2"]: s});


}


  const handleChangeInput = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }
  return (
    <div className={classes.root}>
  <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label=""
        >
          <Tab label="Info" {...a11yProps(0)} />
          <Tab label="Paths" {...a11yProps(1)} />
          <Tab label="Tags" {...a11yProps(2)} />
          <Tab label="Without Unit Test" {...a11yProps(3)} />
          <Tab label="With Unit Test" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Info></Info>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
         <h1>Without Unit Test</h1>
            <Grid container spacing={1}>
        <Grid container   justify="flex-end" item xs={3}>  
          <TextField
        id="input1"
        label="Input"
        className={classes.textField}
        value={values.input1}
       onChange={handleChangeInput('input1')}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      /> 
      </Grid>
      <Grid container   justify="flex-end" item xs={1}>  
      <Button  
     // onClick={formatInput1}
    // onClick={()=> {formatInput1(4)}} // add decimal parameter
    onClick={()=> {formatInput1(2,'RS')}} // add decimal parameter
      variant="contained"
       color="secondary" 
       flexShrink={0}  
       sizeSmall 
       className={classes.button}>
      Format
      </Button>
      </Grid>
     
      </Grid>
      <p>1. tested manually by press on button.</p>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        <h1>With Unit Testing (TDD)</h1>
        <h2>Sprint1 Req: Format the number into thousand seperator (i.e 10000 -> 10,000)</h2>
         <h2>Sprint2 Req: Upto 2 decimal (i.e 10000 -> 10,000.00)</h2>
         <h2>Sprint3 Req: User can set the decimals (i.e 10000 -> 10,000.00 or 10,000.0000)</h2>
         <h2>Sprint4 Req: Replace the -ve sign with brakets (i.e -10000 -> (10,000.00) )</h2>
         <h2>Sprint5 Req: User could add currency sign (i.e 10000 -> RS 10,000.00 )</h2>
         <h2>Sprint6 Req: Convert non numeric or null values into 0 (i.e Abcd -> RS 0.00 )</h2>
         <p>*Note: It all can be done by regular expression within single line but for testing purpose I divided into different parts.</p>

      

      <TestInput></TestInput>
                </TabPanel>
      </SwipeableViews>
    </div>
  );
}
