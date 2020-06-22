import React from "react";
import "./style.css";
import { CurrentImgModel } from "./models";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { IRootState } from "../../reducers";
import { getSelectedImg } from "../../selectors";

class CurrentImg extends React.Component<CurrentImgModel.Props,CurrentImgModel.State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDate: "",
      latestSelectedDate: "",
      currentDate: "",
    };
  }

  componentWillMount() {
    let today = new Date();
    this.setState({
      currentDate:
        today.getFullYear() +
        "-0" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate(),
      latestSelectedDate: localStorage.getItem("latestSelectedDate"),
    });
  }

  componentDidMount() {
    this.props.getSelectedDateImg(this.state.latestSelectedDate);
  }

  changeCurrentImg = (e: any) => {
    this.setState(
      {
        selectedDate: e.target.value,
      },
      this.setNewImg
    );
  };

  setNewImg = () => {
    this.props.getSelectedDateImg(this.state.selectedDate);
  };

  render() {
    return (
      <div className="dateImg">
        <input
          className="calendar"
          id="outlined-basic"
          type="date"
          max={this.state.currentDate}
          onChange={(e) => this.changeCurrentImg(e)}
        />
        {this.props.dateImg.mediaType === "image" 
        ? (
          <div
            className="dateImg__wrapper"
            style={{
              backgroundImage: `url(${this.props.dateImg.url})`,
            }}
          ></div>
          ) : (
          <div className="dateVideo__wrapper">
            <iframe
              width="570"
              height="415"
              src={this.props.dateImg.url}
            ></iframe>
          </div>
        )}
        <div className="dateImg__description">
          <div className="dateImg__description--title">
            {this.props.dateImg.title}
          </div>
          <div className="dateImg__description--text">
            {this.props.dateImg.explanation}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  dateImg: getSelectedImg(state),
});

const mapDispatchToProps = {
  getSelectedDateImg: actions.getSelectedDateImg,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentImg);
