function Cr({ onCrMinChange, onCrMaxChange }) {
  //   fetch('cr').then((res) =>
  //     res.json().then((data) => {
  //       let string = '';
  //       for (let i = 0; i < data.length; i++) {
  //         string += `${i}: '${data[i]['subtype1']}', `;
  //         // console.log(data[i]);
  //       }
  //       console.log(string);
  //     })
  //   );

  let crOptions = {
    0: '8',
    1: '12',
    2: '10',
    3: '7',
    4: '13',
    5: '28',
    6: '15',
    7: '5',
    8: '39',
    9: '0.50',
    10: '0.13',
    11: '19',
    12: '23',
    13: '20',
    14: '25',
    15: '14',
    16: '0.33',
    17: '6',
    18: '18',
    19: '2',
    20: '29',
    21: '37',
    22: '1',
    23: '4',
    24: '9',
    25: '0.25',
    26: '21',
    27: '24',
    28: '0.17',
    29: '17',
    30: '30',
    31: '35',
    32: '22',
    33: '3',
    34: '13.00',
    35: '27',
    36: '11',
    37: '16',
    38: '26',
  };

  return (
    <div>
      <p>If you want an exact CR, you can leave maximum blank.</p>
      <label htmlFor="CR minimum">CR min</label>
      <input type="text" onChange={(e) => onCrMinChange(e)} />
      <label htmlFor="CR maximum">CR max</label>
      <input type="text" onChange={(e) => onCrMaxChange(e)} />
    </div>
  );
}

export default Cr;
