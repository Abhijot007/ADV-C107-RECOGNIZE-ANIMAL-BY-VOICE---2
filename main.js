function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wG8-e00y0/', modelReady);
}

function modelReady() {
    classifier.classify(gotresults);
}