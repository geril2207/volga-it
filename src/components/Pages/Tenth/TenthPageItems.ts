import rayBanImg from 'assets/img/stages/10/1.svg'
import oakleyImg from 'assets/img/stages/10/2.svg'
import gucciImg from 'assets/img/stages/10/3.svg'
import armaniExchangeImg from 'assets/img/stages/10/4.svg'
import hillaryDuffImg from 'assets/img/stages/10/5.svg'
import pradaImg from 'assets/img/stages/10/6.svg'
import versaceImg from 'assets/img/stages/10/7.svg'
import vogueImg from 'assets/img/stages/10/8.svg'
import micKorsImg from 'assets/img/stages/10/9.svg'
import coachImg from 'assets/img/stages/10/10.svg'
import toryBurchImg from 'assets/img/stages/10/11.svg'
import burberryImg from 'assets/img/stages/10/12.svg'

interface Item {
  img: string
  value: string
}

export const brandsItems: Item[] = [
  {
    img: rayBanImg,
    value: 'ray_ban',
  },
  {
    img: oakleyImg,
    value: 'oakley',
  },
  {
    img: gucciImg,
    value: 'gucci',
  },
  {
    img: armaniExchangeImg,
    value: 'armani_exchange',
  },
  {
    img: hillaryDuffImg,
    value: 'hillary_duff',
  },
  {
    img: pradaImg,
    value: 'prada',
  },
  {
    img: versaceImg,
    value: 'versace',
  },
  {
    img: vogueImg,
    value: 'vogue_eyewear',
  },
  {
    img: micKorsImg,
    value: 'michael_kors',
  },
  {
    img: coachImg,
    value: 'coach',
  },
  {
    img: toryBurchImg,
    value: 'tory_burch',
  },
  {
    img: burberryImg,
    value: 'burberry',
  },
]
