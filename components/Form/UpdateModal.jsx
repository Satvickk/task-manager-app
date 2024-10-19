import UpdateForm from "./UpdateForm";

export default function MyUpdateModal({ title, message, editData }) {
  const closeModal = () => {
    document.getElementById("my_modal_2").close();
  };
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box bg-white text-black">
        <h3 className="font-bold text-lg">{title}</h3>
        {message && <p className="py-4">{message}</p>}
        <UpdateForm data={editData} closeModal={closeModal} />
      </div>
    </dialog>
  );
}
