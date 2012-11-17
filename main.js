(function(){
  var java, root, ClassCache, i$, ref$, len$, name, replace$ = ''.replace;
  java = require('java');
  java.classpath.push(__dirname + "/ext/sikuli-api-1.0.1-standalone.jar");
  if (process.platform === 'darwin') {
    java.options.push('-Djava.awt.headless=true');
  }
  root = 'org.sikuli.';
  ClassCache = {};
  for (i$ = 0, len$ = (ref$ = ClassList()).length; i$ < len$; ++i$) {
    name = ref$[i$];
    if (/Logger$/.exec(name)) {
      continue;
    }
    (fn$.call(this, replace$.call(name, /^.*\./, ''), /^api\./ ? root + "" + name : name, name));
  }
  exports.java = java;
  function ClassList(){
    return ['java.net.URL', 'api.API', 'api.APILogger', 'api.ColorImageTarget', 'api.DefaultLogger', 'api.DefaultScreenLocation', 'api.DefaultScreenRegion', 'api.DefaultTarget', 'api.DesktopScreenRegion', 'api.event.EventDetectionTask', 'api.event.StateChangeEvent', 'api.event.StateChangeEventDetectionTask', 'api.event.StateChangeListener', 'api.event.TargetEvent', 'api.event.TargetEventDetectionTask', 'api.event.TargetEventListener', 'api.event.VisualEventListener', 'api.event.VisualEventManager', 'api.FourCornerModel', 'api.ImageTarget', 'api.JpegImagesToMovie', 'api.ModelPart', 'api.MultiStateTarget', 'api.Relative', 'api.robot.desktop.Animator', 'api.robot.desktop.AWTDesktop', 'api.robot.desktop.AWTMouse', 'api.robot.desktop.AWTRobot', 'api.robot.desktop.Clipboard', 'api.robot.desktop.DesktopKeyboard', 'api.robot.desktop.DesktopMouse', 'api.robot.desktop.DesktopScreen', 'api.robot.desktop.LinearAnimator', 'api.robot.desktop.LinearInterpolation', 'api.robot.desktop.OutQuarticEase', 'api.robot.desktop.PulseAnimator', 'api.robot.desktop.QuarticEase', 'api.robot.desktop.StopExtention', 'api.robot.desktop.TimeBasedAnimator', 'api.robot.desktop.TimeValueFunction', 'api.robot.Env', 'api.robot.Key', 'api.robot.Keyboard', 'api.robot.KeyModifier', 'api.robot.Mouse', 'api.robot.OS', 'api.Screen', 'api.ScreenLocation', 'api.ScreenRegion', 'api.ScreenRegionImageLogger', 'api.ScreenRegionRecorder', 'api.StdoutLogger', 'api.StyledRectangleTarget', 'api.Target', 'api.TextImageGenerator', 'api.TextTarget', 'api.visual.BoxOverlay', 'api.visual.CircleOverlay', 'api.visual.ImageOverlay', 'api.visual.LabelOverlay', 'api.visual.ScreenOverlayWindow', 'api.visual.ScreenPainter', 'api.VisualModel', 'api.VisualModelFinder'];
  }
  function fn$(prop, path, name){
    Object.defineProperty(exports, prop, {
      get: function(){
        var ref$;
        return (ref$ = ClassCache[prop]) != null
          ? ref$
          : ClassCache[prop] = java['import'](path);
      }
    });
  }
}).call(this);
