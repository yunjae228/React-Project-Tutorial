
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1', 
  'name' : '김길동',
  'birthday' : '970218',
  'gender' : '남자',
  'job' : '학생',
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2', 
  'name' : '홍길동',
  'birthday' : '970328',
  'gender' : '남자',
  'job' : '프로그래머',
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3', 
  'name' : '이길동',
  'birthday' : '950228',
  'gender' : '남자',
  'job' : '디자이너',
}
]

class App extends Component {
  render() {
  return (
    <div> 
      {
        customers.map(c => {
          return ( 
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
          );
        })
      }
    
    </div>
  );
  }
}

export default App;
