import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Notes from "./components/Notes";
import KeepLogo from "./assets/keeps.png";
import { NoteInterface } from "./interfaces/interfaces";

function App() {
	//state
	const [noteArray, setNoteArray] = useState<NoteInterface[]>(
		JSON.parse(localStorage.getItem("KeepClone")!) || []
	);

	//keep localStorage updated, useEffect checks every time noteArray changes
	useEffect(() => {
		localStorage.setItem("KeepClone", JSON.stringify(noteArray));
	}, [noteArray]);

	//transform state data in HTML using react fc
	const NoteHtml = noteArray.map((note) => {
		return (
			<Notes
				key={note.id}
				id={note.id}
				note={note.note}
				title={note.title}
				color={note.color}
				setNoteArray={setNoteArray}
			/>
		);
	});

	return (
		<div className="font-Inter mt-10 p-10 flex items-center flex-col gap-10 ">
			<Header />
			<Input setNoteArray={setNoteArray} />
			{noteArray[0] ? (
				<div className="flex flex-wrap items-stretch justify-center gap-5"> {NoteHtml}</div>
			) : (
				<div className="flex flex-col items-center mt-20">
					<img className="w-32 " src={KeepLogo} alt="Keep Logo" />
					<p className="text-xl mt-5 text-[#6a6f71]">Notes you add appear here</p>
				</div>
			)}
		</div>
	);
}

export default App;
