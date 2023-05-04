"use strict"

let typingtext = [
    'Proper mental health is essential in every stage of life – from childhood and teenage to adulthood. Throughout a lifetime, an individual can experience mental health issues at any point.',
    ' A cryptocurrency is a virtual or digital currency that is highly secured by cryptography or encryption techniques which makes it nearly impossible to counterfeit such cryptocurrency. ',
    'Business plays a major role within our society. It is a creative and competitive activity that continuously contributes to the shaping of our society. By satisfying their needs and wants people cannot satisfy themselves',
    'Today Startups are being widely recognized as important engines for growth and job generation. Through innovation and scalable technology, startups can generate impactful solutions, and thereby act as vehicles for socio-economic development and transformation.',
    'one minute typing test is like a sprint. If you make a mistake it is probably best to just ignore it and keep typing the paragraphs. Of course accuracy is important, but your speed and accuracy will get better as long as you treat this as a learning exercise.',
    'ask; all; ash; gas; dash; flash; flask; fall; sall; das; glass; kalf; has; had; dalda; flad; klad; slash; josh jolla;',
    'almost all over the world, the age of computers and technology prevails. Therefore, in our digital world, touch typing has become a necessity. Many people including employees businessmen students teachers scientists are all using computers on a daily basis.',
    'Although some people might advocate for typing out random words or short phrases, there are certain sentences that are particularly good for typing practice. One such sentence is "The quick brown fox jumps over the lazy dog." This sentence uses every letter of the alphabet, making it a great way to warm up your fingers before embarking on a long typing session.'
];

let startTime,endTime;
let changeBtnText = () => {
    let a = document.getElementById('btn').innerHTML;
    if (a == 'Done') {
        document.getElementById('btn').innerHTML = 'Start';
        document.getElementById('textarea').disabled = true;
        let date=new Date();
        endTime=date.getTime();
        let totalTime=((endTime-startTime)/1000);
        console.log(totalTime);
        let totalStr=document.getElementById('textarea').value;
        let wordCount=(totalStr.split(" ").length);
        console.log(wordCount);
        let speed=(Math.round((wordCount/totalTime)*60));
        let showText = document.getElementById('text').innerHTML;
        let words1=showText.split(" ");
        let words2=totalStr.split(" ");
        let cnt=0;
        words1.forEach(function (item,index){
            if(item==words2[index]){
                cnt++;
            }
            let errorwords=(words1.length-cnt);
            document.getElementById('text').innerHTML=("you typed total at "+speed+" words per minutes "+cnt+" correct out of "+words1.length+" words and the total number of erroe are "+errorwords);
        })
    }
    else if (a == 'Start') {
        document.getElementById('btn').innerHTML = 'Done';
        document.getElementById('textarea').disabled = false;
        document.getElementById('textarea').value="";
        let index = Math.floor(Math.random() * (typingtext.length - 1));
        document.getElementById('text').innerHTML = (typingtext[index]);
    }
};

let a = document.getElementById('btn').innerHTML;
if (a == 'Start') {
    document.getElementById('textarea').disabled = true;
}

let date=new Date();
let timeStart=()=>{
    startTime=date.getTime();
}






