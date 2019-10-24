import React from 'react';
import './remote-loc-list.css';
import { Edit, Done, Delete, Add } from '@material-ui/icons';

let testObject = [
  {
    'name': 'Bend Cafe',
    'location' : '123 Fake St.',
    'notes' : 'good coffee'
  },
  {
    'name': 'Bend Library',
    'location' : '234 Bendy Rd.',
    'notes' : 'nice, quiet.'
  },
]

function Modal(props){
  let modalBackgroundStyle = {
    display: props.modalShow ? 'block' : 'none',
  }

  return(
    <div className="modal-background" style={modalBackgroundStyle}>
      <div className="inner-modal-content">
        {
          props.modalShow === 'addData' ? 
          <>
            <p>Submit this location?</p>
            <button className="btn btn-success" onClick={props.addData}>Yes</button><button className="btn btn-danger" onClick={props.toggleModal}>No</button> 
          </>
          :
          <>
            <p>Delete this location?</p>
            <button className="btn btn-danger" onClick={() => props.deleteRow(props.modalShow)}>Yes</button><button className="btn btn-success" onClick={props.toggleModal}>No</button>
          </>
        }
      </div>
    </div>
  )
}

function Location(props){
  let cellStyle = {
    background: 'white'
  }

  if(props.index % 2 === 0){
    cellStyle.background = '#f7f7f7';
  }

  let editName = React.createRef();
  let editLocation = React.createRef();
  let editNotes = React.createRef();

  if(props.gridLayout.length > 4){
    return(
      <>
        {
          props.userStatus === 'admin' ?
          <div className="cell-style"><div className="icon-style" onClick={props.toggleModal} id={props.index}><Delete>Delete</Delete></div></div> :
          ''
        }
        {
          props.index == props.editRowIndex ? 
          <>
            <input className="cell-style update-input-style" style={cellStyle} id={'name-' + props.index} defaultValue={props.locData.name} ref={editName} maxLength="30"/>
            <input className="cell-style update-input-style" style={cellStyle} id={'location-' + props.index} defaultValue={props.locData.location} ref={editLocation} maxLength="30"/>
            <input className="cell-style update-input-style" style={cellStyle} id={'notes-' + props.index} defaultValue={props.locData.notes} ref={editNotes} maxLength="100"/>
            <div className="cell-style" style={cellStyle}><div className="icon-style" id={'edit-' + props.index} onClick={() => props.updateRow(props.index, editName.current.value, editLocation.current.value, editNotes.current.value)}><Done>Done</Done></div></div>
          </>
          :
          <>
            <div className="cell-style" style={cellStyle} id={'name-' + props.index}>{props.locData.name}</div>
            <div className="cell-style" style={cellStyle} id={'location-' + props.index}>{props.locData.location}</div>
            <div className="cell-style" style={cellStyle} id={'notes-' + props.index}>{props.locData.notes}</div>
            <div className="cell-style" style={cellStyle}>
              <div className="icon-style" id={'edit-' + props.index} onClick={props.editData}><Edit>Edit</Edit></div>
            </div>
          </>
        }
      </>
    )
  }
  else{
    return(
      <div>
        {
          props.index == props.editRowIndex ? 
          <>
            <div><input className="cell-style update-input-style" style={cellStyle} id={'name-' + props.index} defaultValue={props.locData.name} ref={editName} maxLength="30"/></div>
            <div><input className="cell-style update-input-style" style={cellStyle} id={'location-' + props.index} defaultValue={props.locData.location} ref={editLocation} maxLength="30"/></div>
            <div><input className="cell-style update-input-style" style={cellStyle} id={'notes-' + props.index} defaultValue={props.locData.notes} ref={editNotes} maxLength="100"/></div>
            <div className="cell-style" style={cellStyle} id={'edit-' + props.index} onClick={() => props.updateRow(props.index, editName.current.value, editLocation.current.value, editNotes.current.value)}><Done>Done</Done></div>
          </>
          :
          <>
            <div className="cell-style" style={cellStyle} id={'name-' + props.index}>{props.locData.name}</div>
            <div className="cell-style" style={cellStyle} id={'location-' + props.index}>{props.locData.location}</div>
            <div className="cell-style" style={cellStyle} id={'notes-' + props.index}>{props.locData.notes}</div>
            <div className="cell-style" style={cellStyle}>
              <span id={'edit-' + props.index} onClick={props.editData}><Edit>Edit</Edit></span>
              {
              props.userStatus === 'admin' ?
              <span className="pl-3" onClick={props.toggleModal} id={props.index}><Delete>Delete</Delete></span> :
              ''
              }
            </div>
          </>
        }
      </div>
    )
  }
}

