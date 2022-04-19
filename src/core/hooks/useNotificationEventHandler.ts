import { useEffect } from 'react'
import { emitter } from '../services/NotificationEmitter'
import type { NotificationState } from './useNotificationsStates'
import type { AnimationAPI } from './useAnimationAPI'
import type { EmitParam, ModifiedEmitParam, RemoveEmitParam } from '../services/types'

type Props = Pick<
  NotificationState,
  'setNotificationsQueue' | 'notificationsQueue' | 'notificationEvent'
> &
  Pick<AnimationAPI, 'dismiss' | 'present'>

export const useNotificationEventHandler = ({
  dismiss,
  notificationEvent,
  notificationsQueue,
  present,
  setNotificationsQueue,
}: Props) => {
  useEffect(() => {
    if (notificationEvent) {
      present()
    }
  }, [notificationEvent, present])

  useEffect(() => {
    const removeListener = emitter.addListener('add_notification', (config: EmitParam) => {
      setNotificationsQueue((prev) => {
        return [...prev, config]
      })
    })

    return removeListener
  }, [setNotificationsQueue])

  useEffect(() => {
    const modifyNotification = ({ id, params }: ModifiedEmitParam) => {
      setNotificationsQueue((prevState) =>
        prevState.map((notification) => {
          if (notification.id !== id) return notification
          return {
            ...notification,
            params: { ...notification.params, ...params },
          }
        })
      )
    }

    const removeListener = emitter.addListener('modify_notification', modifyNotification)

    return removeListener
  }, [setNotificationsQueue])

  useEffect(() => {
    const removeListener = emitter.addListener('pop_notification', () => {
      setNotificationsQueue((prev) => prev.filter((_, index: number) => index !== 0))
    })

    return removeListener
  }, [setNotificationsQueue])

  useEffect(() => {
    const removeNotification = ({ id }: RemoveEmitParam) => {
      const [firstNotification] = notificationsQueue
      // if notification is currently displayed animate it back
      if (firstNotification?.id === id) return dismiss()
      setNotificationsQueue((prevState) =>
        prevState.filter((notification) => notification.id !== id)
      )
    }

    const removeListener = emitter.addListener('remove_notification', removeNotification)
    return removeListener
  }, [dismiss, notificationsQueue, setNotificationsQueue])
}
