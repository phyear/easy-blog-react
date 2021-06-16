import {lazy} from 'react'

const ManagerLayout = lazy( () => import("./managelayout"))

const UserSetting = lazy( () => import("./usersetting"))

const Home = lazy( () => import("./home"))

const ArticlePage = lazy( () => import("./article/articleoprate"))

const ArticleList = lazy( () => import("./article/articlelist"))

const SiteManagerPage = lazy( () => import("./sitemanager"))

const FrontLayout = lazy( () => import("./frontlayout"))

const ArticleView = lazy( () => import("./frontlayout/article"))

export {
    ManagerLayout,UserSetting,Home,ArticlePage,ArticleList,SiteManagerPage,FrontLayout,ArticleView
}