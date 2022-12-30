import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = () => {

    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <div className='birthdayContainer'>
                    <img src='/assets/f.gif' alt='' className='birthdayImg' />
                    <span className='birthdayText'>
                        {''}
                        Polo Foster and 3 other friends have a birthday today
                    </span>
                </div>
            </div>
            <img src='/assets/ad.png' alt='' className='rightbarAd' />
            <h4 className='rightbarTitle'>Online Friends</h4>
            <ul className='rightbarFriendList'>
                {Users.map((u) => (
                    <Online key={u.id} user={u} />
                ))}
            </ul>
        </div>
    )
}

export default Rightbar
