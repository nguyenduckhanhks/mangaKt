import * as provider from './../provider/provider';
import firebase from 'firebase/app';

export const fetchCatalogysReques = () => {
    return dispatch => {
        var catalogyFolderUrl = provider.gotoColection("typeMangas")
        catalogyFolderUrl.onSnapshot(QuerySnapshot => {
            var types = [];
            var size = QuerySnapshot.docs.length;
            QuerySnapshot.docs.forEach(catalogy => {
                let list = catalogy.data().mangas;
                let mangas = [];
                list.forEach(manga => {
                    provider.gotoColection("mangas").doc(manga).onSnapshot(QuerySnapshot => {
                        mangas.push({
                            ...QuerySnapshot.data(),
                            id: QuerySnapshot.id
                        });
                        if (list.length === mangas.length) {
                            types.push({
                                ...catalogy.data(),
                                id: catalogy.id,
                                mangas
                            })
                            if (size === types.length) {
                                dispatch(fetchCatalogys(types));
                            }
                        }
                    })
                })
            });
        })
    }
}

const fetchCatalogys = (docs) => {
    return {
        type: "FETCH_CATALOGYS",
        catalogys: docs
    }
}

export const fetchCatalogyEditingReques = (path) => {
    return dispatch => {
        provider.gotoColection("typeMangas").where("path", "==", path).onSnapshot(QuerySnapshot => {
            let catalogy = QuerySnapshot.docs[0].data()
            let list = catalogy.mangas;
            let mangas = [];
            list.forEach(manga => {
                provider.gotoColection("mangas").doc(manga).onSnapshot(QuerySnapshot => {
                    mangas.push({
                        ...QuerySnapshot.data(),
                        id: QuerySnapshot.id
                    });
                    if (list.length === mangas.length) {
                        dispatch(fetchCatalogyEditing({
                            ...catalogy,
                            mangas
                        }))
                    }
                })
            })
        })
    }
}

const fetchCatalogyEditing = (catalogy) => {
    return {
        type: "FETCH_CATALOGY_EDITING",
        catalogyEditing: catalogy
    }
}

export const fetchMangaEditingReques = (id) => {
    return dispatch => {
        provider.gotoColection("mangas").doc(id).onSnapshot(QuerySnapshot => {
            dispatch(fetchMangaEditing(QuerySnapshot.data()))
        })
    }
}
const fetchMangaEditing = (manga) => {
    return {
        type: "FETCH_MANGA_EDITING",
        manga: manga
    }
}

export const fetchChaperEditingReques = (id) => {
    return dispatch => {
        provider.gotoColection("chapers").doc(id).onSnapshot(QuerySnapshot => {
            dispatch(fetchChaperEditing(QuerySnapshot.data()))
        })
    }
}

const fetchChaperEditing = (chaper) => {
    return {
        type: "FETCH_CHAPER_EDITING",
        chaper: chaper
    }
}

export const signInReques = (account) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(
            account.userName,
            account.passWord
        ).then((res) => {
            provider.gotoColection("users").doc(res.user.uid).onSnapshot(QuerySnapshot => {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    account: {
                        ...QuerySnapshot.data(),
                        uid: res.user.uid
                    }
                });
            });
            provider.gotoColection("historys").doc(res.user.uid).onSnapshot(QuerySnapshot => {
                let mangas = [];
                let length = QuerySnapshot.data().mangas.length;
                QuerySnapshot.data().mangas.forEach(manga => {
                    provider.gotoColection("mangas").doc(manga).onSnapshot(QuerySnapshot => {
                        mangas.push({
                            ...QuerySnapshot.data(),
                            id: QuerySnapshot.id
                        })
                        if (length === mangas.length) {
                            dispatch(fetchHistoryEditing(mangas))
                        }
                    });
                })
            })
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signUpReques = (account) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(
            account.userName,
            account.passWord
        ).then((res) => {
            provider.gotoColection("users").doc(res.user.uid).set({
                name: account.name
            });
            dispatch({ type: 'SIGN_UP_SUCCESS', account })
        }).catch(err => {
            dispatch({ type: 'SIGN_UP_ERROR', err })
        })
    }
}

export const signOutReques = () => {
    return dispatch => {
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGN_OUT_SUCCESS' })
        })
    }
}

const fetchHistoryEditing = (history) => {
    return {
        type: "FETCH_HISTORY_EDITING",
        history
    }
}

export const addMangaReques = (manga) => {
    return dispatch => {
        provider.gotoColection("mangas").doc(manga.id).set({
            id:manga.id,
            author:manga.author,
            avt:manga.avt,
            introduce:manga.introduce,
            listChaper:manga.listChaper,
            name:manga.name,
            path:manga.name,
            status:manga.status,
            typeMangas:manga.typeMangas,
            typeMangasId:manga.typeMangasId,
            view:manga.view
        }).then(()=>{
            manga.typeMangasId.forEach(catalogy=>{
                provider.gotoColection("typeMangas").doc(catalogy).get().then((res)=>{
                    let newMangas = res.data().mangas;
                    newMangas.push(manga.id);
                    provider.gotoColection("typeMangas").doc(catalogy).update({
                        mangas: newMangas
                    })
                })
            })
        })
    }
}

export const addChapterReques = (chapter) => {
    return dispatch => {
        provider.gotoColection("chapers").doc(chapter.id).set({
            imgs: chapter.imgs
        }).then(()=>{
            provider.gotoColection("mangas").doc(chapter.id.match(/^\w*/)[0]).get().then(res=>{
                let listChaper = res.data().listChaper;
                listChaper.push(chapter.id);
                provider.gotoColection("mangas").doc(chapter.id.match(/^\w*/)[0]).update({
                    listChaper:listChaper
                })
            })
        })
    }
}