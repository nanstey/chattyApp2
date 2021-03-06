import React, {Component} from 'react';
import User from './User.jsx'
import $ from 'jquery';

class UsersOnline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: 'closed'
    };
  }

  componentDidMount(){
    let $UsersOnline = $('.usersOnline');
    let $UserList = $('.userList')
    $UsersOnline.on('click', () => {
      if (this.state.position === 'open'){
        $UsersOnline.animate({top: "6px", paddingBottom: "0px"}, 300);
        $UsersOnline.attr('title', 'Show users');
        $UserList.slideUp(400);
        this.setState({position: 'closed'});
      } else {
        $UsersOnline.animate({top: "85px", paddingBottom: "12px"}, 300);
        $UsersOnline.attr('title', 'Hide users');
        $UserList.slideDown(400);
        this.setState({position: 'open'});
      }
      console.log(this.state.position);
    });
  }

  render() {
    console.log('UsersOnline.jsx');
    return (
      <aside className="usersOnline" title="Show users">
        <span className="numUsersOnline">{this.props.userList.length} user(s) online</span>
        <br/><br/>
        <div className="userList">
          {this.props.userList.map( (user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </aside>
    );
  }
}
export default UsersOnline;