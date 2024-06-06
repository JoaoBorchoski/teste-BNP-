/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import { useEffect, useState } from "react";

import styles from "@/styles/lista.module.css";
import { ICity } from "@/types/city.d";
import { GetStaticProps } from "next";
import { generateCities } from "./api/cities/[length]";

export default function Lista({ initialData }: { initialData: Array<ICity> }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Lista de cidades</h2>

        <div data-list-container>
          {initialData.map((city) => (
            <div data-list-item key={city.id}>
              {city.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cities/10`,
      { method: "GET" }
    );
    const initialData = await response.json();
    if (!response.ok) throw new Error("Erro ao obter os dados");

    // const initialData = generateCities(10);

    return {
      props: { initialData },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return {
      props: { initialData: [] },
      revalidate: 10,
    };
  }
};
