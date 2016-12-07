import { connect } from 'react-redux';
import { changeConversation, toMessageForm } from '../actions/conversations';
import { Messenger } from '../components';


const mapStateToProps = state => ({
  conversations: state.messenger.conversations,
  currentPanel: state.messenger.showMessageForm || state.messenger.conversations.length === 0
    ? 'conversation'
    : 'conversationList',
});

const mapDispatchToProps = dispatch => ({
  goToConversationList(e) {
    e.preventDefault();

    // reset current conversation
    dispatch(changeConversation(''));

    // hide message form
    dispatch(toMessageForm(false));
  },
  goToConversation(e) {
    e.preventDefault();

    // show message form
    dispatch(toMessageForm(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
