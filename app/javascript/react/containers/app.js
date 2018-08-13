import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ArticleTile from '../components/ArticleTile';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      limit: 10,
      offset: 0,
      totalPages: null,
      scrolling: false,
    }
  }

  componentWillMount() {
    this.loadContacts()
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  handleScroll = (e) => {
    const { scrolling, totalPages, offset } = this.state
    if (scrolling) return
    if (totalPages <= offset) return
    const lastLi = document.querySelector('ol.articles > li:last-child')
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore()
  }

  loadContacts =() => {
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
          totalPages: this.state.totalPages + 10,
        })
      })
  }


  loadMore = () => {
    this.setState(prevState => ({
      offset: prevState.offset + 10,
      scrolling: true,
    }), this.loadContacts)
    // console.log(this.state.limit)
    // console.log(this.state.offset)
  }

  render() {
    return <div>
    <ol className="articles">
    {
      this.state.articles.map(article => <li key={article.id}>
      <ArticleTile {...article} />
    </li>)
    }
    </ol>

    </div>
  }
}


export default App;
