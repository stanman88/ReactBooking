import React from "react";
import logo from "./FriendsLogo.jpg"
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newGuest: "",
      GuestList: []
    };
  }

  addGuest(GuestName) {
    if (GuestName !== "") {
      const newGuest = {
        id: Date.now(),
        value: GuestName,
        isDone: false
      };
      const GuestList = [...this.state.GuestList];  //get the Guestlist from state
      GuestList.push(newGuest); //add new back to the list

      this.setState({   //update the state
        GuestList,
        newGuest: ""
      });
    }
  }

  deleteItem(id) {
    const GuestList = [...this.state.GuestList];
    //const updatedGuestList = GuestList.filter(item => item.id !== id);
    const updatedGuestList = GuestList.filter(function(item){return item.id !== id});
    this.setState({ GuestList: updatedGuestList });
  }

  updateInput(input) {
    this.setState({ newGuest: input });
  }

  render() {
    return (
      <div>
        <img src={logo} width="200"  alt="brand logo" className="logo" />
        <h1 className="app-title">Friends Kyo Guest List</h1>
        <div className="container">
          Add New Guest
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Input New Guest Name"
            required
            value={this.state.newGuest}
            onChange={e => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addGuest(this.state.newGuest)}
            disabled={!this.state.newGuest.length}
          >
            Add Guest
          </button>
          <div className="list">
            <ul>
              {this.state.GuestList.map( (item) => {
                 return (
                  <li key={item.id}>
          
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                )
                }
              )}
              <li>
                Joylyn Ng
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
