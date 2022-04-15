import aviatorImg from 'assets/img/stages/8/aviator.png'
import bowlineImg from 'assets/img/stages/8/bowline.png'
import catEyeImg from 'assets/img/stages/8/cat-eye.png'
import geometricImg from 'assets/img/stages/8/geometric.png'
import ovalImg from 'assets/img/stages/8/oval.png'
import oversizedImg from 'assets/img/stages/8/oversized.png'
import rimlessImg from 'assets/img/stages/8/rimless.png'
import roundImg from 'assets/img/stages/8/round.png'
import squareImg from 'assets/img/stages/8/square.png'
import wayframeImg from 'assets/img/stages/8/wayframe.png'
import wrapImg from 'assets/img/stages/8/wrap.png'
import reactangleImg from 'assets/img/stages/8/reactangle.png'

export type glassesItemsValue =
  | 'aviator'
  | 'bowline'
  | 'cat_eye'
  | 'geometric'
  | 'oval'
  | 'oversized'
  | 'rimless'
  | 'round'
  | 'square'
  | 'wayframe'
  | 'wrap'
  | 'reactangle'
  | null
interface Item {
  title: string
  img: string
  value: glassesItemsValue
}

export const glassesItems: Item[] = [
  {
    title: 'Aviator',
    img: aviatorImg,
    value: 'aviator',
  },
  {
    title: 'Browline',
    img: bowlineImg,
    value: 'bowline',
  },
  {
    title: 'Cat Eye',
    img: catEyeImg,
    value: 'cat_eye',
  },
  {
    title: 'Geometric',
    img: geometricImg,
    value: 'geometric',
  },
  {
    title: 'Oval',
    img: ovalImg,
    value: 'oval',
  },
  {
    title: 'Oversized',
    img: oversizedImg,
    value: 'oversized',
  },
  {
    title: 'Rimless',
    img: rimlessImg,
    value: 'rimless',
  },
  {
    title: 'Round',
    img: roundImg,
    value: 'round',
  },
  {
    title: 'Square',
    img: squareImg,
    value: 'square',
  },
  {
    title: 'wayframeImg',
    img: wayframeImg,
    value: 'wayframe',
  },
  {
    title: 'Wrap',
    img: wrapImg,
    value: 'wrap',
  },
  {
    title: 'Rectangle',
    img: reactangleImg,
    value: 'reactangle',
  },
]
