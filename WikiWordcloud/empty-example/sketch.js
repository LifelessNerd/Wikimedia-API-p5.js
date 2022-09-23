function setup() {
  
  
  createCanvas(400, 400);
  askWikiAPI();
}

let inputString = "University_of_Lubumbashi";
let stopWordAmount = 100;
let stopWords = ["be","I","you","the","a","to","it","not","that","and","of","do","have","what","we","in","get","this","my","me","go","oh","can","no","on","for","know","just","your","'s","all","so","with","he","but","yeah","well","think","here","want","out","about","good","come","up","say","now","at","one","hey","they","see","if","how","like","she","look","make","right","guy","take","let","really","okay","her","uh","tell","him","why","there","who","time","thing","from","will","like","when","as","because","some","our","yes","there","back","mean","man","little","give","his","us","them","need","then","shall","or","talk","okay","something","where","great","way","never","call","too","by","sorry","over","love","wait","more","down","day","two","people","God","very","off","work","thank","big","try","dad","maybe","feel","friend","even","sure","find","kid","these","boy","put","please","happen","much","stop","night","bad","into","those","any","right","first","leave","year","hear","right","ever","Mr","again","use","mom","may","hi","life","nice","new","still","kind","anything","only","baby","than","fine","hello","keep","girl","help","believe","woman","lot","play","ask","start","home","nothing","hmm","their","meet","huh","show","around","guess","old","hell","before","always","three","wow","listen","thanks","minute","actually","eat","place","live","away","after","bring","every","everything","money","person","watch","other","remember","house","wrong","kill","school","everyone","run","late","care","car","move","ah","idea","another","someone","today","turn","real","happy","whole","week","job","fun","problem","break","world","which","must","party","buy","through","together","room","family","stay","lose","stuff","son","stupid","name","everybody","last","long","tonight","child","sit","course","pretty","hold","game","forget","else","own","five","second","doctor","dollar","enough","dog","funny","wear","die","sir","hard","honey","sound","sex","hate","suppose","God","head","understand","whoa","movie","worry","cool","marry","miss","pay","hour","crazy","change","hot","most","excuse","mother","check","pick","word","same","yourself","ready","seem","win","walk","father","story","already","hope","part","open","lady","read","drink","sleep","number","write","morning","tomorrow","next","phone","four","last","once","somebody","probably","without","many","such","eye","drive","wife","book","hang","since","throw","name","dead","stand","myself","aw","dinner","anyone","hand","each","anyway","television","learn","shut","town","beautiful","both","date","spend","office","hit","yet","save","true","sweet","until","food","while","send","high","anymore","also","news","Christmas","ten","ass","business","only","couple","totally","door","gay","exactly","parent","few","month","easy","deal","ow","hurt","nobody","OK","perfect","lie","free","young","weird","whatever","brother","work","kid","ago","end","other","ball","finally","line","its","ha","important","fall","heart","long","fat","class","shoot","picture","sell","side","wish","love","mind","hair","cut","wedding","reason","become","least","look","bite","fuck","under","bed","paper","different","catch","mine","six","set","face","speak","suck","sometimes","city","special","stick","question","dude","realize","birthday","point","enjoy","fact","dance","soon","bar","wonder","joke","relationship","chance","black","almost","fight","card","song","little","bye","coffee","awesome","sick","apartment","sorry","back","figure","pull","box","dream","water","decide","store","bet","lunch","face","anybody","afraid","buddy","cute","close","bathroom","show","mind","steal","full","company","front","ahead","moment","case","date","though","body","Mrs","pants","bitch","promise","glad","kiss","either","fire","grow","build","table","ticket","matter","teach","cat","sister","girlfriend","hat","touch","terrible","beer","damn","mm-hmm","club","amaze","smell","gift","serious","plan","street","team","order","cry","zero","drop","act","alone","seat","eh","between","eight","twenty","foot","seven","finish","gentleman","hand","point","blow","small","trouble","sweetie","sing","pass","beat","piece","shoe","welcome","god","white","kick","bag","fire","early","excite","wonderful","seriously","country","mouth","question","dear","quite","smart","husband","shh","invite","rest","yours","behind","key","end","dress","red","laugh","help","agree","machine","yep","return","space","mad","truth","ice","follow","outside","idiot","rule","absolutely","next","against","American","need","scare","notice","chicken","ride","music","join","next","good-bye","ruin","war","screw","light","along","poor","sense","able","matter","secret","fly","top","sure","fair","relax","boyfriend","plan","mistake","luck","group","daughter","college","president","far","sign","close","message","freak","fault","quick","till","except","single","shirt","choice","attention","power","quit","answer","trust","fifty","leg","wake","human","star","student","air","chair","gun","begin","death","tree","boss","while","present","instead","lucky","safe","cold","ahh","explain","video","brain","completely","voice","cake","drink","trip","monkey","hundred","fix","entire","expect","million","allow","forever","ugh","hide","huge","interesting","fight","roll","clothes","fast","grab","teacher","crap","animal","burn","tough","restaurant","sort","tooth","marriage","proud","uncle","push","butt","offer","lord","unless","feeling","suit","uh-huh","floor","cream","favorite","naked","list","ring","clean","apologize","clear","Earth","share","fill","cool","pizza","ridiculous","alive","pretend","hospital","sad","bunch","half","police","fish","window","busy","sign","call","pie","answer","raise","somewhere","sandwich","thirty","sale","choose","definitely","swear","pretty","boat","tired","ho","upset","less","nine","thousand","smoke","embarrass","band","bear","none","Santa","strong","law","toilet","jump","count","egg","Saturday","blue","horrible","shit","favor","handle","wall","art","cover","arm","perhaps","simple","bus","appreciate","himself","surprise","candy","finger","worth","state","possible","rich","short","king","knock","cookie","penis","history","imagine","third","blood","drug","future","prove","surprise","alright","captain","evening","congratulations","system","record","age","deserve","normal","yesterday","jerk","yay","bird","nose","bother","fan","letter","rather","head","interested","owe","pregnant","destroy","bear","evil","milk","sport","admit","apparently","conversation","obviously","uh-oh","jacket","during","accept","dumb","bit","consider","mention","step","deal","hungry","situation","lead","twelve","fantastic","hole","plus","note","test","honest","character","holy","manager","lesson","soul","nope","dark","difference","wine","road","calm","personal","clown","computer","horse","gosh","mayor","inside","sexy","dirty","carry","professor","usually","bottle","cheese","summer","remind","afternoon","pee","across","angry","fella","film","reach","shower","cup","lawyer","camera","pain","hurry","desk","monster","certainly","cop","credit","prepare","anywhere","breakfast","bastard","damn","church","hire","decision","Miss","pig","loser","robot","deep","park","chocolate","service","Jew","tape","kitchen","half","rid","grandpa","hero","shot","spot","folks","yell","awful","scene","trick","asshole","issue","lovely","visit","honor","clean","second","chick","costume","Friday","hall","Ms","fake","forgive","grade","fifteen","ought","cheat","Chinese","crap","create","comfortable","hotel","magazine","settle","accident","boob","excellent","neighbor","train","board","pop","spirit","cow","building","ear","giant","ugly","toy","cancel","Internet","strange","aunt","island","extra","fit","rock","step","action","bill","field","kiss","fresh","level","cost","size","cell","serve","shake","neck","bowl","control","loud","bedroom","check","heaven","right","commercial","draw","guest","insane","fail","cook","pleasure","truck"];

