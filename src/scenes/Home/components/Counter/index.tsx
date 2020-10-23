import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, subtract } from 'store/counter'
import { getValue } from 'store/counter/selectors'
import { Button } from 'components'
import { Value, Wrapper } from './styled'

interface Props {
  sumBy: number
}

export const Counter: React.FC<Props> = ({ sumBy }) => {
  const value = useSelector(getValue)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Button onClick={() => dispatch(subtract(sumBy))} type="button">
        -
      </Button>
      <Value>{value}</Value>
      <Button onClick={() => dispatch(add(sumBy))} type="button">
        +
      </Button>
    </Wrapper>
  )
}
