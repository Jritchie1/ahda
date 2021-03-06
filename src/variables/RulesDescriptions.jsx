import React, { Fragment } from 'react';

let rules_descriptions = [
  <Fragment>
  <div id="rules">
    <h1 id="Intro">The Thing That Should Not Be...</h1>

    <blockquote><em>The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents.</em><br></br>
    – <cite>H. P. Lovecraft, <em>"The Call of Cthulhu"</em></cite></blockquote>

    <p><b>Halt!</b> Read the Learn to Play book first. As questions arise during gameplay, use this document's glossary as a reference. After playing the tutorial game, we recommend reading the <a href="#Appendix_I_Initiation_Sequence">appendices</a> beginning on page 22.</p>

    <p>This document is intended as the definitive source for rules information, but does not teach players how to play the game. Players should first read the Learn to Play book in its entirety and use this Rules Reference as needed while playing the game.</p>

    <p>The majority of this guide consists of a glossary, which provides an alphabetical listing of terms and situations a player might encounter during a game. This section should be the first destination for players who have a rules question.</p>

    <p>The latter part of this guide contains four appendices. The first appendix describes the process of playing cards or initiating triggered abilities. The second appendix provides timing diagrams that illustrate the structure of a game round, as well as a detailed explanation of how to handle each game step presented in those diagrams. The third appendix lists the complete rules for setting up a game of <em>Arkham Horror: The Card Game</em>. The fourth appendix provides a detailed anatomy of each cardtype.</p>

    <h2 id="The_Golden_Rules">The Golden Rules</h2>

    <p>If the text of this Rules Reference directly contradicts the text of the Learn to Play book, the text of the Rules Reference takes precedence.</p>

    <p>If the text of a card directly contradicts the text of either the Rules Reference or the Learn to Play book, the text of the card takes precedence.</p>

    <h2 id="The_Grim_Rule">The Grim Rule</h2>

    <p>If players are unable to find the answer to a rules or timing conflict in this Rules Reference, resolve the conflict in the manner that the players perceive as the worst possible at that moment with regards to winning the scenario, and continue with the game.</p>

    <p>When investigators are forced to make a choice and there are multiple valid options, the lead investigator decides between those options. The Grim Rule does not play a part in these choices.</p>

    <p><i>For example: Locked Door reads “Attach to the location with the most clues,and without a Locked Door attached.” If there are 3 locations that are tied for the most clues, and none of them already have a Locked Door attached, the lead investigator decides between those 3 locations. Players are not forced to decide which of those 3 options would be the objectively worst option.</i></p>

    <p>The Grim Rule only comes into effect if players are unable to find the answer to a rules or timing conflict, and are thus unable to continue playing the game. It is designed to keep the game moving when looking up the correct answer would be too time-consuming or inconvenient for the players. The Grim Rule is not an exhaustive answer to rules/timing conflicts.</p>

    <h1 id="Glossary">Glossary</h1>

    <p>The following is an alphabetical list of entries for game rules, terms, and situations that may occur during play.</p>

    <h2 id="A_An">A, An</h2>

    <p>When used to describe a condition, the words "a" or "an" are satisfied if one or more of the conditional elements are present. <em>For example, an investigator with 3 resources will satisfy the condition of "Each investigator with a resource."</em></p>

    <h2 id="Ability">Ability</h2>

    <p>An ability is the specialized game text that indicates how a card affects the game.</p>

    <ul>

    <li>  Card abilities only interact with the game if the card bearing the ability is in play, unless the ability (or rules for the cardtype) specifically references its use from an out-of-play area.</li>

    <li>  Card abilities only interact with other cards that are in play, unless the ability specifically references an interaction with cards in an out-of-play area.</li>

    <li>  If multiple instances of the same ability are in play, each instance interacts with (or may interact with) the game state individually.</li>

    </ul>

    <p>The various types of card abilities are: constant abilities, forced abilities, revelation abilities, triggered abilities, keywords, and enemy instructions (spawn and prey). Each type is described in detail below.</p>

    <p>See also: "<a href="#Costs">Costs</a>" on page 7, "<a href="#Effects">Effects</a>" on page 9, "<a href="#Qualifiers">Qualifiers</a>" on page 17, "<a href="#Self_Referential_Text">Self-Referential Text</a>" on page 18.</p>

    <h3 id="Abilities_Constant">Constant Abilities</h3>

    <p>Constant abilities are simply stated on a card with no special formatting. Constant abilities are always interacting with the game state as long as the card is in play. (Some constant abilities continuously seek a specific condition, denoted by words such as "during" or "while." The effects of such abilities are active any time the specified condition is met.) Constant abilities have no point of initiation.</p>

    <h3 id="Abilities_Forced">Forced Abilities</h3>

    <p>A forced ability is identified by a bold "<strong>Forced</strong> – " command. Forced abilities initiate and interact with the game state automatically at a specified timing point. Such a timing point is usually indicated by words such as: "when," "after," "if," or "at."</p>

    <ul>

    <li>  If a forced ability does not have the potential to change the game state, the ability does not initiate.</li>

    <li>  The initiation of a forced ability that has the potential to change the game state is mandatory each time its specified timing point is met.</li>

    <li>  A forced ability with a timing point beginning with the word "when..." automatically initiates as soon as the specified timing point is reached, but before its impact upon the game state resolves.</li>

    <li>  A forced ability with a timing point beginning with the word "after..." automatically initiates immediately after that timing point's impact upon the game state has resolved.</li>

    <li>  For any given timing point, all forced abilities initiated in reference to that timing point must resolve before any <span title="reaction" className="icon-reaction"></span> abilities (see below) referencing the same timing point in the same manner may be initiated.</li>

    </ul>

    <p>See "<a href="#Priority_of_Simultaneous_Resolution">Priority of Simultaneous Resolution</a>" on page 17.</p>

    <h3 id="Abilities_Revelation">Revelation Abilities</h3>

    <p>A revelation ability, indicated by a bold "<strong>Revelation</strong> – " command on an encounter card or weakness, initiates as that card is drawn by an investigator (see "<a href="#Revelation">Revelation</a>" on page 18).</p>

    <h3 id="Abilities_Triggered">Triggered Abilities</h3>

    <p>A triggered ability is any ability prefaced by either a <span title="free" className="icon-free"></span> icon, a <span title="reaction" className="icon-reaction"></span> icon, or an <span title="action" className="icon-action"></span> icon. If the ability has one or more prerequisites (costs and/or conditions), these are listed in text immediately following the icon. A player must always meet the prerequisites of a triggered ability in order to trigger that ability. There are three types of triggered abilities:</p>

    <p>Free triggered abilities (<span title="free" className="icon-free"></span>) – A <span title="free" className="icon-free"></span> triggered ability may be triggered as a player ability during any player window. (See "<a href="#Appendix_II_Timing_and_Gameplay">Appendix II: Timing and Gameplay</a>" on page 22 for a complete list of player windows.)</p>

    <p>Reaction triggered abilities (<span title="reaction" className="icon-reaction"></span>) – A <span title="reaction" className="icon-reaction"></span> triggered ability with a specified triggering condition may be triggered any time that triggering condition is met. <em>For example: "<span title="reaction" className="icon-reaction"></span> After you defeat an enemy:"</em></p>

    <ul>

    <li>  A <span title="reaction" className="icon-reaction"></span> ability with a triggering condition beginning with the word "when..." may be used after the specified triggering condition initiates, but before its impact upon the game state resolves.</li>

    <li>  A <span title="reaction" className="icon-reaction"></span> ability with a triggering condition beginning with the word "after..." may be used immediately after that triggering condition's impact upon the game state has resolved.</li>

    <li>  Each <span title="reaction" className="icon-reaction"></span> ability may be triggered only once each time the specified condition on the ability is met. <em>For example, an ability that is triggered "After X occurs," may be used once each time "X" occurs.</em></li>

    </ul>

    <p>Action triggered abilities (<span title="action" className="icon-action"></span>) – An <span title="action" className="icon-action"></span> triggered ability may be triggered during a player's turn in the investigation phase through the use of the activate action, and only if the player uses one action for each <span title="action" className="icon-action"></span> specified in the ability's cost.</p>

    <p>All triggered abilities are governed by the following rules:</p>

    <ul>

    <li>  Triggered abilities on a card a player controls are optionally triggered (or not) by that player at the appropriate timing moment, as indicated by the ability.</li>

    <li>  A triggered ability can only be initiated if its effect has the potential to change the game state, and its cost (if any) has the potential to be paid in full, taking active cost modifiers into account. This potential is assessed without taking into account the consequences of the cost payment or any other ability interactions.</li>

    <li>  Once an ability is initiated, players must resolve as much of the effect as possible, unless the effect uses the word "may" (see "<a href="#May">May</a>" on page 15).</li>

    </ul>

    <h3 id="Abilities_Keywords">Keywords</h3>

    <p>A keyword is a card ability which conveys specific rules to its card (see "<a href="#Keywords">Keywords</a>" on page 13).</p>

    <h3 id="Spawn_Instructions_and_Prey_Instructions">Spawn Instructions and Prey Instructions</h3>

    <p>Spawn instructions inform where an enemy spawns as it enters play (see "<a href="#Spawn">Spawn</a>" on page 19).

    </p><p>Prey instructions inform which investigator an enemy pursues and/or engages if it has a choice (see "<a href="#Prey">Prey</a>" on page 17).

    </p><h3 id="Action_Designators">Action Designators</h3>

    <p>Some abilities have bold action designators (such as <strong>Fight</strong>, <strong>Evade</strong>, <strong>Investigate</strong>, or <strong>Move</strong>). Activating such an ability performs the designated action as described in the rules, but modified in the manner described by the ability.</p>

    <h2 id="Act_Deck_and_Agenda_Deck">Act Deck and Agenda Deck</h2>

    <p>The act deck represents the progress the investigators can make in a scenario. The agenda deck represents the progress and objectives of the dark forces arrayed against the investigators in a scenario. Generally, advancing the act deck is good for the investigators, and advancing the agenda deck is bad for the investigators.</p>

    <ul>

    <li>  The act deck advances if the investigators, as a group, spend the requisite number of clues (as indicated by the act card). An act card may indicate a flat value (such as "4") or a per investigator value (as indicated by the <span title="per_investigator" className="icon-per_investigator"></span> icon). This is normally done as a <span title="free" className="icon-free"></span> player ability. Any or all investigators may contribute any number of clues towards the total number of clues required to advance the act. If the act has an "<strong>Objective</strong> – " instruction, that instruction overrides or adds additional requirements to the spending of those clues.</li>

    <li>  The agenda deck advances if the requisite number of doom is in play (doom on the agenda card as well as doom on any other cards in play), as indicated by the agenda card. An agenda card may indicate a flat value or a per investigator value. If the agenda has an "<strong>Objective</strong> – " instruction, that instruction overrides or adds additional requirements to meeting this doom requirement.</li>

    <li>  The act/agenda on top of the act/agenda deck is referred to as the "current" act/agenda.</li>

    </ul>

    <p>To advance the act deck or the agenda deck, follow these steps, in order:</p>

    <ol>

    <li>  Remove all tokens from the card to be advanced. If the agenda deck is advancing, remove all doom from each card in play.</li>

    <li>  Flip the advancing card over and follow the instructions on the reverse ("b") side.</li>

    <ul>

    <li>  If the reverse side of the act or agenda is an encounter card, follow the rules for drawing that encounter cardtype. Otherwise, simply follow the instructions on the card.</li>

    </ul>

    <li>  Sometimes, the advancing act/agenda specifies which card becomes the next act/agenda. If it does not, the next card in the deck becomes the current act/agenda. As a new card becomes the current act/agenda, the advancing card is simultaneously removed from the game.</li>

    <ul>

    <li>  Some instructions in the act and agenda decks (as well as on other encounter cardtypes) contain resolution points, in the format of: "<strong>(→R#)</strong>." If a resolution point is reached, the scenario ends. Read the designated resolution in the campaign guide.</li>

    </ul>

    </ol>

    <p>See also: "<a href="#Clues">Clues</a>" on page 6, "<a href="#Doom">Doom</a>" on page 9.</p>

    <h2 id="Action">Action</h2>

    <p>During his or her turn, an investigator is permitted to take up to <strong>three</strong> actions. When performing an action, all costs of the action are first paid. Then, the consequences of the action resolve.</p>

    <ul>

    <li>  If an investigator is instructed to lose 1 or more actions, he or she has that many fewer actions to take during that round.</li>

    <li>  Ruling from Matthew Newman regarding losing additional actions: If you are instructed to lose 1 or more actions, you have that many fewer actions to take during your turn. This is referring to your normal three \"full\" actions. So if you are instructed to lose 1 or more actions, those must be the ones that are lost first. If you have no more of those actions to lose, then you start losing \"additional\" actions, of your choice.</li>

    </ul>

    <p>For a complete list of the available actions, see "<a href="#Investigation_Phase">2.2.1 Investigator takes an action, if able</a>" on page 24.</p>

    <h2 id="Activate_Action">Activate Action</h2>

    <p>"Activate" is an action an investigator may take during his or her turn in the investigation phase.

    </p><p>When this action is taken, the investigator initiates an ability that specifies one or more <span title="action" className="icon-action"></span> icons as part of its ability cost. The number of <span title="action" className="icon-action"></span> icons in the ability's cost determines how many actions the investigator is required to use for this activate action. When performing an activate action, all of that action's costs are simultaneously paid. Then, the consequences of that action resolve.</p>

    <p>An investigator is permitted to activate abilities from the following sources:</p>

    <ul>

    <li>  A card in play and under his or her control. This includes his or her investigator card.</li>

    <li>  A scenario card that is in play and at the same location as the investigator. This includes the location itself, encounter cards placed at that location, and all encounter cards in the threat area of any investigator at that location.</li>

    <li>  The current act or current agenda card.</li>

    </ul>

    <h2 id="Active_Player">Active Player</h2>

    <p>The active player is the player taking his or her turn during the investigation phase.</p>

    <h2 id="After">After</h2>

    <p>The word "after" refers to the moment immediately after the specified timing point or triggering condition has fully resolved.</p>

    <p><em>(For example, an ability that reads "After you draw an enemy card" initiates immediately after resolving all of the steps for drawing an enemy – resolving its revelation ability, spawning it, etc.)</em></p>

    <p>See also: "<a href="#Ability">Ability</a>" on page 2, "<a href="#Priority_of_Simultaneous_Resolution">Priority of Simultaneous Resolution</a>" on page 17.</p>

    <h2 id="Additional_Costs">Additional Costs</h2>

    <p>Some cards add additional costs that must be paid in order to perform certain effects or actions, in the form of "As an additional cost to (specified effect/action) you must (additional cost)" or "You must (additional cost) to (specified effect/action)."</p>

    <p>Additional costs are costs that can be paid outside the normal timing point of paying costs (for instance, during the resolution of an effect). If an effect that requires an additional cost would resolve, the additional cost must be paid at that time. If the additional cost cannot be paid, that aspect of the effect fails to resolve.</p>

    <p>Additional costs do not have to be paid when a <b>Forced</b> effect or mandatory instruction (such as in the Campaign Guide, or on the back of an Act or Agenda card) requires an investigator to resolve an effect.</p>

    <p><i>For example: “Ashcan” Pete is at the Miskatonic Quad and activates Duke’s second ability, which reads: "<span title="action" className="icon-action"></span> Exhaust Duke: <b>Investigate</b>. You investigate with a base skill of 4. You may move to a connecting location immediately before investigating with this effect.” Pete pays the cost to activate this ability, which is spending one action and exhausting Duke. Then Pete resolves the ability, first moving to the Orne Library, followed by investigating. The Orne Library, however, reads: “You must spend 1 additional action to investigate the Orne Library.” This adds an additional cost that must be paid in order to investigate the Orne Library. This additional cost is paid when the investigate action would resolve, outside the normal timing point for paying costs. If Pete cannot spend the additional action, that aspect of Duke’s effect fails to resolve.</i></p>

    <h2 id="Agenda_Deck">Agenda Deck</h2>

    <p>See "<a href="#Act_Deck_and_Agenda_Deck">Act Deck and Agenda Deck</a>" on page 3.</p>

    <h2 id="Alert">Alert (added in <em>The Forgotten Age</em>)</h2>

    <p>Each time an investigator fails a skill test while attempting to evade an enemy with the alert keyword, after applying all results for that skill test, that enemy performs an attack against the evading investigator. An enemy does not exhaust after performing an alert attack. This attack occurs whether the enemy is engaged with the evading investigator or not.</p>

    <h2 id="Aloof">Aloof</h2>

    <p>Aloof is a keyword ability. An enemy with the aloof keyword does not automatically engage investigators at its location.</p>

    <ul>

    <li>  When an aloof enemy spawns, it spawns unengaged.</li>

    <li>  An investigator may use the engage action or a card ability to engage an aloof enemy.</li>

    <li>  An investigator cannot attack an aloof enemy while that enemy is not engaged with an investigator.</li>

    </ul>

    <h2 id="Asset_Cards">Asset Cards</h2>

    <p>Asset cards represent items, allies, talents, spells, and other reserves that may assist or be used by an investigator during a scenario.

    </p><ul>

    <li>  When you play an asset, it is placed in your play area. Generally, assets remain in play unless discarded by a card ability or game step.</li>

    <li>  Some assets have health and/or sanity. When an investigator is dealt damage or horror, that investigator may assign some or all of that damage or horror to eligible asset cards he or she controls (see "<a href="#Dealing_Damage_Horror">Dealing Damage/Horror</a>" on page 7).</li>

    <li>  Most assets take up one or more slots while in play (see "<a href="#Slots">Slots</a>" on page 19).</li>

    <li>  Some assets have an encounter set icon and no level indicator. Such assets are known as Story Assets. Story Assets are part of an encounter set and may not be included in a player's deck unless the resolution or setup of a scenario grants that player permission to do so.</li>

    </ul>

    <h2 id="At">At</h2>

    <p>Some abilities have triggering conditions that use the words "at" instead of specifying "when" or "after," such as "at the end of the round." These effects trigger in between any "when..." abilities and any "after..." abilities with the same triggering condition.</p>

    <h2 id="Attach_To">Attach To</h2>

    <p>If a card uses the phrase "attach to" it must be attached to (placed beneath and slightly overlapped by) the specified game element as it enters play. Once attached, such a card is referred to as an attachment.

    </p><ul>

    <li>  The "attach to" phrase is checked for legality each time a card would be attached to a game element, but is not checked again after that attachment occurs. If the initial "attach to" check does not pass, the card is not able to be attached, and remains in its prior state or game area. If such a card cannot remain in its prior state or game area, discard it.</li>

    <li>  Once in play, an attachment remains attached until either the attachment or the game element to which it is attached leaves play (in which case the attachment is discarded), or unless a card ability explicitly detaches the card.</li>

    <li>  An attachment exhausts and readies independently of the game element it's attached to.</li>

    </ul>

    <h2 id="Attacker_Attacked">Attacker, Attacked</h2>

    <p>An "attacker" is an entity (usually an enemy or investigator) that is resolving its attack against another entity. The entity being attacked is referred to as the "attacked enemy" or the "attacked investigator."</p>

    <h2 id="Attack_of_Opportunity">Attack of Opportunity</h2>

    <p>Each time an investigator is engaged with one or more ready enemies and takes an action other than to <strong>fight</strong>, to <strong>evade</strong>, or to activate a <strong>parley</strong> or <strong>resign</strong> ability, each of those enemies makes an attack of opportunity against the investigator, in the order of the investigator's choosing. Each attack deals that enemy's damage and horror to the investigator.</p>

    <ul>

    <li>  An attack of opportunity is made immediately after all costs of initiating the action that provoked the attack have been paid, but before the application of that action's effect upon the game state.</li>

    <li>  An ability that costs more than one action only provokes one attack of opportunity from each engaged enemy.</li>

    <li>  An enemy does not exhaust while making an attack of opportunity.</li>

    <li>  After all attacks of opportunity are made, continue with the resolution of the action which instigated the attack.</li>

    <li>  Attacks of opportunity count as enemy attacks for the purposes of card abilities.</li>

    </ul>

    <p>Attacks of Opportunity are only triggered when 1 or more of an investigator’s actions are being spent or used to trigger an ability or action. <span title="free" className="icon-free"></span> abilities with a bold action designator do not provoke attacks of opportunity.</p>

    <h2 id="Automatic_Failure_Success">Automatic Failure/Success</h2>

    <p>Some card or token abilities may cause a skill test to automatically fail or to automatically succeed. If a skill test automatically fails or automatically succeeds, it does so during step "ST.6" of the "<a href="#Skill_Test_Timing">Skill Test Timing</a>" process outlined on page 26.</p>

    <ul>

    <li>  If a skill test automatically fails, the investigator's total skill value for that test is considered 0.</li>

    <li>  If a skill test automatically succeeds, the total difficulty of that test is considered 0.</li>

    </ul>

    <h2 id="Base_Value">Base Value</h2>

    <p>Base value is the value of an element before any modifiers are applied. Unless otherwise specified, the base value of an element derived from a card is the value printed on that card.</p>

    <h2 id="Bearer">Bearer</h2>

    <p>The bearer of a weakness is the investigator who started the game with the weakness in his or her deck or play area.</p>

    <p>See "<a href="#Weakness">Weakness</a>" on page 21.</p>

    <h2 id="Blank">Blank</h2>

    <p>If a card's printed text box is considered "blank" by an ability, that text box is treated as if it did not have any of its printed content. Text and/or icons gained from another source are not blanked.</p>

    <ul>

    <li>  A card's text box includes: traits, keywords, card text and abilities.</li>

    </ul>

    <h2 id="Campaign_Play">Campaign Play</h2>

    <p>A campaign is a series of interrelated scenarios in which each player plays the same investigator from one scenario to the next. As a campaign progresses, the investigator gains experience and trauma, and this is reflected by changes in his or her deck. Each decision made in a campaign may have repercussions in a later scenario.</p>

    <p>When starting a campaign, follow the instructions for that campaign's setup in the campaign guide. After playing through a scenario during a campaign, record the specified results of that scenario in the campaign log.</p>

    <h3 id="Experience">Experience</h3>

    <p>After recording the results of a scenario, the investigators are ready to reflect on their experiences and purchase new cards for their decks. To do this, follow these steps, in order:</p>

    <ol>

    <li><strong>Count experience.</strong> Each investigator earns experience equal to the total victory value of all cards in the victory display plus or minus any bonuses or penalties indicated by the campaign guide for that resolution. This total is added to any unspent experience an investigator has recorded from previous scenarios in this campaign.</li>

    <li><strong>Purchase new cards.</strong> New cards may be purchased and added to a player's deck by spending experience equal to the card's level (denoted by a number of pips in the upper left hand corner of the card). While purchasing new cards, observe the following rules:</li>

    <ul>

    <li>  An investigator's deckbuilding guidelines (found on the back of the investigator card) must be observed while that investigator is purchasing new cards. Only cards the investigator has access to may be purchased. The deck-size requirement must also be maintained, so that for each (nonpermanent) card purchased and added to a deck, a different card is removed from the deck. Weakness cards and cards that must be included in an investigator's deck may not be removed while that investigator is purchasing new cards.</li>

    <li>  Each card costs experience equal to the card's level, <em>to a minimum of 1</em> (purchasing a level zero card still costs 1 experience). The number of pips beneath a card's cost indicates the card's level.</li>

    <li>  When purchasing a higher level version of a card with the same title, the investigator may choose to "upgrade" that card by paying only the difference in experience (to a minimum of 1) between the two cards and removing the lower level version of the card from his or her deck.</li>

    <li>  New cards are purchased (or upgraded) individually. If an investigator wishes to purchase more than 1 copy of a new card, each copy must be paid for separately, and one card must be removed from that investigator's deck for each copy purchased.</li>

    <li>  The above processes, and any specific instructions provided by the campaign guide, are the only methods by which a player may modify his or her deck during a campaign.</li>

    </ul>

    <li><strong>Record unspent experience.</strong> Each investigator records any unspent experience on the campaign log. This experience may be spent at a later time during this campaign.</li>

    </ol>

    <h3 id="Trauma">Trauma</h3>

    <p>Trauma reflects permanent damage that has been done to an investigator's health and/or psyche.</p>

    <p>If an investigator is defeated in a scenario that investigator is eliminated from the scenario but not necessarily from the campaign.</p>

    <p>If an investigator is defeated by taking damage equal to his or her health, he or she suffers 1 physical trauma (recorded in the campaign log). For each physical trauma an investigator has, that investigator begins each subsequent scenario in the campaign with 1 damage. If an investigator has physical trauma equal to his or her printed health, the investigator is <strong>killed</strong>.</p>

    <p>If an investigator is defeated by taking horror equal to his or her sanity, he or she suffers 1 mental trauma (recorded in the campaign log). For each mental trauma an investigator has, that investigator begins each subsequent scenario in the campaign with 1 horror. If an investigator has mental trauma equal to his or her printed sanity, the investigator is driven <strong>insane</strong>.</p>

    <p>If an investigator is defeated by simultaneously taking damage equal to his or her health <em>and</em> horror equal to his or her sanity, he or she chooses which type of trauma to suffer.</p>

    <p>If an investigator is killed or driven insane, that player must choose a new investigator to use in the next scenario, and creates a new deck for that investigator. Investigators that are killed or driven insane cannot be used for the remainder of the campaign (see "<a href="#Killed_Insane_Investigators">Killed/Insane Investigators</a>" on page 13).</p>

    <p>If a player attempts to choose a new investigator and there are no investigators remaining in the pool, the players have lost and the campaign ends.</p>

    <h3 id="Defeat_by_Card_Ability">Defeat by Card Ability</h3>

    <p>An investigator may be defeated by a card ability. A defeated investigator is eliminated from the game (see "<a href="#Elimination">Elimination</a>" on page 10). Should this occur, follow the instructions of the card ability to determine if there are any long-term repercussions of the defeat.</p>

    <h3 id="Advancing_to_Next_Scenario">Advancing to Next Scenario</h3>

    <p>After completing a scenario, resolving its resolution, updating the campaign log, and purchasing any new cards, advance to the next scenario (sequentially) in the campaign, unless the scenario resolution explicitly directs the investigators to a different scenario.</p>

    <h3 id="Joining_or_Leaving_a_Campaign">Joining or Leaving a Campaign</h3>

    <p>Once a campaign has begun, players can freely drop in and out of the campaign in between scenarios.</p>

    <p>If a player leaves the campaign, do not delete that player's information from the campaign log, as he or she may re-join at any time between scenarios.</p>

    <p>If a new player joins the campaign, he or she must choose an investigator not previously used during this campaign. That player begins as if it were his or her first scenario in the campaign, with no experience and no trauma.</p>

    <h2 id="Cancel">Cancel</h2>

    <p>Some card abilities can "cancel" other card or game effects. Cancel abilities interrupt the initiation of an effect, and prevent the effect from initiating.</p>

    <ul>

    <li>  Any time the effects of an ability are canceled, the ability (apart from its effects) is still regarded as initiated, and any costs have still been paid. The effects of the ability, however, are prevented from initiating and do not resolve.</li>

    <li>  If the effects of an event card are canceled, the card is still regarded as played, and it is still placed in its owner's discard pile.</li>

    <li>  If the effects of a treachery card are canceled, the card is still regarded as having been drawn, and it is still placed in the encounter discard pile.</li>

    </ul>

    <h2 id="Cannot">Cannot</h2>

    <p>The word "cannot" is absolute, and cannot be countermanded by other abilities.</p>

    <h2 id="Cardtypes">Cardtypes</h2>

    <p>The game's cardtypes are presented in Appendix IV, with detailed card anatomies (see "<a href="#Appendix_IV_Card_Anatomy">Appendix IV: Card Anatomy</a>" on page 28).</p>

    <ul>

    <li>  If an ability causes a card to change its cardtype, it loses all other cardtypes it might possess and functions as would any card of the new cardtype.<p></p>

    </li></ul>

    <p>See also: "<a href="#Asset_Cards">Asset Cards</a>" on page 4, "<a href="#Enemy_Cards">Enemy Cards</a>" on page 10, "<a href="#Event_Cards">Event Cards</a>" on page 11, "<a href="#Location_Cards">Location Cards</a>" on page 14, "<a href="#Skill_Cards">Skill Cards</a>" on page 18, "<a href="#Treachery_Cards">Treachery Cards</a>" on page 20.</p>

    <h2 id="Chaos_Tokens">Chaos Tokens</h2>

    <p>Chaos tokens are revealed from the chaos bag during skill tests, to modify or influence the results of the skill test.</p>

    <p><span title="skull" className="icon-skull"></span> <span title="cultist" className="icon-cultist"></span> <span title="elder_thing" className="icon-elder_thing"></span> <span title="tablet" className="icon-tablet"></span> – If any of these tokens are revealed for a skill test, resolve the effect for that symbol as indicated on the scenario reference card for the current scenario.</p>

    <p><span title="auto_fail" className="icon-auto_fail"></span> – This is the auto-fail token. If this token is revealed for a skill test, it indicates the investigator automatically fails the test (see "<a href="#Automatic_Failure_Success">Automatic Failure/Success</a>" on page 5).</p>

    <p><span title="elder_sign" className="icon-elder_sign"></span> – This is the elder sign token. If this token is revealed for a skill test, resolve the <span title="elder_sign" className="icon-elder_sign"></span> effect on the investigator card belonging to the player performing the skill test.</p>

    <p>If a revealed chaos token (or the effect referenced by a chaos token) has a numerical modifier, that modifier is applied to the investigator's skill value for this test.</p>

    <p>See "<a href="#Skill_Test_Timing">ST.3 Reveal chaos token</a>" on page 26.</p>

    <h2 id="Choices_and_the_Grim_Rule">Choices, and the Grim Rule</h2>

    <p>When investigators are forced to make a choice and there are multiple valid options, the lead investigator decides between those options. The Grim Rule does not play a part in these choices.</p>

    <p><i>For example: Locked Door reads “Attach to the location with the most clues,and without a Locked Door attached.” If there are 3 locations that are tied for the most clues, and none of them already have a Locked Door attached, the lead investigator decides between those 3 locations. Players are not forced to decide which of those 3 options would be the objectively worst option.</i></p>

    <p>The Grim Rule only comes into effect if players are unable to find the answer to a rules or timing conflict, and are thus unable to continue playing the game. It is designed to keep the game moving when looking up the correct answer would be too time-consuming or inconvenient for the players. The Grim Rule is not an exhaustive answer to rules/timing conflicts.</p>

    <h2 id="Clues">Clues</h2>

    <p>Clues represent the progress the investigators can make towards solving a mystery, unraveling a conspiracy, and/or advancing in a scenario.

    </p><ul>

    <li>  The first time an investigator enters a location, that location is revealed (turned face-up) and a number of clues equal to that location's clue value are placed on that location (from the token pool). Most clue values are conveyed as a "per investigator (<span title="per_investigator" className="icon-per_investigator"></span>)" value. This may occur during setup.</li>

    <li>  A clue at a location can be discovered by successfully investigating the location (see "<a href="#Investigate_Action">Investigate Action</a>" on page 13), or by a card ability. If an investigator discovers a clue, he or she takes the clue from the location and places it on his or her investigator card, under his or her control.</li>

    <li>  If there are no "<strong>Objective</strong> – " requirements for advancing the current act, during any investigator's turn the investigators may, as a group, spend the requisite number of clues (usually conveyed as a "per investigator" value) from their investigator cards to advance the act deck. This is normally done as a <span title="free" className="icon-free"></span> player ability. Any or all investigators may contribute any number of clues towards the total number of clues required to advance the act.</li>

    <li>  A card ability that refers to clues "at a location" is referring to the undiscovered clues that are currently on that location.</li>

    </ul>

    <p>See also: "<a href="#Act_Deck_and_Agenda_Deck">Act Deck and Agenda Deck</a>" on page 3, "<a href="#Tokens">Tokens, Running out of</a>" on page 20.</p>

    <h2 id="Collection">Collection</h2>

    <p>If an ability refers to a player's collection <em>(for example, "search the collection")</em>, the collection of cards from which that player's deck was assembled is used.</p>

    <p><em>Example: Sean and Etienne are each using a deck built from Sean's collection. If Etienne is instructed to "search the collection," he searches Sean's collection.</em></p>

    <h2 id="Constant_Abilities">Constant Abilities</h2>

    <p>See "<a href="#Abilities_Constant">Ability</a>" on page 2.</p>

    <h2 id="Control">Control</h2>

    <p>See "<a href="#Ownership_and_Control">Ownership and Control</a>" on page 16.</p>

    <h2 id="Copy">Copy</h2>

    <p>A copy of a card is defined by title. A second copy of a card is any other card that shares the same title, regardless of cardtype, text, artwork, or any other differing characteristics between the cards.</p>

    <h2 id="Costs">Costs</h2>

    <p>There are two types of costs in the game: resource costs and ability costs.</p>

    <p>A card's resource cost is the numerical value that must be paid (in resources) to play the card from hand. To pay a resource cost, an investigator takes the specified number of resources from his or her resource pool and places them in the token pool.</p>

    <p>Some triggered card abilities are presented in a "cost: effect" construct. In such a construct, the aspect preceding the colon indicates the ability costs that must be paid and any triggering conditions that must be met to trigger the ability. The aspect following the colon is the effect.</p>

    <ul>

    <li>  If multiple costs for a single card or ability require payment, those costs must be paid simultaneously.</li>

    <li>  Only the controller of a card or ability may pay its costs. Game elements another player controls may not be used to pay a cost.</li>

    <li>  When a player is exhausting, sacrificing, or otherwise using cards to pay costs, only cards that are in play and under that player’s control may be used, unless the cost specifies an out-of-play state.</li>

    <li>  If a cost requires a game element that is not in play, the player paying the cost may only use game elements that are in his or her game areas (such as his or her hand or deck) to pay the cost.</li>

    <li>  If the investigators are instructed to pay a cost as a group, each investigator (or each investigator in the group defined by the ability) may contribute to paying the cost.</li>

    <li>  An ability cannot initiate – and therefore its costs cannot be paid – if the resolution of its effect will not change the game state.</li>

    <li>  If an investigator takes damage or horror as a cost and reassigns any of it to an asset, the cost is still considered paid.</li>

    </ul>

    <h2 id="Dealing_Damage_Horror">Dealing Damage/Horror</h2>

    <p>There are two types of afflictions that may beset an investigator in the game: damage and horror. Damage afflicts an investigator's health, and horror afflicts an investigator's sanity.</p>

    <p>When an investigator or enemy is dealt damage and/or horror, follow these steps, in order:</p>

    <p><strong>1. Assign Damage/Horror:</strong> Determine the amount of damage and/or horror being dealt. Place damage and/or horror tokens equal to the amount of damage and horror being dealt next to the cards that will be taking the damage/horror.</p>

    <ul>

    <li>  When an investigator is dealt damage or horror, that investigator may assign it to eligible asset cards he or she controls. To be eligible, an asset card must have health in order to be assigned damage, and it must have sanity in order to be assigned horror.</li>

    <li>  An asset cannot be assigned damage beyond the amount of damage it would take to defeat the card, and cannot be assigned horror beyond the amount of horror it would take to defeat the card.</li>

    <li>  All damage/horror that cannot be assigned to an asset must be assigned to the investigator.</li>

    </ul>

    <p><strong>2. Apply Damage/Horror:</strong> Any assigned damage/horror that has not been prevented is now placed on each card to which it has been assigned, simultaneously. If no damage/horror is applied in this step, no damage/horror has been successfully dealt.</p>

    <ul>

    <li>  Abilities that prevent, reduce, or reassign damage and/or horror that is being dealt are resolved between steps 1 and 2.</li>

    <li>  After applying damage/horror, if an investigator has damage equal to or higher than his or her health or horror equal to or higher than his or her sanity, he or she is defeated. When an investigator is defeated, he or she is eliminated from the scenario (see "<a href="#Elimination">Elimination</a>" on page 10).</li>

    <li>  After applying damage/horror, if an enemy has damage equal to or higher than its health, it is defeated and placed in the encounter discard pile (or in its owner's discard pile if it is a weakness).</li>

    <li>  After applying damage/horror, if an asset has damage equal to or higher than its health or horror equal to or higher than its sanity, it is defeated and placed in its owner's discard pile.</li>

    </ul>

    <h2 id="Deck">Deck</h2>

    <p>There are 4 main types of decks that appear in any game: the Investigator Deck, the Encounter Deck, the Act Deck, and the Agenda Deck.</p>

    <ul>

    <li>  The order of cards within a deck may not be altered unless a player is instructed to do so by a card ability.</li>

    </ul>

    <p>See also: "<a href="#Investigator_Deck">Investigator Deck</a>" on page 13, "<a href="#Encounter_Deck">Encounter Deck</a>" on page 10, "<a href="#Act_Deck_and_Agenda_Deck">Act Deck and Agenda Deck</a>" on page 3.</p>

    <h2 id="Deckbuilding">Deckbuilding</h2>

    <p>When building a custom deck, the following guidelines must be observed:</p>

    <ul>

    <li>  A player must choose exactly 1 investigator card.</li>

    <li>  A player's investigator deck must include the exact number of player cards indicated on the back of his or her investigator card as the "Deck Size." Weaknesses, investigator-specific cards, and scenario cards that are added to a player's deck do not count towards this number.</li>

    <li>  A player's investigator deck may not include more than 2 copies (by title) of any given player card.</li>

    <li>  Each standard player card in a player's investigator deck must be chosen from among the "Deckbuilding Options" available on the back of his or her investigator card.</li>

    <li>  Most investigators have 0 experience to spend at the beginning of a campaign, which means that they may only include level 0 cards in their decks. Some investigators, and/or some campaigns, may provide a player with additional experience at the beginning of a campaign, which can be used immediately to purchase higher level cards (see "<a href="#Campaign_Play">Campaign Play</a>" on page 5).</li>

    <li>  All other "Deckbuilding Requirements" listed on the back of a player's investigator card must be observed.</li>

    <li>  Each required random basic weakness is added to a player's deck at the end of the deckbuilding process.</li>

    <li>  Story Assets may not be included in a player's deck unless the setup or resolution of a scenario grants that player permission to do so. These assets are indicated by the lack of a card level and the presence of an encounter set symbol (see "<a href="#Asset_Cards">Asset Cards</a>" on page 4).</li>

    <li>  During a campaign, players build a deck before playing the first scenario. In between scenarios, players can purchase new cards or upgrade cards in their deck following the rules found under "<a href="#Campaign_Play">Campaign Play</a>" on page 5.</li>

    </ul>

    <h3 id="Classes">Classes</h3>

    <p>Most player cards, including investigators, belong to one of 5 classes. Each class has its own distinct flavor and identity, as described below.</p>

    <p>Guardians (<span title="guardian" className="icon-guardian"></span>) feel compelled to defend humanity, and thus go out of their way to combat the forces of the Mythos. They have a strong sense of duty and selflessness that drives them to protect others, and to hunt monsters down.</p>

    <p>Mystics (<span title="mystic" className="icon-mystic"></span>) are drawn to and influenced by the arcane forces of the Mythos. Many have spell-casting abilities, able to manipulate the forces of the universe through magical talent.</p>

    <p>Rogues (<span title="rogue" className="icon-rogue"></span>) are self-serving and out for themselves. Wily and opportunistic, they are always eager for a way to exploit their current situation.</p>

    <p>Seekers (<span title="seeker" className="icon-seeker"></span>) are primarily concerned with learning more about the world and about the Mythos. They wish to research forgotten lore, map out uncharted areas, and study strange creatures.</p>

    <p>Survivors (<span title="survivor" className="icon-survivor"></span>) are everyday people in the wrong place at the wrong time, simply trying to survive. Ill-prepared and ill-equipped, Survivors are the underdogs, who rise to the occasion when their lives are threatened.</p>

    <p>Some cards are not affiliated with any class; these cards are neutral. Generally, investigators only have access to cards from their class.</p>

    <p>Some investigators have access to cards from other classes. Refer to the "Deckbuilding Options" on the back of an investigator card to view which cards an investigator has access to.</p>

    <h2 id="Defeat">Defeat</h2>

    <p>Taking damage and/or horror may cause an investigator, enemy, or asset to be defeated.</p>

    <ul>

    <li>  If an investigator has as much or more damage on it as it has health (or as much or more horror on it as it has sanity), that investigator is defeated. An investigator might also be defeated by a card ability. When an investigator is defeated, he or she is eliminated from the scenario (see "<a href="#Elimination">Elimination</a>" on page 10).</li>

    <li>  In campaign play, an investigator that is defeated by taking damage equal to his or her health suffers 1 physical trauma. An investigator that is defeated by taking horror equal to his or her sanity suffers 1 mental trauma. Taking trauma may cause an investigator to be <strong>killed</strong> or driven <strong>insane</strong> (see "<a href="#Campaign_Play">Campaign Play</a>" on page 5 for more information).</li>

    <li>  If an enemy has as much or more damage on it as it has health, that enemy is defeated and placed on the encounter discard pile (or on its owner's discard pile if it is a weakness).</li>

    <li>  If an asset with a health value has as much or more damage than it has health, it is defeated. If an asset with a sanity value has as much or more horror than it has sanity, it is defeated. A defeated asset is placed on its owner's discard pile.</li>

    </ul>

    <h2 id="Delayed_Effects">Delayed Effects</h2>

    <p>Some abilities create delayed effects. Such abilities specify a future timing point, or indicate a future condition that may arise, and dictate an effect that will happen at that time.</p>

    <ul>

    <li>  Each delayed effect initiates automatically and immediately (as a forced ability) if its future timing point or future condition occurs.</li>

    <li>  A delayed effect affects all specified entities that are in the specified game area and eligible at the time the delayed effect resolves.</li>

    </ul>

    <h2 id="Difficulty_level">Difficulty (level)</h2>

    <p>There are four levels of difficulty in <em>Arkham Horror: The Card Game</em>: Easy, Standard, Hard, and Expert. At the beginning of a campaign or standalone scenario, the players choose which difficulty level to use. The campaign setup section of that campaign or scenario's Campaign Guide indicates which chaos tokens should be placed into the chaos bag when playing on each difficulty level.</p>

    <ul>

    <li>  When playing in Easy or Standard mode, use the "Easy/Standard" side of each scenario's reference card. When playing in Hard or Expert mode, use the "Hard/Expert" side of each scenario's reference card instead.</li>

    </ul>

    <h2 id="Difficulty_skill_tests">Difficulty (skill tests)</h2>

    <p>The difficulty of a skill test is the target number an investigator is trying to equal or exceed with his or her modified skill value to pass that test.</p>

    <ul>

    <li>  When attacking an enemy, the base difficulty of the skill test is the enemy's fight value.</li>

    <li>  When investigating a location, the base difficulty of the skill test is the location's shroud value.</li>

    <li>  When attempting to evade an enemy, the base difficulty for the skill test is the enemy's evade value.</li>

    <li>  When resolving a skill test created by a card ability, the base difficulty is indicated as a parenthetical value following the indication of which skill is being tested. <em>For example: Intellect (3).</em></li>

    </ul>

    <p>See "<a href="#Skill_Test_Timing">Skill Test Timing</a>" on page 26 for the full rules on skill tests.</p>

    <h2 id="Direct_Damage_Direct_Horror">Direct Damage, Direct Horror</h2>

    <p>If an ability causes a card to take direct damage or direct horror, that damage or horror must be assigned directly to the specified card, and cannot be assigned or re-assigned elsewhere.</p>

    <h2 id="Discard_Piles">Discard Piles</h2>

    <p>Any time a card is discarded, it is placed faceup on top of its owner's discard pile. Encounter cards are owned by the encounter deck.</p>

    <ul>

    <li>  Each discard pile is an out-of-play area.</li>

    <li>  Each investigator has his or her own discard pile, and the encounter deck has its own discard pile.</li>

    <li>  Each discard pile is open information, and may be looked at by any player at any time.</li>

    <li>  The order of cards in a discard pile may not be altered unless a player is instructed to do so by a card ability.</li>

    <li>  If multiple cards are discarded simultaneously, the owner of the cards may physically place them on top of his or her discard pile one at a time, in any order. If multiple encounter cards are discarded simultaneously, they are placed on top of the encounter discard pile in any order (determined by lead investigator).</li>

    <li>  Any ability that would shuffle a discard pile of zero cards back into a deck does not shuffle the deck.</li>

    </ul>

    <h2 id="Doom">Doom</h2>

    <p>Doom represents the progress the forces of the Mythos make towards completing foul rituals, summoning cosmic entities, and/or advancing a scenario's agenda.</p>

    <ul>

    <li>  During each Mythos phase, 1 doom is placed on the current agenda (see "<a href="#Mythos_Phase">I. Mythos phase</a>" on page 24).</li>

    <li>  If there are no "<strong>Objective</strong> – " requirements for advancing the current agenda and the requisite amount of doom is in play (among the agenda and all cards in play), the agenda advances during the "Check doom threshold" step of the Mythos phase. Unless a card otherwise specifies that it can advance the agenda, this is the only time at which the agenda can advance.</li>

    <li>  Doom on cards other than the agenda (such as enemies, allies, locations, etc.) counts towards the amount of doom in play.</li>

    </ul>

    <p>See also: "<a href="#Act_Deck_and_Agenda_Deck">Act Deck and Agenda Deck</a>" on page 3, "<a href="#Tokens">Tokens, Running out of</a>" on page 20.</p>

    <h2 id="Draw_Action">Draw Action</h2>

    <p>"Draw" is an action an investigator may take during his or her turn in the investigation phase.</p>

    <p>When an investigator takes this action, that investigator draws one card from his or her deck.</p>

    <h2 id="Drawing_Cards">Drawing Cards</h2>

    <p>When a player is instructed to draw one or more cards, those cards are drawn from the top of his or her investigator deck and added to his or her hand.</p>

    <p>When a player is instructed to draw one or more encounter cards, those cards are drawn from the top of the encounter deck, and resolved following the rules for drawing encounter cards under framework step "<a href="#Mythos_Phase">1.4 Each investigator draws 1 encounter card</a>" on page 24.</p>

    <ul>

    <li>  When a player draws two or more cards as the result of a single ability or game step, those cards are drawn simultaneously. If a deck empties middraw, reset the deck and complete the draw.</li>

    <li>  There is no limit to the number of cards a player may draw each round.</li>

    <li>  If an investigator with an empty investigator deck needs to draw a card, that investigator shuffles his or her discard pile back into his or her deck, then draws the card, and upon completion of the entire draw takes one horror.</li>

    </ul>

    <h2 id="Effects">Effects</h2>

    <p>A card effect is any effect that arises from the resolution of ability text printed on, or gained by, a card. A framework effect is any effect that arises from the resolution of a framework event (see "<a href="#Framework_Event_Details">Framework Event Details</a>" on page 24).</p>

    <ul>

    <li>  Card effects may be preceded by costs, triggering conditions, play restrictions, and/or play permissions; such elements are not considered effects (see "<a href="#Ability">Ability</a>" on page 2).</li>

    <li>  Once initiated, players must resolve as much of each aspect of the effect as they are able, unless the effect uses the word "may."</li>

    <li>  When a non-targeting effect attempts to interact with a number of entities (such as "draw 3 cards" or "search the top 5 cards of your deck") that exceeds the number of entities that currently exist in the specified game area, the effect interacts with as many entities as possible.</li>

    <li>  The expiration of a lasting effect (or the cessation of a constant ability) is not considered to be generating a game state change by a card effect.</li>

    <li>  All aspects of an effect have timing priority over all "after..." triggering conditions that might arise as a consequence of that effect. <em>(For example, if an effect reads "Gain 3 resources and draw 3 cards," resolve both aspects of the effect (gaining resources and drawing cards) before initiating an ability that reads "After drawing a card...")</em></li>

    </ul>

    <p>See also: "<a href="#Delayed_Effects">Delayed Effects</a>" on page 8, "<a href="#Lasting_Effects">Lasting Effects</a>" on page 14, "<a href="#Priority_of_Simultaneous_Resolution">Priority of Simultaneous Resolution</a>" on page 17.</p>

    <h2 id="Elimination">Elimination</h2>

    <p>A player is eliminated from a scenario any time his or her investigator is defeated, or if he or she resigns. The only manner in which eliminated investigators interact with the game is when establishing "per investigator" values (see "<a href="#Per Investigator">Per Investigator</a>" on page 16). Any time a player is eliminated:</p>

    <ol start="0">

    <li>  For the purpose of resolving weakness cards, the game has ended for the eliminated investigator. Trigger any “when the game ends” abilities on each weakness the eliminated investigator owns that is in play. Then, remove those weaknesses from the game.</li>

    <li>  The cards he or she controls in play and all of the cards in his or her out-of-play areas (such as hand, deck, discard pile) are removed from the game.<p></p>

    <ul>

    <li>  Any card that player owns but does not control that is in play remains in play, but if that card leaves play it is removed from the game.</li>

    </ul>

    </li><li>  All clue tokens that player possesses are placed at the location the investigator was at when he or she was eliminated, and all of that player's resource tokens are returned to the token pool.</li>

    <li>  All enemies engaged with that player are placed at the location the investigator was at when he or she was eliminated, unengaged but otherwise maintaining their current game state.</li>

    <li>  All other cards in the eliminated investigator's threat area are placed in the appropriate discard pile.</li>

    <li>  If the lead investigator is eliminated, the remaining players (if any) choose a new lead investigator.</li>

    <li>  If there are no remaining players, the scenario ends. Refer to "no resolution was reached" entry for that scenario in the campaign guide.</li>

    </ol>

    <h2 id="Empty_Location">Empty Location</h2>

    <p>An empty location is a location with no enemies or investigators at it.</p>

    <h2 id="Encounter_Deck">Encounter Deck</h2>

    <p>The encounter deck contains the encounter cards (enemy, treachery, and story asset cards) the investigators may encounter during a scenario.</p>

    <ul>

    <li>  If the encounter deck is empty, shuffle the encounter discard pile back into the encounter deck.</li>

    </ul>

    <h2 id="Encounter_Set">Encounter Set</h2>

    <p>An encounter set is a collection of encounter cards, denoted by a common encounter set symbol near each card's cardtype.</p>

    <h2 id="Enemy_Cards">Enemy Cards</h2>

    <p>Enemies represent villains, cultists, ne'er-do-wells, terrible monsters, and unfathomable entities from alternate dimensions or the cosmos beyond. When an enemy card is drawn by an investigator, that investigator must spawn it following any spawn direction the card bears (see "<a href="#Spawn">Spawn</a>" on page 19). If the encountered enemy has no spawn direction, the enemy spawns engaged with the investigator encountering the card and is placed in that investigator's threat area.</p>

    <p>See "<a href="#Mythos_Phase">1.4 Each investigator draws 1 encounter card</a>" on page 24.</p>

    <ul>

    <li>  A ready, unengaged enemy engages any time it is at the same location as an investigator (see "<a href="#Enemy_Engagement">Enemy Engagement</a>" on page 10).</li>

    <li>  If an investigator is engaged with a ready enemy and takes an action other than to <strong>fight</strong>, to <strong>evade</strong>, or to activate a <strong>parley</strong> or <strong>resign</strong> ability, that enemy makes an attack of opportunity (see "<a href="#Attack_of_Opportunity">Attack of Opportunity</a>" on page 5).</li>

    <li>  Enemies with the hunter keyword move during the Enemy Phase (see "<a href="#Enemy_Phase">III. Enemy phase</a>" on page 25).</li>

    <li>  Engaged enemies attack during the Enemy Phase (see "<a href="#Enemy_Phase">III. Enemy phase</a>" on page 25).</li>

    </ul>

    <h2 id="Enemy_Engagement">Enemy Engagement</h2>

    <p>While an enemy card is in play, it is either engaged with an investigator (and placed in that investigator's threat area), or it is unengaged and at a location (and placed at that location). Each enemy in an investigator's threat area is considered to be at the same location as that investigator, and should the investigator move, the enemy remains engaged and moves to the new location simultaneously with the investigator.</p>

    <p>Any time a ready unengaged enemy is at the same location as an investigator, it engages that investigator, and is placed in that investigator's threat area. If there are multiple investigators at the same location as a ready unengaged enemy, follow the enemy's prey instructions to determine which investigator is engaged. There is no limit on the number of enemies that can be engaged with a single investigator.</p>

    <em>
    <p>For example, a ready unengaged enemy immediately engages if:</p>

    <ul>

    <li>  It spawns at the same location as an investigator,</li>

    <li>  It moves into the same location as an investigator,</li>

    <li>  An investigator moves into the same location as it.</li>

    </ul>
    </em>

    <p>An exhausted unengaged enemy does not engage, but if an exhausted enemy at the same location as an investigator becomes ready, it engages as soon as it is readied.</p>

    <ul>
    <em>
    <li>  Note: An enemy with the <a href="#Aloof">Aloof</a> keyword does not engage in the manner described above.</li>
    </em>
    </ul>

    <h2>Enemy Phase</h2>

    <p>See "<a href="#Enemy_Phase">III. Enemy phase</a>" on page 25.</p>

    <h2 id="Engage_Action">Engage Action</h2>

    <p>"Engage" is an action an investigator may take during his or her turn in the investigation phase.</p>

    <p>To engage an enemy at the same location <em>(for example, this could be done to engage an exhausted enemy, an aloof enemy, or an enemy engaged with another investigator)</em>, an investigator places the chosen enemy in his or her threat area. The investigator and the enemy are now engaged.</p>

    <ul>

    <li>  An investigator may perform the engage action to engage an enemy that is engaged with a different investigator at the same location. The enemy simultaneously disengages from the previous investigator and engages the investigator performing the action.</li>

    <li>  An investigator cannot use the engage action to engage an enemy he or she is already engaged with.</li>

    </ul>

    <h2 id="Enters_Play">Enters Play</h2>

    <p>The phrase "enters play" refers to any time a card makes a transition from an out-of-play area into a play area (see "<a href="#In_Play_and_Out_of_Play">In Play and Out of Play</a>" on page 13).</p>

    <ul>

    <li>  If an ability (either on the card itself or from another card) causes a card to enter play in a state different from that specified by the rules, there is no transition to that state. It merely enters play in that state.</li>

    </ul>

    <h2 id="Evade_Action">Evade, Evade Action</h2>

    <p>"Evade" is an action an investigator may take during his or her turn in the investigation phase.

    </p><p>To evade an enemy engaged with an investigator, that investigator makes an agility test against the enemy's evade value (see "<a href="#Skill_Tests">Skill Tests</a>" on page 18).</p>

    <p>If the test is successful, the investigator successfully evades the enemy (see below). (This occurs during step 7 of the skill test, per "<a href="#Skill_Test_Timing">ST.7 Apply skill test results</a>" on page 26.)</p>

    <p>If the test fails, the investigator does not evade the enemy, and it remains engaged with him or her.</p>

    <ul>

    <li>  If an ability "automatically" evades 1 or more enemies, no skill test is made for the evasion attempt.</li>

    <li>  Any time an enemy is evaded (whether by an evade action, or by card ability), the enemy is exhausted (if it was ready) and the engagement is broken. Move the enemy from the investigator's threat area to the investigator's location to mark that it is no longer engaged with that investigator.</li>

    <li>  Unlike the fight and engage action, an investigator can only perform an evade action against an enemy engaged with him or her.</li>

    </ul>

    <h2 id="Event_Cards">Event Cards</h2>

    <p>Event cards represent tactical actions, maneuvers, spells, tricks, and other instantaneous effects at a player's disposal.</p>

    <ul>

    <li>  If an event card does not have the fast keyword, it may only be played from a player's hand by performing a "Play" action during his or her turn. You must follow all play permissions/restrictions that card has.</li>

    <li>  A fast event card may be played from a player's hand any time its play instructions specify (see "<a href="#Fast">Fast</a>" on page 11).</li>

    <li>  Any time a player plays an event card, its costs are paid, its effects are resolved (or canceled), and the card is placed in its owner's discard pile after those effects resolve (or are canceled).</li>

    <li>  If the effects of an event card are canceled, the card is still considered to have been played, and its costs remain paid. Only the effects have been canceled.</li>

    <li>  Playing an event card from hand (or not playing it) is always optional for a player, unless the event uses the word "must" in its play instructions.</li>

    <li>  An event card cannot be played unless the resolution of its effect has the potential to change the game state.</li>

    </ul>

    <h2 id="Exceptional">Exceptional</h2>

    <p>Exceptional is a deckbuilding keyword ability.</p>

    <ul>

    <li>  A card with the exceptional keyword costs twice its printed experience cost to purchase.</li>

    <li>   A player's investigator deck cannot include more than 1 copy (by title) of any given exceptional card.</li>

    </ul>

    <h2 id="Exhaust">Exhaust, Exhausted</h2>

    <p>Occasionally, a card ability or game step will cause a card to exhaust to indicate it has been used to perform a function. When a card exhausts, it is rotated 90 degrees. A card in this state is said to be exhausted.</p>

    <ul>

    <li>  An exhausted card cannot exhaust again until it is ready (typically by a game step or card ability).

    </li></ul>

    <h2 id="Exile">Exile (added in <em>The Dunwich Legacy</em>)</h2>

    <p>Some player cards in <em>The Dunwich Legacy</em> cycle must be exiled when they are used. When a card is exiled, it is removed from the game and returned to your collection. During campaign play, a card that has been exiled must be purchased again with experience points (between scenarios) if you wish to re-include it in your deck. If exiling 1 or more cards would reduce your deck below your investigator's deck size, when purchasing cards between scenarios, you must purchase cards so that a legal deck size is maintained (when purchasing cards in this manner, you may purchase level 0 cards for 0 experience cost until a legal deck size is reached).</p>

    <h2>Experience</h2>

    <p>See "<a href="#Experience">Campaign Play</a>" on page 5.</p>

    <h2 id="Fast">Fast</h2>

    <p>Fast is a keyword ability. A fast card does not cost an action to be played and is not played using the "Play" action.</p>

    <ul>

    <li>  A fast event card may be played from a player's hand any time its play instructions specify. If the instructions specify when/after a timing point, the card may be played as if the described timing point were a triggering condition for playing the card. If the instructions specify a duration or period of time, the card may be played during any player window within that period. If the instructions specify both a when/after timing point and a duration or period of time, the card may be played in reference to any instance of the specified triggering condition within that time period.</li>

    <li>  A fast asset may be played by an investigator during any player window on his or her turn.</li>

    <li>  Because fast cards do not cost actions to play, they do not provoke attacks of opportunity (see "<a href="#Attack_of_Opportunity">Attack of Opportunity</a>" on page 5).</li>

    </ul>

    <h2 id="Fight_Action">Fight Action</h2>

    <p>"Fight" is an action an investigator may take during his or her turn in the investigation phase.</p>

    <p>To fight an enemy at his or her location, an investigator resolves an attack against that enemy by making a combat test against the enemy's fight value (see "<a href="#Skill_Tests">Skill Tests</a>" on page 18).</p>

    <p>If the test is successful, the attack succeeds and damage is dealt to the attacked enemy. The default damage dealt by an attack is 1. Some weapons, spells, or other special attacks may modify this damage. (This occurs during step 7 of the skill test, per "<a href="#Skill_Test_Timing">ST.7 Apply skill test results</a>" on page 26.)</p>

    <p>If the test fails, no damage is dealt to the attacked enemy. However, if an investigator fails this test against an enemy that is engaged with another single investigator, the damage of the attack is dealt to the investigator engaged with that enemy.</p>

    <ul>

    <li>  An investigator may fight any enemy at his or her location, including: an enemy he or she is engaged with, an unengaged enemy at the same location, or an enemy engaged with another investigator who is at the same location.</li>

    </ul>

    <h2 id="Flavor_Text">Flavor Text</h2>

    <p>Flavor text is additional text that provides thematic context to a card and/or its abilities. Flavor text does not interact with the game in any manner.</p>

    <h2 id="Forced_Abilities">Forced Abilities</h2>

    <p>See "<a href="#Abilities_Forced">Ability</a>" on page 2.</p>

    <h2 id="Gains">Gains</h2>

    <p>The word "gains" is used in multiple contexts.</p>

    <ul>

    <li>  If a player gains one or more resources, the player takes the specified number of resources from the token pool and adds them to his or her resource pool.</li>

    <li>  If an investigator gains an action, that investigator is permitted one additional action to spend during the specified time period.</li>

    <li>  If a card gains a characteristic (such as an icon, a trait, a keyword, or ability text), the card functions as if it possesses the gained characteristic.</li>

    <li>  "Gained" characteristics are not considered to be "printed" on the card. If an ability refers to the printed characteristics of a card, it does not refer to gained characteristics.</li>

    </ul>

    <h2 id="Game">Game</h2>

    <p>A 'game' consists of a single scenario, not an entire campaign. In a campaign, the beginning of a new scenario marks the start of a new game.</p>

    <h2 id="Hand_Size">Hand Size</h2>

    <p>See "<a href="#Upkeep_Phase">IV. Upkeep phase</a>" on page 25.</p>

    <h2 id="Heal">Heal</h2>

    <p>"Heal" is an instruction to remove the indicated amount of damage or the indicated amount of horror from a card.</p>

    <ul>

    <li>  If a card is healed for more damage or horror than it currently has on it, remove as much of the indicated amount as possible.

    </li></ul>

    <h2 id="Health_and_Damage">Health and Damage</h2>

    <p>Health represents a card's physical fortitude. Damage tracks the physical harm that has been done to a card during a scenario.</p>

    <ul>

    <li>  Any time a card takes damage, place a number of damage tokens equal to the amount of damage just taken on the card (see "<a href="#Dealing_Damage_Horror">Dealing Damage/Horror</a>" on page 7).</li>

    <li>  If an investigator has damage on him or her equal to or greater than his or her health, that investigator is defeated. When an investigator is defeated, he or she is eliminated from the scenario (see "<a href="#Elimination">Elimination</a>" on page 10).</li>

    <li>  In campaign play, an investigator that is defeated by taking damage equal to his or her health suffers 1 physical trauma. Taking physical trauma may cause an investigator to be <strong>killed</strong> (see "<a href="#Campaign_Play">Campaign Play</a>" on page 5 for more information).</li>

    <li>  If an enemy has damage on it equal to or greater than its health, that enemy is defeated and placed in the encounter discard pile.</li>

    <li>  If an asset with a health value has damage on it equal to or greater than its health, it is defeated and placed on its owner's discard pile.</li>

    <li>  An asset card without a health value is not considered to have a health of 0, cannot gain health, and cannot have damage assigned to it.</li>

    <li>  A card's "remaining health" is its base health minus the amount of damage on it, plus or minus any active health modifiers.</li>

    </ul>

    <p>See also: "<a href="#Direct_Damage_Direct_Horror">Direct Damage, Direct Horror</a>" on page 9.</p>

    <h2 id="Hidden">Hidden (added in <em>The Path to Carcosa</em>)</h2>

    <p>Some encounter cards in <em>The Path to Carcosa</em> campaign have the /"hidden/" keyword. Hidden cards have <b>Revelation</b> abilities that secretly add them to your hand. This should be done without revealing that card or its text to the other investigators. While a hidden card is in your hand, treat it as if it were in your threat area. Its Constant abilities are active, and abilities on it can be triggered, but only by you. A hidden card counts toward your hand size, but it cannot be discarded from your hand by <i>any</i> means except those described on the card. When discarded, hidden cards are placed in the encounter discard pile. They do not remain a part of your deck like weaknesses do. For the best experience, players are encouraged to stay /"in character/" and not share information about hidden cards in their hand.</p>

    <h2 id="Hunter">Hunter</h2>

    <p>Hunter is a keyword ability.</p>

    <p>During the enemy phase (in <a href="#Enemy_Phase">framework step 3.2</a>), each ready, unengaged enemy with the hunter keyword moves to a connecting location, along the shortest path towards the nearest investigator. Enemies at a location with one or more investigators do not move.</p>

    <ul>

    <li>   If there are multiple equidistant investigators who qualify as "the nearest investigator," the enemy moves towards the one of those who best meets its prey instructions. If none do, or if the enemy has no prey instructions, the lead investigator may choose an investigator for the enemy to move towards.</li>

    <li>  If a hunter enemy would be compelled to a location to which the move is blocked by a card ability, the enemy does not move.</li>

    </ul>

    <p>See also: "<a href="#Prey">Prey</a>" on page 17.</p>

    <h2 id="If">If</h2>

    <p>Some abilities have triggering conditions that use the words "if" instead of specifying "when" or "after," such as "if the Ghoul Priest is defeated." These effects trigger in between any "when..." abilities and any "after..." abilities with the same triggering condition.</p>

    <h2 id="Immune">Immune</h2>

    <p>If a card is immune to a specified set of effects <em>(for example, "immune to treachery card effects," or "immune to player card effects")</em>, it cannot be affected by or chosen to be affected by effects belonging to that set. Only the card itself is protected, and peripheral entities associated with an immune card (such as attached assets, tokens placed on, or abilities originating from an immune card) are not themselves immune.</p>

    <ul>

    <li>  If a card gains immunity to an effect, pre-existing lasting effects that have been applied to the card are not removed. If a card loses immunity to an effect, pre-existing lasting effects of that nature are not applied to the card.</li>

    <li>  Immunity only protects a card from effects. It does not protect a card from costs.</li>

    </ul>

    <h2 id="In_Play_and_Out_of_Play">In Play and Out of Play</h2>

    <p>The cards that a player controls in his or her play area are considered in play.</p>

    <p>The current act, the current agenda, each location in the play area, and each encounter card in a investigator's threat area or at a location, are all considered in play.</p>

    <p>Out of play refers to the cards in a player's hand, in any deck, in any discard pile, in the victory display, and those that have been set aside and/or removed from the game.</p>

    <ul>

    <li>  A card enters play when it transitions from an out-of-play origin to an in play area.</li>

    <li>  A card leaves play when it transitions from a in play area to an out-of-play destination.</li>

    <li>  Tokens on in play cards are considered in play. Resources in each investigator's resource pool are also considered in play.</li>

    </ul>

    <h2 id="In_Player_Order">In Player Order</h2>

    <p>If the players are instructed to perform a sequence "in player order," the lead investigator performs his or her part of the sequence first, followed by the other players in clockwise order. The phrase "the next player" is used in this context to refer to the next player (clockwise) to act in player order.</p>

    <h2 id="Instead">Instead</h2>

    <p>The word "instead" is indicative of a replacement effect. A replacement effect is an effect that replaces the resolution of a triggering condition with an alternate means of resolution.</p>

    <ul>

    <li>  If multiple replacement effects are initiated against the same triggering condition and create a conflict in how to resolve the triggering condition, the most recent replacement effect is the one that is used for the resolution of the triggering condition.</li>

    <li>  The word "would" is used to define the triggering condition of some abilities, and establishes a higher priority for those abilities than abilities referencing the same triggering condition without the word "would." (For instance, "When X would occur" resolves before "When X occurs.")</li>

    <li>  If a replacement effect that uses the word "would" changes the nature of a triggering condition, the original triggering condition is replaced with the new triggering condition. No further abilities referencing the original triggering condition may be used.</li>

    </ul>

    <h2 id="Investigate_Action">Investigate Action</h2>

    <p>"Investigate" is an action an investigator may take during his or her turn in the investigation phase.</p>

    <p>Each time an investigator takes this action, he or she makes an intellect test against the shroud value of that location (see "<a href="#Skill_Tests">Skill Tests</a>" on page 18).</p>

    <p>If the test is successful, the investigator has succeeded in investigating the location, he or she discovers one clue at the location. (This occurs during step 7 of the skill test, per "<a href="#Skill_Test_Timing">ST.7 Apply skill test results</a>" on page 26.)</p>

    <p>Any time an investigator discovers a clue from a location, that player takes the clue from the location and places it on his or her investigator card, under his or her control.</p>

    <p>If the test is failed, the investigator has failed in investigating the location. No clues are discovered during step 7 of the skill test.</p>

    <h2>Investigation Phase</h2>

    <p>See "<a href="#Investigation_Phase">II. Investigation phase</a>" on page 24.</p>

    <h2 id="Investigator_Deck">Investigator Deck</h2>

    <p>A player's "investigator deck" is the deck that contains that player's asset, event, skill, and weakness cards. A reference to "your deck" refers to the investigator deck under your control.</p>

    <h2 id="Keywords">Keywords</h2>

    <p>A keyword is a card ability which conveys specific rules to its card. Each keyword has its own rules which can be found in the keyword's own section of the glossary. The keywords in this game are: <a href="#Aloof">aloof</a>, <a href="#Fast">fast</a>, <a href="#Hunter">hunter</a>, <a href="#Massive">massive</a>, <a href="#Peril">peril</a>, <a href="#Retaliate">retaliate</a>, <a href="#Surge">surge</a>, <a href="#Uses">uses</a>.</p>

    <ul>

    <li>  There are also two deckbuilding keywords: <a href="#Exceptional">exceptional</a> and <a href="#Permanent">permanent</a>. Deckbuilding keywords affect deck customization while building and/or leveling up a deck. They have no effect during gameplay. There are no exceptional or permanent cards in the core set – each of these keywords will be presented in future expansions.</li>

    <li>  A single card that has and/or is gaining the same keyword from multiple sources functions as if it has one instance of that keyword.</li>

    <li>  The initiation of any keyword which uses the word "may" in its keyword description is optional. The application of all other keywords is mandatory.</li>

    </ul>

    <p>See "<a href="#Abilities_Keywords">Ability</a>" on page 2.</p>

    <h2 id="Killed_Insane_Investigators">Killed/Insane Investigators</h2>

    <p>During campaign play, investigators who are killed or driven insane must be recorded in your campaign log and cannot be used for the remainder of the campaign.</p>

    <ul>

    <li>  An investigator with physical trauma equal to or higher than his or her printed health is killed.</li>

    <li>  An investigator with mental trauma equal to or higher than his or her printed sanity is driven insane.</li>

    <li>  An investigator may also be killed or driven insane by card ability, or during a scenario's resolution.</li>

    <li>  When playing a standalone scenario, there is no practical difference between being killed, driven insane, or defeated.</li>

    </ul>

    <p>See "<a href="#Campaign_Play">Campaign Play</a>" on page 5.</p>

    <h2 id="Lasting_Effects">Lasting Effects</h2>

    <p>Some card abilities create conditions that affect the game state for a specified duration <em>(for example, "until the end of the phase" or " for this skill test")</em>. Such effects are known as lasting effects.</p>

    <ul>

    <li>  A lasting effect persists beyond the resolution of the ability that created it, for the duration specified by the effect. The effect continues to affect the game state for the specified duration regardless of whether the card that created the lasting effect is or remains in play.</li>

    <li>  If a lasting effect affects in-play cards (or cards in a specified area), it is only applied to cards that are in play (or the specified area) when the lasting effect is established. Cards that enter play (or the specified area) after its establishment are not affected by the lasting effect.</li>

    <li>  A lasting effect expires as soon as the timing point specified by its duration is reached. This means that an "until the end of the phase" lasting effect expires before an "at the end of the phase" ability or delayed effect may initiate.</li>

    <li>  A lasting effect that expires at the end of a specific time period can only be initiated during that time period.</li>

    </ul>

    <h2 id="Lead_Investigator">Lead Investigator</h2>

    <p>The lead investigator is sometimes required to make important scenario decisions. At the beginning of a scenario, the investigators choose a lead investigator. If they cannot agree on a choice, a lead investigator is chosen at random.</p>

    <ul>

    <li>  If there are ever multiple valid options for a choice or decision that must be made <em>(for example, a hunter enemy that could move in two different directions)</em>, the lead investigator is the final arbiter in choosing among those options.</li>

    <li>  If the lead investigator is eliminated, the remaining players (if any) choose a new lead investigator.</li>

    </ul>

    <h2 id="Leaves_Play">Leaves Play</h2>

    <p>The phrase "leaves play" refers to any time a card makes a transition from an in-play state to an out-of-play state (see "<a href="#In_Play_and_Out_of_Play">In Play and Out of Play</a>" on page 13).</p>

    <p>If a card leaves play, the following consequences occur simultaneously with the card leaving play:</p>

    <ul>

    <li>  All tokens on the card are returned to the token pool.</li>

    <li>  All attachments on the card are discarded.</li>

    <li>  All lasting effects and/or delayed effects affecting the card while it was in play expire for that card.</li>

    </ul>

    <h2 id="Limits_and_Maximums">Limits and Maximums</h2>

    <p><strong>"Limit X per <span title="period" className="icon-period"></span>"</strong> is a limit that appears on cards that remain in play through the resolution of an ability's effect. Each instance of an ability with such a limit may be initiated X times during the designated period. If a card leaves play and re-enters play during the same period, the card is considered to be bringing a new instance of the ability to the game.</p>

    <p><strong>"Limit X per [card/game element]"</strong> is a limit that appears on attachment cards, and restricts the number of copies of that card (by title) that can be attached to each designated card or game element.</p>

    <ul>

    <li>  Unless stated otherwise, limits are player specific.</li>

    <li>  A "group limit," however, applies to the entire group of investigators. <em>(For example, if an investigator triggers an ability that is "group limit once per game," no other investigator may trigger that ability during that game.)</em></li>

    </ul>

    <p><strong>"Max X per <span title="period" className="icon-period"></span>"</strong> imposes a maximum across all copies of a card (by title) for all players. Generally, this phrase imposes a maximum number of times that copies of that card can be played during the designated time period. If a maximum includes the word "committed" <em>(For example, "Max 1 committed per skill test")</em>, it imposes a maximum number of copies of that card that can be committed to skill tests during the designated period. If a maximum appears as part of an ability, it imposes a maximum number of times that ability can be initiated from all copies (by title) of cards bearing that ability (including itself), during the designated period.</p>

    <p>If the effects of a card or ability with a limit or maximum are canceled, it is still counted against the limit/maximum, because the ability has been initiated.</p>

    <h2 id="Location_Cards">Location Cards</h2>

    <p>Location cards represent the places the investigators may explore during a scenario.</p>

    <ul>

    <li>  Use each investigator's mini-card to indicate which location he or she is at.</li>

    <li>  While an investigator is at a location, that investigator, each of his or her assets, and each card in that investigator's threat area is at the same location.</li>

    <li>  Locations enter play in an "unrevealed" state, so that the side with no shroud value and/or clue value is faceup. Do not read the "revealed" side at this time.</li>

    <li>  The first time a location is entered by an investigator, that location is revealed by turning it to its other side and placing a number of clues on it equal to its clue value (this may occur during setup). Most clue values are conveyed as a "per investigator" (<span title="per_investigator" className="icon-per_investigator"></span>) value.</li>

    <li>  A location with its shroud/clue value side faceup is in the "revealed" state.</li>

    </ul>

    <h2 id="Massive">Massive</h2>

    <p>Massive is a keyword ability. A ready enemy with the massive keyword is considered to be engaged with each investigator at the same location as it.</p>

    <ul>

    <li>  An exhausted enemy with the massive keyword is not considered to be engaged with any investigators.</li>

    <li>  An enemy with the massive keyword cannot be placed in an investigator's threat area.</li>

    <li>  When an enemy with the massive keyword attacks during the enemy phase, resolve its (full) attack against each investigator it is engaged with, one investigator at a time. The lead investigator chooses the order in which these attacks resolve. The massive enemy does not exhaust until its final attack of the phase resolves.</li>

    <li>  When an enemy with the massive keyword makes an attack of opportunity, that attack only resolves against the investigator who provoked the attack.</li>

    <li>  A massive enemy does not move with an engaged investigator who moves away from the massive enemy's location.</li>

    <li>  If an investigator fails a combat test against a massive enemy, no damage is dealt to the engaged investigators.</li>

    </ul>

    <h2 id="May">May</h2>

    <p>The word "may" indicates that a specified player has the option to do that which follows. If no player is specified, the option is granted to the controller of the card with the ability in question.</p>

    <h2 id="Modifiers">Modifiers</h2>

    <p>Some abilities cause values or quantities of characteristics to be modified. The game state constantly checks and (if necessary) updates the count of any variable value or quantity that is being modified.</p>

    <p>Any time a new modifier is applied (or removed), the entire quantity is recalculated from the start, considering the unmodified base value and all active modifiers.</p>

    <ul>

    <li>  When calculating a value, treat all modifiers as being applied simultaneously. However, while performing the calculation, all additive and subtractive modifiers are calculated before doubling and/or halving modifiers.</li>

    <li>  Fractional values are rounded up after all modifiers have been applied.</li>

    <li>  A quantity on a card (such as a stat, an icon, a number of instances of a trait or keyword) cannot be reduced so that it functions with a value below zero. Negative modifiers in excess of a value's current quantity can be applied, but, after all active modifiers have been applied, any resultant value below zero is treated as zero. <em>(For example: Danny tests agility and reveals a –8 chaos token. When applied to his agility of 4, this would reduce his skill value to –4. However, his agility cannot be reduced so that it functions with a value below zero. While the –8 modifier still exists, his agility is treated as zero. If Danny were to play "Lucky!" to receive a +2 bonus to the test, this bonus would not be applied to the functioning skill value of zero; but rather, it is applied in conjunction with all active modifiers. Danny's agility would then be calculated as follows: base skill 4, –8 from chaos token, +2 from "Lucky!" for a total of –2, which is still treated as zero.)</em></li>

    </ul>

    <h2 id="Move">Move</h2>

    <p>Any time an entity (an investigator or enemy) moves, transfer that enemy card or investigator's mini card from its current location to a different location.</p>

    <ul>

    <li>  Unless otherwise specified by the move effect or ability, the moving entity must move to a connecting location. Connecting locations are identified on the location card representing the entity's current location, as shown below.</li>

    <li>  Any time an entity moves, it is considered to leave the previous location, and to enter the new location, simultaneously.</li>

    <li>  If an entity is "moved to..." a specific location, the entity is moved directly to that location, and does not pass through other locations en route.</li>

    <li>  If an investigator moves to an unrevealed location, that location is revealed by turning it to its other side, and placing a number of clues on it equal to its clue value. Most clue values are conveyed as a "per investigator" (<span title="per_investigator" className="icon-per_investigator"></span>) value.</li>

    <li>  If an enemy moves to an unrevealed location, that location remains unrevealed.</li>

    <li>  Game elements (tokens or cards) may also be moved by card abilities from one card to another, or from one game area to another game area.</li>

    <li>  When an entity or game element moves, it cannot move to its same (current) placement. If there is no valid destination for a move, the move cannot be attempted.</li>

    </ul>

    <h2 id="Move_Action">Move Action</h2>

    <p>"Move" is an action an investigator may take during his or her turn in the investigation phase.</p>

    <p>When an investigator takes this action, move that investigator (using his or her mini card) to any other location that is marked as a connecting location on his or her current location (see "<a href="#Move">Move</a>" on page 15).</p>

    <h2 id="Mulligan">Mulligan</h2>

    <p>After a player draws a starting hand during setup, that player has a single opportunity to declare a mulligan on any number of the drawn cards he or she does not wish to keep in his or her starting hand. These cards are set aside, and an equivalent number of cards are drawn and added to the player's starting hand. The set-aside cards are then shuffled back into the player's deck.</p>

    <ul>

    <li>  Players take or forgo the opportunity to mulligan in player order.</li>

    </ul>

    <h2 id="Must">Must</h2>

    <p>If an investigator is instructed that he or she "must" choose among multiple options, the investigator is compelled to choose an option that has the potential to change the game state.</p>

    <ul>

    <li>  In the absence of the word "must" while choosing among multiple options, any option may be chosen upon the resolution of the effect – even an option that does not change the game state.</li>

    </ul>

    <h2>Mythos Phase</h2>

    <p>See "<a href="#Mythos_Phase">I. Mythos phase</a>" on page 24.</p>

    <h2 id="Nearest">Nearest</h2>

    <p>Some card abilities reference the "nearest" entity. Nearest refers to the entity of the specified kind at a location that can be reached in the fewest number of connections, even if one or more of those connections are blocked by another card ability. The path to the nearest entity is the "shortest" path to that entity.</p>

    <h2 id="Nested_Sequences">Nested Sequences</h2>

    <p>Each time a triggering condition occurs, the following sequence is followed: 1) execute “when...” effects that interrupt that triggering condition, (2)&nbsp;resolve the triggering condition, and then, (3) execute “after...” effects in response to that triggering condition.</p>

    <p>Within this sequence, if the use of a <span title="reaction" className="icon-reaction"></span> or <b>Forced</b> ability leads to a new triggering condition, the game pauses and starts a new sequence: (1)&nbsp;execute “when...” effects that interrupt the new triggering condition, (2) resolve the new triggering condition, and then, (3) execute “after...” effects in response to the new triggering condition. This is called a <b>nested sequence</b>. Once this nested sequence is completed, the game returns to where it left off, continuing with the original triggering condition’s sequence.</p>

    <p>It is possible that a nested sequence generates further triggering conditions (and hence more nested sequences). There is no limit to the number of nested sequences that may occur, but each nested sequence must complete before returning to the sequence that spawned it. In effect, these sequences are resolved in a Last In, First Out (LIFO) manner.</p>

    <p><i>For example: Roland and Agnes are embroiled in a fierce battle. Roland has a Guard Dog in his play area, and is engaged with a Goat Spawn with 2 damage on it. Agnes is engaged with a Ghoul Minion. Roland wishes to play a .45 Automatic, which provokes an attack of opportunity from the Goat Spawn, dealing 1 damage to Roland. Roland assigns this damage to his Guard Dog, which has a <span title="reaction" className="icon-reaction"></span> ability: “When an enemy attack deals damage to Guard Dog: Deal 1 damage to the attacking enemy.” Before resolving the playing of Roland’s .45 Automatic, Guard Dog’s ability resolves, and 1 damage is dealt to the Goat Spawn, which would defeat it. Goat Spawn has the following <b>Forced</b> ability: “When Goat Spawn is defeated: Each investigator at this location takes 1 horror.” Before resolving the damage dealt to the Guard Dog, 1 horror is dealt to each investigator at the location, including Agnes, who has a <span title="reaction" className="icon-reaction"></span> ability: “After 1 or more horror is placed on Agnes Baker: Deal 1 damage to an enemy at your location.” Before resolving the Goat Spawn’s defeat, Agnes deals 1 damage to the Ghoul Minion engaged with her. Now that there are no further <span title="reaction" className="icon-reaction"></span> or <b>Forced</b> abilities to trigger, the players return to the previous triggering condition and resolve the Goat Spawn’s defeat, and resolve any “After...” effects that might occur when it is defeated. Then, the players resolve the damage dealt to the Guard Dog, and resolve any “After...” effects that might occur from that damage. Finally, the players return to the original triggering condition, and Roland is able to put his .45 Automatic into play.</i></p>

    <h2 id="Ownership_and_Control">Ownership and Control</h2>

    <p>A card's owner is the player whose deck (or game area) held the card at the start of the game.</p>

    <p>A player controls the cards located in his or her out-of-play game areas (such as the hand, deck, discard pile).</p>

    <p>The scenario controls the cards in its out-of-play game areas (such as the encounter, act, and agenda decks, and the encounter discard pile).</p>

    <ul>

    <li>  Cards by default enter play under their owner's control. Some abilities may cause cards to change control during a game.</li>

    <li>  If a card would enter an out-of-play area that does not belong to the card's owner, the card is physically placed in its owner's equivalent out-of-play area instead. The card is considered to have entered its controller's out-of-play area, and only the physical placement of the card is adjusted.</li>

    </ul>

    <h2 id="Parley">Parley</h2>

    <p>Some abilities are identified with a <strong>Parley</strong> action designator. Such abilities are initiated using the "Activate" action (see "<a href="#Activate_Action">Activate Action</a>" on page 4).</p>

    <h2 id="Per_Investigator">Per Investigator (<span title="per_investigator" className="icon-per_investigator"></span>)</h2>

    <p>When the <span title="per_investigator" className="icon-per_investigator"></span> symbol appears after a value, that value is multiplied by the number of investigators who started the scenario.</p>

    <ul>

    <li>  The "per investigator" multiplication is done before all other modifiers, and the product of this multiplication is treated as the printed value of the card.</li>

    <li>  Text that uses the phrase "per investigator" also counts the number of investigators who started the scenario, and is applied before all other modifiers.</li>

    <li>  If investigators have been eliminated from the scenario, they still count toward "per investigator" values.</li>

    </ul>

    <h2 id="Peril">Peril</h2>

    <p>Peril is a keyword ability.</p>

    <p>While resolving the drawing of an encounter card with the peril keyword, an investigator cannot confer with the other players. Those players cannot play cards, trigger abilities, or commit cards to that investigator's skill test(s) while the peril encounter is resolving.</p>

    <h2 id="Permanent">Permanent</h2>

    <p>Permanent is a deckbuilding keyword ability.</p>

    <ul>

    <li>  A card with the permanent keyword does not count towards your deck size.</li>

    <li>  A card with the permanent keyword still counts as being part of your deck and must therefore adhere to all other deckbuilding restrictions.</li>

    <li>  A card with the permanent keyword starts each game in play and is not shuffled into your investigator deck during setup.</li>

    <li>  A card with the permanent keyword cannot be discarded by any means.</li>

    <li>  Ruling from Matthew Newman regarding permanent cards: A card with the permanent keyword cannot be shuffled into an investigator's deck during a scenario or used to pay for the cost of any action that requires a card be discarded or returned to an investigator's deck or hand.</li>

    </ul>

    <h2 id="Play">Play</h2>

    <p>To play a card, an investigator must pay the card's resource cost and meet any applicable play restrictions and conditions. Most cards can only be played by taking a play action (see "<a href="#Play_Action">Play Action</a>" on page 16).</p>

    <p>A card with the fast keyword is not played during a play action. Such a card may be played any time its specified triggering condition is met or, if it has no triggering condition, during an appropriate player window (see "<a href="#Fast">Fast</a>" on page 11).</p>

    <p>Any time an event card is played, its effects are resolved and it is then placed in its owner's discard pile.</p>

    <p>Any time an asset is played, it is placed in the investigator's play area and remains in play until an ability or game effect causes it to leave play. Most assets take up one or more slots while in play (see "<a href="#Slots">Slots</a>" on page 19).</p>

    <p>Skill cards are not "played." These cards are <em>committed</em> to a skill test from a player's hand in order to use their abilities.</p>

    <p>See also: "<a href="#Appendix_I_Initiation_Sequence">Appendix I: Initiation Sequence</a>" on page 22, "<a href="#Play_Restrictions_Permissions_and_Instructions">Play Restrictions, Permissions, and Instructions</a>" on page 17.</p>

    <h2 id="Play_Action">Play Action</h2>

    <p>"Play" is an action an investigator may take during his or her turn in the investigation phase.</p>

    <p>When an investigator takes this action, that investigator selects an asset or event card in his or her hand, pays its resource cost, and plays it (see "<a href="#Play">Play</a>" on page 16).</p>

    <ul>

    <li>  Cards with the "fast" keyword are not played by using this action (see "<a href="#Fast">Fast</a>" on page 11).</li>

    <li>  Skill cards are not "played." These cards are <em>committed</em> to a skill test from a player's hand in order to use their abilities.</li>

    </ul>

    <h2 id="Play_Restrictions_Permissions_and_Instructions">Play Restrictions, Permissions, and Instructions</h2>

    <p>Many cards and abilities contain specific instructions pertaining to when or how they may or may not be used, or to specific conditions that must be true in order to use them. In order to use such an ability or to play such a card, its play restrictions must be observed.</p>

    <p>A permission allows a player to play a card or use an ability outside the timing specifications provided by the game rules.</p>

    <p>A play instruction describes the timing point at which, and/or time period during which, an event card may be played.</p>

    <h2 id="Prey">Prey</h2>

    <p>Given the opportunity, some enemies will pursue a defined investigator. These enemies are identified with the bold word "<strong>Prey</strong>" in their text box, followed by instructions on whom they should engage.</p>

    <ul>

    <li>  If an enemy that is about to automatically engage an investigator at its location has multiple options of whom to engage, that enemy engages the investigator who best meets its "prey" instructions (if multiple investigators are tied in meeting these instructions, the lead investigator may decide among them) (see "<a href="#Enemy_Engagement">Enemy Engagement</a>" on page 10).</li>

    <li>  If an enemy that is moving towards the nearest investigator has a choice between multiple equidistant investigators, that enemy must select among those investigators the one who best meets its "prey" instructions. (If multiple equidistant investigators meet the prey criteria, the lead investigator decides among those investigators. See "<a href="#Hunter">Hunter</a>" on page 12.)</li>

    <li>  If an enemy's prey instructions contain the word "only," that enemy only moves towards and engages that investigator (as if it were the only investigator in play), and ignores all other investigators while moving and engaging. Other investigators may use the engage action or card abilities to engage the enemy.</li>

    <li>  Prey has no immediate effect on where an enemy will spawn (see "<a href="#Spawn">Spawn</a>" on page 19).</li>

    </ul>

    <h2 id="Printed">Printed</h2>

    <p>The word "printed" refers to the text, characteristic, icon, or value that is physically printed on the card.</p>

    <h2 id="Priority_of_Simultaneous_Resolution">Priority of Simultaneous Resolution</h2>

    <p>If an effect affects multiple players simultaneously, but the players must individually make choices to resolve the effect, these choices are made in player order. Once all necessary choices have been made, the effect resolves simultaneously upon all affected entities.</p>

    <ul>

    <li>  If two or more forced abilities (including delayed effects) would resolve at the same time, the lead investigator determines the order in which the abilities resolve.</li>

    <li>  If two or more constant abilities and/or lasting effects cannot be applied simultaneously, the lead investigator determines the order in which they are applied.</li>

    </ul>

    <h2 id="Put_into_Play">Put into Play</h2>

    <p>Some card abilities cause a card to be "put into play." Such abilities place the card directly into play from an out-of-play state.</p>

    <ul>

    <li>  The resource cost of a card being put into play <strong>is not paid</strong>.</li>

    <li>  Unless otherwise stated by the put into play ability, cards that enter play in this manner must do so in a play area that satisfies the standard game rules associated with playing or drawing (for encounter cards) that card.</li>

    <li>  A card that has been put into play is not considered to have been played or drawn.</li>

    </ul>

    <h2 id="Qualifiers">Qualifiers</h2>

    <p>If card text includes a qualifier followed by multiple terms, the qualifier applies to each term in the list. <em>(For example, in the phrase "each unique ally and item," the word "unique" is a qualifier that applies both to "ally" and to "item.")</em></p>

    <h2 id="Reaction_Opportunities">Reaction Opportunities</h2>

    <p>When a triggering condition resolves, investigators are granted the opportunity to resolve <span title="reaction" className="icon-reaction"></span> abilities in response to that triggering condition. It is only after all investigators have passed their reaction opportunity that the game moves forward.</p>

    <p>Using a <span title="reaction" className="icon-reaction"></span> ability in response to a triggering condition does not prevent other <span title="reaction" className="icon-reaction"></span> abilities from being used in response to that same triggering condition.</p>

    <p><i>For example: Roland has just defeated an enemy and wishes to trigger his <span title="reaction" className="icon-reaction"></span> ability: “After you defeat an enemy: Discover 1 clue at your location.” He discovers 1 clue at his location. He may then play Evidence! in response to defeating that same enemy. As both cards have the same triggering condition (“After you defeat an enemy”), triggering one of these reactions does not prevent Roland from triggering the other.</i></p>

    <h2 id="Ready">Ready</h2>

    <p>A card that is in an upright state so that its controller can read its text from left to right is considered ready.</p>

    <ul>

    <li>  The default state in which cards enter play is ready.</li>

    <li>  When an exhausted card readies, it is returned to the upright state. It is then said to be in a ready state.</li>

    <li>  A ready card cannot ready again (it must first be exhausted, typically by a game step or card ability).</li>

    </ul>

    <h2 id="Record_in_your_Campaign Log">“Record in your Campaign Log...”</h2>

    <p>Often the players will be instructed to record a key phrase in the Campaign Log. This should be written under “Campaign Notes” unless specified otherwise. Because the players may be instructed to check the Campaign Log for this phrase at a later time in the campaign, the indicated phrase should be recorded as it&nbsp;appears, without alteration.</p>

    <p><i>For example: If the players are instructed to record in the Campaign Log that “the investigators were four hours late,” this shouldn’t be rewritten as “the investigators were pretty late,” because the exact number of hours might be important in a later scenario.</i></p>

    <h2 id="Remember_that">“Remember that...”</h2>

    <p>Sometimes a scenario card will instruct the investigators to “remember” a key phrase, often based on an action they have taken or a decision they have made within that scenario. This phrase may come up later during that scenario, and may trigger additional or different effects. There is no need to record this phrase in the Campaign Log, because it will only ever matter during that scenario, or during that scenario’s resolution. The players do not need to “remember” any such instruction beyond the end of the scenario in which it appears.</p>

    <h2 id="Removed_from_Game">Removed from Game</h2>

    <p>A card that has been removed from the game is placed away from the game area and has no further interaction with the game in any manner for the duration of its removal.</p>

    <p>If there is no specified duration, a card that has been removed from the game is considered removed until the end of the game.</p>

    <h2 id="Resign">Resign</h2>

    <p>Some abilities are identified with a <strong>Resign</strong> action designator. Such abilities are initiated using the "Activate" action (see "<a href="#Activate_Action">Activate Action</a>" on page 4).</p>

    <ul>

    <li>  When an investigator resigns, the investigator is eliminated by resignation (see "<a href="#Elimination">Elimination</a>" on page 10.) An investigator who resigns is not considered to have been defeated.</li>

    </ul>

    <h2 id="Resource_Action">Resource Action</h2>

    <p>"Resource" is an action an investigator may take during his or her turn in the investigation phase.</p>

    <p>When an investigator takes this action, that investigator gains one resource by taking it from the token pool and adding it to his or her resource pool.</p>

    <h2 id="Resources">Resources</h2>

    <p>Resources represent the various means of acquiring new cards at an investigator's disposal – supplies, money, tools, knowledge, spell components, etc.</p>

    <ul>

    <li>  In order to play a card or use an ability that costs resources, an investigator must pay that card or ability's resource cost by taking the specified number of resources from his or her resource pool and returning them to the token pool (see "<a href="#Costs">Costs</a>" on page 7).</li>

    <li>  Resources can be gained by performing the "Resource" action (see "<a href="#Resource_Action">Resource Action</a>" on page 17).</li>

    <li>  Investigators acquire one resource during each Upkeep phase (see "<a href="#Upkeep_Phase">4.4 Each investigator draws 1 card and gains 1 resource</a>" on page 25).</li>

    </ul>

    <p>See also: "<a href="#Tokens">Tokens, Running out of</a>" on page 20.</p>

    <h2 id="Retaliate">Retaliate</h2>

    <p>Retaliate is a keyword ability.</p>

    <p>Each time an investigator fails a skill test while attacking a ready enemy with the retaliate keyword, after applying all results for that skill test, that enemy performs an attack against the attacking investigator. An enemy does not exhaust after performing a retaliate attack.</p>

    <ul>

    <li>  This attack occurs whether the enemy is engaged with the attacking investigator or not.</li>

    </ul>

    <h2 id="Revelation">Revelation</h2>

    <p>A revelation ability may appear on encounter cards or on weakness cards.</p>

    <ul>

    <li>  When an investigator draws an encounter card, that investigator must resolve all "<strong>Revelation</strong> – " abilities on the card. This occurs before the card enters play, or in the case of a treachery card, before it is placed in the discard pile.</li>

    <li>  When a weakness card enters an investigator's hand, that investigator must immediately resolve all revelation abilities on the card as if it were just drawn.</li>

    </ul>

    <h2 id="Sanity_and_Horror">Sanity and Horror</h2>

    <p>Sanity represents a card's mental and emotional fortitude. Horror tracks the harm that has been done to a card's psyche by exposure to the Mythos.</p>

    <ul>

    <li>  When a card takes horror, place a number of horror tokens equal to the amount of horror just taken on the card (see "<a href="#Dealing_Damage_Horror">Dealing Damage/Horror</a>" on page 7).</li>

    <li>  If an investigator has horror on him or her equal to or greater than his or her sanity, that investigator is defeated. When an investigator is defeated, he or she is eliminated from the scenario (see "<a href="#Elimination">Elimination</a>" on page 10).</li>

    <li>  In campaign play, an investigator that is defeated by taking horror equal to his or her sanity suffers 1 mental trauma. Taking mental trauma may cause an investigator to be driven <strong>insane</strong> (see "<a href="#Campaign_Play">Campaign Play</a>" on page 5 for more information).</li>

    <li>  If an asset with a sanity value has horror on it equal to or greater than its sanity, it is defeated and placed on its owner's discard pile.</li>

    <li>  A card's "remaining sanity" is its base sanity minus the amount of horror on that card, plus or minus any active sanity modifiers.</li>

    <li>  An asset card without a sanity value is not considered to have a sanity of 0, cannot gain sanity, and cannot have horror assigned to it.</li>

    </ul>

    <p>See also: "<a href="#Direct_Damage_Direct_Horror">Direct Damage, Direct Horror</a>" on page 9.</p>

    <h2 id="Set_Aside">Set Aside</h2>

    <p>Some scenarios instruct the players to set aside specific cards. Set-aside cards have no interaction with the game until they are referenced by instructions within the scenario or by a card ability.</p>

    <h2 id="Seal">Seal (added in <em>The Forgotten Age</em>)</h2>

    <p>As an additional cost for a card with the seal keyword to enter play, its controller must search the chaos bag for the specified chaos token and place it on top of the card, thereby sealing it. If there is a choice of which token to seal, the card's controller chooses. If the specified token is not in the chaos bag, the card cannot enter play. A sealed chaos token is not considered to be in the chaos bag, and therefore cannot be revealed from the chaos bag as part of a skill test or ability.</p>

    <p>When a chaos token is "released," it is returned to the chaos bag and is no longer considered sealed. <strong>If a card with one or more chaos tokens sealed on it leaves play for any reason, any chaos tokens sealed on it are immediately released.</strong></p>

    <p>Some cards (with or without the seal keyword) may also have abilities that seal one or more chaos tokens as part of their effect. This is done following the same process as above: searching the chaos bag for the specified token, removing it from the chaos bag, and placing it on the card. If the specified token is not in the chaos bag, the effect fails.</p>

    <h2 id="Search">Search</h2>

    <p>When a player is instructed to search for a card, that player is permitted to look at all of the cards in the searched area without revealing those cards to the other players.</p>

    <ul>

    <li>  If an effect searches an entire deck, the deck must be shuffled upon completion of the search.</li>

    <li>  When resolving a search effect, a player is obligated to find the object of the search should one or more eligible options be found within the searched area.</li>

    <li>  While cards are in the process of being searched, they are not considered to have left their game area of origin.</li>

    </ul>

    <h2 id="Self_Referential_Text">Self-Referential Text</h2>

    <p>When a card's ability text refers to its own title, it is referring to itself only, and not to other copies (by title) of the card.</p>

    <p>Self-referential abilities using the word "this" (e.g. "this card") refer only to the card on which the ability is located, and not to copies of that card.</p>

    <h2 id="Signature_Cards">Signature Cards</h2>

    <p>An investigator’s “signature cards” are the cards that are only available to that investigator, and cannot be included in another investigator’s deck. This includes player cards with the text “(Investigator Name) deck only,” as well as non-basic weaknesses that are listed under “Deckbuilding Requirements” and therefore can only be included in that investigator’s deck.</p>

    <p>Signature cards are governed by the following additional rules:</p>

    <ul>

    <li>The number of each signature card listed under an investigator’s “Deckbuilding Requirements” is the exact number of copies of that card that is to be included in that investigator’s deck. If no number is specified, that number is 1.<br></br>

    <i>For example: Under “Deckbuilding Requirements” for Roland Banks, the following cards are listed: “Roland’s .38 Special, Cover Up, 1 random basic weakness.” Roland Banks must include exactly 1 copy of his signature cards—Roland’s .38 Special and Cover Up. He is not permitted to include more than 1 copy of either of these cards.</i></li>

    <li>An investigator’s signature cards cannot be traded or given to other investigators.<br></br>

    <i>For example: Roland has the Roland’s .38 Special card in play. He has the card “Teamwork” which can allow investigators at the same location to trade or give assets among one another. However, because Roland’s .38 Special is one of Roland’s signature cards, he cannot give it to another investigator.</i></li>

    </ul>

    <h2 id="Skill_Cards">Skill Cards</h2>

    <p>Skill cards represent innate or learned attributes or character traits that improve an investigator's skill tests.</p>

    <p>Skill cards are not played from a player's hand. In order to resolve their abilities, skill cards must be committed to a skill test.</p>

    <p>If a skill card is committed to a skill test, its ability may be used during the resolution of that skill test, as specified on the card.</p>

    <p>See "<a href="#Skill_Test_Timing">Skill Test Timing</a>" on page 26.</p>

    <h2 id="Skill_Tests">Skill Tests</h2>

    <p>A number of situations in the game require an investigator to make a skill test, using one of his or her four skills: willpower (<span title="willpower" className="icon-willpower"></span>), intellect (<span title="intellect" className="icon-intellect"></span>), combat (<span title="combat" className="icon-combat"></span>), or agility (<span title="agility" className="icon-agility"></span>). A skill test pits the investigator's value in a specified skill against a difficulty value that is determined by the ability or game step that initiated the test. The investigator is attempting to match or exceed this difficulty value in order to succeed at the test.</p>

    <p>A skill test is often referred to as a test of the specified skill. <em>(For example: "agility test," "combat test," "willpower test," or "intellect test.")</em></p>

    <p>See "<a href="#Skill_Test_Timing">Skill Test Timing</a>" on page 26.</p>

    <h2 id="Slots">Slots</h2>

    <p>Each investigator has a number of specific slots that can be filled at any given moment. Each asset in an investigator's play area or threat area with a slot symbol is held in a slot of that type. Slots limit the number of asset cards the investigator is permitted to have in play simultaneously.</p>

    <p>The slots normally available to an investigator are:</p>

    <ul>

    <li><strong>  1 accessory slot</strong></li>

    <li><strong>  1 body slot</strong></li>

    <li><strong>  1 ally slot</strong></li>

    <li><strong>  2 hand slots</strong></li>

    <li><strong>  2 arcane slots</strong></li>

    </ul>

    <p>If an asset has no slot symbols on it, it does not take up any of the above slots. There is no limit to the number of slot-less assets an investigator can have in play. The following symbols (on an asset) indicate which slot(s) that asset fills:</p>

    <table>
    <tbody><tr>
    <td colSpan="2" align="center"><span title="accessory" className="icon-accessory"></span> 1 accessory slot</td>
    </tr>
    <tr>
    <td><span title="body" className="icon-body"></span> 1 body slot</td>
    <td><span title="ally" className="icon-ally"></span> 1 ally slot</td>
    </tr>
    <tr>
    <td><span title="hand" className="icon-hand"></span> 1 hand slot</td>
    <td><span title="hand_2" className="icon-hand_2"></span> 2 hand slots</td>
    </tr>
    <tr>
    <td><span title="arcane" className="icon-arcane"></span> 1 arcane slot</td>
    <td><span title="arcane_2" className="icon-arcane_2"></span> 2 arcane slots</td>

    </tr></tbody></table>

    <p>If an investigator is at his or her slot limit for a type of asset and wishes to play or gain control of a different asset that would use that slot, the investigator must choose and discard other assets under his or her control simultaneously with the new asset entering the slot.</p>

    <h2 id="Spawn">Spawn</h2>

    <p>Some enemies, when drawn from the encounter deck, spawn in a particular location, indicated by a bold "<strong>Spawn</strong>" instruction in the text box.</p>

    <ul>

    <li>  An enemy's spawn instruction resolves as the enemy enters play, regardless of how it entered play.</li>

    <li>  If an enemy has no spawn instruction, it spawns engaged with the investigator who drew it.</li>

    <li>  If an enemy has no legal location to spawn at (for example, if its spawn instruction directs it to a specific location that is not in play, or if no location in play satisfies its "spawn" instruction), it does not spawn, and is discarded instead.</li>

    <li>  If an enemy's spawn instruction has multiple valid locations, the investigator spawning that enemy decides among those locations.</li>

    <li>  If a card ability instructs the players to spawn an enemy in a particular location <em>(for example: "Search the encounter deck for an Acolyte and spawn it in Southside")</em>, treat the ability causing the card to enter play as the enemy's spawn instruction, overriding any other spawn instruction.</li>

    </ul>

    <h2 id="Standalone_Mode">Standalone Mode</h2>

    <p>When playing a standalone game (i.e., playing a single scenario as a one-off adventure, removed from its campaign), the following rules apply:</p>

    <ul>

    <li>  When building a deck for a standalone game, an investigator may use higher level cards in his or her deck (so long as they observe the deckbuilding restrictions of the investigator) by counting the total experience of all the higher level cards used in the deck, and taking additional random basic weaknesses based on the following table:<br></br>
    <br></br>
    0-9 experience: 0 additional random basic weaknesses<br></br>
    10-19 experience: 1 additional random basic weakness<br></br>
    20-29 experience: 2 additional random basic weaknesses<br></br>
    30-39 experience: 3 additional random basic weaknesses<br></br>
    40-49 experience: 4 additional random basic weaknesses<br></br>
    <br></br>
    A player cannot include 50 or more experience worth of cards in a standalone deck.</li>

    <li>  After choosing a scenario to play, refer to the Campaign Guide for the campaign that scenario is a part of, starting at the setup for that campaign, and continuing on to the first scenario for that campaign. Read through that scenario's introduction, then skip directly to that scenario's resolution and choose a resolution that is amenable to you. You may choose any resolution you wish. (For an added challenge, choose resolutions that put the investigators in an unfavorable state). If the players are unsure which resolution to choose, or are indifferent, choose <strong>Resolution 1</strong>. Record the results of the chosen resolution in a Campaign Log as if you were playing through in campaign mode, <strong>except do not count experience points</strong>.</li>

    <li>  Repeat this process for each scenario up to the scenario you wish to play. Then, setup and play that scenario as normal.</li>

    <li>  If a story decision would occur during gameplay, choose the outcome and record it in your campaign log.</li>

    <li>  Do not apply trauma for having been defeated during gameplay, but if trauma is inflicted during a scenario resolution, apply it.</li>

    <li>  If a scenario weakness or asset is earned that is in an expansion you do not own, simply continue without that card.</li>

    </ul>

    <h2 id="Supplies">Supplies (added in <em>The Forgotten Age</em>)</h2>

    <p>At certain points throughout <em>The Forgotten Age</em> campaign, investigators are given the opportunity to choose supplies to bring on their expeditions into the wilds. These supplies are recorded in the Campaign Log, under each investigator's "Supplies" section.</p>

    <p>Supplies are purchased with supply points, which are granted to investigators whenever they are given the opportunity to purchase supplies. Leftover supply points are not recorded, and are lost.</p>

    <p>An investigator's supplies will determine the possible options available during gameplay and throughout the story of this campaign. <strong>Each supply has no effect on its own.</strong> Some card effects, story options, and resolutions may change or become available depending on the supplies carried by the investigator(s).</p>

    <h2 id="Surge">Surge</h2>

    <p>Surge is a keyword ability.</p>

    <p>After drawing and resolving an encounter with the surge keyword, an investigator must draw another card from the encounter deck.</p>

    <ul>

    <li>  If a card with the surge keyword is drawn during setup, the surge keyword does resolve.

    </li></ul>

    <h2 id="Taking_Damage_Horror">Taking Damage/Horror</h2>

    <p>"Take X damage" is shorthand for "deal X damage to your investigator." "Take X horror" is shorthand for "deal X horror to your investigator."</p>

    <p>See "<a href="#Dealing_Damage_Horror">Dealing Damage/Horror</a>" on page 7.</p>

    <h2 id="Target">Target</h2>

    <p>The term "choose" indicates that one or more targets must be chosen in order for an ability to resolve. The player resolving the ability must choose a game element (usually a card) that meets the targeting requirements of the ability.</p>

    <ul>

    <li>  If an ability requires the choosing of a target, and there is no valid target (or not enough valid targets), the ability cannot be initiated.</li>

    <li>  If multiple targets are required to be chosen by the same player, they are chosen simultaneously.</li>

    <li>  An effect that can choose "any number" of targets does not successfully resolve (and cannot change the game state) if zero of those targets are chosen.</li>

    <li>  A card is not an eligible target for an ability if the resolution of that ability's effect could not change the target's state. <em>(For example, an exhausted enemy could not be chosen as the target of an effect that reads, "choose and exhaust an enemy.")</em></li>

    </ul>

    <h2 id="Then">Then</h2>

    <p>If the effect of an ability includes the word "then," the text preceding the word "then" must be successfully resolved in full before the remainder of the effect described after the word "then" can be resolved.</p>

    <ul>

    <li>  If the pre-then aspect of an effect does successfully resolve in full, the post-then aspect of the effect must also resolve.</li>

    <li>  The post-then aspect of an effect has timing priority over all other indirect consequences of the resolution of the pre-then aspect. <em>(For example, if an effect reads: "Draw an encounter card. Then, take 1 horror," and a player controls an ability that reads "After you draw an encounter card," the post-then "take 1 horror" aspect occurs before the "After you draw an encounter card" ability may initiate.)</em></li>

    <li>  If the pre-then aspect of an effect does not successfully resolve in full, the post-then aspect does not resolve.</li>

    </ul>

    <h2 id="Threat_Area">Threat Area</h2>

    <p>An investigator's threat area is a play area in which encounter cards currently engaged with and/or affecting an investigator are placed.</p>

    <ul>

    <li>  The cards in an investigator's threat area are at the same location as the investigator.</li>

    </ul>

    <h2 id="Tokens">Tokens, Running out of</h2>

    <p>There is no limit to the number of tokens (of any type) which can be in the game area at a given time. If players run out of the provided tokens, other tokens, counters, or coins may be used to track the current game state.</p>

    <h2 id="Traits">Traits</h2>

    <p>Most cards have one or more traits listed at the top of the text box and printed in bold italics.</p>

    <ul>

    <li>  Traits have no inherent effect on the game. Instead, some card abilities reference cards that possess specific traits.</li>

    </ul>

    <h2>Trauma</h2>

    <p>See "<a href="#Trauma">Campaign Play</a>" on page 5.</p>

    <h2 id="Treachery_Cards">Treachery Cards</h2>

    <p>Treachery cards represent curses, afflictions, madnesses, obstacles, disasters, or other unexpected occurrences an investigator may encounter throughout the course of a scenario.</p>

    <p>When a treachery card is drawn by an investigator, that investigator must resolve its effects. Then, place the card in its discard pile unless otherwise instructed by the ability.</p>

    <p>See "<a href="#Mythos_Phase">1.4 Each investigator draws 1 encounter card</a>" on page 24.</p>

    <h2 id="Triggered_Abilities">Triggered Abilities</h2>

    <p>A triggered ability is an ability that is optionally triggered by a player. A triggered ability can be identified by one of the following icons.</p>

    <ul>

    <li>  The <span title="action" className="icon-action"></span> icon indicates an action-costed triggered ability.</li>

    <li>  The <span title="free" className="icon-free"></span> icon indicates a free triggered ability that does not cost an action and may be used during any player window.</li>

    <li>  The <span title="reaction" className="icon-reaction"></span> indicates a reaction triggered ability that does not cost an action and may be used any time its triggering condition is met.</li>

    <p>See also: "<a href="#Abilities_Triggered">Ability</a>" on page 2, "<a href="#Appendix_I_Initiation_Sequence">Appendix I: Initiation Sequence</a>" on page 22."

    </p></ul>

    <p> An investigator is permitted to use triggered abilities (<span title="free" className="icon-free"></span>, <span title="reaction" className="icon-reaction"></span>, and <span title="action" className="icon-action"></span> abilities) from the following sources:</p>

    <ul>

    <li>A card in play and under his or her control. This includes his or her investigator card.</li>

    <li>A scenario card that is in play and at the same location as the investigator. This includes the location itself, encounter cards placed at that location, and all encounter cards in the threat area of any investigator at that location.</li>

    <li>The current act or current agenda card.</li>

    <li>Any card that explicitly allows the investigator to activate its ability.</li>

    </ul>

    <h2 id="Triggering_Condition">Triggering Condition</h2>

    <p>A triggering condition indicates the timing point at which an ability may be triggered. Most triggering conditions use the word "when" or "after" to establish their relation to the specified timing point.</p>

    <ul>

    <li>  Each eligible ability that triggers in reference to a specified timing point may be used once each time that timing point occurs.</li>

    <li>  If multiple instances of the same ability are eligible to initiate, each instance may be used once.</li>

    </ul>

    <p>See also: "<a href="#Ability">Ability</a>" on page 2, "<a href="#After">After</a>" on page 4, "<a href="#When">When</a>" on page 21.

    </p><h2 id="Unique">Unique (<span title="unique" className="icon-unique"></span>)</h2>

    <p>A card with the <span title="unique" className="icon-unique"></span> symbol before its card title is a unique card. There can be no more than one instance of each unique card, by title, in play at any given time.</p>

    <ul>

    <li>  A player cannot bring into play a unique card if a copy of that card (by title) is already in play.</li>

    <li>  If a unique encounter card that shares a title with a unique player card would enter play, discard the player card simultaneously as the encounter card enters play.</li>

    </ul>

    <h2>Upkeep Phase</h2>

    <p>See "<a href="#Upkeep_Phase">IV. Upkeep phase</a>" on page 25.</p>

    <h2 id="Uses">Uses (X "type")</h2>

    <p>Uses is a keyword ability.</p>

    <p>When a card bearing this keyword enters play, place a number of resource tokens equal to the value (X), from the token pool, on the card. The word following the value establishes and identifies the type of uses this card bears. The resource tokens placed on the card are considered uses of the established type, and are not considered resource tokens.</p>

    <ul>

    <li>  Each card bearing this keyword also has an ability which references the type of use established by the keyword as a part of its cost. When such an ability spends a use, a token of that type must be removed from the card bearing the ability.</li>

    <li>  Other cards may reference and interact with uses of a specified type, usually by adding uses of that type to a card, or using uses of that type for other purposes.</li>

    <li>  A card cannot bear uses of a type other than that established by its own "Uses (X type)" keyword. <em>(For example, a card with "Uses (4 ammo)" cannot gain charges.)</em></li>

    <li>  Some cards with this keyword bear text that causes the card to be discarded if it has no uses remaining. If the card contains no such text, it remains in play even if out of uses.</li>

    </ul>

    <h2 id="Vengeance_Points">Vengeance Points (added in <em>The Forgotten Age</em>)</h2>

    <p>Some encounter cards are worth vengeance points. The text <strong>Vengeance X</strong> indicates that a card is worth X vengeance points.</p>

    <p>Like <strong>Victory X</strong>, when an encounter card with <strong>Vengeance X</strong> is overcome by the investigators, it is stored in the victory display until the end of the scenario. However, unlike victory points, vengeance represents the awareness and animosity of the Father of Serpents, and it is generally a good idea to avoid accruing vengeance points whenever possible.</p>

    <p>Vengeance points in the victory display have no impact upon the game unless specifically referenced by another encounter card.</p>

    <ul>

    <li>  As an enemy with <strong>Vengeance X</strong> is defeated, place the card in the victory display instead of in the discard pile.</li>

    <li>  At the end of a scenario, take each location with <strong>Vengeance X</strong> that is in play, revealed, and has no clues on it, and place it in the victory display.</li>

    <li>  As a treachery card with <strong>Vengeance X</strong> completes its resolution, place it in the victory display instead of in the discard pile.</li>

    <li>  Cards worth vengeance points are not also worth victory points unless the card has both <strong>Victory X</strong> and <strong>Vengeance X</strong>.</li>

    </ul>

    <h2 id="Victory_Display_Victory_Points">Victory Display, Victory Points</h2>

    <p>Some encounter cards are worth victory points. The text <strong>Victory X</strong> indicates that a card is worth X victory points.</p>

    <p>An encounter card worth victory points that is overcome by the investigators is stored in the victory display until the end of the scenario. The victory display is an out-of-play game area shared by all players. Upon completion of the scenario, the cards in the victory display provide experience, which can be used to upgrade an investigator's deck (see "<a href="#Campaign_Play">Campaign Play</a>" on page 5).</p>

    <ul>

    <li>  As a victory point enemy is defeated, place the card in the victory display instead of in the discard pile.</li>

    <li>  At the end of a scenario, place each victory point location that is in play, revealed, and with no clues on it in the victory display.</li>

    <li>  As a victory point treachery card completes its resolution, place it in the victory display instead of in the discard pile.</li>

    </ul>

    <h2 id="Weakness">Weakness</h2>

    <p>Weakness is a card sub-type. These cards represent character flaws, curses, madnesses, injuries, tasks, enemies, or story elements that are part of an investigator's backstory, or that are acquired over the course of a campaign. Weakness cards are resolved differently depending upon their cardtype.</p>

    <ul>

    <li>  When an investigator draws a weakness with an encounter cardtype <em>(for example, an enemy or a treachery weakness)</em>, resolve that card as if it were just drawn from the encounter deck.</li>

    <li>  When an investigator draws a weakness with a player cardtype <em>(for example, an asset, an event, or a skill weakness)</em>, resolve any Revelation effects on the card, and add it to that investigator's hand. The card may then be used as any other player card of its type.</li>

    <li>  If a weakness enters an investigator's hand in a manner that did not involve drawing the card, that investigator must resolve the card (including any Revelation abilities) as if he or she had just drawn it.</li>

    <li>  The bearer of a weakness is the investigator who started the game with the weakness in his or her deck or play area.</li>

    <li>  If a weakness is added to a player’s deck, hand, or threat area during the play of a scenario, that weakness remains a part of that investigator's deck for the rest of the campaign. (Unless it is removed from the campaign by a card ability or scenario resolution.)</li>

    <li>  A player may not optionally choose to discard a weakness card from hand, unless a card explicitly specifies otherwise.</li>

    <li>  Weaknesses with an encounter cardtype are, like other encounter cards, not controlled by any player. Weaknesses with a player cardtype are controlled by their bearer.</li>

    <li>  Some card and game text references a "basic weakness." A basic weakness can be identified by the presence of the words "Basic Weakness" and the symbol indicated below.</li>

    </ul>

    <h2 id="When">When</h2>

    <p>The word "when" refers to the moment immediately after the specified timing point or triggering condition initiates, but before its impact upon the game state resolves. The resolution of a "when" ability interrupts the resolution of its timing point or triggering condition. <em>(For example, an ability that reads "When you draw an enemy card" initiates immediately after you draw the enemy card, but before resolving its revelation ability, spawning it, etc.)</em></p>

    <p>See also: "<a href="#Ability">Ability</a>" on page 2, "<a href="#Priority_of_Simultaneous_Resolution">Priority of Simultaneous Resolution</a>" on page 17.</p>

    <h2 id="Winning_and_Losing">Winning and Losing</h2>

    <p>Each scenario has a number of different possible endings.</p>

    <p>The act deck represents the progress of the investigators through a scenario. Some instructions in the act deck (as well as on other encounter cardtypes) contain resolution points, in the format of: "<strong>(→R#)</strong>." The players' primary objective is to advance through the act deck until a (hopefully favorable) resolution point is reached. Should the act deck invoke a resolution, the players have completed the scenario (they may even have "won!"). Instructions for resolving the designated resolution are found in the "do not read until end of game" section of the campaign manual.</p>

    <p>The agenda deck represents the objectives and progress of the malicious forces pitted against the investigators in the scenario. Some instructions in the agenda deck (as well as on other encounter cardtypes) also contain resolution points, in the format of: "<strong>(→R#)</strong>." Should the agenda deck invoke a (usually darker) resolution, the players have lost the scenario. Instructions for resolving the designated resolution are found in the "do not read until end of game" section of the campaign guide.</p>

    <p>Should the scenario end with no resolution being reached <em>(for example, if all investigators have been eliminated or have resigned)</em>, instructions for resolving the scenario can be found in the "do not read until end of game" section of the campaign guide.</p>

    <ul>

    <li>  If playing in a campaign, players will proceed to the next scenario in the campaign regardless of the outcome of the scenario. Even if players "lose" a scenario, they still continue their campaign (although with some negative consequences from their failure).</li>

    <li>  When playing a standalone scenario, players either win or lose the scenario. They win if they complete a resolution on an act card. Any other resolution is considered a loss (see "<a href="#Standalone_Mode">Standalone Mode</a>" on page 19).</li>

    </ul>

    <p>See "<a href="#Act_Deck_and_Agenda_Deck">Act Deck and Agenda Deck</a>" on page 3.</p>

    <h2 id="The_letter_X">The letter "X"</h2>

    <p>The value of the letter X is defined by a card ability or a granted player choice. If X is not defined, its value is equal to 0.</p>

    <ul>

    <li>  For costs involving the letter X, the value of X is defined by card ability or player choice, after which the amount paid may be modified by effects without altering the value of X.</li>

    </ul>

    <h2 id="You_Your">You/Your</h2>

    <p>The following guidelines are used to interpret which investigator is referenced by the words "you" and "your."</p>

    <ul>

    <li> A Revelation ability that references "you/your" refers to the investigator who drew the card and is resolving the ability.</li>

    <li> When resolving a triggered ability (<span title="action" className="icon-action"></span>, <span title="reaction" className="icon-reaction"></span>, or <span title="lightning" className="icon-lightning"></span> ability), "you/your" refers to the investigator triggering the ability.</li>

    <li> If an ability contains a clause identifying whom it is targeting, "you/your" in that ability refers to those investigators. <i>For example, Stubborn Detective reads: "While Stubborn Detective is at your location..." this clause identifies "you" as any investigator at his location. Young Deep One reads: "After Young Deep One engages you..." this clause identifies "you" as any investigator who engages Young Deep One.</i></li>

    <li> Any other instance of "you/your" that does not fall into the above categories refers to the investigator who controls the card, the investigator who has the card in his/her threat area, or who is currently interacting with the card.</li>

    </ul>

    <p>A card may have multiple different abilities in which "you/your" may be interpreted differently. “You/your” may refer to a different investigator in each of these abilities.</p>

    <p><i>For example: Dreams of R’lyeh reads:
    <br></br>"Revelation - Put Dreams of R’lyeh into play in your threat area. You get –1 <span title="willpower" className="icon-willpower"></span> and –1 sanity.
    <br></br><span title="action" className="icon-action"></span>: Test <span title="willpower" className="icon-willpower"></span> (3). If you succeed, Discard Dreams of R’lyeh."</i></p>

    <p>These three abilities reference "you/your" in different ways. For the Revelation ability, "your" refers to the
    investigator who drew Dreams of R’lyeh and is resolving its Revelation. For its constant ability, "you" refers to
    the investigator who has Dreams of R’lyeh in his or her threat area. For its <span title="action" className="icon-action"></span> ability, "you" refers to the
    investigator who is performing the <span title="action" className="icon-action"></span> ability.</p>

    <h1 id="Appendix_I_Initiation_Sequence">Appendix I: Initiation Sequence</h1>

    <p>When a player wishes to initiate a triggered ability or play a card, that player first declares his or her intent. There are two preliminary confirmations that must be made before the process of initiating an ability or playing a card may begin. These are:</p>

    <ul>

    <li>  Check play restrictions: determine if the card can be played, or if the ability can be initiated, at this time. (This includes verifying that the resolution of the effect has the potential to change the game state.) If the play restrictions are not met, abort this process.</li>

    <li>  Determine the cost (or costs, if multiple costs are required) to play the card or initiate the ability. If it is established that the cost (taking modifiers into account) can be paid, proceed with the remaining steps of this sequence.</li>

    </ul>

    <p>Once each of the above confirmations has been made, follow these steps, in order:</p>

    <ol>

    <li>  Apply any modifiers to the cost(s).</li>

    <li>  Pay the cost(s). If this step is reached and the cost(s) cannot be paid, abort this process without paying any costs.</li>

    <ul>

    <li>  Upon completion of this step, attacks of opportunity, if applicable, resolve.</li>

    </ul>

    <li>  The card commences being played, or the effects of the ability attempt to initiate.</li>

    <li>  The effects of the ability (if not canceled in step 3) complete their initiation, and resolve. The card is regarded as played (and placed in play, or in its owner's discard pile if it's an event), and the ability is considered resolved simultaneously with the completion of this step.</li>

    <ul>

    <li>  If the ability being initiated is on an in-play card, the sequence does not stop from completing if that card leaves play during the sequence.</li>

    </ul>

    </ol>

    <h1 id="Appendix_II_Timing_and_Gameplay">Appendix II: Timing and Gameplay</h1>

    <p>The "<a href="#Phase_Sequence_Timing">Phase Sequence timing chart</a>" depicts the phases and steps of a game round. Each time an investigator makes a skill test, use the skill test timing detailed in the "<a href="#Skill_Test_Timing">Skill Test timing chart</a>."</p>

    <p>Numbered items presented in the grey boxes are known as framework events. Framework events are mandatory occurrences dictated by the structure of the game.</p>

    <p>The red boxes are player windows. Players may use <span title="free" className="icon-free"></span> triggered abilities in these windows.</p>

    <p>The specific details for each of these steps are explained starting on page 24.</p>

    <h2 id="Phase_Sequence_Timing">Phase Sequence timing chart</h2>

    <table className="chart">
    <tbody><tr><th>I. Mythos phase (skip during first round of game)</th></tr>
    <tr><td className="green">1.1 Round begins. Mythos phase begins.</td></tr>
    <tr><td className="green">1.2 Place 1 doom on the current agenda.</td></tr>
    <tr><td className="green">1.3 Check doom threshold.</td></tr>
    <tr><td className="green">1.4 Each investigator draws 1 encounter card.</td></tr>
    <tr><td className="red"><span title="free" className="icon-free"></span> PLAYER WINDOW</td></tr>
    <tr><td className="green">1.5 Mythos phase ends.</td></tr>
    <tr><td className="grey">Proceed to Investigation Phase.</td></tr>
    <tr><td></td></tr>
    <tr><th>II. Investigation phase</th></tr>
    <tr><td className="green">2.1 Investigation phase begins.</td></tr>
    <tr><td className="red"><span title="free" className="icon-free"></span> PLAYER WINDOW</td></tr>
    <tr><td className="green">2.2 Next investigator's turn begins.</td></tr>
    <tr><td className="red"><span title="free" className="icon-free"></span> PLAYER WINDOW</td></tr>
    <tr><td className="green">2.2.1 Active investigator may take an action, if able. If an action was taken, return to previous player window. If no action was taken, proceed to 2.2.2.</td></tr>
    <tr><td className="green">2.2.2 Investigator's turn ends. If an investigator has not yet taken a turn this phase, return to 2.2. If each investigator has taken a turn this phase, proceed to 2.3.</td></tr>
    <tr><td className="green">2.3 Investigation phase ends.</td></tr>
    <tr><td className="grey">Proceed to Enemy Phase.</td></tr>
    <tr><td></td></tr>
    <tr><th>III. Enemy phase</th></tr>
    <tr><td className="green">3.1 Enemy phase begins.</td></tr>
    <tr><td className="green">3.2 Hunter enemies move.</td></tr>
    <tr><td className="red"><span title="free" className="icon-free"></span> PLAYER WINDOW</td></tr>
    <tr><td className="green">3.3 Next investigator resolves engaged enemy attacks. If an investigator has not yet resolved enemy attacks this phase, return to previous player window. After final investigator resolves engaged enemy attacks, proceed to next player window.</td></tr>
    <tr><td className="red"><span title="free" className="icon-free"></span> PLAYER WINDOW</td></tr>
    <tr><td className="green">3.4 Enemy phase ends.</td></tr>
    <tr><td className="grey">Proceed to Upkeep Phase.</td></tr>
    <tr><td></td></tr>
    <tr><th>IV. Upkeep phase</th></tr>
    <tr><td className="green">4.1 Upkeep phase begins.</td></tr>
    <tr><td className="red"><span title="free" className="icon-free"></span> PLAYER WINDOW</td></tr>
    <tr><td className="green">4.2 Reset actions.</td></tr>
    <tr><td className="green">4.3 Ready each exhausted card.</td></tr>
    <tr><td className="green">4.4 Each investigator draws 1 card and gains 1 resource.</td></tr>
    <tr><td className="green">4.5 Each investigator checks hand size.</td></tr>
    <tr><td className="green">4.6 Upkeep phase ends. Round ends.</td></tr>
    <tr><td className="grey">Proceed to Mythos Phase of next game round.</td></tr>
    </tbody></table>

    <h2 id="Framework_Event_Details">Framework Event Details</h2>

    <p>This section provides a detailed explanation of how to handle each framework event step presented on the game's flow chart, in the order that the framework events occur throughout the round.</p>

    <h3 id="Mythos_Phase">I. Mythos phase</h3>

    <p><strong>During the first round of the game, skip the mythos phase.</strong></p>

    <h3>1.1 Mythos phase begins.</h3>

    <p>This step formalizes the beginning of the mythos phase. As this is the first framework event of the round, it also formalizes the beginning of a new game round.</p>

    <p>The beginning of a phase is an important game milestone that may be referenced in card text, either as a point at which an ability may or must resolve, or as a point at which a delayed effect resolves or a lasting effect expires.</p>

    <h3>1.2 Place 1 doom on the current agenda.</h3>

    <p>Take 1 doom from the token pool, and place it on the current agenda card.</p>

    <h3>1.3 Check doom threshold.</h3>

    <p>Compare the total number of doom in play (on the current agenda and on each other card in play) with the doom threshold of the current agenda. If the value of doom in play equals or exceeds the doom threshold of the current agenda, the agenda deck advances.</p>

    <p>When the agenda deck advances, remove all doom from play, returning them to the token pool. Turn the current agenda over, read the story text, and follow any advancement instructions. Unless otherwise directed by the advancement instructions, the front side of the next sequential agenda card becomes the new current agenda, and the advancing agenda is simultaneously removed from the game.</p>

    <p><em>Note: Unless a card otherwise specifies that it can advance the agenda, this is the only time at which the agenda can advance.</em></p>

    <h3>1.4 Each investigator draws 1 encounter card.</h3>

    <p>In player order, each investigator draws the top card of the encounter deck, resolves any revelation abilities on the card, and follows the instructions below based on the card's type.</p>

    <p>Each time an investigator draws an encounter card, perform the following steps, in order:</p>

    <ol>

    <li>  Draw the card from the encounter deck.</li>

    <li>  Check for the peril keyword on the drawn card. (If the card has the peril keyword, the investigator who drew the card cannot confer with the other players. Those other players cannot play cards, trigger abilities, or commit cards to that investigator's skill test(s) while the peril encounter is resolving.)</li>

    <li>  Resolve the revelation ability on the drawn card.</li>

    <li>  If the card is an <strong>enemy</strong>, spawn it following any spawn instruction the card bears. (A spawn instruction is any text bearing a "spawn" precursor.) If the encountered enemy has no spawn instruction, the enemy spawns engaged with the investigator encountering the card and is placed in that investigator's threat area.<br></br>
    <br></br>  If the card is a <strong>treachery</strong>, place the card in the encounter discard pile unless otherwise instructed by the ability.</li>

    <li>  If the drawn card has the surge keyword, the investigator must draw another card. Restart this process at step 1.</li>

    </ol>

    <h3>1.5 Mythos phase ends.</h3>

    <p>This step formalizes the end of the mythos phase.</p>

    <p>The end of a phase is an important game milestone that may be referenced in card text, either as a point at which an ability may or must resolve, or as a point at which a delayed effect resolves or a lasting effect expires.</p>

    <h3 id="Investigation_Phase">II. Investigation phase</h3>

    <h3>2.1 Investigation phase begins.</h3>

    <p>This step formalizes the beginning of the investigation phase.</p>

    <h3>2.2 Next investigator's turn begins.</h3>

    <p>The investigators may take their turns in any order. The investigators choose among themselves who (among the investigators) will take this turn, and making this choice begins that investigator's turn. The investigator taking his or her turn is known as the "active investigator."</p>

    <p>Once an investigator begins a turn, that investigator must complete the turn before another investigator may take his or her turn. Each investigator takes one turn each round.</p>

    <h3>2.2.1 Investigator takes an action, if able.</h3>

    <p>During his or her turn, an investigator is permitted to take three actions. An action can be used to do one of the following:</p>

    <ul>

    <li>  <strong>Investigate</strong> your location.</li>

    <li>  <strong>Move</strong> to a connecting location.</li>

    <li>  <strong>Draw</strong> (draw 1 card).</li>

    <li>  <strong>Resource</strong> (gain 1 resource).</li>

    <li>  <strong>Play</strong> an asset or event card from your hand.</li>

    <li>  <strong>Activate</strong> an <span title="action" className="icon-action"></span>-costed ability on an in-play card you control, an in-play encounter card at your location, a card in your threat area, the current act card, or the current agenda card.</li>

    <li>  <strong>Fight</strong> an enemy at your location.</li>

    <li>  <strong>Engage</strong> an enemy at your location.</li>

    <li>  Attempt to <strong>evade</strong> an enemy engaged with you.</li>

    </ul>

    <p>The three actions an investigator performs during his or her turn may be any of the above, in any order, and may even be the same action three times in a row.</p>

    <p></p><strong>Important:</strong> When an investigator is engaged with one or more enemies and takes an action other than to <strong>fight</strong>, to <strong>evade</strong>, or to activate a <strong>parley</strong> or <strong>resign</strong> ability, each of those enemies makes an attack of opportunity against the investigator, in the order of the investigator's choosing.<p></p>

    <p></p>After an investigator takes an action, return to the previous player window. An investigator may end his or her turn early if there are no other actions he or she wishes to perform. If the investigator does not or cannot take an action, proceed to 2.2.2.<p></p>

    <h3>2.2.2 Investigator's turn ends.</h3>

    <p>Flip the active investigator's mini card to its colorless side to show that the investigator's turn has ended. If there is an investigator who has not yet taken a turn this round, return to 2.2. If each investigator has taken a turn this round, proceed to 2.3.</p>

    <h3>2.3 Investigation phase ends.</h3>

    <p>This step formalizes the end of the investigation phase.</p>

    <h3 id="Enemy_Phase">III. Enemy phase</h3>

    <h3>3.1 Enemy phase begins.</h3>

    <p>This step formalizes the beginning of the enemy phase.</p>

    <h3>3.2 Hunter enemies move.</h3>

    <p>Resolve the hunter keyword for each ready, unengaged enemy that has the hunter keyword (see "<a href="#Hunter">Hunter</a>" on page 12).</p>

    <h3>3.3 Next investigator resolves engaged enemy attacks.</h3>

    <p>Resolve engaged enemy attacks in player order, with each player resolving all of his or her engaged enemies before advancing to the next player.</p>

    <p>Each ready, engaged enemy makes an attack against the investigator to which it is engaged. When an enemy attacks, deal its attack (both its damage and its horror, simultaneously) to the engaged investigator. Upon completion of dealing the attack (and all abilities triggered by the attack), exhaust the enemy. If an investigator is engaged with multiple enemies, resolve their attacks in the order of the attacked investigator's choosing.</p>

    <p>After an investigator has resolved the attacks of the enemies he or she is engaged with, return to the previous player window. After the final investigator resolves enemy attacks, proceed to the next player window.</p>

    <h3>3.4 Enemy phase ends.</h3>

    <p>This step formalizes the end of the enemy phase.</p>

    <h3 id="Upkeep_Phase">IV. Upkeep phase</h3>

    <h3>4.1 Upkeep phase begins.</h3>

    <p>This step formalizes the beginning of the upkeep phase.</p>

    <h3>4.2 Reset actions.</h3>

    <p>Flip each investigator's mini card back to its colored side. This indicates that the investigator's actions have been reset for his or her next turn.</p>

    <h3>4.3 Ready exhausted cards.</h3>

    <p>Simultaneously ready each exhausted card.</p>

    <h3>4.4 Each investigator draws 1 card and gains 1 resource.</h3>

    <p>In player order, each investigator draws 1 card. Once those cards have been drawn, each investigator gains 1 resource.</p>

    <h3>4.5 Each investigator checks hand size.</h3>

    <p>In player order, each investigator with more than 8 cards in hand chooses and discards cards from his or her hand until he or she has 8 cards remaining in hand.</p>

    <h3>4.6 Upkeep phase ends.</h3>

    <p>This step formalizes the end of the upkeep phase.</p>

    <p>As the upkeep phase is the final phase in the round, this step also formalizes the end of the round. Any active "until the end of the round" lasting effects expire at this time.</p>

    <p>After this step is complete, play proceeds to the beginning of the mythos phase of the next game round.</p>

    <h2 id="Skill_Test_Timing">Skill Test Timing</h2>

    <table className="chart">
    <tbody><tr><th>Skill Test Timing</th></tr>
    <tr><td className="green">ST.1 Determine skill of test. Skill test of that type begins.</td></tr>
    <tr><td className="red"><span title="free" className="icon-free"></span> PLAYER WINDOW</td></tr>
    <tr><td className="green">ST.2 Commit cards from hand to skill test.</td></tr>
    <tr><td className="red"><span title="free" className="icon-free"></span> PLAYER WINDOW</td></tr>
    <tr><td className="green">ST.3 Reveal chaos token.</td></tr>
    <tr><td className="green">ST.4 Resolve chaos symbol effect(s).</td></tr>
    <tr><td className="green">ST.5 Determine investigator's modified skill value.</td></tr>
    <tr><td className="green">ST.6 Determine success/failure of skill test.</td></tr>
    <tr><td className="green">ST.7 Apply skill test results.</td></tr>
    <tr><td className="green">ST.8 Skill test ends.</td></tr>
    </tbody></table>

    <h3>ST.1 Determine skill type of test. Skill test of that type begins.</h3>

    <p>This step formalizes the beginning of a skill test. There are four types of skill tests: willpower tests, intellect tests, combat tests, and agility tests. The card ability or game rule determines which type of test is necessary, and thereby a test of that type begins.</p>

    <h3>ST.2 Commit cards from hand to skill test.</h3>

    <p>The investigator performing the skill test may commit any number of cards with an appropriate skill icon from his or her hand to this test.</p>

    <p>Each other investigator at the same location as the investigator performing the skill test may commit one card with an appropriate skill icon to this test.</p>

    <p>An appropriate skill icon is either one that matches the skill being tested, or a wild icon. The investigator performing this test gets +1 to his or her skill value during this test for each appropriate skill icon that is committed to this test.</p>

    <p>Cards that lack an appropriate skill icon may not be committed to a skill test. Do not pay a card's resource cost when committing it.</p>

    <h3>ST.3 Reveal chaos token.</h3>

    <p>The investigator performing the skill test reveals one chaos token at random from the chaos bag.</p>

    <h3>ST.4 Apply chaos symbol effect(s).</h3>

    <p>Apply any effects initiated by the symbol on the revealed chaos token. Each of the following symbols indicates that an ability on the scenario reference card must initiate: <span title="skull" className="icon-skull"></span>, <span title="cultist" className="icon-cultist"></span>, <span title="tablet" className="icon-tablet"></span>, or <span title="elder_thing" className="icon-elder_thing"></span>.</p>

    <p>The <span title="elder_sign" className="icon-elder_sign"></span> symbol indicates that the <span title="elder_sign" className="icon-elder_sign"></span> ability on the investigator card belonging to the player performing the test must initiate.</p>

    <p>If none of the above symbols are revealed, or if the icon has no corresponding ability, this step completes with no effect.</p>

    <h3>ST.5 Determine investigator's modified skill value.</h3>

    <p>Start with the base skill (of the skill that matches the type of test that is resolving) of the investigator performing this test, and apply all active modifiers, including the appropriate icons that have been committed to this test, effects of the chaos token(s) revealed, and all active card abilities that are modifying the investigator's skill value.</p>

    <h3>ST.6 Determine success/failure of skill test.</h3>

    <p>Compare the investigator's modified skill value to the difficulty of the skill test.</p>

    <p>If the investigator's skill value equals or exceeds the difficulty for this test (as indicated by the card or game mechanic invoking the test), the investigator succeeds at the test.</p>

    <ul>

    <li>  If an investigator automatically succeeds at a test via a card ability, the total difficulty of that test is considered 0.</li>

    </ul>

    <p>If the investigator's skill value is less than the difficulty for this test, the investigator fails at the test.</p>

    <ul>

    <li>  If an investigator automatically fails at a test via a card ability or revealing the <span title="auto_fail" className="icon-auto_fail"></span> symbol, his or her total skill value for that test is considered 0.</li>

    </ul>

    <h3>ST.7 Apply skill test results.</h3>

    <p>The card ability or game rule that initiated a skill test usually indicates the consequences of success and/or failure for that test. (Additionally, some other card abilities may contribute additional consequences, or modify existing consequences, at this time.) Resolve the appropriate consequences (based on the success or failure established during step ST.6) at this time.</p>

    <p>If there are multiple results to be applied during this step, the investigator performing the test applies those results in the order of his or her choice.</p>

    <h3>ST.8 Skill test ends.</h3>

    <p>This step formalizes the end of this skill test. Discard all cards that were committed to this skill test, and return all revealed chaos tokens to the chaos bag.</p>

    <h1 id="Appendix_III_Setting_Up_The_Game">Appendix III: Setting Up The Game</h1>

    <p>To setup a game, perform the following steps in order:</p>

    <ol>

    <strong></strong><li><strong>  Choose investigators.</strong> Each player chooses a different investigator, and places that investigator's card in his or her play area.</li>

    <strong></strong><li><strong>  Take trauma damage/horror.</strong> In campaign play, each player places damage equal to his or her physical trauma, and horror equal to his or her mental trauma, on his or her investigator card.</li>

    <strong></strong><li><strong>  Choose one of those investigators to be the lead investigator for this game.</strong></li>

    <strong></strong><li><strong>  Assemble and shuffle the investigator decks.</strong></li>

    <strong></strong><li><strong>  Assemble token pool.</strong> Place the damage, horror, clue/doom, and resource tokens within easy reach of all players.</li>

    <strong></strong><li><strong>  Assemble the chaos bag.</strong> Place the chaos tokens indicated by the campaign setup instructions into the bag, and return the other chaos tokens to the game box.</li>

    <ul>

    <li>  In campaign mode, use the chaos bag as it was composed upon completion of the previous scenario.</li>

    </ul>

    <strong></strong><li><strong>  Collect starting resources.</strong> Each investigator gains 5 resources from the token pool.</li>

    <strong></strong><li><strong>  Draw opening hands.</strong> Each player draws 5 cards. Each player, in player order, may mulligan once at this time.</li>

    <ul>

    <li>  Each weakness card drawn during this step is ignored, set aside (without resolving it), and replaced by drawing another card from the deck. Upon completion of this step, shuffle each of these weakness cards back into its owner's deck.</li>

    </ul>

    <strong></strong><li><strong>  Read the scenario introduction in the campaign guide.</strong></li>

    <strong></strong><li><strong>  Perform the scenario setup instructions indicated by the campaign guide.</strong> This includes gathering the encounter sets listed in the setup instructions in the campaign guide, placing locations, placing investigator mini cards at the location each investigator begins play at, setting aside any listed cards, and shuffling remaining encounter cards together to form the encounter deck.</li>

    <strong></strong><li><strong>  Set agenda deck.</strong> Assemble the agenda deck in sequential order, with the art side faceup, so that "agenda 1a" is on top. Read the story text on agenda 1a.</li>

    <strong></strong><li><strong>  Set act deck.</strong> Assemble the act deck in sequential order, with the art side faceup, so that "act 1a" is on top. Read the story text on act 1a.</li>

    <strong></strong><li><strong>  Place the scenario reference card next to the agenda deck.</strong></li>

    </ol>

    <p>There are no action windows during setup. Players may only trigger player card abilities or play cards from hand during setup if the card or ability's specific triggering condition is met.</p>


    <h1 id="Appendix_IV_Card_Anatomy">Appendix IV: Card Anatomy</h1>

    <p>This section presents a detailed anatomy of each cardtype. Pages 28-29 detail scenario cards, and pages 30-31 detail investigator/player cards.</p>

    <p>Scenario cards include act cards, agenda cards, location cards, treachery cards, enemy cards, and scenario reference cards.</p>

    <p>Player cards include investigator cards, investigator mini cards, asset cards, event cards, and skill cards.</p>

    <h2 id="Scenario_Card_Anatomy_Key">Scenario Card Anatomy Key</h2>

    <ol>

    <li><strong>Encounter Set Symbol:</strong> Indicates which encounter set the card belongs to.</li>

    <li><strong>Cardtype:</strong> Indicates how a card behaves or may be used in the game.</li>

    <li><strong>Title:</strong> The name of this card.</li>

    <li><strong>Traits:</strong> Flavorful attributes that may be referenced by card abilities.</li>

    <li><strong>Ability:</strong> This card's specialized means of interacting with the game.</li>

    <li><strong>Enemy Fight Value:</strong> Determines the difficulty of a skill test to attack this enemy.</li>

    <li><strong>Enemy Health Value:</strong> This enemy's health value, which measures its physical durability.</li>

    <li><strong>Enemy Evade Value:</strong> Determines the difficulty of a skill test to evade this enemy.</li>

    <li><strong>Damage:</strong> The amount of damage this enemy deals with its attack.</li>

    <li><strong>Horror:</strong> The amount of horror this enemy deals with its attack.</li>

    <li><strong>Shroud:</strong> Determines the difficulty of a skill test to investigate this location.</li>

    <li><strong>Clue Value:</strong> The number of clues placed on this location when it is first revealed.</li>

    <li><strong>Connection Symbols:</strong> Indicate the movement connections between locations.</li>

    <li><strong>Act/Agenda Sequence:</strong> Used to order the act/agenda deck.</li>

    <li><strong>Clue Threshold:</strong> The number of clues that must be spent to advance this act.</li>

    <li><strong>Doom Threshold:</strong> The amount of doom in play required to advance this agenda.</li>

    <li><strong>Product Set Information:</strong> Indicates this card's product of origin.</li>

    <li><strong>Encounter Set Number:</strong> Indicates the number of cards within an encounter set, and this card's place within that set.</li>

    </ol>

    <h2 id="Player_Card_Anatomy_Key">Player Card Anatomy Key</h2>

    <ol>

    <li><strong>Cost:</strong> The resource cost to play a card.</li>

    <li><strong>Level:</strong> The amount of experience required to purchase this card for a deck.</li>

    <li><strong>Cardtype:</strong> Indicates how a card behaves or may be used in the game.</li>

    <li><strong>Class Symbol:</strong> The class to which a card belongs. Neutral cards have no class symbol.</li>

    <li><strong>Title:</strong> The name of this card.</li>

    <li><strong>Subtitle:</strong> A secondary identifier for a card.</li>

    <li><strong>Skills:</strong> This investigator's value for his or her skills, in order: Willpower (<span title="willpower" className="icon-willpower"></span>), Intellect (<span title="intellect" className="icon-intellect"></span>), Combat (<span title="combat" className="icon-combat"></span>), Agility (<span title="agility" className="icon-agility"></span>).</li>

    <li><strong>Traits:</strong> Flavorful attributes that may be referenced by card abilities.</li>

    <li><strong>Ability:</strong> This card's specialized means of interacting with the game.</li>

    <li><strong>Elder Sign Ability:</strong> This investigator's ability for the Elder Sign token.</li>

    <li><strong>Health:</strong> This card's health value, which measures its physical durability.</li>

    <li><strong>Sanity:</strong> This card's sanity value, which measures its mental durability.</li>

    <li><strong>Skill Test Icons:</strong> Modify skill value while committed to a skill test.</li>

    <li><strong>Product Set Information:</strong> Indicates this card's product of origin.</li>

    </ol>
  </div>
  </Fragment>
]

class RulesDescriptions extends React.Component {
  render() {
    return rules_descriptions;
  }
}

export default RulesDescriptions;
