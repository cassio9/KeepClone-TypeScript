import { NoteInterface } from "../../interfaces/interfaces";

interface Props {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	setNoteArray: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
	noteId: string;
}

const DeleteModal: React.FC<Props> = ({ setOpenModal, setNoteArray, noteId }) => {
	const DeleteNote = () => {
		setNoteArray((prevState) => prevState.filter((note) => note.id !== noteId));
	};

	return (
		<div className="fixed flex justify-center items-center inset-0 z-50  w-full overflow-x-hidden overflow-y-auto">
			<div className="fixed inset-0 opacity-50   bg-gray-300 "></div>
			<div className="relative z-50 p-5 flex flex-col w-[400px] bg-white  rounded-md shadow-lg ">
				<div className="self-end text-2xl pb-4 cursor-pointer" onClick={() => setOpenModal(false)}>
					✕
				</div>
				<h1 className="text-3xl">Are you sure you want to delete this note?</h1>
				<div className="flex text-lg  gap-2 mt-5 self-end">
					<button
						className="px-6 py-2  gap-2 mt-5 bg-blue-500  rounded-md hover:bg-red-400 hover:text-black"
						onClick={DeleteNote}>
						Confirm
					</button>
					<button
						className="px-6 py-2  gap-2 mt-5 bg-blue-500  rounded-md hover:bg-red-400 hover:text-black"
						onClick={() => setOpenModal(false)}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
