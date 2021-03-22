Smalltalk createPackage: 'Amber3d'!
(Smalltalk packageAt: 'Amber3d' ifAbsent: [ self error: 'Package not created: Amber3d' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #Amber3d
	slots: {#engine. #canvas}
	package: 'Amber3d'!

!Amber3d methodsFor: 'action'!

alert: aString after: aNumberOfMilliseconds
	[ Terminal alert: aString ] valueWithTimeout: aNumberOfMilliseconds
!

createScene
	| scene camera sphere ground light |
	"// Create a basic BJS Scene object"
    "var scene = new BABYLON.Scene(engine);"
	scene := BABYLON Scene newValue: engine.
    "// Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}"
    "var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);"
	camera := BABYLON FreeCamera newValue: 'camera1' value: (BABYLON Vector3 newValue: 0 value: 5 value: -10) value: scene.
	 "// Target the camera to scene origin"
    "camera.setTarget(BABYLON.Vector3.Zero());"
	camera setTarget: BABYLON Vector3 provided Zero value.
    "// Attach the camera to the canvas"
    "camera.attachControl(canvas, false);"
	camera attachControl: canvas value: false.
    "// Create a basic light, aiming 0, 1, 0 - meaning, to the sky"
    "var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);"
	light := BABYLON HemisphericLight newValue: 'light1' value: (BABYLON Vector3 newValue: 0 value: 1 value: 0) value: scene.
    "// Create a built-in sphere shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation"
    "var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);"
	sphere := BABYLON Mesh provided CreateSphere newWithValues: {'sphere1'. 16 . 2 . scene . false . (BABYLON Mesh provided FRONTSIDE) }.
    "// Move the sphere upward 1/2 of its height"
    "sphere.position.y = 1;"
	sphere position y: 1.
    "// Create a built-in ground shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable"
    "var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);"
	ground := BABYLON Mesh provided CreateGround: 'ground1' valueWithPossibleArguments: {6 . 6 . 2. scene. false} . 
    "// Return the created scene"
    "return scene;"
	^ scene
!

doAmberWith
	'#output-list' asBrush with: [ :html | html li: 'Amber Web #with: added me!!' ]
!

doConsoleLog
	| greeting target |
	greeting := 'Hello'.
	target := 'world'.
	console log: #{ #greeting -> greeting. #target -> target. #callback -> [ console log: greeting, ', ', target, '!!' ] }
!

doInitializeBabylon
	"// Get the canvas DOM element"
	"var canvas = document.getElementById('renderCanvas');"
	"// Load the 3D engine"
	"var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});"

	canvas := '#renderCanvas' asSilk asDomNode .
	engine := BABYLON Engine newValue: canvas value: true value: #{'preserveDrawingBuffer' -> true . 'stencil' -> true}.
!

doInspectStatus
	(self getApi: '/status')
		then: {#json. #inspect}
		catch: [ :err | Terminal alert: err ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
!

startBabylonEventLoop
	"// run the render loop"
	"engine.runRenderLoop(function(){"
    "scene.render();"
	"});"
	"engine runRenderLoop: [ scene render ]."
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

!Amber3d methodsFor: 'backend'!

endpoint
	"Return something like 'https://<char mess>.execute-api.eu-central-1.amazonaws.com/default'"
	^ self error: 'Not yet implemented'
!

getApi: path
	^ Platform fetch: self endpoint, path
! !

!Amber3d methodsFor: 'starting'!

augmentPage
    '#lambda-status' asSilk on: #click bind: [ self doInspectStatus ].
	'#console-log' asSilk on: #click bind: [ self doConsoleLog ].
	'#timeout-alert' asSilk on: #click bind: [ self alert: 'REMINDER!!' after: 5000 ].
	'#amber-with' asBrush onClick: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ 
		| scene |
		self doInitializeBabylon.
		scene := self createScene.
		self startBabylonEventLoop: scene]
! !

!Amber3d class methodsFor: 'starting'!

start
	self new augmentPage
! !

