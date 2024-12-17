const learnedWords = JSON.parse(localStorage.getItem("learnedWords")) || [];
let currentDay = new Date().getDay() + Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 1)) / 86400000);

// Base de données des phrases
const phrases = [
        { en: "I eat an apple.", fr: "Je mange une pomme." },
        { en: "I like to read books.", fr: "J'aime lire des livres." },
        { en: "She is going to the store.", fr: "Elle va au magasin." },
        { en: "We are learning to speak French.", fr: "Nous apprenons à parler français." },
        { en: "They are playing soccer.", fr: "Ils jouent au football." },
        { en: "I live in a small town.", fr: "Je vis dans une petite ville." },
        { en: "He drinks coffee every morning.", fr: "Il boit du café chaque matin." },
        { en: "My brother plays the guitar.", fr: "Mon frère joue de la guitare." },
        { en: "The sun is shining brightly.", fr: "Le soleil brille fortement." },
        { en: "I have a pet dog.", fr: "J'ai un chien de compagnie." },
        { en: "She is reading a novel.", fr: "Elle lit un roman." },
        { en: "We go to school by bus.", fr: "Nous allons à l'école en bus." },
        { en: "They love watching movies.", fr: "Ils adorent regarder des films." },
        { en: "He is studying for his exams.", fr: "Il étudie pour ses examens." },
        { en: "I wake up early every day.", fr: "Je me réveille tôt chaque jour." },
        { en: "My parents are traveling to Paris.", fr: "Mes parents voyagent à Paris." },
        { en: "She has a beautiful voice.", fr: "Elle a une belle voix." },
        { en: "I enjoy listening to music.", fr: "J'aime écouter de la musique." },
        { en: "We are cooking dinner together.", fr: "Nous cuisinons le dîner ensemble." },
        { en: "They are watching a football match.", fr: "Ils regardent un match de football." },
        { en: "I love playing video games.", fr: "J'adore jouer aux jeux vidéo." },
        { en: "He is a very good swimmer.", fr: "Il est un très bon nageur." },
        { en: "I have a big family.", fr: "J'ai une grande famille." },
        { en: "She works as a teacher.", fr: "Elle travaille comme enseignante." },
        { en: "We are going to the beach this weekend.", fr: "Nous allons à la plage ce week-end." },
        { en: "They are painting the house.", fr: "Ils peignent la maison." },
        { en: "I need a new phone.", fr: "J'ai besoin d'un nouveau téléphone." },
        { en: "She loves to travel around the world.", fr: "Elle aime voyager autour du monde." },
        { en: "We are planning a party for his birthday.", fr: "Nous planifions une fête pour son anniversaire." },
        { en: "He enjoys hiking in the mountains.", fr: "Il aime faire de la randonnée dans les montagnes." },
        { en: "I am learning to cook.", fr: "J'apprends à cuisiner." },
        { en: "They are playing chess in the park.", fr: "Ils jouent aux échecs dans le parc." },
        { en: "She is writing a letter to her friend.", fr: "Elle écrit une lettre à son amie." },
        { en: "We are going to the cinema tonight.", fr: "Nous allons au cinéma ce soir." },
        { en: "He is reading a book about history.", fr: "Il lit un livre sur l'histoire." },
        { en: "I have a lot of homework to do.", fr: "J'ai beaucoup de devoirs à faire." },
        { en: "They are playing basketball outside.", fr: "Ils jouent au basket à l'extérieur." },
        { en: "I go to the gym every morning.", fr: "Je vais à la salle de sport chaque matin." },
        { en: "She enjoys painting landscapes.", fr: "Elle aime peindre des paysages." },
        { en: "We are visiting our grandparents this weekend.", fr: "Nous rendons visite à nos grands-parents ce week-end." },
        { en: "He is learning to play the piano.", fr: "Il apprend à jouer du piano." },
        { en: "I am writing a story.", fr: "J'écris une histoire." },
        { en: "They are eating lunch in the park.", fr: "Ils déjeunent dans le parc." },
        { en: "She is wearing a red dress.", fr: "Elle porte une robe rouge." },
        { en: "I am watching a new TV show.", fr: "Je regarde une nouvelle émission de télévision." },
        { en: "He is repairing his bicycle.", fr: "Il répare son vélo." },
        { en: "We are traveling to New York next month.", fr: "Nous voyageons à New York le mois prochain." },
        { en: "She likes to dance salsa.", fr: "Elle aime danser la salsa." },
        { en: "I am going to the supermarket.", fr: "Je vais au supermarché." },
        { en: "They are preparing for their final exams.", fr: "Ils se préparent pour leurs examens finaux." },
        { en: "We are having a barbecue this weekend.", fr: "Nous faisons un barbecue ce week-end." },
        { en: "I am studying to become a doctor.", fr: "J'étudie pour devenir médecin." },
        { en: "She is always very busy at work.", fr: "Elle est toujours très occupée au travail." },
        { en: "He likes to ride his bike in the park.", fr: "Il aime faire du vélo dans le parc." },
        { en: "We are going to a concert tonight.", fr: "Nous allons à un concert ce soir." },
        { en: "They are learning new skills every day.", fr: "Ils apprennent de nouvelles compétences chaque jour." },
        { en: "I like to go jogging in the morning.", fr: "J'aime faire du jogging le matin." },
        { en: "She is studying hard for her exams.", fr: "Elle étudie dur pour ses examens." },
        { en: "We are buying new furniture for the house.", fr: "Nous achetons de nouveaux meubles pour la maison." },
        { en: "He is a great cook.", fr: "C'est un excellent cuisinier." },
        { en: "I am learning how to play soccer.", fr: "J'apprends à jouer au football." },
        { en: "She is reading a book about science.", fr: "Elle lit un livre sur la science." },
        { en: "We are going to the zoo tomorrow.", fr: "Nous allons au zoo demain." },
        { en: "They are having a meeting at work.", fr: "Ils ont une réunion au travail." },
        { en: "I need to buy some groceries.", fr: "Je dois acheter des courses." },
        { en: "He is training for a marathon.", fr: "Il s'entraîne pour un marathon." },
        { en: "She is wearing a blue jacket.", fr: "Elle porte une veste bleue." },
        { en: "We are cooking a special dinner tonight.", fr: "Nous préparons un dîner spécial ce soir." },
        { en: "They are playing video games at home.", fr: "Ils jouent à des jeux vidéo à la maison." },
        { en: "I am learning Spanish.", fr: "J'apprends l'espagnol." },
        { en: "She likes to drink tea in the evening.", fr: "Elle aime boire du thé le soir." },
        { en: "We are going to the park to play tennis.", fr: "Nous allons au parc pour jouer au tennis." },
        { en: "They are building a new house.", fr: "Ils construisent une nouvelle maison." },
        { en: "I like to watch movies on weekends.", fr: "J'aime regarder des films le week-end." },
        { en: "He is playing the piano right now.", fr: "Il joue du piano en ce moment." },
        { en: "She is walking her dog in the park.", fr: "Elle promène son chien dans le parc." },
        { en: "We are organizing a surprise party.", fr: "Nous organisons une fête surprise." },
        { en: "They are studying in the library.", fr: "Ils étudient à la bibliothèque." },
        { en: "I am cooking dinner for my family.", fr: "Je prépare le dîner pour ma famille." },
        { en: "He is learning how to swim.", fr: "Il apprend à nager." },
        { en: "She is doing yoga in the morning.", fr: "Elle fait du yoga le matin." },
        { en: "We are going to a museum this afternoon.", fr: "Nous allons au musée cet après-midi." },
        { en: "They are listening to music while working.", fr: "Ils écoutent de la musique en travaillant." },
        { en: "I am reading a new book about technology.", fr: "Je lis un nouveau livre sur la technologie." },
        { en: "She is practicing her speech for the conference.", fr: "Elle pratique son discours pour la conférence." },
        { en: "We are playing cards with our friends.", fr: "Nous jouons aux cartes avec nos amis." },
        { en: "They are learning how to bake cakes.", fr: "Ils apprennent à faire des gâteaux." },
        { en: "I am going to bed early tonight.", fr: "Je vais me coucher tôt ce soir." },
        { en: "She is writing a blog post.", fr: "Elle écrit un article de blog." },
        { en: "We are planning a road trip across the country.", fr: "Nous planifions un voyage en voiture à travers le pays." },
        { en: "They are decorating the house for the holidays.", fr: "Ils décorent la maison pour les vacances." },
        { en: "I am meeting my friends at the café.", fr: "Je retrouve mes amis au café." },
        { en: "She is teaching me how to dance.", fr: "Elle m'enseigne à danser." },
        { en: "We are having lunch at a restaurant.", fr: "Nous déjeunons au restaurant." },
        { en: "They are traveling to London next week.", fr: "Ils voyagent à Londres la semaine prochaine." },
        { en: "I am writing a letter to my grandmother.", fr: "J'écris une lettre à ma grand-mère." },
        { en: "She is learning how to play tennis.", fr: "Elle apprend à jouer au tennis." }    
];

