(function(){
  var API_VERSION, JAR_FILE, PROJECT_URL, java, root, ClassCache, i$, ref$, len$, name, replace$ = ''.replace;
  API_VERSION = '1.0.2';
  JAR_FILE = __dirname + "/ext/sikuli-api-" + API_VERSION + "-standalone.jar";
  PROJECT_URL = 'https://code.google.com/p/sikuli-api/';
  if (!require('fs').existsSync(JAR_FILE)) {
    throw "Error: Please download " + JAR_FILE + " from " + PROJECT_URL + " before requiring this module.";
  }
  java = require('java');
  java.classpath.push(JAR_FILE);
  root = 'org.sikuli.';
  ClassCache = {};
  for (i$ = 0, len$ = (ref$ = ClassList()).length; i$ < len$; ++i$) {
    name = ref$[i$];
    if (/Logger$/.exec(name)) {
      continue;
    }
    (fn$.call(this, replace$.call(name, /^.*\./, ''), /^api\./.exec(name) ? root + "" + name : name, name));
  }
  exports.java = java;
  function ClassList(){
    return ['java.net.URL', 'api.API', 'api.APILogger', 'api.AbstractScreenRegion', 'api.ColorImageTarget', 'api.DefaultLogger', 'api.DefaultScreenLocation', 'api.DefaultScreenRegion', 'api.DefaultTarget', 'api.DesktopScreenRegion', 'api.FourCornerModel', 'api.ImageTarget', 'api.JpegImagesToMovie', 'api.ModelPart', 'api.MultiStateTarget', 'api.Relative', 'api.Screen', 'api.ScreenLocation', 'api.ScreenRegion', 'api.ScreenRegionImageLogger', 'api.ScreenRegionRecorder', 'api.SikuliRuntimeException', 'api.StdoutLogger', 'api.StyledRectangleTarget', 'api.Target', 'api.TextImageGenerator', 'api.TextTarget', 'api.VisualModel', 'api.VisualModelFinder', 'api.event.EventDetectionTask', 'api.event.StateChangeEvent', 'api.event.StateChangeEventDetectionTask', 'api.event.StateChangeListener', 'api.event.TargetEvent', 'api.event.TargetEventDetectionTask', 'api.event.TargetEventListener', 'api.event.VisualEventListener', 'api.event.VisualEventManager', 'api.remote.Remote', 'api.remote.SikuliRemote', 'api.remote.client', 'api.remote.client.AbstractRemoteMethod', 'api.remote.client.ConverterUtil', 'api.remote.client.JsonToScreenRegionConverter', 'api.remote.client.RemoteKeyboard', 'api.remote.client.RemoteMethod', 'api.remote.client.RemoteMethodConfig', 'api.remote.client.RemoteMouse', 'api.remote.client.RemoteScreen', 'api.remote.client.RemoteScreenRegion', 'api.remote.client.RemoteSikuliException', 'api.remote.client.SikuliHttpCommandExecutor', 'api.remote.server.MimeType', 'api.remote.server.SessionCleaner', 'api.remote.server.SikuliRemoteConfig', 'api.remote.server.SikuliServer', 'api.remote.server.SikuliServlet', 'api.robot.Env', 'api.robot.Key', 'api.robot.KeyModifier', 'api.robot.Keyboard', 'api.robot.Mouse', 'api.robot.OS', 'api.robot.desktop', 'api.robot.desktop.AWTDesktop', 'api.robot.desktop.AWTMouse', 'api.robot.desktop.AWTRobot', 'api.robot.desktop.Animator', 'api.robot.desktop.Clipboard', 'api.robot.desktop.DesktopKeyboard', 'api.robot.desktop.DesktopMouse', 'api.robot.desktop.DesktopScreen', 'api.robot.desktop.LinearAnimator', 'api.robot.desktop.LinearInterpolation', 'api.robot.desktop.OutQuarticEase', 'api.robot.desktop.PulseAnimator', 'api.robot.desktop.QuarticEase', 'api.robot.desktop.StopExtention', 'api.robot.desktop.TimeBasedAnimator', 'api.robot.desktop.TimeValueFunction', 'api.visual.BoxElement', 'api.visual.BoxOverlay', 'api.visual.CircleOverlay', 'api.visual.DesktopDrawingCanvas', 'api.visual.DrawingCanvas', 'api.visual.Element', 'api.visual.ImageOverlay', 'api.visual.ImageViewer', 'api.visual.LabelElement', 'api.visual.LabelOverlay', 'api.visual.PNodeFactory', 'api.visual.ScreenDisplayable', 'api.visual.ScreenOverlayWindow', 'api.visual.ScreenPainter', 'api.visual.ScreenRegionCanvas'];
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
