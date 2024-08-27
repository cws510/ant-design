import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = `
  召回片段1
`;

const itemsNest: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel nest panel',
    children: <p>{text}</p>,
  },
];

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <Collapse defaultActiveKey="1" items={itemsNest} />,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse onChange={onChange} items={items} />;
};

export default App;
