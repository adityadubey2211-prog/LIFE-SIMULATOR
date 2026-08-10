const player = {
    money: 5000,
    energy: 50,
    knowledge: 10,
    health: 50,
    happiness: 50,
    reputation: 0,
    day: 1
};
const money = document.querySelector("#money");
const energy = document.querySelector("#energy");
const knowledge = document.querySelector("#knowledge");
const happiness = document.querySelector("#happiness");
const health = document.querySelector("#health");
const reputation = document.querySelector("#reputation");
const counter = document.querySelector(".day");
function updateUI(){
    money.textContent = `${player.money}`;
    energy.textContent =`${player.energy}`;
    knowledge.textContent = `${player.knowledge}`;
    happiness.textContent = `${player.happiness}`;
    health.textContent = `${player.health}`;
    reputation.textContent = `${player.reputation}`;
    counter.textContent = `${player.day}`;
}
const events = [
    {
        title: "💻 Freelance Work",
        description: "You got a small freelance job.",
        effect: "+₹1,000",
        money: 1000
    },
    {
        title: "🎁 Lucky Day",
        description: "Someone gave you a small gift.",
        effect: "+₹500",
        money: 500
    },
    {
        title: "🤒 Feeling Sick",
        description: "You are feeling unwell today.",
        effect: "-10 Health",
        health: -10
    },
    {
        title: "🍎 Healthy Meal",
        description: "You had a healthy meal today.",
        effect: "+5 Health",
        health: 5
    },
    {
        title: "📚 New Book",
        description: "You found a useful book to read.",
        effect: "+10 Knowledge",
        knowledge: 10
    },
    {
        title: "💡 Great Idea",
        description: "You learned something new today.",
        effect: "+5 Knowledge",
        knowledge: 5
    },
    {
        title: "🎉 Fun Day",
        description: "You spent some fun time with friends.",
        effect: "+10 Happiness",
        happiness: 10
    },
    {
        title: "😔 Bad Day",
        description: "Today was not a very good day.",
        effect: "-5 Happiness",
        happiness: -5
    },
    {
        title: "🤝 Help Someone",
        description: "You helped someone who needed you.",
        effect: "+5 Reputation",
        reputation: 5
    },
    {
        title: "🌟 Someone Appreciated You",
        description: "People noticed your good work.",
        effect: "+10 Reputation",
        reputation: 10
    }
];
const eventTitle = document.querySelector("#event-title");
const eventDescription = document.querySelector("#event-description");
const eventEffect = document.querySelector("#event-effect");
function getuniqueEvents(){
    const randomidx = Math.floor(Math.random() * events.length);
    const todayevent = events[randomidx];
    eventTitle.textContent = `${todayevent.title}`;
    eventDescription.textContent = `${todayevent.description}`;
    eventEffect.textContent = `${todayevent.effect}`;
    if(todayevent.money !== undefined){
        player.money += todayevent.money;
    }
    if(todayevent.health !== undefined){
        player.health += todayevent.health;
    }
    if(todayevent.happiness !== undefined){
        player.happiness += todayevent.happiness;
    }
    if(todayevent.reputation !== undefined){
        player.reputation += todayevent.reputation;
    }
    if(todayevent.knowledge !== undefined){
        player.knowledge += todayevent.knowledge;
    }
    if(todayevent.energy !== undefined){
        player.energy += todayevent.energy;
    }
    
}
getuniqueEvents();
updateUI();