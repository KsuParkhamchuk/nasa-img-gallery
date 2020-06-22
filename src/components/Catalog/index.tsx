import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { IRootState } from "../../reducers";
import * as actions from "../../actions";
import { getMonthImgs } from "../../selectors";
import {CatalogModel} from './models'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

class Catalog extends React.Component<CatalogModel.Props, CatalogModel.State> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      modalImgInfo: {}
    };
  }

  componentWillMount() {
    let today = new Date();
    let counter = today.getDate();
    while (counter !== -1) {
      this.props.getImgs(
        today.getFullYear() + "-0" + (today.getMonth() + 1) + "-" + counter
      );
      counter--;
    }
  }

  openModal = (e:any) =>{
    let itemIndex = e.target.dataset.id;
    this.setState ({
        open: true,
        modalImgInfo: this.props.monthImages[itemIndex]
    })
  }

  handleClose = () =>{
    this.setState ({
        open: false
    })
  }

  render() {
    return (
      <div className="catalog">
        <div className="catalog__header">
          <div className="catalog__header--text">Nasa Image Gallery</div>
        </div>
        <div className="catalog__gallery">
          {this.props.monthImages.map((img: any, ind: any) => (
            <div className="catalog__gallery--item">
              {img.mediaType === "image" 
              ? 
                <div
                  className="content"
                  onClick={(e) => this.openModal(e)} style={{backgroundImage: `url(${img.url})`,}} data-id={ind}>    
                </div>
               : 
                <div className="content" data-id={ind}>
                  <iframe  width="100%" height="100%" src={img.url}></iframe>
                </div>
              }
              <div className="itemOppositeSide">
                <span>{img.title}</span>
              </div>
              <button className="learnMoreBtn" data-id={ind} onClick={(e) => this.openModal(e)}>Read explanation</button>
            </div>
          ))}
          <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
            <DialogTitle id="customized-dialog-title">
              {this.state.modalImgInfo.title}
            </DialogTitle>
            <DialogContent dividers>
            <Typography gutterBottom>
             <span className="bold">Date: </span>{this.state.modalImgInfo.date}
              </Typography>
              <Typography gutterBottom className="modalExplanation">
             <span className="bold">Explanation: </span>{this.state.modalImgInfo.explanation}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={this.handleClose} className="closeModalBtn">
               Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  monthImages: getMonthImgs(state),
});

const mapDispatchToProps = {
  getImgs: actions.getImgs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
