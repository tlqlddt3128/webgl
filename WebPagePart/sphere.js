var sphere = null;
    renderer = null;
    scene = null;
    camera = null;
    animating = false;
     
function addSphere(){
    var container = document.getElementById("container");
    
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement); 
    
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(45, container.offsetWidth/container.offsetHeight, 1, 4000);
    camera.position.set(0, 0, 3);
    
    var light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(0, 0, 1);
    scene.add(light);
    
    var sphereSkinUrl = "Photo/1.jpg";
    var sphereSkin = THREE.ImageUtils.loadTexture(sphereSkinUrl);
    
    var material = new THREE.MeshPhongMaterial( {map: sphereSkin} );
    
    var geometry = new THREE.SphereGeometry(1, 32, 32);
    
    sphere = new THREE.Mesh(geometry, material);
    
    sphere.rotation.x = Math.PI / 5;
    sphere.rotation.y = Math.PI / 5;
    
    scene.add(sphere);
    
    addMouseHandler();
    
    run();
}
    
function run(){
    
    //stats.begin();
    
    renderer.render(scene, camera);
    
    if(animating){
        
        sphere.rotation.x += 0.01;
        sphere.rotation.z += 0.01;
    
    }
    
    //stats.end();
    
    window.requestAnimationFrame(run);
}
    
function addMouseHandler(){
    var dom = renderer.domElement;
    
    dom.addEventListener('mouseup', onMouseUp, false);
}
    
function onMouseUp(event){
    event.preventDefault();
    animating = !animating;
}