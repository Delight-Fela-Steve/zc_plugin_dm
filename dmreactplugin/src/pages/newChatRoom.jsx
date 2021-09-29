
import React from 'react';
import DmProfileHeader from '../components/dmProfileHeader';
import BookmarkHeader from '../components/common/addBookmarkKebab/dmBookMark';
import DmChatContainerBox from '../components/ChatContainer/dmChatContainerBox';
import InputBoxField from '../components/dmBoxInputField';

// Chat Home Page
const ChatHome = (props) => {
    return (
        <div className='dm-newchat-room position-relative w-100 d-flex flex-column'>
            <div className='dm-chatroom-header'>
                <DmProfileHeader />
                <BookmarkHeader />
            </div>
            <div className='dm-message-in-out-box w-100 position-relative row align-items-end'>
                <DmChatContainerBox />
            </div>
            <div className='dm-footer-input-field w-100 position-relative'>
                <InputBoxField />
            </div>
        </div>
    );

};
export default ChatHome;
