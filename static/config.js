System.config({
  baseURL: "/static",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "bundles/app.bundle.js": [
      "js/app.jsx!github:floatdrop/plugin-jsx@1.2.1.js",
      "js/hello-hoboken.jsx!github:floatdrop/plugin-jsx@1.2.1.js",
      "js/bus-schedules.jsx!github:floatdrop/plugin-jsx@1.2.1.js",
      "js/bus-schedule.jsx!github:floatdrop/plugin-jsx@1.2.1.js",
      "npm:react@0.14.7.js",
      "npm:react@0.14.7/react.js",
      "npm:react@0.14.7/lib/React.js",
      "npm:react@0.14.7/lib/deprecated.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:react@0.14.7/lib/ReactIsomorphic.js",
      "npm:react@0.14.7/lib/onlyChild.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/canDefineProperty.js",
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/ReactVersion.js",
      "npm:react@0.14.7/lib/ReactPropTypes.js",
      "npm:react@0.14.7/lib/getIteratorFn.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames.js",
      "npm:react@0.14.7/lib/ReactElementValidator.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.6.1/lib/keyMirror.js",
      "npm:react@0.14.7/lib/ReactDOMFactories.js",
      "npm:fbjs@0.6.1/lib/mapObject.js",
      "npm:react@0.14.7/lib/ReactClass.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:react@0.14.7/lib/ReactNoopUpdateQueue.js",
      "npm:react@0.14.7/lib/ReactComponent.js",
      "npm:react@0.14.7/lib/ReactChildren.js",
      "npm:react@0.14.7/lib/traverseAllChildren.js",
      "npm:react@0.14.7/lib/ReactInstanceHandles.js",
      "npm:react@0.14.7/lib/ReactRootIndex.js",
      "npm:react@0.14.7/lib/PooledClass.js",
      "npm:react@0.14.7/lib/ReactDOMServer.js",
      "npm:react@0.14.7/lib/ReactServerRendering.js",
      "npm:react@0.14.7/lib/instantiateReactComponent.js",
      "npm:react@0.14.7/lib/ReactNativeComponent.js",
      "npm:react@0.14.7/lib/ReactEmptyComponent.js",
      "npm:react@0.14.7/lib/ReactReconciler.js",
      "npm:react@0.14.7/lib/ReactRef.js",
      "npm:react@0.14.7/lib/ReactOwner.js",
      "npm:react@0.14.7/lib/ReactEmptyComponentRegistry.js",
      "npm:react@0.14.7/lib/ReactCompositeComponent.js",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent.js",
      "npm:react@0.14.7/lib/ReactUpdateQueue.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/Transaction.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:react@0.14.7/lib/CallbackQueue.js",
      "npm:react@0.14.7/lib/ReactInstanceMap.js",
      "npm:react@0.14.7/lib/ReactComponentEnvironment.js",
      "npm:react@0.14.7/lib/ReactServerRenderingTransaction.js",
      "npm:react@0.14.7/lib/ReactServerBatchingStrategy.js",
      "npm:react@0.14.7/lib/ReactMarkupChecksum.js",
      "npm:react@0.14.7/lib/adler32.js",
      "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@0.14.7/lib/ReactDefaultInjection.js",
      "npm:react@0.14.7/lib/ReactDefaultPerf.js",
      "npm:fbjs@0.6.1/lib/performanceNow.js",
      "npm:fbjs@0.6.1/lib/performance.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/validateDOMNesting.js",
      "npm:react@0.14.7/lib/setInnerHTML.js",
      "npm:fbjs@0.6.1/lib/containsNode.js",
      "npm:fbjs@0.6.1/lib/isTextNode.js",
      "npm:fbjs@0.6.1/lib/isNode.js",
      "npm:react@0.14.7/lib/ReactDOMFeatureFlags.js",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter.js",
      "npm:react@0.14.7/lib/isEventSupported.js",
      "npm:react@0.14.7/lib/ViewportMetrics.js",
      "npm:react@0.14.7/lib/ReactEventEmitterMixin.js",
      "npm:react@0.14.7/lib/EventPluginHub.js",
      "npm:react@0.14.7/lib/forEachAccumulated.js",
      "npm:react@0.14.7/lib/accumulateInto.js",
      "npm:react@0.14.7/lib/ReactErrorUtils.js",
      "npm:react@0.14.7/lib/EventPluginUtils.js",
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:react@0.14.7/lib/EventPluginRegistry.js",
      "npm:react@0.14.7/lib/DOMProperty.js",
      "npm:react@0.14.7/lib/ReactDefaultPerfAnalysis.js",
      "npm:react@0.14.7/lib/SVGDOMPropertyConfig.js",
      "npm:react@0.14.7/lib/SimpleEventPlugin.js",
      "npm:react@0.14.7/lib/getEventCharCode.js",
      "npm:react@0.14.7/lib/SyntheticWheelEvent.js",
      "npm:react@0.14.7/lib/SyntheticMouseEvent.js",
      "npm:react@0.14.7/lib/getEventModifierState.js",
      "npm:react@0.14.7/lib/SyntheticUIEvent.js",
      "npm:react@0.14.7/lib/getEventTarget.js",
      "npm:react@0.14.7/lib/SyntheticEvent.js",
      "npm:react@0.14.7/lib/SyntheticTouchEvent.js",
      "npm:react@0.14.7/lib/SyntheticDragEvent.js",
      "npm:react@0.14.7/lib/SyntheticKeyboardEvent.js",
      "npm:react@0.14.7/lib/getEventKey.js",
      "npm:react@0.14.7/lib/SyntheticFocusEvent.js",
      "npm:react@0.14.7/lib/SyntheticClipboardEvent.js",
      "npm:react@0.14.7/lib/EventPropagators.js",
      "npm:fbjs@0.6.1/lib/EventListener.js",
      "npm:react@0.14.7/lib/ServerReactRootIndex.js",
      "npm:react@0.14.7/lib/SelectEventPlugin.js",
      "npm:fbjs@0.6.1/lib/shallowEqual.js",
      "npm:react@0.14.7/lib/isTextInputElement.js",
      "npm:fbjs@0.6.1/lib/getActiveElement.js",
      "npm:react@0.14.7/lib/ReactInputSelection.js",
      "npm:fbjs@0.6.1/lib/focusNode.js",
      "npm:react@0.14.7/lib/ReactDOMSelection.js",
      "npm:react@0.14.7/lib/getTextContentAccessor.js",
      "npm:react@0.14.7/lib/getNodeForCharacterOffset.js",
      "npm:react@0.14.7/lib/ReactReconcileTransaction.js",
      "npm:react@0.14.7/lib/ReactInjection.js",
      "npm:react@0.14.7/lib/ReactEventListener.js",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition.js",
      "npm:react@0.14.7/lib/ReactDOMTextComponent.js",
      "npm:react@0.14.7/lib/setTextContent.js",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser.js",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@0.14.7/lib/ReactDOMIDOperations.js",
      "npm:react@0.14.7/lib/DOMPropertyOperations.js",
      "npm:react@0.14.7/lib/quoteAttributeValueForBrowser.js",
      "npm:react@0.14.7/lib/DOMChildrenOperations.js",
      "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@0.14.7/lib/Danger.js",
      "npm:fbjs@0.6.1/lib/getMarkupWrap.js",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed.js",
      "npm:fbjs@0.6.1/lib/toArray.js",
      "npm:react@0.14.7/lib/ReactDOMComponent.js",
      "npm:react@0.14.7/lib/ReactMultiChild.js",
      "npm:react@0.14.7/lib/flattenChildren.js",
      "npm:react@0.14.7/lib/ReactChildReconciler.js",
      "npm:react@0.14.7/lib/ReactDOMTextarea.js",
      "npm:react@0.14.7/lib/LinkedValueUtils.js",
      "npm:react@0.14.7/lib/ReactDOMSelect.js",
      "npm:react@0.14.7/lib/ReactDOMOption.js",
      "npm:react@0.14.7/lib/ReactDOMInput.js",
      "npm:react@0.14.7/lib/ReactDOMButton.js",
      "npm:react@0.14.7/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly.js",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName.js",
      "npm:fbjs@0.6.1/lib/hyphenate.js",
      "npm:react@0.14.7/lib/dangerousStyleValue.js",
      "npm:react@0.14.7/lib/CSSProperty.js",
      "npm:fbjs@0.6.1/lib/camelizeStyleName.js",
      "npm:fbjs@0.6.1/lib/camelize.js",
      "npm:react@0.14.7/lib/AutoFocusUtils.js",
      "npm:react@0.14.7/lib/findDOMNode.js",
      "npm:react@0.14.7/lib/ReactBrowserComponentMixin.js",
      "npm:react@0.14.7/lib/HTMLDOMPropertyConfig.js",
      "npm:react@0.14.7/lib/EnterLeaveEventPlugin.js",
      "npm:react@0.14.7/lib/DefaultEventPluginOrder.js",
      "npm:react@0.14.7/lib/ClientReactRootIndex.js",
      "npm:react@0.14.7/lib/ChangeEventPlugin.js",
      "npm:react@0.14.7/lib/BeforeInputEventPlugin.js",
      "npm:react@0.14.7/lib/SyntheticInputEvent.js",
      "npm:react@0.14.7/lib/SyntheticCompositionEvent.js",
      "npm:react@0.14.7/lib/FallbackCompositionState.js",
      "npm:react@0.14.7/lib/ReactDOM.js",
      "npm:react@0.14.7/lib/renderSubtreeIntoContainer.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.6/library/fn/object/define-property.js",
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.6/library/modules/$.set-proto.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js",
      "npm:core-js@1.2.6/library/modules/$.a-function.js",
      "npm:core-js@1.2.6/library/modules/$.an-object.js",
      "npm:core-js@1.2.6/library/modules/$.is-object.js",
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:core-js@1.2.6/library/modules/$.global.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:core-js@1.2.6/library/fn/object/create.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.6/library/modules/$.object-sap.js",
      "npm:core-js@1.2.6/library/modules/$.fails.js",
      "npm:core-js@1.2.6/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/library/modules/$.defined.js",
      "npm:core-js@1.2.6/library/modules/$.iobject.js",
      "npm:core-js@1.2.6/library/modules/$.cof.js",
      "github:github/fetch@0.11.0.js",
      "github:github/fetch@0.11.0/fetch.js",
      "js/weather-forecast.jsx!github:floatdrop/plugin-jsx@1.2.1.js",
      "npm:react-dom@0.14.7.js",
      "npm:react-dom@0.14.7/index.js"
    ]
  },
  configFile: "config.js",

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.11.0",
    "jsx": "github:floatdrop/plugin-jsx@1.2.1",
    "react": "npm:react@0.14.7",
    "react-dom": "npm:react-dom@0.14.7",
    "github:floatdrop/plugin-jsx@1.2.1": {
      "react-tools": "npm:react-tools@0.13.3"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.1"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:brace-expansion@1.1.3": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.9.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.3.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "recast": "npm:recast@0.10.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detective@4.3.1": {
      "acorn": "npm:acorn@1.2.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.11.1",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.5.2",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.7": {
      "react": "npm:react@0.14.7"
    },
    "npm:react-tools@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.4",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.7": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.43": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.15",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
