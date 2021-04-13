 function init() {
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    document.addEventListener( 'mousemove', onMouseMove, false );

    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    // Setup some basic stuff
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    // Setup Camera 
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);

    // Setup renerer and add to page
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth * .6, window.innerHeight * .6);

    var model = document.getElementById("model-wrapper");
    model.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Setup Camera Position
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.x = 100;
    camera.position.y = 100;
    camera.position.z = 100;

    // Add Camera Control through orbit.js
    let controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Add some basic ambient lighting (Does light all parts equally and does not cast shadows)
    hlight = new THREE.AmbientLight(0x04344c, 5.3);
    scene.add(hlight);


    //Add some point lights to simulate real lights
    light = new THREE.PointLight(0xffffff, 1, 10000);
    light.position.set(0, 300, 500);
    scene.add(light);

    controls.update();
    // Animation Script
    function animate() {
        raycaster.setFromCamera(mouse, camera);
        scene.children[2].material.color.set(0x04344c)
        // calculate objects intersecting the picking ray
        var intersects = raycaster.intersectObjects(scene.children);
        for (var i = 0; i < intersects.length; i++) {
            intersects[i].object.material.color.set(0x04344c);
        }
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    // Setup GLTF Loader and load in car
    let loader = new THREE.STLLoader();
    loader.load('https://raw.githubusercontent.com/skrrrccc/AUT-RnD/b4aa16e232ce44b56bacbdd577f1925ffc203dbc/public/cochleahorizontal.stl', 
    function (geometry) {
        // console.log(gltf);
        var material = new THREE.MeshLambertMaterial({
            color: 0x04344c,
            wireframe: true
        });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.set(0, 0, 0);

        scene.add(mesh);
        renderer.render(scene, camera)
        animate();
        console.log("SCene: ", )
    });
}

// Call method for starting init
init();
