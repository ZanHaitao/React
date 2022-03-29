import Home from './Home'
import News from './News'
import NewsDetail from './NewsDetail'
import NewsList from './NewsList'
import NewsHome from './NewsHome'
// eslint-disable-next-line import/no-anonymous-default-export
export default [{
  path: "/",
  name: "home",
  exact: true,
  component: Home
}, {
  path: "/news",
  name: "news",
  component: News,
  children: [{
    path: "/",
    name: "newsHome",
    exact: true,
    component: NewsHome
  }, {
    path: "/detail",
    name: "newsDetail",
    exact: true,
    component: NewsDetail
  }, {
    path: "/list",
    name: "newsList",
    exact: true,
    component: NewsList
  }]
}]