class RemoteLocList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      remoteLocData: testObject,
      userStatus: 'admin',
      gridLayout: '15% 15% 40% 4%',
      modalShow: false,
      error: false,
      edit: -1
    }

    this.addData = this.addData.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.editToggle = this.editToggle.bind(this);
    this.updateRow = this.updateRow.bind(this);
  }

  componentDidMount(){
    window.addEventListener('resize', this.responsiveGrid.bind(this));
      this.responsiveGrid();
  }

  responsiveGrid() {
    let gridLayout = '';

    if(this.state.userStatus === 'admin' && window.innerWidth > 930){
      gridLayout = '4% 15% 15% 40% 4%';
    }
    else if(this.state.userStatus === 'user' && window.innerWidth > 930){
      gridLayout = '15% 15% 40% 4%';
    }
    else{
      gridLayout = '90%'
    }
    
    this.setState({
      gridLayout: gridLayout
    });
  }
  
  addData(){
    let currentObj = this.state.remoteLocData;
    currentObj.push({
      'name': this.nameValue.value,
      'location': this.locValue.value,
      'notes': this.notesValue.value,
    })

    this.setState({
      remoteLocData: currentObj,
      modalShow: false
    });

    this.nameValue.value = '';
    this.locValue.value = '';
    this.notesValue.value = '';
  }

  updateRow(index,name,loc,notes){
    if(name && loc && notes){
      let currentObj = this.state.remoteLocData;
      currentObj.splice(index, 1, {'name': name, 'location': loc, 'notes': notes});

      this.setState({
        remoteLocData: currentObj,
        edit: -1,
        error: false
      });
    }
    else{
      this.setState({error: 'Please fill out all fields.'});  
    }
  }

  deleteRow(e){
    let currentObj = this.state.remoteLocData;   
    currentObj.splice(e, 1);

    this.setState({
      remoteLocData: currentObj,
      modalShow: false
    });
  }

  toggleModal(e){
    if(e.currentTarget.id === 'addData' && (!this.nameValue.value || !this.locValue.value || !this.notesValue.value)){
      this.setState({error: 'Please fill out all fields.'});
    }
    else{
      this.setState({
        modalShow: e.currentTarget.id,
        error: false
      });
    }
  }

  editToggle(e){
    const rowIndex = e.currentTarget.id.split('-')[1];
    this.setState({edit: rowIndex});
  }

  render(){
    
    const gridStyle = {
      gridTemplateColumns: this.state.gridLayout,
    };

    const buttonStyle = {
      height: this.state.gridLayout.length > 4 ? '100%' : '60px',
    }

    return(
      <>
        <h2 className="text-center mt-5">Bend Remote-Friendly Location List</h2>
        {
          this.state.error ?
          <div className="error-style">{this.state.error}</div> :
          <div className="error-style"></div>
        }
        <div className="grid-style" style={gridStyle}>
          {
          this.state.userStatus === 'admin' ? 
          <div></div> :
          ''
          }
          <input className="add-input-style" ref={el => this.nameValue=el} placeholder="Name" maxLength="30" />
          <input className="add-input-style" ref={el => this.locValue=el} placeholder="Location" maxLength="30"/>
          <input className="add-input-style" ref={el => this.notesValue=el} placeholder="Notes" maxLength="100"/>
          <div><button className="add-button-style" style={buttonStyle} onClick={this.toggleModal} id="addData"><Add>Add</Add></button></div>
          {
            this.state.remoteLocData.map((d, index) =>
              <Location key={'location-' + index} userStatus={this.state.userStatus} locData={d} index={index} gridLayout={this.state.gridLayout} toggleModal={this.toggleModal} editData={this.editToggle} editRowIndex={this.state.edit} updateRow={this.updateRow} />
            )
          }
          <Modal addData={this.addData} toggleModal={this.toggleModal} modalShow={this.state.modalShow} deleteRow={this.deleteRow} />
        </div>
      </>
    )
  }
}

export default RemoteLocList;