import React from 'react';

function toggleMap() {
  console.log('called');
}

function Popover() {
  return (
    <div className='popover-container'>
      <div className='popover' onClick={toggleMap}>
        <p>Answers</p>
        <div className='anscard'>
          <ul className='alpha-list'>
            <li>
              High Class:<span className='high'> ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห</span>
            </li>
            <li>
              Middle Class: <span className='middle'>ก จ ฎ ฏ ด ต บ ป อ</span>
            </li>
            <li>
              Low Class:
              <span className='low'>
                ค ฅ ฆ ง ช ซ ฌ ญ ฑ ฒ ณ ท ธ น พ ฟ ภ ม ย ร ล ว ฬ ฮ
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Popover;
