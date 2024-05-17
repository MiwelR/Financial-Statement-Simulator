import { css } from 'lit'

export const financialStatementStyle = css`
  @font-face {
    font-family: 'Ubuntu';
    src: url(https://fonts.googleapis.com/css?family=Ubuntu:300);
  }

  :host {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 3rem;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #d19444aa);
  }

  h1 {
    will-change: filter;
    transition: filter 300ms;

    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 1.4em;
    line-height: 2;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    text-align: center;
  }

  .content-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background-color: rgb(97 97 97 / 52%);
    border: 0px solid #000000;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
  }

  .form > div > label {
    width: 100%;
    text-align: center;
    font-weight: 600;
  }

  .data-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  .data-inputs > label {
    margin-bottom: 0.2rem;
    color: #fff;
  }

  .data-inputs > span {
    color: #fff;
  }

  input {
    border-radius: 5px;
    border: 2px solid #626161;
    padding: 0.3rem;
    width: -webkit-fill-available;
    background-color: #ffffffad;
    color: #000;
    font-weight: bold;
    text-align: center;
    font-size: 0.9rem;
    letter-spacing: 0.07rem;
  }

  input[type='text']::-webkit-inner-spin-button,
  input[type='text']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  input[type='text'] {
    -moz-appearance: textfield;
  }

  button {
    border-radius: 8px;
    border: 2px solid #fff;
    margin-top: 1.5rem;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #d19444;
    color: #fff;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #d19444;
    background-color: #f0f8fffc;
    color: #d19444;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto;
  }

  .result-card {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 0px solid #000000;
    background-color: #ffffffde;
    color: #000;
    padding: 2rem;
    text-align: left;
    width: 100%;
    min-width: 15rem;
    max-width: 18rem;
  }

  .result {
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
    padding: 0.5rem;
    border: 2px solid rgba(97, 97, 97, 0.52);
    margin-bottom: 0.4rem;
  }

  .result-value {
    display: flex;
    justify-content: space-between;
  }

  .msg-default {
    justify-content: center;
    background-color: aliceblue;
    border-radius: 0.3rem;
  }

  @media (min-width: 860px) {
    .content-wrapper {
      gap: 2rem;
    }
  }

  @media (min-width: 1024px) {
    .content-wrapper {
      gap: 5rem;
    }
  }
`
