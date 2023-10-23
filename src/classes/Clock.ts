import { Note } from "./Note";
import { pi } from "../constants"

export class Clock {
    measure: number; // current measure of the piece 
    notes: Note[]; // array of all notes and rests in the measure
    seek: number; // specific instant in a measure being played [0-2π)
    keySignature: number; // Key Signature of the measure    
    tuning: Note[];
    
    constructor(_measure: number, _notes: Note[], _seek: number, _keySignature: number , _tuning: Note[]) {
        this.measure = _measure;
        this.notes = _notes;
        this.seek = _seek % (2 * pi);
        this.keySignature = _keySignature % 1200;
        this.tuning = _tuning;
    }

    addNote = (_newNote: Note) => {
        const exists = this.tuning.find((note)=> {return note.cent == _newNote.cent});
        // only allows notes that are in tune wrt tuning
        // FUTURE: allow user to adjust notes by a few cents while adding new notes to the clock
        if(exists){
            this.notes.push(exists);
            this.notes.sort(exists.compareOffset) // sorting notes according to their position in measure
        }
    }
}

/*
Frontend:
    User => Tuning
        Main pitches = 1200/EDO cents or other custom tuning divisions (ex Just Intonation)
    User => KeySig
    keySig => group of notes
        ex: 
            Tuning = 7EDO, Key = 5th note in 7EDO 
            cent= {0, 240, 480, 720, 960}
            Initial restriction = 7 notes in 7EDO
            Further user can change each note by cents

Backend:
    Note => {...} (enum)

*/