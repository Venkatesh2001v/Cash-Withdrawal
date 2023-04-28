// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  upDateBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="name-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>

          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="amount">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>

          <ul className="denominations-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationDetails={eachItem}
                upDateBalance={this.upDateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
