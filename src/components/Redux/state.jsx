import {rerenderEntireTree} from '../../render'

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 15 },
    ],
  },
  dialogsData: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" },
  ],

  messagesData: [
    { id: 1, message: "hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "I'm Yusuf" },
    { id: 4, message: "How are you" },
    { id: 5, message: "Im ok" },
    { id: 6, message: "Goodbuy" },
  ],
};

export let addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree()
};

export default state;
