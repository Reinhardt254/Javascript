const posts  = [
    {title: 'post one', body: 'This is post one'},
    {title: 'post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            posts.push(post);
    const error = false;
    if(!error){
        resolve();
    }else{
        reject('Error: Something went wrong');
    }
    });
 }, 2000);
}

createPost({title: 'post Three', body: 'This is post three'}).then(getPosts);

const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res.json());
Promise.all([promise1, promise2, promise3,promise4]).then(values => console.log(values));

======================ASSYNC AWAIT==================
async function init() {
    await createPost({ title: 'Post Three', body:'This is post three'});

    getPosts();
}
init();

//===============Async await with fetch===========
    async function fetchUsers() {
    ('https://jsonplaceholder.typicode.com/users');
    const data = await resizeBy.json();

    console.log(data);
    }
fetchUsers();















































