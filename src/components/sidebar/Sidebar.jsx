import './sidebar.css'

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <span class='material-icons'>rss_feed</span>
                        <span className='sidebarListItemText'>Feed</span>
                    </li>
                    <li className='sidebarListItem'>
                        <span class='material-icons'>chat</span>
                        <span className='sidebarListItemText'>Chats</span>
                    </li>
                    <li className='sidebarListItem'>
                        <span class='material-icons'>play_circle_filled</span>
                        <span className='sidebarListItemText'>Videos</span>
                    </li>
                    <li className='sidebarListItem'>
                        <span class='material-icons'>group</span>
                        <span className='sidebarListItemText'>Groups</span>
                    </li>
                    <li className='sidebarListItem'>
                        <span class='material-icons'>bookmark</span>
                        <span className='sidebarListItemText'>Bookmark</span>
                    </li>
                    <li className='sidebarListItem'>
                        <span class='material-icons'>help_outline</span>
                        <span className='sidebarListItemText'>Quesions</span>
                    </li>
                    <li className='sidebarListItem'>
                        <span class='material-icons'>work_outline</span>
                        <span className='sidebarListItemText'>Jobs</span>
                    </li>
                    <li className='sidebarListItem'>
                        <span class='material-icons'>event</span>
                        <span className='sidebarListItemText'>Events</span>
                    </li>
                    <li className='sidebarListItem'>
                        <span class='material-icons'>school</span>
                        <span className='sidebarListItemText'>Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Showmore</button>
                <hr className='sidebarHr' />
                <ul className='sidebarFriendList'>
                    <li className='sidebarFriend'>
                        <img src='/assets/person/2.jpeg' alt='' className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>hot girl two</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src='/assets/person/3.jpeg' alt='' className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>hot girl three</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src='/assets/person/4.jpeg' alt='' className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>hot girl four</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src='/assets/person/5.jpeg' alt='' className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>hot girl five</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src='/assets/person/6.jpeg' alt='' className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>hot girl six</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src='/assets/person/7.jpeg' alt='' className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>hot girl seven</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src='/assets/person/8.jpeg' alt='' className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>hot girl aight</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src='/assets/person/9.jpeg' alt='' className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>hot girl nine</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src='/assets/person/10.jpeg' alt='' className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>hot girl ten</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src='/assets/person/11.jpeg' alt='' className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>hot girl eleven</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
