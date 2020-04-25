import shortid from 'shortid'
import faker from 'faker'

export const columns = [
  {
    id: '0',
    heading: 'Winnie',
    color: '#8E6E95',
    cards: [
      {id: shortid(), content: faker.random.words()},
      {id: shortid(), content: faker.random.words()},
    ],
  },
  {
    id: '1',
    heading: 'Bob',
    color: '#39A59C',
    cards: [
      {id: shortid(), content: faker.random.words()},
      {id: shortid(), content: faker.random.words()},
    ],
  },
  {
    id: '2',
    heading: 'Thomas',
    color: '#344759',
    cards: [
      {id: shortid(), content: faker.random.words()},
      {id: shortid(), content: faker.random.words()},
    ],
  },
  {
    id: '3',
    heading: 'George',
    color: '#E8741E',
    cards: [
      {id: shortid(), content: faker.random.words()},
      {id: shortid(), content: faker.random.words()},
    ],
  },
] as const

export type TCard = {id: string; content: string}
export type TCards = Record<string, TCard[]>

const columnCards = columns.reduce((ac, cu) => ({...ac, [cu.id]: cu.cards}), {})

export const getColumnCards = (): TCards => {
  const cache = window.sessionStorage.getItem('column-cards')
  return cache ? JSON.parse(cache) : columnCards
}

export const updateColumnCards = (cards: string) =>
  window.sessionStorage.setItem('column-cards', cards)
