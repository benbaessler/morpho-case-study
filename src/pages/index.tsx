import type { NextPage } from 'next'
import { BorrowPosition } from '../types'
import styles from '../styles/Main.module.css'
import { MOCK_DATA, allAssets } from '../constants'
import { randomNrFromRange } from '../utils';
import { CustomSlider, TableView, Graph, InfoTooltip } from '../components';
import { Button, IconButton } from '@mui/material';
import { VisibilityOff, Visibility, InfoOutlined, Add, RemoveCircleOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true)

  // React hook for dynamically updating the table
  const [markets, setMarkets] = useState<BorrowPosition[]>(MOCK_DATA.markets)
  const [hideUSD, setHideUSD] = useState<boolean>(false)

  const valueLabelFormat = (value: number) => `${value}%`

  // Adds randomly generated borrow position to mock data
  const addPosition = () => {
    // Picking random asset
    const assets = Object.keys(allAssets)
    const symbol = assets[Math.floor(Math.random() * assets.length)] 

    // Generating random numbers for values
    const obj: BorrowPosition = {
      symbol: symbol,
      borrow: randomNrFromRange(0, 150),
      poolAPY: (Number(randomNrFromRange(0, 25)) / 100).toString(),
      isMatched: true,
      userAPY: (Number(randomNrFromRange(0, 25)) / 100).toString(),
      morphoRewards: randomNrFromRange(0, 500),
    }

    // Updating state
    let _markets = markets.slice(0)
    _markets.push(obj)
    setMarkets(_markets)
  }

  // Removes last added borrow position
  const removePosition = () => {
    let _markets = markets.slice(0)
    _markets.pop()
    setMarkets(_markets)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoading(false)
    }
  }, [])

  return <div>{loading ? 
    <img className="loader" src='/images/morpho-logo.svg'/> : 
      <div className={`container ${styles.main}`}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span>
            <h1>Borrow</h1>
          </span>
          <span style={{ justifyContent: 'center' }}>
            <Button 
              variant="text" 
              startIcon={hideUSD ? <Visibility/> : <VisibilityOff/>} 
              className={styles.button} 
              onClick={() => setHideUSD(!hideUSD)}
            >
              USD Value
            </Button>
          </span>
          <span style={{ justifyContent: 'flex-end' }}>
            <InfoTooltip arrow title="Details of your assets currently borrowed on Morpho-Compound.">
              <IconButton aria-label="help" className={styles.button}>
                <InfoOutlined fontSize="small"/>
              </IconButton>
            </InfoTooltip>
          </span>
        </div>
        <div className={styles.graphWrapper}>
          <Graph data={markets}/>
          <div className={styles.graphValue}>
            <h2>{hideUSD ? "＊＊＊＊" : `${Number(MOCK_DATA.totalUSD)}`}</h2>
            <h4><span>APY:</span> {Number(MOCK_DATA.globalAPY) * 100}%</h4>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className={styles.row} style={{ marginBottom: '10px' }}>
          <h3 style={{ marginRight: '10px' }}>Borrow Capacity</h3>
          <InfoTooltip arrow title="Borrow capacity is the value (in $) that you can borrow against your collateral. Going higher than 80% of the total value of your collateral is risky and can lead to liquidation.">
            <IconButton aria-label="help" className={styles.button} style={{ marginRight: '5px' }}>
              <InfoOutlined fontSize="small"/>
            </IconButton>
          </InfoTooltip>
          <CustomSlider
            disabled
            track={false}
            value={Number(Number(MOCK_DATA.borrowCapacity).toFixed(3))}
            valueLabelDisplay="on"
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
          />
        </div>
        <div className={styles.tableContainer}>
          <TableView data={markets}/>
        </div>
        <div className={styles.row} style={{ marginTop: '10px' }}>
          <IconButton aria-label="remove" className={styles.button2} onClick={removePosition} style={{
            alignSelf: 'start'
          }}><RemoveCircleOutline/></IconButton>
          <Button variant="text" endIcon={<Add/>} className={styles.button2} onClick={addPosition}>
            Borrow a new asset
          </Button>
        </div>
      </div>
    </div>}
  </div>
}

export default Home
