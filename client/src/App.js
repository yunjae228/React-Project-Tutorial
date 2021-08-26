
import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
   root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX : "auto"
  },
  table: {
    minWidth: 1080
  }
});



class App extends Component {

  //state는 component내에서 변경될 수 있는 변수를 처리할 때 사용.
  state = {
    customers: ""
  }

  //api 서버에 접근해서 데이터를 받아올 때 사용
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    //props는 변경될 수 없는 데이터를 명시할때 사용.
    const { classes } = this.props;
  return (
    <Paper className={classes.root}> 
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        { this.state.customers ? this.state.customers.map(c => {
          return ( 
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />);
        }) : ""
        }
        </TableBody>
      </Table>
    
    </Paper>
  );
  }
}

export default withStyles(styles)(App);
