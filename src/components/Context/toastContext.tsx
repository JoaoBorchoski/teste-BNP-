import React, { ReactNode, useContext, useState } from "react";

interface Message {
  id: string;
  message: string;
  type: "success" | "error";
}

interface ToastContextData {
  message: Message | undefined;
  setMessage: (message: Message) => void;
}

const ToastContext = React.createContext<ToastContextData | null>(null);

// Usei assim ja
// export const toastContext = React.createContext({} as ToastContextData);

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [message, setMessages] = useState<Message>();

  const setMessage = (message: Message) => {
    setMessages(message);
  };

  return (
    <ToastContext.Provider value={{ message, setMessage }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("Erro");
  }
  return context;
}
