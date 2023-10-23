import {pi} from '../constants'

export class Note {

    isRest: boolean; // 1 = Rest, 0 = Pitch
    octave: number; // octave number [1 - 10]
    cent: number; // cent value of note [0-1200)
    offset: number; // angle denoting start of note [0-2π)
    duration: number; // fractional value denoting length of note [0, 1]

    constructor(_isRest: boolean = false, _octave: number, _cent: number, _offset:number, _duration:number) {
        this.isRest = _isRest;
        this.octave = _octave;
        this.offset = _offset % (2 * pi)
        this.cent = _cent % 1200;
        this.duration = _duration % 1;
    }

    compareOffset = (a: Note, b: Note) => {return b.offset - a.offset;}

    changeNote = (_isRest: boolean = this.isRest, _octave: number = this.octave, _cent: number = this.cent, _offset: number = this.offset, _duration: number = this.duration) => {
        this.isRest = _isRest;
        this.octave = _octave;
        this.offset = _offset % (2 * pi);
        this.cent = _cent % 1200;
        this.duration = _duration % 1;
    }

}