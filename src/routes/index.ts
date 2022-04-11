import { Between23and4, StartPage } from 'components'
import { FC } from 'react'
interface IRoute {
  path: string
  component: FC
}

const routes: IRoute[] = [
  { path: '/', component: StartPage },
  { path: 'middle-3', component: Between23and4 },
]


export default routes
