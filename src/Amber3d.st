Smalltalk createPackage: 'Amber3d'!
(Smalltalk packageAt: 'Amber3d' ifAbsent: [ self error: 'Package not created: Amber3d' ]) imports: {'BABYLON' -> 'babylonjs'. 'amber/web/Web'. 'amber/web/Web-JQuery'. 'babylonjs-loaders'. 'silk/Silk'}!
Object subclass: #Amber3d
	slots: {#engine. #canvas. #scene}
	package: 'Amber3d'!

!Amber3d methodsFor: 'action'!

createGround: s
	| ground greenMat smat |
	"// Create a built-in ground shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable"
    "var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);"
	smat := self sampleBumpMap: s.
	-5 to: 5 do: [:y |
		-5 to: 5 do: [:x |
		ground := BABYLON MeshBuilder provided CreateGround: 'ground' valueWithPossibleArguments: {6 . 6 . 2 . s . false} . 
		"ground scaling: (BABYLON Vector3 newValue: 10 value: 10 value: 10)."
		ground position 
			x: x; 
			y: 0; 
			z: y.
		ground material: smat.
	]].
!

createScene
	| camera sphere ground light s greenMat smat |
	"// Create a basic BJS Scene object"
    "var scene = new BABYLON.Scene(engine);"
	s := BABYLON Scene newValue: engine.
	s ambientColor: (BABYLON Color3 newValue: 1 value: 1 value: 1).
    "// Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}"
    "var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);"
	camera := BABYLON FreeCamera newValue: 'camera1' value: (BABYLON Vector3 newValue: 0 value: 1.7 value: -5.5) value: s.
	 "// Target the camera to scene origin"
    "camera.setTarget(BABYLON.Vector3.Zero());"
	camera setTarget: BABYLON Vector3 provided Zero value.
    "// Attach the camera to the canvas"
    "camera.attachControl(canvas, false);"
	camera attachControl: canvas value: true.
    "// Create a basic light, aiming 0, 1, 0 - meaning, to the sky"
    "var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);"
	light := BABYLON HemisphericLight newValue: 'light1' value: (BABYLON Vector3 newValue: -1 value: 1 value: 0) value: s.  
    self createGround: s.
    "// Return the created scene"
    "return scene;"
	^ s
!

doInitializeBabylon
	"// Get the canvas DOM element"
	"var canvas = document.getElementById('renderCanvas');"
	"// Load the 3D engine"
	"var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});"

	canvas := '#renderCanvas' asSilk asDomNode .
	engine := BABYLON Engine newValue: canvas value: true value: #{'preserveDrawingBuffer' -> true . 'stencil' -> true}.
	scene := self createScene.
	self startBabylonEventLoop.
	self loadMeshes
!

doInspectStatus
	(self getApi: '/status')
		then: {#json. #inspect}
		catch: [ :err | Terminal alert: err ]
!

loadMeshes
	| promise myMesh gl |
	"BABYLON.SceneLoader.ImportMeshAsync('', '/ relative path/', 'myFile').then((result) => {"
	console log: 'scene is now'.
	console dir: scene.
	promise := (BABYLON SceneLoader provided ImportMeshAsync: 'Character' value: './' value: 'palladin7.gltf' value: scene).
	promise then: [:result |
		console log: 'scene after import:'.
		console dir: scene.
		console log: 'result is:'.
		console dir: result.
		"(result meshes at: 1) position x: 20."
		myMesh := scene getMeshByName: '__root__'.
		myMesh rotation: (BABYLON Vector3 newValue: 0 value: (Math PI / 8) value: 0) .
		myMesh position: (BABYLON Vector3 newValue: 0 value: 0 value: -4).
		scene stopAllAnimations.
		(result animationGroups at:3) 
			play;
			loopAnimation: true.
		
	]
!

sampleBumpMap: s
	| mat |
	
	mat := BABYLON StandardMaterial newValue: 'mat1' value: s.
	mat diffuseTexture: (BABYLON Texture newValue: 'http://i.imgur.com/Wk1cGEq.png' value: s).
	mat bumpTexture: (BABYLON Texture newValue: 'http://i.imgur.com/wGyk6os.png' value: s).
	^ mat
!

startBabylonEventLoop	
	engine runRenderLoop: [ scene render ].
	"// the canvas/window resize event handler"
	"window.addEventListener('resize', function(){"
    	"engine.resize();"
!

startBabylonEventLoop: scene
	"// run the render loop"
	"engine.runRenderLoop(function(){"
    "scene.render();"
	"});"
	engine runRenderLoop: [ scene render ].
	"// the canvas/window resize event handler"
	"window.addEventListener('resize', function(){"
    	"engine.resize();"
! !

!Amber3d methodsFor: 'starting'!

augmentPage    
	'#load-babylonjs' asJQuery click: [ self doInitializeBabylon ]
! !

!Amber3d class methodsFor: 'starting'!

start
	self new augmentPage
! !

