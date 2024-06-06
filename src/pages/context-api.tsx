/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from "@/styles/context-api.module.css";
import { IToastMessage } from "@/types/toast-message";
import { ToastMessage } from "@/components/ToastMessage";
import { useToast } from "@/components/Context/toastContext";

export default function ContextApi() {
  const { message, setMessage } = useToast();
  const messages: Array<IToastMessage> = [
    {
      id: "1",
      message: "Mensagem de sucesso",
      type: "success",
    },
    {
      id: "2",
      message: "Mensagem de erro",
      type: "error",
    },
  ];

  function handleSuccessButtonClick() {
    setMessage(messages[0]);
  }

  function handleErrorButtonClick() {
    setMessage(messages[1]);
  }

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={handleSuccessButtonClick}>
          Disparar mensagem de sucesso
        </button>
        <button type="button" onClick={handleErrorButtonClick}>
          Disparar mensagem de erro
        </button>
      </div>

      {message && (
        <div className={styles["toast-container"]}>
          <ToastMessage key={message.id} content={message} />
        </div>
      )}
    </>
  );
}
