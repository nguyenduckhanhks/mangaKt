import React from 'react';
import HomePage from './pages/homePage/homePage';
import TypePage from './pages/catalogyPages/catalogysPage';
import IntroduceMangaPage from './pages/introduceMangaPage/introduceMangaPage';
import ReadPage from './pages/readPage/readPage';
import SignInPage from './pages/account/signInPage/signInPage';
import SignUpPage from './pages/account/signUpPage/signUpPage';
import ResetPassWord from './pages/account/resetPassWord/resetPassWord';
import AddMangaPage from './pages/addMangaPage/addMangaPage';
import AddChapterPage from './pages/addChapperPage/addChapperPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/the-loai/:catalogy',
        exact: true,
        main: ({ match }) => <TypePage match={match} />
    },
    {
        path: '/truyen/:nameManga/:id',
        exact: true,
        main: ({ match }) => <IntroduceMangaPage match={match} />
    },
    {
        path: '/:mangaName/:idChap',
        exact: true,
        main: ({ match }) => <ReadPage match={match} />
    },
    {
        path: '/login',
        exact: true,
        main: () => <SignInPage />
    },
    {
        path: '/sign-up',
        exact: true,
        main: () => <SignUpPage />
    },
    {
        path: '/reset-pass-word',
        exact: true,
        main: () => <ResetPassWord />
    },
    {
        path: '/add-manga',
        exact: true,
        main: () => <AddMangaPage/>
    },
    {
        path: '/admin/add-chaper/:id',
        exact: true,
        main: ({match}) => <AddChapterPage match={match}/>
    }
]

export default routes;