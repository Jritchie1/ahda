import React, { Fragment } from 'react';

let rules_contents = [
  <Fragment>
  <ul>
  <li><a href="#Intro">The Thing That Should Not Be...</a></li>
    <ul>
    <li><a href="#The_Golden_Rules">The Golden Rules</a></li>
    <li><a href="#The_Grim_Rule">The Grim Rule</a></li>
    </ul>
  <li><a href="#Glossary">Glossary</a></li>
    <ul>
    <li><a href="#A_An">A, An</a></li>
    <li><a href="#Ability">Ability</a></li>
      <ul>
      <li><a href="#Abilities_Constant">Constant Abilities</a></li>
      <li><a href="#Abilities_Forced">Forced Abilities</a></li>
      <li><a href="#Abilities_Revelation">Revelation Abilities</a></li>
      <li><a href="#Abilities_Triggered">Triggered Abilities</a></li>
      <li><a href="#Abilities_Keywords">Keywords</a></li>
      <li><a href="#Spawn_Instructions_and_Prey_Instructions">Spawn Instructions and Prey Instructions</a></li>
      <li><a href="#Action_Designators">Action Designators</a></li>
      </ul>
    <li><a href="#Act_Deck_and_Agenda_Deck">Act Deck and Agenda Deck</a></li>
    <li><a href="#Action">Action</a></li>
    <li><a href="#Activate_Action">Activate Action</a></li>
    <li><a href="#Active_Player">Active Player</a></li>
    <li><a href="#Additional_Costs">Additional Costs</a></li>
    <li><a href="#After">After</a></li>
    <li><a href="#Agenda_Deck">Agenda Deck</a></li>
    <li><a href="#Alert">Alert</a></li>
    <li><a href="#Aloof">Aloof</a></li>
    <li><a href="#Asset_Cards">Asset Cards</a></li>
    <li><a href="#At">At</a></li>
    <li><a href="#Attach_To">Attach To</a></li>
    <li><a href="#Attacker_Attacked">Attacker, Attacked</a></li>
    <li><a href="#Attack_of_Opportunity">Attack of Opportunity</a></li>
    <li><a href="#Automatic_Failure_Success">Automatic Failure/Success</a></li>
    <li><a href="#Base_Value">Base Value</a></li>
    <li><a href="#Bearer">Bearer</a></li>
    <li><a href="#Blank">Blank</a></li>
    <li><a href="#Campaign_Play">Campaign Play</a></li>
      <ul>
      <li><a href="#Experience">Experience</a></li>
      <li><a href="#Trauma">Trauma</a></li>
      <li><a href="#Defeat_by_Card_Ability">Defeat by Card Ability</a></li>
      <li><a href="#Advancing_to_Next_Scenario">Advancing to Next Scenario</a></li>
      <li><a href="#Joining_or_Leaving_a_Campaign">Joining or Leaving a Campaign</a></li>
      </ul>
    <li><a href="#Cancel">Cancel</a></li>
    <li><a href="#Cannot">Cannot</a></li>
    <li><a href="#Cardtypes">Cardtypes</a></li>
    <li><a href="#Chaos_Tokens">Chaos Tokens</a></li>
    <li><a href="#Choices_and_the_Grim_Rule">Choices, and the Grim Rule</a></li>
    <li><a href="#Clues">Clues</a></li>
    <li><a href="#Collection">Collection</a></li>
    <li><a href="#Constant_Abilities">Constant Abilities</a></li>
    <li><a href="#Control">Control</a></li>
    <li><a href="#Copy">Copy</a></li>
    <li><a href="#Costs">Costs</a></li>
    <li><a href="#Dealing_Damage_Horror">Dealing Damage/Horror</a></li>
    <li><a href="#Deck">Deck</a></li>
    <li><a href="#Deckbuilding">Deckbuilding</a></li>
      <ul>
      <li><a href="#Classes">Classes</a></li>
      </ul>
    <li><a href="#Defeat">Defeat</a></li>
    <li><a href="#Delayed_Effects">Delayed Effects</a></li>
    <li><a href="#Difficulty_level">Difficulty (level)</a></li>
    <li><a href="#Difficulty_skill_tests">Difficulty (skill tests)</a></li>
    <li><a href="#Direct_Damage_Direct_Horror">Direct Damage, Direct Horror</a></li>
    <li><a href="#Discard_Piles">Discard Piles</a></li>
    <li><a href="#Doom">Doom</a></li>
    <li><a href="#Draw_Action">Draw Action</a></li>
    <li><a href="#Drawing_Cards">Drawing Cards</a></li>
    <li><a href="#Effects">Effects</a></li>
    <li><a href="#Elimination">Elimination</a></li>
    <li><a href="#Empty_Location">Empty Location</a></li>
    <li><a href="#Encounter_Deck">Encounter Deck</a></li>
    <li><a href="#Encounter_Set">Encounter Set</a></li>
    <li><a href="#Enemy_Cards">Enemy Cards</a></li>
    <li><a href="#Enemy_Engagement">Enemy Engagement</a></li>
    <li><a href="#Enemy_Phase">Enemy Phase</a></li>
    <li><a href="#Engage_Action">Engage Action</a></li>
    <li><a href="#Enters_Play">Enters Play</a></li>
    <li><a href="#Evade_Action">Evade, Evade Action</a></li>
    <li><a href="#Event_Cards">Event Cards</a></li>
    <li><a href="#Exceptional">Exceptional</a></li>
    <li><a href="#Exhaust">Exhaust, Exhausted</a></li>
    <li><a href="#Exile">Exile</a></li>
    <li><a href="#Experience">Experience</a></li>
    <li><a href="#Fast">Fast</a></li>
    <li><a href="#Fight_Action">Fight Action</a></li>
    <li><a href="#Flavor_Text">Flavor Text</a></li>
    <li><a href="#Forced_Abilities">Forced Abilities</a></li>
    <li><a href="#Gains">Gains</a></li>
    <li><a href="#Game">Game</a></li>
    <li><a href="#Hand_Size">Hand Size</a></li>
    <li><a href="#Heal">Heal</a></li>
    <li><a href="#Health_and_Damage">Health and Damage</a></li>
    <li><a href="#Hidden">Hidden</a></li>
    <li><a href="#Hunter">Hunter</a></li>
    <li><a href="#If">If</a></li>
    <li><a href="#Immune">Immune</a></li>
    <li><a href="#In_Play_and_Out_of_Play">In Play and Out of Play</a></li>
    <li><a href="#In_Player_Order">In Player Order</a></li>
    <li><a href="#Instead">Instead</a></li>
    <li><a href="#Investigate_Action">Investigate Action</a></li>
    <li><a href="#Investigation_Phase">Investigation Phase</a></li>
    <li><a href="#Investigator_Deck">Investigator Deck</a></li>
    <li><a href="#Keywords">Keywords</a></li>
    <li><a href="#Killed_Insane_Investigators">Killed/Insane Investigators</a></li>
    <li><a href="#Lasting_Effects">Lasting Effects</a></li>
    <li><a href="#Lead_Investigator">Lead Investigator</a></li>
    <li><a href="#Leaves_Play">Leaves Play</a></li>
    <li><a href="#Limits_and_Maximums">Limits and Maximums</a></li>
    <li><a href="#Location_Cards">Location Cards</a></li>
    <li><a href="#Massive">Massive</a></li>
    <li><a href="#May">May</a></li>
    <li><a href="#Modifiers">Modifiers</a></li>
    <li><a href="#Move">Move</a></li>
    <li><a href="#Move_Action">Move Action</a></li>
    <li><a href="#Mulligan">Mulligan</a></li>
    <li><a href="#Must">Must</a></li>
    <li><a href="#Mythos_Phase">Mythos Phase</a></li>
    <li><a href="#Nearest">Nearest</a></li>
    <li><a href="#Nested_Sequences">Nested Sequences</a></li>
    <li><a href="#Ownership_and_Control">Ownership and Control</a></li>
    <li><a href="#Parley">Parley</a></li>
    <li><a href="#Per_Investigator">Per Investigator</a></li>
    <li><a href="#Peril">Peril</a></li>
    <li><a href="#Permanent">Permanent</a></li>
    <li><a href="#Play">Play</a></li>
    <li><a href="#Play_Action">Play Action</a></li>
    <li><a href="#Play_Restrictions_Permissions_and_Instructions">Play Restrictions, Permissions, and Instructions</a></li>
    <li><a href="#Prey">Prey</a></li>
    <li><a href="#Printed">Printed</a></li>
    <li><a href="#Priority_of_Simultaneous_Resolution">Priority of Simultaneous Resolution</a></li>
    <li><a href="#Put_into_Play">Put into Play</a></li>
    <li><a href="#Qualifiers">Qualifiers</a></li>
    <li><a href="#Reaction_Opportunities">Reaction Opportunities</a></li>
    <li><a href="#Ready">Ready</a></li>
    <li><a href="#Record_in_your_Campaign Log">"Record in your Campaign Log..."</a></li>
    <li><a href="#Remember_that">"Remember that..."</a></li>
    <li><a href="#Removed_from_Game">Removed from Game</a></li>
    <li><a href="#Resign">Resign</a></li>
    <li><a href="#Resource_Action">Resource Action</a></li>
    <li><a href="#Resources">Resources</a></li>
    <li><a href="#Retaliate">Retaliate</a></li>
    <li><a href="#Revelation">Revelation</a></li>
    <li><a href="#Sanity_and_Horror">Sanity and Horror</a></li>
    <li><a href="#Set_Aside">Set Aside</a></li>
    <li><a href="#Seal">Seal</a></li>
    <li><a href="#Search">Search</a></li>
    <li><a href="#Self_Referential_Text">Self-Referential Text</a></li>
    <li><a href="#Signature_Cards">Signature Cards</a></li>
    <li><a href="#Skill_Cards">Skill Cards</a></li>
    <li><a href="#Skill_Tests">Skill Tests</a></li>
    <li><a href="#Slots">Slots</a></li>
    <li><a href="#Spawn">Spawn</a></li>
    <li><a href="#Standalone_Mode">Standalone Mode</a></li>
    <li><a href="#Supplies">Supplies</a></li>
    <li><a href="#Surge">Surge</a></li>
    <li><a href="#Taking_Damage_Horror">Taking Damage/Horror</a></li>
    <li><a href="#Target">Target</a></li>
    <li><a href="#Then">Then</a></li>
    <li><a href="#Threat_Area">Threat Area</a></li>
    <li><a href="#Tokens">Tokens, Running out of</a></li>
    <li><a href="#Traits">Traits</a></li>
    <li><a href="#Trauma">Trauma</a></li>
    <li><a href="#Treachery_Cards">Treachery Cards</a></li>
    <li><a href="#Triggered_Abilities">Triggered Abilities</a></li>
    <li><a href="#Triggering_Condition">Triggering Condition</a></li>
    <li><a href="#Unique">Unique</a></li>
    <li><a href="#Upkeep_Phase">Upkeep Phase</a></li>
    <li><a href="#Uses">Uses (X "type")</a></li>
    <li><a href="#Vengeance_Points">Vengeance Points</a></li>
    <li><a href="#Victory_Display_Victory_Points">Victory Display, Victory Points</a></li>
    <li><a href="#Weakness">Weakness</a></li>
    <li><a href="#When">When</a></li>
    <li><a href="#Winning_and_Losing">Winning and Losing</a></li>
    <li><a href="#The_letter_X">The letter "X"</a></li>
    <li><a href="#You_Your">You/Your</a></li>
    </ul>
  <li><a href="#Appendix_I_Initiation_Sequence">Appendix I: Initiation Sequence</a></li>
  <li><a href="#Appendix_II_Timing_and_Gameplay">Appendix II: Timing and Gameplay</a></li>
    <ul>
    <li><a href="#Phase_Sequence_Timing">Phase Sequence Timing</a></li>
    <li><a href="#Framework_Event_Details">Framework Event Details</a></li>
      <ul>
      <li><a href="#Mythos_Phase">I. Mythos phase</a></li>
      <li><a href="#Investigation_Phase">II. Investigation phase</a></li>
      <li><a href="#Enemy_Phase">III. Enemy phase</a></li>
      <li><a href="#Upkeep_Phase">IV. Upkeep phase</a></li>
      </ul>
    <li><a href="#Skill_Test_Timing">Skill Test Timing</a></li>
    </ul>
  <li><a href="#Appendix_III_Setting_Up_The_Game">Appendix III: Setting Up The Game</a></li>
  <li><a href="#Appendix_IV_Card_Anatomy">Appendix IV: Card Anatomy</a></li>
    <ul>
    <li><a href="#Scenario_Card_Anatomy_Key">Scenario Card Anatomy Key</a></li>
    <li><a href="#Player_Card_Anatomy_Key">Player Card Anatomy Key</a></li>
    </ul>
  </ul>
  </Fragment>
]

class RulesContents extends React.Component {
  render() {
    return rules_contents;
  }
}

export default RulesContents;
