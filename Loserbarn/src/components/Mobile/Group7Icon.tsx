import { memo, SVGProps } from 'react';

const Group7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={22.5} cy={7.5} r={7.5} fill='#FF0000' />
    <circle cx={7.5} cy={7.5} r={7.5} fill='#FFCC00' />
    <circle cx={37.5} cy={7.5} r={7.5} fill='#FFFBED' />
  </svg>
);
const Memo = memo(Group7Icon);
export { Memo as Group7Icon };
