import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { NoteInterface } from "../interfaces/interfaces";
import { useState } from "react";
import DeleteModal from "./modal/DeleteModal";
import EditModal from "./modal/EditModal";
import PaletteModal from "./modal/PaletteModal";

interface Props {
	id: string;
	title: string;
	note: string;
	color: string;
	setNoteArray: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
}

const Notes: React.FC<Props> = ({ id, note, title, color, setNoteArray }) => {
	const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
	const [openEditModal, setOpenEditModal] = useState<boolean>(false);
	const [openPalletModal, setOpenPalletModal] = useState<boolean>(false);

	return (
		<div
			className={`flex border-[1px] border-[#d3d3d3] p-4 rounded-lg items-start max-w-[400px] ${color}  shadow-md`}>
			<div className=" max-w-[320px] mr-5 break-words whitespace-pre-wrap break-all">
				<h1 className="font-bold text-2xl ">{title}</h1>
				<p className="mt-2 text-xl text-left">{note}</p>
			</div>
			<div className="flex text-xl flex-col gap-1 self-center">
				<FontAwesomeIcon
					className="cursor-pointer  p-1 text-blue-500 hover:text-blue-800"
					icon={faFileEdit}
					onClick={() => setOpenEditModal(true)}
				/>
				<FontAwesomeIcon
					className="cursor-pointer p-1 text-red-500 hover:text-red-900"
					icon={faTrash}
					onClick={() => setOpenDeleteModal(true)}
				/>
				<FontAwesomeIcon
					className="cursor-pointer p-1 text-green-600 hover:text-green-800"
					icon={faPalette}
					onClick={() => setOpenPalletModal((prev) => !prev)}
				/>
			</div>
			{openDeleteModal && (
				<DeleteModal setOpenModal={setOpenDeleteModal} setNoteArray={setNoteArray} noteId={id} />
			)}
			{openEditModal && (
				<EditModal
					setOpenEditModal={setOpenEditModal}
					setNoteArray={setNoteArray}
					noteId={id}
					title={title}
					note={note}
				/>
			)}
			{openPalletModal && (
				<div className="relative">
					<PaletteModal
						setOpenPalletModal={setOpenPalletModal}
						setNoteArray={setNoteArray}
						noteId={id}
					/>
				</div>
			)}
		</div>
	);
};

export default Notes;
