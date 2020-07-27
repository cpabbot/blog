function openPost(hash, shouldTransition) {
    const postLink = document.querySelector('a[href*="' + hash + '"]')
    const post = postLink.parentElement;
    const themeElement = document.getElementsByClassName('theme')[0];

    // coming from the home page, the page fades to 
    // hide the awkward changes in content
    if(shouldTransition) {
        // hide the whole page
        themeElement.classList.add('hidden');
        // then show everything
        setTimeout(function() {
            post.classList.add('full-post');
            themeElement.classList.remove('hidden');
        }, 200);
    // on a refresh, all content loads instantly
    // somehow the fade-in class comes back when returning home
    } else {
        post.classList.remove('fade-in');
        post.classList.add('full-post');
    }
}

window.addEventListener('load',()=>{
    const hash = window.location.hash;
    if(hash.length > 0) {
        openPost(hash, false);
    }
})

window.addEventListener('hashchange',()=>{
    const hash = window.location.hash;
    if(hash.length < 1) {
        window.location.reload();
    }
    if(hash.length > 0) {
        openPost(hash, true);
    }
});




// function addHistory(path, data, url) {
//     console.log(data + " " + url);
//     history.pushState(data, null, url);
// }


// function loadContent(page) {
//     history.pushState('home', null, null);
//     history.pushState(page, null, page);
//     // addHistory(null, 'home', null);
//     // addHistory(null, 'home', null);
// }

// window.addEventListener('popstate', function(e) {
    // var location = e.state;
    // console.log("Popping " + location);
    // loadContent(home);

    // if (location != null) {
    //     loadBodyContent(location,false);
    //     $('.addedMenuNavBarItem').remove();

    // } else {
    //     window.history.back();
    // }
// });


// function openPost(postLink, addToHistory) {
//     const post = postLink.parentElement;
//     const themeElement = document.getElementsByClassName('theme')[0];

//     console.log(window.location.hash);
//     // addHistory(null, 'home', null);
//     var data = post.getAttribute('data-name'),
//         url = data + ".html";
//     // using != false in case null
//     // if(addToHistory != false) { addHistory({page: post.id}, data, url); }
//     // loadContent(post.getAttribute('data-name'));

//     themeElement.classList.add('hidden');
//     setTimeout(function() {
//         post.classList.add('full-post');
//         themeElement.classList.remove('hidden');
//         console.log(window.location.hash.substring(1));
//     }, 300);
// }
