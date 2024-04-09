import { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Studio Address: <span>123 Fake Street, Hollywood, CA</span></p>
        <p>Director Email: <span>director@example.com</span></p>
        <p>Author's Phone: <span>+1 (555) 555-5555</span></p>
      </footer>
    )
  }
}

export default Footer