import React from 'react';

class Media extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { post } = this.props;
        let image = '';
        let video = '';
        try {
            image = post.preview.images[0].source.url;
            video = post.media.reddit_video.fallback_url;
        } catch (e) {
            image = image || '';
            video = video || '';
        }

        const media = video.length ? video : image;

        return (
            <div className="post-media">
                {video.length ? (
                    <video src={media} height={380} width={580} controls />
                ): (
                    <img height={380} width={580} src={media} />
                )}

            </div>
        )
    }

}

class Title extends React.Component {
    render() {
        return (
            <div className="post-title">
                {this.props.title}
            </div>
        )
    }
}

class Post extends React.Component {
    render() {
        return (
            <div className="post-content">
                <Media post={this.props.post.data}> </Media>
                <Title title={this.props.post.data.title}> </Title>
            </div>
        )
    }
}

export default Post;