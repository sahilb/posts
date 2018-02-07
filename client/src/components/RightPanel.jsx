import React from 'react';
import Media from './Media.jsx';
import Title from './Title.jsx';

class RightPanel extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        const {post} = this.props;
        if(!post){
            return <div className='right-panel' />
        }
        return (
            <div className="right-panel">
                <Title post={post}> </Title>
                <Media post={post}> </Media>
            </div>
        );
    }
}


export default RightPanel;
