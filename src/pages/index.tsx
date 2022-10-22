import type { NextPage } from 'next'
import { BorrowPosition } from '../types'
import styles from '../styles/Main.module.css'
import { MOCK_DATA, allAssets } from '../constants'
import { randomNrFromRange } from '../utils';
import { CustomSlider, AssetsTable, AssetGraph } from '../components';
import { Button, IconButton } from '@mui/material';
import { VisibilityOff, InfoOutlined, Add, RemoveCircleOutline } from '@mui/icons-material';
import { useState } from 'react';

const Home: NextPage = () => {
  // React hook for dynamically updating the table
  const [markets, setMarkets] = useState<BorrowPosition[]>(MOCK_DATA.markets)

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


  return (
    <div className={`container ${styles.main}`}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span>
            <h1>Borrow</h1>
          </span>
          <span style={{ justifyContent: 'center' }}>
            <Button variant="text" startIcon={<VisibilityOff/>} className={styles.button}>
              USD Value
            </Button>
          </span>
          <span style={{ justifyContent: 'flex-end' }}>
            <IconButton aria-label="help" className={styles.button}>
              <InfoOutlined fontSize="small"/>
            </IconButton>
          </span>
        </div>
        <AssetGraph data={markets}/>
      </div>

      <div className="container2">
        <div className={styles.row} style={{ marginBottom: '10px' }}>
          <h3 style={{ marginRight: '10px' }}>Borrow Capacity</h3>
          <IconButton aria-label="help" className={styles.button} style={{ marginRight: '5px' }}>
            <InfoOutlined fontSize="small"/>
          </IconButton>
          <CustomSlider
            disabled
            track={false}
            value={Number(Number(MOCK_DATA.borrowCapacity).toFixed(3))}
            valueLabelDisplay="on"
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
          />
        </div>
        <div className={styles.tableContainer} style={{ 
          minHeight: '200px',
          padding: 0
        }}>
          <AssetsTable data={markets}/>
          <div className={styles.center}>
            {markets.length === 0 ? <Button variant="text" endIcon={<Add/>} className={styles.button2}>
              Borrow a new asset
            </Button> : <></>}
          </div>
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
    </div>
  )
}

export default Home
