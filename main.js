//https://teachablemachine.withgoogle.com/models/5INZZaVVR/
//https://teachablemachine.withgoogle.com/models/qaYx4ayJ-/
Webcam.set({
    width:400,height:300,image_format:"png",png_quality:80
});('w')
Webcam.attach('#camera');
function a(b) {
    Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; });

    
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qaYx4ayJ-/model.json", arrozconleche);
function arrozconleche(){
console.log ("skidibitoile") 

};
function w(){
var arrozkrispis=document.getElementById("result");
classifier.classify(arrozkrispis,j);


}
function j(error,ip){
if(error){
    console.log(error);

}
else{
 console.log(ip);
 document.getElementById("ib").innerHTML=ip[0].label;
 document.getElementById("i0").innerHTML=ip[0].confidence;
};
}