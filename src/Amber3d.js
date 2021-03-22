define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Amber3d");
$pkg.imports = ["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-amber3d"};

$core.addClass("Amber3d", $globals.Object, "Amber3d");
$core.setSlots($globals.Amber3d, ["engine", "canvas"]);
$core.addMethod(
$core.method({
selector: "alert:after:",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aNumberOfMilliseconds"],
source: "alert: aString after: aNumberOfMilliseconds\x0a\x09[ Terminal alert: aString ] valueWithTimeout: aNumberOfMilliseconds",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithTimeout:", "alert:"]
}, function ($methodClass){ return function (aString,aNumberOfMilliseconds){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Terminal)._alert_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_(aNumberOfMilliseconds);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alert:after:",{aString:aString,aNumberOfMilliseconds:aNumberOfMilliseconds})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a    '#lambda-status' asSilk on: #click bind: [ self doInspectStatus ].\x0a\x09'#console-log' asSilk on: #click bind: [ self doConsoleLog ].\x0a\x09'#timeout-alert' asSilk on: #click bind: [ self alert: 'REMINDER!' after: 5000 ].\x0a\x09'#amber-with' asBrush onClick: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ \x0a\x09\x09| scene |\x0a\x09\x09self doInitializeBabylon.\x0a\x09\x09scene := self createScene.\x0a\x09\x09self startBabylonEventLoop: scene]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:bind:", "asSilk", "doInspectStatus", "doConsoleLog", "alert:after:", "onClick:", "asBrush", "doAmberWith", "doSilkTAG", "click:", "asJQuery", "doInitializeBabylon", "createScene", "startBabylonEventLoop:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(["#lambda-status"._asSilk()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asSilk"]=1
//>>excludeEnd("ctx");
][0])._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._doInspectStatus();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:bind:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(["#console-log"._asSilk()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asSilk"]=2
//>>excludeEnd("ctx");
][0])._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._doConsoleLog();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:bind:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(["#timeout-alert"._asSilk()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asSilk"]=3
//>>excludeEnd("ctx");
][0])._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._alert_after_("REMINDER!",(5000));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:bind:"]=3
//>>excludeEnd("ctx");
][0];
$recv("#amber-with"._asBrush())._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._doAmberWith();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$recv("#silk-tag"._asSilk())._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._doSilkTAG();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
$recv("#jquery-append"._asJQuery())._click_((function(){
var scene;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._doInitializeBabylon();
scene=$self._createScene();
return $self._startBabylonEventLoop_(scene);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({scene:scene},$ctx1,6)});
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
selector: "createScene",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createScene\x0a\x09| scene camera sphere ground light |\x0a\x09\x22// Create a basic BJS Scene object\x22\x0a    \x22var scene = new BABYLON.Scene(engine);\x22\x0a\x09scene := BABYLON Scene newValue: engine.\x0a    \x22// Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}\x22\x0a    \x22var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);\x22\x0a\x09camera := BABYLON FreeCamera newValue: 'camera1' value: (BABYLON Vector3 newValue: 0 value: 5 value: -10) value: scene.\x0a\x09 \x22// Target the camera to scene origin\x22\x0a    \x22camera.setTarget(BABYLON.Vector3.Zero());\x22\x0a\x09camera setTarget: BABYLON Vector3 provided Zero value.\x0a    \x22// Attach the camera to the canvas\x22\x0a    \x22camera.attachControl(canvas, false);\x22\x0a\x09camera attachControl: canvas value: false.\x0a    \x22// Create a basic light, aiming 0, 1, 0 - meaning, to the sky\x22\x0a    \x22var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);\x22\x0a\x09light := BABYLON HemisphericLight newValue: 'light1' value: (BABYLON Vector3 newValue: 0 value: 1 value: 0) value: scene.\x0a    \x22// Create a built-in sphere shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation\x22\x0a    \x22var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);\x22\x0a\x09sphere := BABYLON Mesh provided CreateSphere newWithValues: {'sphere1'. 16 . 2 . scene . false . (BABYLON Mesh provided FRONTSIDE) }.\x0a    \x22// Move the sphere upward 1/2 of its height\x22\x0a    \x22sphere.position.y = 1;\x22\x0a\x09sphere position y: 1.\x0a    \x22// Create a built-in ground shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable\x22\x0a    \x22var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);\x22\x0a\x09ground := BABYLON Mesh provided CreateGround: 'ground1' valueWithPossibleArguments: {6 . 6 . 2. scene. false} . \x0a    \x22// Return the created scene\x22\x0a    \x22return scene;\x22\x0a\x09^ scene",
referencedClasses: ["BABYLON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newValue:", "Scene", "newValue:value:value:", "FreeCamera", "Vector3", "setTarget:", "value", "Zero", "provided", "attachControl:value:", "HemisphericLight", "newWithValues:", "CreateSphere", "Mesh", "FRONTSIDE", "y:", "position", "CreateGround:valueWithPossibleArguments:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var scene,camera,sphere,ground,light;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
scene=$recv($recv($globals.BABYLON)._Scene())._newValue_($self.engine);
camera=[$recv($recv($globals.BABYLON)._FreeCamera())._newValue_value_value_("camera1",[$recv([$recv($globals.BABYLON)._Vector3()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["Vector3"]=1
//>>excludeEnd("ctx");
][0])._newValue_value_value_((0),(5),(-10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newValue:value:value:"]=2
//>>excludeEnd("ctx");
][0],scene)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newValue:value:value:"]=1
//>>excludeEnd("ctx");
][0];
$recv(camera)._setTarget_($recv($recv([$recv([$recv($globals.BABYLON)._Vector3()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["Vector3"]=2
//>>excludeEnd("ctx");
][0])._provided()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["provided"]=1
//>>excludeEnd("ctx");
][0])._Zero())._value());
$recv(camera)._attachControl_value_($self.canvas,false);
light=[$recv($recv($globals.BABYLON)._HemisphericLight())._newValue_value_value_("light1",$recv($recv($globals.BABYLON)._Vector3())._newValue_value_value_((0),(1),(0)),scene)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["newValue:value:value:"]=3
//>>excludeEnd("ctx");
][0];
sphere=$recv($recv([$recv([$recv($globals.BABYLON)._Mesh()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["Mesh"]=1
//>>excludeEnd("ctx");
][0])._provided()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["provided"]=2
//>>excludeEnd("ctx");
][0])._CreateSphere())._newWithValues_(["sphere1",(16),(2),scene,false,$recv([$recv([$recv($globals.BABYLON)._Mesh()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["Mesh"]=2
//>>excludeEnd("ctx");
][0])._provided()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["provided"]=3
//>>excludeEnd("ctx");
][0])._FRONTSIDE()]);
$recv($recv(sphere)._position())._y_((1));
ground=$recv($recv($recv($globals.BABYLON)._Mesh())._provided())._CreateGround_valueWithPossibleArguments_("ground1",[(6),(6),(2),scene,false]);
return scene;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createScene",{scene:scene,camera:camera,sphere:sphere,ground:ground,light:light})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09'#output-list' asBrush with: [ :html | html li: 'Amber Web #with: added me!' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:", "asBrush", "li:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asBrush())._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._li_("Amber Web #with: added me!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "doConsoleLog",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doConsoleLog\x0a\x09| greeting target |\x0a\x09greeting := 'Hello'.\x0a\x09target := 'world'.\x0a\x09console log: #{ #greeting -> greeting. #target -> target. #callback -> [ console log: greeting, ', ', target, '!' ] }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["log:", ","]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var greeting,target;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
greeting="Hello";
target="world";
[$recv(console)._log_($globals.HashedCollection._newFromPairs_(["greeting",greeting,"target",target,"callback",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(console)._log_([$recv([$recv($recv(greeting).__comma(", ")).__comma(target)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma("!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["log:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doConsoleLog",{greeting:greeting,target:target})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "doInitializeBabylon",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doInitializeBabylon\x0a\x09\x22// Get the canvas DOM element\x22\x0a\x09\x22var canvas = document.getElementById('renderCanvas');\x22\x0a\x09\x22// Load the 3D engine\x22\x0a\x09\x22var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});\x22\x0a\x0a\x09canvas := '#renderCanvas' asSilk asDomNode .\x0a\x09engine := BABYLON Engine newValue: canvas value: true value: #{'preserveDrawingBuffer' -> true . 'stencil' -> true}.",
referencedClasses: ["BABYLON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asDomNode", "asSilk", "newValue:value:value:", "Engine"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.canvas=$recv("#renderCanvas"._asSilk())._asDomNode();
$self.engine=$recv($recv($globals.BABYLON)._Engine())._newValue_value_value_($self.canvas,true,$globals.HashedCollection._newFromPairs_(["preserveDrawingBuffer",true,"stencil",true]));
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
selector: "doJQueryAppend",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["append:", "asJQuery"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "doSilkTAG",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["LI:", "asSilk"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asSilk())._LI_("Silk TAG: added me!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "endpoint",
protocol: "backend",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endpoint\x0a\x09\x22Return something like 'https://<char mess>.execute-api.eu-central-1.amazonaws.com/default'\x22\x0a\x09^ self error: 'Not yet implemented'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._error_("Not yet implemented");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endpoint",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "getApi:",
protocol: "backend",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path"],
source: "getApi: path\x0a\x09^ Platform fetch: self endpoint, path",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fetch:", ",", "endpoint"]
}, function ($methodClass){ return function (path){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Platform)._fetch_($recv($self._endpoint()).__comma(path));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getApi:",{path:path})});
//>>excludeEnd("ctx");
}; }),
$globals.Amber3d);

$core.addMethod(
$core.method({
selector: "startBabylonEventLoop",
protocol: "action",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startBabylonEventLoop\x0a\x09\x22// run the render loop\x22\x0a\x09\x22engine.runRenderLoop(function(){\x22\x0a    \x22scene.render();\x22\x0a\x09\x22});\x22\x0a\x09\x22engine runRenderLoop: [ scene render ].\x22\x0a\x09\x22// the canvas/window resize event handler\x22\x0a\x09\x22window.addEventListener('resize', function(){\x22\x0a    \x09\x22engine.resize();\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

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
