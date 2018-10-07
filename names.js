function make_up_a_name(){
    console.log("making a new name!")
    
    function random(a,b){
        if(Math.random() < .5){
            return a
        } else {
            return b
        }
    }
    
    function random_list(list){
        var l = list.length;
        var r = Math.floor(Math.random()*l)
        return list[r]
    }
    
    function random_letter(){
        var letters = ['X','Q','M','O','S','U','R','V','X','X','X','Q'];
        return letters[Math.floor(Math.random()*letters.length)];
    }
    
    function capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    function article_wrap(nounType){
        var random = Math.random();
        var noun = random_list(nounType);
        var prep;
        if(random<.3){
            prep = "the "
        } else if (random >=.3 && random <= .6) {
            if(noun.charAt(0) === 'A' || noun.charAt(0) === 'E'  || noun.charAt(0) === 'I' || noun.charAt(0) === 'O'  || noun.charAt(0) === 'U' ){
                prep = "an "
            } else {
                prep = "a "
            }
        } else {
            prep = "";
        }
        return prep + noun;
    }
    
    var letter = random_letter();
    
    var intro_phrase = ["an Education in ", "Dancing with", "a Consultation with","on the Beach with","after the Party, with","Illuminated by","Catching","Conversing with","at Home with","Making Love to","at Last,","Once More,"];
    
    var intros = ["After", "Before", "While","at Last","Once More"];
    
    var human_nouns = ["Boy","Girl","Man","Woman","Corpse","Child","Baby", "Philosopher","Maiden","Crone","Countess","Politician","Magician","Accountant","Housewife","Lover","Mother","Father","Brother","Sister","Companion","Hero","Villian","Temptress","Angel","Demon"];
    
    var philosophical_nouns = ["Silence","Magnitude","Euphoria","Reconciliation ","Ocean","Obsolenscence","Passion","Ambivilance","Authority","Impossibility","Possibility","Adventure","Ambrosia"];
    
    var other_nouns = ["Bear", "Strawberry","Champagne","Hat","Coffee", "Rose Petal", "Obelisk","Dog","Cat","Cow","Spoon","Fur Coat", "Tome" ,"Cumberbund" ,"Painting","Chocolate","Cake","Apple","Pomegranite","Artichoke","Snow","Rain","Sun","Blood","Sarcophagas","Elixir","Pince Nez","Train","Archebus"];
    
    var names = ["Veronika","Milo","August", "June", "Maria","Jasmine", "Mei", "Ernest","Juan Pedro","Hans", "Prudence","Kim","Juliette","Theodore","Madame " + letter, "Professor " + letter, "Mrs. " +letter, "Dr. " +letter,]
    var emotions = ["Rage","Anger","Love","Desire","Envy","Jealousy","Torpor","Ennui","Elation","Ambivilance","Joy"];
    console.log(letter);
    var nouns = human_nouns.concat(emotions).concat(philosophical_nouns).concat(other_nouns).concat(names);
    var colors = ["Onyx","Pale","Crimson","Umber","Cerulean","Ocean Blue","Green","Teal","Aubergine","Lilac", "Linen-colored","Silver","Gold"];
    var weird_adjectives = ["Clandestine","Unusual" ,"Verbose", "Apprehensive","Illuminated","Autumnal","Ambiguous","Illusive","Understanding","Hateful","Hopeful","Joyful","Omnivorous","Cunning","Fierce","Depreciated","Lubricated","Twisted","Memorable","Intangible"];
    var adjectives = colors.concat(weird_adjectives);
    var gerunds = ["Walzing at","Sinning at","Wishing for","Hoping for","Grinning at","Painting","Salivating at", "Laughing at","Dueling at","Taking","Dinner at","a Moonlight Walk at","Memories of","a Vision of","One Last Night at","Stars Fell on","a Dream of"];
    var past_tense = ["Left","Died","Sung","Wept","Came"]
    var human_actions = ["Wept","Sung","Laughed","Slept","Swam","Kissed","Made Love","Died","Gave Birth","Wed","Dreamed","Pondered"];
    var bodyparts = ["Hair", "Knees","Lips","Eyes","Elbows", "Shoulders","Features","Skin","Feet","Fingers","Teeth"];
    var places_complete = ["at the Shore","at home","in the Street","in the Garden","in the Kitchen","in the Courtyward","in Bed","in the Bath"];
    var places_incomplete = ["the Hotel du ","the Beach at ", "Mount ", "Lake ", "the Lost City of "];
    var weird_word = ["Verte","Colorado","Cimmaron","Grau","Blau","Blanc","Noir","Rouge","Rioja",letter];
    
    
    var formats = [
        random_list(intro_phrase) + " " + random_list(names),//0
        random_list(gerunds) + " " + random_list(places_incomplete) + random_list(weird_word),//1
        article_wrap(human_nouns) + " with " + random_list(adjectives) +  " " + random_list(bodyparts),//2
        random_list(gerunds) + " " + random_list(places_incomplete) + " " + random_list(weird_word),//3
        article_wrap(nouns) + ", " + article_wrap(nouns) + ", " + article_wrap(nouns), //4
        random(random_list(adjectives),random_list(nouns)) + " " + random(random_list(adjectives),random_list(philosophical_nouns)) + ".",//5
        article_wrap(nouns) + " " + random(random_list(human_actions),""),//6
        random(random_list(adjectives),"") + random(" ",":") + random_list(nouns),//7
        random_list(gerunds) + " " + random(article_wrap(nouns),random_list(adjectives)),//8
        random_list(adjectives) + " " + random_list(philosophical_nouns),//9
        "the " + random_list(philosophical_nouns) + " of " + random_list(names), //10
        random_list(names) + " " + random_list(places_complete) + " with " + article_wrap(nouns), //11
        "A study in " + random(random_list(nouns),random_list(adjectives)), //12
        "A portrait of " + random(random_list(names),letter) + random(" in " + random_list(colors)," with " + article_wrap(other_nouns)),//13
        random(random_list(intros)+ " ","") + random(random_list(names),article_wrap(philosophical_nouns)) + " " + random_list(human_actions),//14
        random_list(adjectives) + " " + random_list(emotions),//15
    ]
    var random = Math.floor(Math.random()*formats.length);
    var format = formats[random];
    var title = format.charAt(0).toUpperCase() + format.slice(1);
    console.log(title)
    return title
}