import {pi} from '../constants'

export class Note {

    isRest: boolean; // 1 = Rest, 0 = Pitch
    octave: number; // octave number [1 - 10]
    cent: number; // cent value of note [0-1200)
    offset: number; // angle denoting start of note [0-2π)
    duration: number; // fractional value denoting length of note [0, 1]

    constructor(_isRest: boolean, _octave: number, _cent: number, _offset:number, _duration:number) {
        this.isRest = _isRest;
        this.octave = _octave;
        this.offset = _offset % (2 * pi)
        this.cent = _cent % 1200;
        this.duration = _duration % 1;
    }

    compareOffset = (a: Note, b: Note) => {return b.offset - a.offset;}

    setPitch = (_cent: number) => {
        
    }

    adjustPitch = (_delta_cents: number) => {
        
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