---
sidebar_position: 1
---

# ⚙️ Global notifications settings
<br/>

React Native Notifications library gives you a lot of possibilities to change the default configuration. <br/>
In the beginning, you can set the configuration for all the notifications used in the app. <br/>
Let's take a look at what exactly can we set globally:


| Name                                | Type                        | Default                  | Description                                                                                                                                                            |
| ----------------------------------- | :-------------------------: | :----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| duration                            | Number                      | 3000                     | Use this property to set how long the notifications should be displayed on the screen. Value expressed in milliseconds
| notificationPosition                | 'top' / 'center' / 'bottom' | 'top'                    | Set where the notifications should appear on the screen. You can choose one of three default options: top / center / bottom. To read more about the notification position please go to the [NOTIFICATION POSITION](../default-variants-config/position) section.
| animationConfig                     | Object                      | SlideInLeftSlideOutRight | Property responsible for the notification animation. You can set one of the animations prepared by us, or make your own config. To read more about the animation settings please go to the [ANIMATIONS SETTINGS](../animations/changing-transitions) section.
| isNotch                             | Boolean                     | value returned by method 'hasNotch' from react-native-device-info | Property responsible for read if the device has notch. Under the hood uses react-native-device-info, but this can by overwritten by passing value to it.
| defaultStylesSettings               | Object                      | -                        | Object responsible for setting global styles for the notifications. You can also set here styles, for all the notifications of the specific type. For example for the error notifications. To read more about global style settings please go to the [GLOBAL STYLES SETTINGS](../default-variants-config/global-config) section.

<br/>

Here we can see the global notifications settings in their basic form with default settings: <br/>

<br/>

```jsx
const { useNotifications, NotificationsProvider } = createNotifications({
  defaultNotificationTime: 3000,
  defaultNotificationTimeLong: 5000,
  notificationPosition: 'top',
  notificationMsgLengthTimerThreshold: 100,
  animationConfig: SlideInLeftSlideOutRight,
  isNotch: true or false, // depends on react-native-device-info's 'hasNotch' returned value
  defaultStylesSettings: {},
})
```
