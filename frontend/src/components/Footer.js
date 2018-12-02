import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Emoji from './Emoji';

const FooterStyles = styled.footer`
  height: 100%;
  margin: 0;
  border-bottom: 5px dashed #c5c8c6;
  background-color: #f4424e;
  text-align: center;
  display: flex;

  form {
    margin: 25px auto 25px auto;
    width: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: flex-end;

    input {
      font-size: 2rem;
      margin: 1rem;
      padding: 1rem;
      border: 2px solid #f4424e;
      height: 50px;
    }
    button {
      width: 150px;
      height: 50px;
      margin: 1rem;
      border-radius: 5px;
      border: 2px solid black;
      background: #f4f4f4;
      font-weight: bold;
      background-color: #f4424e;
      color: #1d1f21;
      font-size: 1.2rem;
    }
  }

  .footnotes {
    margin: 1rem;
    font-size: 1.5rem;
    color: white;
  }
`;

class Footer extends Component {
  recordEmail = async event => {
    event.preventDefault();

    const { email } = event.target;

    const url = `http://localhost:3001/api/weather/mailinglist`;
    let data = null;
    try {
      data = (await axios.post(url, { email: email.value })).data;
    } catch (e) {
      this.setState({ success: false, error: e });
    }
    if (data) {
      this.setState({ success: true, error: false });
    }
  };

  state = {
    error: false,
    success: false
  };

  successEmoji = <Emoji>✅</Emoji>;
  rejectionEmoji = <Emoji>❌</Emoji>;

  render() {
    const { success, error } = this.state;
    let status = null;

    if (success && !error) {
      status = this.successEmoji;
    } else if (!success && error) {
      status = this.rejectionEmoji;
    }

    return (
      <FooterStyles>
        <section className="footnotes">
          Made with <Emoji>💛</Emoji> in Chicago
        </section>
        <form
          method="POST"
          onSubmit={event => {
            this.recordEmail(event);
          }}
        >
          <input name="email" placeholder="Email" type="text" required />
          <button type="submit">Stay in Touch! {status}</button>
        </form>
      </FooterStyles>
    );
  }
}

export default Footer;
