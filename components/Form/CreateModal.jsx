import CreateForm from "./CreateForm";

export default function MyModal({ title, message, editData }) {
  const closeModal = () => {
    document.getElementById("my_modal_1").close();
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box bg-white text-black">
        <h3 className="font-bold text-lg">{title}</h3>
        {message && <p className="py-4">{message}</p>}
        <CreateForm closeModal={closeModal} />
      </div>
    </dialog>
  );
}
