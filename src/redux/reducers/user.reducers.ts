export interface IUserState {
  // id: string
  email: string,
  password: string

}

export enum EUserActions {
  SET_ACTIVE_USER,
  LOGOUT_USER
}

export interface ISetUserAction {
  type:  EUserActions.SET_ACTIVE_USER,
  payload: {email: string, password: string}
}

export interface ILogoutUserAction {
  type:  EUserActions.LOGOUT_USER,
}

export type TUserActions = ISetUserAction | ILogoutUserAction

const userReducer = (state: IUserState, action: TUserActions):IUserState => {
  switch (action.type) {
    case EUserActions.SET_ACTIVE_USER:
      return {
        email: action.payload.email,
        password: action.payload.password
      }
    case EUserActions.LOGOUT_USER:
      return {
        email: "",
        password: ""
      }
    default:
      return state

  }
}

export default userReducer
