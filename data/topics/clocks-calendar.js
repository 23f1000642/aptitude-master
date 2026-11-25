APT.addTopic({
  id: 'clocks-calendar',
  title: 'Clocks & Calendar',
  tagline: 'A rabbit and a tortoise on a 360° track, and leftover days.',
  pdfTopics: ['7.20', '7.19', '7.15'],
  concepts: {
    story: [
      'A clock face is a 360° running track. The <b>minute hand is a fast rabbit</b>: 360° in 60 minutes, so <b>6° per minute</b>. The <b>hour hand is a slow tortoise</b>: 30° per hour, so <b>0.5° per minute</b>. The rabbit gains <b>5.5° every minute</b>.',
      '<b>Calendar</b>: 7 days make a week. Only the <b>leftover days</b> ("odd days") after full weeks move the weekday on. A normal year = 52 weeks + 1 odd day; a leap year has 2 odd days.',
    ],
    memory: 'Angle = |30H − 5.5M|. Normal year +1 day, leap year +2 days.',
    formulas: [
      '<b>Angle at H:M</b> = |30H − 5.5M| (if it\'s over 180°, take 360° minus it)',
      'Hands meet every 720/11 = 65 5/11 minutes → 22 times a day',
      'Hands opposite (180°): 22 times a day. At right angles (90°): 44 times a day',
      'Between H and H+1, angle θ happens at M = (30H ± θ)/5.5 minutes past H',
      'Leap year: divisible by 4. Century years must be divisible by 400 (2000 yes, 1900 no)',
      'Odd days: 100 years = 5, 200 years = 3, 300 years = 1, 400 years = 0',
    ],
    tricks: [
      '<b>Striking clock</b>: 4 strikes have 3 gaps, not 4.',
      '<b>Fast/slow watch</b>: error per hour × hours passed = total error.',
      '<b>Hands meet every 64 min</b> instead of 65 5/11 → the watch loses (65 5/11 − 64)/64 × 1440 min per day.',
      '<b>Weekday jumps</b>: go year by year, adding 1 (normal) or 2 (leap) odd days.',
    ],
    patterns: [
      ['Angle at a given time', '|30H − 5.5M|'],
      ['When are the hands together / opposite / at an angle', 'M = (30H ± θ)/5.5'],
      ['Clock gains or loses', 'Total error = rate × time'],
      ['Pendulum strikes', 'Count the gaps, not the strikes'],
      ['Weekday on another date', 'Count the odd days'],
    ],
  },
  questions: [
    {
      pdf: '7.20.8', level: 'easy',
      q: 'What is the angle between the hands of a clock at 2:30?',
      options: ['95°', '105°', '115°', '120°'], answer: 1,
      steps: ['|30 × 2 − 5.5 × 30| = |60 − 165| = 105°.'],
      trick: 'Angle formula.',
    },
    {
      pdf: '7.20.6', level: 'medium',
      q: 'At what time between 7 and 8 o\'clock are the hands in a straight line but not together?',
      options: ['5 min past 7', '5 5/11 min past 7', '5 2/11 min past 7', '5 3/11 min past 7'], answer: 1,
      steps: ['Straight line but not together means 180° apart.', 'M = (30 × 7 − 180)/5.5 = 30/5.5 = 60/11 = 5 5/11 minutes past 7.'],
    },
    {
      pdf: '7.20.1', level: 'easy',
      q: 'A clock takes 7 seconds to strike 4 o\'clock. How long does it take to strike 11 o\'clock?',
      options: ['18 seconds', '20 seconds', '19.25 seconds', '23.33 seconds'], answer: 3,
      steps: ['4 strikes have 3 gaps, so each gap = 7/3 s.', '11 strikes have 10 gaps: 10 × 7/3 = 23.33 s.'],
      trick: 'Count gaps, not strikes.',
    },
    {
      pdf: '7.20.2', level: 'easy',
      q: 'A digital watch runs fast by 15 seconds per hour. It is set correctly at 10 a.m. on Tuesday. What time does it show at 6 p.m. on Saturday?',
      options: ['6:16 p.m.', '6:30 p.m.', '6:26 p.m.', '5:34 p.m.'], answer: 2,
      steps: ['Tuesday 10 a.m. to Saturday 6 p.m. = 4 days 8 hours = 104 hours.', '104 × 15 s = 1560 s = 26 minutes fast.', 'It shows 6:26 p.m.'],
    },
    {
      pdf: '7.0.2', level: 'hard',
      q: 'How much does a watch lose per day if its hands coincide every 64 minutes?',
      options: ['32 8/11 min', '36 5/11 min', '90 min', '96 min'], answer: 0,
      steps: [
        'In a correct clock the hands meet every 720/11 = 65 5/11 minutes.',
        'This watch shows a meeting after only 64 real minutes, so it loses 16/11 min every 64 minutes.',
        'Per day: (16/11) × (1440/64) = 360/11 = 32 8/11 minutes.',
      ],
    },
    {
      pdf: '7.20.4', level: 'easy',
      q: 'A clock strikes once at 1 o\'clock, twice at 2, …, twelve times at 12, then again once at 1. How many strikes in 2 days?',
      options: ['156', '312', '78', '288'], answer: 1,
      steps: ['One 12-hour round: 1 + 2 + … + 12 = 78.', '2 days = 4 rounds: 4 × 78 = 312.'],
    },
    {
      pdf: '7.20.3', level: 'medium',
      q: 'The minute hand is 10 cm long. What area does it sweep between 9:00 a.m. and 9:35 a.m.?',
      options: ['183.3 cm²', '366.6 cm²', '244.4 cm²', '188.39 cm²'], answer: 0,
      steps: ['35 minutes × 6° = 210°.', 'Sector area = π × 10² × 210/360 = 100π × 7/12 ≈ 183.3 cm².'],
    },
    {
      pdf: '7.15.1', level: 'medium',
      q: 'If 09/12/2001 was a Sunday, what day was 09/12/1971?',
      options: ['Wednesday', 'Tuesday', 'Saturday', 'Thursday'], answer: 3,
      steps: [
        '30 years back: 30 odd days for the years, plus 1 extra for each 29 February in between.',
        'Leap days 1972, 1976, …, 2000 = 8. Total = 38 odd days.',
        '38 mod 7 = 3. Going back 3 days from Sunday: Saturday, Friday, Thursday.',
      ],
    },
    {
      pdf: '7.15.2', level: 'medium',
      q: 'The calendar for the year 2007 will be the same for which year?',
      options: ['2012', '2018', '2014', '2016'], answer: 1,
      steps: [
        'Add the odd days year by year from 2007: 1, 2 (2008), 1, 1, 1, 2 (2012), 1, 1, 1, 2 (2016), 1.',
        'Up to the end of 2017 that adds to 14, a multiple of 7, so 2018 starts on the same weekday.',
        '2007 and 2018 are both non-leap years, so their calendars match.',
      ],
    },
  ],
});
