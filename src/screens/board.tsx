import React from 'react'
import shortid from 'shortid'

import {Box} from 'components/core'
import {Column, ColumnHeading, ColumnButton} from 'components/column'
import {Card, CardContent, CardLeftButton, CardRightButton} from 'components/card'
import {columns, getColumnCards, updateColumnCards, TCard, TCards} from 'data'

export default function Board() {
  const [cards, setCards] = React.useState<TCards>(getColumnCards)

  const stringifyCards = JSON.stringify(cards)

  React.useEffect(() => {
    updateColumnCards(stringifyCards)
  }, [stringifyCards])

  const addCard = (colId: string) => () => {
    const newCardContent = window.prompt('Create new card')

    if (!!newCardContent) {
      const newCard = {id: shortid(), content: newCardContent}
      setCards((prev) => ({...prev, [colId]: [...prev[colId], newCard]}))
    }
  }

  const moveLeft = (id: string, prevId: string, card: TCard) => () => {
    setCards((prev) => ({
      ...prev,
      [id]: prev[id].filter((c) => c.id !== card.id),
      [prevId]: [...prev[prevId], card],
    }))
  }

  const moveRight = (id: string, nextId: string, card: TCard) => () => {
    setCards((prev) => ({
      ...prev,
      [id]: prev[id].filter((c) => c.id !== card.id),
      [nextId]: [...prev[nextId], card],
    }))
  }

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      overflowX="auto"
      overflowY="hidden"
      padding="25px 12.5px"
      backgroundColor="#eceeee"
    >
      {columns.map((column, i) => {
        const notFirstCol = i !== 0
        const notLastCol = i !== columns.length - 1

        return (
          <Column key={column.id}>
            <ColumnHeading color={column.color}>{column.heading}</ColumnHeading>
            {cards[column.id].map((card) => (
              <Card key={card.id}>
                {notFirstCol && (
                  <CardLeftButton onClick={moveLeft(column.id, columns[i - 1].id, card)}>
                    &lt;
                  </CardLeftButton>
                )}
                <CardContent>{card.content}</CardContent>
                {notLastCol && (
                  <CardRightButton onClick={moveRight(column.id, columns[i + 1].id, card)}>
                    &gt;
                  </CardRightButton>
                )}
              </Card>
            ))}
            <ColumnButton onClick={addCard(column.id)}>+ Add a card</ColumnButton>
          </Column>
        )
      })}
    </Box>
  )
}
