Webcam.set({
    width:350,
    height:250,
image_format:'png',
png_quality:90


});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("output").innerHTML='<img id="captured image" src="'+data_uri+'"></img>';
}  
)};
console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0NvTG6F_8/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded")
}
function identify(){
    img=document.getElementById('captured image');
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        document.getElementById("obj").innerHTML=results[0].label;
        document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}