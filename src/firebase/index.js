import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDSzfAbU4j78QAjmOmh5o0W74a6JyNmtb8",
    authDomain: "dort-blog.firebaseapp.com",
    databaseURL: "https://dort-blog.firebaseio.com",
    projectId: "dort-blog",
    storageBucket: "dort-blog.appspot.com",
    messagingSenderId: "603719777156",
    appId: "1:603719777156:web:05ca7f40818d4f067a3bd1",
    measurementId: "G-T8LE6LCZ9Q"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {
    storage, firebase as default
}