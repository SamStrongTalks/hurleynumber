import React, { ReactElement } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import InputGroup from './InputGroup';
import InputRow from './InputRow';
import {
    setKeyboards,
    setKeyboardgbs,
    setMacropads,
    setMacropadgbs,
    setKeyboardDesigned,
    setSwitches,
    setSwitchesModified,
    setSwitchgb,
    setKeycaps,
    setKeycapgbs,
    setArtisans,
    setArtisangbs,
    setCables,
    setCablegbs,
    setDeskpads,
    setDeskpadgbs,
    setNoveltyKits,
    setNoveltyKitgbs,
    setOther,
    setOthergbs,
    selectKeyboards,
    selectSwitches,
    selectKeycaps,
    selectOthers,
    keyboardTotal,
    switchTotal,
    keycapTotal,
    otherTotal,
    hurleyNumber,
    hurleySigma,
} from './hurleySlice';
import tooltips from './tooltips';

export function Hurley(): ReactElement {
    const keyboards = useAppSelector(selectKeyboards)
    const switches = useAppSelector(selectSwitches);
    const keycaps = useAppSelector(selectKeycaps);
    const other = useAppSelector(selectOthers);

    const hurleyNum = useAppSelector(hurleyNumber);
    const hurleySig = useAppSelector(hurleySigma);
    
    const K = useAppSelector(keyboardTotal);
    const S = useAppSelector(switchTotal);
    const C = useAppSelector(keycapTotal);
    const A = useAppSelector(otherTotal);

    const dispatch = useAppDispatch();

    return (
        <div className="container">
            <div id="result">
                <div id="formula">
                    <div id="formula-head-part" className="formula-part">
                        <img src="img/mykehead.png" id="mykehead" alt='Myke&quot;s head logo' />=</div>
                    <div id="formula-fraction-part" className="formula-part">
                        <div id="formula-fraction-top">
                            <span className="has-tooltip-multiline" data-tooltip="Keyboards">{ K }</span> + <span className="has-tooltip-multiline" data-tooltip="Switches">{ S }</span> + <span className="has-tooltip-multiline" data-tooltip="Keycaps">{ C }</span> + <span className="has-tooltip-multiline" data-tooltip="Accessories / 4">{ A }</span>
                        </div>
                        <div id="formula-fraction-bottom" className="formula-part">3</div>
                    </div>
                    <div id="formula-result-part" className="formula-part">= {hurleyNum.toFixed(2) }</div>
                </div>
                <div id="sigma">
                    <span className="has-tooltip-multiline" data-tooltip="The &quot;Hurley Sigma&quot;, the standard deviation of the keyboards, switches and keycaps components; a measure of how &quot;unbalanced&quot; your collection is">σ</span>&nbsp;= {hurleySig.toFixed(2)}</div>
                </div>
                <div className='input-container'>
                    <InputGroup title="K: Keyboards">
                        <InputRow tooltip={tooltips.keyboards} label='Keyboards' value={ keyboards.keyboards }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setKeyboards(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.keyboardgbs} label='Keyboard group buys' value={ keyboards.keyboardgbs }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setKeyboardgbs(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.macropads} label='Macropads' value={ keyboards.macropads }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setMacropads(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.macropadgbs} label='Macropad group buys' value={ keyboards.macropadgbs }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setMacropadgbs(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.keyboardsDesigned} label='Keyboards you designed' value={ keyboards.keyboardDesigned }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setKeyboardDesigned(parseInt(event.target.value))) } />
                    </InputGroup>
                    <InputGroup title="S: Switches">
                        <InputRow tooltip={tooltips.switches} label='Switches' value={ switches.switches }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setSwitches(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.switchesModified} label='Switch sets (modified)' value={ switches.switchesModified }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setSwitchesModified(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.switchgbs} label='Switch group buys' value={ switches.switchgbs }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setSwitchgb(parseInt(event.target.value))) } />
                    </InputGroup>
                    <InputGroup title="C: Keycaps">
                        <InputRow tooltip={tooltips.keycaps} label='Keycaps' value={ keycaps.keycaps }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setKeycaps(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.keycapgbs} label='Keycap group buys' value={ keycaps.keycapgbs }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setKeycapgbs(parseInt(event.target.value))) } />
                    </InputGroup>
                    <InputGroup title="A: Accessories / 4">
                        <InputRow tooltip={tooltips.artisans} label='Artisans' value={ other.artisans }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setArtisans(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.artisangbs} label='Artisan group buys' value={ other.artisangbs }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setArtisangbs(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.cables} label='Cables' value={ other.cables }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setCables(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.cablegbs} label='Cable group buys' value={ other.cablegbs }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setCablegbs(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.deskpads} label='Deskpads' value={ other.deskpads }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setDeskpads(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.deskpadgbs} label='Deskpad group buys' value={ other.deskpadgbs }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setDeskpadgbs(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.novelties} label='Novelty kits' value={ other.noveltyKits }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setNoveltyKits(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.noveltygbs} label='Novelty kit group buys' value={ other.noveltyKitgbs }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setNoveltyKitgbs(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.others} label='Other accessories' value={ other.other }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setOther(parseInt(event.target.value))) } />
                        <InputRow tooltip={tooltips.othergbs} label='Other accessory group buys' value={ other.othergbs }
                            handleChange={ (event: React.ChangeEvent<HTMLInputElement>) => dispatch(setOthergbs(parseInt(event.target.value))) } />
                    </InputGroup>
                </div>
            </div>
    )
}
