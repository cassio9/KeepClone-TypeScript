import { useState, useRef, useEffect } from "react";
import { NoteInterface } from "../interfaces/interfaces";
import { nanoid } from "nanoid";

interface Props {
	setNoteArray: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
}

interface INote {
	title: string;
	note: string;
}

const Input: React.FC<Props> = ({ setNoteArray }) => {
	const [openNote, setOpenNote] = useState<boolean>(false);
	const [note, setNote] = useState<INote>({ title: "", note: "" });
	const InputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		InputRef.current?.focus();
	}, [openNote]);

	function closeInput() {
		setNote({ title: "", note: "" });
		setOpenNote(false);
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setNoteArray((prevState) => [...prevState, { ...note, id: nanoid(), color: "bg-white" }]);
		closeInput();
	}

	return (
		<form className="shadow-personal border-gray-100 p-1 rounded-lg" onSubmit={handleSubmit}>
			{!openNote ? (
				<input
					className="outline-0   pl-4 py-4 rounded-md min-w-[350px] leading-relaxed  text-xl  placeholder:text-[#6a6f71] "
					type="text"
					placeholder="Take a note..."
					onFocus={() => setOpenNote(true)}
				/>
			) : (
				<div className="flex flex-col items-end">
					<input
						type="text"
						placeholder="Title"
						className="outline-0 pl-4 py-6 block rounded-md min-w-[350px] leading-relaxed  text-xl  placeholder:text-[#6a6f71] "
						value={note.title}
						required
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setNote((prevState) => ({ ...prevState, title: e.target.value }))
						}
						ref={InputRef}
					/>
					<textarea
						placeholder="Take a note..."
						aria-label="Take a note text area"
						rows={1}
						required
						value={note.note}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setNote((prevState) => ({ ...prevState, note: e.target.value }))
						}
						className="outline-0 mb-2 px-4 pb-6 block rounded-md min-w-[350px] leading-relaxed  text-xl  placeholder:text-[#6a6f71]"></textarea>
					<div className="flex py-[0.2em] px-2">
						<button className="px-6 py-2 bg-blue-500 rounded-md text-white ">Submit</button>
						<button className="px-6 py-2 bg-gray-200 rounded-md ml-2 " onClick={closeInput}>
							Close
						</button>
					</div>
				</div>
			)}
		</form>
	);
};

export default Input;
