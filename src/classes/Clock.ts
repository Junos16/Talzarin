import { Note } from "./Note";
import { pi } from "../constants"

export class Clock {
    measure: number; // current measure of the piece
    tempo: number; // tempo 
    notes: Note[]; // array of all notes and rests in the measure
    seek: number; // specific instant in a measure being played [0-2π)
    keySignature: number; // Key Signature of the measure    
    tuning: number[]; // array of numbers containing the cent values of the intervals in the tuning
    
    constructor(_measure: number = 1, _tempo: number = 100, _notes: Note[] = [], _seek: number = 0, _keySignature: number = 0, _tuning: number[] = Array.from({length: 12}, (_,i) => (i+1) * 100)) {
        this.tempo = _tempo;
        this.measure = _measure;
        this.notes = _notes;
        this.seek = _seek % (2 * pi);
        this.keySignature = _keySignature % 1200;
        this.tuning = _tuning;
    }


    addNote = (_newNote: Note): boolean => {
        const exists = this.tuning.find((num)=> {return num == _newNote.cent;});
        // only allows notes that are in tune wrt tuning
        // FUTURE: allow user to adjust notes by a few cents while adding new notes to the clock
        if(exists != undefined){
            this.notes.push(_newNote);
            this.notes.sort(_newNote.compareOffset); // sorting notes according to their position in measure
            console.log('New note addeed to the clock\n');
            return true;
        }
        else {
            console.log('Note not in tune');
            return false;
        }
    }


    removeNote = (_note: Note): boolean => {
        const deletor = this.notes.findIndex(note => {return note == _note});
        if(deletor > -1){
            this.notes.splice(deletor, 1);
            console.log('Note deleted')
            return true;
        }
        else {
            console.log('No such note found in measure');
            return false;
        }
    }

    changeClock = (_measure: number = this.measure, _tempo: number = this.tempo, _notes: Note[] = this.notes, _seek: number = this.seek, _keySignature: number = this.keySignature, _tuning: number[] = this.tuning) => {
        this.tempo = _tempo;
        this.measure = _measure;
        this.notes = _notes;
        this.seek = _seek % (2 * pi);
        this.keySignature = _keySignature % 1200;
        this.tuning = _tuning;
    }


}