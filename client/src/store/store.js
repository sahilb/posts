const json = require('./../models/hot.json');

const posts = json.data.children.map((post, i) => {
    const { data } = post;
    const { id, num_comments, title, url, permalink, thumbnail, thumbnail_height, thumbnail_width, preview, media } = data;
    const isFavorite = (i % 5 == 0);
    return {
        id, num_comments, title, url, permalink, thumbnail, thumbnail_height, thumbnail_width, preview, media, isFavorite
    }
})

const listeners = [];

const addListener = (listener) => {
    listeners.push(listener);
}

const notify = () => listeners.forEach(listener => listener(state));


let state = {
    view: 'hot', // | favorites
    posts: posts,
    activeHotPost: posts[0],
    activeFavoritePost: undefined
}

const actions = {
    enablePost(post) {
        if (state.view == 'hot') {
            state.activeHotPost = post;
        } else {
            state.activeFavoritePost = post;
        }
        notify();
    },
    clickHome() {
        if (state.view == 'hot') {
            return;
        }
        state.view = 'hot';
        notify();
    },
    clickFavorites() {
        if (state.view == 'favorites') {
            return;
        }
        state.view = 'favorites';
        notify();
    },
    addToFavorites(post) {
        let p = state.posts.filter((x) => x == post)[0]
        p.isFavorite = true;
        notify();
        // send network request
    },
    removeFromFavorites(post) {
        let p = state.posts.filter((x) => x == post)[0]
        p.isFavorite = false;
        notify();
    }
}

export default {
    state,
    actions,
    addListener
}