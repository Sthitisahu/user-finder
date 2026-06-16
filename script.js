let users = [
    {
        name: "Amisha Rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in the loud world 🏮| not for everyone"
    },
    {
        name: "Kiara Mehta",
        pic: "https://i.pinimg.com/736x/71/5e/2b/715e2b633187ddc5d112d222eb61e78d.jpg",
        bio: "collecting memories, not things ✨"
    },
    {
        name: "Aarav Sharma",
        pic: "https://i.pinimg.com/736x/27/15/ea/2715ea8edaee1869cd688391110b5fc8.jpg",
        bio: "dream big, stay humble 🌙"
    },
    {
        name: "Riya Kapoor",
        pic: "https://i.pinimg.com/736x/f5/2d/50/f52d50b02a0837db3259bc510a4659ae.jpg",
        bio: "coffee, sunsets, and good playlists ☕"
    },
    {
        name: "Akshyat Roy",
        pic: "https://i.pinimg.com/736x/18/01/e7/1801e7c8c1700f33ffcf095b1808a51f.jpg",
        bio: "living my story one chapter at a time 📖"
    },
    {
        name: "Ishita Sen",
        pic: "https://i.pinimg.com/736x/41/eb/61/41eb6149da8315e24d99e0b505a83b4a.jpg",
        bio: "soft heart, strong mind 🌸"
    },
    {
        name: "Mahira Arora",
        pic: "https://i.pinimg.com/736x/0e/2e/c9/0e2ec9660a27a7c34596bbc0b9710987.jpg",
        bio: "finding beauty in everyday moments ✨"
    }
];

let cards = document.querySelector(".cards");

function showUsers(arr){
    cards.innerHTML = "";
     if (arr.length === 0) {
        const message = document.createElement("h2");
        message.classList.add("no-user");
        message.textContent = "No user found.";

        cards.appendChild(message);
        return;
    }
    arr.forEach(function(user){

// Create card
const card = document.createElement("div");
card.classList.add("card");

// Create image
const img = document.createElement("img");
img.src = user.pic;
img.classList.add("bg-img");

// Create blurred layer
const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage = `url(${user.pic})`;
blurredLayer.classList.add("blurred-layer");

// Create content container
const content = document.createElement("div");
content.classList.add("content");

// Create heading
const heading = document.createElement("h3");
heading.textContent = user.name;

// Create paragraph
const paragraph = document.createElement("p");
paragraph.textContent = user.bio;

// Append elements
content.appendChild(heading);
content.appendChild(paragraph);

card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

cards.appendChild(card);
    })
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function(){
    const searchValue = inp.value.toLowerCase();

    let newUsers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(searchValue);
    });

    showUsers(newUsers);
});
