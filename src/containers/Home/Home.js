import React, { Component } from 'react';
// import { Link } from 'react-router';
import { CounterButton } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  constructor(){
    super();
    this.state={
      value :0
    }
    //ref测试
    this.focus = this.focus.bind(this);
  }
  //ref测试
  focus() {
   // 直接使用原生 API 使 text 输入框获得焦点
   this.textInput.focus();
   console.log(this.textInput,'textInputtextInputtextInputtextInputtextInputtextInput');
   console.log(this,'thisthisthisthisthisthisthisthisthisthisthisthisthisthis');
 }
  //setState测试
  componentWillMount(){
    // this.setState({
    //   value :this.state.value+1
    // });
    // console.log(this.state.value,'111111111');
    // this.setState({
    //   value :this.state.value+1
    // });
    // console.log(this.state.value,'222222222222');
    // setTimeout(()=>{
    //   this.setState({
    //     value:this.state.value+1
    //   });
    //   console.log(this.state.value,'time111111111111');
    //   this.setState({
    //     value:this.state.value+1
    //   });
    //   console.log(this.state.value,'time222222222222');
    // },0)
    // setTimeout(()=>{
    //   console.log('tsadfhksadf',this.state.value);
    //   this.setState({
    //     value:this.state.value++
    //   })
    //   console.log('ttttttt',this.state.value);
    // },0);
    // this.setState({value:this.state.value++});
    // console.log('1111111111',this.state.value);
    // this.setState({value:this.state.value++});
    // console.log('222222222222222',this.state.value);
  }
  //setState测试02
  componentDidMount(){
    // this.setState({
    //   value :this.state.value+1
    // });
    // console.log(this.state.value,'did111111111');
    // this.setState({
    //   value :this.state.value+1
    // });
    // console.log(this.state.value,'idd222222222222');
    // setTimeout(()=>{
    //   this.setState({
    //     value:this.state.value+1
    //   });
    //   console.log(this.state.value,'dddddddtime111111111111');
    //   this.setState({
    //     value:this.state.value+1
    //   });
    //   console.log(this.state.value,'ddddddddddddtime222222222222');
    // },0)
    setTimeout(()=>{
      console.log('tsadfhksadf',this.state.value);
      this.setState({
        value:this.state.value++
      },()=>{
        console.log('我来了');
      })
      console.log('ttttttt',this.state.value);
    },0);
    this.setState({value:this.state.value+1});
    console.log('1111111111',this.state.value);
    this.setState({value:this.state.value+1});
    console.log('222222222222222',this.state.value);
  }

  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className="container">
          <div className={styles.counterContainer}>
            <CounterButton multireducerKey="counter1"/>
            <CounterButton multireducerKey="counter2"/>
            <CounterButton multireducerKey="counter3"/>
          </div>
          {/*ref测试*/}
          <div>
            <textarea name="DIVCSS5" cols="30" rows="4" ref={(textarea)=>{this.SADFSADFS = textarea}}>
            网页制作教程www.DIVCSS5.com
            </textarea>
            <input  type="text"   ref={(input) => { this.textInput = input; }} />
             <input    type="button"  value="Focus the text input"  onClick={this.focus}
             />
          </div>
        </div>
      </div>
    );
  }
}
