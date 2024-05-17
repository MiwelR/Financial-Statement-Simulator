import { LitElement, css, html } from 'lit'
import logo from './assets/logo.png'
import { checkResultToShowMessage } from './utils/utils'
import { RESULT_MESSAGES } from './utils/constants'

import { financialStatementStyle } from './FinancialStatementSimulator.style'

export class FinancialStatementSimulator extends LitElement {
  static get styles() {
    return financialStatementStyle
  }

  static get properties() {
    return {
      workingCapital: { state: true },
      nonCurrentAssets: { state: true },
      netFixedAssets: { state: true },
      currentLiabilities: { state: true },
      nonCurrentLiabilities: { state: true },
      stocks: { state: true },
      grossProfit: { state: true },
      interests: { state: true },
      totalAssets: { state: true },
      totalLiability: { state: true },
      ownFunds: { state: true },
      permanentResources: { state: true }
    }
  }

  constructor() {
    super()
    this.workingCapital = 500000
    this.nonCurrentAssets = 700000
    this.netFixedAssets = 600000
    this.currentLiabilities = 300000
    this.nonCurrentLiabilities = 400000
    this.stocks = 200000
    this.grossProfit = 300000
    this.interests = 20000

    this.totalAssets = 0
    this.totalLiability = 0
    this.ownFunds = 0
    this.permanentResources = 0
  }

  connectedCallback() {
    super.connectedCallback()
    this.__handleFormSubmit()
  }

  __formatValues(number) {
    return new Intl.NumberFormat('es-ES', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(number)
  }

  __formatInputNumbers(event) {
    const inputValue = event.target.value
    const formatValue = inputValue.replace(/[^0-9]/g, '')
    const intValue = parseInt(formatValue)
    const isNumber = !isNaN(intValue) && Number.isInteger(intValue)

    if (!isNumber) {
      return formatValue.slice(0, -1)
    } else {
      return formatValue
    }
  }

  __formulasToGetMoreData() {
    this.totalAssets = this.workingCapital + this.nonCurrentAssets
    this.totalLiability = this.currentLiabilities + this.nonCurrentLiabilities
    this.ownFunds = this.totalAssets - this.totalLiability
    this.permanentResources = this.ownFunds + this.nonCurrentLiabilities
  }

  __ratiosToCalculate() {
    // Ratios de liquidez
    this.currentRatio = this.workingCapital / this.currentLiabilities
    this.acidTest =
      (this.workingCapital - this.stocks) / this.currentLiabilities

    // Ratios de solvencia
    this.totalSolvency = this.totalAssets / this.totalLiability
    this.coverageOfOwnFunds = this.ownFunds / this.netFixedAssets
    this.coverageOfPermanentResources =
      this.permanentResources / this.netFixedAssets
    this.financingOfCurrentAssets =
      this.currentLiabilities / this.workingCapital

    // Rentabilidad
    this.economicProfitability = (this.grossProfit / this.totalAssets) * 100
    this.roe = ((this.grossProfit - this.interests) / this.ownFunds) * 100
  }

  __onChangeEmptyValue(event) {
    event.preventDefault()

    const element = this.shadowRoot.getElementById(event.target.id)

    if (element.value === '') {
      element.value = 0
      element.dispatchEvent(
        new Event('input', { bubbles: true, composed: true })
      )
    }
  }

  __handleWorkingCapitalInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)

