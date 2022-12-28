import React from 'react';
import { Hurley } from './features/hurley/Hurley';
import Collapsible from './features/collapsible/Collapsible';
import './App.scss';

function App() {
  return (
    <section className="section">
            <header>
                <a
                    href="https://twitter.com/imyke"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="img/twitch-head.png"
                        className="avatar"
                        alt="Myke's Twitch avatar"
                    />
                </a>
                <a href="http://myke.live" target="_blank" rel="noreferrer">
                    <img
                        src="img/myke-live.png"
                        className="logo"
                        alt="myke.live logo"
                    />
                </a>
            </header>
            <div id="main">
              <Hurley />
            </div>
            <div className="explain container">
                <p>
                    The Hurley Number was created by members of the #keyboards channel of the <a href="https://www.relay.fm/">Relay.fm</a> members'
                    discord as a standardised measure of the size of keyboard collections and descent down the keyboard rabbit hole.
                </p>
            </div>
            <div id="definitions" className="container">
                <Collapsible header="Definitions" startOpen={false}>
                    <dl>
                        <dt>Keyboards</dt>
                        <dd>The total number of keyboards you own. A keyboard is a PCB and whatever it is
                            mounted to/on/in (whether assembled or not). Stand-alone or extra PCBs are counted
                            as accessories. Macropads and Num Pads are counted as keyboard kits; however, their
                            switches and keycaps are not counted in their respective categories.</dd>

                        <dt>Unmodified Switch  Sets</dt>
                        <dd>The total number of stock switch sets that you own. A set of switches must be
                            sufficient to fill a board (excluding macropads and number pads) to count.
                            Duplicate sets are counted if they were purchased separately or are used/intended
                            to be used on separate boards.</dd>

                        <dt>Modified Switch Sets</dt>
                        <dd>The total number of customized sets of switches that have been modified by you.
                            Modified switch sets include those that you have lubed, filmed, or made other
                            similar modifications to. Clipping switch pins does not count as a modification. If
                            you make Frankenswitches (where you take components from one set of switches and use
                            them to replace the components of another set of switches) both sets are considered
                            modified if both sets have been reassembled. Each set of modified switches is
                            counted as a single set regardless of the number of modifications made.</dd>

                        <dt>Keycaps</dt>
                        <dd>The total number of keycaps sets you own. If you have multiple kits for the same set
                            they are all counted as one set unless they can be used to fully kit multiple boards
                            in which case they are counted as a number of sets equal to the number of boards
                            they can fully kit simultaneously. Artisan Keycaps are counted as Accessories.</dd>

                        <dt>Artisans</dt>
                        <dd>The total number of artisan keycaps you own. This does not include novelties.</dd>

                        <dt>Deskpads</dt>
                        <dd>The total number of desk mats you own.</dd>

                        <dt>Cables</dt>
                        <dd>The total number of 'fancy' cables you own.</dd>

                        <dt>Other Accessories</dt>
                        <dd>The total number of other keyboard accessories you own such as stand-alone or spare
                            PCBs, alternate plates, switch testers, etc.</dd>

                        <dt><i>X</i> Group Buys</dt>
                        <dd>The total number of orders, pre-orders, group buys, etc. of the relevant item that
                            you currently have placed but have not yet received.</dd>

                    </dl>
                </Collapsible>
            </div>
            <div id="faq" className="container">
                <Collapsible header="FAQ" startOpen={false}>
                    <dl>
                        <dt>What... what is this?</dt>
                        <dd>The Hurley Number is a formula created by members of the #keyboards channel of the
                            <a href="https://relay.fm">Relay FM</a> members' discord. It's intended to be a
                            standardized measure of the size of your keyboard collection and how far down the
                            keyboard rabbit hole you've gone.</dd>

                        <dt>I'm a normal person, I only own one keyboard that I bought pre-assembled!</dt>
                        <dd>A pre-assembled keyboard counts as 1 keyboard, 1 unmodified switch set, and 1
                            keycap set; so your Hurley number is 1.</dd>

                        <dt>What about "non-mechanical" keyboards?</dt>
                        <dd>Follow your heart. Some members of the community count them, others do not. If you
                            do count them each board counts as 1 keyboard, 1 unmodified switch set, and 1 keycap
                            set.</dd>

                        <dt>What about tools and supplies (like brushes, lube, silicon, foam, etc.)?</dt>
                        <dd>We, your humble Keyboard Sherpas, don't generally count these kinds of things. But
                            follow your heart.</dd>

                        <dt>What about keycap novelty kits?</dt>
                        <dd>If you want, you can count those as other accessories. Follow your heart.</dd>

                        <dt>I have a keycap set with an extra alphas kit, does that count as two keycap sets?
                            </dt>
                        <dd>If the extra alphas kit gives you enough keys to fully assemble two keyboards, then
                            yes, that counts as two.</dd>

                        <dt>Why is the count divided by 3?</dt>
                        <dd>There are a few reasons: 1) it makes the resulting score more manageable. 2) It
                            makes the outcome more intuitive. A complete keyboard (board + switches + keycaps)
                            gets a score of 1.</dd>

                        <dt>Why is this a thing?</dt>
                        <dd>Because keyboards are cool! Next question.</dd>

                        <dt>How do I stop?</dt>
                        <dd>If we figure it out, we'll let you know. In the meantime join our support/enablers
                            group at <a href="https://relay.fm/membership">relay.fm/membership</a>.</dd>

                        <dt>What is Myke's Hurley Score?</dt>
                        <dd>As of 2022-01-21T17:34:00Z, Myke's Hurley Score is 39.6</dd>

                        <dt>What is the ratio of Myke's Hurley Number to The Hackett Constant?</dt>
                        <dd>As of 2022-01-21T17:34:00Z, the ratio of Myke's Hurley Score to the Hackett
                            Constant is 1.92:1. The Hurley Constant has not yet been established.</dd>

                        <dt>I prefer to do math by hand, what's the formula?</dt>
                        <dd>
                            Masochist.<br />
                            <img alt='the formula for the Hurley Number' src="img/formula.png"></img>
                            </dd>
                        
                    </dl>
                </Collapsible>
            </div>
            <div className="explain container">
                <p>
                    With contributions from Ben, Brokenflows, Brooklyn Bob, Doc Parsons, Griese, _IanOfEarth,
                    instantiatethis, MattVortex, Sam Ballard, steevml, twohandsofblue, and XiXora.
                </p>
            </div>
        </section>
  );
}

export default App;
