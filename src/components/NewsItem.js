import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageUrl?imageUrl:"https://images.macrumors.com/t/GJLg8XqxYZ1E-aISKWKoQL2EfRM=/2250x/article-new/2021/06/iCloud-General-Feature.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {author? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-sm btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}
