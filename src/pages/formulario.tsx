/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from "@/styles/formulario.module.css";
import { IInputFormulario } from "@/types/inputFormulario";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

export default function Form() {
  const formSchemaRegister = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IInputFormulario>({
    resolver: yupResolver(formSchemaRegister),
    mode: "onBlur",
  });

  async function onSubmit(data: IInputFormulario) {
    try {
      const response = await fetch("/api/users/create", {
        method: "POST",
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input type="text" placeholder="Nome" {...register("name")} />
          <span>{errors.name?.message}</span>
          <input type="email" placeholder="E-mail" {...register("email")} />
          <span>{errors.email?.message}</span>

          <button type="submit" data-type="confirm">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