function draw() {
  background(220);
  
}

function askWikiAPI(){
  let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext&titles=" + inputString;
  loadJSON(url, gotData, "jsonp");
  
}
function gotData(data){
  //Navigates the data and extracts the first paragraph of the page


  let pageId = Object.keys(data["query"]["pages"])[0];
  let extractText = data["query"]["pages"][pageId]["extract"];
  extractText = extractText.replaceAll(new RegExp('== (.)* ==', 'g'), ""); //Remove headers
  let frequencies = stringFrequency(extractText);

  console.log(frequencies); // This is the main class; continue from here

}

function stringFrequency(rawText){
  //This function gets a raw text string, calls detokenizer, and constructs an Object with term frequencies
  let replacedText = detokenize(rawText);
  let words = replacedText.split(/[\s\n]/);
  let frequencies = new Object();
  
  for (var index = 0; index < words.length; index++) { 
    let word = words[index];
    if(word == ""){ //Excludes empty strings
      continue;
    }
    if (Object.keys(frequencies).includes(word)){
      frequencies[word] = frequencies[word] + 1;
    }
    else {
      frequencies[word] = 1;
    }
  }
  let cutFrequencies = excludeStopWords(frequencies, stopWordAmount);
  return cutFrequencies;
}

function excludeStopWords(frequencies){
  
  let newFrequencies = new Object();
  for (var index = 0; index < Object.keys(frequencies).length; index++) {
    let key = Object.keys(frequencies)[index];
    if (stopWords.slice(0, stopWordAmount).includes(key)){
      // Erm
    } else {
      newFrequencies[key] = frequencies[key];
    }

  }

  return newFrequencies;
}

//Strip rawText off all characters that are not part of the character set and should not be included
function detokenize(rawText){
  let replacedText = rawText.replace("\n", "");
  //replacedText = replacedText.replace(/\n/g, '');
  replacedText = replacedText.replace(/\(/g, '');
  replacedText = replacedText.replace(/\)/g, '');
  replacedText = replacedText.replace(/:/g, '');
  replacedText = replacedText.replace(/\./g, '');
  replacedText = replacedText.replace(/,/g, '');
  //This can probabily be done more effiecent by using a negated regex statement (everything but a-Z)

  return replacedText;
}