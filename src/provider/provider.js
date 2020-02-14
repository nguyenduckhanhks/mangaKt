import firestore from './../firebase/fbConfig';

export const gotoColection = (collection,folder = firestore) => {
    return folder.collection(collection);
}

export const gotoDocument = (document, folder = firestore) => {
    return folder.doc(document);
}

let s4 = () => {
    return Math.floor((1+ Math.random())*0x10000).toString(16).substring(1);
}

export const randomId = ()=>{
    return s4() + s4()  + s4()  + s4()  + s4()  +
    s4() + s4() + s4();
}