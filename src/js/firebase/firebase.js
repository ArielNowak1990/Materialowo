import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import React from "react";
import {configuration} from "../../pass";

const config = configuration;


class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    //Auth API

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();


    //User API
    users = () => this.db.ref('users');
    user = uid => this.db.ref(`users/${uid}`);
    //Orders API
    orders = () => this.db.ref('orders');
    order = uid => this.db.ref(`orders/${uid}`);

}



export default Firebase;