// Fonction pour récupérer les phrases du jour
function getDailyPhrases() {
    const shuffledPhrases = phrases.slice().sort(() => 0.5 - Math.random());
    return shuffledPhrases.slice(0, 10).map(sentence => {
        const isEnglishToFrench = Math.random() > 0.5;
        return {
            question: isEnglishToFrench ? sentence.en : sentence.fr,
            answer: isEnglishToFrench ? sentence.fr : sentence.en,
            direction: isEnglishToFrench ? "enToFr" : "frToEn"
        };
    });
}

let dailyPhrases = getDailyPhrases();

// Afficher la leçon
function displayLesson() {
    const lessonDiv = document.getElementById("lesson");
    lessonDiv.innerHTML = "";
    dailyPhrases.forEach((sentence, index) => {
        lessonDiv.innerHTML += `
            <p><strong>${sentence.direction === "enToFr" ? "Anglais" : "Français"}</strong> : ${sentence.question} | 
            <strong>${sentence.direction === "enToFr" ? "Français" : "Anglais"}</strong> :</p>
            <input type="text" id="answer${index}" placeholder="Votre traduction ici...">
            <span id="result${index}"></span>
        `;
    });
}

// Vérifier les réponses
function verifyAnswers() {
    let correctCount = 0;

    dailyPhrases.forEach((sentence, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim().toLowerCase();
        const correctAnswer = sentence.answer.toLowerCase();
        const resultSpan = document.getElementById(`result${index}`);

        if (userAnswer === correctAnswer) {
            resultSpan.textContent = "Correct !";
            resultSpan.className = "correct";
            correctCount++;
        } else {
            resultSpan.textContent = `Faux ! Réponse : ${sentence.answer}`;
            resultSpan.className = "incorrect";
            if (!learnedWords.includes(sentence)) learnedWords.push(sentence);
        }
    });

    document.getElementById("score").innerText = `Score : ${correctCount} / ${dailyPhrases.length}`;
    if (correctCount === dailyPhrases.length) {
        document.getElementById("nextLessonBtn").disabled = false;
    }

    localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
}

document.addEventListener("DOMContentLoaded", displayLesson);
