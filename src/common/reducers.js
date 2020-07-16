import accounts from "../accounts/reducers";
import lobby from "../lobby/reducers/main";

export const appReducer = (state = {}, action) => {
  const { userId } = state.accounts.activeUser;
  return {
    lobby: lobby(state.lobby, {...action,  userId}),
    accounts: accounts(state.accounts, action)
  }
}
