import { GraphQLScalarType } from 'graphql';

export const dateTimeScalar = new GraphQLScalarType({
  name: 'Performance_start',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  },
})
export const sl = [
    '1405385;/events/images/1405385.jpg;Lady Boys of Bangkok: Flight of Fantasy Tour;2021-08-12T18:30:00+01:00;;Dance;Standard;24.45;33.95;GBP;20533;Edinburgh;57378;The Sabai Pavilion;The Meadows;EH9 1JZ;Edinburgh;A brand new show from the world renowned entertainment group.;The Lady Boys of Bangkok are back in 2021 to bring some sparkle back with their most sensational new show yet',
    ' ‘’ FLIGHT OF FANTASY! ‘’ Climb aboard for the trip of a lifetime as the world’s most glamorous showgirls (who just happen to be men!) send you soaring to spectacular diamante-dipped song and dance destinations',
    ' with over 400 stunning costumes. Your cabin crew',
    ' Ole and Jamie (the UK’s only dwarf drag queen) take you mile high at the biggest and most glitzy show in the sky! Pop icons including Destiny’s Child',
    ' Shania Twain',
    ' Little Mix',
    ' the Pussycat Dolls and many more will have you tapping your feet',
    ' transporting you from Las Vegas to Las Palmas in a sparkle-filled show where Bollywood meets Broadway. The decadence of the Moulin Rouge will be brought to (night)life as these diamond-clad divas Can-Can to new heights',
    ' before the Euphoria of a Eurovision medley',
    ' it’s a Thai Drag Race against time to complete this world tour of wonders before The Final Countdown to incredible finale… So get those Nails',
    ' Hair',
    ' Hips and Heels on point',
    ' because you’re going ‘out-out’',
    ' up and away on a Flight of Fantasy with The Lady Boys of Bangkok! Grab your boarding passes because in 2021',
    ' the sky’s the limit for the UK’s favourite cabaret show and tickets will be in demand! The running time is approximately 1 hour 50 minutes including an interval.;\r'
  ]