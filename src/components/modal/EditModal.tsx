import React, { useState } from "react";
import { NoteInterface } from "../../interfaces/interfaces";

interface Props {
	setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
	setNoteArray: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
	noteId: string;
	title: string;
	note: string;
}

interface T {
	titleEdit: string;
	noteEdit: string;
}

const EditModal: React.FC<Props> = ({ setOpenEditModal, setNoteArray, noteId, title, note }) => {
	const [editNote, setEditNote] = useState<T>({ titleEdit: title, noteEdit: note });

	const EditNote = () => {
		if (editNote.noteEdit == "" || editNote.titleEdit == "") {
			alert("Fill out all inputs");
			return;
		}
		setNoteArray((prevState: NoteInterface[]) =>
			prevState.map((note: NoteInterface) =>
				note.id === noteId ? { ...note, title: editNote.titleEdit, note: editNote.noteEdit } : note
			)
		);
		setOpenEditModal(false);
	};
	return (
		<div className="fixed flex justify-center items-center inset-0 z-50  w-full overflow-x-hidden overflow-y-auto">
			<div className="fixed inset-0 opacity-60   bg-gray-300"></div>
			<div className="relative z-50 p-2 flex flex-col  bg-white w-[400px] rounded-lg shadow-lg ">
				<input
					type="text"
					aria-label="Title"
					className="outline-0 font-bold pl-4 py-6 block rounded-md min-w-[90%] leading-relaxed  text-2xl  placeholder:text-[#6a6f71]  "
					placeholder="Title"
					value={editNote.titleEdit}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setEditNote((prevState) => ({ ...prevState, titleEdit: e.target.value }))
					}
					required
				/>
				<textarea
					className="outline-0 mb-2 px-4 pb-7 block rounded-md min-w-[90%] leading-relaxed  text-xl  placeholder:text-[#6a6f71]"
					placeholder="Take a note..."
					aria-label="Take a note text area"
					required
					value={editNote.noteEdit}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						setEditNote((prevState) => ({ ...prevState, noteEdit: e.target.value }))
					}></textarea>
				<div className="flex gap-2 text-lg text-white self-end ">
					<button
						className="px-6 py-2  gap-2 mt-5 bg-blue-500  rounded-md hover:bg-red-400 hover:text-black"
						onClick={EditNote}>
						Confirm
					</button>
					<button
						className="px-6 py-2 bg-blue-500 gap-2 mt-5 rounded-md hover:bg-red-400 hover:text-black"
						onClick={() => setOpenEditModal(false)}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditModal;
