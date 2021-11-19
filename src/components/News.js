import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general',
    }
    static propTypes = {    
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=fb6f90e95cca448fbb29f560dcd78ec6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, 
                       totalArticles: parsedData.totalResults, 
                       loading: false})
    }
    // This function will get executed after render()
    async componentDidMount() {
        this.updateNews()
    }

    handlePrevClick = async () => {
        this.setState({page: this.state.page-1})
        this.updateNews();
    }
    handleNextClick = async () => {
        this.setState({page: this.state.page+1})
        this.updateNews();
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin: "35px", marginTop: "70px"}}>News Overload Top headlines</h1> 
                {/* If loading is true then we execute below code */}
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key = {element.url}>
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage}
                                newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
