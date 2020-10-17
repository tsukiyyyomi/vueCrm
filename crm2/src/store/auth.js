import firebase from 'firebase/app';
//import { register } from 'register-service-worker';

export default {
    actions: {
        async login({
            dispatch,
            commit
        }, {
            email,
            password
        }) {
            try {

                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (e) {
                console.log(dispatch, commit);
                throw e;

            }
        },

        async logout({
            dispatch,
            commit
        }) {
            await firebase.auth().signOut();
            console.log(dispatch, commit);
        },
        async register({
            dispatch,
            commit
        }, {
            email,
            password,
            name
        }) {
            try {

                await firebase.auth().createUserWithEmailAndPassword(email, password);
                const uid = await dispatch('getUid');
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name: name,

                })
            } catch (e) {
                console.log(commit);
                throw e;

            }
        },
        getUid() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        }
    }
}