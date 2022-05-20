"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[222],{3905:function(A,e,t){t.d(e,{Zo:function(){return s},kt:function(){return E}});var n=t(7294);function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function r(A,e){if(null==A)return{};var t,n,i=function(A,e){if(null==A)return{};var t,n,i={},o=Object.keys(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(i[t]=A[t]);return i}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(i[t]=A[t])}return i}var g=n.createContext({}),l=function(A){var e=n.useContext(g),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},s=function(A){var e=l(A.components);return n.createElement(g.Provider,{value:e},A.children)},B={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},C=n.forwardRef((function(A,e){var t=A.components,i=A.mdxType,o=A.originalType,g=A.parentName,s=r(A,["components","mdxType","originalType","parentName"]),C=l(t),E=i,I=C["".concat(g,".").concat(E)]||C[E]||B[E]||o;return t?n.createElement(I,a(a({ref:e},s),{},{components:t})):n.createElement(I,a({ref:e},s))}));function E(A,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var o=t.length,a=new Array(o);a[0]=C;var r={};for(var g in e)hasOwnProperty.call(e,g)&&(r[g]=e[g]);r.originalType=A,r.mdxType="string"==typeof A?A:i,a[1]=r;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}C.displayName="MDXCreateElement"},3186:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return r},contentTitle:function(){return g},metadata:function(){return l},toc:function(){return s},default:function(){return C}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],r={sidebar_position:1},g="\ud83d\udd0f Default examples",l={unversionedId:"examples/default-examples",id:"examples/default-examples",title:"\ud83d\udd0f Default examples",description:"We prepared a lot of examples to help you understand how we can use our library.",source:"@site/docs/examples/default-examples.md",sourceDirName:"examples",slug:"/examples/default-examples",permalink:"/react-native-notificated/docs/examples/default-examples",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/default-examples.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcab Custom transitions",permalink:"/react-native-notificated/docs/animations/custom-transitions"},next:{title:"\ud83d\udd8a\ufe0f Dark mode examples",permalink:"/react-native-notificated/docs/examples/dark-mode-examples"}},s=[{value:"How to use the <code>notify()</code>",id:"how-to-use-the-notify",children:[],level:2},{value:"How to use the <code>error()</code> and the <code>modify()</code>",id:"how-to-use-the-error-and-the-modify",children:[{value:"Pass the <code>id</code> to the <code>modify()</code> method:",id:"pass-the-id-to-the-modify-method",children:[],level:3},{value:"Pass the <code>id</code> to the <code>remove()</code> method:",id:"pass-the-id-to-the-remove-method",children:[],level:3}],level:2},{value:"Visualization of examples",id:"visualization-of-examples",children:[{value:"Success notification",id:"success-notification",children:[],level:3},{value:"Error notification",id:"error-notification",children:[],level:3},{value:"Warning notification",id:"warning-notification",children:[],level:3},{value:"Info notification",id:"info-notification",children:[],level:3},{value:"Modify notification",id:"modify-notification",children:[{value:"Before",id:"before",children:[],level:4},{value:"And after",id:"and-after",children:[],level:4}],level:3},{value:"Remove notification",id:"remove-notification",children:[{value:"Before",id:"before-1",children:[],level:4},{value:"And after ;)",id:"and-after-",children:[],level:4}],level:3}],level:2}],B={toc:s};function C(A){var e=A.components,r=(0,i.Z)(A,a);return(0,o.kt)("wrapper",(0,n.Z)({},B,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-default-examples"},"\ud83d\udd0f Default examples"),(0,o.kt)("br",null),(0,o.kt)("p",null,"We prepared a lot of examples to help you understand how we can use our library. ",(0,o.kt)("br",null),"\nFirst, let's focus on the most basic examples. It takes very little effort to make them work.",(0,o.kt)("br",null),"\nA few lines below, you will find all the code with explanations.",(0,o.kt)("br",null),"\nLet's go then!"),(0,o.kt)("h2",{id:"how-to-use-the-notify"},"How to use the ",(0,o.kt)("inlineCode",{parentName:"h2"},"notify()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react'\nimport { SafeAreaView } from 'react-native'\nimport { createNotifications, useNotificationController } from 'react-native-notification'\nimport { SuccessButton } from '../components/basicExamples/SuccessButton'\nimport { ErrorButton } from '../components/basicExamples/ErrorButton'\nimport { WarningButton } from '../components/basicExamples/WarningButton'\nimport { InfoButton } from '../components/basicExamples/InfoButton'\nimport { ModifyButton } from '../components/basicExamples/ModifyButton'\nimport { RemoveButton } from '../components/basicExamples/RemoveButton'\nimport { styles } from './styles'\n\nconst { useNotifications, NotificationsProvider } = createNotifications({\n  isNotch: true,\n})\n\nexport const DefaultExamples = () => {\n  const [id, setId] = useState('')\n  const { notify } = useNotifications()\n  const { remove, modify } = useNotificationController()\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <NotificationsProvider />\n      <SuccessButton\n        onPress={() =>\n          setId(\n            notify('success', {\n              params: {\n                description: 'This is where the toast text goes',\n                title: 'Success',\n              },\n            }).id\n          )\n        }\n      />\n      <ErrorButton\n        onPress={() =>\n          notify('error', {\n            params: {\n              description: 'This is where the toast text goes. ',\n              title: 'Error',\n            },\n          })\n        }\n      />\n      <WarningButton\n        onPress={() =>\n          notify('warning', {\n            params: {\n              description: 'This is where the toast text goes',\n              title: 'Warning',\n            },\n            config: {\n              notificationPosition: 'center',\n            },\n          })\n        }\n      />\n      <InfoButton\n        onPress={() =>\n          notify('info', {\n            params: {\n              description: 'This is where the toast text goes.',\n              title: 'Info',\n            },\n          })\n        }\n      />\n      <ModifyButton\n        onPress={() =>\n          modify(id, {\n            params: {\n              params: { id: id, title: 'Modified title', description: 'Modified description' },\n            },\n          })\n        }\n      />\n      <RemoveButton onPress={() => remove(id)} />\n    </SafeAreaView>\n  )\n}\n\n")),(0,o.kt)("p",null,"At first, we need to import everything that is necessary for our component:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"React")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," - we will explain below why we need ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," in this example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"createNotifications")," - to set the basic config and pull out our ",(0,o.kt)("inlineCode",{parentName:"p"},"notify()")," function")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useNotificationController")," - to pull out ",(0,o.kt)("inlineCode",{parentName:"p"},"remove()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"modify()")," functions (we will explain them below)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"SuccessButton")," and other buttons - are just styled ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," components which imitates our buttons:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"import React, { VFC } from 'react'\nimport { Text } from 'react-native'\nimport { styles } from '../styles'\n\ntype Props = {\nonPress: () => void\n}\n\nexport const SuccessButton: VFC<Props> = ({ onPress }) => {\n  return (\n    <Text style={[styles.text, styles.success]} onPress={onPress}>\n      Emit success\n    </Text>\n  )\n}\n")))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"When the imports are applied, we initiate ",(0,o.kt)("inlineCode",{parentName:"p"},"createNotifications")," and pick ",(0,o.kt)("inlineCode",{parentName:"p"},"useNotifications")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NotificationsProvider")," from the box.",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useNotifications")," - allows us to get access to the ",(0,o.kt)("inlineCode",{parentName:"li"},"notify()")," function"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NotificationsProvider")," - it's a wrapper, like all others providers (ContextProvider, ApolloProvider etc.). This one is necessary to allow the library to operate within the prescribed scope. What is special here, is that we don't need to wrap scope in it. We can just put it as a self-closing component, and everything that is nested in the same wrapper as our provider will get access to our notifications.")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Inside our ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultExamples")," component we initiate ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," which will hold the notification ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," for us. ",(0,o.kt)("br",null),"\nLast thing, we need to do is to unpack ",(0,o.kt)("inlineCode",{parentName:"p"},"notify()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"remove()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"modify()")," methods.",(0,o.kt)("br",null),"\nThose methods are crucial because:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"notify()")," - initiate every single notification. In the examples, we trigger it by ",(0,o.kt)("inlineCode",{parentName:"li"},"onPress"),", but of course, it can be called in every other context you need, for example, after data fetching or after successful sign-in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remove()")," - externally remove triggered notification (it's not required, in the basic usage, but worth knowing)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"modify()")," - modify triggered notification (it's not required, in the basic usage, but worth knowing)",(0,o.kt)("br",null))),(0,o.kt)("p",null,"If you need more info on how those methods works please check the ",(0,o.kt)("a",{parentName:"p",href:"/react-native-notificated/docs/basics/basic-usage"},"BASIC USAGE")," section.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"As we said above, we trigger every notification by pressing the button. All we need to pass to the ",(0,o.kt)("inlineCode",{parentName:"p"},"onPress")," event is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"() => notify('error', {\n                params: {\n                    description: 'This is where the toast text goes. ',\n                    title: 'Error',\n                },\n            })\n")),(0,o.kt)("p",null,"First argument is a notification type (",(0,o.kt)("inlineCode",{parentName:"p"},"success/error/info/warning"),") and the second is an object with settings, consisting of the two parts: ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," (check ",(0,o.kt)("a",{parentName:"p",href:"/react-native-notificated/docs/default-variants-config/props-config"},"Single Notification Config"),").",(0,o.kt)("br",null),"\nOnly description props is required, but usually, it's good to have also a title. >br/>\nOur notification has been set, and it looks like that:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error",src:t(9671).Z})),(0,o.kt)("p",null,"TADAM! Magic happens!! \ud83e\udd17"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"how-to-use-the-error-and-the-modify"},"How to use the ",(0,o.kt)("inlineCode",{parentName:"h2"},"error()")," and the ",(0,o.kt)("inlineCode",{parentName:"h2"},"modify()")),(0,o.kt)("p",null,"This is a little more complicated, but just a little (I promise!) ",(0,o.kt)("br",null)),(0,o.kt)("br",null),(0,o.kt)("p",null,"All we need to do is to get chosen notification ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," and set it in our ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),".",(0,o.kt)("br",null),"\nAs you can see in the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"() =>\n  setId(\n    notify('success', {\n      params: {\n        description: 'This is where the toast text goes',\n        title: 'Success',\n      },\n      config: {\n        notificationPosition: 'center',\n      },\n    }).id\n  )\n")),(0,o.kt)("p",null,"We just wrapped ",(0,o.kt)("inlineCode",{parentName:"p"},"notify()")," in our ",(0,o.kt)("inlineCode",{parentName:"p"},"setId")," setter, and pulled ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from the object returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"notify()"),".",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Now it's time to:"),(0,o.kt)("h3",{id:"pass-the-id-to-the-modify-method"},"Pass the ",(0,o.kt)("inlineCode",{parentName:"h3"},"id")," to the ",(0,o.kt)("inlineCode",{parentName:"h3"},"modify()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"    <ModifyButton\n        onPress={() =>\n          modify(id, {\n            params: {\n              params: { id: id, title: 'Modified title', description: 'Modified description' },\n            },\n          })\n        }\n    />\n")),(0,o.kt)("p",null,"and add new settings which will overwrite those previously set in the notification (only one extra is ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," object).",(0,o.kt)("br",null),"\nIn other words, we can easily change any notification to a completely different one. ",(0,o.kt)("br",null),"\nIn the example above we changed only the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),", but we literally can change any value described in the ",(0,o.kt)("a",{parentName:"p",href:"/react-native-notificated/docs/default-variants-config/props-config"},"Single Notification Config")," section."),(0,o.kt)("h3",{id:"pass-the-id-to-the-remove-method"},"Pass the ",(0,o.kt)("inlineCode",{parentName:"h3"},"id")," to the ",(0,o.kt)("inlineCode",{parentName:"h3"},"remove()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"<RemoveButton onPress={() => remove(id)} />\n")),(0,o.kt)("p",null,"and... that's all... ",(0,o.kt)("br",null),"\nWe can simply call ",(0,o.kt)("inlineCode",{parentName:"p"},"remove()")," method and pass ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the notification that should be manually and externally removed. ",(0,o.kt)("br",null),"\nWhy externally? Because internally (inside the notification), we have the close ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," icon.",(0,o.kt)("br",null),"\nIt's just... let's call it 'CLOSE BUTTON' you can put outside the notification."),(0,o.kt)("h2",{id:"visualization-of-examples"},"Visualization of examples"),(0,o.kt)("p",null,"Let's see the notifications we declared above:"),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"success-notification"},"Success notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Success",src:t(9141).Z})),(0,o.kt)("h3",{id:"error-notification"},"Error notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error",src:t(9671).Z})),(0,o.kt)("h3",{id:"warning-notification"},"Warning notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Warning",src:t(3850).Z})),(0,o.kt)("h3",{id:"info-notification"},"Info notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Info",src:t(2286).Z})),(0,o.kt)("h3",{id:"modify-notification"},"Modify notification"),(0,o.kt)("h4",{id:"before"},"Before"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modify",src:t(9141).Z})),(0,o.kt)("h4",{id:"and-after"},"And after"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modify",src:t(9141).Z})),(0,o.kt)("h3",{id:"remove-notification"},"Remove notification"),(0,o.kt)("h4",{id:"before-1"},"Before"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modify",src:t(9141).Z})),(0,o.kt)("h4",{id:"and-after-"},"And after ;)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modify",src:t(6225).Z})))}C.isMDXComponent=!0},9141:function(A,e,t){e.Z=t.p+"assets/images/border-d40e328e8fc7581aa6c0499b55bd68e9.png"},9671:function(A,e,t){e.Z=t.p+"assets/images/error-d01e51989a997747e5c6faec756e1ddb.png"},2286:function(A,e,t){e.Z=t.p+"assets/images/info-dca0aa128106f93350a83b2bfaf8c0a2.png"},6225:function(A,e){e.Z="data:image/png;base64,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ICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjI4PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjc3NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoNmyHyAAAAHGlET1QAAAACAAAAAAAAAHIAAAAoAAAAcgAAAHIAAAcMkDVrsQAABthJREFUeAHs20ERAzEMBEGZP1sR8E0dDXcYpDOfLStnd+/4ECBAgAABAgQIECDwtMAxDJ7+/X15AgQIECBAgAABAr+AYSAEAgQIECBAgAABAgTGMBABAQIECBAgQIAAAQKGgQYIECBAgAABAgQIEBjDQAQECBAgQIAAAQIECBgGGiBAgAABAgQIECBAIAH/MZABAQIECBAgQIAAAQKGgQYIECBAgAABAgQIEPBioAECBAgQIECAAAECBBJwSiQDAgQIECBAgAABAgQMAw0QIECAAAECBAgQIODFQAMECBAgQIAAAQIECCTglEgGBAgQIECAAAECBAgYBhogQIAAAQIECBAgQMCLgQYIECBAgAABAgQIEEjAKZEMCBAgQIAAAQIECBAwDDRAgAABAgQIECBAgIAXAw0QIECAAAECBAgQIJCAUyIZECBAgAABAgQIECBgGGiAAAECBAgQIECAAAEvBhogQIAAAQIECBAgQCABp0QyIECAAAECBAgQIEDAMNAAAQIECBAgQIAAAQJeDDRAgAABAgQIECBAgEACTolkQIAAAQIECBAgQICAYaABAgQIECBAgAABAgS8GGiAAAECBAgQIECAAIEEnBLJgAABAgQIECBAgAABw0ADBAgQIECAAAECBAh4MdAAAQIECBAgQIAAAQIJOCWSAQECBAgQIECAAAEChoEGCBAgQIAAAQIECBDwYqABAgQIECBAgAABAgQScEokAwIECBAgQIAAAQIEDAMNECBAgAABAgQIECDgxUADBAgQIECAAAECBAgk4JRIBgQIECBAgAABAgQIGAYaIECAAAECBAgQIEDAi4EGCBAgQIAAAQIECBBIwCmRDAgQIECAAAECBAgQMAw0QIAAAQIECBAgQICAFwMNECBAgAABAgQIECCQgFMiGRAgQIAAAQIECBAgYBhogAABAgQIECBAgAABLwYaIECAAAECBAgQIEAgAadEMiBAgAABAgQIECBAwDDQAAECBAgQIECAAAECXgw0QIAAAQIECBAgQIBAAk6JZECAAAECBAgQIECAgGGgAQIECBAgQIAAAQIEvBhogAABAgQIECBAgACBBJwSyYAAAQIECBAgQIAAAcNAAwQIECBAgAABAgQIeDHQAAECBAgQIECAAAECCTglkgEBAgQIECBAgAABAoaBBggQIECAAAECBAgQ8GKgAQIECBAgQIAAAQIEEnBKJAMCBAgQIECAAAECBAwDDRAgQIAAAQIECBAg4MVAAwQIECBAgAABAgQIJOCUSAYECBAgQIAAAQIECBgGGiBAgAABAgQIECBAwIuBBggQIECAAAECBAgQSMApkQwIECBAgAABAgQIEDAMNECAAAECBAgQIECAgBcDDRAgQIAAAQIECBAgkIBTIhkQIECAAAECBAgQIGAYaIAAAQIECBAgQIAAAS8GGiBAgAABAgQIECBAIAGnRDIgQIAAAQIECBAgQMAw0AABAgQIECBAgAABAl4MNECAAAECBAgQIECAQAJOiWRAgAABAgQIECBAgIBhoAECBAgQIECAAAECBLwYaIAAAQIECBAgQIAAgQScEsmAAAECBAgQIECAAAHDQAMECBAgQIAAAQIECHgx0AABAgQIECBAgAABAgk4JZIBAQIECBAgQIAAAQKGgQYIECBAgAABAgQIEPBioAECBAgQIECAAAECBBJwSiQDAgQIECBAgAABAgQMAw0QIECAAAECBAgQIODFQAMECBAgQIAAAQIECCTglEgGBAgQIECAAAECBAgYBhogQIAAAQIECBAgQMCLgQYIECBAgAABAgQIEEjAKZEMCBAgQIAAAQIECBAwDDRAgAABAgQIECBAgIAXAw0QIECAAAECBAgQIJCAUyIZECBAgAABAgQIECBgGGiAAAECBAgQIECAAAEvBhogQIAAAQIECBAgQCABp0QyIECAAAECBAgQIEDAMNAAAQIECBAgQIAAAQJeDDRAgAABAgQIECBAgEACTolkQIAAAQIECBAgQICAYaABAgQIECBAgAABAgS8GGiAAAECBAgQIECAAIEEnBLJgAABAgQIECBAgAABw0ADBAgQIECAAAECBAh4MdAAAQIECBAgQIAAAQIJOCWSAQECBAgQIECAAAEChoEGCBAgQIAAAQIECBDwYqABAgQIECBAgAABAgQScEokAwIECBAgQIAAAQIEDAMNECBAgAABAgQIECDgxUADBAgQIECAAAECBAgk4JRIBgQIECBAgAABAgQIGAYaIECAAAECBAgQIEDAi4EGCBAgQIAAAQIECBBIwCmRDAgQIECAAAECBAgQMAw0QIAAAQIECBAgQIDAzAcAAP//9P8HJwAABtZJREFU7dtBEQMxDARBmT9bEfBNHQ13GKQzny0rZ3fv+BAgQIAAAQIECBAg8LTAMQye/v19eQIECBAgQIAAAQK/gGEgBAIECBAgQIAAAQIExjAQAQECBAgQIECAAAEChoEGCBAgQIAAAQIECBAYw0AEBAgQIECAAAECBAgYBhogQIAAAQIECBAgQCAB/zGQAQECBAgQIECAAAEChoEGCBAgQIAAAQIECBDwYqABAgQIECBAgAABAgQScEokAwIECBAgQIAAAQIEDAMNECBAgAABAgQIECDgxUADBAgQIECAAAECBAgk4JRIBgQIECBAgAABAgQIGAYaIECAAAECBAgQIEDAi4EGCBAgQIAAAQIECBBIwCmRDAgQIECAAAECBAgQMAw0QIAAAQIECBAgQICAFwMNECBAgAABAgQIECCQgFMiGRAgQIAAAQIECBAgYBhogAABAgQIECBAgAABLwYaIECAAAECBAgQIEAgAadEMiBAgAABAgQIECBAwDDQAAECBAgQIECAAAECXgw0QIAAAQIECBAgQIBAAk6JZECAAAECBAgQIECAgGGgAQIECBAgQIAAAQIEvBhogAABAgQIECBAgACBBJwSyYAAAQIECBAgQIAAAcNAAwQIECBAgAABAgQIeDHQAAECBAgQIECAAAECCTglkgEBAgQIECBAgAABAoaBBggQIECAAAECBAgQ8GKgAQIECBAgQIAAAQIEEnBKJAMCBAgQIECAAAECBAwDDRAgQIAAAQIECBAg4MVAAwQIECBAgAABAgQIJOCUSAYECBAgQIAAAQIECBgGGiBAgAABAgQIECBAwIuBBggQIECAAAECBAgQSMApkQwIECBAgAABAgQIEDAMNECAAAECBAgQIECAgBcDDRAgQIAAAQIECBAgkIBTIhkQIECAAAECBAgQIGAYaIAAAQIECBAgQIAAAS8GGiBAgAABAgQIECBAIAGnRDIgQIAAAQIECBAgQMAw0AABAgQIECBAgAABAl4MNECAAAECBAgQIECAQAJOiWRAgAABAgQIECBAgIBhoAECBAgQIECAAAECBLwYaIAAAQIECBAgQIAAgQScEsmAAAECBAgQIECAAAHDQAMECBAgQIAAAQIECHgx0AABAgQIECBAgAABAgk4JZIBAQIECBAgQIAAAQKGgQYIECBAgAABAgQIEPBioAECBAgQIECAAAECBBJwSiQDAgQIECBAgAABAgQMAw0QIECAAAECBAgQIODFQAMECBAgQIAAAQIECCTglEgGBAgQIECAAAECBAgYBhogQIAAAQIECBAgQMCLgQYIECBAgAABAgQIEEjAKZEMCBAgQIAAAQIECBAwDDRAgAABAgQIECBAgIAXAw0QIECAAAECBAgQIJCAUyIZECBAgAABAgQIECBgGGiAAAECBAgQIECAAAEvBhogQIAAAQIECBAgQCABp0QyIECAAAECBAgQIEDAMNAAAQIECBAgQIAAAQJeDDRAgAABAgQIECBAgEACTolkQIAAAQIECBAgQICAYaABAgQIECBAgAABAgS8GGiAAAECBAgQIECAAIEEnBLJgAABAgQIECBAgAABw0ADBAgQIECAAAECBAh4MdAAAQIECBAgQIAAAQIJOCWSAQECBAgQIECAAAEChoEGCBAgQIAAAQIECBDwYqABAgQIECBAgAABAgQScEokAwIECBAgQIAAAQIEDAMNECBAgAABAgQIECDgxUADBAgQIECAAAECBAgk4JRIBgQIECBAgAABAgQIGAYaIECAAAECBAgQIEDAi4EGCBAgQIAAAQIECBBIwCmRDAgQIECAAAECBAgQMAw0QIAAAQIECBAgQICAFwMNECBAgAABAgQIECCQgFMiGRAgQIAAAQIECBAgYBhogAABAgQIECBAgAABLwYaIECAAAECBAgQIEAgAadEMiBAgAABAgQIECBAwDDQAAECBAgQIECAAAECXgw0QIAAAQIECBAgQIBAAk6JZECAAAECBAgQIECAgGGgAQIECBAgQIAAAQIEvBhogAABAgQIECBAgACBBJwSyYAAAQIECBAgQIAAAcNAAwQIECBAgAABAgQIeDHQAAECBAgQIECAAAECCTglkgEBAgQIECBAgAABAoaBBggQIECAAAECBAgQ8GKgAQIECBAgQIAAAQIEEnBKJAMCBAgQIECAAAECBAwDDRAgQIAAAQIECBAg4MVAAwQIECBAgAABAgQIJOCUSAYECBAgQIAAAQIECBgGGiBAgAABAgQIECBAwIuBBggQIECAAAECBAgQSMApkQwIECBAgAABAgQIEDAMNECAAAECBAgQIECAwMwHujpqxlkZMCUAAAAASUVORK5CYII="},3850:function(A,e,t){e.Z=t.p+"assets/images/warning-e3ec3db1438e052479cc7f2f421e5c88.png"}}]);