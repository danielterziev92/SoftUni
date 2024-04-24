export const addMessageAction = (message, status) => ({
    type: 'messages/addMessage',
    payload: {message, status},
});