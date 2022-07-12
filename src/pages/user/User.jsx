import "./user.css"
import {CalendarToday,Publish,LocationSearching, MailOutline, PermIdentity, PhoneAndroid} from "@mui/icons-material"
import { Link } from "react-router-dom"

function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img src="https://resizing.flixster.com/51XYFRjzuzmLMIJtTLs2cZFCZTo=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/841/375/thumb_C421778E-C55D-456F-8848-CDC7DB1B6955.jpg"
                alt=""
                className="userShowImg"/>
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Varun Nayak</span>
                  <span className="userShowUserTitle">Software Engineer</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                  <PermIdentity className="userShowIcon"/>
                  <span className="userShowInfoTitle">varun512</span>
                  </div>
                  <div className="userShowInfo">
                  <CalendarToday className="userShowIcon"/>
                  <span className="userShowInfoTitle">10/12/2022</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon"/>
                  <span className="userShowInfoTitle">+91-7030283262</span>
                  </div>
                  <div className="userShowInfo">
                  <MailOutline className="userShowIcon"/>
                  <span className="userShowInfoTitle">varunnayak46@gmail.com</span>
                  </div>

                  <div className="userShowInfo">
                  <LocationSearching className="userShowIcon"/>
                  <span className="userShowInfoTitle">Maharashtra</span>
                  </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input 
                    type="text" 
                    placeholder="varun512" 
                    className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input 
                    type="text" 
                    placeholder="Varun Nayak" 
                    className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input 
                    type="text" 
                    placeholder="varunnayak46@gmail.com" 
                    className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input 
                    type="text" 
                    placeholder="+91 7030283262" 
                    className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input 
                    type="text" 
                    placeholder="Maharashtra" 
                    className="userUpdateInput"/>
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img className="userUpdateImg" src="https://resizing.flixster.com/51XYFRjzuzmLMIJtTLs2cZFCZTo=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/841/375/thumb_C421778E-C55D-456F-8848-CDC7DB1B6955.jpg"
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon"/>
                    </label>
                    <input type="file" id="file" style={{display:"none"}}/>
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default User