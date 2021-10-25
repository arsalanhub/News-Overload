import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>News Overload Top headlines</h2>
                <div className="row">
                    <div className="col-md-3">
                       <NewsItem title="latest cricket news" description="This news contains latest newas about cricket worls"/>
                    </div>
                    <div className="col-md-3">
                       <NewsItem title="Gadget" description="Samsung launches its latest smartphone which is set to compete with iphone" />
                    </div>
                    <div className="col-md-3">
                       <NewsItem title="Gadget" description="Samsung launches its latest smartphone which is set to compete with iphone" />
                    </div>
                    <div className="col-md-3">
                       <NewsItem title="Gadget" description="Samsung launches its latest smartphone which is set to compete with iphone" />
                    </div>
                    <div className="col-md-3">
                       <NewsItem title="Gadget" description="Samsung launches its latest smartphone which is set to compete with iphone" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
