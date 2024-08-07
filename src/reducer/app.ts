type IAppReducer = {
  isLogin: boolean;
  isRegister: boolean;
  Message: { status: boolean; message?: { type?: string; text?: string } };
};

type iActions = {
  type: "register" | "login";
  value: boolean;
  message?: { type?: string; text?: string };
};

export const AppReducer = (state: IAppReducer, actions: iActions) => {
  if (actions.type == "register") {
    return { ...state, isRegister: actions.value };
  } else if (actions.type == "login") {
    return { ...state, isLogin: actions.value };
  } else if (actions.type == "message") {
    return {
      ...state,
      Message: {
        status: actions.value,
        message: { type: actions.message?.type, text: actions.message?.text },
      },
    };
  } else {
    return state;
  }
};
