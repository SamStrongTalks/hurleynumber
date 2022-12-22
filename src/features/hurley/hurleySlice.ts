import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface HurleyState {
    keyboards: {
        keyboards: number;
        keyboardgbs: number;
        macropads: number;
        macropadgbs: number;
        keyboardDesigned: number;
    };
    switches: {
        switches: number;
        switchesModified: number;
        switchgbs: number;
    };
    keycaps: {
        keycaps: number;
        keycapgbs: number;
    };
    other: {
        artisans: number;
        artisangbs: number;
        cables: number;
        cablegbs: number;
        deskpads: number;
        deskpadgbs: number;
        noveltyKits: number;
        noveltyKitgbs: number;
        other: number;
        othergbs: number;
    };
}

const initialState: HurleyState = {
    keyboards: {
        keyboards: 0,
        keyboardgbs: 0,
        macropads: 0,
        macropadgbs: 0,
        keyboardDesigned: 0,
    },
    switches: {
        switches: 0,
        switchesModified: 0,
        switchgbs: 0,
    },
    keycaps: {
        keycaps: 0,
        keycapgbs: 0,
    },
    other: {
        artisans: 0,
        artisangbs: 0,
        cables: 0,
        cablegbs: 0,
        deskpads: 0,
        deskpadgbs: 0,
        noveltyKits: 0,
        noveltyKitgbs: 0,
        other: 0,
        othergbs: 0,
    },
};

export const hurleySlice = createSlice({
  name: 'hurley',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setKeyboards: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.keyboards.keyboards = action.payload;
    },
    setKeyboardgbs: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.keyboards.keyboardgbs = action.payload;
    },
    setMacropads: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.keyboards.macropads = action.payload;
    },
    setMacropadgbs: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.keyboards.macropadgbs = action.payload;
    },
    setKeyboardDesigned: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.keyboards.keyboardDesigned = action.payload;
    },
    setSwitches: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.switches.switches = action.payload;
    },
    setSwitchesModified: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.switches.switchesModified = action.payload;
    },
    setSwitchgb: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.switches.switchgbs = action.payload;
    },
    setKeycaps: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.keycaps.keycaps = action.payload;
    },
    setKeycapgbs: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.keycaps.keycapgbs = action.payload;
    },
    setArtisans: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.other.artisans = action.payload;
    },
    setArtisangbs: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.other.artisangbs = action.payload;
    },
    setCables: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.other.cables = action.payload;
    },
    setCablegbs: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.other.cablegbs = action.payload;
    },
    setDeskpads: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.other.deskpads = action.payload;
    },
    setDeskpadgbs: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.other.deskpadgbs = action.payload;
    },
    setNoveltyKits: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.other.noveltyKits = action.payload;
    },
    setNoveltyKitgbs: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.other.noveltyKitgbs = action.payload;
    },
    setOther: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.other.other = action.payload;
    },
    setOthergbs: (state, action: PayloadAction<number>) => {
        if (action.payload < 0) { return; }
        state.other.othergbs = action.payload;
    },
  },
});

export const {
    setKeyboards, setKeyboardgbs, setMacropads,
    setMacropadgbs, setKeyboardDesigned, setSwitches,
    setSwitchesModified, setSwitchgb, setKeycaps,
    setKeycapgbs, setArtisans, setArtisangbs,
    setCables, setCablegbs, setDeskpads,
    setDeskpadgbs, setNoveltyKits, setNoveltyKitgbs,
    setOther, setOthergbs
} = hurleySlice.actions;

export const selectHurley = (state: RootState) => state.hurley;
export const selectKeyboards = (state: RootState) => state.hurley.keyboards;
export const selectSwitches = (state: RootState) => state.hurley.switches;
export const selectKeycaps = (state: RootState) => state.hurley.keycaps;
export const selectOthers = (state: RootState) => state.hurley.other;

export const keyboardTotal = (state: RootState): number => {
    const { keyboards, keyboardgbs, macropads, macropadgbs, keyboardDesigned } = state.hurley.keyboards;
    return keyboards + keyboardgbs + macropads + macropadgbs + keyboardDesigned / 2;
}

export const switchTotal = (state: RootState): number => {
    const { switches, switchesModified, switchgbs: switchgb } = state.hurley.switches;
    return switches + switchesModified * 0.5 + switchgb;
}

export const keycapTotal = (state: RootState): number => {
    const { keycaps, keycapgbs } = state.hurley.keycaps;
    return keycaps + keycapgbs;
}

export const otherTotal = (state: RootState): number => {
    const {
        artisans, artisangbs, deskpads,
        deskpadgbs, cables, cablegbs,
        other, othergbs
    } = state.hurley.other;
    return (artisans + artisangbs + deskpads + deskpadgbs + cables + cablegbs + other + othergbs) / 4;
}

export const hurleyNumber = (state: RootState): number => {
    const K = keyboardTotal(state);
    const S = switchTotal(state);
    const C = keycapTotal(state);
    const A = otherTotal(state);

    return (K + S + C + A) / 3;
}

export const hurleySigma = (state: RootState): number => {
    const K = keyboardTotal(state);
    const S = switchTotal(state);
    const C = keycapTotal(state);
    const sigmaAvg = (K + S + C) / 3;
    const variance = (Math.pow(K - sigmaAvg, 2) + Math.pow(S - sigmaAvg, 2) + Math.pow(C - sigmaAvg, 2)) / 3;

    return Math.sqrt(variance);
}

export default hurleySlice.reducer;
