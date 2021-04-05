const toggleBtn = document.querySelector('.toggle-btn');
const navBar = document.querySelector('.navbar');


const reviews = [
    {
        id: "Men's Health",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis perspiciatis, culpa nostrum iste dolores harum"
    },
    {
        id: "MyFitness",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis perspiciatis, culpa nostrum iste dolores harum"
    },
    {
        id: "Runner's Tribe",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis perspiciatis, culpa nostrum iste dolores harum"
    },
    {
        id: "Miles UK",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis perspiciatis, culpa nostrum iste dolores harum"
    }
]

toggleBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
})