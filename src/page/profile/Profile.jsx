import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

import './profile.css'

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="/assets/post/1.jpeg" alt="" className="profileCoverImg" />
                    <img src="/assets/person/1.jpeg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Hot Girl Two</h4>
                    <span className="profileInfoDesc">This is my girl.</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar />
            </div>
        </div>
      </div>
    </>
  )
}
  
export default Profile