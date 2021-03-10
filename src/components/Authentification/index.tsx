import React from "react";
import space from "../../img/space.jpg";
import "./style.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { UserModel } from "./models";
import { connect } from "react-redux";
import {loginUser} from '../../actions';
import history from '../../history';

class Authentification extends React.Component<
  UserModel.Props,
  UserModel.State
> {
  constructor(props: any) {
    super(props);
    this.state = {
      User: {
        login: "",
        password: "",
      },
      errors: [],
    };
  }

  fieldChange = (e: any, fieldName: string) => {
    this.setState({
      User: {
        ...this.state.User,
        [fieldName]: e.target.value,
      },
    });
  };

  checkEmptyFields = () => {
    if (this.state.User.login !== "" && this.state.User.password !== "")
      return true;
  };

  userLogin = () => {
    this.setState({ errors: [] });
    const { User, errors } = this.state;
      if(this.checkEmptyFields()){
        this.props.loginUser(this.state.User);
        history.push('/home');
      }
      else {
          this.setState({
              errors: [...errors, "Fill all fields!"]
          })
      }
  }

  render() {
    return (
      <div className="authentification">
        <div className="auth__content row justify-content-center align-items-center m-auto">
          <div className="col-6 auth__content--img">
            <img src={space} alt="" />
          </div>
          <div className="col-6">
            <div className="auth__content--form p-4">
              <h2 className="text-center mb-5">Welcome to NASA Gallery</h2>
              <form
                className="d-flex flex-column"
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-basic"
                  label="Login"
                  variant="filled"
                  className="mb-5"
                  value={this.state.User.login}
                  onChange={(e) => this.fieldChange(e, "login")}
                />

                <TextField
                  id="filled-basic"
                  label="Password"
                  variant="filled"
                  className="mb-5"
                  value={this.state.User.password}
                  onChange={(e) => this.fieldChange(e, "password")}
                />
                <div className="text-danger">
                  {this.state.errors.map((item: any, i: any) => (
                    <div className="row">
                      <p>{item}</p>
                    </div>
                  ))}
                </div>

                <Button variant="contained" size="medium" color="primary" onClick={this.userLogin}>
                  Enter
                </Button>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch:any) => ({
    loginUser: (User:any) => dispatch(loginUser(User))
  })
export default connect(null, mapDispatchToProps)(Authentification);
