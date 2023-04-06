import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9c3ce17c-3957-44f0-9684-9e2f8376cdd7%2FBEB90239-F777-4C36-858C-F29184049C27.png?table=collection&id=4a8e7e99-a584-4d2e-98e8-13a1ef239c54',
      name: '游客',
      description: 'Star on <a href="https://zhang.fun/article/give-me-a-coffee" class="text-blue-500" target="_blank" >赞助打赏</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
