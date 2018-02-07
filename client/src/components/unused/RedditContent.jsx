
import Post from './Post.jsx'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


var posts = require('./hot.json').data.children;


const log = console.log.bind(console);
log(posts);


class Media extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { post } = this.props;
        let image = '';
        let video = '';
        let source = '';
        try {
            source = post.preview.images[0].variants.mp4 ? post.preview.images[0].variants.mp4.source.url : '';
            image = post.preview.images[0].source.url;
            video = post.media.reddit_video.fallback_url;
        } catch (e) {
            image = image || '';
            video = video || '';
        }
        // if (video.length == 0) {
        //     const url = post.url;
        //     image = post.url.match(/\.(jpeg|jpg|gif|png)$/) == null ? image : post.url;
        // }

        let media = video.length ? video : image;

        const width = 640;
        const height = 400;
        
        if (source.length) {
            source = source.replace(/amp;/g, '');
        }

        return (
            <div className="post-media">

                {source.length ? (
                    <video src={source} height={height} width={width} loop="loop" controls muted={true} />
                ) : (
                       video.length ? (
                        <video src={video} height={height} width={width} controls muted={true} />
                       ) : (
                        <img height={height} width={width} src={media} />
                       )
                )}

            </div>
        )
    }

}

class RedditContent extends Component {
    constructor() {
        super();

        setTimeout(() => {
            log(this.props);
        }, 500);

        
    }

    componentDidMount() {
        
        log(' Did mount ');
     }
    componentWillMount() {
        
        log(' will mount ');
     }

     componentDidUpdate() {
        
        log('   Did Update   ');
     }
    
    render() {
        const x = posts.slice(0, 15);
        posts.unshift(...x)
        // posts = posts.slice(0, 20);
        window.posts = posts;
        return (
            <div className='scene'>
                <div className="left-zone">
                    <ul className="list">
                        {posts.map((post, i) => {
                            post = post.data;
                            const style = {
                                backgroundImage: `url(${post.thumbnail})`,
                            }
                            var title = post.title;
                            const maxCharacters = 32
                            if (title.length < maxCharacters) {
                                const diff = maxCharacters - title.length;
                                title = title + ((new Array(diff)).fill(' ')).join('') + '.'
                            } else {
                                title = title.slice(0, maxCharacters - 3);
                                title = title + '...';
                            }
                            return (
                                <li className="item">
                                    {/* {(i==15) ? (
                                            <input type="radio" id={post.id + i} name="basic_carousel" value={post.id + i}   />
                                        ) : (
                                            <input type="radio" id={post.id + i} name="basic_carousel" value={post.id + i} />
                                        )} */}

                                    <input type="radio" id={post.id + i} name="basic_carousel" value={post.id + i}  />

                                    <label className="label_strawberry" style={style} htmlFor={post.id + i}>
                                        {title}
                                        <div className="favorite-icon" onClick={(x) => console.log(title)}> </div>
                                    </label>


                                    <div className="content hidden">
                                        <p>
                                            <a href={post.url}>{post.title} </a>
                                            <span className='num_comments'>{post.num_comments} comments</span>
                                        </p>

                                        <Media post={post}> </Media>

                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div id="middle-border"></div>
                <div id="right-zone"></div>
            </div>
        );

    }

}



export default RedditContent;


//          {posts.map( post => {
        //             return <Post className="post" post={post}> </Post>
        //         })}   
