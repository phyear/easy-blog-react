import {lazy} from 'react'

const ManagerLayout = lazy( () => import("./managelayout"))

const UserSetting = lazy( () => import("./usersetting"))

const Home = lazy( () => import("./home"))

const ArticlePage = lazy( () => import("./article/articleoprate"))

const ArticleList = lazy( () => import("./article/articlelist"))

const SiteManagerPage = lazy( () => import("./sitemanager"))

export {
    ManagerLayout,UserSetting,Home,ArticlePage,ArticleList,SiteManagerPage
}