import './index.css'

const DenominationItem = props => {
  const {denominationDetails, upDateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    upDateBalance(value)
  }

  return (
    <li className="item">
      <button
        className="denomination-button"
        type="button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
