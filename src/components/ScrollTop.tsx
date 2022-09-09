import {
  FC
} from 'react'

import './Scrolltop.scss'

const ScrollTop: FC = () => {
  const onClickHandler = () => window.scrollTo(0, 0)

  return (
    <div
      data-testid="scrollTo-button"
      tabIndex={0}
      role="button"
      onKeyDown={onClickHandler}
      onClick={onClickHandler} 
      className="scrolltop"
    >
      <div className="scrolltop__icon">&#8593;</div>
    </div>
  )
}

export default ScrollTop
