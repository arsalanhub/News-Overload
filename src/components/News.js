import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    // This function will get executed after render()
    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=fb6f90e95cca448fbb29f560dcd78ec6&page=${this.state.page}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults})
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=fb6f90e95cca448fbb29f560dcd78ec6&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})

        this.setState({
            page: this.state.page - 1,  
            articles: parsedData.articles
        })
    }
    handleNextClick = async () => {
        if (this.state.page+1 > Math.ceil(this.state.totalResults/20)) {
            
        } else {
            let url = `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=fb6f90e95cca448fbb29f560dcd78ec6&page=${this.state.page+1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({articles: parsedData.articles})

            this.setState({
                page: this.state.page + 1,  
                articles: parsedData.articles
            })
        }
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
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
