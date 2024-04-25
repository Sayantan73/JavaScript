const cource = {
    courceName: "js in hindi",
    price: "999",
    courceInstructor: "hitesh"
}

// const {courceInstructor} = cource
// console.log(courceInstructor);

const {courceInstructor: instructor} = cource
console.log(instructor);

// const navbar = ({company}) => {                 // in react don't need to write props.company because we use destructuring
//     console.log(company);
// }
// navbar(company = "SKaran")

const myApiUrl = "https://api.github.com/users/hiteshchoudhary"
//example of json return by a  API call
const result ={
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 84,
    "public_gists": 4,
    "followers": 20570,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2024-04-10T13:18:57Z"
    }

    console.log(result.id);
