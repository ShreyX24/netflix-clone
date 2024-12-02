interface CloseButton {
  handleCloseModal: () => void;
}

export const CloseButton = ({ handleCloseModal }: CloseButton) => {
  return (
    <div className=" flex justify-end w-full p-5">
      <button
        className="bg-black rounded-full w-[36px] h-[36px] flex justify-center items-center"
        onClick={handleCloseModal}
      >
        <img src="/icons/close.png" alt="" width={18} />
      </button>
    </div>
  );
};
