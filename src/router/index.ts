import React from 'react'
import {ManagerLayout,FrontLayout} from '../pages'

export type RouterType = {
    key: string,
    path:string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    notExect?: boolean,
    children?: RouterType[]
} 

const ManagerLayoutRouter:RouterType = {
    path:'/manager',
    key:'manager',
    component:ManagerLayout,
    root:[]
}

const FrontLayoutRouter:RouterType = {
    path:'/',
    key:'base',
    component:FrontLayout,
    root:[]
}



const Routers:RouterType[] = ([
    ManagerLayoutRouter,
    FrontLayoutRouter
])

export {
    Routers
}