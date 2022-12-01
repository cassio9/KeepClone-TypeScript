import React, { useState } from "react";
import { NoteInterface } from "../../interfaces/interfaces";

interface Props {
	setOpenPalletModal: React.Dispatch<React.SetStateAction<boolean>>;
	setNoteArray: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
	noteId: string;
}

const PaletteModal: React.FC<Props> = ({ setOpenPalletModal, setNoteArray, noteId }) => {
	const ChangeNoteColor = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setNoteArray((prevState: NoteInterface[]) =>
			prevState.map((note: NoteInterface) =>
				note.id === noteId ? { ...note, color: e.currentTarget.id } : note
			)
		);
		setOpenPalletModal(false);
	};

	return (
		<div className="bg-gray-200 p-2 rounded-lg absolute shadow-lg top-12 z-10">
			<div className="flex flex-wrap w-[45px] gap-1">
				<div
					className="cursor-pointer bg-white w-5 h-5 rounded-full border-[1px] border-gray-400"
					id={"bg-white"}
					onClick={(e) => ChangeNoteColor(e)}></div>
				<div
					id={"bg-cyan-200"}
					className="cursor-pointer bg-c bg-cyan-200 w-5 h-5 rounded-full border-[1px] border-gray-400"
					onClick={(e) => ChangeNoteColor(e)}></div>
				<div
					id={"bg-purple-200"}
					className="cursor-pointer bg-purple-200 w-5 h-5 rounded-full border-[1px] border-gray-400"
					onClick={(e) => ChangeNoteColor(e)}></div>

				<div
					id={"bg-orange-200"}
					className="cursor-pointer bg-orange-200 w-5 h-5 rounded-full border-[1px] border-gray-400"
					onClick={(e) => ChangeNoteColor(e)}></div>
			</div>
		</div>
	);
};

export default PaletteModal;
