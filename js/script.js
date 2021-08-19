const pp_img = document.getElementById("pp-img");
const pp_name = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("text");

let currentItem = 0;

const l_arrow = document.getElementById("l-arrow");
const r_arrow = document.getElementById("r-arrow");
const btn = document.getElementById("btn");

const reviews = [
    {
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

window.addEventListener("DOMContentLoaded", function(){
    const item  = reviews[currentItem];
    pp_img.src = item.img;
    pp_name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
});

function showPerson(person){
    const item  = reviews[person];
    pp_img.src = item.img;
    pp_name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}
l_arrow.addEventListener("click", function(){
    currentItem --;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

r_arrow.addEventListener("click", function(){
    currentItem ++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});
btn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
});