    event.target.value = stringValueFormated
    this.workingCapital = parseInt(stringValueFormated)
  }

  __handleNonCurrentAssetsInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)

    event.target.value = stringValueFormated
    this.nonCurrentAssets = parseInt(stringValueFormated)
  }

  __handleNetFixedAssetsInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)

    event.target.value = stringValueFormated
    this.netFixedAssets = parseInt(stringValueFormated)
  }

  __handleCurrentLiabilitiesInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)

    event.target.value = stringValueFormated
    this.currentLiabilities = parseInt(stringValueFormated)
  }

  __handleNonCurrentLiabilitiesInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)

    event.target.value = stringValueFormated
    this.nonCurrentLiabilities = parseInt(stringValueFormated)
  }

  __handleStocksInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)

    event.target.value = stringValueFormated
    this.stocks = parseInt(stringValueFormated)
  }

  __handleGrossProfitInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)

    event.target.value = stringValueFormated
    this.grossProfit = parseInt(stringValueFormated)
  }

  __handleInterestsInput(event) {
    const stringValueFormated = this.__formatInputNumbers(event)

    event.target.value = stringValueFormated
    this.interests = parseInt(stringValueFormated)
  }

  __renderResults(message) {
    this.currentRatioMessage
    return html` <p class="message">${message}</p> `
  }

  __handleFormSubmit(event) {
    event && event.preventDefault()

    this.__formulasToGetMoreData()
    this.__ratiosToCalculate()
  }

  __messageToShow(type, value) {
    console.log(RESULT_MESSAGES[type][value])
    return RESULT_MESSAGES[type][value]
  }

  render() {
    return html`
      <div class="app-wrapper">
        <header>
          <img src="${logo}" class="logo" alt="Logo" />
          <h1>Calcula el estado financiero de tu empresa</h1>
        </header>

        <section class="content-wrapper">
          <form class="form" @submit=${this.__handleFormSubmit}>
            <div class="working-capital data-inputs">
              <label for="working-capital">Activo Circulante</label>
              <input
                type="text"
                id="working-capital"
                min="0"
                value="${this.workingCapital}"
                required
                @input=${this.__handleWorkingCapitalInput}
                @change=${this.__onChangeEmptyValue}
              />
            </div>

            <div class="non-current-assets data-inputs">
              <label for="non-current-assets">Activo No Circulante</label>
              <input
                type="text"
                id="non-current-assets"
                min="0"
                value="${this.nonCurrentAssets}"
                required
                @input=${this.__handleNonCurrentAssetsInput}
                @change=${this.__onChangeEmptyValue}
              />
            </div>

            <div class="net-fixed-assets data-inputs">
              <label for="net-fixed-assets">Inmovilizado Neto</label>
              <input
                type="text"
                id="net-fixed-assets"
                min="0"
                value="${this.netFixedAssets}"
                required
                @input=${this.__handleNetFixedAssetsInput}
                @change=${this.__onChangeEmptyValue}
              />
            </div>

            <div class="current-liabilities data-inputs">
              <label for="current-liabilities">Pasivo Circulante</label>
              <input
                type="text"
                id="current-liabilities"
                min="0"
                value="${this.currentLiabilities}"
                required
                @input=${this.__handleCurrentLiabilitiesInput}
                @change=${this.__onChangeEmptyValue}
              />
            </div>

            <div class="non-current-liabilities data-inputs">
              <label for="non-current-liabilities">Pasivo No Circulante</label>
              <input
                type="text"
                id="non-current-liabilities"
                min="0"
                value="${this.nonCurrentLiabilities}"
                required
                @input=${this.__handleNonCurrentLiabilitiesInput}
                @change=${this.__onChangeEmptyValue}
              />
            </div>

            <div class="stocks data-inputs">
              <label for="stocks">Existencias</label>
              <input
                type="text"
                id="stocks"
                min="0"
                value="${this.stocks}"
                required
                @input=${this.__handleStocksInput}
                @change=${this.__onChangeEmptyValue}
              />
            </div>

            <div class="gross-profit data-inputs">
              <label for="gross-profit">Beneficio Bruto</label>
              <input
                type="text"
                id="gross-profit"
                min="0"
                value="${this.grossProfit}"
                required
                @input=${this.__handleGrossProfitInput}
                @change=${this.__onChangeEmptyValue}
              />
            </div>

            <div class="interests data-inputs">
              <label for="interests">Intereses</label>
              <input
                type="text"
                id="interests"
                min="0"
                value="${this.interests}"
                required
                @input=${this.__handleInterestsInput}
                @change=${this.__onChangeEmptyValue}
              />
            </div>

            <button @click=${this._onClick} part="button">Calcular</button>
          </form>

          <div class="result-card">
            <div class="result">
              <p class="result-value">
                Ratio de Circulante:
                <span>${this.__formatValues(this.currentRatio)}</span>
              </p>
              <p class="msg-default">
                ${this.__messageToShow(
                  'liquidityRatios',
                  checkResultToShowMessage(this.currentRatio)
                )}
              </p>
            </div>
            <div class="result">
              <p class="result-value">
                Acid Test: <span>${this.__formatValues(this.acidTest)}</span>
              </p>
              <p class="msg-default">
                ${this.__messageToShow(
                  'liquidityRatios',
                  checkResultToShowMessage(this.acidTest)
                )}
              </p>
            </div>
            <div class="result">
              <p class="result-value">
                Solvencia Total:
                <span>${this.__formatValues(this.totalSolvency)}</span>
              </p>
              <p class="msg-default">
                ${this.__messageToShow(
                  'totalSolvency',
                  checkResultToShowMessage(this.totalSolvency)
                )}
              </p>
            </div>
            <div class="result">
              <p class="result-value">
                Cobertura de Fondos Propios:
                <span>${this.__formatValues(this.coverageOfOwnFunds)}</span>
              </p>
              <p class="msg-default">
                ${this.__messageToShow(
                  'coverageOfOwnFunds',
                  checkResultToShowMessage(this.coverageOfOwnFunds)
                )}
              </p>
            </div>
            <div class="result">
              <p class="result-value">
                Cobertura de Recursos Permanentes:
                <span
                  >${this.__formatValues(
                    this.coverageOfPermanentResources
                  )}</span
                >
              </p>
              <p class="msg-default">
                ${this.__messageToShow(
                  'coverageOfPermanentResources',
                  checkResultToShowMessage(this.coverageOfPermanentResources)
                )}
              </p>
            </div>
            <div class="result">
              <p class="result-value">
                Financiación de Activo Circulante:
                <span
                  >${this.__formatValues(this.financingOfCurrentAssets)}</span
                >
              </p>
              <p class="msg-default">
                ${this.__messageToShow(
                  'financingOfCurrentAssets',
                  checkResultToShowMessage(this.financingOfCurrentAssets)
                )}
              </p>
            </div>
            <div class="result">
              <p class="result-value">
                Rentabilidad Económica:
                <span>${this.__formatValues(this.economicProfitability)}%</span>
              </p>
            </div>
            <div class="result">
              <p class="result-value">
                ROE - Rentabilidad Financiera:
                <span>${this.__formatValues(this.roe)}%</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    `
  }
}

window.customElements.define(
  'financial-statement-simulator',
  FinancialStatementSimulator
)
