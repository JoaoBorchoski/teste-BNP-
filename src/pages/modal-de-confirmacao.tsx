/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from "react";
import Head from "next/head";

import styles from "@/styles/modal.module.css";
import { Modal } from "@/components/Modal";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModalConfirm() {
    setModalIsOpen(false);
    alert("Delete confirmed!");
  }

  function handleModalClose() {
    setModalIsOpen(false);
  }

  function renderModalConfirm() {
    return (
      <div data-modal-content className={styles["modal-form"]}>
        <p>Tem certeza que deseja excluir este item?</p>
      </div>
    );
  }

  return (
    <>
      <main className={styles.container}>
        <button type="button" onClick={() => setModalIsOpen(true)}>
          Abrir modal de confirmação
        </button>
      </main>

      {/* Renderizar modal de confirmação */}
      <Modal
        isOpen={modalIsOpen}
        title="Confirmação"
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        footer={{ confirmText: "Confirmar" }}
      >
        {renderModalConfirm()}
      </Modal>
    </>
  );
}
