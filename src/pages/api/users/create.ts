/**
 * @api {post} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from "next/types";

import { IUser, IUserCreate } from "@/types/user.d";

const users: IUser[] = [];

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email } = JSON.parse(req.body) as IUserCreate;

    console.log(req.body);
    console.log(name, email);
    if (!name || !email) {
      return res.status(400).json({ error: "Nome e email obrigatórios" });
    }

    const user: IUser = {
      id: users.length + 1,
      name,
      email,
    };

    console.log(user);

    users.push(user);

    return res.status(201).json(user);
  }
};
