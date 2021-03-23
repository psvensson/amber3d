define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Amber3d");
$pkg.imports = ["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-amber3d"};

$core.addClass("Amber3d", $globals.Object, "Amber3d");
$core.setSlots($globals.Amber3d, ["engine", "canvas", "scene"]);
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage    \x0a\x09'#load-babylonjs' asJQuery click: [ self doInitializeBabylon ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["click:", "asJQuery", "doInitializeBabylon"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#load-babylonjs"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._doInitializeBabylon();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "createGround:",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["s"],
source: "createGround: s\x0a\x09| ground greenMat smat |\x0a\x09\x22// Create a built-in ground shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable\x22\x0a    \x22var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);\x22\x0a\x09smat := self sampleBumpMap: s.\x0a\x09-5 to: 5 do: [:y |\x0a\x09\x09-5 to: 5 do: [:x |\x0a\x09\x09ground := BABYLON MeshBuilder provided CreateGround: 'ground' valueWithPossibleArguments: {6 . 6 . 2 . s . false} . \x0a\x09\x09\x22ground scaling: (BABYLON Vector3 newValue: 10 value: 10 value: 10).\x22\x0a\x09\x09ground position \x0a\x09\x09\x09x: x; \x0a\x09\x09\x09y: 0; \x0a\x09\x09\x09z: y.\x0a\x09\x09ground material: smat.\x0a\x09]].\x0a\x09",
referencedClasses: ["BABYLON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sampleBumpMap:", "to:do:", "CreateGround:valueWithPossibleArguments:", "provided", "MeshBuilder", "x:", "position", "y:", "z:", "material:"]
}, function ($methodClass){ return function (s){
var self=this,$self=this;
var ground,greenMat,smat;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
smat=$self._sampleBumpMap_(s);
[(-5)._to_do_((5),(function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (-5)._to_do_((5),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
ground=$recv($recv($recv($globals.BABYLON)._MeshBuilder())._provided())._CreateGround_valueWithPossibleArguments_("ground",[(6),(6),(2),s,false]);
$1=$recv(ground)._position();
$recv($1)._x_(x);
$recv($1)._y_((0));
$recv($1)._z_(y);
return $recv(ground)._material_(smat);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["to:do:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createGround:",{s:s,ground:ground,greenMat:greenMat,smat:smat})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "createScene",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createScene\x0a\x09| camera sphere ground light s greenMat smat |\x0a\x09\x22// Create a basic BJS Scene object\x22\x0a    \x22var scene = new BABYLON.Scene(engine);\x22\x0a\x09s := BABYLON Scene newValue: engine.\x0a\x09s ambientColor: (BABYLON Color3 newValue: 1 value: 1 value: 1).\x0a    \x22// Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}\x22\x0a    \x22var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);\x22\x0a\x09camera := BABYLON FreeCamera newValue: 'camera1' value: (BABYLON Vector3 newValue: 0 value: 1.7 value: -5.5) value: s.\x0a\x09 \x22// Target the camera to scene origin\x22\x0a    \x22camera.setTarget(BABYLON.Vector3.Zero());\x22\x0a\x09camera setTarget: BABYLON Vector3 provided Zero value.\x0a    \x22// Attach the camera to the canvas\x22\x0a    \x22camera.attachControl(canvas, false);\x22\x0a\x09camera attachControl: canvas value: true.\x0a    \x22// Create a basic light, aiming 0, 1, 0 - meaning, to the sky\x22\x0a    \x22var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);\x22\x0a\x09light := BABYLON HemisphericLight newValue: 'light1' value: (BABYLON Vector3 newValue: -1 value: 1 value: 0) value: s.  \x0a    self createGround: s.\x0a    \x22// Return the created scene\x22\x0a    \x22return scene;\x22\x0a\x09^ s",
referencedClasses: ["BABYLON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newValue:", "Scene", "ambientColor:", "newValue:value:value:", "Color3", "FreeCamera", "Vector3", "setTarget:", "value", "Zero", "provided", "attachControl:value:", "HemisphericLight", "createGround:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var camera,sphere,ground,light,s,greenMat,smat;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
s=$recv($recv($globals.BABYLON)._Scene())._newValue_($self.engine);
$recv(s)._ambientColor_([$recv($recv($globals.BABYLON)._Color3())._newValue_value_value_((1),(1),(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newValue:value:value:"]=1
//>>excludeEnd("ctx");
][0]);
camera=[$recv($recv($globals.BABYLON)._FreeCamera())._newValue_value_value_("camera1",[$recv([$recv($globals.BABYLON)._Vector3()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["Vector3"]=1
//>>excludeEnd("ctx");
][0])._newValue_value_value_((0),(1.7),(-5.5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newValue:value:value:"]=3
//>>excludeEnd("ctx");
][0],s)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newValue:value:value:"]=2
//>>excludeEnd("ctx");
][0];
$recv(camera)._setTarget_($recv($recv($recv([$recv($globals.BABYLON)._Vector3()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["Vector3"]=2
//>>excludeEnd("ctx");
][0])._provided())._Zero())._value());
$recv(camera)._attachControl_value_($self.canvas,true);
light=[$recv($recv($globals.BABYLON)._HemisphericLight())._newValue_value_value_("light1",$recv($recv($globals.BABYLON)._Vector3())._newValue_value_value_((-1),(1),(0)),s)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newValue:value:value:"]=4
//>>excludeEnd("ctx");
][0];
$self._createGround_(s);
return s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createScene",{camera:camera,sphere:sphere,ground:ground,light:light,s:s,greenMat:greenMat,smat:smat})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "doInitializeBabylon",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doInitializeBabylon\x0a\x09\x22// Get the canvas DOM element\x22\x0a\x09\x22var canvas = document.getElementById('renderCanvas');\x22\x0a\x09\x22// Load the 3D engine\x22\x0a\x09\x22var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});\x22\x0a\x0a\x09canvas := '#renderCanvas' asSilk asDomNode .\x0a\x09engine := BABYLON Engine newValue: canvas value: true value: #{'preserveDrawingBuffer' -> true . 'stencil' -> true}.\x0a\x09scene := self createScene.\x0a\x09self startBabylonEventLoop.\x0a\x09self loadMeshes",
referencedClasses: ["BABYLON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asDomNode", "asSilk", "newValue:value:value:", "Engine", "createScene", "startBabylonEventLoop", "loadMeshes"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.canvas=$recv("#renderCanvas"._asSilk())._asDomNode();
$self.engine=$recv($recv($globals.BABYLON)._Engine())._newValue_value_value_($self.canvas,true,$globals.HashedCollection._newFromPairs_(["preserveDrawingBuffer",true,"stencil",true]));
$self.scene=$self._createScene();
$self._startBabylonEventLoop();
$self._loadMeshes();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doInitializeBabylon",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "doInspectStatus",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doInspectStatus\x0a\x09(self getApi: '/status')\x0a\x09\x09then: {#json. #inspect}\x0a\x09\x09catch: [ :err | Terminal alert: err ]",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:catch:", "getApi:", "alert:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._getApi_("/status"))._then_catch_(["json","inspect"],(function(err){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Terminal)._alert_(err);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doInspectStatus",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "loadMeshes",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadMeshes\x0a\x09| promise myMesh gl |\x0a\x09\x22BABYLON.SceneLoader.ImportMeshAsync('', '/ relative path/', 'myFile').then((result) => {\x22\x0a\x09console log: 'scene is now'.\x0a\x09console dir: scene.\x0a\x09promise := (BABYLON SceneLoader provided ImportMeshAsync: 'Character' value: './' value: 'palladin7.gltf' value: scene).\x0a\x09promise then: [:result |\x0a\x09\x09console log: 'scene after import:'.\x0a\x09\x09console dir: scene.\x0a\x09\x09console log: 'result is:'.\x0a\x09\x09console dir: result.\x0a\x09\x09\x22(result meshes at: 1) position x: 20.\x22\x0a\x09\x09myMesh := scene getMeshByName: '__root__'.\x0a\x09\x09myMesh rotation: (BABYLON Vector3 newValue: 0 value: (Math PI / 8) value: 0) .\x0a\x09\x09myMesh position: (BABYLON Vector3 newValue: 0 value: 0 value: -4).\x0a\x09\x09scene stopAllAnimations.\x0a\x09\x09(result animationGroups at:3) \x0a\x09\x09\x09play;\x0a\x09\x09\x09loopAnimation: true.\x0a\x09\x09\x0a\x09]",
referencedClasses: ["BABYLON", "Math"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["log:", "dir:", "ImportMeshAsync:value:value:value:", "provided", "SceneLoader", "then:", "getMeshByName:", "rotation:", "newValue:value:value:", "Vector3", "/", "PI", "position:", "stopAllAnimations", "play", "at:", "animationGroups", "loopAnimation:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var promise,myMesh,gl;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
[$recv(console)._log_("scene is now")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["log:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(console)._dir_($self.scene)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dir:"]=1
//>>excludeEnd("ctx");
][0];
promise=$recv($recv($recv($globals.BABYLON)._SceneLoader())._provided())._ImportMeshAsync_value_value_value_("Character","./","palladin7.gltf",$self.scene);
$recv(promise)._then_((function(result){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(console)._log_("scene after import:")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["log:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(console)._dir_($self.scene)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["dir:"]=2
//>>excludeEnd("ctx");
][0];
$recv(console)._log_("result is:");
$recv(console)._dir_(result);
myMesh=$recv($self.scene)._getMeshByName_("__root__");
$recv(myMesh)._rotation_([$recv([$recv($globals.BABYLON)._Vector3()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["Vector3"]=1
//>>excludeEnd("ctx");
][0])._newValue_value_value_((0),$recv($recv($globals.Math)._PI()).__slash((8)),(0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["newValue:value:value:"]=1
//>>excludeEnd("ctx");
][0]);
$recv(myMesh)._position_($recv($recv($globals.BABYLON)._Vector3())._newValue_value_value_((0),(0),(-4)));
$recv($self.scene)._stopAllAnimations();
$1=$recv($recv(result)._animationGroups())._at_((3));
$recv($1)._play();
return $recv($1)._loopAnimation_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({result:result},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadMeshes",{promise:promise,myMesh:myMesh,gl:gl})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "sampleBumpMap:",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["s"],
source: "sampleBumpMap: s\x0a\x09| mat |\x0a\x09\x0a\x09mat := BABYLON StandardMaterial newValue: 'mat1' value: s.\x0a\x09mat diffuseTexture: (BABYLON Texture newValue: 'http://i.imgur.com/Wk1cGEq.png' value: s).\x0a\x09mat bumpTexture: (BABYLON Texture newValue: 'http://i.imgur.com/wGyk6os.png' value: s).\x0a\x09^ mat",
referencedClasses: ["BABYLON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newValue:value:", "StandardMaterial", "diffuseTexture:", "Texture", "bumpTexture:"]
}, function ($methodClass){ return function (s){
var self=this,$self=this;
var mat;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
mat=[$recv($recv($globals.BABYLON)._StandardMaterial())._newValue_value_("mat1",s)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newValue:value:"]=1
//>>excludeEnd("ctx");
][0];
$recv(mat)._diffuseTexture_([$recv([$recv($globals.BABYLON)._Texture()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["Texture"]=1
//>>excludeEnd("ctx");
][0])._newValue_value_("http://i.imgur.com/Wk1cGEq.png",s)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newValue:value:"]=2
//>>excludeEnd("ctx");
][0]);
$recv(mat)._bumpTexture_($recv($recv($globals.BABYLON)._Texture())._newValue_value_("http://i.imgur.com/wGyk6os.png",s));
return mat;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sampleBumpMap:",{s:s,mat:mat})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "startBabylonEventLoop",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startBabylonEventLoop\x09\x0a\x09engine runRenderLoop: [ scene render ].\x0a\x09\x22// the canvas/window resize event handler\x22\x0a\x09\x22window.addEventListener('resize', function(){\x22\x0a    \x09\x22engine.resize();\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["runRenderLoop:", "render"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.engine)._runRenderLoop_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.scene)._render();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startBabylonEventLoop",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "startBabylonEventLoop:",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["scene"],
source: "startBabylonEventLoop: scene\x0a\x09\x22// run the render loop\x22\x0a\x09\x22engine.runRenderLoop(function(){\x22\x0a    \x22scene.render();\x22\x0a\x09\x22});\x22\x0a\x09engine runRenderLoop: [ scene render ].\x0a\x09\x22// the canvas/window resize event handler\x22\x0a\x09\x22window.addEventListener('resize', function(){\x22\x0a    \x09\x22engine.resize();\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["runRenderLoop:", "render"]
}, function ($methodClass){ return function (scene){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.engine)._runRenderLoop_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(scene)._render();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startBabylonEventLoop:",{scene:scene})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);


$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["augmentPage", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d.a$cls);

});
