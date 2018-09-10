import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ArticleTile from '../components/ArticleTile';


class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      limit: 10,
      offset: 0,
      totalArticles: null,
      scrolling: false,
    }
  }

  componentDidMount() {
    this.loadArticles()
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {
    const { scrolling, totalArticles, offset } = this.state
    if (scrolling) return
    // if (totalArticles <= offset) return
    const lastLi = document.querySelector('ol.articles > li:last-child')
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20;
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore()
  }

  loadArticles =() => {
    const { limit, offset, articles } = this.state
    const url = `https://www.stellarbiotechnologies.com/media/press-releases/json?limit=${limit}&offset=${offset}`
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState({
          articles: [...articles, ...json.news],
          scrolling: false,
          totalArticles: this.state.totalArticles + 10,
        })
      })
  }

  loadMore = () => {
    this.setState(prevState => ({
      offset: prevState.offset + 10,
      scrolling: true,
    }), this.loadArticles)
    console.log(this.state.limit)
    console.log(this.state.offset)
    console.log(this.state.totalArticles)
    console.log(this.state.scrolling)
  }

  render() {
    return <div>
    <ol className="articles">
    {
      this.state.articles.map(article => <li key={article.id}>
      <ArticleTile
        title={ article.title }
        published={ article.published }
       />
    </li>)
    }
    </ol>

    </div>
  }
}


export default ArticleList;
