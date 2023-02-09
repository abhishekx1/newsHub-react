import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2cddac1db72c48b09a0a3488862d729e";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
  }

  render() {
    return (
      <div className='container my3'>
        <h2>NewsHub - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>

      </div>
    )
  }
}
