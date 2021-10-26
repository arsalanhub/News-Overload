import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    // This function will get executed after render()
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fb6f90e95cca448fbb29f560dcd78ec6";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }
    render() {
        return (
            <div className="container my-3">
                <h1>News Overload Top headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key = {element.url}>
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
